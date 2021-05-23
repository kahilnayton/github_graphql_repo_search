export interface RepoTypes {
  selectedRepo: {
    name?: string;
    description?: string;
    languages?: any | null
    createdAt?: string;
    url?: string;
    stargazers: {
      totalCount?: number;
    };
    forkCount?: number;
    issues?: {
      totalCount: number;
    };
    pullRequests?: {
      totalCount: number;
    };
    repositoryTopics?: {
      nodes: [];
    };
  };
}