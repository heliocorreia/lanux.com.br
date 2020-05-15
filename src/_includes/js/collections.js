// Collections
//
// {
//     inputPath: './filename.md',
//     fileSlug: 'filename',
//     outputPath: './_site/filename/index.html',
//     url: '/filename/',
//     date: 2019-12-09T02:30:41Z,
//     data: {
//         title: 'Example Title',
//         tags: ['tag-a', 'tag-b', 'tag-c'],
//         date: 'Last Modified'
//      },
//     templateContent: '<h1>Hi, title</h1><p>Content...'
// }

const postsOrderedByDateDesc = collection => (
    collection.getAllSorted().reverse().filter(({data}) => (
        (data.permalink && data.layout && 'post' === data.layout)
    ))
);

module.exports = {
    postsOrderedByDateDesc,
}
