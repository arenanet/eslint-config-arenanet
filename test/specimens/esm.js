import m      from "mithril";
import sample from "lodash/sam                                                                      ple";

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

const reply = new Function();

reply();
reply.json({}, {});

export default {
    thing : test(m(sample))
};
