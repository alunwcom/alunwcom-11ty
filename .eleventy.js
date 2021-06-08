const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);
    eleventyConfig.addPassthroughCopy({'static':'.'});
    return {
        dir: {
            input: 'src',
            includes: '_includes',
            layouts: '_layouts',
            output: '_site'
        }
    }
};
