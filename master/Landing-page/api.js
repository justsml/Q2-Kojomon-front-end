
//variable has to be changed to the backend once on  HEROKU
const localhostPet = "http://localhost:3000/api/v1/pet/"

function getPetNameByPetId(id){
  return fetch(localhostPet + id)
  .then(res => res.json())
  .then(res => res[0])
  .catch(error => console.log(error))
}


function updatePetNameById(id, name){

var settings = {
  "async": true,
  "crossDomain": true,
  "url": localhostPet + "name/" + id,
  "method": "PUT",
  "headers": {
    "content-type": "application/json",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify({
    name: name
  })
}

$.ajax(settings).done(function (response) {
  console.log(response);
});

}