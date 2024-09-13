import React from "react";
import Link from "next/link";
type Props = {};

function About({}: Props) {
  return (
    <section className="border-b-[0.2px] border-opacity-30 rounded border-gray-500 py-7">
      <h2 className="text-sm text-semibold"> About</h2>

      <p className="text-sm mt-3">
        Developer{" "}
        <Link
          className="text-red-100"
          href="https://www.kenya-airways.com/en-ke/"
          target="_blank"
          rel="noopener"
        >
          @KenyaAirways
        </Link>{" "}
        {`with 5+ years experience
        in web and applications development, I've honed my skills as a Fullstack
        Software Engineer and I specialize in creating visually appealing,
        functional interfaces that easily integrate with backend applications,
        following best practices and ensuring optimal application performance. `}
      </p>
    </section>
  );
}

export default About;