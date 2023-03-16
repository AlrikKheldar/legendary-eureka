// Constants
const ImgFileInput =document.querySelector("#ImgFileInput");
const TopTextInput = document.querySelector('#TopTextInput');
const BottomTextInput = document.querySelector('#BottomTextInput');
const canvas = document.querySelector('#meme');

//Variables
let image;

// Events
ImgFileInput.addEventListener("change", ()=> {
    //listens for the first item to be added to ImgFileInput, or the image for our meme
    const imageDataUrl = URL.createObjectURL(ImgFileInput.files[0]); 

    img = new Image();
    img.src = imageDataUrl;

    img.addEventListener("load", () => { //Once the image has been sent
        updateMemeCanvas(canvas, image, TopTextInput.value, BottomTextInput.value )
    });

});

TopTextInput.addEventListener("change", ()=>{
    //Updates whenever the top text is changed
    updateMemeCanvas(canvas, image, TopTextInput.value, BottomTextInput.value);
} )

BottomTextInput.addEventListener("change", ()=>{
    //Updates whenever the bottom text is changed
    updateMemeCanvas(canvas, image, TopTextInput.value, BottomTextInput.value);
} )
// Functions

//Main function
function updateMemeCanvas(canvas, image, TopText, BottomText){
   const ctx = canvas.getContext("2d");
   const width = image.width;

   //the width should be set to the width of the image that is chosen..
   //.. wont run, cant 'read properties of undefined variable'
   //it is defined here, but maybe elsewhere??
   const height = image.height;
   //Likely the same issue with Width, considered 'undefined'
   const fontSize = Math.floor(width/10);
   const yOffset= height / 25;
   //Update canvas background
   canvas.width = width;
   canvas.height = height;
   ctx.drawImage(image,0,0);

   //prepare text
   ctx.strokeStyle = "black";
   ctx.lineWidth = Math.floor(fontSize / 4);
   ctx.fillStyle = "white";
   ctx.textAlign = "center";
   ctx.lineJoin = "round";
   ctx.font = '${fontSize}px sans-serif';

   //add Top Text
   ctx.textBaseline = "top";
   ctx.strokeText(TopText, width / 2, yOffset);
   ctx.fillText(TopText, width /2, yOffset);

    //add Bottom Text
    ctx.textBaseline = "bottom";
    ctx.strokeText(BottomText, width / 2, height-yOffset);
    ctx.fillText(BottomText, width /2, height-yOffset);
}
