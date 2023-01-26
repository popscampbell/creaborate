import ContactsIcon from "@mui/icons-material/ContactsSharp"
import DashboardIcon from "@mui/icons-material/HomeSharp"
import GroupIcon from "@mui/icons-material/GroupSharp"
import ImageIcon from "@mui/icons-material/PhotoLibrarySharp"
import SettingsIcon from "@mui/icons-material/SettingsSharp"
import TaskIcon from "@mui/icons-material/TaskAltSharp"
import EventIcon from "@mui/icons-material/TheatersSharp"
import { TeamDataLoader } from "data/TeamDataLoader"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { setNavigatorSections } from "state/globalSlice"
import { useAppDispatch, useAppSelector } from "state/hooks"
import Page, { PageProps } from "../app/Page"
import Chrome from "../app/Chrome"
import { Loader } from "@aws-amplify/ui-react"
import NotFoundPage from "../app/NotFoundPage"

type TeamPageProps = Omit<PageProps, "context">

export default function TeamPage(props: TeamPageProps) {
  const { query } = useRouter()
  const teamID = Array.isArray(query.teamID) ? query.teamID?.[0] : query.teamID

  function TeamContent(props: TeamPageProps) {
    const { team } = useAppSelector((state) => state.team)
    const dispatch = useAppDispatch()

    useEffect(() => {
      function getUrl(page?: string) {
        return `/team/${team?.id}${page && `/${page}`}`
      }

      team &&
        dispatch(
          setNavigatorSections([
            { to: getUrl(), label: "Overview", icon: <DashboardIcon /> },
            {
              to: getUrl("settings"),
              label: "Settings",
              icon: <SettingsIcon />
            },
            { to: getUrl("members"), label: "Members", icon: <GroupIcon /> },
            { to: getUrl("tasks"), label: "Tasks", icon: <TaskIcon /> },
            { to: getUrl("images"), label: "Images", icon: <ImageIcon /> },
            {
              to: getUrl("contacts"),
              label: "Contacts",
              icon: <ContactsIcon />
            },
            { to: getUrl("events"), label: "Events", icon: <EventIcon /> }
          ])
        )
    }, [team])

    return team ? (
      <Page context={team?.name} {...props} />
    ) : (
      <NotFoundPage message={`Team ${teamID} not found.`} />
    )
  }

  return (
    <Chrome>
      {teamID ? (
        <TeamDataLoader teamID={teamID}>
          <TeamContent {...props} />
        </TeamDataLoader>
      ) : (
        <Loader />
      )}
    </Chrome>
  )
}
