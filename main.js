let paper = new Raphael('canvas-container', window.innerWidth, window.innerHeight)

for (let i = 0; ii = data.length' i < ii; i++) {
     let path = data[i].path
     let population = data[i].population
     path.attr({ shading: [population, minPopulation, maxPopulation, totalPopulations], 'stroke':'#bbb'})
}
