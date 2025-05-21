"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printAll(strs) {
    if (Array.isArray(strs)) {
        strs.forEach(function (str) { return console.log(str); });
    }
    else {
        // do nothing
        console.log(strs);
    }
}
function isEyes(organ) {
    return organ.see !== undefined;
}
function human(organ) {
    if (isEyes(organ)) {
        organ;
        return "Eyes can see everything";
    }
    else {
        return "We can Hand move whenever we want";
    }
}
var eyes = { see: function () { return console.log("See"); } };
var hand = { move: function () { return console.log("Moving"); } };
console.log(human(eyes));
console.log(human(hand));
function getShape(shape) {
    switch (shape.kind) {
        case "square":
            return 4;
        case "circle":
            return 2.14;
        default:
            var _lastGetShape = shape;
            return _lastGetShape;
    }
}
