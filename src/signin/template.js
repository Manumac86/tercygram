var yo = require('yo-yo');
var landing = require('../landing');

var signinForm = yo`<div class="col s12 m7">
                        <h1 class="title blue-text text-darken-4">TercyGram</h1>
                        <h2>The New Social Experience</h2>
                        <h4>Sign In for the best social experience</h4>
                        <a class="btn btn-fb hide-on-small-only">Iniciar sesión con Facebook</a>
                        <div class="divider"></div>
                        <form class="signup-form" action="">
                            <input type="text" name="username" placeholder="Username" />
                            <input type="password" name="password" placeholder="Password" />
                            <button class="btn waves-effect waves-light btn-signup">Sign In</button>   
                        </form>
                            You don't have an account? <a  href="/signup">Sign Up</a>
                        </div>`;

module.exports = landing(signinForm);