import { useState } from "react"
import { IconButton, Menu, MenuItem } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import useStyles from "./MobileMenu.styles"
import { Link } from "Components"

export default function MobileMenu() {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton size="small" onClick={handleClick}>
        <MenuIcon className={classes.menuButton} />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem dense onClick={handleClose}>
          <Link to="/about" highlightActive>
            About
          </Link>
        </MenuItem>
      </Menu>
    </div>
  )
}
