"use client";
import * as d3 from "d3";
import React from "react";
import { feature } from "topojson-client";
import korea from "./korea-topo.json";

const featureData = feature(korea, korea.objects["korea-topo"]);

const KoreaMap = () => {
  const chart = React.useRef(null);

  const printD3 = React.useCallback(() => {
    const width = 500;
    const height = 500;

    const projection = d3.geoMercator().translate([0, 0]).scale(1);
    const path = d3.geoPath().projection(projection);
    const bounds = path.bounds(featureData);

    const dx = bounds[1][0] - bounds[0][0];
    const dy = bounds[1][1] - bounds[0][1];
    const x = (bounds[0][0] + bounds[1][0]) / 2;
    const y = (bounds[0][1] + bounds[1][1]) / 2;
    const scale = 0.9 / Math.max(dx / width, dy / height);
    const translate = [width / 2 - scale * x, height / 2 - scale * y] as [number, number];

    projection.scale(scale).translate(translate);
    d3.select(chart.current).selectAll("svg").remove();

    const svg = d3.select(chart.current).append("svg").attr("width", width).attr("height", height);

    const mapLayer = svg.append("g");

    mapLayer
      .selectAll("path")
      .data(featureData.features)
      .enter()
      .append("path")
      .attr("d", path)
      .style("fill", "#666");
  }, []);

  React.useEffect(() => {
    printD3();
  }, []);

  return <div ref={chart} />;
};

export default KoreaMap;
