import { useEffect, useState, MouseEvent } from "react";
import TextField from "@material-ui/core/TextField";

import './App.css';

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
  return (
    <div className="App">
      <TextField
          onChange={(e: MouseEvent<HTMLElement>) => setSearchQuery((e.target as any).value)}
          id="standard-basic"
          label="Search"
        />
      <pre>{JSON.stringify(result, null, 4)}</pre>
    </div>
  );
}

