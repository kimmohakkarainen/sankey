import React, { useState, useRef, useEffect } from "react";
import { sankeyLinkHorizontal, sankey, sankeyJustify } from "d3-sankey";
import { select } from "d3-selection";
import { interpolateCool, interpolateWarm } from "d3-scale-chromatic";
import { rgb } from "d3-color";
import { transition } from "d3-transition";
import { easeLinear, schemeTableau10 } from "d3";
import { hierarchy, pack } from "d3-hierarchy";
import { range, filter } from "d3-array";

export function drawBubles({ data, width, height, svgRef }) {
  const marginLeft = 10;
  const marginRight = 10;
  const marginTop = 10;
  const marginBottom = 10;
  const padding = 3;
  const stroke = null; // a static stroke around the bubbles
  const strokeWidth = null; // the stroke width around the bubbles, if any
  const strokeOpacity = null; //
  const fillOpacity = 0.7;
  const colors = interpolateWarm;

  console.log("drawBuble");
  console.log(data.nodes);

  const D = data.nodes.map((d) => d);
  console.log(D);

  const V = data.nodes.map((d) => d.value);
  console.log(V);

  const G = null;
  const I = range(V.length).filter((i) => V[i] > 0);
  console.log(I);

  const root = pack()
    .size([width - marginLeft - marginRight, height - marginTop - marginBottom])
    .padding(padding)(hierarchy({ children: I }).sum((i) => V[i]));

  console.log(root);

  const leaf = select(svgRef.current)
    .select("g.nodes")
    .selectAll("a")
    .data(root.leaves())
    .join("a")
    .attr("transform", (d) => `translate(${d.x},${d.y})`);

  leaf
    .append("circle")
    .attr("stroke", stroke)
    .attr("stroke-width", strokeWidth)
    .attr("stroke-opacity", strokeOpacity)
    .attr("fill", (d) => colors(d.data / D.length))
    .attr("fill-opacity", fillOpacity)
    .attr("r", (d) => d.r);
}
