import { TSkillCategory, TSkillData } from "@/types/Skill";

export const skillsData: { category: TSkillCategory; skills: TSkillData[] }[] =
  [
    {
      category: "Front-End",
      skills: [
        {
          name: "Javascript",
          defaultImage: "/images/skills/javascript-original.svg",
        },
        {
          name: "Typescript",
          defaultImage: "/images/skills/typescript-original.svg",
        },
        {
          defaultImage: "/images/skills/react-original.svg",
          name: "React",
        },
        {
          defaultImage: "/images/skills/redux-original.svg",
          name: "Redux",
        },
        {
          defaultImage: "/images/skills/nextjs-original.svg",
          darkModeImage: "/images/skills/nextjs-white.svg",
          name: "Next.js",
        },
        {
          defaultImage: "/images/skills/recoil-logo.avif",
          name: "Recoil",
        },
        {
          name: "Zustand",
          defaultImage: "/images/skills/bear.avif",
        },
        {
          defaultImage: "/images/skills/tanstack-original.avif",
          name: "Tanstack Query",
        },
        {
          name: "Styled Components",
          defaultImage: "/images/skills/styled-components-logo.avif",
        },
        {
          defaultImage: "/images/skills/tailwindcss-plain.svg",
          name: "Tailwindcss",
        },
        {
          defaultImage: "/images/skills/shadcn-original.svg",
          darkModeImage: "/images/skills/shadcn-white.svg",
          name: "Shadcn",
        },
        {
          name: "Jest",
          defaultImage: "/images/skills/jest-logo.avif",
        },
        {
          defaultImage: "/images/skills/testing-library-logo.avif",
          name: "Testing Library",
        },
        { defaultImage: "/images/skills/msw-logo.avif", name: "Msw" },
        {
          defaultImage: "/images/skills/prisma-logo.avif",
          name: "Prisma",
        },
      ],
    },
    {
      category: "Back-End",
      skills: [
        {
          defaultImage: "/images/skills/nodejs-logo.avif",
          name: "Node.js",
        },
        {
          defaultImage: "/images/skills/express-original.svg",
          darkModeImage: "/images/skills/express-white.svg",
          name: "Express.js",
        },
        {
          defaultImage: "/images/skills/nestjs-plain.svg",
          name: "Nest.js",
        },
        {
          defaultImage: "/images/skills/fastapi-original.svg",
          name: "FastAPI",
        },
        {
          defaultImage: "/images/skills/php-plain.svg",
          name: "PHP",
        },
        {
          defaultImage: "/images/skills/firebase-plain.svg",
          name: "Firebase",
        },
        {
          defaultImage: "/images/skills/mysql-original.svg",
          name: "Mysql",
        },
        {
          defaultImage: "/images/skills/mongodb-original.svg",
          name: "Mongodb",
        },
      ],
    },
    {
      category: "App",
      skills: [
        {
          defaultImage: "/images/skills/flutter-original.svg",
          name: "Flutter",
        },
      ],
    },
    {
      category: "Deployments",
      skills: [
        {
          defaultImage: "/images/skills/vultr-logo.webp",
          name: "Vultr",
        },
        {
          defaultImage: "/images/skills/firebase-plain.svg",
          name: "Firebase",
        },
        {
          defaultImage: "/images/skills/vercel-logo.avif",
          name: "Vercel",
        },
        {
          defaultImage: "/images/skills/docker-plain.svg",
          name: "Docker",
        },
      ],
    },
    {
      category: "Status Management",
      skills: [
        {
          defaultImage: "/images/skills/github-original.svg",
          name: "Github",
        },
        {
          defaultImage: "/images/skills/git-original.svg",
          name: "Git",
        },
      ],
    },
    {
      category: "Communication",
      skills: [
        {
          defaultImage: "/images/skills/jira-original.svg",
          name: "Jira",
        },
        {
          defaultImage: "/images/skills/confluence-original.svg",
          name: "Confluence",
        },
        {
          defaultImage: "/images/skills/slack-original.svg",
          name: "Slack",
        },
        {
          defaultImage: "/images/skills/discord-logo.ico",
          name: "Discord",
        },
        {
          defaultImage: "/images/skills/gather-logo.avif",
          name: "Gather",
        },
        {
          defaultImage: "/images/skills/figma-original.svg",
          name: "Figma",
        },
      ],
    },
  ];
