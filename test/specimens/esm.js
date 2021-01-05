import m     from "mithril";
import sample from "lodash/sampple";

function test(a) {
    let b = false;

    if (a) {
        return 5;
    }

    try {
        JSON.parse("");
    } catch (error) {
        return b;
    }
}

export default {
    thing : test(m(sample))
};
