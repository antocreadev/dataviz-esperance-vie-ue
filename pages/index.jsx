import Chart from "../components/Chart";
import Link from "next/link";
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
      if (window.scrollY >= 400) {
        if (chart.current != null) {
          chart.current.style = "opacity: 1";
          chart.current.classList.remove("pointer-events-none");
        }
      } else {
        if (chart.current != null) {
          chart.current.style = "opacity: 0";
          chart.current.classList.add("pointer-events-none");
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
      <main >
        <div className="flex justify-center items-center flex-col w-[100vw] h-[100vh] lg:hidden">
          <div className="w-[10vw]">
            <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 226.72 255.62"><path d="M0,162.28c0-26.45,0-52.9,0-79.35,0-8.71,5.04-13.78,13.77-13.78,27.37-.02,54.74-.02,82.1,0,8.8,0,13.91,5.14,13.91,13.98,0,52.82,0,105.64,0,158.45,0,8.95-5.14,14.04-14.11,14.04-27.37,0-54.74,0-82.1,0-8.35,0-13.56-5.17-13.57-13.49-.01-26.62,0-53.23,0-79.85Zm16.99-7.02c0,20.3,0,40.59,0,60.89,0,3.79,1.07,4.87,4.91,4.87,21.96,.01,43.92,.01,65.89,0,3.82,0,4.96-1.12,4.96-4.89,0-40.43,0-80.85,0-121.28,0-3.91-1.12-4.97-5.1-4.97-21.88,0-43.76,0-65.64,0-3.99,0-5.02,1.03-5.02,4.99,0,20.13,0,40.26,0,60.39Zm45.47,84.78c.01-4.39-3.48-7.9-7.85-7.9-4.38,0-7.85,3.54-7.81,7.95,.04,4.27,3.48,7.74,7.74,7.81,4.34,.07,7.91-3.47,7.92-7.86Z"/><path d="M117.38,149.02v-16.98c.96,0,1.78,0,2.59,0,31.04,0,62.07,0,93.11,0,7.08,0,11.92,3.63,13.36,9.96,.22,.96,.26,1.98,.26,2.97,.01,27.96,.02,55.91,0,83.87,0,7.43-5.21,12.83-12.65,12.84-31.7,.06-63.4,.03-95.11,.03-.48,0-.96-.07-1.57-.11v-16.9c.99,0,1.95,0,2.92,0,26.79,0,53.59,0,80.38,0,4.5,0,5.24-.72,5.24-5.21,0-21.72,0-43.43,0-65.15,0-4.6-.74-5.33-5.43-5.33-26.54,0-53.09,0-79.63,0h-3.47Z"/><path d="M168.33,73.8c-1.19-5.53-1.77-10.59-3.37-15.3-8.74-25.68-26.58-41.36-53.39-45.26-23.69-3.45-43.59,4.95-59.35,23.01-1.26,1.45-2.23,3.73-4.69,2.98-3.09-.95-5.82-2.73-6.98-5.87-.37-1.01,.3-2.81,1.07-3.79C53.31,14.81,68.47,5.4,86.88,1.63c37.3-7.64,73.86,12.17,88.05,47.42,3.03,7.53,4.81,15.36,5.3,23.45,.13,2.2,1.11,3.15,3.17,3.33,1.82,.16,3.65,.32,5.44,.65,1.96,.36,3.7,1.23,4.29,3.33,.58,2.1-.38,3.76-1.98,5.02-4.64,3.64-9.26,7.33-14.03,10.8-3.26,2.36-7.24,1.71-9.79-1.46-3.6-4.47-7.07-9.03-10.57-13.58-1.29-1.67-1.99-3.52-.78-5.53,1.18-1.96,3.1-2.36,5.21-2.14,2.11,.23,4.21,.51,7.14,.88Z"/></svg>
          </div>
          <p className="justify">Tournez votre écran <br/> pour accéder au site.</p>
        </div>
        <div className="hidden lg:block">
          <progress
            style={{ left: "-10vw" }}
            className="progress progress-primary fixed w-120vw opacity-70 z-50"
            value={`${scrollY}`}
            max="100"
          ></progress>
          <Navbar />
          <section
            style={{ height: "100vh", display: "flex", alignItems: "center", backgroundColor : "white" }}
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
          <div
            ref={chart}
            className="chart w-50vw top-1/3 fixed left-1/3 ml-28 opacity-0 transition-opacity pointer-events-none"
          >
            <Chart />
          </div>
          <section className="w-30vw m-5 prose mb-52">
            <h2 className="text-primary">Cartographie de l'union européenne</h2>
            <p>
              La carte nous montre les pays de l'Union Européenne sous différentes
              densités de couleur allant du
              <span className="text-primary"> vert</span>, les pays avec une
              espérance de vie élevés au
              <span className="text-error"> rose </span> au moins élevé.
            </p>
            <p>
              Les données sur l'espérance de vie sont sur l'année 2020 et
              proviennent de la banque mondiale.
            </p>
            <p>
              Vous pouvez interagir avec la carte en passant sur les pays ou en
              jouant avec {/* color: ["#eb9494", "#496552"], */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-green-900 font-bold">
                la barre de densité{" "}
              </span>
              en légende.
            </p>
          </section>
          <section className="w-30vw m-5 prose  mb-52 ">
            <h2 className="text-primary">
              Quel est le pays avec la plus grande espérance de vie ?
            </h2>
            <p>
              D'après les données de la banque mondiale, en 2020, le pays avec la
              plus grande espérance de vie est{" "}
              <span className="text-primary">Malte</span> avec environ{" "}
              <span className="text-primary">82 ans</span>, au contraire la
              <span className="text-error"> Bulgarie</span> où l'espérance de vie
              est la plus faible avec environ{" "}
              <span className="text-error">72 ans</span>.
            </p>
            <p>
              Nous pouvons constater que les pays du nord de l'Europe, comme le
              <span className="text-primary"> Danemark</span> et{" "}
              <span className="text-primary">les pays scandinaves</span> ont
              l'espérance la plus élevée, avec des moyennes de{" "}
              <span className="text-primary">80 ans</span> et plus. À l'inverse,
              <span className="text-error">les pays de l'est</span> de l'Union
              Européenne, comme la <span className="text-error"> Bulgarie</span>{" "}
              et la <span className="text-error"> Roumanie</span>, ont des
              espérances de vie plus faibles, avec des moyennes de moins de{" "}
              <span className="text-error">75 ans</span>. Il est intéressant de
              noter que les différences entre les pays sont assez marquées, avec
              des écarts de plus de <span className="font-bold">10 ans </span>
              entre certains pays.
            </p>
            <h4>Comment expliquer cette différence ?</h4>
          </section>
          <section className="w-30vw m-5 prose   mb-52">
            <h2 className="text-primary">Le PIB du pays</h2>
            <p>
              Le{" "}
              <span className="text-cyan-600">
                produit intérieur brut (PIB) est l'indicateur
              </span>{" "}
              économique qui permet de quantifier la valeur totale de la «
              production de richesse » annuelle effectuée par les agents
              économiques (ménages, entreprises, administrations publiques)
              résidant à l'intérieur d'un territoire. Le{" "}
              <span className="text-cyan-600">PIB</span>
              est le principal indicateur de la mesure de la production économique
              réalisée à l’intérieur d'un pays et l'un des agrégats majeurs des
              comptes nationaux. Le <span className="text-cyan-600">
                PIB
              </span>{" "}
              reflète donc l'activité économique interne d'un pays et la variation
              du <span className="text-cyan-600">PIB</span> d'une période à
              l'autre est censée mesurer son taux de croissance économique.
            </p>
            <p>
              Nous pouvons constater que le{" "}
              <span className="text-cyan-600">PIB</span> et l'espérance de vie son
              lié. En effet, les pays ayant les
              <span className="text-cyan-600"> PIB</span> les plus faibles ont
              l'espérance de vie la plus basse comme la{" "}
              <span className="text-error">Lettonie</span> et la{" "}
              <span className="text-error">Hongrie</span>. Mais, les pays avec un
              PIB plus élevé comme la <span className="text-primary">France</span>{" "}
              ou la <span className="text-primary">Suède</span> ont une espérance
              de vie plus élevé.
            </p>
            <p>
              Les données sont datées de 2020 et proviennet des comptes nationaux
              de la Banque mondiale et des fichiers de données sur les comptes
              nationaux de l'OCDE.
            </p>
          </section>
          <section className="w-30vw m-5 prose   mb-52">
            <h2 className="text-primary">
              IDH - L'indice de développement humain
            </h2>
            <p>
              L'
              <span className="text-indigo-700">
                indice de développement humain (IDH)
              </span>{" "}
              est un indicateur démontrant l'investissement dans le capital humain
              c'est-à-dire dans la population, se mesure par la survie, la
              scolarité et la santé.
            </p>
            <p>
              Tout comme pour le <span className="text-cyan-600">PIB</span>, l'
              <span className="text-indigo-700">IDH</span> influe sur l'éspérance
              de vie, malgré quelques exceptions comme le{" "}
              <span className="text-primary">Luxembourg</span> ayant un{" "}
              <span className="text-indigo-700">IDH</span> faible comparé à son
              éspérance de vie ou l'inverse, la{" "}
              <span className="text-error">Pologne</span> ayant un{" "}
              <span className="text-indigo-700">IDH </span>
              élevé mais une espérance de vie un peu plus faible.
            </p>
            <p>
              Calculs des services de la Banque mondiale, à partir de la
              méthodologie décrite dans{" "}
              <Link
                target="_blank"
                href="https://documents.worldbank.org/en/publication/documents-reports/documentdetail/300071537907028892/methodology-for-a-world-bank-human-capital-index"
              >
                Kraay
              </Link>
              .
            </p>
          </section>
          <section className="w-30vw m-5 prose mb-52">
            <h2 className="text-primary">
              Personnes utilisant des services d'assainissement gérés en toute
              sécurité
            </h2>
            <p>
              Personnes utilisant des services d'
              <span className="text-rose-800">assainissement</span> gérés en toute
              sécurité. Plus précisement le graphique montre le pourcentages de
              personnes utilisant des installations sanitaires améliorées qui ne
              sont pas partagées avec d'autres ménages et où les excréments sont
              éliminés en toute sécurité sur place ou transportés et traités hors
              site. Les installations d'
              <span className="text-rose-800">assainissement</span> améliorées
              comprennent les chasses d'eau/à chasse d'eau vers les réseaux
              d'égouts, les fosses septiques ou les latrines à fosse : les
              latrines à fosse ventilées améliorées, les toilettes mixtes ou les
              latrines à fosse avec dalles.
            </p>
            <p>
              Les pourcentages de personnes utilisant des installations sanitaires
              améliorées sont globalement liés à l'espérance de vie. Hormis
              quelques exceptions comme la{" "}
              <span className="text-primary">France</span> et le{" "}
              <span className="text-primary">Portugal</span> ayant une espérance
              de vie élevéz mais un{" "}
              <span className="text-rose-800">assainissement</span> moins bon. Ou
              la <span className="text-error">Lituanie</span> qui a une espérance
              de vie faible mais un bon{" "}
              <span className="text-rose-800">assainissement</span>.
            </p>
            <p>
              Donnée de la Banque mondiale datant de 2020, plus précisement
              WHO/UNICEF Joint Monitoring Programme (JMP) for{" "}
              <Link target="_blank" href="https://washdata.org/">
                Water Supply, Sanitation and Hygiene
              </Link>
              .
            </p>
          </section>
          <section style={{ height: "25px" }}></section>
        </div>
      </main>
    );
  } else {
    return "loading";
  }
}