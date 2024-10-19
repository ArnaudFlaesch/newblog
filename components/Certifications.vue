<template>
  <div id="certifications-list">
    <h2>Certifications</h2>

    <DetailBlock>
      <template v-slot:titleComponent>
        <h4>
          Google Cloud Professional Cloud Developer {{ $t('AND') }} Digital Leader -
          {{ format(new Date(2024, 5, 4), 'MMMM yyyy', { locale: getLocaleFromLanguage(locale) }) }}
        </h4>
      </template>
      <template v-slot:detailComponent>
        <div class="certifications-logos">
          <v-tooltip text="Google Cloud Professional Cloud Developer" location="top">
            <template v-slot:activator="{ props }">
              <a v-bind="props" :href="googleCloudProfessionalDeveloperBadgeLink">
                <NuxtImg
                  width="105"
                  src="/certifications/professional-cloud-developer-certification.png"
                  alt="Google Cloud Professional Cloud Developer"
                />
              </a>
            </template>
          </v-tooltip>

          <v-tooltip text="Google Cloud Digital Leader" location="top">
            <template v-slot:activator="{ props }">
              <a v-bind="props" :href="googleCloudDigitalLeaderBadgeLink">
                <NuxtImg
                  width="105"
                  src="/certifications/cloud-digital-leader-certification.png"
                  alt="Google Cloud Digital Leader"
                />
              </a>
            </template>
          </v-tooltip>
        </div>
      </template>
    </DetailBlock>

    <DetailBlock>
      <template v-slot:titleComponent>
        <h4>
          GitHub Actions {{ $t('AND') }} Advanced Security -
          {{ format(new Date(2024, 2, 1), 'MMMM yyyy', { locale: getLocaleFromLanguage(locale) }) }}
        </h4>
        <br />
        <h4>
          GitHub Foundations -
          {{ format(new Date(2024, 6, 5), 'MMMM yyyy', { locale: getLocaleFromLanguage(locale) }) }}
        </h4>
      </template>
      <template v-slot:detailComponent>
        <div class="certifications-logos">
          <v-tooltip text="GitHub Actions" location="top">
            <template v-slot:activator="{ props }">
              <a v-bind="props" :href="githubActionsBadgeLink">
                <NuxtImg width="105" src="/certifications/github-actions.png" alt="GitHub Actions" />
              </a>
            </template>
          </v-tooltip>

          <v-tooltip text="GitHub Advanced Security" location="top">
            <template v-slot:activator="{ props }">
              <a v-bind="props" :href="githubAdvancedSecurityBadgeLink">
                <NuxtImg
                  width="105"
                  src="/certifications/github-advanced-security.png"
                  alt="GitHub Advanced Security"
                />
              </a>
            </template>
          </v-tooltip>
          <v-tooltip text="GitHub Foundations" location="top">
            <template v-slot:activator="{ props }">
              <a v-bind="props" :href="githubFoundationsBadgeLink">
                <NuxtImg width="105" src="/certifications/github-foundations.png" alt="GitHub Foundations" />
              </a>
            </template>
          </v-tooltip>

          <v-tooltip text="GitHub Copilot" location="top">
            <template v-slot:activator="{ props }">
              <a v-bind="props" :href="githubCopilotBadgeLink">
                <NuxtImg width="105" src="/certifications/github-copilot.png" alt="GitHub Copilot" />
              </a>
            </template>
          </v-tooltip>
        </div>
      </template>
    </DetailBlock>

    <DetailBlock>
      <template v-slot:titleComponent>
        <h4>
          Professional Scrum Master 1 {{ $t('AND') }} 2 -
          {{ format(new Date(2023, 11, 1), 'MMMM yyyy', { locale: getLocaleFromLanguage(locale) }) }}
        </h4>
      </template>
      <template v-slot:detailComponent>
        <div class="certifications-logos">
          <v-tooltip text="Professional Scrum Master 1" location="top">
            <template v-slot:activator="{ props }">
              <a v-bind="props" :href="scrumOrgLink">
                <NuxtImg width="105" src="/certifications/professional-scrum-master-i-psm-i.png" alt="PSM 1" />
              </a>
            </template>
          </v-tooltip>

          <v-tooltip text="Professional Scrum Master 2" location="top">
            <template v-slot:activator="{ props }">
              <a v-bind="props" :href="scrumOrgLink">
                <NuxtImg width="105" src="/certifications/professional-scrum-master-ii-psm-ii.png" alt="PSM 2" />
              </a>
            </template>
          </v-tooltip>
        </div>
      </template>
    </DetailBlock>

    <DetailBlock>
      <template v-slot:titleComponent>
        <h4>
          SAFe 6 Agilist - {{ format(new Date(2024, 4, 16), 'MMMM yyyy', { locale: getLocaleFromLanguage(locale) }) }}
        </h4>
      </template>
      <template v-slot:detailComponent>
        <div class="certifications-logos">
          <v-tooltip text="SAFe 6 Agilist" location="top">
            <template v-slot:activator="{ props }">
              <a v-bind="props" :href="leadingSafeBadgeLink">
                <NuxtImg width="105" src="/certifications/certified-safe-6-agilist.png" alt="SAFe 6 Agilist" />
              </a>
            </template>
          </v-tooltip>
        </div>
      </template>
    </DetailBlock>

    <!--
          <DetailBlock
            titleComponent={
              <h4>{`${t('SUSTAINABLE.IT.KNOWLEDGE.CERTIFICATE')} - 
                    ${format(new Date(2024, 3, 1), 'MMMM yyyy', { locale: getLocaleFromLanguage(i18n.language) })}`}</h4>
            }
            detailComponent={
              <div class="certifications-logos">
                <PhotoProvider>
                  <PhotoView src="/certifications/numerique-responsable.png">
                    <Tooltip title={t('SUSTAINABLE.IT.KNOWLEDGE.CERTIFICATE')}>
                      <img
                        class="large-image"
                        src="/certifications/numerique-responsable.png"
                        alt={t('SUSTAINABLE.IT.KNOWLEDGE.CERTIFICATE') ?? ''}
                      />
                    </Tooltip>
                  </PhotoView>
                </PhotoProvider>
              </div>
            }
          />
