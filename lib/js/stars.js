"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stars = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Draw the stars falling down while the shipp is moving
let Stars = /*#__PURE__*/function () {
  function Stars() {
    _classCallCheck(this, Stars);

    this.scene = document.querySelector('.scene');
  }

  _createClass(Stars, [{
    key: "getStars",
    value: function getStars() {
      let count = 20;
      let i = 0;

      while (i < count) {
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);
        let duration = Math.random() * 10;
        let h = Math.random() * 100;
        star.style.left = x + 'px';
        star.style.width = 1 + 'px';
        star.style.height = 50 + h + 'px';
        star.style.animationDuration = duration + 's';
        this.scene.appendChild(star);
        console.log(i);
        i++;
      }
    }
  }]);

  return Stars;
}();

exports.Stars = Stars;