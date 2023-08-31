import React from 'react';
import './style.css';
import {HeaderData} from "./dataStore"

export default function Header() {
  return (
    <>
    <section>
      <div className="user_info">
        <div className="info_img">
          <img src="" alt="" />
        </div>
        <span className="info_name">Ashish Sharma</span>
      </div>
      <nav className="navigation">
        <ul classname="nav_list">
        {
          HeaderData.map((value, id) =>(
            <li className="nav_items" key={value.id}>
              <a href="" className="nav_link">
                <img src="" alt="" className="nav-link-icons" />
                <span classname="nav_link_text" >{value.navMenu}</span>
              </a>
            </li>
          ))
        }
        </ul>
      </nav>


    </section>

      
    </>
  );
}
