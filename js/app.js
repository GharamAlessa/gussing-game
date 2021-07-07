'use strict';


let score = 0;
let username = prompt('whats your name?');
//console.log(' Hello '+username);
alert(' hello ' + username);



function q1() {

    let play = prompt('Do you like gussing games?')
    // console.log(play);
    console.log('before', play);
    play = play.toLocaleLowerCase();
    console.log('after', play);

    if (play === "yes" || play === "y") {
        //console.log('grate! me too');
        score++;
        alert('grate! me too');
    } else if (play === "no" || play === "n") {
        // console.log('you will after this game');
        alert(' you will like it after this game');
    } else {
        alert('please answer with yes/y or no/n');
    }

}
q1();



function q2() {
    let drive = prompt('Do you think i can drive?')
    // console.log(drive);
    console.log('before', drive);
    drive = drive.toLocaleLowerCase();
    console.log('after', drive);

    if (drive === "yes" || drive === "y") {
        //console.log('not really.. ive been practecing so long ago');
        alert('not really.. ive been practecing so long ago');
    } else if (drive === "no" || drive === "n") {
        alert('unfortiontly youre right');
        score++;
    }
    else {
        // console.log('unfortiontly youre right');
        alert("pleaz anser with yes/y no/n");
    }

}
q2();


    let cat = prompt('do you think i have a pet?')
    // console.log(cat);
    console.log('before', cat);
    cat = cat.toLocaleLowerCase();
    console.log('after', cat);

    if (cat === "yes" || cat === "y") {
        //console.log('i have a cat its name sonbol');
        alert(' i have a cat its name sonbol');
        score++;
    }
    else if (cat === "no" || cat === "n") {
        alert('actully i adore animals');

    }
    else {
        // console.log('actully i adore animals');
        alert("pleaz anser with yes/y no/n");

    }


}



    let sport = prompt('do you think i play any sport?')
// console.log(sport);
console.log('before', sport);
sport = sport.toLocaleLowerCase();
console.log('after', sport);

if (sport === "yes" || sport === "y") {
    //console.log('yeah i workout evrey day');
    alert('yeah i workout evrey day');
    score++;
}else if (sport === "no" || sport === "n") {

    alert(' you look like not a big fan of sports');
    
} 
else {
    // console.log(' you look like not a big fan of sports');
   alert("pleaz anser with yes/y no/n");
}
    
}




    let meet = prompt('have we ever met?')
// console.log(meet);
console.log('before', meet);
meet = meet.toLocaleLowerCase();
console.log('after', meet);

if (meet === "yes" || meet === "y") {
    //console.log('really! thats sounds intresting');
    alert('really! thats sounds intresting');
} else if (meet === "no" || meet === "n") {
    alert('it will be honor to meet you');
    score++;
}
else {
    // console.log('it will be honor to meet you');
    alert("pleaz anser with yes/y no/n");
}

   
}


    let guessNumber = '';
    let correctNumber = 6;
    
    for (let i = 0; i < 4; i++) {
        console.log(i);
        guessNumber = prompt('guess a number between 0 and 10');
        // console.log(typeof guessNumber);
        guessNumber = parseInt(guessNumber);
    
    
        if (guessNumber > correctNumber) {
            alert('its too high');
        } else if (guessNumber < correctNumber) {
            alert('its too low');
        } else if (guessNumber === 6) {
            alert('correct');
            score++;
            // score=score+1
            break;
            // i=5;
        } else {
            alert('please write a number');
        }
        // i==3
        // console.log('hello there');
    
        if (i === 3) {
            alert('you ran out of tries the correct answer is 6');
        }
    
    }
    
    
}



    

let response = '';
let colors = ['black', 'red', 'white', 'blue', 'yellow', 'green'];
// console.log(colors.length);

// let flag=false;
for (let j = 0; j < 6; j++) {
    response = prompt('guess one of my favourite colors');

    for (let i = 0; i < colors.length; i++) {
        // colors[0];
        // colors[1];
        console.log(colors[i]);
        if (colors[i] === response) {
            alert('correct, and here are all the answers ' + colors);
            // break;
            // flag=true;
            // break bigloop;
            score++;
            j = 10;
        }

    }
    if (j === 5) {
        alert('sorry no more tries ' + colors);
    } else if (j < 6) {
        alert('wrong answer');
    }

    // if (flag===true) {
    //     break;
    // }
}


alert(`thank you ${username}, your score is ${score}/7`);

// for (let i = 0; i <5; i++) {
//     console.log('outside loop',i);

//     for (let j = 0; j <10; j++) {
//         console.log('inside loop',j);

//     }

// }
