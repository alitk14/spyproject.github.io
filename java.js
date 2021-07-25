var firstname= prompt ("FirstName Please :")
var lastname = prompt ("LastName Please :")
var age = prompt ("How OLd Are You?")
var petname = prompt ("What Is Your Pet Name?")
var height =prompt ("What Is Your height?")
alert ("Thank you for the information!")

var  heightcond = null;
var  agecond = null;
var petnamecond = null;
var namecond = null ;

if (firstname[0]==="s" && lastname[0]==="i") {
  namecond = true;
}else {
  namecond=false;
}

if (age < 30 && age > 20) {
 agecond = true  ;
} else {
   agecond=false;
 }

if (petname[petname.length-1]==="o") {
  petnamecond = true;
}else {
  petnamecond=false;
}

if (height < 170) {
  heightcond = true;
}else {
  heightcond=false ;
}

if (heightcond && agecond && namecond && petnamecond) {
  console.log("You are the SPY!!!!");
}else {
  console.log("nothing to see here!");
}
