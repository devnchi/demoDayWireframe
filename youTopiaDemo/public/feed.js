var heartLike = document.getElementsByClassName("fas fa-heart");
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
        console.log(username);
        console.log(msg);
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
