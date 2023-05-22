import React, { Component } from 'react';


class Footer extends Component {
  render() {
    return (
        <footer>
      <div className="row">
         <div className="twelve columns">
            <ul className="social-links">
               
               <li><a href="https://twitter.com/edigramer"><i className="fa fa-twitter"></i></a></li>
               <li><a href="www.linkedin.com/in/edison-vargas-m-881861b4"><i className="fa fa-linkedin"></i></a></li>
               
           
            </ul>
            <p>  <a href='https://github.com/Paovrg'> Autor: Paola Vargas</a></p>
         </div>
         <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
      </div>
   </footer>
    );
  }
}

export default Footer;
