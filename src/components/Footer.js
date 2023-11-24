import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
        font-medium text-lg
        "
    >
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear} &copy; Derechos Reservados</span>
        <div className="flex items-center">
          <Link
            href="https://www.linkedin.com/in/antonio-ore-leon/"
            target="_blank"            
          >
            <span> »»————-</span>
            <span className="text-primary text-2xl">𝓐</span>ntonio{" "}
            <span className="text-primary text-2xl">𝓞</span>ré
            <span> ————-««</span>
          </Link>
        </div>
        <Link href="/">Hola</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
