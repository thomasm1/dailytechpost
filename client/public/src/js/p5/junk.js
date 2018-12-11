console.log('blogger-j');
  var bloggerApr = function () {
  blogpost23 = `<p class="firstparagraph">First Paragraph</p>
  <p class="quote"></p>`

   const url = [

    {
      id: '23',
      did: 'd-18-04-30',
      date: 'April 30, 2018<br />',
      author: 'by Thomas Maestas, MA',
      cat3: 'Web Dev Affairs',
      title: 'Data Privacy and Permissions in the Twitter-verse<br />Part II: A Defense of Data Privacy Moderation <br />',
      post: blogpost23
    }] 
    for (i=0;i<url.length;i++){ 
      var cat = ` 
      <div id="${url[i].did}" class="blogDiv"><hr />  
      <a href="#top"><button>Top</button></a>  
      <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  
      <h5 id="cat3" class="  subdailytech">${url[i].cat3}</h5> 
      <p id="author" class="  author">${url[i].author}</p>   
      <h6  id="date" class="  chapternumber">${url[i].date}</h6>    
      <h6  id="title"   class="dailytitle chapternumber">${url[i].title}</h6>
      <br />
      <div id="post">${url[i].post}
      </div>
      </div>`;
      document.getElementById("paragraph-junk").innerHTML += cat;
    }
    console.log(url[0].did); 
     
};
bloggerApr();
 