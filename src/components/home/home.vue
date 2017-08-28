<template>
  <div>

	  <div id="header">
		  <h1>Manager Home</h1>
	  </div>

	  <div id="nav" class="box2">
		  <li>London</li>
		  <li>Paris</li>
		  <li>Tokyo</li>
	  </div>

	  <div id="section">
		  <h2>London</h2>
		  <p>
           this is test manger test
		  </p>
	  </div>

	  <div id="footer">
		  Copyright ? W3Schools.com
	  </div>
  </div>
</template>

<script>
export default {

}

</script>




<style>
.box2 {
display:flex;
}
#header {
background-color:black;
color:white;
text-align:center;
padding:5px;
}
#nav {
flex-direction:column;
line-height:30px;
background-color:#eeeeee;
height:100%;
width:10%;
float:left;
padding:5px;	      
}
#section {
width:350px;
height:100%;
float:left;
padding:10px;		 
}
#footer {
background-color:black;
color:white;
clear:both;
text-align:center;
padding:5px;		 
}
html,body{height:100%}
</style>
