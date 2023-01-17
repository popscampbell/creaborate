import Layout from "@/components/Layout"
import PageSection from "@/components/PageSection"
import UserPage from "@/components/UserPage"
import { useAppSelector } from "@/state/hooks"
import { Flex } from "@aws-amplify/ui-react"
import { Typography } from "@mui/material"
import AdminIcon from "@mui/icons-material/LocalPolice"
import Link from "next/link"

export default function UserTeamsPage() {
  const { teams } = useAppSelector((state) => state.user)

  return (
    <Layout>
      <UserPage subtitle="Teams">
        <PageSection
          items={teams}
          renderLabel={(team) => team.name}
          renderContent={(team) => (
            <Link href={`/team/${team.id}`}>
              <Flex>
                {team.role === "ADMINISTRATOR" && <AdminIcon />}
                <Typography>{team.name}</Typography>
              </Flex>
            </Link>
          )}
        />
      </UserPage>
    </Layout>
  )
}
