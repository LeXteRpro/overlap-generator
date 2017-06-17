/* ===== OVERLAP GENERATOR ===== */
/* Created by Lex */

/* Declaring Global Variables */

var total = 0;
var n = 0;

/* ===== Clipboard ===== */
/* instantiate Clipbaord vairable */
var clipboard = new Clipboard('.btn');

clipboard.on('success', function(e) {
    console.log(e);
});

clipboard.on('error', function(e) {
    console.log(e);
});


$( "#overlapInput" ).keyup(function() {

/* Key presses is equal to what's in the input form */
   textOverlap = document.getElementById("overlapInput").value;

  overLapToPixels();
  document.getElementById('pixelNum').innerHTML = total;

});


/* Text Overlaps */
function x2textOverlapFunction() {

  /* Call Remove all Button CSS function */
  removeButtonCSS();

  /* Black Text */
  document.getElementById("overlapResults").style.color = "black";

  /* Add CSS to the selected Button */
  $( "#x2textOverlapButton" ).removeClass( "overlapButtons" ).addClass( "selectedOverlapButton" );

    var textOverlap;
     textOverlap = document.getElementById("overlapInput").value;

      if (total > 308) {
        document.getElementById('overlapResults').innerHTML = "This exceeds the max length for x2 text laps. Sorry!";
        document.getElementById("overlapResults").style.color = "red";
      }

      else {
        document.getElementById('overlapResults').innerHTML = '<04>' + textOverlap + '<13><04>' + textOverlap + '<0B>.                                                                                                                           ';
        document.getElementById("overlapResults").style.color = "black";
        }
    }


/* Unit Overlaps */
function x2unitOverlapFunction() {

  /* Call Remove all Button CSS function */
  removeButtonCSS();
  /* Black Text */
  document.getElementById("overlapResults").style.color = "black";

  /* Add CSS to the selected Button */
  $( "#x2unitOverlapButton" ).removeClass( "overlapButtons" ).addClass( "selectedOverlapButton" );

    textOverlap = document.getElementById("overlapInput").value;

    /* Call the character to pixel conversion function */
    overLapToPixels();

    console.log(total);

    /* Formula for After Name */
    afterName = parseFloat(30 / (148 / total) *2 ) ;
    afterName = Math.round(afterName);

    /* Formula for Before Name */
    beforeName = parseInt(30 - afterName);

    /* Convert AfterName from number to string */
    var afterNameSpace = '';
    /* Replace the number with the correct amount of spaces */
    while (afterName > 0) {
      afterName = afterName - 1;
      afterNameSpace = afterNameSpace + " ";
    }

    /* Convert BeforeName from number to string */
    var beforeNameSpace = '';
    /* Replace the number with the correct amount of spaces */
    while (beforeName > 0) {
      beforeName = beforeName - 1;
      beforeNameSpace = beforeNameSpace + " ";
    }


if (total > 75) {
  document.getElementById('overlapResults').innerHTML = "This exceeds the max length for x2 Unit laps. Sorry!";
  document.getElementById("overlapResults").style.color = "red";
}

else {
  document.getElementById('overlapResults').innerHTML = beforeNameSpace + '<04>' + textOverlap + '<12><04>' + textOverlap + afterNameSpace;
  document.getElementById("overlapResults").style.color = "black";
  }
}


function x2missionBriefingOverlapFunction() {
  /* Call Remove all Button CSS function */
  removeButtonCSS();
  /* Black Text */
  document.getElementById("overlapResults").style.color = "black";
  /* Add CSS to the selected Button */
  $( "#x2briefingOverlapButton" ).removeClass( "overlapButtons" ).addClass( "selectedOverlapButton" );

  var textOverlap;
   textOverlap = document.getElementById("overlapInput").value;

    document.getElementById('overlapResults').innerHTML = '<04>' + textOverlap + '<13><04>' + textOverlap + '<14>.                                    ';

}
function x3textOverlapFunction() {
  /* Call Remove all Button CSS function */
  removeButtonCSS();
  /* Black Text */
  document.getElementById("overlapResults").style.color = "black";
  /* Add CSS to the selected Button */
  $( "#x3textOverlapButton" ).removeClass( "overlapButtons" ).addClass( "selectedOverlapButton" );

  document.getElementById('overlapResults').innerHTML = ""

}

