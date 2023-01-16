import awsexports from "@/aws-exports"
import "@/styles/globals.css"
import { Authenticator } from "@aws-amplify/ui-react"
import "@aws-amplify/ui-react/styles.css"
import { createTheme, ThemeProvider } from "@mui/material"
import { Amplify, Auth, Storage } from "aws-amplify"
import type { AppProps } from "next/app"

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
        <Component {...pageProps} />
      </Authenticator.Provider>
    </ThemeProvider>
  )
}
