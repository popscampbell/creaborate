import { Authenticator } from "@aws-amplify/ui-react"
import { ThemeProvider } from "@mui/material"
import { Footer, Header } from "Components"
import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import theme from "Theme"
import AppRoutes from "App.routes"
import useStyles from "App.styles"
import awsexports from "./aws-exports"
import { Amplify, Auth } from "aws-amplify"

export default function App() {
  const classes = useStyles()

  Amplify.configure(awsexports)
  Auth.configure(awsexports)

  return (
    <div className={classes.root}>
      <Suspense fallback="Loading...">
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Authenticator.Provider>
              <Header />
              <main className={classes.main}>
                <AppRoutes />
              </main>
              <Footer />
            </Authenticator.Provider>
          </ThemeProvider>
        </BrowserRouter>
      </Suspense>
    </div>
  )
}
