/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable semi */
/* eslint-disable react/jsx-filename-extension */
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
// import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import './layout.css'

const styles = {
  reactGreen: '#487783', // h4 font-color #072D2B
  lightestGreen: '#BDD4DB',
  iconBColor: '#353C44', // feature icon bg #E4C2B3
}

const StyledWrapper = styled.div`
  background: radial-gradient(circle, rgba(53,60,68,1) 0%, rgba(0,0,0,1) 100%);
`

const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-bottom: 40px;
`

const StyledGridElement = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  background: ${styles.iconBColor};
  width: 295px;
  height: 120px;
  margin: 10px;
  font-family: "Raleway", sans-serif;
  border-radius: 5px;
  border: 1px solid rgba(184, 196, 194, 0.25);
  box-shadow: 2px 3px 4px 2px rgba(0, 0, 0, 0.2);
  h4 {
    color: ${styles.reactGreen};
    margin-bottom: 1px;
    margin-top: 10px;
  }
  p {
    color: white;
    text-align: center;
    line-height: 20px;
    margin-bottom: 1px;
  }
  h6 {
    color: ${styles.lightestGreen};
    text-align: center;
    margin-bottom: 1px;
  }
`

const Layout = ({ children }) => (
  <>
    <StyledWrapper>
      <StyledDiv>
        <StyledMain>
          {children}
          <Grid>
            <StyledGridElement className="feaStyle">
              <h4>Time Travel Tree Display</h4>
              <p>See your application state values on each change.</p>
              <br />
              <h6>*** Full Support ***</h6>
            </StyledGridElement>
            <StyledGridElement className="feaStyle">
              <h4>Time Travel State History Graphic</h4>
              <p>See your application state history and branch from old state.</p>
              <br />
              <h6>*** Full Support ***</h6>
            </StyledGridElement>
            <StyledGridElement className="feaStyle">
              <h4>Time Travel Live Render</h4>
              <p>See your application DOM follow each state change.</p>
              <br />
              <h6>*** No support React-Router ***</h6>
            </StyledGridElement>
            <StyledGridElement className="feaStyle">
              <h4>Performance Render Time Display</h4>
              <p>Keep track of your application render time on state change.</p>
              <br />
              <h6>*** No support for Redux ***</h6>
            </StyledGridElement>
            <StyledGridElement className="feaStyle">
              <h4>Components Performance Graphic</h4>
              <p>Vizualise your application and render time of components on state change.</p>
              <br />
              <h6>*** No support for Redux ***</h6>
            </StyledGridElement>
            <StyledGridElement className="feaStyle">
              <h4>Diff Mode</h4>
              <p>Compare state changes.</p>
              <br />
              <h6>*** Full Support ***</h6>
            </StyledGridElement>
            <StyledGridElement className="feaStyle">
              <h4>Import and Export</h4>
              <p>Save your state history for future tests.</p>
              <br />
              <h6>*** Full Support ***</h6>
            </StyledGridElement>
            <StyledGridElement className="feaStyle">
              <h4>Persist mode</h4>
              <p>Keep your state changes on app reload.</p>
              <br />
              <h6>*** Full Support ***</h6>
            </StyledGridElement>
            <StyledGridElement className="feaStyle">
              <h4>TRY REACTIME</h4>
              <h6>Clone this repo and demo yourself</h6>
              <br />
              <p>
                <a
                  style={{ textDecoration: 'none', color: '#99A93A' }}
                  href="https://github.com/aquinojardim/calculator.git"
                >
                  Calculator
                </a>
              </p>
            </StyledGridElement>
          </Grid>
          <h4
            style={{
              fontWeight: '400',
              fontSize: '13px',
              color: styles.lightestGreen,
              textAlign: 'center',
            }}
          >
            Read more about Reactime
          </h4>
          <h4
            style={{
              fontWeight: '400',
              fontSize: '13px',
              color: styles.lightestGreen,
              textAlign: 'center',
            }}
          >
            <a
              style={{ textDecoration: 'none', color: '#62D6FB' }}
              href="https://medium.com/@aquinojardim/react-fiber-reactime-4-0-f200f02e7fa8"
            >
              React Fiber & Reactime 4.0
            </a>
          </h4>
          <h4
            style={{
              fontWeight: '400',
              fontSize: '13px',
              color: styles.lightestGreen,
              textAlign: 'center',
            }}
          >
            <a
              style={{ textDecoration: 'none', color: '#62D6FB' }}
              href="https://dev.to/edwinjmenendez/reactime-4-0-state-debugging-time-travel-tool-kof"
            >
              Reactime 4.0 State Debugging Time Travel Tool
            </a>
          </h4>
          <h4
            style={{
              fontWeight: '400',
              fontSize: '13px',
              color: styles.lightestGreen,
              textAlign: 'center',
            }}
          >
            <a
              style={{ textDecoration: 'none', color: '#62D6FB' }}
              href="https://tinyurl.com/reactimeMedium"
            >
              Time Traveling State Debugger — Reactime 3.0
            </a>
          </h4>
        </StyledMain>
      </StyledDiv>
    </StyledWrapper>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
