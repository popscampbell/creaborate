import awsexports from "@/aws-exports"
import { UserDataLoader } from "@/data/UserDataLoader"
import store from "@/state/store"
import "@/styles/globals.css"
import { Authenticator } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"
import { createTheme, ThemeProvider } from "@mui/material"
import grey from "@mui/material/colors/grey"
import { Amplify, Auth, Storage } from "aws-amplify"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"

export default function App({ Component, pageProps }: AppProps) {
  Amplify.configure(awsexports)
  Auth.configure(awsexports)
  Storage.configure(awsexports)

  const darkTheme = createTheme({
    palette: {
      mode: "dark"
      // primary: {
      //   main: grey[700],
      //   dark: grey[800],
      //   light: grey[300],
      //   contrastText: grey[100]
      // },
      // background: {
      //   default: grey[900]
      // }
    }
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <Authenticator.Provider>
        <Provider store={store}>
          <UserDataLoader>
            <Component {...pageProps} />
          </UserDataLoader>
        </Provider>
      </Authenticator.Provider>
    </ThemeProvider>
  )
}
