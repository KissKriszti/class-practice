function Poem({yearFromInternet, authorFromInternet, titleFromInternet, textFromInternet}) {

    this.year = yearFromInternet;
    this.author = authorFromInternet;
    this.title = titleFromInternet;
    this.text = textFromInternet;

    this.makePage = function () {
        console.log(`
            Title: ${this.title}

            ${this.text}

            Author: ${this.author}
            ${this.year}
        `);
    };
};

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


const favoritePoemOfAndras = new Poem(poemData);

Poem.prototype.lang = "Hun";

// favoritePoemOfAndras.favBy = "András Ránki";

/* console.log(favoritePoemOfAndras.__proto__);
console.log(Poem.prototype); */

favoritePoemOfAndras.makePage();