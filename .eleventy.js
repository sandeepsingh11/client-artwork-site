const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/scripts");

    // Input Directory : src, Output directory: _site
    return {
        dir: { input: 'src', output: '_site' }
    };
};