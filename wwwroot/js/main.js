"use strict";
var ClientApp = /** @class */ (function () {
    function ClientApp() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnQtYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFLQTtJQUVJO0lBSUEsQ0FBQztJQUVELHdCQUFJLEdBQUo7UUFDSSxJQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDaEQsRUFBRSxDQUFDLFdBQVcsR0FBRyxnREFBZ0QsQ0FBQztJQUN0RSxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBWkQsSUFZQztBQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7SUFDNUIsSUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO0lBQ3pDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUVmLENBQUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgYXBwPzogQ2xpZW50QXBwO1xufVxuXG5cbmNsYXNzIENsaWVudEFwcCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuXG5cbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicFwiKVswXVxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IFwiSGVsbG8gd29ybGQhIFRoaXMgaXMgc3RhdGljIHdlYiBzaXRlIHRlbXBsYXRlLlwiO1xuICAgIH1cbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICBjb25zdCBhcHAgPSB3aW5kb3cuYXBwID0gbmV3IENsaWVudEFwcCgpO1xuICAgIGFwcC5pbml0KCk7XG5cbn0pIl19