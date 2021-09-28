
mapboxgl.accessToken = //get access token from  https://www.mapbox.com/

navigator.geolocation.getCurrentPosition(successLocation,
    errorLocation,{
        enableHighAccuracy:true
    })
    //getting coordinates
 function successLocation(position){
   console.log(position);
   setupMap([position.coords.longitude,position.coords.latitude])
     }

function setupMap(center){
    var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v11",
        center:center,
        zoom:15
      });
      //Direction control
      map.addControl(
        new MapboxDirections({
        accessToken: mapboxgl.accessToken
        }),
        'top-left'
        );
    //    map.addControl(nav)
    const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');
}
 function errorLocation(){
   setupMap([-2.145,9.857])
 }
