/**
 * @copyright 2025 Karen Lee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { NavLink, useLocation } from "react-router-dom";
import { works } from "./Work";

const Navbar = ({ NavOpen }) => {

  // const lastActiveLink = useRef();
  // const activeBox = useRef();

  const location = useLocation();
  const path = location.pathname;
  const isCaseStudy = path.includes("case-study");

  //set inital active box postitioned on the active menu item
  // const initActiveBox = () => {
  //   // console.log(lastActiveLink.current)
  //   // console.log(activeBox.current)
  //   activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
  //   activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
  //   activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
  //   activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';

  // }

  // useEffect(initActiveBox, []);
  // //when window resizes, update active box size to reflect any changes i.e. mobile dropdown list from larger screen menu 
  // window.addEventListener('resize', initActiveBox); 
  
  //menu item onClick function - when user clicks on a menu item update current active item
  const activeCurrentLink = (event) => {
    //remove active class from previous/last active item 
    //lastActiveLink.current?.classList.remove('active');
    var effectDiv = event.target.parentElement.querySelector('.active')
    effectDiv?.classList.remove('active');
    
    //add active class to current onclick item
    event.target.classList.add('active');
    //make this item the last active item
    //lastActiveLink.current = event.target;

    //active box postitioned on the active menu item (current onClick event item)
    // activeBox.current.style.top = event.target.offsetTop + 'px';
    // activeBox.current.style.left = event.target.offsetLeft + 'px';
    // activeBox.current.style.width = event.target.offsetWidth + 'px';
    // activeBox.current.style.height = event.target.offsetHeight + 'px';

  }

  const navItems = [
    {
      label: 'Home',
      link: '/#home',
      className: 'nav-link active',
      //ref: lastActiveLink
    },
    {
      label: 'About',
      link: '/#about',
      className: 'nav-link'
    },
    {
      label: 'Work',
      link: '/#work',
      className: 'nav-link'
    },
    {
      label: 'Testimonials',
      link: '/#testimonials',
      className: 'nav-link'
    },
    {
      label: 'Contact',
      link: '/#contact',
      className: 'nav-link md:hidden!'
    }
  ];

  return (
    <nav className={"navbar " + (NavOpen ? 'active': '')}>
      {
        isCaseStudy ? 
        <>
          <a href="/" key={navItems[0].key} ref={navItems[0].ref} className="nav-link">
            {navItems[0].label}
          </a>
          {
          works.map(({ title, projectLink, ref }, key) => 
          (
            // <a href={projectLink} key={key} className="nav-link" onClick={activeCurrentLink}>
            //   {title}
            // </a>
            <NavLink to={projectLink} key={key} className="nav-link">{title}</NavLink>
          ))
        }
        </>          
        :
        <>  
        {   
        navItems.map(({ label, link, className, ref }, key) => 
        (
          // <a href={link} key={key} ref={ref} className={className} onClick={activeCurrentLink}>
          //   {label}
          // </a>
          <a href={link} key={key} className={className} onClick={activeCurrentLink}>{label}</a>
        ))
        }
        
        </>
      }      
      {/* <div className="active-box" ref={activeBox}></div> */}
    </nav>
  )
}

Navbar.PropTypes = {
  NavOpen: PropTypes.bool.isRequired
}

export default Navbar