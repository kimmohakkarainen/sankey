import React, { useState, useRef, useEffect } from "react";
import { sankeyLinkHorizontal, sankey, sankeyJustify } from "d3-sankey";
import { select } from "d3-selection";
import { interpolateCool, interpolateWarm } from "d3-scale-chromatic";
import { rgb } from "d3-color";
import { transition } from "d3-transition";
import { easeLinear } from "d3";
import { calculateSankey, drawSankey } from "./drawsankey";

export default function Sankey({ data, width, height }) {
  const [index, setIndex] = useState(0);
  const svgRef = useRef(null);

  function onClick() {
    if (index + 1 < data.length) {
      setIndex(1 + index);
    } else {
      setIndex(0);
    }
    console.log("onClick");
    drawSankey({ data: data[index], width, height, svgRef });
  }

  useEffect(() => {
    drawSankey({ data: data[index], width, height, svgRef });
  });

  return (
    <svg
      width={width}
      height={height}
      onClick={onClick}
      ref={svgRef}
      style={{
        userSelect: "none"
      }}
    >
      <defs />
      <g className="nodes" style={{ stroke: "#000", strokeOpacity: 0.5 }} />
      <g
        className="links"
        style={{ fill: "none", stroke: "#000", strokeOpacity: 0.3 }}
      />
      <g className="texts" />
    </svg>
  );
}
