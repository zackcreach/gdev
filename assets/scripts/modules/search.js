export default class Search {
    constructor() {
        this.banner = document.querySelector(".banner");
        this.searchContainer = document.querySelector(".search");
        this.searchForm = document.querySelector(".search__form");
        this.searchSubmit = document.querySelector(".search__submit");
        this.searchInput = document.querySelector(".search__input");
        this.searchResults = document.querySelector(".search__results");

        this.searchOpen = false;

        this.events();
    }
    events() {
        this.initializeGhostHunter();
        ["click", "touchstart", "keyup"].map((event) =>
            window.addEventListener(event, this.handleEvents.bind(this)),
        );
        window.addEventListener("submit", this.handleSubmit.bind(this));
    }
    initializeGhostHunter() {
        this.ghostHunter = $("#search").ghostHunter({
            results: "#results",
            zeroResultsInfo: true,
            onKeyUp: true,
            result_template: `<a class="gh-search-item search__link" id="gh-{{ref}}" href="{{link}}"><h2 class="search__title">{{title}}</h2><h3 class="search__date">{{pubDate}}</h3></a>`,
            info_template: `<p class="search__number">Number of posts found: {{amount}}</p>`,
        });
    }
    handleEvents(event) {
        if (
            event.target === this.searchSubmit ||
            event.target === this.searchInput ||
            event.target === this.searchResults
        ) {
            console.log("search.js, handleEvents active");
            this.searchOpen = true;
            this.searchSubmit.classList.add("search__submit--active");
            this.searchInput.classList.add("search__input--active");
            this.searchResults.classList.add("search__results--active");
        }
        if (
            (this.searchOpen && !event.target.className.includes("search")) ||
            event.keyCode === 27
        ) {
            console.log("search.js, handleEvents inactive");
            this.searchOpen = false;
            this.searchSubmit.classList.remove("search__submit--active");
            this.searchInput.classList.remove("search__input--active");
            this.searchResults.classList.remove("search__results--active");
            this.searchInput.value = "";
            this.searchInput.blur();
            this.ghostHunter.clear();
        }
    }
    handleSubmit(event) {
        if (event.target.className.includes("search")) {
            setTimeout(() => {
                this.searchInput.focus();
                this.searchInput.select();
            }, 100);
        }
    }
}
