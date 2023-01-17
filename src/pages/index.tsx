import Layout from "components/Layout"
import UserPage from "components/UserPage"
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
