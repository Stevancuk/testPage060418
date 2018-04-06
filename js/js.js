"use strict";

var imageCount = 0;
var viewAllImages = false;
var imageList = ["img/natalie.jpg", "img/pic1.png", "img/pic2.png", "img/pic3.png", "img/pic4.png", "img/pic5.png"];

// Next Button
$("#next_button").on("click", function(){
	if(imageCount < (imageList.length-1)){
		imageCount++;
	}else {
		imageCount = 0;
	}
	$("#main_subb_img_1 img").attr("src", imageList[imageCount]);
	$("#photos_number p span").text(imageCount+1);		
});

// Back Button
$("#back_button").on("click", function(){
	if(imageCount > 0){
		imageCount--;
	}else {
		imageCount = (imageList.length-1);
	}
	$("#main_subb_img_1 img").attr("src", imageList[imageCount]);
	$("#photos_number p span").text(imageCount+1);		
});

// View All Button
$("#view_all").on("click", function(){
	// if all images are shown hide em and show only one
	if(viewAllImages) {
		viewAllImages = false;
		$(".imageGallery").addClass("viewAllImgHidden");
		$("#main_subb_img_1").css("display", "block");
		$('#view_all_h4 h4').text("View All");
		$("#photos_number, #back_and_next_button").css("visibility", "visible");
	}else {
		viewAllImages = true;
		$(".imageGallery").removeClass("viewAllImgHidden");
		$("#main_subb_img_1").css("display", "none");
		$("#view_all_h4 h4").text("Large View");
		$("#photos_number, #back_and_next_button").css("visibility", "hidden");
	}
});