-->
  </div>
</template>

<script lang="ts" setup>
import type { Locale } from 'date-fns';
import { fr, enUS } from 'date-fns/locale';
import { format } from 'date-fns';

const scrumOrgLink = 'https://www.scrum.org/user/1355891'; //props.data.site.siteMetadata.socials.scrumOrg;
const githubActionsBadgeLink = 'https://www.credly.com/badges/bcc83162-8396-4e95-b73d-b89ad2658027';
const githubAdvancedSecurityBadgeLink = 'https://www.credly.com/badges/a20775eb-8713-4013-b0fe-d5e359a543e8';
const githubFoundationsBadgeLink = 'https://www.credly.com/badges/85ef131c-c299-4bd5-aa55-77141c16c822';
const githubCopilotBadgeLink = 'https://www.credly.com/badges/e8fd9833-c41b-40b9-8af6-7c7105b7f5c2';
const leadingSafeBadgeLink = 'https://www.credly.com/badges/73047751-ef1f-47b9-a0d1-6c4f24319c61';
const googleCloudDigitalLeaderBadgeLink = 'https://www.credly.com/badges/b849f990-e002-40ac-b8dd-ac3f5f9fa211';
const googleCloudProfessionalDeveloperBadgeLink = 'https://www.credly.com/badges/6fc2687b-3a79-4828-b164-f5da38917bd0';

const { locale } = useI18n();
function getLocaleFromLanguage(language: string): Locale {
  return language === 'fr' ? fr : enUS;
}
</script>

<style lang="scss" scoped>
#certifications-list {
  display: flex;
  flex-direction: column;
  row-gap: 0.5em;
}

.certifications-logos {
  display: flex;
  flex-flow: row wrap;
  column-gap: 1em;
  justify-content: space-evenly;
}

img {
  &.large-image {
    max-width: 35%;
    cursor: pointer;
  }
}
</style>
