function initMap() {
    var options = {
        zoom: 6,
        center: {lat: 52.03, lng: 19.27}
    }
    var map = new google.maps.Map(document.getElementById('map'),options);



    var markers = [
        {
            coords: {lat: 52.25, lng: 21.02},
            content:'<h1>Warszawa Bielany</h1>',
            iconImage: "/images/location.ico"
        },
        {
            coords:{lat: 50.28, lng: 19.10},
            content:'<h1>Sosnowiec</h1>',
            iconImage: "/images/location.ico"
        },
        {
            coords:{lat: 53.36, lng: 17.04},
            content:'<h1>Złotów</h1>',
            iconImage: "/images/location.ico"
        },
        {
            coords:{lat: 51.24, lng: 22.56},
            content:'<h1>Lublin</h1>',
            iconImage: "/images/location.ico"
        },
        {
            coords:{lat: 52.40, lng: 16.92},
            content:'<h1>Poznań</h1>',
            iconImage: "/images/location.ico"
        },
        {
            coords:{lat: 51.89, lng: 15.40},
            content:'<h1>Świdnica</h1>',
            iconImage: "/images/location.ico"
        },
        {
            coords:{lat: 51.65, lng: 19.35},
            content:'<h1>Pabianice</h1>',
            iconImage: "/images/location.ico"
        },
        {
            coords:{lat: 52.07, lng: 21.25},
            content:'<h1>Karczew</h1>',
            iconImage: "/images/location.ico"

        },
        {
            coords:{lat: 52.33, lng: 21.19},
            content:'<h1>Kobyłka</h1>',
            iconImage: "/images/location.ico"
        },
        {
            coords:{lat: 50.88, lng: 20.42},
            content:'<h1>Piekoszów</h1>',
            iconImage: "/images/location.ico"
        },
        {
            coords:{lat: 50.34, lng: 18.91},
            content:'<h1>Bytom</h1>',
            iconImage: "/images/location.ico"
        },
        {
            coords:{lat: 51.33, lng: 16.64},
            content:'<h1>Wołów</h1>',
            iconImage: "/images/location.ico"
        },
        {
            coords:{lat: 50.25, lng: 18.85},
            content:'<h1>Ruda Śląska </h1>',
            iconImage: "/images/location.ico"
        },
        {
            coords:{lat: 52.54, lng: 19.70},
            content:'<h1>Płock</h1>',
            iconImage: "/images/location.ico"
        },
        {
            coords:{lat: 50.97, lng: 18.21},
            content:'<h1>Kluczbork</h1>',
            iconImage: "/images/location.ico"
        },
        {
            coords:{lat: 50.39, lng: 18.90},
            content:'<h1>Radzionków</h1>',
            iconImage: "/images/location.ico"
        },
        {
            coords:{lat: 49.61, lng: 20.71},
            content:'<h1>Nowy Sącz</h1>',
            iconImage: "/images/location.ico"
        },
    ];

    for(var i = 0; i < markers.length;i++){
        addMarker(markers[i]);
    }


    function addMarker(props) {
        var marker = new google.maps.Marker({
            position:props.coords,
            map:map
        });
        // Check for customicon
        if(props.iconImage){
            // Set icon image
            marker.setIcon(props.iconImage);
        }
        // Check content
        if(props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });


            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });


        }


    }






}
