import { useEffect, useState, MouseEvent } from "react";
import { RepoModal } from "./components/RepoModal";
import {
  Card,
  Wrapper,
  Topics,
  Header,
  H1,
  CardsContainer,
  StyledTextField,
} from "./styles";

import "./App.css";

export default function App() {
  const [searchQuery, setSearchQuery] = useState<String>("");
  const [result, setResult] = useState<any[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<any[]>({});

  const baseUrl = "https://api.github.com/graphql";

  const headers = {
    "Content-Type": "application/json",
    Authorization: "bearer " + process.env.REACT_APP_GITHUB_TOKEN,
  };

  useEffect(() => {
    fetch(baseUrl, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(query_repos),
    })
      .then((response) => response.json())
      .then((resp) => setResult(resp?.data?.search?.repos));
  }, [searchQuery]); // eslint-disable-line react-hooks/exhaustive-deps

  const query_repos = {
    query: `
    query { 
      search (first: 10, type: REPOSITORY, query: "${searchQuery}") {
        codeCount
        repos: edges {
          repo: node {
            ... on Repository {
              url
              name
              description
              repositoryTopics(first: 12) {nodes {topic {name}}}
              languages(first: 3) { nodes {name} }
              forkCount
              pullRequests {totalCount}
              stargazers {totalCount}
              issues {totalCount}
              createdAt
            }
          }
        }
      }
    }
    `,
  };

  const updateSelectedRepo = (repo: any) => {
    setSelectedRepo(repo?.repo);
  };

  const repoList = result?.map((repo: any, i: number) => {
    let topics = repo?.repo.repositoryTopics?.nodes;
    topics = topics.length > 0 ? topics : null;

    return (
      <Card
        key={i}
        onClick={(e: MouseEvent<HTMLElement>) => updateSelectedRepo(repo)}
      >
        <p>{repo?.repo.name}</p>
        {topics ? (
          <Topics>
            {topics?.map((topic: any, i: number) => (
              <p key={topic.topic.name}>{topic.topic.name}</p>
            ))}
          </Topics>
        ) : (
          <Topics>
            <p>No topics on this repo</p>
          </Topics>
        )}
      </Card>
    );
  });

  const clearSelection = () => {
    setSelectedRepo({});
  };

  return (
    <Wrapper>
      <Header>
        <H1>Repository Searcher</H1>
      </Header>
      <StyledTextField
        onChange={(e: MouseEvent<HTMLElement>) =>
          setSearchQuery((e.target as any).value)
        }
        id="standard-basic"
        label="Search"
      />
      <CardsContainer>{repoList}</CardsContainer>
      {Object.keys(selectedRepo).length > 0 && (
        <RepoModal
          selectedRepo={selectedRepo}
          clearSelection={clearSelection}
        />
      )}
    </Wrapper>
  );
}
