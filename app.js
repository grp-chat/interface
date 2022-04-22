const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const PORT = process.env.PORT || 3000;

const app = express();

const clientPath = `${__dirname}/client`;
console.log(`Serving static files from path ${clientPath}`);

app.use(express.static(clientPath));
const server = http.createServer(app);
const io = socketio(server);

server.listen(PORT);
console.log("Server listening at " + PORT);

//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
var roundNumOnServer = 1;

var LKPoints = 0;
var TJYPoints = 0;
var JVPoints = 0;
var LXRPoints = 0;
var JLoints = 0;
var JHAPoints = 0;
var SZFPoints = 0;
var HPoints = 0;

var allPts = [
    LKPoints,
    TJYPoints,
    JVPoints,
    LXRPoints,
    JLoints,
    JHAPoints,
    SZFPoints,
    HPoints,
]





function Person(id, r1, p1, r2, p2, inOrOut) {
    this.id = id;
    this.r1 = r1;
    this.p1 = p1;
    this.r2 = r2;
    this.p2 = p2;
    this.inOrOut = inOrOut;
    this.results = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.penalties = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

/* var objLXR = new Person("LXR", 0, 0, 0, 0, false);
var objLK = new Person("LK", 0, 0, 0, 0, false);
var objTJY = new Person("TJY", 0, 0, 0, 0, false);
var objJHA = new Person("JHA", 0, 0, 0, 0, false);
var objJL = new Person("JL", 0, 0, 0, 0, false);
var objSZF = new Person("SZF", 0, 0, 0, 0, false);
var objUsers = [objTJY, objLXR, objJL, objLK, objJHA, objSZF]; */

var users = ["LOK", "JW", "CED", "CJH", "KX", "KN", "JAY"];

var objLOK = new Person("LOK", 0, 0, 0, 0, false);
var objJW = new Person("JW", 0, 0, 0, 0, false);
var objCED = new Person("CED", 0, 0, 0, 0, false);
var objCJH = new Person("CJH", 0, 0, 0, 0, false);
var objKX = new Person("KX", 0, 0, 0, 0, false);
var objKN = new Person("KN", 0, 0, 0, 0, false);
var objJAY = new Person("JAY", 0, 0, 0, 0, false);
var objUsers = [objLOK, objJW, objCED, objCJH, objKX, objKN, objJAY]; //THIS ARRAY MUST FOLLOW ARRAY SEQUENCE IN INDEX.JS


//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------

io.on('connection', (sock) => {
    
    io.emit('oncurrentround', roundNumOnServer);
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - CONNECTION~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    sock.on('newuser', (data) => {

        if (data !== "TCR") {
            var index = users.indexOf(data);
            //objUsers[index].inOrOut = true;
            sock.id = data;
            //console.log(objUsers[index].id + " " + objUsers[index].inOrOut + " does this work???")
        } else {
            sock.id = data;
        }

    });

    sock.on('disconnect', () => {

        objUsers.forEach((obj) => {
            if (obj.id === sock.id) {
                obj.inOrOut = false;
            }
        });


    });
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - CONNECTION ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - ADD & MINUS WINS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    sock.on('addWin', (data) => {
        if (data === "AA") {
            aumWins++;
        }
        if (data === "NN") {
            ninaWins++;
        }
        if (data === "LK") {
            LKWins++;
        }
        if (data === "LXR") {
            LXRWins++;
        }
        if (data === "JHA") {
            JHAWins++;
        }
        if (data === "SZF") {
            SZFWins++;
        }
        if (data === "JL") {
            JLWins++;
        }
        if (data === "TJY") {
            TJYWins++;
        }
    });

    sock.on('give', (data) => {

        if (data.userId === "LK") {
            LKWins--;
            if (data.giveToId === "JHA") {
                JHAWins++
            }
            if (data.giveToId === "SZF") {
                SZFWins++
            }
        }
        if (data.userId === "LXR") {
            LXRWins--;
            if (data.giveToId === "TJY") {
                TJYWins++
            }
            if (data.giveToId === "JL") {
                JLWins++
            }
        }
        if (data.userId === "JHA") {
            JHAWins--;
            if (data.giveToId === "LK") {
                LKWins++
            }
            if (data.giveToId === "SZF") {
                SZFWins++
            }
        }
        if (data.userId === "SZF") {
            SZFWins--;
            if (data.giveToId === "LK") {
                LKWins++
            }
            if (data.giveToId === "JHA") {
                JHAWins++
            }
        }
        if (data.userId === "JL") {
            JLWins--;
            if (data.giveToId === "TJY") {
                TJYWins++
            }
            if (data.giveToId === "LXR") {
                LXRWins++
            }
        }
        if (data.userId === "TJY") {
            TJYWins--;
            if (data.giveToId === "LXR") {
                LXRWins++
            }
            if (data.giveToId === "JL") {
                JLWins++
            }
        }
        var giverId = data.userId
        var receiverId = data.giveToId
        io.emit("lifegained", { giverId, receiverId });
    });

    sock.on('requestlife', (data) => {
        var requesterId = data.nickname;
        var requestToId = data.requestToId;
        io.emit('sendrequest', { requesterId, requestToId });

    });


    sock.on('minusWin', (data) => {
        if (data === "AA") {
            aumWins--;
            //console.log("did this run? " + data + " " + aumWins);
        }
        if (data === "NN") {
            ninaWins--;
        }
        if (data === "LK") {
            LKWins--;
        }
        if (data === "LXR") {
            LXRWins--;
        }
        if (data === "JHA") {
            JHAWins--;
        }
        if (data === "SZF") {
            SZFWins--;
        }
        if (data === "JL") {
            JLWins--;
        }
        if (data === "TJY") {
            TJYWins--;
        }

    });
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - ADD & MINUS WINS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - ADD & MINUS CHALLENGES ~~~~~~~~~~~~~~~~~~~~~~~~~~
    sock.on('addCha', (data) => {
        if (data === "AA") {
            aumChas++;
        }
        if (data === "NN") {
            ninaChas++;
        }
        if (data === "LK") {
            LKChas++;
        }
        if (data === "LXR") {
            LXRChas++;
        }
        if (data === "JHA") {
            JHAChas++;
        }
        if (data === "SZF") {
            SZFChas++;
        }
        if (data === "JL") {
            JLChas++;
        }
        if (data === "TJY") {
            TJYChas++;
        }
    });

    sock.on('minusCha', (data) => {
        if (data === "AA") {
            aumChas--;
        }
        if (data === "NN") {
            ninaChas--;
        }
        if (data === "LK") {
            LKChas--;
        }
        if (data === "LXR") {
            LXRChas--;
        }
        if (data === "JHA") {
            JHAChas--;
        }
        if (data === "SZF") {
            SZFChas--;
        }
        if (data === "JL") {
            JLChas--;
        }
        if (data === "TJY") {
            TJYChas--;
        }
    });
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~LISTEN FROM CLIENT - ADD & MINUS CHALLENGES ~~~~~~~~~~~~~~~~~~~~~~~~~~
    sock.on('submit', (data) => {

        var index = users.indexOf(data.nickname);
        objUsers[index].results[roundNum - 1] = data.result;
        objUsers[index].penalties[roundNum - 1] = data.penalties;
        console.log("The result received on server is " + objUsers[index].results[roundNum - 1] + " for user " + objUsers[index].id);
        io.emit('reshistory', objUsers[index]);

    });

    sock.on('editresult', (data) => {

        var index = users.indexOf(data.student);
        objUsers[index].results[data.round - 1] = data.result;
        objUsers[index].penalties[data.round - 1] = data.penalties;

    });

    sock.on('chat-to-server', (data) => {
        io.emit('chat-to-clients', data);
    });

    sock.on('challengethisuser', (data) => {
        io.emit('appendchallenger', data);
    });

    sock.on('challenge', (data) => {
        var userId = data;
        io.emit('sendchallenge', userId);

    });

    sock.on('nextround', () => {
        roundNum++;
        io.emit('refreshall', roundNum);
    });

    sock.on('appendpower', (data) => {
        io.emit('appendall', data);
    });

    sock.on('allmovenext', (data) => {
        roundNumOnServer = data.i;
        io.emit('movenext', data);
    });
    sock.on('score0', (data) => {
        if (data === "plus") {
            allPts[0] = allPts[0] + 1;
        }
        if (data === "minus") {
            allPts[0] = allPts[0] - 1;
        }
        io.emit('update0', allPts[0]);
    });
    sock.on('score1', (data) => {
        if (data === "plus") {
            allPts[1] += 1;
        }
        if (data === "minus") {
            allPts[1] -= 1;
        }
        io.emit('update1', allPts[1]);
    });
    sock.on('score2', (data) => {
        if (data === "plus") {
            allPts[2] += 1;
        }
        if (data === "minus") {
            allPts[2] -= 1;
        }
        io.emit('update2', allPts[2]);
    });
    sock.on('score3', (data) => {
        if (data === "plus") {
            allPts[3] += 1;
        }
        if (data === "minus") {
            allPts[3] -= 1;
        }
        io.emit('update3', allPts[3]);
    });
    sock.on('score4', (data) => {
        if (data === "plus") {
            allPts[4] += 1;
        }
        if (data === "minus") {
            allPts[4] -= 1;
        }
        io.emit('update4', allPts[4]);
    });
    sock.on('score5', (data) => {
        if (data === "plus") {
            allPts[5] += 1;
        }
        if (data === "minus") {
            allPts[5] -= 1;
        }
        io.emit('update5', allPts[5]);
    });
    sock.on('score6', (data) => {
        if (data === "plus") {
            allPts[6] += 1;
        }
        if (data === "minus") {
            allPts[6] -= 1;
        }
        io.emit('update6', allPts[6]);
    });
    sock.on('score7', (data) => {
        if (data === "plus") {
            allPts[7] += 1;
        }
        if (data === "minus") {
            allPts[7] -= 1;
        }
        io.emit('update7', allPts[7]);
    });

});


setInterval(function () {
    objUsers.forEach((obj) => {
        if (obj.inOrOut === true) {
            io.emit("transmituser", obj.id);
        }
    });

    objUsers.forEach((obj) => {
        if (obj.inOrOut === false) {
            io.emit("userdisconnect", obj.id);
        }
    });


    
        io.emit("updateall", allPts);

    
}, 1000);


