const sock = io();

function Round(id, chsDivId, pwrDivId, chooser, p2DivId, p2, rewDivId, reward, opt1, opt2, opt3, opt4, opt5, currRnd) {
    this.id = id;
    this.chsDivId = chsDivId;
    this.pwrDivId = pwrDivId;
    this.chooser = chooser;
    this.p2DivId = p2DivId;
    this.p2 = p2;
    this.rewDivId = rewDivId;
    this.reward = reward;
    this.opt1 = opt1;
    this.opt2 = opt2;
    this.opt3 = opt3;
    this.opt4 = opt4;
    this.opt5 = opt5;
    this.currRnd = currRnd;
}

const elementsById = document.querySelectorAll('[id]');
const allIdArr = Array.prototype.map.call(elementsById, el => el.id);
//console.log(allIdArr);

var nickname = "";
var nxtRndBtn = document.getElementsByClassName("nextround");

var r = 0;
var s = 4;
var i = 1;

//---------------------------------------------------------------------------------------------------------

const promptMsg = () => {
    var nick = prompt("Please enter your pin number:");
    while (nick.length == 0) {
        alert("Please enter your pin number!");
        nick = prompt("Please enter your pin number:");
    }


    if (nick === '8111188') {
        nickname = 'Aum';
        correctPin = true;
    } else if (nick === '1888811') {
        nickname = 'Nina'
        correctPin = true;
    } else if (nick === '9852') {
        nickname = 'LK'
        correctPin = true;
    } else if (nick === '9035') {
        nickname = 'LXR'
        correctPin = true;
    } else if (nick === '6588') {
        nickname = 'TJY'
        correctPin = true;
    } else if (nick === '1072') {
        nickname = 'JL'
        correctPin = true;
    } else if (nick === '3839') {
        nickname = 'SZF'
        correctPin = true;
    } else if (nick === '4048') {
        nickname = 'H' 
    } else if (nick === '5691') {
        nickname = 'JV'
    } else if (nick === '88888') {
        nickname = 'TCR'
    } else if (nick === '3583') {
        nickname = 'JHA'
        correctPin = true;
    } else if (nick === '5086') {
        nickname = 'CED'
    } else if (nick === '2105') {
        nickname = 'CJH'
    } else if (nick === '2167') {
        nickname = 'KX'
    } else if (nick === '7051') {
        nickname = 'KN'
    } else if (nick === '1198') {
        nickname = 'LOK'
    } else if (nick === '7089') {
        nickname = 'JW'
    } else if (nick === '3825') {
        nickname = 'JZ'
    } else if (nick === '1289') {
        nickname = 'JX'
    } else if (nick === '1399') {
        nickname = 'JAY'
    } else if (nick === '8579') {
        nickname = 'TWN'
    } else if (nick === '8828') {
        nickname = 'LJY'
    } else if (nick === '3191') {
        nickname = 'ELI'
    } else if (nick === '3307') {
        nickname = 'CUR'
    } else if (nick === '1529') {
        nickname = 'LSH'
    } else if (nick === '7385') {
        nickname = 'RYD'
    } else if (nick === '4162') {
        nickname = 'JT'
    } else if (nick === '6139') {
        nickname = 'KSY'
    } else {
        alert("Wrong pin number!");
        promptMsg();
    }
};

promptMsg();
sock.emit('newuser', nickname);

//---------------------------------------------------------------------------------------------------------

function appendPower(rNPwr, pwrName) {
    var r1pwr = document.getElementById(rNPwr);
    r1pwr.innerHTML = pwrName;
}

function appendPowerBtns(theObj) {
    document.getElementById("option1").innerHTML = theObj.opt1;
    document.getElementById("option2").innerHTML = theObj.opt2;
    document.getElementById("option3").innerHTML = theObj.opt3;
    document.getElementById("option4").innerHTML = theObj.opt4;
    document.getElementById("option5").innerHTML = theObj.opt5;
}

function appendChooser(rNChs, chsName) {
    var r1chs = document.getElementById(rNChs);
    r1chs.innerHTML = chsName;
}

