/*
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 34.063380,
            lng: -118.358080},
        zoom: 6
        });    
    }
*/
function initMap() {
    var losAngeles = {
        lat: 34.063380, 
        lng: -118.358080
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: losAngeles,
        zoom: 11,
        mapTypeId: 'roadmap',
    });
    var uluru = {lat: 34.063380, lng: -118.360080};
    var marker = new google.maps.Marker({position: uluru, map: map});
}