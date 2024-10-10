import './Skills.scss';

import Image from 'next/image';
import * as React from 'react';

import { ReactElement } from 'react';
import DetailBlock from '../../../components/detailBlock/DetailBlock';
import TooltipIcon from '../../../components/tooltip-icon/TooltipIcon';
import { useTranslation } from 'app/i18n';

interface ISkill {
  name: string;
  extension?: string;
}

export default async function Skills() {
  const MAX_HEIGHT = 40;
  const MAX_WIDTH = 40;

  const ICONS_PATH = '/icons/';

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
    { label: 'Tools', skills: toolsSkills }
  ];

  function createSkillBlock(skillName: string, icons: ReactElement[]): ReactElement {
    return (
      <DetailBlock
        key={skillName}
        titleComponent={<h3 className="skill-category-title">{skillName}</h3>}
        detailComponent={<>{icons}</>}
      />
    );
  }

  return (
    <div id="skills-list">
      {skills.map((block) => {
        return createSkillBlock(
          block.label,
          block.skills.map((skill) => {
            return TooltipIcon({
              tooltip: skill.name,
              image: (
                <Image
                  src={`${ICONS_PATH}${block.label.toLowerCase()}/${skill.name.replace(/\s/g, '').toLowerCase()}.${skill.extension ? skill.extension : 'svg'}`}
                  width={MAX_WIDTH}
                  height={MAX_HEIGHT}
                  alt={skill.name}
                />
              )
            });
          })
        );
      })}
    </div>
  );
}
