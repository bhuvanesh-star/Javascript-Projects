function changeImage(argument) {
    // containers with different images are swapped just by changing the source of the image 
    //to different variables
    var img1,img2;
    img1 = document.getElementById('forest').src;
    img2 = document.getElementById('gump').src;
    document.getElementById('forest').src = img2;
    document.getElementById('gump').src = img1;
}