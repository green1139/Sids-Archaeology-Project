$(document).ready(function()
{
    $('.section-frames').addClass('animate');
    $('.custom-rounded-nav').addClass('animate');
    $('.loader-wrapper').addClass('animate');
    removeLoader();
    changeImg($('.custom-slideshow'));
    //runImgChangeAuto();
    //Check to see if the window is top if not then display button
    $(window).scroll(function()
    {
        $('.loader-wrapper').removeClass();
        $('.loader').removeClass();
        //console.log($(this).scrollTop());
        if ($(this).scrollTop() >= 100)
        {
            $('.scrollToTop').fadeIn();
            $('.scrollToTop-back').fadeIn();
            //console.log("Yes!");
        }
        else
        {
            $('.scrollToTop').fadeOut();
            $('.scrollToTop-back').fadeOut();
            //console.log("No!");
        }
    });
    //Click event to scroll to top
    $('.scrollToTop').click(function()
    {
        $('html, body').animate({scrollTop : 0},1000);
        return false;
    });
});
var titles = ["", "A famous Hindu god, lord Ganesha.", "My selfie last year.", "My selfie back in Navi Mumbai.", "My picture in the JFK space center 2 years ago.", "A picture with my mother and brother at Disney World, Orlando.", "A selfie with my brother in Holland, with beautiful tulips!", "A picture of me packed in the new snow in the harsh winter of 2013!", "My family photo at Chicago Airport, 2 years ago."];
var index=0;
function changeImg(img)
{
    index++;
    if (index==9)
    {
        index=1;
    }
    img.src="pictures/"+index+".jpg";
    console.log("Selected picture: " + index + ".jpg: " + titles[index]);
    //console.log(img.src.match(index+".jpg"));
    //span = document.getElementById("myspan");
    //txt = document.createTextNode("your cool text");
    //span.innerText = txt.textContent;
    //document.getElementById('titles').textContent=index + ":" + titles[index];
    $('.contain-text-title .titles').html("Picture " + index + ": " + titles[index]);
}
var titles2 = ["", "Yes, KAMSC! Every Bit COUNTS!", "Truly, there isn't any place as such, other than HOME!", "These are some of the popular programming languages, and I know a bunch of them!", "Yeah, this happens to me everyday.  :(", "A high resolution picture of a green circuit board. Very nice.", "Yup, you guessed it right! It is a bit of a rain here!", "These hexagonal \"particles\" intrigue me.", "Spooky anonymous picture made with a bunch of code written in PHP.", "Yet another circuitboard, but this time the blue shade along with the parts makes the picture beautiful.", "The World Wide Developer Conference, one of Apple's largest events. It is June 13-17 this time around!"];
var autoIndex=0, stillChange=false;
function runImgChangeAuto()
{
    if (stillChange)
    {
        autoIndex++;
        if (autoIndex==11)
        {
            autoIndex=1;
        }

        console.log("Auto-selected picture: " + autoIndex + ".jpg: " + titles2[autoIndex]);
        document.secondImg.src="pictures-auto/"+autoIndex+".jpg";
        $('.contain-text-title .titles2').html("Picture " + autoIndex + ": " + titles2[autoIndex]);
    }
    else if (autoIndex==0)
    {
        autoIndex=1;
        console.log("Auto-selected picture: " + autoIndex + ".jpg: " + titles2[autoIndex]);
        document.secondImg.src="pictures-auto/"+autoIndex+".jpg";
        $('.contain-text-title .titles2').html("Picture " + autoIndex + ": " + titles2[autoIndex]);
    }
    else
    {
        return;
    }
    setTimeout('runImgChangeAuto()', 7000);
}
function openPopup()
{
    $('.overlay-bg').fadeIn();
}
function openPopup2()
{
    $('.overlay-bg2').fadeIn();
    stillChange=true;
    runImgChangeAuto();
}
function closePopup()
{
    $('.overlay-bg').fadeOut();
}
function closePopup2()
{
    $('.overlay-bg2').fadeOut();
    stillChange=false;
}
$(document).on('keyup',function(evt) {
    if (evt.keyCode == 27) {
       //$('.overlay-bg').fadeOut();
       //$('.overlay-bg2').fadeOut();
       closePopup();
       closePopup2();
    }
});
function removeLoader()
{
    $('#loader-wrapper').fadeOut();
    $('#loader-wrapper').removeClass();
}
