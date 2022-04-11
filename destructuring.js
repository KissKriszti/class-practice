const poemData = {
    yearFromInternet: 1962,
    authorFromInternet: "Weöres Sándor",
    titleFromInternet: "Énhasadás",
    textFromInternet: `
    Utcasarkon várok rám, 
    fél órája is van tán, 
    ám értelmem fölragyog, 
    nem jövök mert itt vagyok.`
};

const pdafi = poemData.authorFromInternet;
const pdyfi = poemData.yearFromInternet;


// const {yearFromInternet, authorFromInternet} = poemData;

/* console.log(yearFromInternet);
console.log(authorFromInternet); */

function funWithPoemData({yearFromInternet2, authorFromInternet2}) {
    console.log(yearFromInternet2);
    console.log(authorFromInternet2);
};

// funWithPoemData(poemData);



const arr = ["hi", "hello", "kutya", function () {
    console.log("Bogyó")
}, "macska"];

const firstItem = arr[0];
const secondItem = arr[1];

const [firstItemX, secondItemX, ...elseX] = arr;
console.log(elseX);
console.log(arr[arr.length-1]);

const [,,, ourFun] = arr;
ourFun();