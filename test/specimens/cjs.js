"use strict";

const thing      = "test";
const thing2     = "test";
const { thing3 } = { thing3 : "test" };
let arr = [],
    a, b;

(function() {
    let tagged;

    const template = `foo ${tagged}`;
    const boolean  = Boolean(template);
    const obj      = {
        noquote     : true,
        "yes-quote" : true
    };

    function fn(...params) {
        return boolean;
    }

    tagged = fn`bar`;

    if (a) {
        return arr.map((el) => el.prop);
    } else if (thing3) {
        return arr.map(el => el.prop);
    }

    if (thing && thing2) {
        if (obj.test) {
            if (!obj.noTest) {
                if (thing3) {
                    if (a) {
                        if (b) { // max-depth
                            return b;
                        }

                        return a;
                    }

                    return null;
                }

                return "";
            }

            return false;
        }
        return thing3;
    }

    if (obj.test) {
        return obj;
    }

    switch (thing) {
        case "value":
            a = "test2";
            break;

        default:
            break;
    }
    for (let i in thing) {
        thing[i] = "fake";
    }

    return [ a, b ];
}());

module.exports.thing1 = thing1;
module.exports.thing2 = thing2;