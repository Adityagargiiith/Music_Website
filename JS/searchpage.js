function search(){
  const remove=document.getElementById('remove');
  const checkbox=document.getElementById('explicit');
  const maxtime_show=document.getElementById('maxtime');
  const maxtime=maxtime_show.value;
  const search_Term = document.getElementById('search_data').value.replace(/\s+/g, '+');
  const url = `https://itunes.apple.com/search?term=${search_Term}&entity=song`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById('table_data');
      tableBody.innerHTML = '';

      const numResults = Math.min(data.results.length, 10);
      
      var c=0;
      
      if((checkbox.checked) && maxtime!='' && !(remove.checked)){
        for (let i = 0; i < numResults; i++) {
          const result = data.results[i];
          const e1=result.collectionExplicitness;
          const e2=result.trackExplicitness;
          const time=(result.trackTimeMillis)/60000;

          if((e1=="notExplicit" || e2=="notExplicit") && (time<=maxtime)){
          c++;
          const row = tableBody.insertRow();
          const artistNameCell = row.insertCell();
          const trackNameCell = row.insertCell();
          const artworkCell=row.insertCell();
          const previewCell = row.insertCell();
        
          artistNameCell.innerText = result.artistName;
          trackNameCell.innerText = result.trackName;
          const artwork = document.createElement('img');
          artwork.src = result.artworkUrl100;
          artworkCell.appendChild(artwork);
          
          const audio = document.createElement('audio');
          audio.src = result.previewUrl;
          audio.controls = true;
          previewCell.appendChild(audio);
          }
        }
      }else if(checkbox.checked && maxtime=='' && !(remove.checked)){
        for (let i = 0; i < numResults; i++) {
          const result = data.results[i];
          const e1=result.collectionExplicitness;
          const e2=result.trackExplicitness;

          if(e1=="notExplicit" || e2=="notExplicit"){
          c++;
          const row = tableBody.insertRow();
          const artistNameCell = row.insertCell();
          const trackNameCell = row.insertCell();
          const artworkCell=row.insertCell();
          const previewCell = row.insertCell();
        
          artistNameCell.innerText = result.artistName;
          trackNameCell.innerText = result.trackName;
          const artwork = document.createElement('img');
          artwork.src = result.artworkUrl100;
          artworkCell.appendChild(artwork);
          
          const audio = document.createElement('audio');
          audio.src = result.previewUrl;
          audio.controls = true;
          previewCell.appendChild(audio);
          }
        }
      }else if(maxtime!='' && !(remove.checked)){
        for (let i = 0; i < numResults; i++) {
          const result = data.results[i];
          const time=(result.trackTimeMillis)/60000;


          if(time<=maxtime){
            c++;
          const row = tableBody.insertRow();
          const artistNameCell = row.insertCell();
          const trackNameCell = row.insertCell();
          const artworkCell=row.insertCell();
          const previewCell = row.insertCell();
        
          artistNameCell.innerText = result.artistName;
          trackNameCell.innerText = result.trackName;
          const artwork = document.createElement('img');
          artwork.src = result.artworkUrl100;
          artworkCell.appendChild(artwork);
          
          const audio = document.createElement('audio');
          audio.src = result.previewUrl;
          audio.controls = true;
          previewCell.appendChild(audio);
          }
        }
      }else{
        checkbox.checked=false;
        maxtime_show.value='';

      for (let i = 0; i < numResults; i++) {
        c++;
        const result = data.results[i];
        const row = tableBody.insertRow();
        const artistNameCell = row.insertCell();
        const trackNameCell = row.insertCell();
        const artworkCell=row.insertCell();
        const previewCell = row.insertCell();
      
        artistNameCell.innerText = result.artistName;
        trackNameCell.innerText = result.trackName;
        const artwork = document.createElement('img');
        artwork.src = result.artworkUrl100;
        artworkCell.appendChild(artwork);
        
        const audio = document.createElement('audio');
        audio.src = result.previewUrl;
        audio.controls = true;
        previewCell.appendChild(audio);
      
      }
    }
     
    if(c==0){
       const w=document.getElementById('noresults');
       w.innerText="NO Results Found Try Something Else";
    }
  })
    .catch(error => {
      console.error(error);
    });

}    



 