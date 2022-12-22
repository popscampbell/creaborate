import { DefaultMenu, MobileMenu, UserMenu } from "Components"
import { useDeviceSize } from "Hooks"
import useStyles from "./Header.styles"
import logo from "Creaborate-64x64.jpeg"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"

export default function Header() {
  const deviceSize = useDeviceSize()
  const classes = useStyles()

  const navigate = useNavigate()

  return (
    <header className={classes.root}>
      <div className={classes.container}>
        <img alt="Creaborate logo" src={logo} className={classes.logo} />
        <div className={classes.siteName}>
          <Button variant="brand" onClick={() => navigate("/")}>
            Creaborate
          </Button>
        </div>
        <nav className={classes.menu}>
          {deviceSize === "phone" ? <MobileMenu /> : <DefaultMenu />}
        </nav>
        <UserMenu />
      </div>
    </header>
  )
}
