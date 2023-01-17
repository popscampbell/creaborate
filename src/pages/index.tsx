import Layout from "@/components/app/Layout"
import UserPage from "@/components/user/UserPage"
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
