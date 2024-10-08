import React from "react";
import { motion } from "framer-motion";
import { Dot, Plus } from "lucide-react";
import Image from "next/image";
type Props = {};

function Guestbook({}: Props) {
  const data = [
    {
      name: "Hughes Mugera",
      avatarUrl: "/img/me.png",
      date: "07/10/2024",
      comment: "This is my best day so far",
    },
    {
      name: "Hughes Mugera",
      avatarUrl: "/img/me.png",
      date: "07/10/2024",
      comment: "This is my best day so far",
    },
    {
      name: "Hughes Mugera",
      avatarUrl: "/img/me.png",
      date: "07/10/2024",
      comment: "This is my best day so far",
    },
    {
      name: "Hughes Mugera",
      avatarUrl: "/img/me.png",
      date: "07/10/2024",
      comment: "This is my best day so far",
    },
    {
      name: "Hughes Mugera",
      avatarUrl: "/img/me.png",
      date: "07/10/2024",
      comment: "This is my best day so far",
    },
  ];
  return (
    <motion.section
      key="guestbook"
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="mb-3 flex items-center justify-between">
        <h4> Guestbook</h4>
        <button className="flex items-center gap-2 rounded-sm border border-black px-3 py-2 text-sm transition-colors delay-75 hover:border-white">
          {" "}
          <Plus size={18} />
          Comment
        </button>
      </div>

      <p className="my-5">Hi there, say hello or leave a comment. Thank you!</p>

      {data.map((row) => (
        <div
          key={row.name}
          className="duration-50 my-4 grid grid-cols-[90px,_1fr] items-start gap-3 bg-transparent px-3 py-5 transition-colors ease-in-out hover:bg-[radial-gradient(ellipse_80%_80%_at_50%_40%,rgba(44,44,198,0.3),rgba(255,255,255,0))]"
        >
          <div className="flex h-[70px] w-[70px] overflow-hidden rounded-full">
            <Image
              src="/img/placeholder_user.jpg"
              width={70}
              height={70}
              objectFit="cover"
              alt="Hughes Mugera"
              placeholder="blur"
              blurDataURL="/img/placeholder_user.jpg"
              className=""
            />
          </div>{" "}
          <div className="flex flex-col gap-2">
            <span className="flex items-center text-sm font-semibold">
              {row.name} <Dot />{" "}
              <span className="text-muted text-[11px]">{row.date}</span>
            </span>
            <p className="block text-sm">{row.comment}</p>
          </div>
        </div>
      ))}
    </motion.section>
  );
}

export default Guestbook;
