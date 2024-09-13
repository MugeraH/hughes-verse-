import React from "react";
import { Github, Linkedin, Youtube, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
function Intro() {
  return (
    <section className="border-b-[0.2px] border-opacity-30 rounded border-gray-500  w-full pb-10 gap-10 ">
      <div className="flex flex-col gap-6 md:flex-row justify-between w-full items-center">
        <div className="flex items-center gap-4">
          <div className="rounded-full overflow-hidden h-20 w-20">
            <Image
              src="/img/me.jpg"
              width={80}
              height={80}
              objectFit="contain"
              alt="logo"
            />
          </div>
          <div>
            <h3 className="text-1xl font-bold">Hughes Mugera</h3>
            <div className="flex items-center py-2 gap-2 ">
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
            rel="noopener"
            href="https://www.linkedin.com/in/hughes-mugera/"
            target="_blank"
          >
            <Linkedin size={22} />
          </Link>
        </div>
      </div>

      <p className=" mt-6 ml-2 text-xs font-medium ">
        Am Open for work and collaborating reach me @ mugerahughes@gmail.com
      </p>
    </section>
  );
}

export default Intro;
