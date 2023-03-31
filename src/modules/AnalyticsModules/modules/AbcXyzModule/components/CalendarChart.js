import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const CalendarChart = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = 800;
    const height = 120;
    const cellSize = 15;

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    const format = d3.timeFormat("%Y-%m-%d");
    const parse = d3.timeParse("%Y-%m-%d");

    const colorScale = d3.scaleQuantize()
      .domain([0, 100])
      .range(["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"]);

    const minDate = d3.min(data, d => parse(d.date));
    const maxDate = d3.max(data, d => parse(d.date));

    const days = d3.timeDays(minDate, d3.timeDay.offset(maxDate, 1));
    const months = d3.timeMonths(minDate, d3.timeMonth.offset(maxDate, 1));

    const monthLabels = svg.selectAll(".month-label")
      .data(months)
      .enter()
      .append("text")
      .text(d => d.toLocaleString("default", { month: "short" }))
      .attr("x", (d, i) => (i * cellSize * 7) + (cellSize * 3.5))
      .attr("y", 10)
      .attr("text-anchor", "middle")
      .attr("class", "month-label");

    const dayRects = svg.selectAll(".day")
      .data(days)
      .enter()
      .append("rect")
      .attr("class", "day")
      .attr("width", cellSize)
      .attr("height", cellSize)
      .attr("x", d => d3.timeWeek.count(d3.timeYear(d), d) * cellSize)
      .attr("y", d => d.getDay() * cellSize)
      .attr("fill", "#ebedf0")
      .datum(d => format(d));

    dayRects.filter(d => data.find(e => e.date === d))
      .attr("fill", d => colorScale(data.find(e => e.date === d).count));

    const legend = svg.selectAll(".legend")
      .data(colorScale.range())
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr("transform", (d, i) => `translate(${(i * cellSize) + (cellSize * 2)}, ${height - (cellSize * 1.5)})`);

    legend.append("rect")
      .attr("width", cellSize)
      .attr("height", cellSize)
      .style("fill", d => d);

    legend.append("text")
      .attr("x", cellSize / 2)
      .attr("y", cellSize / 2)
      .text((d, i) => `${i * 25}+`);
  }, [data]);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default CalendarChart;
