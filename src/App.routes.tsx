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

  return (
    <>
      {authenticator.authStatus === "configuring" &&
        (authenticator.route === "forceNewPassword" ||
          authenticator.route === "setup") &&
        props.children}
      {authenticator.authStatus === "configuring" &&
        authenticator.route !== "setup" && <Skeleton />}
      {authenticator.authStatus === "authenticated" && props.children}
      {authenticator.authStatus === "unauthenticated" && <Navigate to="/" />}
    </>
  )
}

function UserProfileGuard(props: { children: any }) {
  const authenticator = useAuthenticator()
  const hasUserProfile = UserProfileDataStore.useHasUserProfile(
    authenticator.user?.username || ""
  )

  return (
    <>
      {(authenticator.authStatus === "configuring" ||
        hasUserProfile === "C") && <Skeleton />}
      {hasUserProfile === "Y" && props.children}
      {hasUserProfile === "N" && <Navigate to="/userProfile" />}
    </>
  )
}

function TeamGuard(props: { children: any }) {
  const [params] = useSearchParams()
  const teamId = params.get("id")

  const authenticator = useAuthenticator()
  const userProfile = UserProfileDataStore.useUserProfile(
    authenticator.user?.username || ""
  )
  const teamAuthStatus = TeamStore.useTeamAuthStatus(
    userProfile?.id || "",
    teamId || ""
  )

  return (
    <>
      {(authenticator.authStatus === "configuring" ||
        teamAuthStatus === "C") && <Skeleton />}
      {teamAuthStatus === "Y" && props.children}
      {teamAuthStatus === "N" && <Navigate to="/dashboard" />}
    </>
  )
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="about" element={<AboutPage />} />
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
