import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <footer className="page-footer bg-dark text-light font-small unique-color-dark pt-4">
         
            <div className="container">
              
              <ul className="list-unstyled list-inline text-center py-2">
                <li className="list-inline-item">
                  <h5 className="mb-1">Register for free</h5>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="btn btn-danger    ">Sign up!</a>
                </li>
              </ul>
              
            </div>
            
            
            <div className="footer-copyright text-center py-3">© 2020 Copyright: M.Shaheer khan
            </div>
         
          </footer>
        )
    }
}

export default Footer;
