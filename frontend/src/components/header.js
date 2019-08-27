import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"

import { MyHeader } from './theme'
import { IconButton, Typography } from "@material-ui/core"
import { Menu, MoreVert } from "@material-ui/icons"



const Header = ({ siteTitle }) => {
  const [menu, setMenu] = useState(false)

  return(
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
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
