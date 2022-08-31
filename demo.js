let jonSnowHealth = 100;

console.log(jonSnowHealth);

let myWinner = `Jon is the winner`;
myWinner = myWinner.replace(`Jon`,`Danny`);

if(myWinner.includes(`Danny`)){
    console.log(myWinner);
}

let mySplitStr = myWinner.split(" ");
console.log(mySplitStr);
let myAlmostKebabStr = mySplitStr.join(`-`);
console.log(myAlmostKebabStr);
let myKebabStr = myAlmostKebabStr.toLowerCase();
console.log(myKebabStr);

const isJonAlive = () => {
    if(jonSnowHealth > 0){
        console.log("Jon is Alive.")
    } else {
        console.log("Jon is dead.")
    }
}

isJonAlive();

function attackJon(damage){
    jonSnowHealth -= damage;
}

attackJon(30);
console.log(jonSnowHealth);