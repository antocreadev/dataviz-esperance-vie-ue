import Chart from "../components/Chart";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
export default function index() {
  // STATE
  const [isWindow, SetIsWindow] = useState(false);
  const [scrollY, SetScrollY] = useState(null);
  const chart = useRef(null);

  // IS WINDOW ?
  useEffect(() => {
    if (isWindow == undefined) {
      SetIsWindow(false);
    } else {
      SetIsWindow(true);
    }
  }, []);
  if (isWindow == true) {
    // SCROLL

    const max = document.body.scrollHeight - window.innerHeight;
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 420) {
        if (chart.current != null) {
          chart.current.style.pointerEvents = "auto";
          chart.current.style = "opacity: 1";
          // pointer-events: auto;
          // pointer-events: none;
        }
      } else {
        // chart.current.classList.remove("opacity-100");
        if (chart.current != null) {
          chart.current.style.pointerEvents = "none";
          chart.current.style = "opacity: 0";
        }
      }
      const scroll = window.scrollY;
      const scrollPercent = (scroll / max) * 100;
      SetScrollY(scrollPercent);
    });
  }
  // RETRUN JSX
  if (isWindow == true) {
    return (
      <main>
        <progress
          style={{ left: "-10vw" }}
          className="progress progress-primary fixed w-120vw opacity-70 z-50"
          value={`${scrollY}`}
          max="100"
        ></progress>
        <Navbar />
        <section
          style={{ height: "100vh", display: "flex", alignItems: "center" }}
          className="w-100vw"
        >
          <motion.img
            animate={{
              x: [0, 0, 20, 10, 0, -10, -20, 10, 0],
              y: [0, 10, 20, 10, 20, 10, 20, -10, 20, 0],
            }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{ width: "50vw", position: "relative", bottom: "50px" }}
            src="lifespan.png"
            alt=""
          />
          <section className="prose">
            <h1 className="text-primary">
              L'éspérance de vie dans l'union européenne
            </h1>
            <p>Dans quel pays vivons-nous le plus longtemps ? </p>
            <p>Comment expliquer ces différences ?</p>
            <p>Quels sont les facteurs influencant l'espérance de vie ?</p>
          </section>
        </section>

        <div className="prose">
          <h1>intro sur les donnée de l'esperance de vie en vie </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            asperiores quos amet atque in dolores voluptatum iure odit,
            sapiente, doloremque dolorem officiis, aliquam laboriosam. Totam
            deserunt consectetur dolores optio asperiores!
          </p>
        </div>
        <div
          ref={chart}
          className="chart w-100 lg:w-50vw lg:top-1/2 lg:fixed lg:left-1/2 lg:mt-30 opacity-0 transition-opacity"
        >
          <Chart />
        </div>
        <section className="w-50vw">
          <section className="w-100vw lg:w-50vw m-5 ">
            <article className="prose">
              <h4>L'espérance de vie dans l'union européenne</h4>
              <p>
                L'espérance de vie à la naissance est un indicateur de la santé
                publique. Elle est calculée en moyenne sur une population donnée
                et est exprimée en années. Elle est calculée à partir des
                données recueillies par l'Insee dans le cadre du recensement de
                la population et de l'enquête sur la santé des ménages.
              </p>
              <p>
                L'espérance de vie à la naissance est un indicateur de la santé
                publique. Elle est calculée en moyenne sur une population donnée
                et est exprimée en années. Elle est calculée à partir des
                données recueillies par l'Insee dans le cadre du recensement de
                la population et de l'enquête sur la santé des ménages.
              </p>
              <p>
                L'espérance de vie à la naissance est un indicateur de la santé
                publique. Elle est calculée en moyenne sur une population donnée
                et est exprimée en années. Elle est calculée à partir des
                données recueillies par l'Insee dans le cadre du recensement de
                la population et de l'enquête sur la santé des ménages.
              </p>
              <p>
                L'espérance de vie à la naissance est un indicateur de la santé
                publique. Elle est calculée en moyenne sur une population donnée
                et est exprimée en années. Elle est calculée à partir des
                données recueillies par l'Insee dans le cadre du recensement de
                la population et de l'enquête sur la santé des ménages.
              </p>
              <p>
                L'espérance de vie à la naissance est un indicateur de la santé
                publique. Elle est calculée en moyenne sur une population donnée
                et est exprimée en années. Elle est calculée à partir des
                données recueillies par l'Insee dans le cadre du recensement de
                la population et de l'enquête sur la santé des ménages.
              </p>
              <p>
                L'espérance de vie à la naissance est un indicateur de la santé
                publique. Elle est calculée en moyenne sur une population donnée
                et est exprimée en années. Elle est calculée à partir des
                données recueillies par l'Insee dans le cadre du recensement de
                la population et de l'enquête sur la santé des ménages.
              </p>
              <p>
                L'espérance de vie à la naissance est un indicateur de la santé
                publique. Elle est calculée en moyenne sur une population donnée
                et est exprimée en années. Elle est calculée à partir des
                données recueillies par l'Insee dans le cadre du recensement de
                la population et de l'enquête sur la santé des ménages.
              </p>
              <p>
                L'espérance de vie à la naissance est un indicateur de la santé
                publique. Elle est calculée en moyenne sur une population donnée
                et est exprimée en années. Elle est calculée à partir des
                données recueillies par l'Insee dans le cadre du recensement de
                la population et de l'enquête sur la santé des ménages.
              </p>
              <p>
                L'espérance de vie à la naissance est un indicateur de la santé
                publique. Elle est calculée en moyenne sur une population donnée
                et est exprimée en années. Elle est calculée à partir des
                données recueillies par l'Insee dans le cadre du recensement de
                la population et de l'enquête sur la santé des ménages.
              </p>
              <p>
                L'espérance de vie à la naissance est un indicateur de la santé
                publique. Elle est calculée en moyenne sur une population donnée
                et est exprimée en années. Elle est calculée à partir des
                données recueillies par l'Insee dans le cadre du recensement de
                la population et de l'enquête sur la santé des ménages.
              </p>
              <p>
                L'espérance de vie à la naissance est un indicateur de la santé
                publique. Elle est calculée en moyenne sur une population donnée
                et est exprimée en années. Elle est calculée à partir des
                données recueillies par l'Insee dans le cadre du recensement de
                la population et de l'enquête sur la santé des ménages.
              </p>
              <p>
                L'espérance de vie à la naissance est un indicateur de la santé
                publique. Elle est calculée en moyenne sur une population donnée
                et est exprimée en années. Elle est calculée à partir des
                données recueillies par l'Insee dans le cadre du recensement de
                la population et de l'enquête sur la santé des ménages.
              </p>
              <p>
                L'espérance de vie à la naissance est un indicateur de la santé
                publique. Elle est calculée en moyenne sur une population donnée
                et est exprimée en années. Elle est calculée à partir des
                données recueillies par l'Insee dans le cadre du recensement de
                la population et de l'enquête sur la santé des ménages.
              </p>
              <p>
                L'espérance de vie à la naissance est un indicateur de la santé
                publique. Elle est calculée en moyenne sur une population donnée
                et est exprimée en années. Elle est calculée à partir des
                données recueillies par l'Insee dans le cadre du recensement de
                la population et de l'enquête sur la santé des ménages.
              </p>
              <p>
                L'espérance de vie à la naissance est un indicateur de la santé
                publique. Elle est calculée en moyenne sur une population donnée
                et est exprimée en années. Elle est calculée à partir des
                données recueillies par l'Insee dans le cadre du recensement de
                la population et de l'enquête sur la santé des ménages.
              </p>
              <p>
                L'espérance de vie à la naissance est un indicateur de la santé
                publique. Elle est calculée en moyenne sur une population donnée
                et est exprimée en années. Elle est calculée à partir des
                données recueillies par l'Insee dans le cadre du recensement de
                la population et de l'enquête sur la santé des ménages.
              </p>
              <p>
                L'espérance de vie à la naissance est un indicateur de la santé
                publique. Elle est calculée en moyenne sur une population donnée
                et est exprimée en années. Elle est calculée à partir des
                données recueillies par l'Insee dans le cadre du recensement de
                la population et de l'enquête sur la santé des ménages.
              </p>
              <p>
                L'espérance de vie à la naissance est un indicateur de la santé
                publique. Elle est calculée en moyenne sur une population donnée
                et est exprimée en années. Elle est calculée à partir des
                données recueillies par l'Insee dans le cadre du recensement de
                la population et de l'enquête sur la santé des ménages.
              </p>
            </article>
          </section>
        </section>
      </main>
    );
  } else {
    return "loading";
  }
}
