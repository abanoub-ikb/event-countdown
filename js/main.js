let navLinksWidth = $('.nav-links').innerWidth();
let navBar = $('#navBar');
navBar.css('left',`-${navLinksWidth}px`);
let openNav= $('.nav-menu-icon i');
let closeNav = $('.close-icon');

// open and close  navbar

openNav.click(()=>{
    let closeNav = $('.close-icon');

    if(navBar.css('left')=='0px'){
        navBar.animate({left:`-${navLinksWidth}px`},1000);
        closeNav.css('display','none');
        $('.nav-menu-icon').css('display','flex');
    }else{
        navBar.animate({left:`0px`},1000)
        closeNav.css('display','block');
        $('.nav-menu-icon').css('display','none');
    }
});

// -----------------------------------------------------------

// click to close icon

closeNav.click(()=>{
    navBar.animate({left:`-${navLinksWidth}px`},1000);
    $('.nav-menu-icon').css('display','flex');
});

// -------------------------------------------------------------

// slide up and down boxes in details section

$('.singer h3').click(function(){
  $(this).next().slideToggle(500)
});
// --------------------------------------------------------------------------------------------

// function to display how many letters left in the textarea box

$('textarea').on('input',()=>{
    let inputLength = [...document.getElementsByTagName('textarea')].map((ele)=>ele.value).toString().length;
    let charCounter = 100-inputLength;
    $('#charCounter').html(charCounter);
});
// --------------------------------------------------------------------------------------------------

// function to display how many teckets left

let teckets = 500;
$('#tecketCounter').html(teckets);
$('#submit').click((e)=>{
    e.preventDefault;
    teckets--;
    teckets<0 ? $('#sold').html(`<span id="sold" class="px-2 bg-danger">NO TECKETS LEFT ALL SOLD</span>`):$('#tecketCounter').html(teckets);
});
// ----------------------------------------------------------------------------------------------------

// even count down function

let eventDate = new Date('sep 30,2022 0:0:0').getTime();
console.log(eventDate)
function countDown(){
let dateNow = new Date().getTime();
let dateDiff = eventDate -dateNow;
let days = Math.floor(dateDiff/1000/60/60/24);
let hours = Math.floor(dateDiff/1000/60/60)%24;
let mins =  Math.floor(dateDiff/1000/60)%60;
let secs = Math.floor(dateDiff/1000)%60;
document.getElementById('countDown').innerHTML = `
<div class="col-lg-1 col-3  box">
<div><p>${days} D</p></div>
</div>
<div class="col-lg-1  col-3 box">
<div><p>${hours<10?'0'+hours:hours} H</p></div>
</div>
<div class="col-lg-1  col-3  box">
<div><p>${mins<10?'0'+mins:mins} M</p></div>
</div>
<div class="col-lg-1  col-3  box">
<div><p>${secs<10?'0'+secs:secs} S</p></div>
</div>`;

if(dateDiff===0){
    ('#sold').html(`<span id="sold" class="px-2 bg-danger">Event is Ended</span>`);
    clearInterval(countDown);
};
};
setInterval(countDown,1000);

// -----------------------------------------------------------------------------------------