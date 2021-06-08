const now = String(Date.now())

module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false)
  eleventyConfig.addWatchTarget('./_tmp/style.css')
  eleventyConfig.addPassthroughCopy({ './_tmp/style.css': './style.css' })
  eleventyConfig.addShortcode('version', function () {
    return now
  })

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