function appendP2(rNP2, p2Name) {
    var r1p2 = document.getElementById(rNP2);
    r1p2.innerHTML = p2Name;
}

function appendRew(rNRew, rew) {
    var r1rew = document.getElementById(rNRew);
    r1rew.innerHTML = rew;
}

function removeListeners() {
    var old_element = document.getElementById("option1");
    var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);

    var old_element = document.getElementById("option2");
    var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);

    var old_element = document.getElementById("option3");
    var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);

    var old_element = document.getElementById("option4");
    var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);

    var old_element = document.getElementById("option5");
    var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
}

function runRounds(theRndObj) {
    appendChooser(theRndObj.chsDivId, theRndObj.chooser);
    appendP2(theRndObj.p2DivId, theRndObj.p2);
    appendRew(theRndObj.rewDivId, theRndObj.reward);
    appendPowerBtns(theRndObj);

    var pwrBtn1 = document.getElementById("option1");
    pwrBtn1.addEventListener('click', function () {
        if (nickname === theRndObj.chooser || nickname === "TCR") {
            var text = pwrBtn1.innerHTML;
            var theDivId = theRndObj.pwrDivId;
            appendPower(theRndObj.pwrDivId, text);
            sock.emit('appendpower', { theDivId, text });
        } else {alert("You can't choose power this round!");}
    });
    

    var pwrBtn2 = document.getElementById("option2");
    pwrBtn2.addEventListener('click', function () {
        if (nickname === theRndObj.chooser || nickname === "TCR") {
            var text = pwrBtn2.innerHTML;
            var theDivId = theRndObj.pwrDivId;
            appendPower(theRndObj.pwrDivId, text);
            sock.emit('appendpower', { theDivId, text });
        } else {alert("You can't choose power this round!");}
        
    });

    var pwrBtn3 = document.getElementById("option3");
    pwrBtn3.addEventListener('click', function () {
        if (nickname === theRndObj.chooser || nickname === "TCR") {
            var text = pwrBtn3.innerHTML;
            var theDivId = theRndObj.pwrDivId;
            appendPower(theRndObj.pwrDivId, text);
            sock.emit('appendpower', { theDivId, text });
        } else {alert("You can't choose power this round!");}
        
    });

    var pwrBtn4 = document.getElementById("option4");
    pwrBtn4.addEventListener('click', function () {
        if (nickname === theRndObj.chooser || nickname === "TCR") {
            var text = pwrBtn4.innerHTML;
            var theDivId = theRndObj.pwrDivId;
            appendPower(theRndObj.pwrDivId, text);
            sock.emit('appendpower', { theDivId, text });
        } else {alert("You can't choose power this round!");}
        
    });

    var pwrBtn5 = document.getElementById("option5");
    pwrBtn5.addEventListener('click', function () {
        if (nickname === theRndObj.chooser || nickname === "TCR") {
            var text = pwrBtn5.innerHTML;
            var theDivId = theRndObj.pwrDivId;
            appendPower(theRndObj.pwrDivId, text);
            sock.emit('appendpower', { theDivId, text });
        } else {alert("You can't choose power this round!");}
        
    });


}


var chgLink = document.getElementsByClassName("link");

if (nickname === "TCR") {
    chgLink[0].href = "powerups.html";
}

nxtRndBtn[0].disabled = true;
nxtRndBtn[0].style.opacity = "0";

if (nickname === "TCR") {
    nxtRndBtn[0].disabled = false;
    nxtRndBtn[0].style.opacity = "1";
}

