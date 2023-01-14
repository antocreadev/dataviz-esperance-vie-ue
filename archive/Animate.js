// ------------------- IMPORT -------------------
import ReactEchart from "echarts-for-react";
import { useState, useEffect } from "react";

export default function Animate() {
  // ------------------ E CHARTS ------------------
  const option = {
    animationDurationUpdate: 500,

    title: {
      text: "Stacked Line",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      axisTick: {
        alignWithLabel: true,
      },
      boundaryGap: true,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Email",
        type: "bar",
        stack: "Total",
        data: [820, 432, 201, 334, 190, 130, 110],
        universalTransition: true,
      },
      {
        selected: false,
        name: "Union Ads",
        type: "bar",
        stack: "Total",
        data: [420, 482, 291, 534, 590, 230, 110],
        universalTransition: true,
      },
      {
        name: "Video Ads",
        type: "bar",
        stack: "Total",
        data: [250, 332, 401, 254, 390, 430, 510],
        universalTransition: true,
      },
      {
        name: "Direct",
        type: "bar",
        stack: "Total",
        data: [420, 432, 401, 324, 290, 330, 120],
        universalTransition: true,
      },
      {
        name: "Search Engine",
        type: "bar",
        stack: "Total",
        data: [920, 832, 801, 734, 1490, 1230, 1120],
        universalTransition: true,
      },
    ],
  };
  const option2 = {
    animationDurationUpdate: 500,
    title: {
      text: "Stacked Line",
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Email",
        type: "line",
        stack: "Total",
        data: [120, 132, 101, 134, 90, 230, 210],
        universalTransition: true,
      },
      {
        selected: false,
        name: "Union Ads",
        type: "line",
        stack: "Total",
        data: [220, 182, 191, 234, 290, 330, 310],
        universalTransition: true,
      },
      {
        name: "Video Ads",
        type: "line",
        stack: "Total",
        data: [150, 232, 201, 154, 190, 330, 410],
        universalTransition: true,
      },
      {
        name: "Direct",
        type: "line",
        stack: "Total",
        data: [320, 332, 301, 334, 390, 330, 320],
        universalTransition: true,
      },
      {
        name: "Search Engine",
        type: "line",
        stack: "Total",
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        universalTransition: true,
      },
    ],
  };
  const [Option, setOption] = useState(option2);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY >= 60) {
        setOption(option);
      } else {
        setOption(option2);
      }
    });
  }, []);
  // ------------------- RETURN PAGE -------------------
  return (
    <div style={{ height: "300vh" }}>
      <h1>Home</h1>
      <ReactEchart
        id="chart"
        option={Option}
        style={{
          height: "600px",
          width: "100%",
          position: "fixed",
          top: "50px",
        }}
      />
    </div>
  );
}
