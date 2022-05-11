import Image from "next/image";

import myAvatar from "../public/img/me.jpg";

export default function Home() {
  return (
    <div className="px-4 pt-8 md:max-w-xl mx-auto min-h-screen md:pt-12 pb-8">
      <h1 className="mb-8 text-4xl font-bold text-primary-blue text-center md:text-5xl md:mb-10">
        👋 Hey I&apos;m Dom
      </h1>
      <div className="w-48 border-8 rounded-full box-content flex justify-center items-center mx-auto mb-10 md:w-40">
        <Image
          layout="intrinsic"
          className="rounded-full"
          src={myAvatar}
          alt="Dom Vacchiano Avatar"
        />
      </div>
      <p className="text-2xl">
        I&apos;m the technical co-founder of{" "}
        <a
          href="https://www.bpiq.com"
          rel="noreferrer"
          target="_blank"
          className="text-primary-blue underline underline-offset-2 decoration-primary-orange decoration-4 font-medium hover:decoration-light-orange hover:text-light-blue"
        >
          BiopharmIQ.
        </a>
      </p>
      <p className="text-2xl pt-8">
        I earned my B.S. in Computer Science from the University of Iowa and
        then my M.S. in Biotechnology from the University of Maryland Global
        Campus.
      </p>
      <p className="text-2xl pt-8">
        Connect with me on{" "}
        <a
          href="https://www.twitter.com/domvacchiano"
          rel="noreferrer"
          target="_blank"
          className="text-primary-blue underline underline-offset-2 decoration-primary-orange decoration-4 font-medium hover:decoration-light-orange hover:text-light-blue"
        >
          Twitter
        </a>{" "}
        where I tweet about lessons learned growing BiopharmIQ, building things
        with Next.js & python/Django, and digital marketing hacks.
      </p>
    </div>
  );
}
