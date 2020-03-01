/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from '@material-ui/core'
import { Link } from "gatsby-theme-material-ui"
import styled, { ThemeProvider } from 'styled-components';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';


const Layout = ({ children }) => {

  const customTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#318933',
      },
    },
  });

  const StyledLink = styled(Link)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: '#fff'
  }))


  return (
    <>
      <MuiThemeProvider theme={customTheme}>
        <ThemeProvider theme={customTheme}>
          <Container maxWidth="lg">
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <StyledLink href="https://www.gatsbyjs.org">Gatsby</StyledLink>
            </footer>
          </Container>
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
