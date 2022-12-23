import { useAuthenticator } from "@aws-amplify/ui-react"
import { Skeleton } from "@mui/material"
import TeamStore from "DataStores/TeamDataStore/TeamDataStore"
import UserProfileDataStore from "DataStores/UserProfileDataStore"
import {
  AboutPage,
  AdminPage,
  DashboardPage,
  HomePage,
  NotFoundPage,
  TeamPage,
  UserProfilePage
} from "Pages"
import { Navigate, Route, Routes, useSearchParams } from "react-router-dom"

function AuthGuard(props: { children: any }) {
  const authenticator = useAuthenticator()

  return authenticator.authStatus === "authenticated" ? (
    props.children
  ) : (
    <Navigate to="/" />
  )
}

function UserProfileGuard(props: { children: any }) {
  const { user } = useAuthenticator()
  const hasUserProfile = UserProfileDataStore.useHasUserProfile(
    user?.username || ""
  )

  switch (hasUserProfile) {
    case "C":
      return <Skeleton variant="rectangular" />
    case "N":
      return <Navigate to="/userProfile" />
    default:
      return props.children
  }
}

function TeamGuard(props: { children: any }) {
  const [params] = useSearchParams()
  const teamId = params.get("id")

  const { user } = useAuthenticator()
  const userId = user.username || ""
  const teamAuthStatus = TeamStore.useTeamAuthStatus(userId, teamId || "")

  switch (teamAuthStatus) {
    case "C":
      return <Skeleton variant="rectangular" />
    case "N":
      return <Navigate to="/dashboard" />
    default:
      return props.children
  }
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        index
        element={
          <UserProfileGuard>
            <HomePage />
          </UserProfileGuard>
        }
      />
      <Route
        path="about"
        element={
          <UserProfileGuard>
            <AboutPage />
          </UserProfileGuard>
        }
      />
      <Route
        path="admin"
        element={
          <AuthGuard>
            <UserProfileGuard>
              <AdminPage />
            </UserProfileGuard>
          </AuthGuard>
        }
      />
      <Route
        path="dashboard"
        element={
          <AuthGuard>
            <UserProfileGuard>
              <DashboardPage />
            </UserProfileGuard>
          </AuthGuard>
        }
      />
      <Route
        path="team"
        element={
          <AuthGuard>
            <UserProfileGuard>
              <TeamGuard>
                <TeamPage />
              </TeamGuard>
            </UserProfileGuard>
          </AuthGuard>
        }
      />
      <Route
        path="userProfile"
        element={
          <AuthGuard>
            <UserProfilePage />
          </AuthGuard>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
