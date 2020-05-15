const moment = require('moment');
const collections = require('./src/_includes/js/collections.js');

moment.locale('en');

module.exports = function (eleventyConfig) {
    // Layout aliases
    eleventyConfig.addLayoutAlias('attachment', 'layouts/page.njk');
    eleventyConfig.addLayoutAlias('home', 'layouts/home.njk');
    eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');
    eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');

    // Filters
    eleventyConfig.addFilter('dateformat', function (timestamp) {
        return moment(timestamp).format('MMM DD, YYYY [at] h:mm a');
    });

    // Collections
    eleventyConfig.addCollection('postsCollection', collections.postsOrderedByDateDesc);

    return {
        dir: {
            input: 'src',
            output: 'docs'
        },
        passthroughFileCopy: true,
        templateFormats: ['njk', 'html', 'md', 'css']
    };
};
