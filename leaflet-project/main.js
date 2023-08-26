// 🗺️ Menampilkan Peta
const peta = L.map('peta');
peta.setView([0, 110], 5);

const atribusiOSM = {
  attribution: '<a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a>'
};

const basemapOSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', atribusiOSM)
basemapOSM.addTo(peta)

const atribusiNaturalEarth = {
  attribution: '<a target="_blank" href="https://github.com/lukasmartinelli/naturalearthtiles#license">Natural Earth</a>'
}

const basemapNaturalEarth = L.tileLayer('https://naturalearthtiles.roblabs.com/tiles/natural_earth_cross_blended_hypso_shaded_relief.raster/{z}/{x}/{y}.png', atribusiNaturalEarth);
basemapNaturalEarth.addTo(peta)

// 🗺️Menampilkan titik, lingkaran, polyline dan polygon
// const optionTitik = {
//   opacity: 0.8
// }

// const titik = L.marker([-6.2056, 106.8297], optionTitik);
// titik.addTo(peta);

// const namaTitik = 'Jakarta'
// const popupTitik = `
//   <h1>${namaTitik}</h1>
//   <a target="_blank" href="https://www.jakarta.go.id/">
//     <img height="100" src="https://1.bp.blogspot.com/-XVS2yUn6Pqs/XhYfCiU4CEI/AAAAAAAADNs/rx40QuMzmkQTWtcAgZZdSFELBKdBItUvACLcBGAsYHQ/s1600/PROV%2BDKI%2BJAKARTA_PNG.png">
//   </a>
// `
// titik.bindPopup(popupTitik)

// const optionLingkaran = {
//   radius: 100000,
//   opacity: 1
// }

// const lingkaran = L.circle([-2.9693, 104.7714], optionLingkaran);
// lingkaran.addTo(peta);

// const koordinatPolygon = [
//   [0, 100], // vertex 1
//   [-5, 100], // vertex 2
//   [-5, 110], // vertex 3
//   [0, 110] // vertex 4
// ]

// const optionPolygon = {
//   color: '#f210aa',
//   opacity: 0.3,
// }

// const polygon = L.polygon(koordinatPolygon, optionPolygon);
// polygon.addTo(peta)

// const polyline = L.polyline(koordinatPolygon);
// polyline.addTo(peta)

// const koordinatPolygonLubang = [
//   [
//     [0, 100], // vertex 1
//     [-5, 100], // vertex 2
//     [-5, 110], // vertex 3
//     [0, 110] // vertex 4
//   ], // koordinat utama
//   [
//     [-2, 105], // vertex 1
//     [-3, 106], // vertex 2
//     [-3, 107] // vertex 3
//   ], // koordinat lubang 1
//   [
//     [-1, 105], // vertex 1
//     [-2, 106], // vertex 2
//     [-2, 107] // vertex 3
//   ] // koordinat lubang 2
// ]

// const polygonLubang = L.polygon(koordinatPolygonLubang);
// polygonLubang.addTo(peta)

// const koordinatMultiPolygon = [
//   [
//     [
//       [0, 100], // vertex 1
//       [-5, 100], // vertex 2
//       [-5, 110], // vertex 3
//       [0, 110] // vertex 4
//     ], // koordinat utama
//     [
//       [-2, 105], // vertex 1
//       [-3, 106], // vertex 2
//       [-3, 107] // vertex 3
//     ], // koordinat lubang 1
//     [
//       [-1, 105], // vertex 1
//       [-2, 106], // vertex 2
//       [-2, 107] // vertex 3
//     ] // koordinat lubang 2
//   ], // polygon part 1
//   [
//     [
//       [0, 120], // vertex 1
//       [-5, 120], // vertex 2
//       [-5, 130], // vertex 3
//       [0, 130] // vertex 4
//     ] // koordinat utama
//     // [] // koordinat lubang 1
//   ] // polygon part 2
// ]

// const multiPolygon = L.polygon(koordinatMultiPolygon);
// multiPolygon.addTo(peta)

// 🗺️ Fungsi Event
// const eventClick = function(e){
//   const koordinat = e.latlng
//   const y = koordinat.lat
//   const x = koordinat.lng

//   const titikEvent = L.marker([y, x])
//   return titikEvent.addTo(peta);
// }

// // peta.on('click', eventClick)

// let koordinatEventPolygon = []
// let eventPolygon = L.polygon(koordinatEventPolygon)

// const eventClickPolygon = function(e){
//   const koordinat = e.latlng
//   const y = koordinat.lat
//   const x = koordinat.lng
  
