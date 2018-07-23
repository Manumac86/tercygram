var page = require('page');
var empty = require('empty-element');
var template = require('./template');
const title = require('title');

page('/', function (ctx, next) {
    title('TercyGram');
    var main = document.getElementById('main-container');
        
    var pictures = [
        {
            user: {
                username: 'manumac86',
                avatar: 'https://static.platzi.com/media/avatars/manumac86_9dafa6a9-433f-46ac-9800-46fa127be5df.jpg'
            },
            url: 'https://materializecss.com/images/office.jpg',
            likes: 1986,
            liked: true 
        },
        {
            user: {
                username: 'manumac86',
                avatar: 'https://static.platzi.com/media/avatars/manumac86_9dafa6a9-433f-46ac-9800-46fa127be5df.jpg'
            },
            url: 'https://materializecss.com/images/sample-1.jpg',
            likes: 19996,
            liked: true 
        }

    ];

    empty(main).appendChild(template(pictures));
})