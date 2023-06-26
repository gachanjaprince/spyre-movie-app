
<div id="header">
  <h1> Spyre Movie Finder</h1>
  <p> Find your favourite movie by simply entering the title in the search bar and selecting it from a list of relevant titles. The main cast as well as the film poster are returned along with your selected movie title.</p>
  <span font-size="1.65rem"><strong>Live Site:</strong></span><span> SOON... </span>
</div>
<div align="center">
  <img src="https://github.com/gachanjaprince/spyre-movie-app/assets/129261938/fb79a732-c9b3-4eb5-a760-341a2f0dc6a1" alt="A gif capturing the screen as the user selects the movie titled 'The Face of Another' from the suggestions provided based on the typed in keyword 'another'" width="57.5%"/>
</div>
<div>
  <h2>How it's made:</h2>
  <div align="center">
    <img src="https://img.shields.io/badge/html5-838485?style=for-the-badge&logo=html5&logoColor=%23E34F26.svg" alt="HTML5 Logo" height="27.5"/>&nbsp;
    <img src="https://img.shields.io/badge/css3-%2300599C.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3 Logo"height="27.5"/>&nbsp;
    <img src="https://img.shields.io/badge/javascript-%23000000.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript Logo" height="27.5">&nbsp;
    <img src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white" alt="jQuery Logo" height="27.5">&nbsp;
    <img src="https://img.shields.io/badge/node.js-%2344A833.svg?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js Logo" height="27.5">&nbsp;
    <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.js Logo" height="27.5">&nbsp;
    <img src="https://img.shields.io/badge/MongoDB-grey?style=for-the-badge&logo=mongodb&logoColor=%23217346.svg" alt="MongoDB Logo" height="27.5">&nbsp;
  </div>
  <p>The foundation of this web app was developed using Node.js, in conjunction with Express.js, setting up the interaction with the database as well as handling HTTP requests and responding. The movie data was generated and stored in MongoDB, with a search index for film title created to improve efficiency and search performance. </p>
  <p>The autocomplete feature was implemented using jQuery, which sends a request as the user types the movie title, returning relevant suggestions. With user experience in mind, the search type was set to a fuzzy search, allowing for flexible data matching and accommodating for misspellings. jQuery was utilized in presenting the selected movie’s title, post and main cast on the DOM, with CSS3 providing general styling.</p>
</div>
<div>
  <h2>Lessons Learned:</h2>
  <p><strong>Search Query Optimization</strong> - Utilizing an index to improve search performance, I gained experience in managing and improving search query execution, especially with a large dataset.</p>
  <p><strong>Asynchrounous Programming </strong> - More practice with asynch techniques, as I used promises/callbacks in establishing functional interaction between the server and client-side.</p>
</div>
