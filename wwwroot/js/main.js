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
window.addEventListener("load", function () {
    var app = window.app = new ClientApp();
    app.init();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jdXN0b20tbWVzc2FnZS5qcyIsIi4uLy4uL3NyYy9sb2dnZXIudHMiLCIuLi8uLi9zcmMvY2xpZW50LWFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFFSTs7O09BR0c7SUFDSCx1QkFBWSxHQUFHO1FBQ1gsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDbkIsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUNiRCwwQ0FBMEM7QUFDMUM7SUFBQTtJQUtBLENBQUM7SUFKQyxvQkFBRyxHQUFILFVBQUksR0FBUTtRQUNWLElBQU0sYUFBYSxHQUFHLElBQUksYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNILGFBQUM7QUFBRCxDQUFDLEFBTEQsSUFLQztBQ05ELGtDQUFrQztBQU9sQztJQUlJO1FBRkEsV0FBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7UUFHbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsd0JBQUksR0FBSjtRQUNJLElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNoRCxFQUFFLENBQUMsV0FBVyxHQUFHLGdEQUFnRCxDQUFDO0lBQ3RFLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRTtJQUM1QixJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUM7SUFDekMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0FBRWYsQ0FBQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBDdXN0b21NZXNzYWdlIHtcblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobXNnKSB7XG4gICAgICAgIHRoaXMubXNnID0gbXNnO1xuICAgIH1cblxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tc2c7XG4gICAgfVxufSIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJjdXN0b20tbWVzc2FnZS5qc1wiIC8+XG5jbGFzcyBMb2dnZXIge1xuICBsb2cobXNnOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBjdXN0b21NZXNzYWdlID0gbmV3IEN1c3RvbU1lc3NhZ2UobXNnKTtcbiAgICBjb25zb2xlLmxvZyhtc2cudG9TdHJpbmcoKSk7XG4gIH1cbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJsb2dnZXIudHNcIiAvPlxuXG5pbnRlcmZhY2UgV2luZG93IHtcbiAgICBhcHA/OiBDbGllbnRBcHA7XG59XG5cblxuY2xhc3MgQ2xpZW50QXBwIHtcblxuICAgIGxvZ2dlciA9IG5ldyBMb2dnZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxvZ2dlci5sb2coXCJDcmVhdGluZyBhcHAgaW5zdGFuY2VcIik7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBcIilbMF1cbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSBcIkhlbGxvIHdvcmxkISBUaGlzIGlzIHN0YXRpYyB3ZWIgc2l0ZSB0ZW1wbGF0ZS5cIjtcbiAgICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgYXBwID0gd2luZG93LmFwcCA9IG5ldyBDbGllbnRBcHAoKTtcbiAgICBhcHAuaW5pdCgpO1xuXG59KSJdfQ==