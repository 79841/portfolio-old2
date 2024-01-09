"use client";
import { projectsData } from "@/data";
import React from "react";
import { ProjectDetail } from "../_components/project";
import { TextHighlighter } from "@/components/text-highlighter";

const ChusinsaPage = () => {
  const project = projectsData.chusinsa;
  return (
    <ProjectDetail>
      <ProjectDetail.Header>
        <ProjectDetail.Title title={project.name} />
        <ProjectDetail.Description description={project.description} />
      </ProjectDetail.Header>
      <ProjectDetail.Carousel images={project.images} imageWidth="24rem" />
      <ProjectDetail.Content>
        <div>
          현재 존재하는 온라인 의류 쇼핑몰의 구매 이력, 상품 클릭 여부, 나이
          등을 종합하여 개인에게 의류를 추천해 주는 쇼핑몰 입니다. 5명이서
          진행한 프로젝트로 쇼핑몰의 프론트엔드와 백엔드의 전반적인 개발을
          맡았습니다.
        </div>
        <div>
          백엔드는 ML 엔지니어와 협업을 위해 파이썬 웹 프레임워크인 FastAPI를
          사용했고 프론트엔드는 Nextjs를 사용했습니다. Nextjs를 처음 사용한
          프로젝트로{" "}
          <TextHighlighter>
            hydration 과정에서 발생하는 에러를 처리
          </TextHighlighter>
          하면서 Nextjs의 동작 원리를 깊게 다지고 가는 계기가 되었습니다.
        </div>
        <div>
          백엔드에서는 OAuth2 인증방식을 직접 구현하였고 쿠키를 통한 인증을
          자동화하기 위해{" "}
          <TextHighlighter>FastAPI OAuth2 상속받아 의존성 주입</TextHighlighter>
          을 하였습니다. 데이터베이스 측면에서는 처리하는 데이터양이 방대하여
          데이터베이스를 설계할때 팀원들과 함께 정규화에 집중했습니다.
        </div>
        <div>
          열정적인 팀원들과 함께 개발하며 협업의 재미를 느낄 수 있었던
          프로젝트입니다.
        </div>
      </ProjectDetail.Content>
      <ProjectDetail.GithubUrls githubUrls={project.github} />
      <ProjectDetail.TechStack techStack={project.techStack} />
      <ProjectDetail.Date date={project.date} />
    </ProjectDetail>
  );
};

export default ChusinsaPage;
