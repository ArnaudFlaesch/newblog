import './TemplateBlogPost.scss';

import * as React from 'react';

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  location: Location;
}

export default function TemplateBlogPost(props: Readonly<IProps>): React.ReactElement {
  const post = props.data.markdownRemark;
  const { previous, next } = props.data;
  const href = props.location.href;

  const postTitle = post.frontmatter.title;
  const pubDate = post.frontmatter.date;
  const imageUrl = post.frontmatter.image;
  const imageSubtitle = post.frontmatter.imageSubtitle;

  const blogUrlPrefix = '/blog/';

  const facebookShareUrl = 'https://www.facebook.com/sharer.php?u=';
  const twitterShareUrl = 'https://twitter.com/share?url=';
  const linkedinShareUrl = 'https://www.linkedin.com/shareArticle?url=';

  function handleShare(url: string): void {
    window.open(encodeURI(url), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=400,width=700');
  }

  return (
    <div>
      Blog template
      {/*
    <Layout blogView={true} i18nNamespace="blog" location={props.location}>
      <>
        <article className="blog-post" itemScope itemType="https://schema.org/Article">
          <header>
            <h1 itemProp="headline">{postTitle}</h1>
            <p>{format(pubDate, 'dd MMMM yyyy', { locale: fr })}</p>
            {post.frontmatter.description}
          </header>
          <p>
            <img className="article-illustration" src={`${blogUrlPrefix}${imageUrl}`} alt="Illustration article" />
            <em dangerouslySetInnerHTML={{ __html: imageSubtitle }} />
          </p>
          <section dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody" />
          <hr />
          <footer className="blog-post-footer">
            <Bio />
            <div className="share-article-container">
              <span>Partager cet article :</span>
              <div className="share-buttons">
                <a href="#" onClick={() => handleShare(`${facebookShareUrl}${href}`)}>
                  <Tooltip title="Partager sur Facebook">
                    <IconButton color="primary">
                      <Facebook />
                    </IconButton>
                  </Tooltip>
                </a>
                <a href="#" onClick={() => handleShare(`${twitterShareUrl}${href}`)}>
                  <Tooltip title="Partager sur X">
                    <IconButton color="primary">
                      <X />
                    </IconButton>
                  </Tooltip>
                </a>
                <a href="#" onClick={() => handleShare(`${linkedinShareUrl}${href}`)}>
                  <Tooltip title="Partager sur LinkedIn">
                    <IconButton color="primary">
                      <LinkedIn />
                    </IconButton>
                  </Tooltip>
                </a>
              </div>
            </div>
          </footer>
        </article>
        <nav className="blog-post-nav">
          <ul>
            <li>
              {previous && (
                <Link href={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link href={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </>
    </Layout>
    */}
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Head = ({ location, data, pageContext }: { location: Location; data: any; pageContext: any }) => {
  const post = data.markdownRemark;
  const pubDate = post.frontmatter.date;
  const siteUrl = data.site.siteMetadata.siteUrl;
  const blogUrlPrefix = '/blog/';

  const tags = [
    {
      property: 'article:published_time',
      content: pubDate
    },
    {
      property: 'article:modified_time',
      content: pubDate
    },
    {
      property: 'og:pubdate',
      content: pubDate
    }
  ];
  return <div>Template</div>;
};
