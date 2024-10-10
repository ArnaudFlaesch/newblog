import './cv.scss';

import Experience from 'app/[lng]/cv/experience/Experience';
import Skills from 'app/[lng]/cv/skills/Skills';
import DetailBlock from 'app/components/detailBlock/DetailBlock';
import { useTranslation } from 'app/i18n';
import { ReactElement } from 'react';
import * as React from 'react';
import { ITranslatableElement } from 'app/model/ITranslatableElement';
import formationData from './data/EducationData';
import { hobbiesList } from './data/HobbiesData';
import JobList from './JobList';
import Certifications from './Certifications';

export default async function Page({ params: { lng } }) {
  function createDetailBlock(title: string, detail: string): ReactElement {
    return <DetailBlock key={title} titleComponent={<h3>{title}</h3>} detailComponent={<div>{detail}</div>} />;
  }

  const { t, i18n } = await useTranslation(lng, 'cv');
  return (
    <div id="cv-page">
      <JobList lng={lng} />

      <Certifications lng={lng} />

      <div id="formation-list">
        <h2>{t('EDUCATION')}</h2>
        {formationData.map((formation) => (
          <Experience key={formation.title_fr} {...formation} language={lng} />
        ))}
      </div>

      <h2 id="skills-title">{t('LANGUAGES.TOOLS')}</h2>
      <Skills />

      <h2 id="hobbies-title">{t('HOBBIES')}</h2>

      <div id="hobbies-list">
        {hobbiesList.map((hobby) =>
          createDetailBlock(
            hobby[lng as keyof ITranslatableElement].title,
            hobby[lng as keyof ITranslatableElement].description
          )
        )}
      </div>
    </div>
  );
}
