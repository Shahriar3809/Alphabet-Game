//--------------------Common Function Start-----------------------

// এটি একটি কমন ফাংশন যা কোনো এলিমেন্টকে হাইড করে।
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}


// এটি একটি কমন ফাংশন যা কোনো এলিমেন্টকে ডিস্প্লে করে।
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// এটি একটি র‌্যান্ডম অ্যলফেব্যাট জেনেরেট করে।
function getARandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabet = alphabetString.split('');
    const randomNumber = Math.round(Math.random() * 25);
    return alphabet[randomNumber];
}


// ব্যাকগ্রাউন্ড সেট করার ফাংশন
function addBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
    element.classList.add('text-white');
}


// সঠিক কী প্রেস করে ফেললে ব্যাকগ্রাউন্ড সরিয়ে ফেলা
function removeBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
    element.classList.remove('text-white');
}


function getTextValue(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    const value = parseInt(elementValue);
    return value
}

function setTextValue(elementId, newSet) {
    const element = document.getElementById(elementId);
    element.innerText = newSet;
}





//-------------------Common Function Ends-------------------------






document.addEventListener('keyup', function (event) {
    const playerPressed = event.key;
    
    const currentAlpha = document.getElementById('current-alphabet').innerText;
    const expected = currentAlpha.toLowerCase();
    

    if(playerPressed === expected) {
        const textValue =  getTextValue('scorePoint');
        const newScore = textValue + 1;
        setTextValue('scorePoint', newScore);

        continueGame();

        removeBgColorById(expected);
     
    } else {
        const textValue = getTextValue('lifePoint');
        const newLife = textValue-1;
        setTextValue('lifePoint', newLife);
        if(newLife === -1) {
            gameOver();
           
        }
        
    }
})


function gameOver() {
        hideElementById('play-ground');
        showElementById('finalScore');
        const lastScore = getTextValue('scorePoint');
        setTextValue("finalScoreCard", lastScore);
}




function continueGame() {
    const alphabet = getARandomAlphabet();
    const currentAlpha = document.getElementById('current-alphabet');
    currentAlpha.innerText = alphabet;
    addBgColorById(alphabet);
}



function play() {
    const currentAlpha = document.getElementById('current-alphabet').innerText;
    const expected = currentAlpha.toLowerCase();
    removeBgColorById(expected);
    setTextValue('lifePoint', 5);
    setTextValue('scorePoint', 0);
    hideElementById('home');
    hideElementById('finalScore');
    showElementById('play-ground');
    continueGame();
}
 
