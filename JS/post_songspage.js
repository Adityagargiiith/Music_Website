
function add(event) {
        const row = event.target.parentNode.parentNode;
        var title = row.querySelector(".title").textContent;
        var duration = row.querySelector(".duration").textContent;
        var artistname=document.querySelector(".artist").textContent;
      
        var data = {
          "title": title,
          "duration": duration,
          "artistname": artistname,
        };
        console.log(data);
        fetch("http://127.0.0.1:5000/add_to_playlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
        .then(response => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
        })
        .catch(error => {
          console.error(error);
        });
      }
      