//#############################################################################################################
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
var objRnd1 = new Round("r1", allIdArr[0], allIdArr[1], "SZF", allIdArr[2], "H", allIdArr[3], "1 Pt", "FS-2", "SL-2", "-0.5", "--", "--", true);
r = 4;
var objRnd2 = new Round("r2", allIdArr[r], allIdArr[r+1], "JHA", allIdArr[r+2], "LXR", allIdArr[r+3], "1 Pt", "2CHA", "-0.5", "FS-2", "--", "--", false);
r = r + s;
var objRnd3 = new Round("r3", allIdArr[r], allIdArr[r+1], "JL", allIdArr[r+2], "JV", allIdArr[r+3], "1 Pt", "OPP-R", "2TRY", "-1", "--", "--", false);
r = r + s;
var objRnd4 = new Round("r4", allIdArr[r], allIdArr[r+1], "TJY", allIdArr[r+2], "LK", allIdArr[r+3], "1 Pt", "2XPTS", "OPP-R", "-0.5", "--", "--", false);
r = r + s;
var objRnd5 = new Round("r5", allIdArr[r], allIdArr[r+1], "H", allIdArr[r+2], "SZF", allIdArr[r+3], "1 Pt", "REM", "-1", "FS-2", "--", "--", false);
r = r + s;
var objRnd6 = new Round("r6", allIdArr[r], allIdArr[r+1], "JHA", allIdArr[r+2], "JL", allIdArr[r+3], "1 Pt", "2CHA", "-1", "SL-2", "--", "--", false);
r = r + s;
var objRnd7 = new Round("r7", allIdArr[r], allIdArr[r+1], "LXR", allIdArr[r+2], "JV", allIdArr[r+3], "1 Pt", "-1", "OPP-R", "2XPTS", "--", "--", false);
r = r + s;
var objRnd8 = new Round("r8", allIdArr[r], allIdArr[r+1], "LK", allIdArr[r+2], "TJY", allIdArr[r+3], "1 Pt", "2CHA", "REM", "-0.5", "--", "--", false);
r = r + s;
var objRnd9 = new Round("r9", allIdArr[r], allIdArr[r+1], "H", allIdArr[r+2], "JHA", allIdArr[r+3], "1 Pt", "-2", "2CHA", "SL-2", "--", "--", false);
r = r + s;
var objRnd10 = new Round("r10", allIdArr[r], allIdArr[r+1], "SZF", allIdArr[r+2], "LXR", allIdArr[r+3], "1 Pt", "-3", "OPP-R", "2CHA", "--", "--", false);
r = r + s;
var objRnd11 = new Round("r11", allIdArr[r], allIdArr[r+1], "JL", allIdArr[r+2], "LK", allIdArr[r+3], "1 Pt", "-0.5", "2CHA", "SL-2", "--", "--", false);
r = r + s;
var objRnd12 = new Round("r12", allIdArr[r], allIdArr[r+1], "TJY", allIdArr[r+2], "JV", allIdArr[r+3], "1 Pt", "2XPTS", "OPP-R", "SL-2", "--", "--", false);
r = r + s;
var objRnd13 = new Round("r13", allIdArr[r], allIdArr[r+1], "H", allIdArr[r+2], "LXR", allIdArr[r+3], "1 Pt", "-3", "OPP-R", "2XPTS", "--", "--", false);
r = r + s;
var objRnd14 = new Round("r14", allIdArr[r], allIdArr[r+1], "SZF", allIdArr[r+2], "JHA", allIdArr[r+3], "1 Pt", "-3", "OPP-R", "REM", "--", "--", false);
r = r + s;
var objRnd15 = new Round("r15", allIdArr[r], allIdArr[r+1], "JL", allIdArr[r+2], "TJY", allIdArr[r+3], "1 Pt", "-0.5", "OPP-R", "REM", "--", "--", false);
r = r + s;
var objRnd16 = new Round("r16", allIdArr[r], allIdArr[r+1], "JV", allIdArr[r+2], "LK", allIdArr[r+3], "1 Pt", "2XPTS", "-0.5", "FS-2", "--", "--", false);
r = r + s;
var objRnd17 = new Round("r17", allIdArr[r], allIdArr[r+1], "H", allIdArr[r+2], "JL", allIdArr[r+3], "1 Pt", "-3", "OPP-R", "2CHA", "--", "--", false);
r = r + s;
var objRnd18 = new Round("r18", allIdArr[r], allIdArr[r+1], "SZF", allIdArr[r+2], "JV", allIdArr[r+3], "2:1 Pt", "-5", "OPP-R", "REM", "--", "--", false);
r = r + s;
var objRnd19 = new Round("r19", allIdArr[r], allIdArr[r+1], "JHA", allIdArr[r+2], "TJY", allIdArr[r+3], "1 Pt", "-3", "OPP-R", "REM", "--", "--", false);
r = r + s;
var objRnd20 = new Round("r20", allIdArr[r], allIdArr[r+1], "LXR", allIdArr[r+2], "LK", allIdArr[r+3], "1 Pt", "-2", "2CHA", "FS-2", "--", "--", false);
r = r + s;
var objRnd21 = new Round("r21", allIdArr[r], allIdArr[r+1], "SZF", allIdArr[r+2], "TJY", allIdArr[r+3], "2:1 Pt", "-5", "OPP-R", "REM", "--", "--", false);
r = r + s;
var objRnd22 = new Round("r22", allIdArr[r], allIdArr[r+1], "H", allIdArr[r+2], "JV", allIdArr[r+3], "2:1 Pt", "-5", "OPP-R", "REM", "--", "--", false);
r = r + s;
var objRnd23 = new Round("r23", allIdArr[r], allIdArr[r+1], "LXR", allIdArr[r+2], "JL", allIdArr[r+3], "1 Pt", "FS-2", "SL-2", "2CHA", "--", "--", false);
r = r + s;
var objRnd24 = new Round("r24", allIdArr[r], allIdArr[r+1], "JHA", allIdArr[r+2], "LK", allIdArr[r+3], "1 Pt", "-3", "REM", "2CHA", "--", "--", false);
r = r + s;
var objRnd25 = new Round("r25", allIdArr[r], allIdArr[r+1], "SZF", allIdArr[r+2], "JL", allIdArr[r+3], "1 Pt", "REM", "OPP-R", "2CHA", "--", "--", false);
r = r + s;
var objRnd26 = new Round("r26", allIdArr[r], allIdArr[r+1], "JHA", allIdArr[r+2], "JV", allIdArr[r+3], "1 Pt", "-4", "OPP-R", "2CHA", "--", "--", false);
r = r + s;
var objRnd27 = new Round("r27", allIdArr[r], allIdArr[r+1], "H", allIdArr[r+2], "LK", allIdArr[r+3], "2:1 Pt", "-5", "OPP-R", "2CHA", "--", "--", false);
r = r + s;
var objRnd28 = new Round("r28", allIdArr[r], allIdArr[r+1], "LXR", allIdArr[r+2], "TJY", allIdArr[r+3], "1 Pt", "-2", "2CHA", "REM", "--", "--", false);
r = r + s;
var objRnd29 = new Round("r29", allIdArr[r], allIdArr[r+1], "LK", allIdArr[r+2], "JV", allIdArr[r+3], "2 Pt", "SL-2", "2CHA", "FS-2", "--", "--", false);
r = r + s;
var objRnd30 = new Round("r30", allIdArr[r], allIdArr[r+1], "JV", allIdArr[r+2], "TJY", allIdArr[r+3], "2 Pt", "FS-2", "SL-2", "REM", "--", "--", false);
r = r + s;
var objRnd31 = new Round("r31", allIdArr[r], allIdArr[r+1], "H", allIdArr[r+2], "SZF", allIdArr[r+3], "2 Pt", "FS-2", "SL-2", "--", "--", "--", false);
r = r + s;
var objRnd32 = new Round("r32", allIdArr[r], allIdArr[r+1], "JHA", allIdArr[r+2], "LXR", allIdArr[r+3], "2 Pt", "FS-2", "SL-2", "--", "--", "--", false);
r = r + s;
var objRnd33 = new Round("r33", allIdArr[r], allIdArr[r+1], "LXR", allIdArr[r+2], "JL", allIdArr[r+3], "2 Pt", "FS-2", "SL-2", "--", "--", "--", false);
r = r + s;
var objRnd34 = new Round("r34", allIdArr[r], allIdArr[r+1], "JL", allIdArr[r+2], "JHA", allIdArr[r+3], "2 Pt", "FS-2", "SL-2", "--", "--", "--", false);
r = r + s;
var objRnd35 = new Round("r35", allIdArr[r], allIdArr[r+1], "TJY", allIdArr[r+2], "JV", allIdArr[r+3], "2 Pt", "FS-2", "SL-2", "--", "--", "--", false);
r = r + s;
var objRnd36 = new Round("r36", allIdArr[r], allIdArr[r+1], "JV", allIdArr[r+2], "LK", allIdArr[r+3], "2 Pt", "FS-2", "SL-2", "--", "--", "--", false);
r = r + s;

