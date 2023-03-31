import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const data = [
  { name: 'Apples', value: 20 },
  { name: 'Oranges', value: 30 },
  { name: 'Bananas', value: 10 },
  { name: 'Grapes', value: 15 },
  { name: 'Pears', value: 25 }
];

const PieChart = () => {
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);
    const width = svg.attr('width');
    const height = svg.attr('height');
    const radius = Math.min(width, height) / 2;
    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.name))
      .range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56']);
    
    const pie = d3.pie()
      .value(d => d.value);
    
    const arc = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(0);
    
    const arcLabel = d3.arc()
      .outerRadius(radius - 40)
      .innerRadius(radius - 40);
    
    const arcs = pie(data);
    
    svg.selectAll('path')
      .data(arcs)
      .enter()
      .append('path')
      .attr('fill', d => color(d.data.name))
      .attr('d', arc);
    
    svg.selectAll('text')
      .data(arcs)
      .enter()
      .append('text')
      .attr('transform', d => `translate(${arcLabel.centroid(d)})`)
      .attr('dy', '0.35em')
      .text(d => d.data.name);
  }, []);

  return (
    <svg ref={ref} width={300} height={300}></svg>
  );
};

export default PieChart;
