"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Estrellas = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

let Estrellas = /*#__PURE__*/function () {
  function Estrellas() {
    _classCallCheck(this, Estrellas);

    this.scene = document.querySelector(".moon-scene");
    this.story = document.querySelector(".story");
  }

  _createClass(Estrellas, [{
    key: "getEstrellas",
    value: function getEstrellas() {
      let count = 500;
      let i = 0;

      while (i < count) {
        let star = document.createElement("i");
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let duration = Math.random() * 10;
        let size = Math.random() * 2;
        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = 1 + size + 'px';
        star.style.height = 1 + size + 'px';
        star.style.animationDuration = 5 + duration + 's';
        star.style.animationDelay = duration + 's';
        this.scene.appendChild(star); // this.story.appendChild(star);

        i++;
      }
    }
  }]);

  return Estrellas;
}();

exports.Estrellas = Estrellas;