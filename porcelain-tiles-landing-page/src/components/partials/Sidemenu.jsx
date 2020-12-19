import React from "react";
import { slide as Menu } from 'react-burger-menu';


class Sidemenu extends React.Component {
    render() {
        return (
            <Menu>
            <a className="menu-item" href="/">
              Home
            </a>
            <a className="menu-item" href="/salads">
              Collection
            </a>
            <a className="menu-item" href="/pizzas">
              View all
            </a>
            <a className="menu-item" href="/desserts">
              Latest
            </a>
            <a className="menu-item" href="/desserts">
              Stone
            </a>
            <a className="menu-item" href="/desserts">
              Marble
            </a>
            <a className="menu-item" href="/desserts">
              Woods
            </a>
            <a className="menu-item" href="/desserts">
              Concrete
            </a>
            <a className="menu-item" href="/desserts">
              Metallic
            </a>
            <a className="menu-item" href="/desserts">
              Tailor Made
            </a>
            <a className="menu-item" href="/desserts">
              Bookmatched
            </a>
          </Menu>   
        )
    }
}

export default Sidemenu;
