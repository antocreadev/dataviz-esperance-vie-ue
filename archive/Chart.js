// --- IMPORT ---
import { interpolateCubehelixLong, selection } from "d3";
import ReactEchart from "echarts-for-react";
import { useEffect, useMemo, useState } from "react";
export default function ChartGlobalLifeSpanInEU() {
  const [isLoadingData, setLoadingData] = useState(false); // state for loading data
  const [data, setData] = useState(null); // state for API
  const [options, setOptions] = useState(undefined);
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
  // --- FUNCTIONS ---
  const getAllData = () => {
    return data.Root.data.record;
  };
  // OBTIENT LES DONNEES D'UN PAYS
  const getSelectDataCountry = (data, countrie) => {
    return data.filter((item) => item.field[0]._text === countrie);
  };
  // OBTIENT LES NOMS DES PAYS
  const getNameCountries = (getAllData) => {
    const tab = [];
    getAllData.map((item) => {
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
  };
  // OBTIENT LES ANNEES DES PAYS
  const getYears = (getSelectDataCountry) => {
    const tab = [];
    getSelectDataCountry.map((item) => {
      item.field[2]._text ? tab.push(item.field[2]._text) : null;
    });
    return tab;
  };
  // OBTIENT LA POPULATION D'UN PAYS PAR ANNEE
  const getDataCountryByYear = (getSelectDataCountry, year) => {
    const data = getSelectDataCountry.filter(
      (item) => item.field[2]._text === year
    );
    return data[0].field[3]._text;
  };
  // OBTIENT LES TOUTES LES DONNÉES IMPORTANTES
  const getAllPopulationCountry = (getSelectDataCountry) => {
    const tab = [];
    getSelectDataCountry.map((item) => {
      item.field[3]._text ? tab.push(item.field[3]._text) : null;
    });
    return tab;
  };
  const allValuesByValue2020Sorted = useMemo(() => {
    if (data) {
      const DATA = data.Root.data.record;
      const tab = [];
      DATA.map((item) => {
        item.field[2]._text === "2020" ? tab.push(item.field[3]._text) : null;
      });
      return tab.sort((a, b) => a - b);
    }
  }, [data]);
  // FORMATE LES DONNEES POUR E CHARTS
  const formatDataForEcharts = (data) => {
    const tab = [];
    data.map((item) => {
      tab.push({
        data: getAllPopulationCountry(getSelectDataCountry(getAllData(), item)),
        name: item,
        type: "bar",
        areaStyle: {},
        emphasis: {
          focus: "series",
        },
      });
    });
    return tab;
  };

  // SETOPTION
  useEffect(() => {
    if (data) {
      console.log(
        getAllPopulationCountry(getSelectDataCountry(getAllData(), "France"))
      );
      setOptions({
        color: [
          "#496551",
          "#EB9494",
          "#5c7f67",
          "#BDEA96",
          "#B698EB",
          "#666666",
          "#322020",
          "#98ADEB",
          "#F2EFEF",
          "#24321a",
          "#A3E9C0",
          "#5D5656",
          "#434166",
          "#fae5e5",
          "#100f0f",
          "#EB8F8F",
          "#665E41",
          "#E2E2E2",
          "#98EBB0",
          "#A2A8EB",
          "#EBB38F",
          "#5F6641",
          "#98E8EB",
          "#D2A8EB",
          "#EB9E98",
          "#EBB1C2",
          "#416645",
          "#EBD18F",
          "#EAE692",
          "#EBBEB0",
          "#415B66",
          "#E398EB",
          "#E9E7E7",
          "#EBCFB0",
          "#ecf4e7",
          "#EBE1B0",
        ],
        title: {
          text: "Life span",
          textStyle: {
            color: "#100f0f",
          },
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          textStyle: {
            color: "#100f0f",
          },
          data: getNameCountries(getAllData()),
          type: "scroll",
          bottom: 5,
          selected: {
            Belgique: false,
            Allemagne: false,
            Autriche: false,
            Chypre: false,
            Croatie: false,
            Danemark: false,
            Espagne: false,
            Estonie: false,
            Finlande: false,
            Grèce: false,
            Hongrie: false,
            Irlande: false,
            Italie: false,
            Lettonie: false,
            Lituanie: false,
            Luxembourg: false,
            Malte: false,
            "Pays-Bas": false,
            Pologne: false,
            "République slovaque": false,
            "République tchèque": false,
            Roumanie: false,
            Slovénie: false,
            Suède: false,
            Portugal: false,
          },
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: getYears(getSelectDataCountry(getAllData(), "France")),
            name: "Année",
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "Âge en année",
            min: 65,
            max: 85,
          },
        ],
        series: formatDataForEcharts(getNameCountries(getAllData())),
      });
      console.log(formatDataForEcharts(getNameCountries(getAllData())));
    }
  }, [data]);

  // --- TEST IF DATA EXIST ---
  if (isLoadingData === true) return <p>Loading...</p>; // loading
  if (!data || !options) return <p>No data exist</p>; // no data
  return (
    <section>
      <ReactEchart option={options} />
    </section>
  );
}
