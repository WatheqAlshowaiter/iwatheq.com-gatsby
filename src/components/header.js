import { Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"
import WatheqLogo from "../images/WatheqLogoSvg"

const Content = styled.div`
  /* max-width: 860px; */
  padding: 1rem 1.0875rem;
  /* font-size: 1.2rem; */
`

const NavLink = styled(Link)`
  /* color: black; */
  margin-right: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    /* transform: scaleX(0); */
    height: 2px;
    bottom: 0;
    left: 0;
    /* background-color: rgba(0, 0, 0, 0.8); */
    /* transform-origin: bottom right; */
    /* transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1); */
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom right;
  }
`

const GitHubLink = styled.a`
  color: black;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }

  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const HomeLink = styled(NavLink)`
  margin-right: 0;
`

const SiteHeader = styled.header`
  background: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
  line-height: 1.5;
`

const Header = ({ siteTitle }) => (
  <header>
    <Content style={{ direction: "rtl" }}>
      <div className="sm:text-center md:flex md:justify-between">
        <div className="sm:mx-auto sm:mb-4 sm:flex sm:justify-center sm:text-center md:mx-0">
        <p className="sm:text-center">
          <WatheqLogo className="w-28 md:w-36 lg:w-44" />
          </p>
        </div>
        <div className="sm:flex sm:text-center">
        <p>
          <HomeLink
            to="/"
            className="bg-blue-400 text-white rounded px-12 py-4 hover:bg-blue-500 hover:text-white flex items-center w-auto justify-left transition ease-in-out duration-150"
          >
            الرئيسية
          </HomeLink>
          <NavLink
            to="/blog"
            className="sm:ml-4 bg-transparent text-blue-500 border border-blue-400 rounded px-12 sm:px-6 py-4 hover:bg-blue-400 hover:text-white mt-4 sm:mt-0 transition ease-in-out duration-150"
          >
            المدونة
          </NavLink>
        </p>
        </div>
      </div>
    </Content>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
