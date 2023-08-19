// 🗺️ Menampilkan Peta
const peta = L.map('peta');
peta.setView([0, 110], 5);

const atribusiOSM = {
  attribution: '<a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a>'
};

const basemapOSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', atribusiOSM)
basemapOSM.addTo(peta)

const basemapNaturalEarth = L.tileLayer('https://naturalearthtiles.roblabs.com/tiles/natural_earth_cross_blended_hypso_shaded_relief.raster/{z}/{x}/{y}.png');
// basemapNaturalEarth.addTo(peta)

// 🗺️Menampilkan titik, lingkaran, polyline dan polygon
const optionTitik = {
  opacity: 0.8
}

const titik = L.marker([-6.2056, 106.8297], optionTitik);
titik.addTo(peta);

const namaTitik = 'Jakarta'
const popupTitik = `
  <h1>${namaTitik}</h1>
  <a target="_blank" href="https://www.jakarta.go.id/">
    <img height="100" src="https://1.bp.blogspot.com/-XVS2yUn6Pqs/XhYfCiU4CEI/AAAAAAAADNs/rx40QuMzmkQTWtcAgZZdSFELBKdBItUvACLcBGAsYHQ/s1600/PROV%2BDKI%2BJAKARTA_PNG.png">
  </a>
`
titik.bindPopup(popupTitik)

const optionLingkaran = {
  radius: 100000,
  opacity: 1
}

const lingkaran = L.circle([-2.9693, 104.7714], optionLingkaran);
// lingkaran.addTo(peta);

const koordinatPolygon = [
  [0, 100], // vertex 1
  [-5, 100], // vertex 2
  [-5, 110], // vertex 3
  [0, 110] // vertex 4
]

const optionPolygon = {
  color: '#f210aa',
  opacity: 0.3,
}

const polygon = L.polygon(koordinatPolygon, optionPolygon);
polygon.addTo(peta)

const polyline = L.polyline(koordinatPolygon);
polyline.addTo(peta)

const koordinatPolygonLubang = [
  [
    [0, 100], // vertex 1
    [-5, 100], // vertex 2
    [-5, 110], // vertex 3
    [0, 110] // vertex 4
  ], // koordinat utama
  [
    [-2, 105], // vertex 1
    [-3, 106], // vertex 2
    [-3, 107] // vertex 3
  ], // koordinat lubang 1
  [0
    [-1, 105], // vertex 1
    [-2, 106], // vertex 2
    [-2, 107] // vertex 3
  ] // koordinat lubang 2
]

const polygonLubang = L.polygon(koordinatPolygonLubang);
// polygonLubang.addTo(peta)

const koordinatMultiPolygon = [
  [
    [
      [0, 100], // vertex 1
      [-5, 100], // vertex 2
      [-5, 110], // vertex 3
      [0, 110] // vertex 4
    ], // koordinat utama
    [
      [-2, 105], // vertex 1
      [-3, 106], // vertex 2
      [-3, 107] // vertex 3
    ], // koordinat lubang 1
    [
      [-1, 105], // vertex 1
      [-2, 106], // vertex 2
      [-2, 107] // vertex 3
    ] // koordinat lubang 2
  ], // polygon part 1
  [
    [
      [0, 120], // vertex 1
      [-5, 120], // vertex 2
      [-5, 130], // vertex 3
      [0, 130] // vertex 4
    ] // koordinat utama
    // [] // koordinat lubang 1
  ] // polygon part 2
]

const multiPolygon = L.polygon(koordinatMultiPolygon);
// multiPolygon.addTo(peta)

// 🗺️ Fungsi Event
const eventClick = function(e){
  const koordinat = e.latlng
  const y = koordinat.lat
  const x = koordinat.lng

  const titikEvent = L.marker([y, x])
  return titikEvent.addTo(peta);
}

// peta.on('click', eventClick)

let koordinatEventPolygon = []
let eventPolygon = L.polygon(koordinatEventPolygon)

const eventClickPolygon = function(e){
  const koordinat = e.latlng
  const y = koordinat.lat
  const x = koordinat.lng
  
  koordinatEventPolygon.push([y, x])
  
  eventPolygon = L.polygon(koordinatEventPolygon)
}

peta.on('click', eventClickPolygon)

const buttonSubmit = document.createElement('button');
buttonSubmit.innerHTML = 'SUBMIT'
document.body.appendChild(buttonSubmit)

buttonSubmit.onclick = function(){
  return eventPolygon.addTo(peta)
}

const buttonReset = document.createElement('button')
buttonReset.innerHTML = 'RESET KOORDINAT'
document.body.appendChild(buttonReset)

buttonReset.onclick = function(){
  return koordinatEventPolygon = []
}