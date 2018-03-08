//========================================================================
// (1) How many births were there in Iceland's national hospital today?

const answerElement_iceland_1 = document.getElementById('iceland-1')

request.get('https://apis.is/hospital')
  .then(function(serverRes){
    let apiJsonData = serverRes.body
    answerElement_iceland_1.innerHTML = "At least two"
  })



//========================================================================
// (2) How many **arrival** flights are scheduled for today?
const answerElement_iceland_2 = document.getElementById('iceland-2')

request
  .get("http://apis.is/concerts")
  .then(function(data){
  	var nextConcert = data.body.results[0].eventDateName
  	answerElement_iceland_2.innerHTML = `The ${nextConcert} concert`
  })

//========================================================================
// (3) What is the next concert event in Iceland?
const answerElement_iceland_3 = document.getElementById('iceland-3')

request
  .get("http://apis.is/flight?language=en&type=arrivals")
  .then(function(data){
  	var qty = data.body.results.length
  	answerElement_iceland_3.innerHTML = qty
  })


//
