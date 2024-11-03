let map;
let marker;

function initMap() {
    // Initialize the map centered in India
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 20.5937, lng: 78.9629 }, // Approximate center of India
        zoom: 5,
    });

    // Add a marker when the user clicks on the map
    map.addListener("click", (e) => {
        placeMarker(e.latLng);
        reverseGeocode(e.latLng);
    });
}

function placeMarker(location) {
    // Remove existing marker if any
    if (marker) marker.setMap(null);

    // Add a new marker at the clicked location
    marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}

function reverseGeocode(latlng) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: latlng }, (results, status) => {
        if (status === "OK" && results[0]) {
            document.getElementById("pickup").value = results[0].formatted_address;
        } else {
            alert("Geocode failed due to: " + status);
        }
    });
}

function useMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
            map.setCenter(userLocation);
            map.setZoom(12);
            placeMarker(userLocation);
            reverseGeocode(userLocation);
        }, () => {
            alert("Unable to retrieve your location.");
        });
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
