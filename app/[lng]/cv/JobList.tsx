'use client';

import { Button } from '@mui/material';

import Experience from 'app/[lng]/cv/experience/Experience';
import { useTranslation } from 'app/i18n';
import jobData from './data/WorkData';
import React from 'react';

export default function JobList(props: any) {
  const DEFAUL_NUMBER_OF_JOBS_TO_SHOW = 3;
  const [jobIndexEnd, setJobIndexEnd] = React.useState<number | undefined>(DEFAUL_NUMBER_OF_JOBS_TO_SHOW);

  function showMoreJobs() {
    setJobIndexEnd(undefined);
  }

  function showLessJobs() {
    setJobIndexEnd(DEFAUL_NUMBER_OF_JOBS_TO_SHOW);
  }

  return (
    <div id="job-list">
      {/*<div id="jobs-header">
        <h2>{t('WORK.EXPERIENCE')}</h2>
        <Button
          id="cv-download-button"
          href={props.i18n.language === 'fr' ? '/CV.pdf' : '/Resume.pdf'}
          variant="contained"
          download={`${t('RESUME')} Arnaud Flaesch.pdf`}
        >
          {t('DOWNLOAD.RESUME')}
        </Button>
      </div>
      {jobData.slice(0, jobIndexEnd).map((job) => (
        <Experience key={job.name} {...job} />
      ))}

      {jobIndexEnd === DEFAUL_NUMBER_OF_JOBS_TO_SHOW && (
        <Button onClick={showMoreJobs}>{t('SEE.MORE.EXPERIENCES')}</Button>
      )}
      {jobIndexEnd !== DEFAUL_NUMBER_OF_JOBS_TO_SHOW && (
        <Button onClick={showLessJobs}>{t('SEE.LESS.EXPERIENCES')}</Button>
      )}
        */}
    </div>
  );
}
