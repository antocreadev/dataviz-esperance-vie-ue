import Chart from "../components/Chart";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function index() {
  // STATE
  const [isWindow, setIsWindow] = useState(false);
  const [scrollY, setScrollY] = useState(null);
  const chart = useRef(null);

  // IS WINDOW ?
  useEffect(() => {
    if (typeof isWindow === "undefined") {
      setIsWindow(false);
    } else {
      setIsWindow(true);
    }
  }, []);

  if (isWindow === true) {
    // SCROLL
    const max = document.body.scrollHeight - window.innerHeight;
    window.addEventListener("scroll", (e) => {
      if (window.scrollY >= 400) {
        if (chart.current !== null) {
          chart.current.style = "opacity: 1";
          // how remove classlist pointer-events-none  ?
          chart.current.classList.remove("pointer-events-none");
        }
      } else {
        if (chart.current !== null) {
          chart.current.style = "opacity: 0";
          chart.current.classList.add("pointer-events-none");
        }
      }
      const scroll = window.scrollY;
      const scrollPercent = (scroll / max) * 100;
      setScrollY(scrollPercent);
    });
  }

  // RETURN JSX
  if (isWindow === true) {
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
          style={{ height: "100vh", display: "flex", alignItems: "center", backgroundColor: "white" }}
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
              Life expectancy in the European Union
            </h1>
            <p>Which country has the longest life expectancy?</p>
            <p>What explains these differences?</p>
            <p>What are the factors influencing life expectancy?</p>
          </section>
        </section>

        <div
          ref={chart}
          className="chart w-50vw top-1/3 fixed left-1/3 ml-28 opacity-0 transition-opacity pointer-events-none"
        >
          <Chart />
        </div>
        <section className="w-30vw m-5 prose mb-52">
          <h2 className="text-primary">Mapping the European Union</h2>
          <p>
            The map shows the countries of the European Union with different
            color densities ranging from
            <span className="text-primary"> green</span> (countries with high life expectancy) to
            <span className="text-error"> pink</span> (countries with low life expectancy).
          </p>
          <p>
            The life expectancy data is from the year 2020 and is sourced from
            the World Bank.
          </p>
          <p>
            You can interact with the map by hovering over the countries or by
            adjusting the density bar in the legend.
          </p>
        </section>
        <section className="w-30vw m-5 prose  mb-52 ">
          <h2 className="text-primary">
            Which country has the highest life expectancy?
          </h2>
          <p>
            According to data from the World Bank in 2020, the country with the
            highest life expectancy is
            <span className="text-primary"> Malta</span> with approximately
            <span className="text-primary"> 82 years</span>, while the lowest life expectancy
            is in
            <span className="text-error"> Bulgaria</span> with approximately
            <span className="text-error"> 72 years</span>.
          </p>
          <p>
            We can observe that countries in Northern Europe, such as
            <span className="text-primary"> Denmark</span> and
            <span className="text-primary"> Scandinavian countries</span>, have the highest life expectancy,
            with averages of
            <span className="text-primary"> 80 years</span> and above. In contrast,
            Eastern European countries such as
            <span className="text-error"> Bulgaria</span> and
            <span className="text-error"> Romania</span> have lower life expectancies,
            with averages of less than
            <span className="text-error"> 75 years</span>. It is interesting to note
            that the differences between countries are quite significant, with
            gaps of over
            <span className="font-bold"> 10 years</span> between some countries.
          </p>
          <h4>How can we explain these differences?</h4>
        </section>
        <section className="w-30vw m-5 prose   mb-52">
          <h2 className="text-primary">GDP of the country</h2>
          <p>
            Gross Domestic Product (GDP) is the economic indicator that
            quantifies the total value of annual "wealth production" carried out
            by economic agents (households, businesses, public administrations)
            residing within a territory. GDP is the main indicator for measuring
            the economic production within a country and one of the major
            aggregates of national accounts. GDP reflects the internal economic
            activity of a country, and the variation of GDP from one period to
            another is supposed to measure its economic growth rate.
          </p>
          <p>
            We can see that GDP is linked to life expectancy. In fact, countries
            with the lowest GDP have the lowest life expectancy, such as
            <span className="text-error"> Latvia</span> and
            <span className="text-error"> Hungary</span>. On the other hand,
            countries with higher GDPs such as
            <span className="text-primary"> France</span> and
            <span className="text-primary"> Sweden</span> have higher life
            expectancies.
          </p>
          <p>
            The data is from 2020 and comes from the World Bank's national
            accounts and OECD national accounts data files.
          </p>
        </section>
        <section className="w-30vw m-5 prose   mb-52">
          <h2 className="text-primary">
            HDI - Human Development Index
          </h2>
          <p>
            The Human Development Index (HDI) is an indicator that demonstrates
            investment in human capital, which is the population's investment in
            terms of survival, education, and health.
          </p>
          <p>
            Similar to GDP, HDI also influences life expectancy, although there
            are some exceptions such as
            <span className="text-primary"> Luxembourg</span> with a low HDI
            compared to its life expectancy or the reverse case of
            <span className="text-error"> Poland</span> having a high HDI but
            slightly lower life expectancy.
          </p>
          <p>
            Calculations are based on World Bank services using the methodology
            described in  {" "}
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
            People using safely managed sanitation services
          </h2>
          <p>
            People using
            <span className="text-rose-800"> safely managed sanitation </span>
            services. Specifically, the chart shows the percentage of people
            using improved sanitation facilities that are not shared with other
            households and where excreta are safely disposed of in situ or
            transported and treated off-site. Improved sanitation facilities
            include flush/pour-flush toilets connected to sewer systems,
            septic tanks, or latrines with a slab: ventilated improved pit
            latrines, pit latrines with a slab, or composting toilets.
          </p>

          <p>
            The percentages of people using improved sanitation facilities are
            generally related to life expectancy. There are some exceptions,
            such as
            <span className="text-primary"> France</span> and
            <span className="text-primary"> Portugal</span> having high life
            expectancies but relatively poorer sanitation. Another exception is
            <span className="text-error"> Lithuania</span> which has a low life
            expectancy but good sanitation.
          </p>

          <p>
            The data is from the World Bank in 2020, specifically the WHO/UNICEF
            Joint Monitoring Programme (JMP) for {" "}
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
