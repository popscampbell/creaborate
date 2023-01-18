import Layout from "@/components/app/Layout"
import PageSection from "@/components/app/PageSection"
import UserPage from "@/components/user/UserPage"
import { useAppSelector } from "state/hooks"
import { Flex } from "@aws-amplify/ui-react"
import { Typography } from "@mui/material"
import AdminIcon from "@mui/icons-material/LocalPolice"
import Link from "next/link"
import { NewTeamDialog } from "@/components/team/NewTeamDialog"

export default function UserTeamsPage() {
  const { teams } = useAppSelector((state) => state.user)

  return (
    <Layout>
      <UserPage title="Teams" actions={<NewTeamDialog />}>
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
