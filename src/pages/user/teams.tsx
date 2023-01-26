import PageSection from "@/components/app/PageSection"
import { NewTeamDialog } from "@/components/team/NewTeamDialog"
import UserPage from "@/components/user/UserPage"
import { Flex } from "@aws-amplify/ui-react"
import AdminIcon from "@mui/icons-material/LocalPolice"
import { Typography } from "@mui/material"
import Link from "next/link"
import { useAppSelector } from "state/hooks"

export default function UserTeamsPage() {
  const { teams } = useAppSelector((state) => state.user)

  function handleNew() {}

  return (
    <UserPage
      title="Teams"
      actions={[{ text: "New team", onClick: handleNew }]}
    >
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
  )
}