//   koordinatEventPolygon.push([y, x])
  
//   eventPolygon = L.polygon(koordinatEventPolygon)
// }

// peta.on('click', eventClickPolygon)

// const buttonSubmit = document.createElement('button');
// buttonSubmit.innerHTML = 'SUBMIT'
// document.body.appendChild(buttonSubmit)

// buttonSubmit.onclick = function(){
//   return eventPolygon.addTo(peta)
// }

// const buttonReset = document.createElement('button')
// buttonReset.innerHTML = 'RESET KOORDINAT'
// document.body.appendChild(buttonReset)

// buttonReset.onclick = function(){
//   return koordinatEventPolygon = []
// }

// 🗺️ Styling feature
// function getKoordinat(e){
//   console.log(e.latlng)
// }

// peta.on('click', getKoordinat)

// const iconMerah = L.icon({
//   iconUrl: './assets/images/pin-merah.png',
//   iconSize: [40, 40],
//   iconAnchor: [20, 35],
//   shadowUrl: './leaflet/images/marker-shadow.png',
//   shadowSize: [50, 50],
//   shadowAnchor: [17, 46],
//   popupAnchor: [0, -20]
// })

// const iconBiru = L.icon({
//   iconUrl: './assets/images/pin-biru.png',
//   iconSize: [40, 40],
//   iconAnchor: [20, 35],
//   shadowUrl: './leaflet/images/marker-shadow.png',
//   shadowSize: [50, 50],
//   shadowAnchor: [17, 46],
//   popupAnchor: [0, -20]
// })

// const jakarta = L.marker([-6.164048961945416, 106.8428682829039]);
// jakarta.addTo(peta)
// jakarta.bindPopup('Jakarta')

// const medan = L.marker([3.562079971717694, 98.69111452369829], {
//   icon: iconMerah
// })
// medan.addTo(peta)
// medan.bindPopup('Medan')

// const makassar = L.marker({lat: -5.154205201173973, lng: 119.38809114856952}, {
//   icon: iconBiru
// })
// makassar.addTo(peta)
// makassar.bindPopup('Makassar')

// const koordinatWilayah = [
//   [
//     [1.0299127940481423, 111.97265625000001],
//     [-2.6604814147587383, 110.74218750000001],
//     [-3.669668695683538, 115.44433593750001],
//     [4.01495962755744, 117.50976562500001]
//   ], // koordinat utama
//   [
//     [-1.21115246707424, 112.32421875000001],
//     [-2.30925003801887, 114.56542968750001],
//     [0.6783899107121523, 114.91699218750001]
//   ] // koordinat lubang
// ]

// const optionWilayah = {
//   stroke: true,
//   color: 'green',
//   weight: 5,
//   opacity: 0.5,
//   dashArray: 10,
//   dashOffset: 5,
//   lineCap: 'square',
//   fill: true,
//   fillColor: 'orange',
//   fillOpacity: 0.4,
//   fillRule: 'evenodd'
// }

// let wilayah = L.polygon(koordinatWilayah, optionWilayah)
// wilayah.addTo(peta)
// // wilayah.bindPopup('Hutan Hujan Tropis')

// const tampilGaris = document.createElement('button')
// tampilGaris.innerHTML = 'Tombol Garis'
// document.body.appendChild(tampilGaris)

// tampilGaris.onclick = function(){
//   const ubahGaris = function(kondisi){
//     peta.removeLayer(wilayah)
//     optionWilayah.stroke = kondisi
//     wilayah = L.polygon(koordinatWilayah, optionWilayah)
//     wilayah.addTo(peta)
//   }

//   if(optionWilayah.stroke === false){
//     return ubahGaris(true)
//   } else{
//     return ubahGaris(false)
//   }
// }

// const tambahUkuran = document.createElement('button')
// tambahUkuran.innerHTML = 'Tambah Ukuran Garis'
// document.body.appendChild(tambahUkuran)

// tambahUkuran.onclick = function(){
//   peta.removeLayer(wilayah)
//   optionWilayah.weight += 1 
//   wilayah = L.polygon(koordinatWilayah, optionWilayah)
//   wilayah.addTo(peta)
// }

// const kurangUkuran = document.createElement('button')
// kurangUkuran.innerHTML = 'Kurangi Ukuran Garis'
// document.body.appendChild(kurangUkuran)

