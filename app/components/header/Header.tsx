import { BookTwoTone, CodeTwoTone, EmailTwoTone, HomeTwoTone, WorkTwoTone } from '@mui/icons-material';
import './Header.scss';

import * as React from 'react';
import { ReactElement } from 'react';
import Link from 'next/link';
import { getAlternativePathFromCurrentPath, getUrlPath } from 'app/utils/TranslationUtils';
import { useTranslation } from 'app/i18n';

interface IUrl {
  icon: ReactElement;
  path: string;
  label: string;
}

export default async function Header(props: Readonly<any>) {
  const urls: IUrl[] = [
    {
      path: '/',
      label: 'HOME.LABEL',
      icon: <HomeTwoTone />
    },
    {
      path: '/cv/',
      label: 'RESUME.LABEL',
      icon: <WorkTwoTone />
    },
    {
      path: '/blog/',
      label: 'BLOG.LABEL',
      icon: <BookTwoTone />
    },
    {
      path: '/projets/',
      label: 'PROJECTS.LABEL',
      icon: <CodeTwoTone />
    },
    {
      path: '/contact/',
      label: 'CONTACT.LABEL',
      icon: <EmailTwoTone />
    }
  ];

  const { t, i18n } = await useTranslation('common');
  i18n.language = 'fr';
  return (
    <span id="portfolio-header">
      <h1>
        <Link lang={i18n.language} href={getUrlPath('/', i18n.language)}>
          {props.siteTitle}
        </Link>
      </h1>
      <div id="right-navbar">
        <div id="url-list">
          {urls.map((url) => (
            <Link
              key={url.path}
              // activeClassName="active"
              lang={i18n.language}
              href={i18n.language === 'fr' ? url.path : `/${i18n.language}${url.path}`}
            >
              {url.icon}
              {t(url.label)}
            </Link>
          ))}
        </div>
        <div id="switch-language">
          {/*i18n.language === 'fr' ? (
            <Link
              href={getAlternativePathFromCurrentPath('en', i18n.language, props.router.pathname)}
              onClick={() => i18n.changeLanguage('en')}
            >
              <img height={30} src="../../images/icons/languages/us-flag.png" alt={'en'}></img>
            </Link>
          ) : (
            <Link
              href={getAlternativePathFromCurrentPath('fr', i18n.language, props.router.pathname)}
              onClick={() => i18n.changeLanguage('fr')}
            >
              <img height={30} src="../../images/icons/languages/french-flag.png" alt={'fr'}></img>
            </Link>
          )*/}
        </div>
      </div>
    </span>
  );
}
