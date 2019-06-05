var happyImages = ["https://thumbs.gfycat.com/BrilliantScaryAmethystsunbird-size_restricted.gif","https://media.giphy.com/media/GbhTclWGJ6ePe/giphy.gif","https://media1.tenor.com/images/fd9977fbe6135d063fa013e7de5a7a7b/tenor.gif?itemid=3483809"
    ];
var sadImages = ["https://media2.giphy.com/media/Pok6284jGzyGA/giphy.gif","https://media3.giphy.com/media/Hwq45iwTIUBGw/giphy.gif","https://media3.giphy.com/media/JDoFjQAxkNqsU/giphy.gif"];
var boredImages = ["https://media.tenor.com/images/a5fa7d6967e07a9c2bae1aeede18ac02/tenor.gif","https://media.giphy.com/media/10goQAsQC9lvCE/giphy.gif", "https://media.giphy.com/media/ZXKZWB13D6gFO/giphy.gif"];
var angryImages = ["https://cdn.ebaumsworld.com/mediaFiles/picture/1548104/85075882.gif","https://media1.tenor.com/images/c9dab3b8a02dc9519a3397e11e2b537a/tenor.gif?itemid=4578888","https://media1.tenor.com/images/6a2ae640f9972894314167dcdaa13325/tenor.gif?itemid=4436429" ];


$('button').click(function(){
    var input = $('input').val();
    if(input === "sad"){
    sadMood();
    } else if(input === "happy"){
    happyMood();
    } 
   else if(input === "angry"){
    angryMood();
    } 
   else if(input === "bored"){
    boredMood();
    } 
    else{
        alert("Please enter happy, sad, angry, bored");   
    }
    
    
});


function happyMood(){
     changeBackgroundColor("#ffff1a");
    changeTextColor("#ff9933");
    changeBorderColor("#ff9933");
    displayImages( happyImages[0]);
    displayImages( happyImages[1]);
    displayImages( happyImages[2]);
   
}
function sadMood(){
   changeBackgroundColor(" #0099ff");
    changeTextColor("#75a3a3");
    changeBorderColor("#75a3a3");
    displayImages(sadImages[0]);
    displayImages(sadImages[1]);
    displayImages(sadImages[2]);
    
}
function boredMood(){
    changeBackgroundColor(" #003333");
    changeTextColor(" #ccccb3");
    changeBorderColor(" #ccccb3");
    displayImages(boredImages[0]);
    displayImages(boredImages[1]);
    displayImages(boredImages[2]);
 
}
function angryMood(){
     changeBackgroundColor("#e62e00");
    changeTextColor(" #ff9999");
    changeBorderColor(" #ff9999");
    displayImages(angryImages[0]);
    displayImages(angryImages[1]);
    displayImages(angryImages[2]); 
}

function changeBackgroundColor(color){
     $('body').css('background-color', color);
}

function changeTextColor(color){
    $('body').css('color', color);
}

function displayImages(images){
   $('.images').append('<img src ='+ images + '>');
}

function changeBorderColor(color){
    $('h1').css("border-color", color); 
}
