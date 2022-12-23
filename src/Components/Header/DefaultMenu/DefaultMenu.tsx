import { useAuthenticator } from "@aws-amplify/ui-react"
import { Button } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import useStyles from "./DefaultMenu.styles"

export default function DefaultMenu() {
  const classes = useStyles()

  const navigate = useNavigate()
  const authenticator = useAuthenticator()
  const location = useLocation()

  function NavMenuItem(props: {
    text: string
    to: string
    isPublic?: boolean
  }) {
    const { text, to, isPublic } = props

    return !isPublic && authenticator.authStatus !== "authenticated" ? (
      <></>
    ) : (
      <Button
        variant={location.pathname === to ? "menuActive" : "menu"}
        onClick={() => navigate(to)}
      >
        {text}
      </Button>
    )
  }

  return (
    <div className={classes.root}>
      <NavMenuItem text="Dashboard" to="/dashboard" />
      <NavMenuItem text="About" to="/about" isPublic />
    </div>
  )
}
