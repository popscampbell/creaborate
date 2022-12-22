import { useAuthenticator } from "@aws-amplify/ui-react"
import { Skeleton } from "@mui/material"
// import { useTeamAuthStatus } from "Hooks"
// import {
//   AboutPage,
//   AdminPage,
//   DashboardPage,
//   HomePage,
//   NotFoundPage,
//   TeamPage,
//   UserProfilePage,
// } from "Pages"
import { Navigate, Route, Routes, useSearchParams } from "react-router-dom"

function AuthGuard(props: { children: any }) {
  const authenticator = useAuthenticator()

  return authenticator.authStatus === "authenticated" ? (
    props.children
  ) : (
    <Navigate to="/" replace />
  )
}

// function TeamGuard(props: { children: any }) {
//   const [params] = useSearchParams()
//   const teamId = params.get("id")

//   const { user } = useAuthenticator()
//   const userId = user.username || ""
//   const teamAuthStatus = useTeamAuthStatus(userId, teamId || "")

//   switch (teamAuthStatus) {
//     case "C":
//       return <Skeleton variant="rectangular" />
//     case "N":
//       return <Navigate to="/dashboard" />
//     default:
//       return props.children
//   }
// }

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<h1>Home</h1>} />
      {/* <Route index element={<HomePage />} /> */}
      {/* <Route path="about" element={<AboutPage />} />
      <Route
        path="admin"
        element={
          <AuthGuard>
            <AdminPage />
          </AuthGuard>
        }
      />
      <Route path="dashboard" element={<DashboardPage />} />
      <Route
        path="team"
        element={
          <AuthGuard>
            <TeamGuard>
              <TeamPage />
            </TeamGuard>
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
      /> */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  )
}
