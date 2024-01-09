"use client";
import { TextHighlighter } from "@/components/text-highlighter";
import { projectsData } from "@/data";
import React from "react";
import { ProjectDetail } from "../_components/project";

const SecurityGymPage = () => {
  const project = projectsData.securityGym;
  return (
    <ProjectDetail>
      <ProjectDetail.Header>
        <ProjectDetail.Title title={project.name} />
        <ProjectDetail.Description description={project.description} />
      </ProjectDetail.Header>
      <ProjectDetail.Carousel images={project.images} imageWidth="100%" />
      <ProjectDetail.Content>
        <div>
          기업에 침해사고 발생시{" "}
          <TextHighlighter>즉각적인 대응(Incident Response)</TextHighlighter>을
          위한 시스템입니다. BOB에서 진행한 5인 프로젝트로{" "}
          <TextHighlighter>시스템 구축과 IR 메뉴얼</TextHighlighter>을
          작성했습니다.
        </div>
        <div>
          프로젝트는 PMS(Patch Management System)를 공격벡터로 하는 침해사고
          시나리오를 작성하고 그에 맞는 기업 인프라를 구성 후 시나리오에 맞게
          공격을 진행하여 로그를 남기는 방향으로 진행했습니다.
        </div>
        <div>
          <TextHighlighter>PMS 개발</TextHighlighter> 을 맡아 소켓으로 사내 PC에
          패치파일을 전달하는 프로그램을 만들고 PMS에{" "}
          <TextHighlighter>crontab을 이용해 부팅시 자동 실행</TextHighlighter>
          되도록했습니다. PC에는 파이썬으로 패치파일을 받아오는 코드를 작성하고
          실행파일로 만들어 윈도우 서비스로 등록했습니다. 그외에도 PHP CMS로
          쇼핑몰을 만들고 Flask로 간단한 웹서비스를 만드는 역할을 했습니다.
          시스템 크기를 줄이기 위해 시나리오에 시스템 취약점이 없는{" "}
          <TextHighlighter>리눅스 환경은 Docker를 사용</TextHighlighter>하였고
          나머지 리눅스 환경과 윈도우는 Vmware로 인프라를 구성했습니다.
        </div>
        <div>
          처음 진행한 협업이라 역경이 있었지만 여러명이 함께 날밤 새가며
          프로젝트를 진행한 경험은 이후 프로젝트에서도 자신감을 갖게 해주는
          계기가 되었습니다.
        </div>
      </ProjectDetail.Content>
      <ProjectDetail.GithubUrls githubUrls={project.github} />
      <ProjectDetail.TechStack techStack={project.techStack} />
      <ProjectDetail.Date date={project.date} />
    </ProjectDetail>
  );
};
export default SecurityGymPage;
