import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
type Props = {};

const ProjectCard = ({
  projectName,
  projectLink,
  deployed,
  deployedLink,
  description,
  language,
  languageIcon,
}: {
  projectName: string;
  projectLink: string;
  deployed: boolean;
  deployedLink?: string;
  description: string;
  language: string;
  languageIcon: string;
}) => {
  return (
    <div className="flex flex-col gap-3 bg-gray-950 p-2 md:p-5 rounded">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="h-6 w-5 overflow-hidden ">
            <Image
              src="/img/repoicon.png"
              width={16}
              height={7}
              alt="js"
              className=" "
            />
          </div>{" "}
          <Link href={projectLink} target="_blank" rel="noopener">
            <span className="cursor-pointer text-sm font-semibold text-blue-200">
              {projectName}
            </span>
          </Link>
        </div>
        {deployed && (
          <Link href={deployedLink!} target="_blank" rel="noopener">
            <ExternalLink size={15} />
          </Link>
        )}
      </div>

      <p className="text-xs h-10 ">{description}</p>

      <div className="flex items-center  gap-2">
        <div className=" w-5 overflow-hidden ">
          <Image
            src={languageIcon}
            width={16}
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
    <motion.section
      key="stack"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="border-b-[0.2px] border-opacity-30 rounded border-gray-500 py-7"
    >
      <h2 className="text-sm text-semibold"> Repositories</h2>

      <div className=" mt-4 grid   md:grid-cols-2 gap-4 ">
        <ProjectCard
          projectLink="https://github.com/MugeraH/Coolplaces-api"
          projectName="Coolplaces-api"
          description="Sample api with JWT Authentication"
          language=".Net"
          deployed={false}
          languageIcon="/img/net.png"
        />
        <ProjectCard
          projectLink="https://github.com/MugeraH/Weather-app"
          projectName="Weatherhero"
          description="A classic weather app that suggests what you ought to weather depending on the weather"
          language="react"
          deployed={true}
          deployedLink="https://weather-hero.vercel.app/"
          languageIcon="/img/react.png"
        />
        <ProjectCard
          projectLink="https://github.com/MugeraH/Github-search"
          deployedLink="https://github-search-v1.vercel.app/home"
          projectName="Gitsearch"
          description="Search github users or repositories"
          language=".Angular"
          deployed={false}
          languageIcon="/img/angular.png"
        />
        <ProjectCard
          projectLink="https://github.com/MugeraH/Coolplaces-api"
          projectName="Coolplaces-api"
          description="Sample api with JWT Authentication"
          language=".Net"
          deployed={false}
          languageIcon="/img/net.png"
        />
        <ProjectCard
          projectLink="https://github.com/MugeraH/Coolplaces-api"
          projectName="Coolplaces-api"
          description="Sample api with JWT Authentication"
          language=".Net"
          deployed={false}
          languageIcon="/img/net.png"
        />

        <div className="cursor-pointer text-blue-200 text-sm flex justify-start items-end">
          <Link
            href="https://github.com/MugeraH?tab=repositories"
            target="_blank"
            rel="noopener"
          >
            See more on github
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
