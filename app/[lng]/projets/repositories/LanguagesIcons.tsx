import TooltipIcon from 'app/components/tooltip-icon/TooltipIcon';
import React from 'react';
import Image from 'next/image';

const ICON_HEIGHT = 40;
const ICON_WIDTH = 40;

export function AngularIcon() {
  return (
    <TooltipIcon
      tooltip="Angular 2"
      image={<Image src="/icons/frontend/angular2.svg" width={ICON_WIDTH} height={ICON_HEIGHT} alt="Angular 2" />}
    />
  );
}
export function JestIcon() {
  return (
    <TooltipIcon
      tooltip="Jest"
      image={<Image src="/icons/frontend/jest.svg" width={ICON_WIDTH} height={ICON_HEIGHT} alt="Jest" />}
    />
  );
}
export function SassIcon() {
  return (
    <TooltipIcon
      tooltip="Sass"
      image={<Image src="/icons/frontend/sass.svg" width={ICON_WIDTH} height={ICON_HEIGHT} alt="Sass" />}
    />
  );
}
export function CypressIcon() {
  return (
    <TooltipIcon
      tooltip="Cypress"
      image={<Image src="/icons/frontend/cypress.png" width={ICON_WIDTH} height={ICON_HEIGHT} alt="Cypress" />}
    />
  );
}
export function KotlinIcon() {
  return (
    <TooltipIcon
      tooltip="Kotlin"
      image={<Image src="/icons/backend/kotlin.svg" width={ICON_WIDTH} height={ICON_HEIGHT} alt="Kotlin" />}
    />
  );
}
export function SpringBootIcon() {
  return (
    <TooltipIcon
      tooltip="Spring Boot"
      image={<Image src="/icons/backend/spring.svg" width={ICON_WIDTH} height={ICON_HEIGHT} alt="Spring Boot" />}
    />
  );
}
export function JUnitIcon() {
  return (
    <TooltipIcon
      tooltip="JUnit 5"
      image={<Image src="/icons/backend/junit.png" width={ICON_WIDTH} height={ICON_HEIGHT} alt="JUnit 5" />}
    />
  );
}
export function GradleIcon() {
  return (
    <TooltipIcon
      tooltip="Gradle"
      image={<Image src="/icons/backend/gradle.png" width={ICON_WIDTH} height={ICON_HEIGHT} alt="Gradle" />}
    />
  );
}
export function DockerIcon() {
  return (
    <TooltipIcon
      tooltip="Docker"
      image={<Image src="/icons/tools/docker.svg" width={ICON_WIDTH} height={ICON_HEIGHT} alt="Docker" />}
    />
  );
}
export function PostgreSQLIcon() {
  return (
    <TooltipIcon
      tooltip="PostgreSQL"
      image={<Image src="/icons/tools/postgresql.svg" width={ICON_WIDTH} height={ICON_HEIGHT} alt="PostgreSQL" />}
    />
  );
}
export function SnykIcon() {
  return (
    <TooltipIcon
      tooltip="Snyk"
      image={<Image src="/icons/tools/snyk.svg" width={ICON_WIDTH} height={ICON_HEIGHT} alt="Snyk" />}
    />
  );
}
export function ReactJSIcon() {
  return (
    <TooltipIcon
      tooltip="ReactJS"
      image={<Image src="/icons/frontend/reactjs.png" width={ICON_WIDTH} height={ICON_HEIGHT} alt="ReactJS" />}
    />
  );
}
export function GatsbyIcon() {
  return (
    <TooltipIcon
      tooltip="Gatsby"
      image={<Image src="/icons/frontend/gatsby.svg" width={ICON_WIDTH} height={ICON_HEIGHT} alt="Gatsby" />}
    />
  );
}
export function TypeScriptIcon() {
  return (
    <TooltipIcon
      tooltip="TypeScript"
      image={<Image src="/icons/frontend/typescript.svg" width={ICON_WIDTH} height={ICON_HEIGHT} alt="TypeScript" />}
    />
  );
}
export function GithubActionsIcon() {
  return (
    <TooltipIcon
      tooltip="Github Actions"
      image={
        <Image src="/icons/tools/github-actions.png" width={ICON_WIDTH} height={ICON_HEIGHT} alt="Github Actions" />
      }
    />
  );
}
export function GraphQLIcon() {
  return (
    <TooltipIcon
      tooltip="GraphQL"
      image={<Image src="/icons/tools/graphql.png" width={ICON_WIDTH} height={ICON_HEIGHT} alt="GraphQL" />}
    />
  );
}
