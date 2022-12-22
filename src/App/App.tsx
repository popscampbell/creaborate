import { Authenticator } from "@aws-amplify/ui-react"
// import { ThemeProvider } from "@mui/material"
// import { Footer, Header } from "Components"
// import { useDocumentProperties } from "Hooks"
import { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
// import { AppInfoService } from "Services"
// import theme from "Theme"
import AppRoutes from "./App.routes"
// import useStyles from "./App.styles"

export default function App() {
  // const classes = useStyles()

  // useDocumentProperties(AppInfoService.AppName, true)

  return (
    // <div className={classes.root}>
    <Suspense fallback="Loading...">
      <BrowserRouter>
        {/* <ThemeProvider theme={theme}> */}
        <Authenticator.Provider>
          {/* <Header /> */}
          {/* <main className={classes.main}> */}
          <AppRoutes />
          {/* </main> */}
          {/* <Footer /> */}
        </Authenticator.Provider>
        {/* </ThemeProvider> */}
      </BrowserRouter>
    </Suspense>
    // </div>
  )
}
