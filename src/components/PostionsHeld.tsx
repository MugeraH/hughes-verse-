import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Dot } from "lucide-react";
type Props = {};

const PositionCard = ({
  logo,
  jobTitle,
  company,
  duration,
  description,
}: {
  logo: string;
  jobTitle: string;
  company: string;
  duration: string;
  description: string;
}) => {
  return (
    <div className="grid grid-cols-[90px,_1fr] items-start gap-3">
      <div className="flex h-[70px] w-[70px] overflow-hidden rounded-sm hover:animate-pulse">
        <Image
          src={logo}
          width={70}
          height={70}
          objectFit="cover"
          alt={company}
          className=""
        />
      </div>{" "}
      <div className="flex flex-col gap-2">
        <p className="text-1xl block font-bold">{jobTitle}</p>
        <span className="flex items-center text-sm font-semibold">
          {company} <Dot /> {duration}
        </span>
        <p className="block text-sm">{description}</p>
      </div>
    </div>
  );
};

function PostionsHeld({}: Props) {
  return (
    <motion.section
      key="position"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className=""
    >
      {/* <p className="text-sm mb-3">Positions</p> */}

      <div className="flex flex-col gap-8">
        <PositionCard
          logo="/img/kq_logo.jpeg"
          jobTitle="Senior Software Developer(Frontend)"
          company="Kenya Airways"
          duration="July 2022 - Present"
          description={`
            Experienced full stack developer specializing in frontend software development. Proficient in ReactJS(NextJS) for building intuitive client-side applications, with strong skills in C# and ASP.NET for backend integration.Spearheaded a significant architectural shift from monolithic to decoupled systems  for internal appplications, dramatically improving deployment times and development efficiency.Led an Agile team of five developers, fostering cross-functional collaboration and delivering high-performance web applications that substantially boosted user engagement and reduced load times.`}
        />{" "}
        <PositionCard
          logo="/img/moringa.jpeg"
          jobTitle="Software Developer & Instructor"
          company="Moringa School"
          duration="Feb 2022 - July 2022"
          description="Mentored a cohort of 100 aspiring software developers, creating personalized learning plans based on best practices and principles which resulted in 80% retention rate for my class ,improved student satisfaction and resulted in a 50% increase in project delivery for the students assesment
"
        />{" "}
        <PositionCard
          logo="/img/touch.jpeg"
          jobTitle=" Frontend Software Developer"
          company="Touch Inspiration Ltd"
          duration="July 2021 - Jan 2022"
          description="Specialized in crafting bespoke enterprise applications using cutting-edge technologies like React with Next.js, TypeScript, and Vue.js. Your role involved translating UI/UX wireframes into responsive, interactive components and enhancing existing websites, focusing on improved performance and user experience through the use of Material UI, Tailwind, and GraphQL."
        />
      </div>
    </motion.section>
  );
}

export default PostionsHeld;
