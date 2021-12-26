import React, { useState, useRef, useEffect } from "react";
import { sankeyLinkHorizontal, sankey, sankeyJustify } from "d3-sankey";
import { select } from "d3-selection";
import { interpolateCool, interpolateWarm } from "d3-scale-chromatic";
import { rgb } from "d3-color";
import { transition } from "d3-transition";
import { easeLinear, range, map } from "d3";
import { hierarchy, pack } from "d3-hierarchy";

export function drawBubles({ data, width, height, svgRef }) {
  const marginLeft = 10;
  const marginRight = 10;
  const marginTop = 10;
  const marginBottom = 10;
  const padding = 3;
  console.log("drawBuble");
  console.log(data);
  const D = data.nodex;
  console.log(D);
  const I = range(V.length).filter((i) => V[i] > 0);

  const root = pack()
    .size([width - marginLeft - marginRight, height - marginTop - marginBottom])
    .padding(padding)(hierarchy({ children: I }).sum((i) => V[i]));
}
