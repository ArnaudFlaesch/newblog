import './blog.scss';

import Post from 'app/[lng]/blog/post/Post';
import { useTranslation } from 'app/i18n';
import * as React from 'react';

export default async function Page({ params: { lng } }) {
  const { t } = await useTranslation(lng);

  return (
    <>
      <ol id="articles-list">
        {/*posts?.map((post: IPost) => (
        <li key={post.fields.slug}>
          <Post {...post} />
        </li>
      ))*/}
      </ol>
    </>
  );
}
