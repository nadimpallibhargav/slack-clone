
const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
//  const form = document.querySelector("form");
menuBtn.onclick = ()=>{
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
cancelBtn.onclick = ()=>{
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
//    form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = ()=>{
//    form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}

 $(document).ready(function(){

/******************************
ADD ANIMATION TO THE TEXT 
******************************/
animation()	


/*********************
SET ROW'S COLOR
*********************/
$.each($('.row'), function() { 
var c = $(this).attr("data-color");
$(this).css("background",c);
});




/******************
SEARCH BOX
******************/
var input = $('#search-wrap input');
var sw = $('#search-wrap');
var tw = $('.tags-wrap');
var sr = $('#search-results');

//show the search box
$('#search-btn').click(function(){
sw.addClass('active');
input.focus();
});	

//show the search box
$('#m-search-btn').click(function(){
sw.addClass('active');
input.focus();
});	

//close the search box
$('#content-wrap, #li-4').click(function(){
//collapse bars
fcollapse(sw,tw)

//reset search
input.val("");
nsearch(sr)	

});

//key up function
input.keyup(function(e){
tw.addClass('active');

//if input is 'EMPTY'
if($(this).val().length == 0){
tw.removeClass('active');			
nsearch(sr)	
}

//if we press 'ENTER'
if (e.keyCode == 13) {
fsearch(input, sr, tw)
}

//if we press 'BACKSPACE'
if (e.keyCode == 8) {
nsearch(sr)
}
});



/*TAGS CLICK*/
$('.tags-wrap ul li').click(function(){
var txt = $(this).text();
input.val(txt);
input.focus();		
});


/*SEARCH CLICK*/
$('#li-3').click(function(){
fsearch(input, sr, tw)
});







/*************************
ON WINDOW SCROLL FUNCTION
*************************/
var count = 0;
$(window).scroll(function(event){		

var scrolled = $(this).scrollTop();		

if (scrolled > count){  
//scroll down
count++;
$('#nav-wrap').addClass('active');		
} 
else { 			
//scroll up
count--; 
$('#nav-wrap').removeClass('active');
}

//Check if we've reached the top
count = scrolled;		

if(count == 0){
animation()
$('#first-row i').removeClass('active');
}else{
$('h1 ,h2').removeClass('animationActive');
$('#first-row i').addClass('active');
}

if(count == 200){
//collapse
fcollapse(sw,tw)
}

});


/*****************
MOBILE
*****************/
var mob = $('#menu-mob');
mob.click(function(){
$(this).toggleClass('active');
$('#nav-wrap ul li').toggleClass('mob');
});	

});//DOCUMENT READY




   /*Animation Text*/
   function animation(){
   $('h1').addClass('animationActive');

   var count = 0;
   var limit = 10;

   var interval = setInterval(function(){
   count++;
   if (count === limit) { 
           clearInterval(interval);			
           $('h2').addClass('animationActive');	
       }
   }, 50);	
   }



   /*Collapse Bars Function*/
   function fcollapse(sw, tw){
   sw.removeClass('active');
   tw.removeClass('active');	
   }



   /*Search Function*/
   function fsearch(input, sr, tw){
   var r = input.val();
   $('.tags-wrap ul').css('display', 'none');
   sr.html('Sorry, 0 results were found for: <span> "' + r + '"</span>');
   tw.addClass('active');	
   }



   /*Clear/New function*/
   function nsearch(sr){
   sr.html('');
   $('.tags-wrap ul').css('display', 'inline-block');
   }


   /*finish method stops the currently-running animation, removes all queued animations, and completes all animations for the matched elements*/
   $('ul.nav li.dropdown').hover(function() {
   $(this).find('.dropdown-menu').finish().delay(200).fadeIn(500);
   }, function() {
   $(this).find('.dropdown-menu').finish().delay(200).fadeOut(500);
   });

  //  button = document.querySelector('button');
   datalist = document.querySelector('datalist');
   select = document.querySelector('select');
   options = select.options;

   /* when user selects an option from DDL, write it to text field */
   select.addEventListener('change', fill_input);

   function fill_input() {
   input.value = options[this.selectedIndex].value;
   hide_select();
   }

   /* when user wants to type in text field, hide DDL */
   input = document.querySelector('input');
   input.addEventListener('focus', hide_select);

   function hide_select() {
   datalist.style.display = '';
  //  button.textContent = "▼";
   }

  $(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
    $("nav").addClass("scroll");
    } else {
    //remove the background property so it comes transparent again (defined in your css)
    $("nav").removeClass("scroll");
    }
});
