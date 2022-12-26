import { Add } from "@mui/icons-material"
import { ListItemButton, ListItemText } from "@mui/material"
import { CreateTeamDialog } from "Components/Team"
import TeamDataStore from "DataStores/TeamDataStore/TeamDataStore"
import { teamTypeLabels } from "Labels/enumLabels"
import { LazyTeam, UserProfile } from "models"
import { useNavigate } from "react-router-dom"
import ListWidget from "./ListWidget"

export default function TeamsWidget(props: { userProfile: UserProfile }) {
  const navigate = useNavigate()
  const teams = TeamDataStore.useTeams(props.userProfile)

  function handleClickTeam(id?: string) {
    navigate(`/team${id ? `?id=${id}` : ""}`)
  }

  function HeaderAction() {
    function handleSuccess(id: string) {}
    return (
      <CreateTeamDialog
        buttonText="Add"
        buttonIcon={<Add />}
        onSuccess={handleSuccess}
      />
    )
  }

  function primary(team: LazyTeam) {
    return (
      <ListItemButton
        title={`Go to ${team.Name}`}
        onClick={() => handleClickTeam(team.id)}
      >
        <ListItemText primary={team.Name} />
      </ListItemButton>
    )
  }

  function secondary(team: LazyTeam) {
    return (
      <ListItemText
        secondary={teamTypeLabels[team.TeamType]}
        sx={{ textAlign: "end" }}
      />
    )
  }

  return (
    <ListWidget
      title="Teams"
      items={teams}
      headerAction={<HeaderAction />}
      primary={primary}
      secondary={secondary}
    />
  )
}
