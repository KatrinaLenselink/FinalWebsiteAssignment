function todaysDate ()
{
  var todayDate = new Date();
  document.getElementById("giveDate").innerHTML= "Today's Date is:" + todayDate.getMonth()+ "/" + todayDate.getDate() + "/" + todayDate.getFullYear ();
  document.getElementById("giveDate").style.fontSize="15px";
}

var a = new Array();
a[0] = "Etch-a-Sketch";
a[1] = "Dinosaur Figurines";
a[2] = "Lego Creative Suitcase";
a[3] = "Scrabble";
a[4] = "Winter Garden Wreath";
a[5] = "Elegance Wreath";
a[6] = "Winter Berries Wreath";
a[7] = "Canadian Pine Wreah";
a[8] = "Yuletide Cottage Puzzle";
a[9] = "Cozy Christmas Puzzle";
a[10]= "Presents!Presents!Presents! Puzzle";
a[11]= "Christmas Carolers Puzzle";
a[12]= "Multi-coloured Lights";
a[13]= "Rope Lights";
a[14]= "House Lights";
a[15]= "Bush Lights";
a[16]= "Glitter Ornaments";
a[17]= "Jingle Bell Garland";
a[18]= "Snowflake Candleholder";
a[19]= "Zinc Reindeer" ;
a[20]= "Oh Snap sweater";
a[21]= "On the first day... sweater";
a[22]= "Santa Claws sweater";
a[23]= "Feliz Navidog";



function sentence()
{
var c = Math.floor( Math.random()*24 );
document.getElementById("output").innerHTML= "Gift: " + a[c];
}
