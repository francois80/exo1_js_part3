function fBordure(nom_img, statut){
  var nom_img = nom_img;
  var statut = statut;
  if(statut == "1"){
    document.getElementById(nom_img).style.border = "solid red 3px";
  }
  else{
    document.getElementById(nom_img).style.border = "none";
  }
}
