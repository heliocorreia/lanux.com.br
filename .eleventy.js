const moment = require('moment');
const collections = require('./src/_includes/js/collections.js');

moment.locale('en');

module.exports = function (eleventyConfig) {
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
