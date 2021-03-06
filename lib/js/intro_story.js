"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IntroStory = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

let IntroStory = /*#__PURE__*/function () {
  function IntroStory() {
    _classCallCheck(this, IntroStory);

    this.scene = document.querySelector('.scene');
  }

  _createClass(IntroStory, [{
    key: "createIntroStory",
    value: function createIntroStory() {
      let intro = document.createElement("div");
      intro.classList.add("intro-story");
      intro.style.backgroundColor = "#ffffff";
      intro.style.height = "100px";
      intro.style.width = "100%"; // this.scene.appendChild(intro);
    }
  }]);

  return IntroStory;
}();

exports.IntroStory = IntroStory;