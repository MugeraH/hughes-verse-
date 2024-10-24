import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
// import { details } from "framer-motion/client";
import Spotlight, { SpotlightCard } from "./utils/Spotlight";
type Props = {};

let projectsList = [
  {
    projectLink: "https://github.com/MugeraH/ask-away",
    projectName: "Askaway",
    description:
      "An ai prompt chatbot with ability to propmt multiple ai modles",

    deployed: true,
    deployedLink: "https://ask-away-9zeoxm6ti-mugerahs-projects.vercel.app/",
    languageDetails: [
      {
        image: "/img/react.png",
        name: "react",
      },
      {
        image: "/img/tailwind.png",
        name: "tailwind",
      },
    ],
  },
  {
    projectLink: "https://github.com/MugeraH/google-notes-clone",
    projectName: "Google-notes-remake",
    description: "Remake of google notes application",

    deployed: true,
    deployedLink: "https://google-notes-clone-theta.vercel.app/",
    languageDetails: [
      {
        image: "/img/react.png",
        name: "react",
      },
      {
        image: "/img/tailwind.png",
        name: "tailwind",
      },
    ],
  },
  {
    projectLink: "https://github.com/MugeraH/dashboards",
    projectName: "Dashboards",
    description: "Collection of dashboards",

    deployed: true,
    deployedLink: "https://dashboards-lovat.vercel.app/",
    languageDetails: [
      {
        image: "/img/react.png",
        name: "react",
      },
    ],
  },
  {
    projectLink: "https://github.com/MugeraH/Coolplaces-api",
    projectName: "Coolplaces-api",
    description: "Sample api with JWT Authentication",

    deployed: false,

    languageDetails: [
      {
        image: "/img/net.png",
        name: ".Net",
      },
    ],
  },
  {
    projectLink: "https://github.com/MugeraH/cool_things",
    projectName: "Randomthings",
    description: "Random components implementing various fuctionalities",

    deployed: true,
    deployedLink:
      "https://cool-things-xw3z.vercel.app/?vercelToolbarCode=-Xj9KwrjZb5ry9U",
    languageDetails: [
      {
        image: "/img/react.png",
        name: "react",
      },
    ],
  },
  {
    projectLink: "https://github.com/MugeraH/Weather-app",
    projectName: "Weatherhero",
    description:
      "A classic weather app that suggests what you ought to weather depending on the weather",

    deployed: true,
    deployedLink: "https://weather-hero.vercel.app/",
    languageDetails: [
      {
        image: "/img/react.png",
        name: "react",
      },
    ],
  },
];

const ProjectCard = ({
  projectName,
  projectLink,
  deployed,
  deployedLink,
  description,
  languageDetails,
}: {
  projectName: string;
  projectLink: string;
  deployed: boolean;
  deployedLink?: string;
  description: string;
  languageDetails: {
    image: string;
    name: string;
  }[];
}) => {
  return (
    <div className="flex flex-col gap-3 rounded bg-gray-950 p-2 md:p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 overflow-hidden">
            <Image
              src="/img/repoicon.png"
              width={16}
              height={7}
              alt="js"
              className=" "
            />
          </div>{" "}
          <Link href={projectLink} target="_blank" rel="noopener">
            <span className="cursor-pointer text-sm font-semibold text-[#4689E4]">
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

      <p className="h-10 text-xs">{description}</p>

      <div className="flex items-center gap-4">
        {languageDetails.map((details, index) => (
          <div className="flex items-center gap-1" key={index}>
            <div className="w-4 overflow-hidden">
              <Image
                src={details.image}
                width={14}
                height={7}
                alt={details.name}
                className=" "
              />
            </div>{" "}
            <span className="text-[10px]">{details.name}</span>
          </div>
        ))}
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
      className="mt-10 rounded border-b-[0.2px] border-gray-500 border-opacity-30 py-7"
    >
      <h2 className="text-semibold text-sm"> Repositories</h2>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {projectsList.map((project) => (
          <Spotlight key={project.projectName} className="w-full">
            {/* Card #1 */}
            <SpotlightCard>
              <ProjectCard
                projectLink={project.projectLink}
                projectName={project.projectName}
                description={project.description}
                deployed={project.deployed}
                deployedLink={project.deployedLink}
                languageDetails={project.languageDetails}
              />
            </SpotlightCard>
          </Spotlight>
        ))}

        <div className="flex cursor-pointer items-end justify-start text-sm text-blue-200">
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
