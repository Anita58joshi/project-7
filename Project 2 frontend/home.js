//challenge 1:your age in days
function ageInDays() {

var birthYear = prompt('what year were you born....good friend.'); 
var ageInDayss = (2020 - birthYear)*365;
var h1 = document.createElement('h1');
var textanswer = document.createTextNode('You are' + ageInDayss + 'days old.');
h1.setAttribute('id', 'ageInDays');
h1.appendChild(textanswer);
document.getElementById('flex-box-result').appendChild(h1);
}
function reset() {
    document.getElementById('ageInDays').remove();
}
//challenge 2: Cat Generator
function generatecat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src="https://www.google.com/search?sxsrf=ALeKk02dcae0OgMP1IRoiYUc550zXlz_2Q:1601015216552&source=univ&tbm=isch&q=cat+picture&sa=X&ved=2ahUKEwiXxoy61oPsAhUPBZQKHbbsDgYQjJkEegQICRAB&biw=1360&bih=657#imgrc=H6FXiZPi4jc4_M";
    div.appendChild(image);
}
//challenge 3 : rock,paper,scissors
function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log('computer Choice:',botChoice);

    results = decideWinner(humanChoice, botChoice); // (0,1) humanlost: botwon
    console.log(results);

    message = finalMessage(results);//('messsage':'You Won!', 'color':'green')
    console.log(message);

    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random()*3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number];

}
function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock':0.5, 'paper':0},
        'paper': {'rock':1, 'paper':0.5, 'scissors':0},
        'scissors': {'paper':1, 'scissors':0.5, 'rock':0}
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return{'message': 'You Lost', 'color':'red'};
    }else if (yourScore === 0.5) {
        return {'message': 'You Tied', 'color':'yellow'};
    }else {
        return{'message': 'You Won', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    };
    //remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] +"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    botDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size:60px; padding: 30px; '>" + finalMessage['message'] + "</h2>"
    messageDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] +"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"

    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
   
}
    