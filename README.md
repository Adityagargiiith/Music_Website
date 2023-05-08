Project structure and Instruction


PHASE 1:


Structure:


1.Our main folder contains 3 html file named about.html,artists.html,index.html.

2.It contains one CSS folder having 8 CSS files.

3.It also has an image folder which contains all the images used in the website.It has creator,banner,logo,artists.

4.Image folder also contains an albumspage folder which has 5 folders of artists albums image.

5.There are 5 folder of artists which are drake ,edsheeran,justin beiber,taylor swift,weeknd. These folder contains html pages of the artists album and its songs html page.


Navigation bar:


1. It is a persisitant navigation bar and it contains tab of Home , About Us, Artists

2. There is a visual indicatior of current page in navigation bar. A grey box appears over the current tab.

3.There is a logo of our website on the left side of navigation bar.

4.CSS folder has navigationbar.css file which is stylesheet of navigation bar.

5.We have included navigation bar code in every html page in div class=”nav-bar”.

6.All the tabs are responsive i.e it will redirect to that page on whichever it is clicked.

7.Assumption: The visual indicator for artists and albums page will show in grey box on artist tab.


Footer :


1.It contains 3 columns which are About Us , Information,Follow us.

2.In About us ,there is a row which Is “About Our Website” which redirects to about us page when clicked on it.Rest other rows also will redirect you to 
the starting of the  same page but we have included these rows so that the footer seems little bit filled and attractive.

3. Its CSS folder has footer.css which is stylesheet of footer.

4.We have included footer code in every webpage in <footer class=”footer”>

5.In follow us column we have left spaces for some websites logo facebook , Instagram etc.But we have added so that it looks good.


Home page:


1.Index.html is the html file of home page. CSS folder has home.css which is the stylesheet of index.html

2.It contains a banner and CSS folder contains its stylesheet named banner.css.Its image is in the image folder.

3.It contains 3 rows of top artists,top albums,top songs.

4.Inside every row there are three columns which contains image of top 3 artist,song and albums.

5.Below every image there is name of content.

6.Name and images are clickable and are hovered.

7.Assumption: In top songs row , items are not clickable because we were not required to make songs page.


Artists page:


1.artists.html is the html file of Artist page. CSS folder has artistspage.css which is the stylesheet of artists.html

2.It contains a banner and CSS folder contains its stylesheet named banner.css.Its image is in the image folder.

3.It contains 5 rows of our aritsts.

4.Inside every row there there are 2 columns having image of artists followed by name of artists.

5.Name and images are clickable and are hovered.


About us page:


1.about.html is the html file of About page. CSS folder has about.css which is the stylesheet of about.html

2.First we have written about our website that what it can do , things to explore , about the creators.

3.Its image are in the image folder for the creators and the images used in it.

4.Included typing effect in heading “About Us”.(Phase2)


Artists Albums page:


1. Every  album has its html page in its respective artist folder and its naming is for ex:Drake_album.html where Drake is artist name.All CSS files of all these album pages is present in CSS Folder and stylesheet name is artistspagealbum.css.

2.It contains 5 rows of  artist album containing its image,name,total songs in the album,year of release.

3.Every item on this page is clickable and it will redirect to the corresponding album song page of the artist.


Albums Songs page:


1. Every  album song page has its html file in its respective artist folder and its naming is for ex:Drake_views_song.html where Drake is artist name and View is the album name.All CSS files of all these album songs pages is present in CSS Folder and stylesheet name is songspage.css.

2.Songs page contains name of album along with its image and name of the songs present in the album along with their duration. Its items are not clickable



PHASE 2:


Search Page:

1. Includes A search Bar and filters like “Non Explicit” Content to remove explicit content, “Maxtime” of song ,Remove all filters to remove all filters.

2.Its HTML file “searchpage.html” is in main directory and CSS file 
“searchpage.css” in CSS folder, Java script file “searchpage.js” in JS folder. JS file contains functions which help in fetching and filtering data received from itunes API and showing in form of table.


Artists SpotLight Page:

1. Artist spot light page contains image of our favourite artist Justin Bieber with hover effect(zoom in zoom out” implemented using JS ,Upcoming release of new album with timer using JS, a “click to rate” button which opens new page where user can rate and comment about artist.

2.Its HTML file “artist_spotlight.html” file is in main directory and CSS file “artistspotlight.css” in CSS folder. JS file “artistspotlight.js” in JS folder.

3. Rating page HTML file is “rating.html” ,CSS file is “rating.css” ,JS file is “rating.js”.

4. Typing effect and image hover effect JS file namely “typingtext.js” and “zoom_in_zoom_out.js” helps in implementing these effects.
Typing effect in applied in “About us Page” in heading “About Us”.


Assumptions: 

1.Only one review can be entered at a time and on refreshing page new review can be entered.

2.On hovering over image it gets enlarged if cursor removed from image it returns to original size.

3.On searching in search page it shows preview of song which is of 0.29-0.30 sec because of “itunes” preview limit although in filter “maxtime” we have considered actual length of song as it was given by “itunes”. 

4.If no results of are found on searching search page shows “NO results found try something else”.

5. On searching for albums it also show song preview.






PHASE 3:


DIRECTORY STRUCTURE ADD ONS: 

1. "app.py" contains all the flask code.

2. "music.db" is a database use to store information from the songs page.

3. "database.py" was use to create the music.db database.

4. "playlistpage.html" is the html page use to show the songs playlist.


JS FOLDER:

1. "playlistdisplay.js" is the javascript file used in playlist page.

2. "post_songspage.js" is the javascript file used to add songs to the playlist.


SONGS PAGE:

1. "Add to playlist" button is added in every songs page. "post_songspage.js" is also added in the songs page. 

2. This button calls the function which stores the data of song using flask("app.py") inside "music.db" database.


PLAYLIST PAGE:

1. It shows the song added to the playlist by fetching data from "music.db" using flask("app.py") and javascript("playlistdisplay.js").

2. Beside every song added there is a remove button. After clicking on it, it removes the songs from the playlist and the database.

NAVBAR:

1. We also included "Playlist" tab in the nav bar which open the playlist page.


"app.py" file:

1. It contains three routes namely '/add_to_playlist' , '/songs' , '/songs/<int:id> use to add song in the database, use to fetch data from database , use to delete the data by its id respectively.


DATABASE(music.db):

1. It contains a table name "songs" having 4 columns namely "id", "name" , "duration", "artistname".


ASSUMPTION:

1. On clicking on add to playlist button it adds the song to playlist and shows "Added to playlist". But on reloading this page it again shows "add to playlist" but on clicking again on this button it do not adds the song which is already inside the playlist.


STEPS TO RUN THE WEBSITE:

1. Run the "app.py" python file. Then just open index.html manually. Do not open using live server.




