import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
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
      className={` flex items-center  gap-2 bg-gray-800 hover:bg-gray-700 transition-all delay-50 py-2 px-3 rounded`}
    >
      <div className="h-6 w-6 overflow-hidden ">
        <Image src={icon} width={25} height={7} alt="js" className=" " />
      </div>{" "}
      <span className="hidden md:block text-xs cursor-default"> {label}</span>
    </div>
  );
};

const stackList = [{ lable: "HTML", icon: "/img/html.png" }];

function Stack({}: Props) {
  return (
    <motion.section
      key="stack"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className=""
    >
      {/* <p className="text-sm mb-3">Tech Stack</p> */}

      <div className="flex flex-row gap-2">
        <StackBtn label="Javascript" width="32" icon="/img/js.png" />{" "}
        <StackBtn label="Typescript" width="32" icon="/img/typescript.png" />
        <StackBtn label="React" width="32" icon="/img/react.png" />{" "}
        <StackBtn label="Next" width="32" icon="/img/next.png" />
        <StackBtn label="Material UI" width="32" icon="/img/mui.png" />{" "}
        <StackBtn label="Tailwind" width="32" icon="/img/tailwind.png" />{" "}
      </div>

      <div className="mt-5 flex flex-row gap-2">
        <StackBtn label="C#" width="32" icon="/img/c.png" />{" "}
        <StackBtn label=".Net" width="32" icon="/img/net.png" />{" "}
        <StackBtn label="Node Js" width="32" icon="/img/node.png" />{" "}
        <StackBtn label="MySql" width="32" icon="/img/sql.png" />{" "}
        <StackBtn label="Graphql" width="32" icon="/img/graphql.png" />{" "}
      </div>
      {/* <div className=" mt-3 flex flex-row gap-2">
        <StackBtn label="Postgres" width="32" icon="/img/postgre.png" />{" "}
        <StackBtn label="Mongo DB" width="32" icon="/img/mongo.svg" />{" "}
        <StackBtn label="Graphql" width="32" icon="/img/graphql.png" />{" "}
      </div> */}
      <div className="mt-5 flex flex-row gap-2">
        <StackBtn label="Git" width="32" icon="/img/git.png" />{" "}
        <StackBtn label="Azure" width="32" icon="/img/azure.png" />{" "}
      </div>
    </motion.section>
  );
}

export default Stack;
