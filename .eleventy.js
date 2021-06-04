module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy({'_static':'.'});

    return {
        dir: {
            input: 'src',
            includes: '_includes',
            layouts: '_layouts',
            output: '_site'
        }
    }
};
