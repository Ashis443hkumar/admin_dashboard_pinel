import React from 'react';
import './style.css';
import {HeaderData} from "./dataStore"

export default function Header() {
  return (
    <>
    <section className="sidebar_menu">
      <div className="user_info">
        <div className="info_img">
          <i class="fa-solid fa-user"></i>
        </div>
        <span className="info_name">Ashish Sharma</span>
      </div>
      <nav className="navigation">
        <ul className="nav_list">
        {
          HeaderData.map((value, id) =>(
            <li className="nav_items" key={value.id}>
              <a href="" className="nav_link">
               <i class="fa-solid fa-house nav-link-icons"></i>
                <span className="nav_link_text" >{value.navMenu}</span>
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
