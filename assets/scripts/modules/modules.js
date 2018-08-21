export default class Modules {
    constructor() {
        this.moduleSubscribe = document.getElementById("module-subscribe");
        this.moduleAuthorSmall = document.getElementById("module-author-small");
        this.moduleAuthorLarge = document.getElementById("module-author-large");
        this.modulePhotoText = document.getElementById("module-photo-text");
        this.modulePhotoQuote = document.getElementById("module-photo-quote");
        this.moduleQuote = document.getElementById("module-quote");
        this.moduleGallery = document.querySelectorAll(".module-gallery");
        this.moduleDeal = document.querySelectorAll(".module-deal");
        this.moduleRelatedA = document.getElementById("module-related-a");
        this.moduleRelatedB = document.getElementById("module-related-b");

        this.events();
    }
    events() {
        this.moduleSubscribe && this.populateSubscribe();
        this.moduleAuthorSmall && this.populateAuthorSmall();
        this.moduleAuthorLarge && this.populateAuthorLarge();
        this.modulePhotoText && this.populatePhotoText();
        this.modulePhotoQuote && this.populatePhotoQuote();
        this.moduleQuote && this.populateQuote();
        this.moduleGallery &&
            [...this.moduleGallery].map((module) =>
                this.populateGallery(module),
            );
        this.moduleDeal &&
            [...this.moduleDeal].map((module) => this.populateDeal(module));
        this.moduleRelatedA && this.populateRelatedA();
        this.moduleRelatedB && this.populateRelatedB();
    }
    populateSubscribe(module) {
        this.moduleSubscribe.innerHTML = `
        <div class="post__module">
          <div class="post__module-container">
              <div class="post__module-content post__module-content--no-padding">
                  <a href="#0" class="post__module-link">
                      <div class="post__module-attribution">
                          Want more? Receive our weekly editions!
                      </div>
                  </a>
              </div>
              <div class="post__module-subscribe">
                  <form class="post__module-form">
                      <input type="text" name="email" placeholder="Enter Email Address" autocomplete="email" class="post__module-input" required />
                      <input type="text" name="fakeout" class="post__module-input--bot-fakeout" />
                      <button type="submit" class="post__module-button">
                          <img class="post__module-button-icon" src="/assets/images/icon-arrow.png" alt="Submit Email Address Button">
                      </button>
                  </form>
              </div>
          </div>
      </div>
      `;
    }
    populateAuthorSmall(module) {
        const {
            image,
            link,
            author,
            description,
            instagram,
            facebook,
            twitter,
        } = this.moduleAuthorSmall.dataset;

        const backup = {
            link: "http://thediscoverer.com",
            image:
                "https://s3-us-east-2.amazonaws.com/inboxlab-ghost-blogs/2018/05/Image-uploaded-from-iOS.png",
            author: "Kellie Coppola | Editor of The Discoverer",
            description:
                "Since her first trip across the pond Kellie has been a voracious traveler. As the Editor of The Discoverer she is passionate about sharing stories from around the globe and inspiring others to leave their comfort zones. Kellie has her MFA in Creative Writing and in her free time tries (and mostly fails) to cook.",
        };

        const populateInstagram = () =>
            instagram
                ? `
                <a class="social__item" href="${instagram}" target="_blank">
                <img class="social__image" src="/assets/images/icon-instagram--grey.png" />
                </a>
                `
                : "";
        const populateFacebook = () =>
            facebook
                ? `
                <a class="social__item" href="${facebook}" target="_blank">
                <img class="social__image" src="/assets/images/icon-facebook--grey.png" />
                </a>
                `
                : "";
        const populateTwitter = () =>
            twitter
                ? `<a class="social__item" href="${twitter}" target="_blank">
                    <img class="social__image" src="/assets/images/icon-twitter--grey.png" />
                </a>
                `
                : "";

        this.moduleAuthorSmall.innerHTML = `
        <div class="post__module">
            <div class="post__module-container">
                <div class="post__module-thumbnail">
                    <a href="${link || backup.link}" class="post__module-link">
                        <img src="${image ||
                            backup.image}" alt="" class="post__module-thumbnail-image" />
                    </a>
                </div>
                <div class="post__module-content">
                    <a href="${link || backup.link}" class="post__module-link">
                        <div class="post__module-title">
                            <span class="post__module--bold">About the author: </span>
                            ${author || backup.author}
                        </div>
                    </a>
                </div>
                <div class="post__module-social post__module-social--right">
                    <div class="social">
                        ${populateInstagram()}
                        ${populateFacebook()}
                        ${populateTwitter()}
                    </div>
                </div>
            </div>
        </div>
        `;
    }
    populateAuthorLarge(module) {
        const {
            image,
            link,
            author,
            description,
            instagram,
            facebook,
            twitter,
        } = this.moduleAuthorLarge.dataset;

        const backup = {
            link: "http://thediscoverer.com",
            image:
                "https://s3-us-east-2.amazonaws.com/inboxlab-ghost-blogs/2018/05/Image-uploaded-from-iOS.png",
            author: "Kellie Coppola | Editor of The Discoverer",
            description:
                "Since her first trip across the pond Kellie has been a voracious traveler. As the Editor of The Discoverer she is passionate about sharing stories from around the globe and inspiring others to leave their comfort zones. Kellie has her MFA in Creative Writing and in her free time tries (and mostly fails) to cook.",
        };

        const populateInstagram = () =>
            instagram
                ? `
                <a class="social__item" href="${instagram}" target="_blank">
                <img class="social__image" src="/assets/images/icon-instagram--grey.png" />
                </a>
                `
                : "";
        const populateFacebook = () =>
            facebook
                ? `
                <a class="social__item" href="${facebook}" target="_blank">
                <img class="social__image" src="/assets/images/icon-facebook--grey.png" />
                </a>
                `
                : "";
        const populateTwitter = () =>
            twitter
                ? `<a class="social__item" href="${twitter}" target="_blank">
                    <img class="social__image" src="/assets/images/icon-twitter--grey.png" />
                </a>
                `
                : "";

        this.moduleAuthorLarge.innerHTML = `
        <div class="post__module">
            <div class="post__module-container">
                <div class="post__module-thumbnail post__module-thumbnail--fix-top">
                    <a href="${link || backup.link}" class="post__module-link">
                        <img src="${image ||
                            backup.image}" alt="" class="post__module-thumbnail-image" />
                    </a>
                </div>
                <div class="post__module-content">
                    <a href="${link || backup.link}" class="post__module-link">
                        <div class="post__module-title">
                            <span class="post__module--bold">About the author: </span>
                            ${author || backup.author}
                        </div>
                        <div class="post__module-text">
                            ${description || backup.description}
                        </div>
                    </a>
                    <div class="post__module-social post__module-social--bottom">
                        <div class="social social--l-align">
                            ${populateInstagram()}
                            ${populateFacebook()}
                            ${populateTwitter()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
    populatePhotoText(module) {
        const { link, image, attribution, text } = this.modulePhotoText.dataset;

        const backup = {
            link: "http://thediscoverer.com",
            image:
                "https://s3.us-east-2.amazonaws.com/inboxlab-websites/discoverer/emails/52/images/md-4.jpg",
            attribution: "HEY WAIT! You forgot data-attribution",
            text: "HEY WAIT! You forgot data-text",
        };

        this.modulePhotoText.innerHTML = `
        <div class="post__module-container post__module-container--b-margin post__module-container--top">
            <a class="post__module-column post__module-column-45" href="${link ||
                backup.link}">
                <img class="post__module-image" src="${image ||
                    backup.image}" />
                <small class="post__module-text--left">${attribution ||
                    backup.attribution}</small>
            </a>
            <div class="post__module-column post__module-column-55">
                <p>${text || backup.text}</p>
            </div>
        </div>
        `;
    }
    populatePhotoQuote(module) {
        const { image, quote, author } = this.modulePhotoQuote.dataset;

        const backup = {
            image:
                "https://s3.us-east-2.amazonaws.com/inboxlab-websites/discoverer/emails/52/images/md-4.jpg",
            quote: "HEY WAIT! You forgot data-quote!",
            author: "HEY WAIT! You forgot data-author!",
        };

        this.modulePhotoQuote.innerHTML = `
        <div class="post__module-container post__module-container--b-margin post__module-container--stretch">
            <div class="post__module-column post__module-quote-left">
                <img class="post__module-image post__module-image--stretch-height" src="${image ||
                    backup.image}" />
            </div>
            <div class="post__module-column post__module-quote-right post__module-quote">
                <p class="post__module-text--playfair post__module-quote-text">
                    ${quote || backup.quote}
                </p>
                <p class="post__module-text--playfair post__module-quote-text post__module-quote-author">
                    ${author || backup.author}
                </p>
            </div>
        </div>
        `;
    }
    populateQuote(module) {
        const { quote, author } = this.moduleQuote.dataset;

        const backup = {
            quote: "HEY WAIT! You forgot data-quote!",
            author: "HEY WAIT! You forgot data-author!",
        };

        this.moduleQuote.innerHTML = `
        <div class="post__module-container post__module-container--b-margin post__module-container--stretch">
            <div class="post__module-quote">
                <p class="post__module-text--playfair post__module-quote-text">
                    ${quote || backup.quote}
                </p>
                <p class="post__module-text--playfair post__module-quote-text post__module-quote-author">
                    ${author || backup.author}
                </p>
            </div>
        </div>
        `;
    }
    populateGallery(module) {
        const populateImages = () => {
            const { dataset } = module;
            const blocks = [...Array(16)].map(
                (node, index) => `image${index + 1}`,
            );
            let totalMarkup = "";

            for (let block of blocks) {
                let url, link, attribution;
                for (let variable in dataset) {
                    if (variable.includes(`${block}url`))
                        url = dataset[variable];
                    if (variable.includes(`${block}link`))
                        link = dataset[variable];
                    if (variable.includes(`${block}attribution`))
                        attribution = dataset[variable];
                }
                if (url) {
                    const singleMarkup = `
                        <a class="post__module-gallery-column${dataset.columns &&
                            "-" + dataset.columns}" href="${link || "#0"}">
                            <img class="post__module-gallery-image" style="${dataset.height &&
                                "height:" + dataset.height}" src="${url ||
                        ""}" />
                            <small class="post__module-gallery-attribution">${attribution ||
                                ""}</small>
                        </a>
                        `;
                    totalMarkup += singleMarkup;
                }
            }

            return totalMarkup;
        };

        module.innerHTML = `
        <div class="post__module post__module--white post__module--no-padding">
            <div class="post__module-gallery">
                ${populateImages()}
            </div>
        </div>
        `;
    }
    populateDeal(module) {
        let { price } = module.dataset;
        if (module.dataset.price === "show") {
            price = "[[price]]";
        } else {
            price = "";
        }

        module.innerHTML = `
        <ibl
            class="adsbyinboxlab post__module-container post__module-container--b-margin post__module-container--shadow post__module-container--stretch"
            data-tags="web"
        >
            <a href="[[linkUrl]]" class="post__module-column post__module-deal-left">
                <img class="post__module-image post__module-image--stretch-height post__module-image--absolute" src="[[imageUrl]]" alt="[[title]]" />
            </a>
            <a href="[[linkUrl]]" class="post__module-column post__module-deal-right">
                <h3 class="post__module-deal-subtitle">
                    Featured Deal
                </h3>
                <h2 class="post__module-deal-title">
                    [[title]]
                </h2>
                <p class="post__module-deal-attribution">
                    [[attribution]]
                </p>
                <div class="post__module-deal-button-container">
                    <div class="post__module-deal-price">${price}</div>
                    <button class="button button__teal post__module-deal-button">
                        View Deal!
                    </button>
                </div>
            </a>
        </ibl>
        `;
    }
    populateRelatedA(module) {
        const { title, link, image } = this.moduleRelatedA.dataset;

        const backup = {
            title: "HEY WAIT! You forgot data-title!",
            link: "HEY WAIT! You forgot data-link!",
            image:
                "https://s3.us-east-2.amazonaws.com/inboxlab-websites/discoverer/emails/52/images/md-4.jpg",
        };

        this.moduleRelatedA.innerHTML = `
        <div class="post__module-container post__module-container--b-margin post__module-container--shadow post__module-container--stretch">
            <a href="${link ||
                backup.link}" class="post__module-column post__module-related-left">
                <img class="post__module-image post__module-image--stretch-height post__module-image--absolute" src="${image ||
                    backup.image}" alt="${title || backup.title}" />
            </a>
            <a href="${link ||
                backup.link}" class="post__module-column post__module-related-right">
                <h3 class="post__module-deal-subtitle">
                    Related Read
                </h3>
                <h2 class="post__module-deal-title">
                    ${title || backup.title}
                </h2>
                <button class="button button__teal post__module-related-button">
                    Read Article
                </button>
            </a>
        </div>
        `;
    }
    populateRelatedB(module) {
        const { title, link, icon } = this.moduleRelatedB.dataset;

        const renderIcon = () => {
            if (icon === "earth") {
                return "http://assets.thediscoverer.com/discoverer/blog/images/icon-earth.png";
            } else if (icon === "newicon") {
                return "http://assets.thediscoverer.com/discoverer/blog/images/icon-earth.png";
            } else {
                return "http://assets.thediscoverer.com/discoverer/blog/images/icon-earth.png";
            }
        };

        const backup = {
            title: "HEY WAIT! You forgot data-title!",
            link: "HEY WAIT! You forgot data-link!",
        };

        this.moduleRelatedB.innerHTML = `
        <div class="post__module post__module--less-padding">
            <div class="post__module-container post__module-container--no-wrap">
                <div class="post__module-icon">
                    <a href="${link || backup.link}" class="post__module-link">
                        <img src="${renderIcon()}" alt="" class="post__module-icon-image" />
                    </a>
                </div>
                <div class="post__module-content post__module-content--mobile-padding">
                    <a href="${link || backup.link}" class="post__module-link">
                        <div class="post__module-title post__module-title--less-line-height">
                            <span class="post__module--bold">You may also like: </span>
                            ${title || backup.title}
                        </div>
                    </a>
                </div>
            </div>
        </div>
        `;
    }
}
