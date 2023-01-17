import { TeamDataLoader } from "src/data/TeamDataLoader"
import { setNavigatorSections } from "src/state/globalSlice"
import { useAppDispatch, useAppSelector } from "src/state/hooks"
import AssignmentIcon from "@mui/icons-material/Assignment"
import ContactsIcon from "@mui/icons-material/Contacts"
import DashboardIcon from "@mui/icons-material/Dashboard"
import GroupIcon from "@mui/icons-material/Group"
import ImageIcon from "@mui/icons-material/Image"
import SettingsIcon from "@mui/icons-material/Settings"
import EventIcon from "@mui/icons-material/Theaters"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Page, { PageProps } from "./Page"

function TeamContent(props: Omit<PageProps, "title">) {
  const { team } = useAppSelector((state) => state.team)
  const dispatch = useAppDispatch()

  useEffect(() => {
    function getUrl(page?: string) {
      return `/team/${team?.id}${page && `/${page}`}`
    }

    team &&
      dispatch(
        setNavigatorSections([
          { to: getUrl(), label: "Dashboard", icon: <DashboardIcon /> },
          { to: getUrl("settings"), label: "Settings", icon: <SettingsIcon /> },
          { to: getUrl("members"), label: "Members", icon: <GroupIcon /> },
          { to: getUrl("tasks"), label: "Tasks", icon: <AssignmentIcon /> },
          { to: getUrl("images"), label: "Images", icon: <ImageIcon /> },
          { to: getUrl("contacts"), label: "Contacts", icon: <ContactsIcon /> },
          { to: getUrl("events"), label: "Events", icon: <EventIcon /> }
        ])
      )
  }, [team])

  return <Page title={team?.name} {...props} />
}

export default function TeamPage(props: Omit<PageProps, "title">) {
  const { query } = useRouter()
  const teamID = Array.isArray(query.teamID) ? query.teamID?.[0] : query.teamID

  return teamID ? (
    <TeamDataLoader teamID={teamID}>
      <TeamContent {...props} />
    </TeamDataLoader>
  ) : (
    <></>
  )
}
