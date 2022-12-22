import { Button, PasswordField, Text, TextField } from "@aws-amplify/ui-react"
import {
  Button as MuiButton,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@mui/material"
import { Auth } from "aws-amplify"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SignIn(props: { onSuccess?: () => void }) {
  const { onSuccess } = props

  const navigate = useNavigate()

  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorText, setErrorText] = useState("")

  function handleClickOpen() {
    setOpen(true)
  }

  function handleClose() {
    setOpen(false)
  }

  function handleSignIn() {
    Auth.signIn(email, password)
      .then(() => {
        setOpen(false)
        onSuccess && onSuccess()
        navigate("/dashboard")
      })
      .catch((reason) => {
        setErrorText("User not found. Sign up instead.")
        console.error(reason)
      })
  }

  function handleSignUp() {
    Auth.signUp({
      username: email,
      password,
      attributes: {
        email
      },
      autoSignIn: { enabled: true }
    })
      .then((result) => {
        setOpen(false)
        navigate("/userprofile")
      })
      .catch((reason) => {
        setErrorText("Not good")
        console.error(reason)
      })
  }

  return (
    <>
      <MuiButton
        variant="menu"
        title="Sign in or sign up"
        onClick={handleClickOpen}
      >
        Sign in
      </MuiButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Sign in</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Sign in with an existing account or sign up to create a new account.
          </DialogContentText>
          <TextField
            label="Email"
            type="email"
            value={email}
            required
            errorMessage="Email is required"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <PasswordField
            label="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <Button type="submit" onClick={handleSignIn}>
            Sign in
          </Button>
          <Button type="submit" onClick={handleSignUp}>
            Sign up
          </Button>
          <Text variation="error">{errorText}</Text>
        </DialogContent>
      </Dialog>
    </>
  )
}
