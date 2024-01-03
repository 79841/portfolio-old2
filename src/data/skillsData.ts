import { TSkillCategory } from "@/types/Skill";

export const skillsData: TSkillCategory[] = [
  {
    name: "Front-End",
    skills: [
      {
        name: "Javascript",
        defaultImage: "/images/skills/javascript-original.svg",
        proficiency: 100,
        proficiencyDetail:
          "2018년부터 사용한 사용하여 현재는 능숙하게 사용가능한 언어입니다. ECMA6 레퍼런스를 읽어가며 공부하였고 프론트엔드뿐아니라 여러가지 툴 개발과 백엔드 프로젝트를 진행했기에 가장 자신있는 언어입니다.",
      },
      {
        name: "Typescript",
        proficiency: 90,
        defaultImage: "/images/skills/typescript-original.svg",
        proficiencyDetail:
          "작년부터 시작한 모든 프로젝트를 TS로 진행하고 있습니다. 스크립트 언어에 익숙해져 처음 TS를 사용하였을때, 많은 부분이 어색하여 이를 해결하기 위해 온라인 챌린지들을 해결하며 실력을 쌓았고 현재 능숙하게 사용가능합니다.",
      },
      {
        name: "React",
        proficiency: 80,
        proficiencyDetail:
          "메인으로 사용하는 JS 라이브러리 입니다. 리액트 관련 디자인패턴과 최적화에 관심이 많고 18버전에서 나온 서버 컴포넌트를 적극 사용중입니다.",
        defaultImage: "/images/skills/react-original.svg",
      },
      {
        name: "Next.js",
        proficiency: 80,
        proficiencyDetail:
          "가장 자신 있고 능숙한 리액트 프레임워크 입니다. 순수 리액트보다 Next를 이용하여 진행한 프로젝트가 더 많을 정도로 자주 사용하고 작년부터 app router를 사용하여 프로젝트를 진행하고 있습니다. SSR과 hydration 등 Next의 동작원리를 이해하고 있고 Image 컴포넌트를 사용한 이미지 최적화와 최근 이슈가 많은 서버 액션에 관심있습니다.",
        defaultImage: "/images/skills/nextjs-original.svg",
        darkModeImage: "/images/skills/nextjs-white.svg",
      },
      {
        name: "Redux",
        proficiency: 70,
        proficiencyDetail:
          "가장 자주 사용한 상태관리 라이브러리입니다. 최근에 시작한 프로젝트에서는 다른 상태관리 라이브러리로 대체하고 있으나 Context 등을 사용할 때 redux에서 사용하는 패턴인 flux 패턴으로 개발하는 것을 선호합니다.",
        defaultImage: "/images/skills/redux-original.svg",
      },
      {
        name: "Recoil",
        proficiency: 70,
        proficiencyDetail:"상태관리를 하기 위해 필요한 코드가 리덕스에 비해 적고 간편하여 사용하게 되었습니다. 특히, 의존성이 있는 상태를 처리할 때 Selector를 유용하게 사용했습니다.",
        defaultImage: "/images/skills/recoil-logo.avif",
      },
      {
        name: "Zustand",
        proficiency: 60,
        proficiencyDetail:"최근에 사용하게 된 상태관리 라이브러리입니다. "
        defaultImage: "/images/skills/zustand-icon.ico",
      },
      {
        name: "Tanstack Query",
        proficiency: 70,
        defaultImage: "/images/skills/tanstack-original.avif",
      },
      {
        name: "Styled Components",
        proficiency: 70,
        defaultImage: "/images/skills/styled-components-logo.avif",
      },
      {
        name: "Tailwindcss",
        proficiency: 80,
        defaultImage: "/images/skills/tailwindcss-plain.svg",
      },
      {
        name: "Shadcn",
        proficiency: 50,
        defaultImage: "/images/skills/shadcn-original.svg",
        darkModeImage: "/images/skills/shadcn-white.svg",
      },
      {
        name: "Jest",
        proficiency: 40,
        defaultImage: "/images/skills/jest-logo.avif",
      },
      {
        name: "Testing Library",
        proficiency: 40,
        defaultImage: "/images/skills/testing-library-logo.avif",
      },
      {
        name: "Msw",
        proficiency: 30,
        defaultImage: "/images/skills/msw-logo.avif",
      },
      {
        name: "Prisma",
        proficiency: 40,
        defaultImage: "/images/skills/prisma-logo.avif",
      },
    ],
  },
  {
    name: "Back-End",
    skills: [
      {
        name: "Node.js",
        proficiency: 100,
        defaultImage: "/images/skills/nodejs-logo.avif",
      },
      {
        name: "Express.js",
        proficiency: 70,
        defaultImage: "/images/skills/express-original.svg",
        darkModeImage: "/images/skills/express-white.svg",
      },
      {
        name: "Nest.js",
        proficiency: 30,
        defaultImage: "/images/skills/nestjs-plain.svg",
      },
      {
        name: "FastAPI",
        proficiency: 80,
        defaultImage: "/images/skills/fastapi-original.svg",
      },
      {
        name: "PHP",
        proficiency: 60,
        defaultImage: "/images/skills/php-plain.svg",
      },
      {
        name: "Firebase",
        proficiency: 40,
        defaultImage: "/images/skills/firebase-plain.svg",
      },
      {
        name: "Mysql",
        proficiency: 80,
        defaultImage: "/images/skills/mysql-original.svg",
      },
      {
        name: "Mongodb",
        proficiency: 60,
        defaultImage: "/images/skills/mongodb-original.svg",
      },
    ],
  },
  {
    name: "App",
    skills: [
      {
        name: "Flutter",
        proficiency: 70,
        defaultImage: "/images/skills/flutter-original.svg",
      },
    ],
  },
  {
    name: "Deployments",
    skills: [
      {
        name: "Vultr",
        proficiency: 40,
        defaultImage: "/images/skills/vultr-logo.webp",
      },
      {
        name: "Vercel",
        proficiency: 60,
        defaultImage: "/images/skills/vercel-logo.avif",
      },
      {
        name: "Docker",
        proficiency: 30,
        defaultImage: "/images/skills/docker-plain.svg",
      },
    ],
  },
  {
    name: "Status Management",
    skills: [
      {
        name: "Github",
        proficiency: 80,
        defaultImage: "/images/skills/github-original.svg",
      },
      {
        name: "Git",
        proficiency: 80,
        defaultImage: "/images/skills/git-original.svg",
      },
    ],
  },
  {
    name: "Communication",
    skills: [
      {
        name: "Jira",
        proficiency: 60,
        defaultImage: "/images/skills/jira-original.svg",
      },
      {
        name: "Confluence",
        proficiency: 60,
        defaultImage: "/images/skills/confluence-original.svg",
      },
      {
        name: "Slack",
        proficiency: 70,
        defaultImage: "/images/skills/slack-original.svg",
      },
      {
        name: "Discord",
        proficiency: 80,
        defaultImage: "/images/skills/discord-logo.ico",
      },
      {
        name: "Gather",
        proficiency: 50,
        defaultImage: "/images/skills/gather-logo.avif",
      },
      {
        name: "Figma",
        proficiency: 20,
        defaultImage: "/images/skills/figma-original.svg",
      },
    ],
  },
];
