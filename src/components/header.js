import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import Link from 'gatsby-link'
import Img from 'gatsby-image';
import styled from 'styled-components';

import logo from '../images/logo.svg';

const HeaderWrapper = styled.div `
    background: #524763;
    margin-bottom: 1.45rem;
    overflow: hidden;
    position: relative;
    height: ${props => props.isHome ? '70vh' : '20vh'};

    h1 {
      margin: 0

      img {
        height: 80px;
      }
    }
`;

const HeaderContainer = styled.div `
      margin: 0 auto;
      max-width: 960px;
      padding: 1.45rem 1.0875rem;
      z-index: 2;
      position: relative;
      display: flex;
      justify-content: space-between;
`;

const MainNav = styled.nav`
    ul {
      list-style: none;
      display: flex;
      li {
        margin-left: 10px;
        font-family: sans-serif;
        a {
          text-decoration: none;
          color: white;
          &:hover {
            border-bottom: 3px solid white;
          }
        }
      }
    }
`;

  export default class Header extends Component {
    componentDidUpdate = (prevProps, prevState) => {
      const { location } = this.props;
      if (location.pathname !== prevProps.location.pathname) {
        if (location.pathname === '/') {
          this
            .wrapper
            .animate([
              {
                height: "20vh"
              }, {
                height: "70vh"
              }
            ], {
              duration: 300,
              fill: "forwards",
              easing: "cubic-bezier(0.86, 0, 0.07, 1)",
              iterations: 1
            });
        } else {
          this
            .wrapper
            .animate([
              {
                height: "70vh"
              }, {
                height: "20vh"
              }
            ], {
              duration: 300,
              fill: "forwards",
              easing: "cubic-bezier(0.86, 0, 0.07, 1)",
              iterations: 1
            });
        }
      }
    }

    render() {
      const {data, location} = this.props;
      return (
        <HeaderWrapper
          isHome={location.pathname === '/'}
          ref={(wrapper) => this.wrapper = ReactDOM.findDOMNode(wrapper)}>
          <HeaderContainer>
            <h1>
              <Link
                to="/"
                style={{
                color: 'white',
                textDecoration: 'none'
              }}>
                <img src={logo} alt={data.site.siteMetadata.siteTitle}/>
              </Link>
            </h1>
            <MainNav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </MainNav>
          </HeaderContainer>
          <Img
            style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
            opacity: '0.3',
          }}
            sizes={data.background.sizes}/>
        </HeaderWrapper>
      )
    }
  }
