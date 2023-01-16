import Layout from "@/components/layout"
import { setNavigatorSections } from "@/state/globalSlice"
import { useAppDispatch } from "@/state/hooks"
import { NavigatorLink } from "@/state/types"
import { Flex } from "@aws-amplify/ui-react"
import AssignmentIcon from "@mui/icons-material/Assignment"
import ContactsIcon from "@mui/icons-material/Contacts"
import DashboardIcon from "@mui/icons-material/Dashboard"
import GroupIcon from "@mui/icons-material/Group"
import ImageIcon from "@mui/icons-material/Image"
import PersonIcon from "@mui/icons-material/Person"
import RsvpIcon from "@mui/icons-material/Rsvp"

import { Inter } from "@next/font/google"
import { useEffect } from "react"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const dispatch = useAppDispatch()

  const navigatorSections: NavigatorLink[] = [
    { to: "/", label: "Dashboard", icon: <DashboardIcon /> },
    { to: "/", label: "Profile", icon: <PersonIcon /> },
    { to: "/", label: "Teams", icon: <GroupIcon /> },
    { to: "/", label: "Tasks", icon: <AssignmentIcon /> },
    { to: "/", label: "Images", icon: <ImageIcon /> },
    { to: "/", label: "Contacts", icon: <ContactsIcon /> },
    {
      to: "/",
      label: "Invitations",
      icon: <RsvpIcon />,
      badgeContent: 4,
      title: "4 new"
    }
  ]

  useEffect(() => {
    dispatch(setNavigatorSections(navigatorSections))
  }, [])

  return (
    <Layout>
      <Flex></Flex>
    </Layout>
  )
}
