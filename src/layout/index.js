var yo = require('yo-yo');

module.exports = function layout(content) {
    return yo`<div>
        <nav class="header">
            <div class="nav-wrapper">
                <div class="container">
                    <div class="row">
                        <div class="col s12 m6 offset-m1">
                            <a href="/" class="brand-logo title">TercyGram</a>
                        </div>
                        <div class="col s2 m6 push-m10">
                            <a class="dropdown-trigger btn btn-large" data-target='drop-user'>
                                <i class="fas fa-user"></i>
                            </a>
                            <ul id="drop-user" class="dropdown-content">
                                <li>
                                    <a href="/">Salir</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>
        </nav>
        <div class="content">
            ${content}
        </div>
    </div>`
}