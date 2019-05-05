
 
//require('./js/force');  

require('./js/blog-draft-may19');
require('./js/blog-draft-jan');
require('./js/blog-draft-dec');
require('./js/blog-draft-nov');
require('./js/blog-draft-oct');
require('./js/blog-draft-sep');
require('./js/blog-draft-aug');
require('./js/blog-draft-jul');
require('./js/blog-draft-june');
require('./js/blog-draft-may');
require('./js/blog-draft-apr');
require('./js/blog-draft-mar');
require('./js/blog-draft-feb'); 
require('./js/marsreader');     
   
 
 
var modal = document.getElementById('msimpleModal');  
var modalBtn = document.getElementById('mmodalBtn'); 
var closeBtn = document.getElementsByClassName('mcloseBtn')[0];  

modalBtn.addEventListener('click', openModal); 
closeBtn.addEventListener('click', closeModal); 
window.addEventListener('click', outsideClick); 

function openModal(){
  modal.style.display = 'block';
} 
function closeModal(){
  modal.style.display = 'none';
} 
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
};
  