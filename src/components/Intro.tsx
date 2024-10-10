import React from "react";
import { Github, Linkedin, Youtube, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
function Intro() {
  return (
    <motion.section
      key="intro"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full gap-10 rounded border-b-[0.2px] border-gray-500 border-opacity-30 pb-10"
    >
      <div className="flex w-full flex-col justify-between gap-6 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          {/* <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full animate-buttonheartbeat hover:cursor-pointer">
            <Image
              src="/img/me.jpg"
              width={80}
              height={80}
              objectFit="contain"
              alt="logo"
            />
          </span> */}

          {/* <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-800 py-4 sm:py-10">
            <div class="grid items-start justify-center gap-8">
              <div class="group relative">
                <div class="transistion absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 opacity-75 blur duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>

                <button class="bg- tems-center relative flex divide-x divide-gray-600 rounded-lg bg-black px-7 py-4 leading-none">
                  <span class="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6 -rotate-6 text-pink-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                      />
                    </svg>

                    <span class="pr-6 text-gray-100">Labs Release 2021.09</span>
                  </span>

                  <span class="transistion pl-6 text-indigo-400 duration-200 group-hover:text-gray-100">
                    See what's new &rarr;
                  </span>
                </button>
              </div>
            </div>
          </div> */}

          {/* <div className="relative rounded-full overflow-hidden h-[5.5rem] w-[5.5rem]  flex justify-center items-center">
            <div className=" group rounded-full overflow-hidden h-20 w-20 z-10 relative ">
              <div className="transistion absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 opacity-75 blur duration-1000 group-hover:opacity-100 group-hover:duration-200 animate-pulse"></div>{" "}
              <div className="bg-red-300 relative h-16 w-16"></div>
              <Image
                src="/img/me.jpg"
                width={70}
                height={70}
                objectFit="cover"
                className="relative"
                alt="logo"
              />
            </div>
          </div> */}

          <div className="group relative">
            {/* <div className="transistion rounded-full absolute -inset-0  bg-blue-300 opacity-75 blur duration-1000 animate-pulse"></div> */}

            <div className="bg- tems-center relative flex rounded-full bg-black leading-none">
              <span className="flex items-center">
                <Image
                  src="/img/me.jpg"
                  width={70}
                  height={70}
                  objectFit="cover"
                  className="relative rounded-full"
                  alt="logo"
                />
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-1xl font-bold">Hughes Mugera</h3>
            <div className="flex items-center gap-2 py-2">
              <span className="text-sm">Full Stack Engineer & Baker</span>
              <MapPin size={16} />
              <p className="text-sm font-semibold">Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            className="cursor-pointer"
            rel="noopener"
            href="https://www.youtube.com/@hughesmugera6140"
            target="_blank"
          >
            <Youtube size={22} />
          </Link>
          <Link
            rel="noopener"
            href="https://github.com/MugeraH"
            target="_blank"
          >
            <Github size={22} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/hughes-mugera/"
            target="_blank"
            rel="noopener"
          >
            <Linkedin size={22} />
          </Link>
        </div>
      </div>

      <p className="mt-6 text-xs font-medium md:ml-2">
        Reach me @ mugerahughes@gmail.com
      </p>
    </motion.section>
  );
}

export default Intro;
