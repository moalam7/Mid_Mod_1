//user object
const USS = {
    hull: 20,
    firepower: 5,
    accuracy: .7
}

//function that me get 0-max parameter
let getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

//class and constructor for alien objects
class alien {
    constructor(name){
        this.hull = (getRandomInt(4) + 3);
        this.firepower = (getRandomInt(3) + 2);
        this.accuracy = ((getRandomInt(3) + 6) * .1);
    }
}

//aliens
const alien1 = new alien;
const alien2 = new alien;
const alien3 = new alien;
const alien4 = new alien;
const alien5 = new alien;
const alien6 = new alien;

//array for aliens
let currentAlien = [" ", alien1, alien2, alien3, alien4, alien5, alien6];
let i = 1; //counter
 
//The alien's attack
let alienAttack = () => {
    if (currentAlien[i].accuracy >= Math.round(10*Math.random(0,1))/10) {
        console.log(`%c Alien ship ${i} has attacked you!`,`color: red`);
        console.log(`%c It has dealt ${currentAlien[i].firepower} damage!`, `font-style: italic; background: azure; border: 1px solid grey`);
        USS.hull -= currentAlien[i].firepower;

        if (USS.hull <= 0){
            console.log(`%c You have lost!`,`font-style: italic`)
        }
        else {
            console.log(`%c You have ${USS.hull} HP remaining!`,`font-style: italic`);
        }
    }

    else{
        console.log(`%c The alien's attack missed!`,`border: 1px solid grey`);
    }
}

let fight = () => {

    if (i === currentAlien.length){
        console.log(`%c Congrats! You won!`,`color:green; font-size:30px`);
    } // only here to console/log "you win!" if you press the fight button again after you win already

    while (currentAlien[i].hull > 0){
        if ( USS.hull > 0){
            if (USS.accuracy >= Math.round(10*Math.random(0,1))/10 ){
                console.log(`Your attack hit Alien ship ${i}!`);
                console.log(`%c You dealt ${USS.firepower} damage!`,`font-style: italic; background: azure; border: 1px solid grey`);
                currentAlien[i].hull -= USS.firepower;

                if (currentAlien[i].hull <= 0){
                    console.log(`%c Alien ship ${i} has been destroyed!`,`color:green`);

                    i += 1; // iterator to go to next alien, breaks

                    if (i === currentAlien.length){
                        console.log(`%c Congrats! You won!`,`color:green; font-size:30px`);
                    } // presents "you win!" after killing the last alien

                    break;
                }
                else {
                    console.log(`%c Alien ship ${i} now has ${currentAlien[i].hull} HP`,`font-style: italic`);
                    alienAttack();
                };
            }

            else{
                console.log(`%c Your attack missed!`,`border: 1px solid grey`);

                alienAttack();
            }

        }
    }
}

//begin game button func
let beginGame = () => {
    i = 1;
    console.log(`%c spacebattle`,`font-size:40px`);
    console.log(`You are fighting an alien!`);
}

//refresh game button func
let reset = () => {
    location.reload();
}