import * as React from "react"
import Typography from "@mui/material/Typography"
import Breadcrumbs from "@mui/material/Breadcrumbs"
import Link from "next/Link"
import { useAppSelector } from "@/state/hooks"
import { CreaborateContext } from "@/state/types"
import { useRouter } from "next/router"
import { capitalize } from "@mui/material"

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault()
  console.info("You clicked a breadcrumb.")
}

export default function AppBreadcrumbs() {
  const { username, profile } = useAppSelector((state) => state.user)
  const { team } = useAppSelector((state) => state.team)
  const router = useRouter()

  const routeParts = router.route
    .toLowerCase()
    .split("/")
    .filter((r) => r !== "")
  const isTeam = routeParts[0] === "team"

  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/user">
          {profile?.name ?? capitalize(username)}
        </Link>
        {isTeam && team && (
          <Link color="inherit" href={`/team/${team.id}`}>
            {team.name}
          </Link>
        )}
        {routeParts[1] && (
          <Typography color="text.primary">
            {capitalize(routeParts[1])}
          </Typography>
        )}
      </Breadcrumbs>
    </div>
  )
}
