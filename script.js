
// to change the body color after click
	var btn1 = document.getElementById('btn1');
	var btn2 = document.getElementById('btn2');
	var btn3 = document.getElementById('btn3');
	btn1.addEventListener('click',function onClick(event){
	document.body.style.backgroundColor='#edddea';	
	})
	btn2.addEventListener('click',function onClick(event){
	document.body.style.backgroundColor='#c1dff5';	
	})
	btn3.addEventListener('click',function onClick(event){
	document.body.style.backgroundColor='#e7f0cc';	
	})

// to get the circle effect after button clicked
		function circle(button) {
		  var circle = document.createElement('span');
		  circle.classList.add('circle');
		  var buttonColor = window.getComputedStyle(button).backgroundColor;
		  circle.style.borderColor = buttonColor;
		  var buttonRect = button.getBoundingClientRect();
		  circle.style.top = buttonRect.top + button.offsetHeight / 2 + 'px';
		  circle.style.left = buttonRect.left + button.offsetWidth / 2 + 'px';
		  document.body.appendChild(circle);
		  setTimeout(function() {
		    circle.remove();
		  }, 3000);
    }	
// function to change the image after clicking the button
		function changeImage1(){
			document.querySelector('.file-upload').style.backgroundColor='#e809bf';
			var img=document.getElementById('image');
			img.src="pinkumb.png";
			return false;
	}
		function changeImage2(){
			document.querySelector('.file-upload').style.backgroundColor='blue';
			var img=document.getElementById('image');
			img.src="blueumb.png";
			return false;
}
		function changeImage3(){
			document.querySelector('.file-upload').style.backgroundColor='yellow';
			var img=document.getElementById('image');
			img.src="yellowumb.png";
			return false;
}
		function displayLogo(event) {
			const fileInput = event.target;
			const logoImage = document.getElementById('logoImage');
			const errorMessage = document.getElementById('errorMessage');
			const file = fileInput.files[0];
			console.log(file);

			if (file) {			 
			   const fileSize = file.size / 1024; // Convert file size to kilobytes
				  if (fileSize >= 5120) {
					alert("file size is more than 5mb please upload again!!");
					 logoImage.src = "#";
			      } else {
					document.getElementById("file_name").innerText = file.name;
					document.getElementById('cancel').style.visibility='visible';
					errorMessage.textContent = "";
					const reader = new FileReader();
					reader.onload = function(e) {
					logoImage.src = e.target.result;
					logoImage.style.display = "block";
					      };
					reader.readAsDataURL(file);
				}
			} 
		}

	// animation property
	function startAnimation2() {
		  var animationImg = document.getElementById("image");
		  animationImg.classList.add("fadeIn");
		  animationImg.addEventListener("animationend", function () {
		  animationImg.classList.remove("fadeIn");
  		});
	}
	function startRotation() {
		  var animationImg = document.getElementById("loader");
		  animationImg.classList.add("rotate");
		  animationImg.addEventListener("animationend", function () {
		  animationImg.classList.remove("rotate");
  		});
	}

	function clearfile(){
		 document.getElementById('logoImage').style.display='none';
		 document.getElementById("file_name").innerText = 'UPLOAD LOGO';
		 document.getElementById('cancel').style.visibility='hidden';
	
	}


