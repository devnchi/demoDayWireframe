var updateProfile = document.getElementById('updateProfile');

updateProfile.addEventListener('click', (e) => {
  e.preventDefault()
  const about = document.getElementById('updateBio').value;
  const location = document.getElementById('updateLocation').value;

  fetch('/updateProfile', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'about': about,
      'location': location
    })
  }).then(data => {
    console.log(data);
    window.location.reload(true)
  })
})
