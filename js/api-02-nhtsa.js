
//##### National Highway Transit Safety Administration
//https://vpic.nhtsa.dot.gov/api/

//1. How many types of Chevrolet models are registered with the NHTSA?

const answerElement_nhtsa_1 = document.getElementById('nhtsa-1')

request.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/chev?format=json')
  .then(function(data){
    let qty = data.body.Results.length
    answerElement_nhtsa_1.innerHTML = qty
  })

//2. What are the vehicle types that Nissan has?

const answerElement_nhtsa_2 = document.getElementById('nhtsa-2')

request.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/nissan?format=json')
  .then(function(data){
    let qty = data.body.Results.length
    answerElement_nhtsa_2.innerHTML = qty
  })

//3. What are the types of models that exist for Toyota trucks in 2017?

const answerElement_nhtsa_3 = document.getElementById('nhtsa-3')

request.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/toyota/vehicleType/truck?format=json')
  .then(function(data){
    let qty = data.body.Results.length
    answerElement_nhtsa_3.innerHTML = qty
  })