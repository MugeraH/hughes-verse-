import Image from "next/image";
import React from "react";
import Link from "next/link";

type Props = {};

const ProjectCard = ({
  projectName,
  projectLink,
  description,
  language,
  languageIcon,
}: {
  projectName: string;
  projectLink: string;
  description: string;
  language: string;
  languageIcon: string;
}) => {
  return (
    <div className="flex flex-col gap-6 bg-gray-950 p-5 rounded">
      <div className="flex items-center gap-2">
        <div className="h-6 w-5 overflow-hidden ">
          <Image
            src="/img/repoicon.png"
            width={17}
            height={7}
            alt="js"
            className=" "
          />
        </div>{" "}
        <Link href={projectLink} target="_blank" rel="noopener">
          <span className="cursor-pointer font-semibold text-blue-200">
            {projectName}
          </span>
        </Link>
      </div>

      <p className="text-sm">{description}</p>

      <div className="flex items-center gap-2">
        <div className="h-6 w-5 overflow-hidden ">
          <Image
            src={languageIcon}
            width={20}
            height={7}
            alt="js"
            className=" "
          />
        </div>{" "}
        <span className="text-sm">{language}</span>
      </div>
    </div>
  );
};

function Projects({}: Props) {
  return (
    <section className="border-b-[0.2px] border-opacity-30 rounded border-gray-500 py-7">
      <h2 className="text-sm text-semibold"> Repositories</h2>

      <div className=" mt-4 grid   md:grid-cols-2 gap-4 ">
        <ProjectCard
          projectLink="https://github.com/MugeraH/Coolplaces-api"
          projectName="Coolplaces-api"
          description="Sample api with JWT Authentication"
          language=".Net"
          languageIcon="/img/net.png"
        />
        <ProjectCard
          projectLink="https://github.com/MugeraH/Coolplaces-api"
          projectName="Coolplaces-api"
          description="Sample api with JWT Authentication"
          language=".Net"
          languageIcon="/img/net.png"
        />
        <ProjectCard
          projectLink="https://github.com/MugeraH/Coolplaces-api"
          projectName="Coolplaces-api"
          description="Sample api with JWT Authentication"
          language=".Net"
          languageIcon="/img/net.png"
        />
        <ProjectCard
          projectLink="https://github.com/MugeraH/Coolplaces-api"
          projectName="Coolplaces-api"
          description="Sample api with JWT Authentication"
          language=".Net"
          languageIcon="/img/net.png"
        />
        <ProjectCard
          projectLink="https://github.com/MugeraH/Coolplaces-api"
          projectName="Coolplaces-api"
          description="Sample api with JWT Authentication"
          language=".Net"
          languageIcon="/img/net.png"
        />
      </div>
    </section>
  );
}

export default Projects;
