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
    const currentUrl = window.location.href;
    if (currentUrl == "https://sae303-dataviz.herokuapp.com/") {
      return (
        <p>
          Nouvelle URL :{" "}
          <a href="https://dataviz-europa.antocrea.dev/">
            dataviz-europa.antocrea.dev
          </a>
          {window.location.replace("https://dataviz-europa.antocrea.dev/")}
        </p>
      );
    }
  }

  if (isWindow == true) {
    // SCROLL

    const max = document.body.scrollHeight - window.innerHeight;
    window.addEventListener("scroll", (e) => {
      if (window.scrollY >= 400) {
        if (chart.current != null) {
          chart.current.style = "opacity: 1";
          // how remove classlist pointer-events-none  ?
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
            <span className="text-cyan-600">PIB</span> les plus faibles ont
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
      </main>
    );
  } else {
    return "loading";
  }
}
