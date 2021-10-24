const path = require("path");
const config = require("./package.json");

const RELEASES_PATH = path.resolve(__dirname, "releases");
const RELEASE_NAME = config.name.replace("@gelight/", "");
const LIBRARY_NAME = RELEASE_NAME.split("-")[0].toUpperCase();

module.exports = {
    mode: "production",
    entry: "./dist/index-browser.js",
    output: {
        filename: `${RELEASE_NAME}-client.min.js`,
        path: RELEASES_PATH,
        libraryTarget: "umd",
        library: LIBRARY_NAME,
    },
    resolve: {
        fallback: {
            fs: false,
        },
    },
};
