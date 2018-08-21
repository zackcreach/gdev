import config from "./config";
import { apiRequest } from "./api";

export default class EmailForm {
    constructor() {
        this.emailForm = document.querySelector(".post__module-form");
        this.emailModal = document.querySelector(".modal");
        this.emailOuter = document.querySelector(".modal__outer");
        this.emailClose = document.querySelector(".modal__close-x");

        this.showModal = false;

        this.events();
    }
    events() {
        ["click", "touchstart", "keyup"].map((event) =>
            window.addEventListener(event, this.handleEvents.bind(this)),
        );
        window.addEventListener("submit", this.handleSubmit.bind(this));
    }
    handleEvents(event) {
        if (
            event.target === this.emailOuter ||
            event.target === this.emailClose ||
            event.keyCode === 27
        ) {
            console.log("emailForm.js, handleEvents true");
            event.preventDefault();
            this.showModal = !this.showModal;
            this.handleMenu();
        }
    }
    handleSubmit(event) {
        if (event.target.className.includes("module")) {
            console.log("emailForm.js, handleSubmit");
            event.preventDefault();

            const emailInput = document.querySelector("[name='email']");
            let emailValue = emailInput.value;

            const params = {
                email: emailValue,
                brandId: config.custom.brand_id,
                referralId: _.get(window, "initialProps.referralId") || `N/A`,
                source:
                    _.get(window, "initialProps.source") ||
                    `Discoverer Blog – ${location.pathname}`,
            };

            apiRequest(
                "/public/subscribers",
                "POST",
                params,
                null,
                (response, success, error) => {
                    // Errors
                    if (error) {
                        var error =
                            "An error occured trying to subscribe to The Discoverer, please try again";
                        if (response && response.message)
                            error = response.message;
                        console.log("Error subscribing: " + error);

                        emailInput.value = "";
                        this.handleMenu();
                        return;
                    }

                    console.log("Submitted successfully!");
                    emailInput.setAttribute("disabled", "true");
                    emailInput.value = "";
                    this.handleMenu();
                    return;
                },
            );
        }
    }
    handleMenu() {
        if (!this.showModal) {
            this.emailModal.classList.add("modal--active");
            this.emailModal.setAttribute("aria-hidden", "false");
        } else {
            this.emailModal.classList.remove("modal--active");
            this.emailModal.setAttribute("aria-hidden", "true");
            this.showModal = false;
        }
    }
}
