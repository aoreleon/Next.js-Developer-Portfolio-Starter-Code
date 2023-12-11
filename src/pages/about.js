import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import profilePic from "../../public/images/profile/profilepicture.png";

const about = () => {
  return (
    <>
      <Head>
        <title>Antonio Oré | Acerca de mí</title>
        <meta name="Portafolio_Web" content="Portafolio Web" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Pasión por el desarrollo" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biografía
              </h2>
              <p className="font-medium">
                Bachiller de la Facultad de Ingeniería Informática en la
                Universidad Ricardo Palma - Perú; manejo distintas herramientas
                de software, hardware y ofimática para un desempeño laboral
                eficiente y eficaz.
              </p>
              <p className="my-4 font-medium">
                Actualmente me especializo como Administrador y Desarrollador en
                Salesforce, con más de 60 mil puntos en trailhead y llevando
                cursos en focus on force para las certificaciones.
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                alt="Antonio Oré"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div>
                <span>
                    50+
                </span>
                <h2></h2>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