function x3unitOverlapFunction() {
    /* Call Remove all Button CSS function */
    removeButtonCSS();
    /* Black Text */
    document.getElementById("overlapResults").style.color = "black";
    /* Add CSS to the selected Button */
    $( "#x3unitOverlapButton" ).removeClass( "overlapButtons" ).addClass( "selectedOverlapButton" );
      document.getElementById('overlapResults').innerHTML = ""
  }

function x3missionBriefingOverlapFunction() {
  /* Call Remove all Button CSS function */
  removeButtonCSS();
  /* Black Text */
  document.getElementById("overlapResults").style.color = "black";
  /* Add CSS to the selected Button */
  $( "#x3briefingOverlapButton" ).removeClass( "overlapButtons" ).addClass( "selectedOverlapButton" );
    document.getElementById('overlapResults').innerHTML = ""
}



var removeButtonCSS = function() {
  /* Remove Selected CSS from all buttons*/
  $( "#x2textOverlapButton" ).removeClass( "selectedOverlapButton" ).addClass( "overlapButtons" );
  $( "#x2unitOverlapButton" ).removeClass( "selectedOverlapButton" ).addClass( "overlapButtons" );
  $( "#x2briefingOverlapButton" ).removeClass( "selectedOverlapButton" ).addClass( "overlapButtons" );
  $( "#x3textOverlapButton" ).removeClass( "selectedOverlapButton" ).addClass( "overlapButtons" );
  $( "#x3unitOverlapButton" ).removeClass( "selectedOverlapButton" ).addClass( "overlapButtons" );
  $( "#x3briefingOverlapButton" ).removeClass( "selectedOverlapButton" ).addClass( "overlapButtons" );
};

