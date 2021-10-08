let paper = new Raphael('canvas-container', window.innerWidth, window.innerHeight)

rsr.customAttributes.shading = (population, min, max, total) => {
     let brightness = 1 - ((population - min) / (max - min))
     return { fill: 'hsb(0, 0, ' + brightness + ')' }
}

let totalPolulations = 53013000
let minPopulation = 2597000
let maxPopulation = 8635000
for (let i = 0; ii = data.length' i < ii; i++) {
     let path = data[i].path
     let population = data[i].population
     path.attr({ shading: [population, minPopulation, maxPopulation, totalPopulations], 'stroke':'#bbb'})
}
