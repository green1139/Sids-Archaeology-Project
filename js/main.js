$(document).ready(function()
{
    $('.section-frames').addClass('animate');
    $('.custom-rounded-nav').addClass('animate');
    $('.loader-wrapper').addClass('animate');

    changeImg($('.custom-slideshow'));
    $(window).scroll(function()
    {
        $('.loader-wrapper').removeClass();
        $('.loader').removeClass();
        if ($(this).scrollTop() >= 100)
        {
            $('.scrollToTop').fadeIn();
            $('.scrollToTop-back').fadeIn();
        }
        else
        {
            $('.scrollToTop').fadeOut();
            $('.scrollToTop-back').fadeOut();
        }
    });
    $('.scrollToTop').click(function()
    {
        $('html, body').animate({scrollTop : 0},1000);
        return false;
    });
});

var titles = ["", "An Egyptian sphinx confiscated by police from a greenhouse near Rome.", "One of the two 4,300-year tombs carved out of stone and unearthed in the ancient necropolis of Saqqara near Cairo.", "Egyptian Antiquities chief Zahi Hawass shows the false door of the unearthed tomb that belongs to Shendwas, the father of Khonsu, both served as heads of the royal scribes during the Old Kingdom, in Saqqara near Cairo.", "With the Step Pyramid of King Djoser in the background, an Egyptian labor works at the site of the unearthed 4,300 year old tombs of Khonsu and his father Shendwas, both served as heads of the royal scribes during the Old Kingdom.", "The mummy of Merneptah was encased in a series of four sarcophagi, set one within the other. After his tomb was robbed, more than 3,000 years ago, he was reburied elsewhere and his two outer sarcophagi broken.", "The oldest-known representations of a pharaoh are carved on rocks near the Nile River in southern Egypt, researchers report. Look closely -- standing on the top of this boat is a crowned figure who may represent Narmer, the first pharaoh to rule unified Egypt. Oarsmen propel the boat along.", "The tomb of Ptahmes, the mayor of the ancient Egyptian capital Memphis, in Saqqara, south of Cairo, Egypt, is seen after archaeologists discover the 3,300-year-old tomb. Ptahmes' resting place had been lost under the desert sand since 1885 when treasure hunters first carted off some of its decorative wall panels, officials announced on May 30.", "An unfinished funeral painting from the tomb of Ptahmes, the mayor of the ancient Egyptian capital Memphis, in Saqqara, south of Cairo, Egypt, is seen after archaeologists discover the 3,300-year-old tomb. Ptahmes' resting place had been lost under the desert sand since 1885 when treasure hunters first carted off some of its decorative wall panels, officials announced on May 30."];
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
    $('.contain-text-title .titles').html("Picture " + index + ": " + titles[index]);
}

var titles2 = ["", "Smiling Zahi Hawass!", "Zahi Hawass: Proud of the Sphinx. :)", "Zahi Hawass, looking professional. And..... HANDSOME.", "The great chief archaeologist Zahi Hawass talking about an Egyptian statue.", "Explaining something, of course, it is Zahi Hawass.", "Zahi Hawass in front of an exhibit.", "\"Yup, got him this time! Of course, I am archaeologist!\". -- Zahi Hawass did not say this, just a joke!", "Yup, the Sphinx mimicking Zahi Hawass!", "\"More Left to discover, guys!\" -- Zahi Hawass (The man with the hat)."];
var autoIndex=0, stillChange=false;
function runImgChangeAuto()
{
    if (stillChange)
    {
        autoIndex++;
        if (autoIndex==10)
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
    setTimeout('runImgChangeAuto()', 3000);
}

function openPopup()
{
    $('#clickPic').fadeIn();
}

function openPopup2()
{
    $('#autoPic').fadeIn();
    stillChange=true;
    runImgChangeAuto();
}

function openPopup3()
{
    $('#video').fadeIn();
}

function closePopup()
{
    $('#clickPic').fadeOut();
}

function closePopup2()
{
    $('#autoPic').fadeOut();
    stillChange=false;
}

function closePopup3()
{
    $('#video').fadeOut();
}

$(document).on('keyup',function(evt)
{
    if (evt.keyCode == 27)
    {
       closePopup();
       closePopup2();
       closePopup3();
    }
});

function removeLoader()
{
    $('#loader-wrapper').fadeOut();
    $('#loader-wrapper').removeClass();
}