// kurangUkuran.onclick = function(){
//   peta.removeLayer(wilayah)
//   optionWilayah.weight -= 1 
//   wilayah = L.polygon(koordinatWilayah, optionWilayah)
//   wilayah.addTo(peta)
// }

// 🗺️ GeoJSON
function getKoordinat(e){
  console.log(e.latlng)
}
  
peta.on('click', getKoordinat)

// const data = {
//   type: 'Feature',
//   geometry: {
//     type: 'Point',
//     coordinates: [110.4692714559845, -7.212625171059907]
//   },
//   properties: {
//     nama: 'Semarang',
//     status: 'Kota'
//   }
// }

// const dataGeoJson = L.geoJSON(data)
// dataGeoJson.addTo(peta)

const settingIcon = function(url){
  const icon  = L.icon({
    iconUrl: url,
    iconSize: [40, 40],
    iconAnchor: [20, 35],
    shadowUrl: './leaflet/images/marker-shadow.png',
    shadowSize: [50, 50],
    shadowAnchor: [17, 46],
    popupAnchor: [0, -20]
  })
  return icon
}

const iconMerah = settingIcon('./assets/images/pin-merah.png')
const iconBiru = settingIcon('./assets/images/pin-biru.png')
const iconHijau = settingIcon('./assets/images/pin-hijau.png')

// fetch('./assets/data/kota.geojson')
//   .then(response => response.json())
//   .then(function(json){
//     const dataGeoJson = L.geoJSON(json, {
//       onEachFeature: function(feature, layer){
//         layer.bindPopup(feature.properties.nama)
        
//         const status = feature.properties.status
//         if(status === 'Ibukota Negara'){
//           layer.setIcon(iconMerah)
//         } else if(status === 'Ibukota Provinsi'){
//           layer.setIcon(iconBiru)
//         } else if(status === 'Ibukota Kabupaten/Kota'){
//           layer.setIcon(iconHijau)
//         }
//       }
//     })
//     dataGeoJson.addTo(peta)
//   })

// fetch('http://geoportal.jatengprov.go.id/geoserver/wms?service=WFS&version=1.0.0&request=GetFeature&typeName=ADMIN:tipe_gunung_api_jawa_tengah_pt_330020221101090631&outputFormat=application/json')
//   .then(response => response.json())
//   .then(function(json){
//     const dataGeoJson = L.geoJSON(json, {
//       onEachFeature: function(feature, layer){
//         layer.bindPopup(feature.properties.namaobj)
//       }
//     })
//     dataGeoJson.addTo(peta)
//   })

const kota = L.geoJson.ajax("./assets/data/kota.geojson", {
  onEachFeature: function(feature, layer){
    layer.bindPopup(feature.properties.nama)
    
    const status = feature.properties.status
    if(status === 'Ibukota Negara'){
      layer.setIcon(iconMerah)
    } else if(status === 'Ibukota Provinsi'){
      layer.setIcon(iconBiru)
    } else if(status === 'Ibukota Kabupaten/Kota'){
      layer.setIcon(iconHijau)
    }
  }
})
kota.addTo(peta)

const gunungJateng = L.geoJson.ajax('http://geoportal.jatengprov.go.id/geoserver/wms?service=WFS&version=1.0.0&request=GetFeature&typeName=ADMIN:tipe_gunung_api_jawa_tengah_pt_330020221101090631&outputFormat=application/json', {
  onEachFeature: function(feature, layer){
    layer.bindPopup(feature.properties.namaobj)
  }
});
gunungJateng.addTo(peta)

const jalurPenerbangan = L.geoJson.ajax('./assets/data/penerbangan.geojson')
jalurPenerbangan.addTo(peta)

// const zoomPeta = peta.getZoom()
// if(zoomPeta < 5){
//   jalurPenerbangan.addTo(peta)
// }

const divisi = document.createElement('div')
document.body.appendChild(divisi)

const imageNegara = document.createElement('img')
imageNegara.src = './assets/images/pin-merah.png'
divisi.appendChild(imageNegara)

const labelNegara = document.createElement('span')
labelNegara.innerHTML = 'Ibukota Negara'
divisi.appendChild(labelNegara)

// 🗺️ Layer Control

const basemaps = {
  "Natural Earth": basemapNaturalEarth,
  "OpenStreetMap": basemapOSM,
}

const featureLayers = {
  'Lokasi Kota': kota,
  'Gunungapi': gunungJateng,
  'Penerbangan': jalurPenerbangan
}

const layerControl = L.control.layers(basemaps, featureLayers)
layerControl.addTo(peta)