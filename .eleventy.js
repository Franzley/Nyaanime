module.exports = function(eleventyConfig) {

  // Add files to public folder
  eleventyConfig.addPassthroughCopy('./src/styles');
  eleventyConfig.addPassthroughCopy('./src/assets');


  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};