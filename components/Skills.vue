<template>
  <div id="skills-list">
    <DetailBlock :key="index" v-for="(block, index) in skills">
      <template v-slot:titleComponent
        ><h3 class="skill-category-title">{{ $t(block.label) }}</h3></template
      >

      <template v-slot:detailComponent>
        <TooltipIcon v-bind:key="index" v-for="(skill, index) in block.skills" :tooltip="skill.name">
          <template v-slot:icon
            ><NuxtImg
              :src="`${ICONS_PATH}${block.label.toLowerCase()}/${skill.name.replace(/\s/g, '').toLowerCase()}.${skill.extension ? skill.extension : 'svg'}`"
              :width="MAX_WIDTH"
              :height="MAX_HEIGHT"
              :alt="skill.name"
          /></template>
        </TooltipIcon>
      </template>
    </DetailBlock>
  </div>
</template>

<script lang="ts" setup>
import TooltipIcon from './TooltipIcon.vue';

const MAX_HEIGHT = 40;
const MAX_WIDTH = 40;

const ICONS_PATH = '/icons/';

interface ISkill {
  name: string;
  extension?: string;
}

const frontendSkills: ISkill[] = [
  { name: 'Angular 2' },
  { name: 'ReactJS', extension: 'png' },
  { name: 'Sass' },
  { name: 'Jest' },
  { name: 'JQuery', extension: 'png' },
  { name: 'Javascript' },
  { name: 'Typescript' },
  { name: 'Cypress', extension: 'png' },
  { name: 'Gatsby' },
  { name: 'ChartJS' },
  { name: 'HTML', extension: 'png' },
  { name: 'CSS', extension: 'png' },
  { name: 'TailwindCSS', extension: 'png' }
];

const backendSkills: ISkill[] = [
  { name: 'Java', extension: 'png' },
  { name: 'Kotlin' },
  { name: 'Spring' },
  { name: 'JUnit', extension: 'png' },
  { name: 'Gradle', extension: 'png' }
];

const toolsSkills: ISkill[] = [
  { name: 'Docker' },
  { name: 'Git' },
  { name: 'GitHub', extension: 'png' },
  { name: 'Github-Actions', extension: 'png' },
  { name: 'Jenkins' },
  { name: 'Heroku' },
  { name: 'GraphQL', extension: 'png' },
  { name: 'MySQL', extension: 'png' },
  { name: 'PostgreSQL' },
  { name: 'MongoDB', extension: 'png' },
  { name: 'Scrum', extension: 'png' },
  { name: 'Nodejs' },
  { name: 'Linux', extension: 'png' },
  { name: 'Snyk' },
  { name: 'Sonarcloud', extension: 'png' }
];

const skills: { label: string; skills: ISkill[] }[] = [
  { label: 'Frontend', skills: frontendSkills },
  { label: 'Backend', skills: backendSkills },
  { label: 'TOOLS', skills: toolsSkills }
];
</script>

<style lang="scss">
#skills-list {
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  .skill-category-title {
    margin: auto;
  }

  .detail-info {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
  }
}
</style>
