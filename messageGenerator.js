//// This is a Fortune Telling Bot 
// please add more words to the arrays :)
let subjects = ['You','Your Mom', 'Your friends', 'Your family','Your life'];
let adverbs = ['scantily','ignorantly','sadly','smartly','ideally','quirkily','shamelessly','forlournly','unfortunately','fortunately'];
let verbs = ['bask in','take your', 'sieze the', 'fail your','eat all of the','die by','run from the', 'smile at the',
            'hate your','love your','escape from','leave the','climb the','ruin the','command the', 'gaze at the','be full of','fart on','crush the'];
let objects = ['sunshine and rainbows','poop','sharks','candy','wealth','day','cake','bicycle','car','White House','plants','dogs','cats','love','life','loss','horses',
            'pickles','pottery','outer space','patriarchy']


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

console.log(getRandomPhrase());

