var heartLike = document.getElementsByClassName("fas fa-heart");
var trash = document.getElementsByClassName("fa fa-trash");
var search = document.getElementById("searchBox");
var sendSearch = document.getElementById("sendSearch");


sendSearch.addEventListener('click', ()=> {
  console.log(search.value)
  fetch(`/searchUser/${search.value}` , {
    method: 'get',
    headers: {'Content-Type': 'application/json'},
  }).then(data => {
    console.log(data)
    window.location.href = `/searchUser/${search.value}`
  })
})

Array.from(heartLike).forEach(function(element) {
      element.addEventListener('click', function(){
        const username = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        const heartLike = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        console.log(heartLike);
        fetch('posts', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'username': username,
            'msg': msg,
            'heartLike': heartLike
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const msg = this.parentNode.parentNode.childNodes[3].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'username': username,
            'msg': msg
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});






// let usern = document.createElement('h2');
// actualWord.innerText = word.value;
// document.querySelector('#typeAndDef').appendChild(actualWord);
