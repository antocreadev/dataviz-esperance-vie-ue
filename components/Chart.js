// --- IMPORT ---
import * as echarts from "echarts"; // test au pif
import ReactEchart from "echarts-for-react";
import Geo from "../public/data/europe.json";
import { useEffect, useMemo, useState } from "react";
export default function ChartGlobalLifeSpanInEU() {
  echarts.registerMap("Europe", Geo);
  const [isLoadingData, setLoadingData] = useState(false); // state for loading data
  const [data, setData] = useState(null); // state for API
  const [options, setOptions] = useState();
  // --- FETCH DATA  ---
  useEffect(() => {
    setLoadingData(true);
    fetch("http://localhost:3000/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoadingData(false);
      });
  }, []);
  // ----- FUNCTION -----
  // GET ALL VALUES BY COUNTRIES
  const allValuesByCountries = useMemo(() => {
    if (data) {
      const DATA = data.Root.data.record;
      const tab = [];
      DATA.map((item) => {
        item.field[0]._text ? tab.push(item.field[0]._text) : null;
      });
      let different = [];
      // Parcours du tableau d'entrée
      for (let i = 0; i < tab.length; i++) {
        // Si l'élément courant n'est pas dans le nouveau tableau, on l'ajoute
        if (!different.includes(tab[i])) {
          different.push(tab[i]);
        }
      }
      // On retourne le nouveau tableau
      return different;
    }
  }, [data]);
  // GET ALL VALUES SORTED BY VALUE 2020
  const allValuesByValue2020 = useMemo(() => {
    if (data) {
      const DATA = data.Root.data.record;
      const tab = [];
      DATA.map((item) => {
        item.field[2]._text === "2020" ? tab.push(item.field[3]._text) : null;
      });
      return tab;
    }
  }, [data]);
  // GET ALL VALUES DATES SORTED BY DATE
  const allDate = useMemo(() => {
    if (data) {
      const DATA = data.Root.data.record;
      const tab = [];
      DATA.map((item) => {
        item.field[2]._text ? tab.push(item.field[2]._text) : null;
      });
      let different = [];
      // Parcours du tableau d'entrée
      for (let i = 0; i < tab.length; i++) {
        // Si l'élément courant n'est pas dans le nouveau tableau, on l'ajoute
        if (!different.includes(tab[i])) {
          different.push(tab[i]);
        }
      }
      // On retourne le nouveau tableau
      return different;
    }
  }, [data]);
  // GET ALL VALUES SORTED BY VALUE 2020 from the smallest to the biggest
  const allValuesByValue2020Sorted = useMemo(() => {
    if (data) {
      const DATA = data.Root.data.record;
      const tab = [];
      return tab.sort((a, b) => a - b);
    }
  }, [data]);
  // format data for the chart with the value 2020 sorted and the name of the country
  const formatData = useMemo(() => {
    if (data) {
      const DATA = data.Root.data.record;
      const tab = [];
      DATA.map((item) => {
        item.field[2]._text === "2020"
          ? tab.push({
              value: item.field[3]._text,
              name: item.field[0]._text,
            })
          : null;
      });
      return tab.sort((a, b) => a.value - b.value);
    }
  }, [data]);

  const nameCountrieSortedByValue2020 = useMemo(() => {
    if (data) {
      const DATA = data.Root.data.record;
      const tab = [];
      DATA.map((item) => {
        item.field[2]._text === "2020"
          ? tab.push({
              value: item.field[3]._text,
              name: item.field[0]._text,
            })
          : null;
      });
      tab.sort((a, b) => a.value - b.value);
      const tabName = [];
      tab.map((item) => {
        tabName.push(item.name);
      });
      return tabName;
    }
  }, [data]);

  // --- SETOPTION ---
  useEffect(() => {
    if (data) {
      const DATA = data.Root.data.record;
      // CONSOLE LOG

      console.log("ALL DATA", DATA);
      console.log("NAME", allValuesByCountries);
      console.log("value 2020", allValuesByValue2020);
      console.log("value 2020 sorted", allValuesByValue2020Sorted);
      console.log("fomat data", formatData);
      console.log(nameCountrieSortedByValue2020);

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
          text: "Life span in Europe",
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
        ],
      };
      const OPTION_MAP = {
        xAxis: {
          show: false,
        },
        yAxis: {
          show: false,
        },
        title: {
          text: "Life span in Europe",
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
            name: "Life span",
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
        ],
      };
      setOptions(OPTION_MAP);
      // SET OPTION WHEN SCROLL
      window.addEventListener("scroll", () => {
        if (window.scrollY >= 200) {
          // if screen is large
          setOptions(OPTION_BAR_LIFE_SPAN);
        } else {
          setOptions(OPTION_MAP);
        }
      });
    }
  }, [data]);
  // --- TEST IF DATA EXIST ---
  if (isLoadingData === true) return <p>Loading...</p>; // loading
  if (!data || !options) return <p>No data exist</p>; // no data
  return <ReactEchart id="chart" option={options} />;
}