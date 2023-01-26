import TeamForm from "@/components/team/TeamForm"
import TeamPage from "@/components/team/TeamPage"
import { useAppSelector } from "@/state/hooks"

export default function TeamSettingsPage() {
  const { team } = useAppSelector((state) => state.team)

  return (
    <TeamPage title="Settings">{team && <TeamForm team={team} />}</TeamPage>
  )
}
