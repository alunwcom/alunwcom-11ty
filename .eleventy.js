module.exports = function(eleventyConfig) {

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
