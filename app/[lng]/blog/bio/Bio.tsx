import Avatar from '@mui/material/Avatar/Avatar';
import Tooltip from '@mui/material/Tooltip/Tooltip';
import * as React from 'react';

import './Bio.scss';
import { metadata } from 'app/metadatas';
import Image from 'next/image';

export default function Bio(): React.ReactElement {
  const author = metadata.author;
  const socials = metadata.socials;
  const linkedinLink = socials.linkedin;
  const githubLink = socials.github;

  return (
    <div id="bio">
      <Avatar className="bio-avatar" alt={author} sx={{ width: 100, height: 100 }} src="/profile-picture.jpg" />
      <span>
        Écrit par <strong>{author}</strong>
      </span>
      <div id="social-links-bio">
        <Tooltip title="LinkedIn">
          <a href={linkedinLink}>
            <Image src="/icons/socials/linkedin-icon.png" alt="linkedin" />
          </a>
        </Tooltip>

        <a href={githubLink}>
          <Tooltip title="Github">
            <div>
              <Image src="/images/icons/socials/github-icon.png" alt="github" />
            </div>
          </Tooltip>
        </a>
      </div>
    </div>
  );
}
