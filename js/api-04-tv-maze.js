// ##### TV Maze
// https://www.tvmaze.com/ap

//1. What is the average rating for the show Better Call Saul?

const answerElement_tvmaze_1 = document.getElementById('tvmaze-1')

request.get('http://api.tvmaze.com/search/shows?q=better-call-saul')
  .then(function(data){
    let rating = data.body[0].show.rating.average
    answerElement_tvmaze_1.innerHTML = rating
  })

//2. When was the premiere date for the 9th season of Friends?

const answerElement_tvmaze_2 = document.getElementById('tvmaze-2')

request.get('http://api.tvmaze.com/shows/431/seasons')
  .then(function(data){
    let premiere = data.body[8].premiereDate
    answerElement_tvmaze_2.innerHTML = premiere
  })

//3. How many shows has actor Andrew Grimes (of the Walking Dead) appeared in?

const answerElement_tvmaze_3 = document.getElementById('tvmaze-3')

request.get('http://api.tvmaze.com/people/10257/castcredits')
  .then(function(data){
    let shows = data.body.length
    answerElement_tvmaze_3.innerHTML = shows
  })