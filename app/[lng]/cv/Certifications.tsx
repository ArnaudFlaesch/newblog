'use client';
import 'react-photo-view/dist/react-photo-view.css';
import { Tooltip } from '@mui/material';
import DetailBlock from 'app/components/detailBlock/DetailBlock';
import { getLocaleFromLanguage } from 'app/utils/DateUtils';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Image from 'next/image';
import * as React from 'react';
import { format } from 'date-fns';
import { useTranslation } from 'app/i18n/client';

interface IProps {
  lng: string;
}

export default function Certifications(props: IProps) {
  // const scrumOrgLink = metadata.socials.scrumOrg;
  const githubActionsBadgeLink = 'https://www.credly.com/badges/bcc83162-8396-4e95-b73d-b89ad2658027';
  const githubAdvancedSecurityBadgeLink = 'https://www.credly.com/badges/a20775eb-8713-4013-b0fe-d5e359a543e8';
  const githubFoundationsBadgeLink = 'https://www.credly.com/badges/85ef131c-c299-4bd5-aa55-77141c16c822';
  const githubCopilotBadgeLink = 'https://www.credly.com/badges/e8fd9833-c41b-40b9-8af6-7c7105b7f5c2';
  const leadingSafeBadgeLink = 'https://www.credly.com/badges/73047751-ef1f-47b9-a0d1-6c4f24319c61';
  const googleCloudDigitalLeaderBadgeLink = 'https://www.credly.com/badges/b849f990-e002-40ac-b8dd-ac3f5f9fa211';
  const googleCloudProfessionalDeveloperBadgeLink =
    'https://www.credly.com/badges/6fc2687b-3a79-4828-b164-f5da38917bd0';

  const { t, i18n } = useTranslation(props.lng, 'cv');

  return (
    <div id="certifications-list">
      <h2>Certifications</h2>
      <DetailBlock
        titleComponent={
          <h4>{`Google Cloud Professional Cloud Developer ${t('AND')} Digital Leader - ${format(new Date(2024, 5, 4), 'MMMM yyyy', { locale: getLocaleFromLanguage(i18n.language) })}`}</h4>
        }
        detailComponent={
          <div className="certifications-logos">
            <Tooltip title="Google Cloud Professional Cloud Developer">
              <a href={googleCloudProfessionalDeveloperBadgeLink}>
                <Image
                  height={105}
                  width={105}
                  src="/certifications/professional-cloud-developer-certification.png"
                  alt={'Google Cloud Professional Cloud Developer'}
                />
              </a>
            </Tooltip>
            <Tooltip title="Google Cloud Digital Leader">
              <a href={googleCloudDigitalLeaderBadgeLink}>
                <Image
                  height={105}
                  width={105}
                  src="/certifications/cloud-digital-leader-certification.png"
                  alt={'Google Cloud Digital Leader'}
                />
              </a>
            </Tooltip>
          </div>
        }
      />

      <DetailBlock
        titleComponent={
          <>
            <h4>{`GitHub Actions ${t('AND')} Advanced Security -
                    ${format(new Date(2024, 2, 1), 'MMMM yyyy', { locale: getLocaleFromLanguage(i18n.language) })}`}</h4>
            <br />
            <h4>{`GitHub Foundations -
                    ${format(new Date(2024, 6, 5), 'MMMM yyyy', { locale: getLocaleFromLanguage(i18n.language) })}`}</h4>
          </>
        }
        detailComponent={
          <div className="certifications-logos">
            <Tooltip title="GitHub Actions">
              <a href={githubActionsBadgeLink}>
                <Image height={105} width={105} src="/certifications/github-actions.png" alt={'GitHub Actions'} />
              </a>
            </Tooltip>
            <Tooltip title="GitHub Advanced Security">
              <a href={githubAdvancedSecurityBadgeLink}>
                <Image
                  height={105}
                  width={105}
                  src="/certifications/github-advanced-security.png"
                  alt={'GitHub Advanced Security'}
                />
              </a>
            </Tooltip>
            <Tooltip title="GitHub Foundations">
              <a href={githubFoundationsBadgeLink}>
                <Image
                  height={105}
                  width={105}
                  src="/certifications/github-foundations.png"
                  alt={'GitHub Foundations'}
                />
              </a>
            </Tooltip>
            <Tooltip title="GitHub Copilot">
              <a href={githubCopilotBadgeLink}>
                <Image height={105} width={105} src="/certifications/github-copilot.png" alt={'GitHub Copilot'} />
              </a>
            </Tooltip>
          </div>
        }
      />

      {/*<DetailBlock
        titleComponent={
          <h4>{`Professional Scrum Master 1 ${t('AND')} 2 -
                    ${format(new Date(2023, 11, 1), 'MMMM yyyy', { locale: getLocaleFromLanguage(i18n.language) })}`}</h4>
        }
        detailComponent={
          <div className="certifications-logos">
            <Tooltip title="PSM 1">
              <a href={scrumOrgLink}>
                <Image
                  height={100}
                  width={100}
                  src="/certifications/professional-scrum-master-i-psm-i.png"
                  alt={'PSM 1'}
                />
              </a>
            </Tooltip>
            <Tooltip title="PSM 2">
              <a href={scrumOrgLink}>
                <Image
                  height={100}
                  width={100}
                  src="/certifications/professional-scrum-master-ii-psm-ii.png"
                  alt={'PSM 2'}
                />
              </a>
            </Tooltip>
          </div>
        }
      />*/}

      <DetailBlock
        titleComponent={
          <h4>{`SAFe 6 Agilist -
                    ${format(new Date(2024, 4, 16), 'MMMM yyyy', { locale: getLocaleFromLanguage(i18n.language) })}`}</h4>
        }
        detailComponent={
          <div className="certifications-logos">
            <Tooltip title="SAFe 6 Agilist">
              <a href={leadingSafeBadgeLink}>
                <Image
                  height={95}
                  width={95}
                  src="/certifications/certified-safe-6-agilist.png"
                  alt={'SAFe 6 Agilist'}
                />
              </a>
            </Tooltip>
          </div>
        }
      />

      <DetailBlock
        titleComponent={
          <h4>{`${t('SUSTAINABLE.IT.KNOWLEDGE.CERTIFICATE')} - 
                    ${format(new Date(2024, 3, 1), 'MMMM yyyy', { locale: getLocaleFromLanguage(i18n.language) })}`}</h4>
        }
        detailComponent={
          <div className="certifications-logos">
            <PhotoProvider>
              <PhotoView src="/certifications/numerique-responsable.png">
                <Tooltip title={t('SUSTAINABLE.IT.KNOWLEDGE.CERTIFICATE')}>
                  <Image
                    className="large-image"
                    src="/certifications/numerique-responsable.png"
                    width={100}
                    height={100}
                    alt={t('SUSTAINABLE.IT.KNOWLEDGE.CERTIFICATE') ?? ''}
                  />
                </Tooltip>
              </PhotoView>
            </PhotoProvider>
          </div>
        }
      />
    </div>
  );
}
