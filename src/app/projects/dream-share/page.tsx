"use client";
import { projectsData } from "@/data";
import React from "react";
import { ProjectDetail } from "../_components/project";
import { TextHighlighter } from "@/components/text-highlighter";

const DreamSharePage = () => {
  const project = projectsData.dreamShare;
  return (
    <ProjectDetail>
      <ProjectDetail.Header>
        <ProjectDetail.Title title={project.name} />
        <ProjectDetail.Description description={project.description} />
      </ProjectDetail.Header>
      <ProjectDetail.Carousel images={project.images} imageWidth="9rem" />
      <ProjectDetail.Content>
        <div>
          꿈 일기를 작성하여 의미를 분석하고 공유하는 앱입니다. 3인 프로젝트로
          현재 개발 진행중에 있고 프론트엔드와 앱 개발을 맡았습니다.
        </div>
        <div>
          프론트엔드는 Nextjs, react-query, Recoil 등을 사용하였습니다. 일기를
          작성하고 불러오는 과정에서{" "}
          <TextHighlighter>react-query의 Lazy 쿼리</TextHighlighter> 를
          사용했습니다. 이 때{" "}
          <TextHighlighter>
            invalidateQureis가 무시되는 문제가 발생하였고 캐시타임을 조정
          </TextHighlighter>
          하여 해결하였습니다. 이 과정에서 react-query의 staletime과 cachetime을
          이해할 수 있었습니다. 또한 named export한 컴포넌트를 dynamic import 시
          발생하는 TS 오류를 해결하였습니다.
        </div>
        <div>
          앱은 Flutter를 사용하여 개발하고 있습니다. Firebase를 사용하지 않고
          <TextHighlighter>카카오와 구글 등의 소셜로그인</TextHighlighter>을
          구현하면서 OAuth와 OIDC에 대한 개념을 다질 수 있었습니다.
        </div>
        <div>
          이 프로젝트는 <TextHighlighter>Agile 방법론</TextHighlighter>으로
          협업하고 있습니다. 개발 단계에 앞서 페르소나를 통해 기능을 도출하고
          단계적으로 구분하여 구체적인 개발 계획을 세웠습니다. 협업 툴로 Jira와
          Confluence, Slack 등 을 사용하며 적극적으로 의견을 나누고 주기적인
          회의와{" "}
          <TextHighlighter>코드리뷰를 통해 개발 생산성을 향상</TextHighlighter>
          시키고 있습니다.
        </div>
        <div>
          현업 개발자들과 협업하면서 프로젝트 초기에 번거롭고 어색했던 git flow,
          Jira, 코드리뷰 그 밖에 여러 컨벤션 들의 중요성을 깨닳을 수 있고
          주기적인 코드리뷰는 코딩스타일을 잡아가는 계기가 되었습니다.
        </div>
      </ProjectDetail.Content>
      <ProjectDetail.GithubUrls githubUrls={project.github} />
      <ProjectDetail.TechStack techStack={project.techStack} />
      <ProjectDetail.Date date={project.date} />
    </ProjectDetail>
  );
};

export default DreamSharePage;
