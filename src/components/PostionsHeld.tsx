import React from "react";
import Image from "next/image";

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
    <div className="flex gap-5 items-start">
      <div className="h-[50px] w-[120px]  ">
        <Image
          src={logo}
          width={105}
          height={80}
          objectFit="contain"
          alt={company}
          className=" "
        />
      </div>{" "}
      <div className="flex flex-col gap-2">
        <p className="block font-bold text-1xl">{jobTitle}</p>
        <span className="block text-sm font-semibold">
          {company} .{duration}
        </span>
        <p className="block text-sm">{description}</p>
      </div>
    </div>
  );
};

function PostionsHeld({}: Props) {
  return (
    <section className="border-b-[0.2px] w- border-opacity-30 rounded border-gray-500 py-7">
      <p className="text-sm mb-3">Positions</p>

      <div className="flex flex-col gap-8">
        <PositionCard
          logo="/img/kq_logo.jpeg"
          jobTitle="Software Developer"
          company="Kenya Airways"
          duration="2022 - Present"
          description="ries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lor"
        />{" "}
        <PositionCard
          logo="/img/moringa.jpeg"
          jobTitle="Software Developer $ Instructor"
          company="Kenya Airways"
          duration="2022 - Present"
          description="ries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lor"
        />{" "}
        <PositionCard
          logo="/img/touch.jpeg"
          jobTitle=" Frontend Software Developer"
          company="Kenya Airways"
          duration="2022 - Present"
          description="ries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lor"
        />
      </div>
    </section>
  );
}

export default PostionsHeld;
