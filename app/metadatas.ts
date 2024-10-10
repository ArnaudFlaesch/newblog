import { baseUrl } from './sitemap';
import type { Metadata } from 'next';

const fullName = 'Arnaud Flaesch';
const pwaShortName = 'AF';
const city = 'Paris';
const jobName = "Développeur d'applications";
const company = 'Institut Pasteur';
const title = `${fullName} - ${jobName}`;
const siteName = 'arnaudflaesch.github.io';
const siteUrl = `https://${siteName}`;
const defaultImageUrl = '/profile-picture.jpg';

const linkedinLink = 'https://www.linkedin.com/in/arnaudflaesch/';
const githubLink = 'https://github.com/ArnaudFlaesch';
const scrumOrgLink = 'https://www.scrum.org/user/1355891';
const credlyLink = 'https://www.credly.com/users/arnaud-flaesch/badges';
const mediumLink = 'https://medium.com/@arnaudflaesch';
const stackOverflowLink = 'https://stackoverflow.com/users/12927815/arnaud-flaesch';

const rssFeedFile = '/rss.xml';

export const metadata: Metadata | any = {
  metadataBase: new URL(baseUrl),
  author: fullName,
  imageUrl: `${siteUrl}${defaultImageUrl}`,
  job: jobName,
  company: company,
  city: city,
  keywords: 'arnaud flaesch, web developer, fullstack developer, software engineer',
  siteName: siteName,
  siteUrl: siteUrl,
  title: {
    default: 'Next.js Portfolio Starter',
    template: '%s | Next.js Portfolio Starter'
  },
  description: 'This is my portfolio.',
  socials: {
    linkedin: linkedinLink,
    github: githubLink,
    scrumOrg: scrumOrgLink,
    credly: credlyLink,
    stackOverflow: stackOverflowLink,
    medium: mediumLink
  },
  rss: rssFeedFile,
  openGraph: {
    title: 'My Portfolio',
    description: 'This is my portfolio.',
    url: baseUrl,
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
};
