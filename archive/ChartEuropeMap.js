import * as echarts from "echarts"; // test au pif
import ReactEchart from "echarts-for-react"; // pas de { } car default
import Geo from "../my-app/public/data/europe.json";
import { useState, useEffect } from "react";
export default function ChartEuropeMap() {
  echarts.registerMap("Europe", Geo);
  const OPTION_MAP = {
    backgroundColor: "#ffffff",
    title: {
      text: "Europe Map",
      left: "center",
      top: "top",
      textStyle: {
        color: "#000",
      },
    },
    geo: {
      map: "Europe", // utilisez la carte de l'Europe fournie par Echarts
      zoom: 1, // ajustez le niveau de zoom
      label: {
        emphasis: {
          show: false,
        },
      },
      roam: true, // activez le panoramique et le zoom
      itemStyle: {
        normal: {
          areaColor: "#f3f3f3",
          borderColor: "#111111",
        },
        emphasis: {
          areaColor: "#e6e6e6",
        },
      },
    },
  };

  return (
    <>
      <h1>Chart Europe Map</h1>
      <div style={{ postion: "absolute", top: "200px" }}>
        <ReactEchart id="chart" option={option} />
      </div>
    </>
  );
}
