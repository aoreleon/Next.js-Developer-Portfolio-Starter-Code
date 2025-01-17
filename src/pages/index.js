import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/developer.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portafolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="HomeImage"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Convertir la visión en realidad con código y diseño."
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                Como desarrollador front-end y Salesforce Admin & Developer cualificado, me dedico a convertir
                ideas en aplicaciones web innovadoras. Explore mis últimos
                proyectos y artículos, que muestran mi experiencia en React.js y
                desarrollo web.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Curriculum <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="mailto:aol0015@gmail.com" target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-dark underline">
                  Contactame
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        {/* <div className="absolute right-8 bottom-8 inline-block w-10">
          <Image src={lighBulb} alt="Antonio Oré" className="w-full h-auto"/>
        </div> */}
      </main>
    </>
  );
}
