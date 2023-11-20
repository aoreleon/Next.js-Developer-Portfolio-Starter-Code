import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, LinkedInIcon } from "./Icons";
import { motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block bg-dark
        absolute left-0 -bottom-0.5
        group-hover:w-full translate-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"}
        `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4"></CustomLink>
        <CustomLink href="about" title="Acerca" className="mx-4"></CustomLink>
        <CustomLink
          href="projects"
          title="Proyectos"
          className="mx-4"
        ></CustomLink>
        <CustomLink
          href="articles"
          title="Artículos"
          className="ml-4"
        ></CustomLink>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]"></div>
      <Logo />
      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://www.linkedin.com/in/antonio-ore-leon/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-7 mr-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://github.com/aoreleon/aore"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-7 mr-3"
        >
          <GithubIcon />
        </motion.a>
      </nav>
    </header>
  );
};

export default NavBar;
