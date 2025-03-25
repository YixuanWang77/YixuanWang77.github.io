let catImage;
let catVideo;

function setup() {
  noCanvas();

  
  catImage = createImg("my_cute_cat.jpg","a cute cat");
  catImage.size(600, 400);
  catImage.style("margin", "10px");

  
  catVideo = createVideo(["my_cat_video.mp4"]);
  catVideo.size(600, 500);
  catVideo.volume(0); 
  catVideo.autoplay(true);
  catVideo.loop();  
  catVideo.style("margin", "10px");
}
