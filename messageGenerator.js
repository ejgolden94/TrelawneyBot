//// This is a Fortune Telling Bot 
// please add more words to the arrays :)
let subjects = ['You','Your Mom', 'Your friends', 'Your family','Your life','The world','Everyone', 'No one','Your dog'];
let adverbs = ['scantily','ignorantly','sadly','smartly','ideally','quirkily','shamelessly','forlournly','unfortunately','fortunately','ultimately','insanely','abhorrently','lovingly','amazingly','triumphantly'];
let verbs = ['bask in','take your', 'sieze the', 'fail your','eat all of the','die by','run from the', 'smile at the','save the','piss on the',
            'hate your','love your','escape from the','leave the','climb the','ruin the','command the','ruin the','mourn the', 'gaze at the','be full of','fart on the','crush the','poop on the','become','reject the'];
let objects = ['sunshine and rainbows','poop','sharks','candy','wealth','day','cake','bicycle','car','politics','plants','dogs','cats','love','life','horses','bisexuals',
            'pickles','pottery','outer space','patriarchy','environment','vibes','capitalism','failure','carpet']
let fortuneTold = false;

const getRandomSubject = () => {
    return subjects[Math.floor(Math.random()*subjects.length)];
};

const getRandomAdverb = () => {
    return adverbs[Math.floor(Math.random()*adverbs.length)];
};

const getRandomVerb = () => {
    return verbs[Math.floor(Math.random()*verbs.length)];
};

const getRandomObject = () => {
    return objects[Math.floor(Math.random()*objects.length)];
};

const getRandomPhrase = () => {
    let subject = getRandomSubject();
    let adverb = getRandomAdverb();
    let verb = getRandomVerb();
    let object = getRandomObject();
    return `${subject} will ${adverb} ${verb} ${object}`;
};

let fortuneButton = document.querySelector('button');

fortuneButton.onclick = () => {
    if (!fortuneTold) {
      let newFortune = getRandomPhrase();
      document.getElementById('fortune-result').innerHTML = newFortune;
    }
    fortuneTold = true;
  }