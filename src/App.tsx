import { useEffect, useState, MouseEvent } from "react";
import TextField from "@material-ui/core/TextField";
import { Card, Wrapper, Topics } from "./styles";

import "./App.css";

export default function App() {
  const [searchQuery, setSearchQuery] = useState<String>("");
  const [result, setResult] = useState<any[]>([]);

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

  const repoList = result?.map((repo: any, i: number) => {
    let topics = repo?.repo.repositoryTopics?.nodes;
    topics = topics.length > 0 ? topics : null;

    return (
      <Card key={i}>
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

  return (
    <Wrapper>
      <TextField
        onChange={(e: MouseEvent<HTMLElement>) =>
          setSearchQuery((e.target as any).value)
        }
        id="standard-basic"
        label="Search"
      />
      {repoList}
    </Wrapper>
  );
}
