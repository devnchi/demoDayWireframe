// https://api.nasa.gov/planetary/apod?api_key=tacqQB2Bx00ubPgP4JHHDsUqGs5iBgmx1YwevpWw&date=2020-04-25
// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// console.log(today, date)
let userDate = document.getElementById('date');
let check = document.getElementById('activate');
let formCheck = document.querySelector('input');


check.addEventListener('click',()=>{

console.log(userDate.value)
fetch(`https://api.nasa.gov/planetary/apod?api_key=tacqQB2Bx00ubPgP4JHHDsUqGs5iBgmx1YwevpWw&date=${userDate.value}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      console.log(response)
      // console.log(response.url)
      if(response.media_type === "video"){
        document.getElementById('nasaFrame').src= response.url
      }else{
        document.getElementById('nasaPic').src= response.url
      }

      document.querySelector('#content').src= response.url

      let picDescript = document.getElementById('picDescription');
      picDescript.innerText = response.explanation;

    })
    .catch(err => {
        if (userDate.value)
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });

})
