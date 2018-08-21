export default class Navigation {
    constructor() {
        this.paragraphs = [...document.getElementsByTagName("p")];

        this.events();
    }
    events() {
        // console.log(this.links[0].attributes.href.value);
        this.addFirstLetter();
    }
    addFirstLetter() {
        let firstLetterApplied = false;
        this.paragraphs.map((node) => {
            if (
                (!firstLetterApplied && node.firstChild.nodeName === "#text") ||
                (!firstLetterApplied && node.firstChild.nodeName === "EM")
            ) {
                node.classList.add("first-letter");
                firstLetterApplied = true;
                return;
            }
        });
    }
}
