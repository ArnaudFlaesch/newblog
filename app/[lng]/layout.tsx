import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import './Layout.scss';
import { dir } from 'i18next';
import Header from 'app/components/header/Header';
import Profile from 'app/components/profile/Profile';
import { useTranslation } from 'app/i18n';
import { languages } from 'app/i18n/settings';

import * as React from 'react';
interface IProps {
  titleCode?: string;
  descriptionCode?: string;
  i18nNamespace: string;
  children: React.ReactElement;
  location: Location;
  blogView?: boolean;
}

const author = 'Arnaud Flaesch';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default async function RootLayout({ children, params: { lng } }: { children: React.ReactNode; params: any }) {
  const { t } = await useTranslation(lng);

  return (
    <html
      lang={lng}
      dir={dir(lng)}
      className={cx('text-black bg-white dark:text-white dark:bg-black', GeistSans.variable, GeistMono.variable)}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <div id="site-container">
            <header id="fixed-header">
              <Header siteTitle={author} />
            </header>
            <div id="site-body">
              <div
                id="profile-container"
                //className={props.blogView ? 'blog-view' : ''}
              >
                <Profile />
              </div>
              <div id="site-page">
                <main id="site-content">
                  <div id="page-header">
                    {/*props.titleCode && <h1 id="page-title">{t(props.titleCode)}</h1>*/}
                    {/*props.location.pathname.endsWith('/blog/') && (
                      <Tooltip title="Flux RSS">
                        <a href={rss}>
                          <RssFeed id="rss-feed-icon" />
                        </a>
                      </Tooltip>
                    )*/}
                  </div>
                  {/*props.descriptionCode && <div id="page-description">{t(props.descriptionCode)}</div>*/}
                  {children}
                </main>
                <footer>
                  © 2024, {t('DEVELOPED.WITH')} <a href="https://www.gatsbyjs.com/">Gatsby</a>. {t('ICONS.BY')}
                  {' : '}
                  <a href="https://icons8.com/">Icons8</a>.
                </footer>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
