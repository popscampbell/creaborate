import Layout from "@/components/Layout"
import TeamPage from "@/components/TeamPage"
import { useAppSelector } from "@/state/hooks"

export default function TeamSettingsPage() {
  return (
    <Layout>
      <TeamPage subtitle="Settings" />
    </Layout>
  )
}
