import { Authenticator } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"
import { createTheme, ThemeProvider } from "@mui/material"
import { Amplify, Auth, Storage } from "aws-amplify"
import awsexports from "aws-exports"
import type { AppProps } from "next/app"
import { Provider as ReduxProvider } from "react-redux"
import store from "state/store"
import "styles/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  Amplify.configure(awsexports)
  Auth.configure(awsexports)
  Storage.configure(awsexports)

  const darkTheme = createTheme({
    palette: {
      mode: "dark"
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Authenticator.Provider>
        <ReduxProvider store={store}>
          <Component {...pageProps} />
        </ReduxProvider>
      </Authenticator.Provider>
    </ThemeProvider>
  )
}
