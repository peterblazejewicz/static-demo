/// <reference path="logger.ts" />

interface Window {
    app?: ClientApp;
}


class ClientApp {

    logger = new Logger();

    constructor() {
        this.logger.log("Creating app instance");
    }

    init() {
        const el = document.getElementsByTagName("p")[0]
        el.textContent = "Hello world! This is static web site template.";
    }
}

window.addEventListener("load", () => {
    const app = window.app = new ClientApp();
    app.init();

})