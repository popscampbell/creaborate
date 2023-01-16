import { setNavigatorSections } from "@/state/globalSlice"
import { useAppDispatch, useAppSelector } from "@/state/hooks"
import { NavigatorLink } from "@/state/types"
import AssignmentIcon from "@mui/icons-material/Assignment"
import ContactsIcon from "@mui/icons-material/Contacts"
import DashboardIcon from "@mui/icons-material/Dashboard"
import GroupIcon from "@mui/icons-material/Group"
import ImageIcon from "@mui/icons-material/Image"
import PersonIcon from "@mui/icons-material/Person"
import RsvpIcon from "@mui/icons-material/Rsvp"
import { useEffect } from "react"
import Page from "./Page"

export default function UserPage(props: { title?: string; children?: any }) {
  const { title, children } = props

  const dispatch = useAppDispatch()

  const { invitations } = useAppSelector((state) => state.user)

  const navigatorSections: NavigatorLink[] = [
    { to: "/user", label: "Dashboard", icon: <DashboardIcon /> },
    { to: "/", label: "Profile", icon: <PersonIcon /> },
    { to: "/user/teams", label: "Teams", icon: <GroupIcon /> },
    { to: "/", label: "Tasks", icon: <AssignmentIcon /> },
    { to: "/", label: "Images", icon: <ImageIcon /> },
    { to: "/", label: "Contacts", icon: <ContactsIcon /> },
    {
      to: "/",
      label: "Invitations",
      icon: <RsvpIcon />,
      badgeContent: invitations.length,
      title: `${invitations} new invitations`
    }
  ]

  useEffect(() => {
    dispatch(setNavigatorSections(navigatorSections))
  }, [])

  return <Page title={title}>{children}</Page>
}
