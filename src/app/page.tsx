"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import About from "@/components/About";
import Container from "@/components/Container";
import Intro from "@/components/Intro";
import PostionsHeld from "@/components/PostionsHeld";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Guestbook from "@/components/Guestbook";
import Tabs from "@/components/tabs";

export default function Home() {
  let [activeTab, setActiveTab] = React.useState("stack");
  return (
    <div className="min-h-screen bg-black text-white">
      <Container>
        <Intro />
        <About />

        <section className=" ">
          <div className="mt-10  mx-1 flex justify-center">
            <div className="flex justify-between space-x-1  w-full">
              <button
                onClick={() => setActiveTab("stack")}
                className={`${
                  activeTab === "stack" ? "" : "hover:text-white/50"
                } relative 
            px-3 py-1.5 text-sm font-medium text-white outline-2 transition outline-sky-400 focus-visible:outline
            `}
              >
                {activeTab === "stack" && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute  bg-white inset-0"
                    style={{
                      borderRadius: 2,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 mix-blend-exclusion">
                  {" "}
                  Tech Stack
                </span>
              </button>
              <button
                onClick={() => setActiveTab("positions")}
                className={`${
                  activeTab === "positions" ? "" : "hover:text-white/50"
                } relative 
            px-3 py-1.5 text-sm font-medium text-white outline-2 transition outline-sky-400 focus-visible:outline
            `}
              >
                {activeTab === "positions" && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute  bg-white inset-0"
                    style={{
                      borderRadius: 2,
                    }}
                    //  type: "spring",
                    transition={{ duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 mix-blend-exclusion">
                  {" "}
                  Positions
                </span>
              </button>
              <button
                onClick={() => setActiveTab("guestbook")}
                className={`${
                  activeTab === "guestbook" ? "" : "hover:text-white/50"
                } relative 
            px-3 py-1.5 text-sm font-medium text-white outline-2 transition outline-sky-400 focus-visible:outline
            `}
              >
                {activeTab === "guestbook" && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute  bg-white inset-0"
                    style={{
                      borderRadius: 2,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 mix-blend-exclusion">
                  {" "}
                  Guestbook
                </span>
              </button>
            </div>
          </div>
          <div className="mt-8">
            <AnimatePresence>
              {activeTab === "stack" && <Stack />}
              {activeTab === "positions" && <PostionsHeld />}
              {activeTab === "guestbook" && <Guestbook />}
            </AnimatePresence>
          </div>
        </section>

        <Projects />
      </Container>
    </div>
  );
}
