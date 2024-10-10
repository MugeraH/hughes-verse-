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
import Footer from "@/components/Footer";
import Tabs from "@/components/tabs";

export default function Home() {
  let [activeTab, setActiveTab] = React.useState("stack");
  return (
    <div className="h-full min-h-screen bg-black bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(44,44,198,0.3),rgba(255,255,255,0))] text-white">
      <Container>
        <AnimatePresence initial={false}>
          <Intro />
          <About />

          <motion.section
            key="tabs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className=" "
          >
            <div className="mx-1 mt-10 flex justify-center">
              <div className="flex w-full justify-between space-x-1">
                <button
                  onClick={() => setActiveTab("stack")}
                  className={`${
                    activeTab === "stack" ? "" : "hover:text-white/50"
                  } relative px-3 py-1.5 text-sm font-medium text-white outline-2 outline-sky-400 transition focus-visible:outline`}
                >
                  {activeTab === "stack" && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white"
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
                  } relative px-3 py-1.5 text-sm font-medium text-white outline-2 outline-sky-400 transition focus-visible:outline`}
                >
                  {activeTab === "positions" && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white"
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
                  } relative px-3 py-1.5 text-sm font-medium text-white outline-2 outline-sky-400 transition focus-visible:outline`}
                >
                  {activeTab === "guestbook" && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-white"
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
              {activeTab === "stack" && <Stack />}
              {activeTab === "positions" && <PostionsHeld />}
              {activeTab === "guestbook" && <Guestbook />}
            </div>
          </motion.section>

          <Projects />
          <Footer />
        </AnimatePresence>
      </Container>
    </div>
  );
}
