const moment = require('moment');
moment.locale('en');

module.exports = function (eleventyConfig) {
    // Filters
    eleventyConfig.addFilter('dateformat', function (timestamp) {
        return moment(timestamp).format('MMM DD, YYYY [at] h:mm a');
    });

    return {
        dir: {
            input: 'src',
            output: 'docs'
        },
        passthroughFileCopy: true,
        templateFormats: ['njk', 'html', 'md', 'css']
    };
};
