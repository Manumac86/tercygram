var yo = require('yo-yo');
var landing = require('../landing');

var signupForm = yo`<div class="col s12 m7">
                        <h1 class="title blue-text text-darken-4">TercyGram</h1>
                        <h2>The New Social Experience</h2>
                        <h4>Sign Up for the best social experience</h4>
                        <a class="btn btn-fb hide-on-small-only">Iniciar sesión con Facebook</a>
                        <div class="divider"></div>
                        <form class="signup-form" action="">
                            <input type="text" name="name" placeholder="Nombre" />
                            <input type="text" name="lname" placeholder="Apellido" />
                            <input type="email" name="email" placeholder="Email" />
                            <input type="text" name="username" placeholder="Username" />
                            <input type="password" name="password" placeholder="Password" />
                            <button class="btn waves-effect waves-light btn-signup">Sign Up</button>   
                        </form>
                            Already Cool? <a  href="/signin">Sign In</a>
                        </div>`;

module.exports = landing(signupForm);