runRounds(objRnd1);
runRounds(objRnd2);
runRounds(objRnd3);
runRounds(objRnd4);
runRounds(objRnd5);
runRounds(objRnd6);
runRounds(objRnd7);
runRounds(objRnd8);
runRounds(objRnd9);
runRounds(objRnd10);
runRounds(objRnd11);
runRounds(objRnd12);
runRounds(objRnd13);
runRounds(objRnd14);
runRounds(objRnd15);
runRounds(objRnd16);
runRounds(objRnd17);
runRounds(objRnd18);
runRounds(objRnd19);
runRounds(objRnd20);
runRounds(objRnd21);
runRounds(objRnd22);
runRounds(objRnd23);
runRounds(objRnd24);
runRounds(objRnd25);
runRounds(objRnd26);
runRounds(objRnd27);
runRounds(objRnd28);
runRounds(objRnd29);
runRounds(objRnd30);
runRounds(objRnd31);
runRounds(objRnd32);
runRounds(objRnd33);
runRounds(objRnd34);
runRounds(objRnd35);
runRounds(objRnd36);
removeListeners();

arr2 = [
    objRnd1,
    objRnd2,
    objRnd3,
    objRnd4,
    objRnd5,
    objRnd6,
    objRnd7,
    objRnd8,
    objRnd9,
    objRnd10,
    objRnd11,
    objRnd12,
    objRnd13,
    objRnd14,
    objRnd15,
    objRnd16,
    objRnd17,
    objRnd18,
    objRnd19,
    objRnd20,
    objRnd21,
    objRnd22,
    objRnd23,
    objRnd24,
    objRnd25,
    objRnd26,
    objRnd27,
    objRnd28,
    objRnd29,
    objRnd30,
    objRnd31,
    objRnd32,
    objRnd33,
    objRnd34,
    objRnd35,
    objRnd36
]

