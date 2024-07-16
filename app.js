var prenom = prompt("Comment tu t'appelles ?");
var titre = document.getElementById('titre');
titre.innerText = "Bonjour " + prenom;

if(prenom == "Pauline"){
	alert("Comme moi !");
	body.style.backgroundColor = "#008000";
}else{
	body.style.backgroundColor = "#FF0000";
}