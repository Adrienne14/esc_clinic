import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"

import { MyHeader, Logo1 } from './theme'
import { IconButton, Typography, Dialog, Toolbar } from "@material-ui/core"
import { Box } from '@material-ui/core'
import { Menu, MoreVert } from "@material-ui/icons"
import CloseIcon from '@material-ui/icons/Close'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Slide from '@material-ui/core/Slide';

import clinicLogo from '../images/logo1.png'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SiteMenu = ({close}) => (
<React.Fragment>
  <Toolbar color="primary">
      <IconButton onClick={()=>close(false)} aria-label="Close">
        <CloseIcon />
      </IconButton>
  </Toolbar>
<div style={{border: '1px solid black'}}>
  <List component="nav">
    <ListItem button>
        <ListItemText  primary="Home"/>
    </ListItem>
    <Divider />
    <ListItem button>
      <ListItemText  primary="Patients"/>
    </ListItem>
    <Divider />
  </List>
</div>
</React.Fragment>
)


const Header = ({ siteTitle }) => {
  const [menu, setMenu] = useState(false)
  return(
  <React.Fragment>
  <MyHeader>
    <Logo1 src={clinicLogo} />
    <IconButton onClick={()=>setMenu(!menu)}>
      {menu? <MoreVert/>  : <Menu/> } 
    </IconButton>
  </MyHeader>
  { menu &&( 
    <Dialog 
      fullScreen 
      open={menu} 
      onClose={setMenu} 
      TransitionComponent={Transition}>
      <SiteMenu close={setMenu}/>
    </Dialog> 
  )}
  </React.Fragment>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
