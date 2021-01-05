"use strict";

const { ESLint } = require("eslint");

(async function main() {
    const eslint = new ESLint({
        baseConfig : require("../eslintrc"),
        overrideConfig : {
            parserOptions : {
                    ecmaFeatures : {
                    modules : true
                },
                sourceType : "module"
            }
        }
    });

    const report = await eslint.lintFiles([ "./test/specimens/cjs.js", "./test/specimens/esm.js" ]);
    const formatter = await eslint.loadFormatter();

    console.log(formatter.format(report));
})().catch((err) =>  {
    process.exitCode = 1;
    console.log(err);
});
