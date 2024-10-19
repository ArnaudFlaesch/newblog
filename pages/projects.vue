<template>
  <div>
    <NuxtLayout :titleCode="titleCode" :descriptionCode="descriptionCode">
      <RepositoryWidget
        v-for="(repository, index) in projectsData"
        v-bind:key="repository.name"
        :description="projectsInfo[index].description"
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
      { name: 'Dash-Web', description: 'DASH.WEB.PROJECT.DESCRIPTION' },
      { name: 'Dash-WebServices', description: 'DASH.WEBSERVICES.PROJECT.DESCRIPTION' },
      { name: 'CashManager', description: 'CASHMANAGER.PROJECT.DESCRIPTION' },
      { name: 'arnaudflaesch.github.io', description: 'PORTFOLIO.PROJECT.DESCRIPTION' }
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
