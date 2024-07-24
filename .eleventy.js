module.exports = function(eleventyConfig) {

  // Add files to public folder
  eleventyConfig.addPassthroughCopy('./src/styles');
  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addPassthroughCopy('./src/admin');


  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
};