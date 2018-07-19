var yo = require('yo-yo');

module.exports = function landing(box) {
    return yo`<div class="container blue lighten-5">
                <div class="row center-align">
                    <div class="iphone col m5 hide-on-small-only">
                        <img src="pic4.png" alt="">
                    </div>
                    ${box}       
                </div>
            </div>`
}


