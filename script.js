//your JS code here. If required.
function dis(){
	var fname = document.getElementById("fname").value ;
	var lname = document.getElementById("lname").value ;
	var pnumber = document.getElementById("pnumber").value ;
	var email = document.getElementById("email").value ;
	var details = "First Name: " + fname + "\nLast Name: " + lname
	+ "\nPhone Number: " + pnumber + "\nEmail ID: " + email;
	alert(details);
}