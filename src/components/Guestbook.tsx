import React from "react";
import { motion } from "framer-motion";
import { Dot, Plus } from "lucide-react";
import Image from "next/image";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { div } from "framer-motion/client";
import dayjs from "dayjs";
import AddCommentBtn from "./addCommentBtn";
type Props = {};

function Guestbook({}: Props) {
  const addComment = useMutation(api.comments.createComment);
  const comments = useQuery(api.comments.getComments);
  const isLoading = comments === undefined;
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
    <div>
      <div className="mb-3 flex items-center justify-between">
        <h4> Guestbook</h4>
        <AddCommentBtn />
      </div>

      <p className="my-5">Hi there, say hello or leave a comment. Thank you!</p>

      <div className="h-[350px] overflow-y-auto">
        {isLoading && (
          <>
            <div className="duration-50 my-4 grid animate-pulse grid-cols-[90px,_1fr] items-start gap-3 bg-transparent px-3 py-5 transition-colors ease-in-out">
              <div className="flex h-[60px] w-[60px] overflow-hidden rounded-full">
                <div className="h-[60px] w-[60px] rounded-full bg-gray-100">
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
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="flex items-center text-sm font-semibold">
                  <div className="h-4 w-16 rounded bg-gray-100"></div>
                </span>
                <p className="block text-sm">
                  <div className="h-4 w-full rounded bg-gray-100"></div>
                </p>
              </div>
            </div>
            <div className="duration-50 my-4 grid animate-pulse grid-cols-[90px,_1fr] items-start gap-3 bg-transparent px-3 py-5 transition-colors ease-in-out">
              <div className="flex h-[70px] w-[70px] overflow-hidden rounded-full">
                <div className="h-[70px] w-[70px] rounded-full bg-gray-100">
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
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="flex items-center text-sm font-semibold">
                  <div className="h-4 w-16 rounded bg-gray-100"></div>
                </span>
                <p className="block text-sm">
                  <div className="h-4 w-full rounded bg-gray-100"></div>
                </p>
              </div>
            </div>
            <div className="duration-50 my-4 grid animate-pulse grid-cols-[90px,_1fr] items-start gap-3 bg-transparent px-3 py-5 transition-colors ease-in-out">
              <div className="flex h-[70px] w-[70px] overflow-hidden rounded-full">
                <div className="h-[70px] w-[70px] rounded-full bg-gray-100">
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
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="flex items-center text-sm font-semibold">
                  <div className="h-4 w-16 rounded bg-gray-100"></div>
                </span>
                <p className="block text-sm">
                  <div className="h-4 w-full rounded bg-gray-100"></div>
                </p>
              </div>
            </div>
          </>
        )}

        {comments?.map((row) => (
          <motion.div
            key={row.name}
            // initial={{ opacity: 0, height: 0 }}
            // animate={{ opacity: 1, height: "auto" }}
            // exit={{ opacity: 0, height: 0 }}
            // transition={{
            //   opacity: { duration: 0.2 },
            //   height: { duration: 0.4 },
            // }}
            className="duration-50 my-4 grid grid-cols-[90px,_1fr] items-start gap-3 bg-transparent px-3 py-5 transition-colors ease-in-out hover:bg-[radial-gradient(ellipse_80%_80%_at_50%_40%,rgba(44,44,198,0.3),rgba(255,255,255,0))]"
          >
            <div className="flex h-[60px] w-[60px] overflow-hidden rounded-full">
              <img src={row.avatarUrl} alt={row.name} className="h-50 w-50" />
            </div>{" "}
            <div className="flex flex-col gap-2">
              <span className="flex items-center text-sm font-semibold">
                {row.name} <Dot />{" "}
                <span className="text-[11px] text-muted">{row.date}</span>
              </span>
              <p className="block text-sm">{row.message}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {/* <motion.section
        key="guestbook"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0 }}
      >
        <div
          key="Hughes"
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
              Hughes <Dot />{" "}
              <span className="text-[11px] text-muted">today</span>
            </span>
            <p className="block text-sm">Message</p>
          </div>
        </div>

       
      </motion.section> */}
    </div>
  );
}

export default Guestbook;
