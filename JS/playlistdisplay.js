fetch('http://127.0.0.1:5000/songs')
.then(response => response.json())
.then(data => {
  let tableData = document.getElementById('table_data');
  let songs = data['songs'];
  let html = '';
  for (let i = 0; i < songs.length; i++) {
    let song = songs[i];
    html += '<tr><td>' + song.songname + '</td><td>' + song.artistname + '</td><td>' + song.duration + 's</td><td><button class="remove" data-id="' + song.id + '">Remove</button></td></tr>';
  }
  tableData.innerHTML = html;
  let removeButtons = document.querySelectorAll('.remove');
  for (let i = 0; i < removeButtons.length; i++) {
    let button = removeButtons[i];
    button.addEventListener('click', function() {
      let songId = this.getAttribute('data-id');
      fetch('http://127.0.0.1:5000/songs/' + songId, {
        method: 'DELETE'
      })
      .then(response => {
        if (response.ok) {
          // remove the corresponding row from the table
          let row = this.parentNode.parentNode;
          row.parentNode.removeChild(row);
        }
      });
    });
  }
});
