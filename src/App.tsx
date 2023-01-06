import {
  defaultDarkModeOverride,
  Flex,
  Text,
  ThemeProvider,
  useTheme
} from "@aws-amplify/ui-react"
import { Amplify, Auth, Storage } from "aws-amplify"
import AppLayout from "Components/AppLayout"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import awsconfig from "./aws-exports"

Amplify.configure(awsconfig)
Auth.configure(awsconfig)
Storage.configure(awsconfig)

function App() {
  const { tokens } = useTheme()

  const appTheme = {
    name: "creaborate-theme",
    overrides: [defaultDarkModeOverride]
  }

  const AppRoutes = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Text>Error</Text>,

      children: [
        { index: true, element: <Text>Home</Text> },
        {
          path: "user",
          errorElement: <Text>Error</Text>,
          children: [{ path: "profile", element: <Text>Profile</Text> }]
        }
      ]
    }
  ])

  return (
    <ThemeProvider theme={appTheme} colorMode={"system"}>
      <Flex
        direction="column"
        backgroundColor={tokens.colors.background.primary}
        color={tokens.colors.font.primary}
        minHeight="100vh"
      >
        <RouterProvider router={AppRoutes} />
      </Flex>
    </ThemeProvider>
  )
}

export default App
