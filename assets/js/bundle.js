!function(n){function e(I){if(t[I])return t[I].exports;var i=t[I]={i:I,l:!1,exports:{}};return n[I].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var t={};e.m=n,e.c=t,e.d=function(n,t,I){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:I})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},e.p="",e(e.s=0)}([function(n,e,t){n.exports=t(1)},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('Object.defineProperty(__webpack_exports__, "__esModule", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_menu_js__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_navigation_js__ = __webpack_require__(3);\n\n\n\nconsole.log("Hello from The Discoverer!");\n\nconst menu = new __WEBPACK_IMPORTED_MODULE_0__modules_menu_js__["a" /* default */]();\nconst navigation = new __WEBPACK_IMPORTED_MODULE_1__modules_navigation_js__["a" /* default */]();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL3NjcmlwdHMuanM/YmJjZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVudSBmcm9tIFwiLi9tb2R1bGVzL21lbnUuanNcIjtcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuL21vZHVsZXMvbmF2aWdhdGlvbi5qc1wiO1xuXG5jb25zb2xlLmxvZyhcIkhlbGxvIGZyb20gVGhlIERpc2NvdmVyZXIhXCIpO1xuXG5jb25zdCBtZW51ID0gbmV3IE1lbnUoKTtcbmNvbnN0IG5hdmlnYXRpb24gPSBuZXcgTmF2aWdhdGlvbigpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3NjcmlwdHMvc2NyaXB0cy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('class Menu {\n    constructor() {\n        this.hamburger = document.querySelector("[class*=linework__menu]");\n        this.window = document.querySelector(".menu__window");\n        this.container = document.querySelector(".menu__window-container");\n        this.menu = document.querySelector(".menu__window-container");\n        this.close = document.querySelector(".menu__header-linework");\n\n        this.showMenu = false;\n\n        this.events();\n    }\n    events() {\n        ["click", "touchstart", "keyup"].map(event => window.addEventListener(event, this.handleEvents.bind(this)));\n    }\n    handleEvents(event) {\n        if (event.target === this.hamburger || event.target === this.menu || event.target === this.close || event.keyCode === 27 && this.showMenu) {\n            event.preventDefault();\n            this.showMenu = !this.showMenu;\n            this.handleMenu();\n        }\n    }\n    handleMenu() {\n        if (this.showMenu) {\n            this.container.classList.add("menu__window-container--active");\n            this.container.setAttribute("aria-hidden", "false");\n            this.window.classList.add("menu__window--active");\n        } else {\n            this.container.classList.remove("menu__window-container--active");\n            this.container.setAttribute("aria-hidden", "true");\n            this.window.classList.remove("menu__window--active");\n        }\n    }\n}\n/* harmony export (immutable) */ __webpack_exports__["a"] = Menu;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvbWVudS5qcz8zNGZkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbY2xhc3MqPWxpbmV3b3JrX19tZW51XVwiKTtcbiAgICAgICAgdGhpcy53aW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVfX3dpbmRvd1wiKTtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVfX3dpbmRvdy1jb250YWluZXJcIik7XG4gICAgICAgIHRoaXMubWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudV9fd2luZG93LWNvbnRhaW5lclwiKTtcbiAgICAgICAgdGhpcy5jbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudV9faGVhZGVyLWxpbmV3b3JrXCIpO1xuXG4gICAgICAgIHRoaXMuc2hvd01lbnUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmV2ZW50cygpO1xuICAgIH1cbiAgICBldmVudHMoKSB7XG4gICAgICAgIFtcImNsaWNrXCIsIFwidG91Y2hzdGFydFwiLCBcImtleXVwXCJdLm1hcChldmVudCA9PiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgdGhpcy5oYW5kbGVFdmVudHMuYmluZCh0aGlzKSkpO1xuICAgIH1cbiAgICBoYW5kbGVFdmVudHMoZXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5oYW1idXJnZXIgfHwgZXZlbnQudGFyZ2V0ID09PSB0aGlzLm1lbnUgfHwgZXZlbnQudGFyZ2V0ID09PSB0aGlzLmNsb3NlIHx8IGV2ZW50LmtleUNvZGUgPT09IDI3ICYmIHRoaXMuc2hvd01lbnUpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnNob3dNZW51ID0gIXRoaXMuc2hvd01lbnU7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZU1lbnUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVNZW51KCkge1xuICAgICAgICBpZiAodGhpcy5zaG93TWVudSkge1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnVfX3dpbmRvdy1jb250YWluZXItLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsIFwiZmFsc2VcIik7XG4gICAgICAgICAgICB0aGlzLndpbmRvdy5jbGFzc0xpc3QuYWRkKFwibWVudV9fd2luZG93LS1hY3RpdmVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwibWVudV9fd2luZG93LWNvbnRhaW5lci0tYWN0aXZlXCIpO1xuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIiwgXCJ0cnVlXCIpO1xuICAgICAgICAgICAgdGhpcy53aW5kb3cuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnVfX3dpbmRvdy0tYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9tZW51LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n')},function(module,__webpack_exports__,__webpack_require__){"use strict";eval('class Navigation {\n    constructor() {\n        this.links = [...document.querySelectorAll(".navigation__link")];\n        this.url = location.pathname;\n\n        this.events();\n    }\n    events() {\n        // console.log(this.links[0].attributes.href.value);\n        this.highlightCurrentPath();\n    }\n    highlightCurrentPath() {\n        this.links.map(link => {\n            const href = link.attributes.href.value;\n            // if (href.includes("guide-me")) {\n            //     link.classList.add("navigation__link--active");\n            // }\n            if (this.url === href) {\n                link.classList.add("navigation__link--active");\n            }\n        });\n    }\n}\n/* harmony export (immutable) */ __webpack_exports__["a"] = Navigation;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL21vZHVsZXMvbmF2aWdhdGlvbi5qcz8zMmM3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxpbmtzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2aWdhdGlvbl9fbGlua1wiKV07XG4gICAgICAgIHRoaXMudXJsID0gbG9jYXRpb24ucGF0aG5hbWU7XG5cbiAgICAgICAgdGhpcy5ldmVudHMoKTtcbiAgICB9XG4gICAgZXZlbnRzKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxpbmtzWzBdLmF0dHJpYnV0ZXMuaHJlZi52YWx1ZSk7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0Q3VycmVudFBhdGgoKTtcbiAgICB9XG4gICAgaGlnaGxpZ2h0Q3VycmVudFBhdGgoKSB7XG4gICAgICAgIHRoaXMubGlua3MubWFwKGxpbmsgPT4ge1xuICAgICAgICAgICAgY29uc3QgaHJlZiA9IGxpbmsuYXR0cmlidXRlcy5ocmVmLnZhbHVlO1xuICAgICAgICAgICAgLy8gaWYgKGhyZWYuaW5jbHVkZXMoXCJndWlkZS1tZVwiKSkge1xuICAgICAgICAgICAgLy8gICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb25fX2xpbmstLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnVybCA9PT0gaHJlZikge1xuICAgICAgICAgICAgICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcIm5hdmlnYXRpb25fX2xpbmstLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9uYXZpZ2F0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3\n')}]);