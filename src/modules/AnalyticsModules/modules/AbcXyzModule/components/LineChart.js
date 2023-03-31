import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const LineChart = () => {
  const svgRef = useRef();


  const data = [
    { month: 'Jan', sales: 100 },
    { month: 'Feb', sales: 120 },
    { month: 'Mar', sales: 80 },
    { month: 'Apr', sales: 150 },
    { month: 'May', sales: 200 },
    { month: 'Jun', sales: 180 },
    { month: 'Jul', sales: 220 },
  ];
  
  useEffect(() => {
    // Set up chart dimensions
    const margin = { top: 10, right: 10, bottom: 30, left: 40 };
    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    // Select the SVG element and set its dimensions
    const svg = d3.select(svgRef.current)
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Create scales for the x and y axes
    const x = d3.scalePoint()
      .range([0, width])
      .domain(data.map(d => d.month));
    
    const y = d3.scaleLinear()
      .range([height, 0])
      .domain([0, d3.max(data, d => d.sales)]);
    
    // Create the x and y axes
    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);

    svg.append('g')
      .attr('class', 'x-axis')
      .attr('transform', `translate(0,${height})`)
      .call(xAxis);
    
    svg.append('g')
      .attr('class', 'y-axis')
      .call(yAxis);

    // Add the line to the chart
    const line = d3.line()
      .x(d => x(d.month))
      .y(d => y(d.sales));
    
    svg.append('path')
      .datum(data)
      .attr('class', 'line')
      .attr('d', line);
  }, []);

  return <svg ref={svgRef} />;
};

export default LineChart;
