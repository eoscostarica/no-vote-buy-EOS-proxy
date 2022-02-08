import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'
import clsx from 'clsx'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@mui/material/Link'
import { makeStyles, useTheme } from '@mui/styles'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import useMediaQuery from '@mui/material/useMediaQuery'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import Message from '../../components/Message'

import styles from './styles'

const useStyles = makeStyles(styles)

const Main = ({
  children,
  sidebarContent,
  topbarContent,
  openSidebar,
  setOpenSidebar
}) => {
  const classes = useStyles()
  const theme = useTheme()
  const { t } = useTranslation('translations')
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true
  })

  return (
    <Container
      component="main"
      className={clsx({
        [classes.root]: true
      })}
    >
      <div>
        <AppBar className={classes.appBar} position="static">
          <Toolbar className={classes.toolbar}>
            <div className="logoName">
              <IconButton
                color="inherit"
                onClick={() => setOpenSidebar(!openSidebar)}
                className={classes.drawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <RouterLink className={classes.sof} to="/">
                NovotebuyEOS Proxy
              </RouterLink>
            </div>

            <div className="menuDesktop">
              <RouterLink className={classes.menuLink} to="/">
                {t('home')}
              </RouterLink>
              <Link
                className={classes.menuLink}
                underline="false"
                href="#about"
              >
                {t('about')}
              </Link>
              <Link className={classes.menuLink} underline="false" href="#bps">
                {t('bPs')}
              </Link>
              <Link
                className={classes.menuLink}
                underline="false"
                href="#exchanges"
              >
                {t('exchanges')}
              </Link>
              <Link
                className={classes.menuLink}
                underline="false"
                href="#holders"
              >
                {t('eosHolder')}
              </Link>
              <RouterLink className={classes.menuLink} to="/news">
                {t('news')}
              </RouterLink>
            </div>
            <div>{topbarContent}</div>
          </Toolbar>
        </AppBar>
        <Message />
        <Drawer
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
          onClose={() => setOpenSidebar(false)}
          open={openSidebar}
          variant="temporary"
          className={clsx({
            [classes.drawer]: true,
            [classes.drawerDesktop]: isDesktop && openSidebar
          })}
        >
          <div className={classes.drawerContent}>{sidebarContent}</div>
        </Drawer>
        {children}
      </div>
      <div className={classes.footerBox}>
        <div className={classes.footer}>
          <div className={classes.footerLogo}>
            <span className={classes.noVote}>{t('noVoteBuy')}</span>
            <img alt="Logo" src="/images/logo-dark.png" />
          </div>
          <div className={classes.socialWrapper}>
            <div>
              <span className={classes.socialTitle}>{t('quicklinks')}</span>
              <a
                href="#"
                className={classes.menuLink}
                rel="noopener noreferrer"
              >
                {t('home')}
              </a>
              <a
                href="#"
                className={classes.menuLink}
                rel="noopener noreferrer"
              >
                {t('bPs')}
              </a>
              <a
                href="#"
                className={classes.menuLink}
                rel="noopener noreferrer"
              >
                {t('exchanges')}
              </a>
              <a
                href="#"
                className={classes.menuLink}
                rel="noopener noreferrer"
              >
                {t('eosHolder')}
              </a>
              <a
                href="#"
                className={classes.menuLink}
                rel="noopener noreferrer"
              >
                {t('news')}
              </a>
            </div>

            <div>
              <span className={classes.socialTitle}>{t('social')}</span>
              <a
                href="#"
                className={classes.menuLink}
                rel="noopener noreferrer"
              >
                {t('blog')}
              </a>
              <a
                href="#"
                className={classes.menuLink}
                rel="noopener noreferrer"
              >
                {t('twitter')}
              </a>
              <a
                href="#"
                className={classes.menuLink}
                rel="noopener noreferrer"
              >
                {t('discord')}
              </a>
              <a
                href="#"
                className={classes.menuLink}
                rel="noopener noreferrer"
              >
                {t('telegram')}
              </a>
            </div>

            <div>
              <span className={classes.socialTitle}>{t('assets')}</span>
              <a
                href="#"
                className={classes.menuLink}
                rel="noopener noreferrer"
              >
                {t('litepaper')}
              </a>
              <a
                href="#"
                className={classes.menuLink}
                rel="noopener noreferrer"
              >
                {t('deck')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

Main.propTypes = {
  children: PropTypes.node,
  sidebarContent: PropTypes.node,
  topbarContent: PropTypes.node,
  openSidebar: PropTypes.bool,
  setOpenSidebar: PropTypes.func
}

Main.defaultProps = {
  openSidebar: false,
  setOpenSidebar: () => {}
}

export default Main