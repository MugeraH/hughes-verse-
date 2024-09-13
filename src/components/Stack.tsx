import Image from "next/image";
import React from "react";

type Props = {};

const StackBtn = ({
  icon,
  label,
  width,
}: {
  icon: string;
  width: string;
  label: string;
}) => {
  return (
    <div
      className={` flex items-center  gap-2 bg-gray-800 py-1.5 px-3 rounded`}
    >
      <div className="h-4 w-4 overflow-hidden ">
        <Image src={icon} width={20} height={7} alt="js" className=" " />
      </div>{" "}
      <span className="hidden md:block text-sm"> {label}</span>
    </div>
  );
};

const stackList = [{ lable: "HTML", icon: "/img/html.png" }];

function Stack({}: Props) {
  return (
    <section className="border-b-[0.2px] w- border-opacity-30 rounded border-gray-500 py-7">
      <p className="text-sm mb-3">Tech Stack</p>

      <div className="flex flex-row gap-2">
        <StackBtn label="HTML" width="32" icon="/img/html.png" />{" "}
        <StackBtn label="CSS" width="32" icon="/img/css.png" />{" "}
        <StackBtn label="Javascript" width="32" icon="/img/js.png" />{" "}
        <StackBtn label="Typescript" width="32" icon="/img/typescript.png" />
        <StackBtn label="React" width="32" icon="/img/react.png" />{" "}
        <StackBtn label="Next" width="32" icon="/img/next.svg" />
        <StackBtn label="Angular" width="32" icon="/img/angular.png" />{" "}
        <StackBtn label="Webpack" width="32" icon="/img/webpack.png" />
      </div>

      <div className=" mt-3 flex flex-row gap-2">
        <StackBtn label="Material UI" width="32" icon="/img/mui.png" />{" "}
        <StackBtn label="Tailwind" width="32" icon="/img/tailwind.png" />{" "}
      </div>

      <div className="mt-5 flex flex-row gap-2">
        <StackBtn label="C#" width="32" icon="/img/c.png" />{" "}
        <StackBtn label=".Net" width="32" icon="/img/net.png" />{" "}
        <StackBtn label="Node Js" width="32" icon="/img/node.png" />{" "}
        <StackBtn label="Python" width="32" icon="/img/python.png" />{" "}
        <StackBtn label="Django" width="32" icon="/img/django.png" />{" "}
      </div>
      <div className=" mt-3 flex flex-row gap-2">
        <StackBtn label="MySql" width="32" icon="/img/sql.png" />{" "}
        <StackBtn label="Postgres" width="32" icon="/img/postgre.png" />{" "}
        <StackBtn label="Mongo DB" width="32" icon="/img/mongo.svg" />{" "}
        <StackBtn label="Graphql" width="32" icon="/img/graphql.png" />{" "}
      </div>
      <div className="mt-5 flex flex-row gap-2">
        <StackBtn label="Git" width="32" icon="/img/git.png" />{" "}
      </div>
    </section>
  );
}

export default Stack;
