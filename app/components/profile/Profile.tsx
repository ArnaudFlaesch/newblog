import './Profile.scss';

import { LocationOn, Work } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import Avatar from '@mui/material/Avatar/Avatar';
import { useTranslation } from 'app/i18n';
import { metadata } from 'app/metadatas';
import { getUrlPath } from 'app/utils/TranslationUtils';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default async function Profile() {
  const author = metadata.author;
  const job = metadata.job;
  const company = metadata.company;
  const city = metadata.city;

  const socials = metadata.socials;
  const linkedinLink = socials.linkedin;
  const githubLink = socials.github;
  const scrumOrgLink = socials.scrumOrg;
  const credlyLink = socials.credly;
  const mediumLink = socials.medium;
  const stackOverflowLink = socials.stackOverflow;

  const { t } = await useTranslation('fr');

  return (
    <div id="profile">
      <Link href={getUrlPath('/', 'fr')}>
        <Avatar id="bio-avatar" alt={author} sx={{ width: 100, height: 100 }}>
          <Image src="/profile-picture.jpg" width={100} height={100} alt="" />
        </Avatar>
      </Link>
      <div id="bio">
        <div id="work">
          <Work />
          {t(job)} <br /> {t('AT')}
          {company}
        </div>
        <div id="location">
          <LocationOn />
          {city}
        </div>
      </div>
      <div id="social-links">
        <div id="linkedinLink">
          <a href={linkedinLink} className="social-link">
            <Tooltip title="LinkedIn">
              <Image src="/icons/socials/linkedin-icon.png" height={40} width={40} alt="linkedin" />
            </Tooltip>
            <span>{t('LINKEDIN.PROFILE')}</span>
          </a>
        </div>

        <div id="githubLink">
          <a href={githubLink} className="social-link">
            <Tooltip title="Github">
              <Image src="/icons/socials/github-icon.png" height={40} width={40} alt="github" />
            </Tooltip>
            <span>{t('GITHUB.PROFILE')}</span>
          </a>
        </div>

        <div id="scrumOrgLink">
          <a href={scrumOrgLink} className="social-link">
            <Tooltip title="Scrum.org">
              <Image src="/icons/socials/scrum-org-icon.png" height={40} width={40} alt="scrum.org" />
            </Tooltip>
            <span>{t('SCRUM.ORG.PROFILE')}</span>
          </a>
        </div>

        <div id="credlyLink">
          <a href={credlyLink} className="social-link">
            <Tooltip title="Certifications">
              <Image src="/icons/socials/credly-icon.png" height={40} width={40} alt="credly" />
            </Tooltip>
            <span>{t('CERTIFICATIONS')}</span>
          </a>
        </div>

        <div id="mediumLink">
          <a href={mediumLink} className="social-link">
            <Tooltip title="Medium">
              <Image src="/icons/socials/medium-icon.png" height={40} width={40} alt="medium" />
            </Tooltip>
            <span>{t('MEDIUM.PROFILE')}</span>
          </a>
        </div>

        <div id="stackoverflowLink">
          <a href={stackOverflowLink} className="social-link">
            <Tooltip title="Stack Overflow">
              <Image src="/icons/socials/stackoverflow-icon.png" height={40} width={40} alt="stackoverflow" />
            </Tooltip>
            <span>{t('STACK.OVERFLOW.PROFILE')}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
