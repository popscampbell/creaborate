import awsexports from "@/aws-exports"
import { UserDataLoader } from "@/data/UserDataLoader"
import store from "@/state/store"
import "@/styles/globals.css"
import { Authenticator } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"
import { createTheme, ThemeProvider } from "@mui/material"
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
