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
    const randomNumber = Math.floor(Math.random() * 25 + 1);
    return alphabet[randomNumber];
}


// ব্যাকগ্রাউন্ড সেট করার ফাংশন
function addBgColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
    element.classList.add('text-white');
}

//-------------------Common Function Ends-------------------------





function continueGame() {
    const alphabet = getARandomAlphabet();
    const currentAlpha = document.getElementById('current-alphabet');
    currentAlpha.innerText = alphabet;
    addBgColorById(alphabet);
}

function play() {
    hideElementById('home');
    showElementById('play-ground');
    continueGame();
}
 
