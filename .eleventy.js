module.exports = function(eleventyConfig) {

  // Add files to public folder
  eleventyConfig.addPassthroughCopy('./src/styles/**/*.css');
  eleventyConfig.addPassthroughCopy('./src/images/**/*.png');

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};