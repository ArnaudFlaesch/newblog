import './projets.scss';

import { useTranslation } from 'app/i18n';
import { apolloClient } from './repositories/ApolloClient';
import { GITHUB_REPO_QUERY } from './repositories/GitHubApiQuery';
import {
  AngularIcon,
  CypressIcon,
  DockerIcon,
  GatsbyIcon,
  GithubActionsIcon,
  GradleIcon,
  GraphQLIcon,
  JestIcon,
  JUnitIcon,
  KotlinIcon,
  PostgreSQLIcon,
  ReactJSIcon,
  SassIcon,
  SnykIcon,
  SpringBootIcon,
  TypeScriptIcon
} from './repositories/LanguagesIcons';
import RepositoryWidget from './repositories/RepositoryWidget';

export default async function ProjetsPage({ params: { lng } }) {
  const projectsNames = ['Dash-Web', 'Dash-WebServices', 'CashManager', 'arnaudflaesch.github.io'];

  /*
    const description = 'DASH.WEB.PROJECT.DESCRIPTION';
  const description = 'CASHMANAGER.PROJECT.DESCRIPTION';

  const description = 'DASH.WEBSERVICES.PROJECT.DESCRIPTION';
  const description = 'PORTFOLIO.PROJECT.DESCRIPTION';


  const dashWebIcons = [
    <AngularIcon key={'Angular 2'} />,
    <JestIcon key={'Jest'} />,
    <SassIcon key={'Sass'} />,
    <CypressIcon key={'Cypress'} />
  ];

  const cashManagerIcons = [
    <AngularIcon key={'Angular 2'} />,
    <JestIcon key={'Jest'} />,
    <SassIcon key={'Sass'} />,
    <CypressIcon key={'Cypress'} />
  ];

  const dashWebServicesIcons = [
    <KotlinIcon key={'Kotlin'} />,
    <SpringBootIcon key={'Spring Boot'} />,
    <JUnitIcon key={'JUnit 5'} />,
    <GradleIcon key={'Gradle'} />,
    <DockerIcon key={'Docker'} />,
    <PostgreSQLIcon key={'PostgreSQL'} />,
    <SnykIcon key={'Snyk'} />
  ];
*/
  const portfolioIcons = [
    <ReactJSIcon key={'ReactJS'} />,
    <SassIcon key={'Jest'} />,
    <GatsbyIcon key={'Gatsby'} />,
    <TypeScriptIcon key={'TypeScript'} />,
    <GithubActionsIcon key={'Github Actions'} />,
    <GraphQLIcon key={'GraphQL'} />
  ];

  async function getProjectData(projectName: string) {
    const queryResponse = (await apolloClient.query({
      query: GITHUB_REPO_QUERY,
      variables: {
        repository: projectName
      }
    })) as any;

    return (
      <RepositoryWidget
        key={projectName}
        lng={lng}
        description={'description'}
        repoIcons={portfolioIcons}
        repositoryData={queryResponse.data.repository}
      />
    );
  }

  return <div id="projects-list">{projectsNames.map(getProjectData)}</div>;
}
