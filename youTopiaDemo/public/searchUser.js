let addCom = document.getElementById('add');
let deleteCom = document.getElementById('delete');
let newUserPage = document.querySelector('#searchedUser').innerText;

addCom.addEventListener('click', ()=>{
  console.log("hello");
  console.log(newUserPage, "hi hi");

  fetch('/addNewCom', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'username': newUserPage
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

deleteCom.addEventListener('click', ()=>{
  console.log("hello");
  console.log(newUserPage, "hi hi");

  fetch('/removeCom', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'username': newUserPage
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
