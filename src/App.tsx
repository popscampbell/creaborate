import { Authenticator } from "@aws-amplify/ui-react"
import { ThemeProvider } from "@mui/material"
import { Footer, Header } from "Components"
import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import theme from "Theme"
import AppRoutes from "App.routes"
import useStyles from "App.styles"
import awsexports from "./aws-exports"
import { Amplify, Auth, DataStore, Predicates, Storage } from "aws-amplify"
import HeaderBar from "Components/Header/HeaderBar"
import { Task, Team, TeamMember, UserProfile } from "models"

export default function App() {
  const classes = useStyles()

  Amplify.configure(awsexports)
  Auth.configure(awsexports)
  Storage.configure(awsexports)
  // DataStore.stop().then(() => DataStore.clear().then(() => DataStore.start()))

  // DataStore.delete(Task, Predicates.ALL)
  // DataStore.delete(TeamMember, Predicates.ALL)
  // DataStore.delete(Team, Predicates.ALL)
  // DataStore.delete(UserProfile, Predicates.ALL)

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
