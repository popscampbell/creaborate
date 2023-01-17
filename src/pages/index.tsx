import Layout from "src/components/Layout"
import UserPage from "src/components/UserPage"
import { Typography } from "@mui/material"

export default function Home() {
  return (
    <Layout>
      <UserPage>
        <Typography>Home</Typography>
      </UserPage>
    </Layout>
  )
}