/* Initiate Character to Pixel Converter */
  function overLapToPixels () {
   total = 0;
   n = 0

  /* Find pixel length for every character*/
    for (var i=0; i < textOverlap.length; i++) {
      if(textOverlap.charAt(i)=="A"){total = total + (n+7);}
      else if(textOverlap.charAt(i)=="B"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="C"){total = total + (n+7);}
      else if(textOverlap.charAt(i)=="D"){total = total + (n+7);}
      else if(textOverlap.charAt(i)=="E"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="F"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="G"){total = total + (n+8);}
      else if(textOverlap.charAt(i)=="H"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="I"){total = total + (n+2);}
      else if(textOverlap.charAt(i)=="J"){total = total + (n+5);}
      else if(textOverlap.charAt(i)=="K"){total = total + (n+7);}
      else if(textOverlap.charAt(i)=="L"){total = total + (n+5);}
      else if(textOverlap.charAt(i)=="M"){total = total + (n+7);}
      else if(textOverlap.charAt(i)=="N"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="O"){total = total + (n+8);}
      else if(textOverlap.charAt(i)=="P"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="Q"){total = total + (n+8);}
      else if(textOverlap.charAt(i)=="R"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="S"){total = total + (n+7);}
      else if(textOverlap.charAt(i)=="T"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="U"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="V"){total = total + (n+7);}
      else if(textOverlap.charAt(i)=="W"){total = total + (n+10);}
      else if(textOverlap.charAt(i)=="X"){total = total + (n+7);}
      else if(textOverlap.charAt(i)=="Y"){total = total + (n+8);}
      else if(textOverlap.charAt(i)=="Z"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="a"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="b"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="c"){total = total + (n+5);}
      else if(textOverlap.charAt(i)=="d"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="e"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="f"){total = total + (n+4);}
      else if(textOverlap.charAt(i)=="g"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="h"){total = total + (n+5);}
      else if(textOverlap.charAt(i)=="i"){total = total + (n+2);}
      else if(textOverlap.charAt(i)=="j"){total = total + (n+3);}
      else if(textOverlap.charAt(i)=="k"){total = total + (n+5);}
      else if(textOverlap.charAt(i)=="l"){total = total + (n+2);}
      else if(textOverlap.charAt(i)=="m"){total = total + (n+8);}
      else if(textOverlap.charAt(i)=="n"){total = total + (n+5);}
      else if(textOverlap.charAt(i)=="o"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="p"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="q"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="r"){total = total + (n+5);}
      else if(textOverlap.charAt(i)=="s"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="t"){total = total + (n+4);}
      else if(textOverlap.charAt(i)=="u"){total = total + (n+5);}
      else if(textOverlap.charAt(i)=="v"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="w"){total = total + (n+8);}
      else if(textOverlap.charAt(i)=="x"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="v"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="y"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="z"){total = total + (n+5);}
      else if(textOverlap.charAt(i)=="1"){total = total + (n+4);}
      else if(textOverlap.charAt(i)=="2"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="3"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="4"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="5"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="6"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="7"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="8"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="9"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="0"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="-"){total = total + (n+3);}
      else if(textOverlap.charAt(i)=="="){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="<"){total = total + (n+6);}
      else if(textOverlap.charAt(i)==">"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="|"){total = total + (n+2);}
      else if(textOverlap.charAt(i)=="!"){total = total + (n+2);}
      else if(textOverlap.charAt(i)=='"'){total = total + (n+4);}
      else if(textOverlap.charAt(i)=="/"){total = total + (n+4);}
      else if(textOverlap.charAt(i)=="$"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="%"){total = total + (n+8);}
      else if(textOverlap.charAt(i)=="?"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="&"){total = total + (n+8);}
      else if(textOverlap.charAt(i)=="*"){total = total + (n+6);}
      else if(textOverlap.charAt(i)==")"){total = total + (n+3);}
      else if(textOverlap.charAt(i)=="("){total = total + (n+3);}
      else if(textOverlap.charAt(i)=="&"){total = total + (n+8);}
      else if(textOverlap.charAt(i)=="&"){total = total + (n+8);}
      else if(textOverlap.charAt(i)=="&"){total = total + (n+8);}
      else if(textOverlap.charAt(i)=="&"){total = total + (n+8);}
      else if(textOverlap.charAt(i)=="_"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="+"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="±"){total = total + (n+4);}
      else if(textOverlap.charAt(i)=="@"){total = total + (n+9);}
      else if(textOverlap.charAt(i)=="£"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="¢"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="¤"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="¬"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="¦"){total = total + (n+2);}
      else if(textOverlap.charAt(i)=="²"){total = total + (n+4);}
      else if(textOverlap.charAt(i)=="³"){total = total + (n+4);}
      else if(textOverlap.charAt(i)=="¼"){total = total + (n+8);}
      else if(textOverlap.charAt(i)=="½"){total = total + (n+9);}
      else if(textOverlap.charAt(i)=="¾"){total = total + (n+9);}
      else if(textOverlap.charAt(i)=="{"){total = total + (n+4);}
      else if(textOverlap.charAt(i)=="}"){total = total + (n+4);}
      else if(textOverlap.charAt(i)=="["){total = total + (n+3);}
      else if(textOverlap.charAt(i)=="]"){total = total + (n+3);}
      else if(textOverlap.charAt(i)=="^"){total = total + (n+6);}
      else if(textOverlap.charAt(i)==","){total = total + (n+3);}
      else if(textOverlap.charAt(i)=="."){total = total + (n+2);}
      else if(textOverlap.charAt(i)==";"){total = total + (n+3);}
      else if(textOverlap.charAt(i)==":"){total = total + (n+2);}
      else if(textOverlap.charAt(i)=="'"){total = total + (n+2);}
      else if(textOverlap.charAt(i)=="`"){total = total + (n+3);}
      else if(textOverlap.charAt(i)=="´"){total = total + (n+3);}
      else if(textOverlap.charAt(i)=="~"){total = total + (n+5);}
      else if(textOverlap.charAt(i)=="¸"){total = total + (n+3);}
      else if(textOverlap.charAt(i)=="¯"){total = total + (n+5);}
      else if(textOverlap.charAt(i)==" "){total = total + (n+5);}
      else if(textOverlap.charAt(i)=="#"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="\\"){total = total + (n+5);}
      else if(textOverlap.charAt(i)=="§"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="¶"){total = total + (n+6);}
      else if(textOverlap.charAt(i)=="µ"){total = total + (n+6);}

    }; /* Close for loop */
    return total;


} /* Close overlapToPixels Function */