arr3 = [
    "round1",
    "round2",
    "round3",
    "round4",
    "round5",
    "round6",
    "round7",
    "round8",
    "round9",
    "round10",
    "round11",
    "round12",
    "round13",
    "round14",
    "round15",
    "round16",
    "round17",
    "round18",
    "round19",
    "round20",
    "round21",
    "round22",
    "round23",
    "round24",
    "round25",
    "round26",
    "round27",
    "round28",
    "round29",
    "round30",
    "round31",
    "round32",
    "round33",
    "round34",
    "round35",
    "round36"
]

runRounds(arr2[0]);
removeListeners();
var rnd1Div = document.getElementsByClassName(arr3[0]);
rnd1Div[0].style.border = "7px solid blue";

nxtRndBtn[0].addEventListener('click', function() {
    i++;
    //removeListeners();
    //runRounds(arr2[i-1]);
    
    var theNextRndObj = arr2[i-1];
    sock.emit('allmovenext', { i, theNextRndObj });
});

//********************************************************************************************************
sock.on('oncurrentround', data => {
    //alert("Someone connected at round: " + data);
    i = data;
    runRounds(arr2[i-1]);

    var rnd1Div = document.getElementsByClassName(arr3[0]);
    rnd1Div[0].style.border = "none";
    var rndDiv = document.getElementsByClassName(arr3[i-1]);
    rndDiv[0].style.border = "7px solid blue";
    
});

sock.on('appendall', data => {
    var divToAppend = data.theDivId;
    var text = data.text;
    appendPower(divToAppend, text);
});

sock.on('movenext', data => {
    
    var nextRndObj = data.theNextRndObj;
    var oldDiv = document.getElementsByClassName(arr3[data.i -2]);
    oldDiv[0].style.border = "none";
    var newDiv = document.getElementsByClassName(arr3[data.i - 1]);
    newDiv[0].style.border = "7px solid blue";

    removeListeners();
    runRounds(nextRndObj);
    //i = data.i + 1;

});




