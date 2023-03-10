import { UserDataLoader } from "@/data/UserDataLoader"
import { CreaborateContext } from "@/state/types"
import AssignmentIcon from "@mui/icons-material/Assignment"
import ContactsIcon from "@mui/icons-material/Contacts"
import DashboardIcon from "@mui/icons-material/Dashboard"
import GroupIcon from "@mui/icons-material/Group"
import ImageIcon from "@mui/icons-material/Image"
import PersonIcon from "@mui/icons-material/Person"
import RsvpIcon from "@mui/icons-material/Rsvp"
import { useEffect } from "react"
import { setContext, setNavigatorSections } from "state/globalSlice"
import { useAppDispatch, useAppSelector } from "state/hooks"
import Chrome from "../app/Chrome"
import Page, { PageProps } from "../app/Page"

export default function UserPage(props: Omit<PageProps, "context">) {
  const dispatch = useAppDispatch()

  const { username, profile, invitations } = useAppSelector(
    (state) => state.user
  )

  useEffect(() => {
    dispatch(setContext(CreaborateContext.USER))
    dispatch(
      setNavigatorSections([
        {
          to: "/user",
          label: "Dashboard",
          icon: <DashboardIcon />,
          disabled: true
        },
        { to: "/user/profile", label: "Profile", icon: <PersonIcon /> },
        { to: "/user/teams", label: "Teams", icon: <GroupIcon /> },
        {
          to: "/user/tasks",
          label: "Tasks",
          icon: <AssignmentIcon />,
          disabled: true
        },
        {
          to: "/user/images",
          label: "Images",
          icon: <ImageIcon />,
          disabled: true
        },
        {
          to: "/user/contacts",
          label: "Contacts",
          icon: <ContactsIcon />,
          disabled: true
        },
        {
          to: "/user/invitations",
          label: "Invitations",
          icon: <RsvpIcon />,
          badgeContent: invitations.length,
          title: `${invitations} new invitations`,
          disabled: true
        }
      ])
    )
  }, [invitations])

  return (
    <Chrome>
      <UserDataLoader>
        <Page context={profile?.name ?? username} {...props} />
      </UserDataLoader>
    </Chrome>
  )
}
