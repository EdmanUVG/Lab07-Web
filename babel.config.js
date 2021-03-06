const presets = [
    [
        "@babel/env",
        {
            targets: {
                edge: "17",
                firefox: "60",
                chrome: "67",
                safari: "11.1",
            },
            useBuiltIns: "usage",
            corejs: "3.6.4",
        },
    ],
];

module.export = { presets };
const plugins = [
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-transform-classes"
];

module.exports = { presets, plugins };