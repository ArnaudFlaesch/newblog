import { gql } from '@apollo/client';

export const GITHUB_REPO_QUERY = gql`
  query GetGitHubRepositoryDataQuery($repository: String!) {
    repository(name: $repository, owner: "ArnaudFlaesch") {
      name
      url
      languages(first: 5) {
        edges {
          node {
            name
            color
          }
          size
        }
        totalSize
      }
    }
  }
`;
