import './index.scss';

import { useTranslation } from 'app/i18n';
import { getUrlPath } from 'app/utils/TranslationUtils';
import Link from 'next/link';
import * as React from 'react';

export default async function Page({ params: { lng } }) {
  const rssFeedFile = '/rss.xml';

  const { t, i18n } = await useTranslation(lng, 'index');
  return (
    <div id="home-page">
      <div id="site-links">
        <h2>{t('SITE.CONTENT')} :</h2>
        <ul>
          <li>
            <Link href={getUrlPath('/cv/', i18n.language)}>{t('CV.MESSAGE')}</Link>
          </li>
          <li>
            <Link href={getUrlPath('/projets/', i18n.language)}>{t('PROJECTS.MESSAGE')}</Link>
          </li>
          <li>
            <Link href={getUrlPath('/blog/', i18n.language)}>{t('BLOG.MESSAGE')}</Link> (
            <a href={rssFeedFile}>{t('RSS.FEED')}</a>)
          </li>
          <li>
            <Link href={getUrlPath('/contact/', i18n.language)}>{t('CONTACT.MESSAGE')}</Link>
          </li>
        </ul>
      </div>

      <h2 id="blog-title">
        <a href="/blog">{t('RECENT.ARTICLES')}</a>
      </h2>
      <ol>
        {/*posts.map((post: IPost) => (
          <li key={post.fields.slug}>
            <Post {...post} />
          </li>
        ))*/}
      </ol>
    </div>
  );
}
