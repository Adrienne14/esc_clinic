import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"

import { MyHeader } from './theme'
import { IconButton, Typography } from "@material-ui/core"
import { Box } from '@material-ui/core'
import { Menu, MoreVert } from "@material-ui/icons"


const SiteMenu = () => (
  <Box style={{position: 'absolute'}}>
    <ul>
      <li>Menu 1</li>
      <li>Menu 2</li>
    </ul>
  </Box>
)


const Header = ({ siteTitle }) => {
  const [menu, setMenu] = useState(false)

  return(
  <React.Fragment>
  <MyHeader>
    <div style={{
      display: 'flex', 
      alignItems: 'center'
    }}>
    <IconButton onClick={()=>setMenu(!menu)}>
      {menu? <Menu/> : <MoreVert />}
    </IconButton>
    <Typography variant="h5">
      {siteTitle}
    </Typography>
    </div>
  </MyHeader>
  { menu && <SiteMenu/> }
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
