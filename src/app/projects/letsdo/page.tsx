"use client";
import { projectsData } from "@/data";
import React from "react";
import { ProjectDetail } from "../_components/project";
import { TextHighlighter } from "@/components/text-highlighter";

const LetsdoPage = () => {
  const project = projectsData.letsdo;
  return (
    <ProjectDetail>
      <ProjectDetail.Header>
        <ProjectDetail.Title title={project.name} />
        <ProjectDetail.Description description={project.description} />
      </ProjectDetail.Header>
      <ProjectDetail.Images images={project.images} imageWidth="9rem" />
      <ProjectDetail.Content>
        <div>
          척수 장애인들에게 건강 관리를 위한 프로젝트를 제공하고 간편하게 상담할
          수 있는 모바일 앱입니다. 디자이너와 협업한 2인프로젝트로 앱 개발과
          백엔드 개발을 맡았습니다.
        </div>
        <div>
          고객이 사용할 사용자용 앱과 고객과 상담하고 프로젝트 수행여부를 관리할
          관리자용 앱, 인증과 API를 제공하는 백엔드를 개발하였습니다. 앱은
          Flutter를 사용하여 개밣했고 백엔드는 FastAPI를 사용했습니다.
        </div>
        <div>
          앱의 메인 기능은 대시보드와 실시간 채팅 기능입니다. 먼저 대시보드는
          서버로부터 데이터를 받아와 Flutter 차트 라이브러리를 이용하여
          표시했습니다.{" "}
          <TextHighlighter>
            대시보드가 실시간으로 반영되기 위해 서브스크린 네비게이션에 콜백을
            추가하고 프로바이더로 상태를 제공
          </TextHighlighter>
          하였습니다.
        </div>
        <div>
          실시간 채팅 기능을 위해 웹소켓을 사용했습니다. 스크린이 빌드될 때 매번
          연결을 새로 맺는 것이 문제가 되었고{" "}
          <TextHighlighter>
            웹 소켓 관리자를 만들고 연결 상태를 프로바이더로 제공
          </TextHighlighter>
          하여 연결이 중복되지 않도록 했습니다. 또한 사용자가 채팅에 접속해 있지
          않을 때 사용자에게 알림을 주기 위해
          <TextHighlighter>redis를 사용하여 채팅테이블을 구독</TextHighlighter>
          하고 새로운 메세지가 생성되었을 때 알림을 전송하도록 했습니다.
        </div>
        <div>
          개인적인 호기심으로 RN이 아닌 Flutter를 선택하여 개발을 진행했는데
          익숙치 않았던 객체지향 프로그래밍에 익숙해질 수 있는 좋은 기회가
          되었습니다.
        </div>
      </ProjectDetail.Content>
      <ProjectDetail.GithubUrls githubUrls={project.github} />
      <ProjectDetail.TechStack techStack={project.techStack} />
      <ProjectDetail.Date date={project.date} />
    </ProjectDetail>
  );
};

export default LetsdoPage;
