import Map from './ol/Map.js';
import Tile from './ol/layer/Tile.js'
import View from './ol/View.js'
import OSM from './ol/source/OSM.js'
import FullScreen from './ol/control/FullScreen.js';
import MousePosition from './ol/control/MousePosition.js';
import {toStringHDMS} from './ol/coordinate.js';
import Rotate from './ol/control/Rotate.js';
import OverviewMap from './ol/control/OverviewMap.js';
import Stamen from './ol/source/Stamen.js';
import {register} from './ol/proj/proj4.js';
import TileDebug from './ol/source/TileDebug.js';

// 🗺️ Non ES6 Configuration - without Import modules
// const peta = new ol.Map({
//   layers: [
//     new Tile({
//       source: new ol.source.OSM()
//     })
//   ],
//   view: new ol.View({
//     projection: 'EPSG:4326',
//     // projection: 'EPSG:3857',
//     center: [110, -6],
//     zoom: 5
//   }),
//   target: 'peta'
// })

// 🗺️ ES6 - Import module
const peta = new Map({
  // layers: [
  //   new Tile({
  //     source: new OSM()
  //   })
  // ],
  // view: new View({
  //   projection: 'EPSG:4326',
  //   // projection: 'EPSG:3857',
  //   center: [110, -6],
  //   zoom: 5
  // }),
  target: 'peta'
})

// 🗺️ Add layers
const layerOSM = new Tile({
  source: new OSM()
})
peta.addLayer(layerOSM)

const layerStamen = new Tile({
  source: new Stamen({
    layer: 'watercolor'
  })
})

const tileDebug = new Tile({
  source: new TileDebug()
})
peta.addLayer(tileDebug)

// 🗺️ Setup projections
proj4.defs('EPSG:23866', '+proj=utm +zone=46 +ellps=WGS84 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs')
proj4.defs('EPSG:29849', '+proj=utm +zone=49 +ellps=evrstSS +towgs84=-679,669,-48,0,0,0,0 +units=m +no_defs')
proj4.defs('Batavia', '+proj=longlat +ellps=bessel +pm=jakarta +towgs84=-377,681,-50,0,0,0,0 +no_defs')
proj4.defs('Austria Lambert', '+proj=lcc +lat_0=47.5 +lon_0=13.3333333333333 +lat_1=49 +lat_2=46 +x_0=400000 +y_0=400000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs')
register(proj4)

const petaView = new View({
  projection: 'Austria Lambert',
  // projection: 'EPSG:4326',
  // projection: 'EPSG:3857',
  center: [0, 0],
  zoom: 5,
  minZoom: 1
})
peta.setView(petaView)

// 🗺️ Add controls
const fullscreenView = new FullScreen()
peta.addControl(fullscreenView)

const mousePosition = new MousePosition({
  // projection: 'Batavia',
  coordinateFormat: toStringHDMS
})
peta.addControl(mousePosition)

const inset = new OverviewMap({
  layers: [layerStamen]
})
peta.addControl(inset)

const tombolPutar = new Rotate()
peta.addControl(tombolPutar)

// 🗺️ Add interactions
const putarPeta = new ol.interaction.DragRotate({
  condition: ol.events.condition.altKeyOnly
});
peta.addInteraction(putarPeta);
