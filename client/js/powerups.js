const sock = io();

var LKPts = 0;
var TJYPts = 0;
var JVPts = 0;
var LXRPts = 0;
var JLPts = 0;
var JHAPts = 0;
var SZFPts = 0;
var HPts = 0;

var names = [
    "LK",
    "TJY",
    "JV",
    "LXR",
    "JL",
    "JHA",
    "SZF",
    "H"
]

var addBtns = document.getElementsByClassName("add");
var negBtns = document.getElementsByClassName("neg");

addBtns[0].addEventListener('click', function () {
    sock.emit('score0', "plus");
});

negBtns[0].addEventListener('click', function () {
    sock.emit('score0', "minus");
});

addBtns[1].addEventListener('click', function () {
    sock.emit('score1', "plus");
});

negBtns[1].addEventListener('click', function () {
    sock.emit('score1', "minus");
});

addBtns[2].addEventListener('click', function () {
    sock.emit('score2', "plus");
});

negBtns[2].addEventListener('click', function () {
    sock.emit('score2', "minus");
});

addBtns[3].addEventListener('click', function () {
    sock.emit('score3', "plus");
});

negBtns[3].addEventListener('click', function () {
    sock.emit('score3', "minus");
});

addBtns[4].addEventListener('click', function () {
    sock.emit('score4', "plus");
});

negBtns[4].addEventListener('click', function () {
    sock.emit('score4', "minus");
});

addBtns[5].addEventListener('click', function () {
    sock.emit('score5', "plus");
});

negBtns[5].addEventListener('click', function () {
    sock.emit('score5', "minus");
});

addBtns[6].addEventListener('click', function () {
    sock.emit('score6', "plus");
});

negBtns[6].addEventListener('click', function () {
    sock.emit('score6', "minus");
});

addBtns[7].addEventListener('click', function () {
    sock.emit('score7', "plus");
});

negBtns[7].addEventListener('click', function () {
    sock.emit('score7', "minus");
});


sock.on('update0', data => {
    var getDiv = document.getElementsByClassName(names[0]);
    getDiv[0].innerHTML = names[0] + " Points: " + data;
});

sock.on('update1', data => {
    var getDiv = document.getElementsByClassName(names[1]);
    getDiv[0].innerHTML = names[1] + " Points: " + data;
});

sock.on('update2', data => {
    var getDiv = document.getElementsByClassName(names[2]);
    getDiv[0].innerHTML = names[2] + " Points: " + data;
});

sock.on('update3', data => {
    var getDiv = document.getElementsByClassName(names[3]);
    getDiv[0].innerHTML = names[3] + " Points: " + data;
});

sock.on('update4', data => {
    var getDiv = document.getElementsByClassName(names[4]);
    getDiv[0].innerHTML = names[4] + " Points: " + data;
});

sock.on('update5', data => {
    var getDiv = document.getElementsByClassName(names[5]);
    getDiv[0].innerHTML = names[5] + " Points: " + data;
});

sock.on('update6', data => {
    var getDiv = document.getElementsByClassName(names[6]);
    getDiv[0].innerHTML = names[6] + " Points: " + data;
});

sock.on('update7', data => {
    var getDiv = document.getElementsByClassName(names[7]);
    getDiv[0].innerHTML = names[7] + " Points: " + data;
});

sock.on("updateall", data => {
    names.forEach((person, index) => {
        //console.log(index + ":" + person);
        //console.log(data[1]);
        var getDiv = document.getElementsByClassName(person);
        getDiv[0].innerHTML = person + " Points: " + data[index];
    });
});