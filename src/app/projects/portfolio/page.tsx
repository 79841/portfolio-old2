"use client";
import { projectsData } from "@/data";
import React from "react";
import { ProjectDetail } from "../_components/project";
import { TextHighlighter } from "@/components/text-highlighter";

const PortfolioPage = () => {
  const project = projectsData.portfolio;
  return (
    <ProjectDetail>
      <ProjectDetail.Header>
        <ProjectDetail.Title title={project.name} />
        <ProjectDetail.Description description={project.description} />
      </ProjectDetail.Header>
      <ProjectDetail.Carousel images={project.images} imageWidth="20rem" />
      <ProjectDetail.Content>
        <div>
          직접 개발한 포트폴리오 사이트 입니다. 현재는 사용하지 않지만 제작
          과정에서 많은 것을 배울 수 있었던 의미 있는 프로젝트 입니다.
        </div>
        <div>
          <TextHighlighter>Nextjs14 app router</TextHighlighter>과 shadcn을
          이용하여 개발하였습니다. 이 프로젝트는 페이지 성능 최적화에 중점을 둔
          프로젝트입니다. 페이지에 크기가 큰 이미지가 많고 라이트모드 이미지와
          다크모드 이미지를 각각 제공하면서 페이지 성능이 떨어지는 문제가
          발생했습니다. 깃 허브 페이지로 제공하기 위해 static export를 했기
          때문에 Nextjs의 이미지 최적화 기능을 사용할 수 없었습니다. 직접
          최적화하기 위해 먼저 페이지에 존재하는{" "}
          <TextHighlighter>png나 jpg 이미지를 avif</TextHighlighter>로
          바꾸었습니다. avif 포맷은 이미지 압축률이 뛰어나기에 페이지 성능이
          크게 향상되었습니다. 또한 Nextjs에서 Image 컴포넌트는 lazy loading으로
          우선순위가 미뤄지는데 페이지 로드와 함께 바로 보여야할 이미지는{" "}
          <TextHighlighter>priority를 지정하여 빠르게 로드</TextHighlighter>
          하도록 했습니다. 그 밖에도 CSS 등 여러 최적화를 진행하여 light house
          기준 모바일 성능 94점, 데스크탑 성능 100점을 달성하였습니다.
        </div>
        <div>
          페이지 접근성을 위해{" "}
          <TextHighlighter>
            Opengraph를 사용하여 미디어 노출시 미리보기
          </TextHighlighter>
          와 제목, 설명들이 나오도록 하였고 완전한 반응형 사이트로
          제작하였습니다.
        </div>
        <div>
          또한, 다크모드를 지원하면서 깃허브 히트맵을 표시할 때, 현재 테마가
          시스템일 경우 라이트모드로 고정되는 버그가 있었고{" "}
          <TextHighlighter>
            system에서 사용하는 테마를 가져오는 커스텀 훅
          </TextHighlighter>
          을 만들어 문제를 해결했습니다.
        </div>
        <div>
          포트폴리오라는 간단한 사이트지만 페이지 최적화, opengraph 등
          여러가지로 도움이되는 프로젝트였습니다.
        </div>
      </ProjectDetail.Content>
      <ProjectDetail.GithubUrls githubUrls={project.github} />
      <ProjectDetail.TechStack techStack={project.techStack} />
      <ProjectDetail.Date date={project.date} />
    </ProjectDetail>
  );
};

export default PortfolioPage;
