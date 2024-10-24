<template>
  <div>
    <NuxtLayout :titleCode="titleCode" :descriptionCode="descriptionCode">
      <div id="cv-page">
        <div id="job-list">
          <div id="jobs-header">
            <h2>{{ $t('WORK.EXPERIENCE') }}</h2>
            <a
              id="cv-download-button"
              :href="locale === 'fr' ? '/CV.pdf' : '/Resume.pdf'"
              color="primary"
              :download="`${$t('RESUME')} Arnaud Flaesch.pdf`"
              ><button>
                {{ $t('DOWNLOAD.RESUME') }}
              </button></a
            >
          </div>
          <Experience :key="job.name" :experience="job" v-for="job in jobData.slice(0, jobIndexEnd)" />

          <v-btn
            color="primary"
            v-if="jobIndexEnd === DEFAULT_NUMBER_OF_JOBS_TO_SHOW"
            @click="() => (jobIndexEnd = undefined)"
          >
            {{ $t('SEE.MORE.EXPERIENCES') }}
          </v-btn>
          <v-btn color="primary" v-else @click="() => (jobIndexEnd = DEFAULT_NUMBER_OF_JOBS_TO_SHOW)">
            {{ $t('SEE.LESS.EXPERIENCES') }}
          </v-btn>
        </div>

        <div id="formation-list">
          <h2>{{ $t('EDUCATION') }}</h2>
          <Experience v-for="formation in formationData" :key="formation.title_fr" :experience="formation" />
        </div>

        <Certifications />

        <h2 id="skills-title">{{ $t('LANGUAGES.TOOLS') }}</h2>
        <Skills />

        <h2 id="hobbies-title">{{ $t('HOBBIES') }}</h2>

        <div id="hobbies-list">
          <DetailBlock v-bind:key="index" v-for="(hobby, index) in hobbiesList">
            <template v-slot:titleComponent
              ><h3>{{ hobby[locale as keyof ITranslatableElement].title }}</h3>
            </template>
            <template v-slot:detailComponent> {{ hobby[locale as keyof ITranslatableElement].description }} </template>
          </DetailBlock>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import formationData from '~/data/EducationData';
import jobData from '~/data/WorkData';
import { hobbiesList } from '~/data/HobbiesData';
import type { ITranslatableElement } from '~/model/ITranslatableElement';
const DEFAULT_NUMBER_OF_JOBS_TO_SHOW = 3;

const { locale } = useI18n();
const jobIndexEnd: Ref<number | undefined> = ref(DEFAULT_NUMBER_OF_JOBS_TO_SHOW);

const titleCode = 'CV.PAGE.TITLE';
const descriptionCode = 'CV.PAGE.DESCRIPTION';
</script>

<style lang="scss" scoped>
#cv-page {
  display: flex;
  flex-direction: column;
  row-gap: 2em;

  #jobs-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    #cv-download-button {
      height: min-content;
    }
  }

  #job-list,
  #formation-list,
  #hobbies-list {
    display: flex;
    flex-direction: column;
    row-gap: 0.5em;
  }
}
</style>
