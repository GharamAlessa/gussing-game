'use strict';



let username = prompt('whats your name?');
//console.log(' Hello '+username);
alert(' hello ' + username);

let play = prompt('Do you like gussing games?')
// console.log(play);
console.log('before', play);
play = play.toLocaleLowerCase();
console.log('after', play);

if (play === "yes" || play === "y") {
    //console.log('grate! me too');
    alert('grate! me too')
} else {
    // console.log('you will after this game');
    alert(' you will like it after this game')
}



let drive = prompt('Do you think i can drive?')
// console.log(drive);
console.log('before', drive);
drive = drive.toLocaleLowerCase();
console.log('after', drive);

if (drive === "yes" || drive === "y") {
    //console.log('not really.. ive been practecing so long ago');
    alert('not really.. ive been practecing so long ago')
} else {
    // console.log('unfortiontly youre right');
    alert('unfortiontly youre right')
}


let cat = prompt('do you think i have a pet?')
// console.log(cat);
console.log('before', cat);
cat = cat.toLocaleLowerCase();
console.log('after', cat);

if (cat === "yes" || cat === "y") {
    //console.log('i have a cat its name sonbol');
    alert(' i have a cat its name sonbol')
} else {
    // console.log('actully i adore animals');
    alert('actully i adore animals')
}


let sport = prompt('do you think i play any sport?')
// console.log(sport);
console.log('before', sport);
sport = sport.toLocaleLowerCase();
console.log('after', sport);

if (sport === "yes" || sport === "y") {
    //console.log('yeah i workout evrey day');
    alert('yeah i workout evrey day')
} else {
    // console.log(' you look like not a big fan of sports');
    alert(' you look like not a big fan of sports')
}

let meet = prompt('have we ever met?')
// console.log(meet);
console.log('before', meet);
meet = meet.toLocaleLowerCase();
console.log('after', meet);

if (meet === "yes" || meet === "y") {
    //console.log('really! thats sounds intresting');
    alert('really! thats sounds intresting')
} else {
    // console.log('it will be honor to meet you');
    alert('it will be honor to meet you')
}

alert(' i hope you enjoed this little game ' + username)




let hobi=['writing','reading','swimming','playing music'];
console.log(hobi.length);
for(let i=0; i<hobi.length; i++){


    console.log(hobi[i]);
}