"use strict";
var CustomMessage = /** @class */ (function () {
    /**
     *
     * @param {string} msg
     */
    function CustomMessage(msg) {
        this.msg = msg;
    }
    CustomMessage.prototype.toString = function () {
        return this.msg;
    };
    return CustomMessage;
}());
/// <reference path="custom-message.js" />
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.log = function (msg) {
        var customMessage = new CustomMessage(msg);
        console.log(msg.toString());
    };
    return Logger;
}());
/// <reference path="logger.ts" />
var ClientApp = /** @class */ (function () {
    function ClientApp() {
        this.logger = new Logger();
        this.logger.log("Creating app instance");
    }
    ClientApp.prototype.init = function () {
        var el = document.getElementsByTagName("p")[0];
        el.textContent = "Hello world! This is static web site template.";
    };
    return ClientApp;
}());
/// <reference path="client-app.ts" />
window.addEventListener("load", function () {
    var app = window.app = new ClientApp();
    app.init();
});
