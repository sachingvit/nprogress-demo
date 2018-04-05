module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter'
  },
  plugins: [
    'gatsby-plugin-react-helmet', {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `yellow`,
        // Disable the loading spinner.
        showSpinner: true,
        trickleSpeed: 20,
        easing: 'ease',
        speed: 100
      }
    }
  ]
};
