let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -17.7862900, lng: -63.1811700 },
    zoom: 13,
  });


  /*AGREGAR EL MARCADOR A GOOGLE MAPS*/
  const marker = new google.maps.Marker({
    position: { lat: -17.7862900, lng: -63.1811700 },
    map,
  })
  /*FUNCIÓN PARA ACCEDER A LOS VALORES DE LATITUD Y LONGITUD Y COLOCARLOS EN LOS LABEL*/
  google.maps.event.addListener(marker,'position_changed',
  function(){
    let lat = marker.position.lat()
    let lng = marker.position.lng()
    $('#lat').val(lat)
    $('#lng').val(lng)
  })

  
  button.addEventListener('click',()=>{
    showUserCurrentPosition(map, marker);
  })
}

initMap();


/*OBTENER LA POSICION DE LATITUD Y LONG A TRAVES DE JS*/
function showUserCurrentPosition(map, marker){
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(
        ({coords: {latitude,longitude}})=> {
            
             const coords = {
                lat: latitude,
                lng: longitude,
            };
            map.setCenter(coords);
            map.setZoom(14);
            marker.setPosition(coords);
        },
        ()=>{
            alert("error interno");
        }
    );
  } else {
    alert(
        "Tu navegador no dispone de geolocalización"
    );
  }
}



