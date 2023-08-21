// --- IMPORT ---
import * as echarts from "echarts"; // test au pif
import ReactEchart from "echarts-for-react";
import Geo from "../public/data/europe.json";
import { useEffect, useMemo, useState } from "react";

import data from "../public/data/EsperanceVieEU1960_2020.json";
import dataHci from "../public/data/hci.json";
import dataPib from "../public/data/PIB.json";
import dataSanitationServices from "../public/data/sanitationServices.json";

export default function ChartGlobalLifeSpanInEU() {
  // console.log(EsperanceVieEU1960_2020);
  echarts.registerMap("Europe", Geo);

  const [options, setOptions] = useState({});

  // ----- FUNCTION -----
  // format data for the chart with the value 2020 sorted and the name of the country
  const formatData = useMemo(() => {
    const DATA = data.Root.data.record;
    const tab = [];
    DATA.map((item) => {
      item.field[2]["#text"] === "2020"
        ? tab.push({
            value: item.field[3]["#text"],
            name: item.field[0]["#text"],
          })
        : null;
    });
    return tab.sort((a, b) => a.value - b.value);
  }, [data]);
  const nameCountrieSortedByValue2020 = useMemo(() => {
    const DATA = data.Root.data.record;
    const tab = [];
    DATA.map((item) => {
      item.field[2]["#text"] === "2020"
        ? tab.push({
            value: item.field[3]["#text"],
            name: item.field[0]["#text"],
          })
        : null;
    });
    tab.sort((a, b) => a.value - b.value);
    const tabName = [];
    tab.map((item) => {
      tabName.push(item.name);
    });
    return tabName;
  }, [data]);
  const Contries_tab = [
    "Allemagne",
    "Autriche",
    "Belgique",
    "Bulgarie",
    "Croatie",
    "Danemark",
    "Espagne",
    "Estonie",
    "Finlande",
    "France",
    "Grèce",
    "Hongrie",
    "Irlande",
    "Italie",
    "Lettonie",
    "Lituanie",
    "Luxembourg",
    "Malte",
    "Pays-Bas",
    "Pologne",
    "Portugal",
    "République slovaque",
    "République tchèque",
    "Roumanie",
    "Slovénie",
    "Suède",
    "Chypre",
  ];
  const dataPibByCountry = useMemo(() => {
    const DATA_PIB = dataPib.Root.data.record;
    const tab = [];
    DATA_PIB.map((item) => {
      Contries_tab.map((country) => {
        item.field[0]["#text"] === country && item.field[2]["#text"] === "2020"
          ? tab.push({
              value: item.field[3]["#text"],
              name: item.field[0]["#text"],
            })
          : null;
      });
    });
    return tab;
  }, [dataPib]);

  const dataHpiByCountry = useMemo(() => {
    const DATA_HCI = dataHci.Root.data.record;
    const tab = [];
    DATA_HCI.map((item) => {
      Contries_tab.map((country) => {
        item.field[0]["#text"] === country && item.field[2]["#text"] === "2020"
          ? tab.push({
              value: item.field[3]["#text"],
              name: item.field[0]["#text"],
            })
          : null;
      });
    });
    return tab;
  }, [dataHci]);

  const dataSanitationServicesByCountry = useMemo(() => {
    const DATA_SANITATION_SERVICES = dataSanitationServices.Root.data.record;
    const tab = [];
    DATA_SANITATION_SERVICES.map((item) => {
      Contries_tab.map((country) => {
        item.field[0]["#text"] === country && item.field[2]["#text"] === "2020"
          ? tab.push({
              value: item.field[3]["#text"],
              name: item.field[0]["#text"],
            })
          : null;
      });
    });
    return tab;
  }, [dataSanitationServices]);

  // --- SETOPTION ---
  useEffect(() => {
    // SET OPTION
    const OPTION_BAR_LIFE_SPAN = {
      visualMap: {
        show: false,
      },
      tooltip: {
        trigger: "item",
        showDelay: 0,
        transitionDuration: 0.2,
      },
      title: {
        show: true,
        text: "Espérance de vie dans l'Union européenne",
        subtext: "donnees.banquemondiale.org",
        sublink:
          "https://donnees.banquemondiale.org/indicateur/SP.DYN.LE00.IN?locations=EU",
        left: "right",
      },
      yAxis: [
        {
          show: true,
          type: "value",
          name: "Âge en année",
          min: 73, // if delete animationDurationUpdate: 1500, universalTransition: true, in series
          max: 83,
        },
        {
          show: false,
          type: "value",
          name: "PIB",
          // min: 73, // if delete animationDurationUpdate: 1500, universalTransition: true, in series
          // max: 83,
        },
      ],
      xAxis: [
        {
          show: true,
          type: "category",
          data: nameCountrieSortedByValue2020,
          boundaryGap: false,
          name: "Année",
        },
      ],

      series: [
        {
          animationDurationUpdate: 1500,
          universalTransition: true,
          data: formatData,
          type: "bar",
        },
        {
          show: false,
          yAxisIndex: 1,
          animationDurationUpdate: 1500,
          data: [],
          universalTransition: true,
          type: "line",
        },
      ],
    };
    const OPTION_BAR_LIFE_SPAN_AND_PIB = {
      visualMap: {
        show: false,
      },
      tooltip: {
        trigger: "item",
        showDelay: 0,
        transitionDuration: 0.2,
      },
      title: {
        show: false,
        text: "Espérance de vie dans l'Union européenne",
        subtext: "donnees.banquemondiale.org",
        sublink:
          "https://donnees.banquemondiale.org/indicateur/SP.DYN.LE00.IN?locations=EU",
        left: "right",
      },
      yAxis: [
        {
          show: true,
          type: "value",
          name: "Âge en année",
          min: 73, // if delete animationDurationUpdate: 1500, universalTransition: true, in series
          max: 83,
        },
        {
          show: true,
          type: "value",
          name: "PIB",
          axisLine: {
            show: true,
            lineStyle: {
              color: "#0891b2",
            },
          },
          min: 10000, // if delete animationDurationUpdate: 1500, universalTransition: true, in series
          max: 120000,
        },
      ],
      xAxis: [
        {
          show: true,
          type: "category",
          data: nameCountrieSortedByValue2020,
          boundaryGap: false,
          name: "Année",
        },
      ],

      series: [
        {
          animationDurationUpdate: 1500,
          universalTransition: true,
          data: formatData,
          type: "bar",
        },
        {
          show: true,
          yAxisIndex: 1,
          animationDurationUpdate: 1500,
          universalTransition: true,
          data: dataPibByCountry,
          type: "line",
          lineStyle: {
            color: "#0891b2",
          },
        },
      ],
    };
    const OPTION_BAR_LIFE_SPAN_SANITATION_SERVICES = {
      visualMap: {
        show: false,
      },
      tooltip: {
        trigger: "item",
        showDelay: 0,
        transitionDuration: 0.2,
      },
      title: {
        show: false,
        text: "Espérance de vie dans l'Union européenne",
        subtext: "donnees.banquemondiale.org",
        sublink:
          "https://donnees.banquemondiale.org/indicateur/SP.DYN.LE00.IN?locations=EU",
        left: "right",
      },
      yAxis: [
        {
          show: true,
          type: "value",
          name: "Âge en année",
          min: 73, // if delete animationDurationUpdate: 1500, universalTransition: true, in series
          max: 83,
        },
        {
          show: true,
          type: "value",
          name: "Assainissement",
          axisLine: {
            show: true,
            lineStyle: {
              color: "#9f1239",
            },
          },
          min: 65, // if delete animationDurationUpdate: 1500, universalTransition: true, in series
          max: 100,
        },
      ],
      xAxis: [
        {
          show: true,
          type: "category",
          data: nameCountrieSortedByValue2020,
          boundaryGap: false,
          name: "Année",
        },
      ],

      series: [
        {
          animationDurationUpdate: 1500,
          universalTransition: true,
          data: formatData,
          type: "bar",
        },
        {
          show: true,
          yAxisIndex: 1,
          animationDurationUpdate: 1500,
          universalTransition: true,
          data: dataSanitationServicesByCountry,
          type: "line",
          lineStyle: {
            color: "#9f1239",
          },
        },
      ],
    };
    const OPTION_MAP = {
      xAxis: {
        show: false,
      },
      yAxis: [
        {
          show: false,
        },
        {
          show: false,
        },
      ],
      title: {
        text: "Espérance de vie dans l'Union européenne",
        subtext: "donnees.banquemondiale.org",
        sublink:
          "https://donnees.banquemondiale.org/indicateur/SP.DYN.LE00.IN?locations=EU",
        left: "right",
      },
      tooltip: {
        trigger: "item",
        showDelay: 0,
        transitionDuration: 0.2,
      },
      visualMap: {
        show: true,

        left: "right",
        min: 73,
        max: 83,
        inRange: {
          color: ["#eb9494", "#496552"],
        },
        text: ["High", "Low"],
        calculable: true,
      },
      toolbox: {
        show: true,
        //orient: 'vertical',
        left: "left",
        top: "top",
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {},
        },
      },

      series: [
        {
          name: "L'espérance de vie",
          animationDurationUpdate: 1500,
          universalTransition: true,
          type: "map",
          roam: true,
          map: "Europe",
          emphasis: {
            label: {
              show: true,
            },
          },
          data: formatData,
        },
        {
          show: false,
          animationDurationUpdate: 1500,
          universalTransition: true,
          type: "bar",
        },
      ],
    };
    const OPTION_BAR_LIFE_SPAN_AND_HCI = {
      visualMap: {
        show: false,
      },
      tooltip: {
        trigger: "item",
        showDelay: 0,
        transitionDuration: 0.2,
      },
      title: {
        show: false,
        text: "Espérance de vie dans l'Union européenne",
        subtext: "donnees.banquemondiale.org",
        sublink:
          "https://donnees.banquemondiale.org/indicateur/SP.DYN.LE00.IN?locations=EU",
        left: "right",
      },
      yAxis: [
        {
          show: true,
          type: "value",
          name: "Âge en année",
          min: 73, // if delete animationDurationUpdate: 1500, universalTransition: true, in series
          max: 83,
        },
        {
          show: true,
          type: "value",
          name: "IDH",
          min: 0.55, // if delete animationDurationUpdate: 1500, universalTransition: true, in series
          max: 0.8,
          axisLine: {
            show: true,
            lineStyle: {
              color: "#4338ca",
            },
          },
          // min: 73, // if delete animationDurationUpdate: 1500, universalTransition: true, in series
          // max: 83,
        },
      ],
      xAxis: [
        {
          show: true,
          type: "category",
          data: nameCountrieSortedByValue2020,
          boundaryGap: false,
          name: "Année",
        },
      ],

      series: [
        {
          animationDurationUpdate: 1500,
          universalTransition: true,
          data: formatData,
          type: "bar",
        },
        {
          show: true,
          yAxisIndex: 1,
          animationDurationUpdate: 1500,
          universalTransition: true,
          data: dataHpiByCountry,
          type: "line",
          smooth: true,
          lineStyle: {
            color: "#4338ca",
          },
        },
      ],
    };
    setOptions(OPTION_MAP);
    console.log(options);
    // SET OPTION WHEN SCROLL
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 800) {
        // if screen is large
        setOptions(OPTION_BAR_LIFE_SPAN);
        if (window.scrollY >= 1700) {
          setOptions(OPTION_BAR_LIFE_SPAN_AND_PIB);
          if (window.scrollY >= 2500) {
            setOptions(OPTION_BAR_LIFE_SPAN_AND_HCI);
            if (window.scrollY >= 3000) {
              setOptions(OPTION_BAR_LIFE_SPAN_SANITATION_SERVICES);
            } else {
              setOptions(OPTION_BAR_LIFE_SPAN_AND_HCI);
            }
          } else {
            setOptions(OPTION_BAR_LIFE_SPAN_AND_PIB);
          }
        } else {
          setOptions(OPTION_BAR_LIFE_SPAN);
        }
      } else {
        setOptions(OPTION_MAP);
      }
    });
  }, [data, dataHci, dataPib, dataSanitationServices]);

  return <ReactEchart id="chart" option={options} />;
}
