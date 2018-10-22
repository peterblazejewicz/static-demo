interface Window {
    app?: ClientApp;
}


class ClientApp {

    constructor() {



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