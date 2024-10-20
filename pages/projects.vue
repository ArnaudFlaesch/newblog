<template>
  <div>
    <NuxtLayout :titleCode="titleCode" :descriptionCode="descriptionCode">
      <RepositoryWidget
        v-for="(repository, index) in projectsData"
        v-bind:key="repository.name"
        :description="projectsInfo[index].description"
        :repo-icons="projectsInfo[index].repoIcons"
        :repositoryData="repository"
      />
    </NuxtLayout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { IRepository } from '~/model/IRepository';
export default defineComponent({
  async setup() {
    const projectsInfo = [
      {
        name: 'Dash-Web',
        description: 'DASH.WEB.PROJECT.DESCRIPTION',
        repoIcons: [
          { name: 'Angular 2', label: 'Frontend' },
          { name: 'Jest', label: 'Frontend' },
          { name: 'Sass', label: 'Frontend' },
          { name: 'Cypress', label: 'Frontend', extension: 'png' }
        ]
      },
      {
        name: 'Dash-WebServices',
        description: 'DASH.WEBSERVICES.PROJECT.DESCRIPTION',
        repoIcons: [
          { name: 'Kotlin', label: 'Backend' },
          { name: 'Spring', label: 'Backend' },
          { name: 'JUnit', label: 'Backend', extension: 'png' },
          { name: 'Gradle', label: 'Backend', extension: 'png' },
          { name: 'Docker', label: 'Tools' },
          { name: 'PostgreSQL', label: 'Tools' },
          { name: 'Snyk', label: 'Tools' }
        ]
      },
      {
        name: 'CashManager',
        description: 'CASHMANAGER.PROJECT.DESCRIPTION',
        repoIcons: [
          { name: 'Angular 2', label: 'Frontend' },
          { name: 'Jest', label: 'Frontend' },
          { name: 'Sass', label: 'Frontend' },
          { name: 'Cypress', label: 'Frontend', extension: 'png' }
        ]
      },
      {
        name: 'arnaudflaesch.github.io',
        description: 'PORTFOLIO.PROJECT.DESCRIPTION',
        repoIcons: [
          { name: 'ReactJS', label: 'Frontend', extension: 'png' },
          { name: 'Sass', label: 'Frontend' },
          { name: 'Typescript', label: 'Frontend' },
          { name: 'Github Actions', label: 'Tools', extension: 'png', path: 'github-actions' },
          { name: 'GraphQL', label: 'Tools', extension: 'png' },
          { name: 'Cypress', label: 'Frontend', extension: 'png' }
        ]
      }
    ];
    const projectsData = await Promise.all(projectsInfo.map((projectInfo) => getProjectData(projectInfo.name)));

    return {
      projectsInfo,
      projectsData,
      titleCode: 'PROJECTS.PAGE.TITLE',
      descriptionCode: 'PROJECTS.PAGE.DESCRIPTION'
    };
  }
});

async function getProjectData(projectName: string): Promise<IRepository> {
  const { data } = await useAsyncGql({
    operation: 'GetGitHubRepositoryDataQuery',
    variables: { repository: projectName }
  });
  return data.value.repository as IRepository;
}
</script>

<style lang="scss" scoped>
#projects-list {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 3em;

  > * {
    flex-basis: calc(50% - 1.5em);

    @media (width <= 850px) {
      flex-basis: 100%;
    }
  }
}
</style>
