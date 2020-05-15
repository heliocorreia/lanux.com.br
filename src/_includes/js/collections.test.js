const test = require('ava');
const {postsOrderedByDateDesc} = require('./collections');

const postDraft = {
    data: {
        layout: "post",
    },
};

const postPublished = {
    data: {
        layout: "post",
        permalink: "/post-1/",
    },
};

const pagePublished = {
    data: {
        layout: "page",
        permalink: "/page-1/",
    }
};

const collection = {
    getAllSorted: () => [
        pagePublished,
        postDraft,
        postPublished,
    ]
};

test('postsOrderedByDateDesc', t => {
    const posts = postsOrderedByDateDesc(collection);
    t.deepEqual(posts, [postPublished]);
});
