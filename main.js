let paper = new Raphael('canvas-container', window.innerWidth, window.innerHeight)

// Choropleth Maps
// Choropleth maps are maps that show some particular area or region with an associated measurement or statistic.
/*
   For the purposes of this exercise we will work with an existing map of England downloaded from
   Wikipedia. 
*/
let london = rsr.path(...)
let northwest = rsr.path(...)
let data = [
   {
      path: northwest,
      population: 7052000
   },
   {
      path: northeast,
      population: 2597000
   }
   // and so on...
]
rsr.customAttributes.shading = (population, min, max, total) => {
     let brightness = 1 - ((population - min) / (max - min))
     return { fill: 'hsb(0, 0, ' + brightness + ')' }
}

let totalPolulations = 53013000
