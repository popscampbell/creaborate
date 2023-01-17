import Layout from "src/components/Layout"
import TeamPage from "src/components/TeamPage"
import { useAppSelector } from "src/state/hooks"

export default function TeamSettingsPage() {
  return (
    <Layout>
      <TeamPage subtitle="Settings" />
    </Layout>
  )
}
