const yaml = require("js-yaml");

module.exports = function(eleventyConfig) {
    eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
    eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));

    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/audio");
    eleventyConfig.addPassthroughCopy("src/scripts");
    eleventyConfig.addPassthroughCopy("src/admin");
    eleventyConfig.addPassthroughCopy("src/_redirects");

    eleventyConfig.addCollection("samples", (collection) => {
        return collection.getAll()[0].data.samples.items;
    });

    // Input Directory : src, Output directory: _site
    return {
        dir: { input: 'src', output: '_site' }
    };
};