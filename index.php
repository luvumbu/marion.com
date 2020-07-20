<!DOCTYPE html>
<html lang="en">
<head id="head">
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>{{title}}</title>
</head>
<body> 
<?php 
	include("app.php");
	include("link.php");
?>

<style>
	.section_sorce_class {
		width: 400px;
	}
	.img_section_class_1 {
	
		text-align: center;
		position: absolute;
		background-color: rgba(255, 255, 255, 0.6);
		color:#193a69; 
		width: 600px;
		padding: 50px;
		padding-bottom: 20px;
		z-index: 2;
		font-size: 2em;
	}

	.img_section_class_2 {
	
	text-align: center;
	position: absolute;
	background-color: rgba(255, 255, 255, 0.6);
	color:#193a69; 
	width: 600px;
	padding: 50px;
	padding-bottom: 20px;
	z-index: 2;
	font-size: 2em;
}


	.img_section_vide {
		background-color: rgba(255, 255, 255, 0.6); 
position: absolute; 
height: 90px;
top:60px;
width: 590px; 
margin-left: 40px;
	}
	.img_section {
		position: relative;
	}
	
	.img_section {
		position: relative;
	}
	


	.cercl_section1{
	background-color: #44bab4;
}

.cercl_section2{
	background-color: white;
}

.cercl_section3{
	background-color: white;
}




.cercl_section1:hover{
	cursor: pointer;
}

.cercl_section2:hover{
	cursor: pointer;
}

.cercl_section3:hover{
	cursor: pointer;
}


.img_section2 {
	transition: 1s all;
	
	position: relative;
		width: 1400px;
		height: 730px;
 		margin: auto;
		background-image: url("http://localhost/marion.com/src/img/section/photoDefile2.png");
		background-size: 100%;
			 }


 
	@media screen and (min-width: 1500px) and (max-width: 2000px) {
 


		
		.block_the_section {
		text-align: center;
		width: 800px;
		margin: auto;
		position: relative;
		top: 200px;
	}
	.cercl_section1_parrent {
 
		display: flex;
		width: 400px;
	 justify-content: space-around;
	 margin: auto;
	 position: relative;
	 top: 620px;

	}
	.cercl_section1_parrent div {
	
		height: 30px;
		width: 30px;
		border-radius: 100%;
		
	}



		}

@media screen and (min-width: 2000px) and (max-width: 10500px) {



	.block_the_section {
		text-align: center;
		width: 800px;
		margin: auto;
		position: relative;
		top: 500px;
	}
	.cercl_section1_parrent {
 
		display: flex;
		width: 400px;
	 justify-content: space-around;
	 margin: auto;
	 position: relative;
	 top: 920px;

	}
	.cercl_section1_parrent div {
	
		height: 30px;
		width: 30px;
		border-radius: 100%;
		
	}
 
}

/* 
.block_the_section {
		text-align: center;
		width: 800px;
		margin: auto;
		position: relative;
		top: 500px;
	}
	.cercl_section1_parrent {
 
		display: flex;
		width: 400px;
	 justify-content: space-around;
	 margin: auto;
	 position: relative;
	 top: 920px;

	}
	.cercl_section1_parrent div {
	
		height: 30px;
		width: 30px;
		border-radius: 100%;
		
	} */









</style>













</body>
</html>
 