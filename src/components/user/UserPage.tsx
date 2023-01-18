import { setNavigatorSections } from "state/globalSlice"
import { useAppDispatch, useAppSelector } from "state/hooks"
import AssignmentIcon from "@mui/icons-material/Assignment"
import ContactsIcon from "@mui/icons-material/Contacts"
import DashboardIcon from "@mui/icons-material/Dashboard"
import GroupIcon from "@mui/icons-material/Group"
import ImageIcon from "@mui/icons-material/Image"
import PersonIcon from "@mui/icons-material/Person"
import RsvpIcon from "@mui/icons-material/Rsvp"
import { useEffect } from "react"
import Page, { PageProps } from "../app/Page"

export default function UserPage(props: Omit<PageProps, "context">) {
  const dispatch = useAppDispatch()

  const { username, profile, invitations } = useAppSelector(
    (state) => state.user
  )

  useEffect(() => {
    dispatch(
      setNavigatorSections([
        { to: "/user", label: "Dashboard", icon: <DashboardIcon /> },
        { to: "/user/profile", label: "Profile", icon: <PersonIcon /> },
        { to: "/user/teams", label: "Teams", icon: <GroupIcon /> },
        { to: "/user/tasks", label: "Tasks", icon: <AssignmentIcon /> },
        { to: "/user/images", label: "Images", icon: <ImageIcon /> },
        { to: "/user/contacts", label: "Contacts", icon: <ContactsIcon /> },
        {
          to: "/user/invitations",
          label: "Invitations",
          icon: <RsvpIcon />,
          badgeContent: invitations.length,
          title: `${invitations} new invitations`
        }
      ])
    )
  }, [invitations])

  return <Page context={profile?.name ?? username} {...props} />
}
