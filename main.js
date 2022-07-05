let latitude = 28.028273
let longitude = 73.336809

mapboxgl.accessToken  = "pk.eyJ1IjoiYWFkaS1rYXVzaGlrIiwiYSI6ImNsNTgyNDRiMzF5b3UzZXBwYTY4dG8xa2kifQ.G3vohSNZGTCuEKhP3n9Hew"
var map = new mapboxgl.Map(
    {
        container:'map',
        style:'mapbox://styles/mapbox/streets-v11',
        center:[longitude,latitude],
        zoom : 16
    }
)
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions : {
            enableHighAccuracy: true
        },
        trackUserLocation : true
    })
)


var img1 = document.querySelector('#junagarh')

var marker1 = new mapboxgl.Marker({
    element:img1
})
.setLngLat([ 73.31814639953919, 28.022157474921816,])
.addTo(map)

var img2 = document.querySelector('#haveli')

var marker2 = new mapboxgl.Marker({
    element:img2
})
.setLngLat([  73.30482304270122,28.01216528655645,])
.addTo(map)

var img3 = document.querySelector('#lalgarh')

var marker3 = new mapboxgl.Marker({
    element:img3
})
.setLngLat([ 73.33123090460568 , 28.04186102390873])
.addTo(map)

var img4 = document.querySelector('#karni')

var marker4 = new mapboxgl.Marker({
    element:img4
})
.setLngLat([ 73.33266031882516, 28.01395590140541])
.addTo(map)