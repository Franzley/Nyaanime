module.exports = function(eleventyConfig) {

  // Add files to public folder
  eleventyConfig.addPassthroughCopy('./src/styles');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/images');


  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};