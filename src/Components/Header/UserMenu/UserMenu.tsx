import { useAuthenticator } from "@aws-amplify/ui-react"
import { Person } from "@mui/icons-material"
import { Button, Menu, MenuItem } from "@mui/material"
import { Auth } from "aws-amplify"
import UserProfileDataStore from "DataStores/UserProfileDataStore"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useStyles from "./UserMenu.styles"

function UserMenu(props: { onSignOut?: () => void }) {
  const { onSignOut } = props
  const classes = useStyles()

  const navigate = useNavigate()
  const { user } = useAuthenticator()
  const userProfile = UserProfileDataStore.useUserProfile(user?.username || "")

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  function handleSignOut() {
    handleClose()
    Auth.signOut()
    onSignOut && onSignOut()
    navigate("/")
  }

  function handleProfileClick() {
    navigate("/userProfile")
    handleClose()
  }

  if (!user) {
    return <></>
  }

  return (
    <div className={classes.root}>
      <Button
        variant="menu"
        endIcon={<Person />}
        id="user-menu-button"
        aria-controls={open ? "user-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {userProfile?.Name}
      </Button>
      <Menu
        id="user-menu"
        aria-labelledby="user-menu-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem dense onClick={handleProfileClick}>
          <Button size="small">Profile</Button>
        </MenuItem>
        <MenuItem dense onClick={handleSignOut}>
          <Button size="small">Sign out</Button>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default UserMenu
