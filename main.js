var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL('BirthdayImage.jpg', function (img) {
        block_img_obg = img;
      
        block_img_obg.scaleToWidth(700);
        block_img_obg.scaleToHeight(510);
        block_img_obg.set({
         top: 0,
         left: 0
        });
        canvas.add(block_img_obg);
       });
	
}

function playSound(){
	x.play();
}
