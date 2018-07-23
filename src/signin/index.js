var page = require('page');
var empty = require('empty-element');
var template = require('./template');
const title = require('title');

page('/signin', function (ctx, next) {
    title('TercyGram - SignIn');
    console.log(title('Tercygram - SignIn'));
    var main = document.getElementById('main-container');
    empty(main).appendChild(template);
})