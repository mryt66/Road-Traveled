//Creating a map 
    let map = L.map('map'); 
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 15,
    attribution: '© OpenStreetMap'
    }).addTo(map); 
    var start = L.latLng(52.229676, 21.012229);
    var end = L.latLng(52.406374, 16.925168);
    var bounds = L.latLngBounds(start, end);
    map.fitBounds(bounds);

    var coords= [];
    var last, distance;
    var iterator=0;
    var total_Distance=0;
    var a=0;
    var popup = L.popup();


    function onMapClick(e) 
    {
        //Everytime you click somewhere, it creates a line and adds i
        popup
            .setLatLng(e.latlng)
            let marker = L.marker(e.latlng).addTo(map);
            coords.push([e.latlng.lat,e.latlng.lng]);
            polyline = L.polyline(coords).addTo(map);

        if (a>-1)
        {
            var pointA = L.latLng(coords[a]);
            var pointB = L.latLng(coords[a+1]);
            distance = pointA.distanceTo(pointB);
            total_Distance+=parseInt(distance)/1000;
            
        }
        
        document.getElementById('result').innerHTML = 'Entire distance equals: ' + total_Distance.toFixed(3) + ' km';
        a++;
    }


    function onunit(scaler, unit)
    {
        document.getElementById('result').innerHTML = 'Entire distance equals: ' + (total_Distance * scaler).toFixed(3) + ' '+unit;
    }

    map.on('click', onMapClick);
