class Poem {
    constructor(year, author, title, text) {
        this.year = year;
        this.author = author;
        this.title = title;
        this.text = text;
    };

    makePage() {
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
    nem jövök mert itt vagyok.`,
    translator: "Alan Dixon"
};

const newPoem = new Poem(poemData.yearFromInternet, poemData.authorFromInternet, poemData.titleFromInternet, poemData.textFromInternet);

newPoem.makePage();


class ForeignPoem extends Poem{
    constructor(year, author, title, text, translator) {
        super(year, author, title, text);
        this.translator = translator;
    };

    makePage() {
        console.log(`
            Title: ${this.title}

            ${this.text}

            Author: ${this.author}
            Translator: ${this.translator}
            ${this.year}
        `);
    };
};

const weoresPoem = new ForeignPoem(poemData.yearFromInternet, poemData.authorFromInternet, poemData.titleFromInternet, poemData.textFromInternet, poemData.translator);

weoresPoem.makePage();