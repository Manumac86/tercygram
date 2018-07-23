var yo = require('yo-yo');

module.exports = function pictureCard(pic) {
    var el;

    function render(pic) {
       return yo`<div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="${pic.url}">
            </div>
            <div class="card-content">
              <a href="/user/${pic.user.username}" class="card-title">
                <img src="${pic.user.avatar}" class="avatar" />
                <span class="username">${pic.user.username}</span>
                <small class="right time">hace 1 día</small>
              </a>
              <p>
                <a class="left" href="#" onclick=${like}><i class="far fa-heart"></i></a>
                <span class="left likes">${pic.likes} likes</span>
              </p>
            </div>
        </div>` 
    }

    function like(pic){
        pic.liked = true;
        pic.likes++;
        var newEl = render(pic);
        yo.update(el, newEl);
        return false;
    }

    el = render(pic);

    return el;
}