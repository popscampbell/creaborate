import Layout from "@/components/app/Layout"
import PageSection from "@/components/app/PageSection"
import TeamPage from "@/components/team/TeamPage"
import { useAppSelector } from "state/hooks"

export default function TeamImages() {
  const { images } = useAppSelector((state) => state.team)

  return (
    <Layout>
      <TeamPage title="Images">
        <PageSection items={images} renderLabel={(image) => image.id} />
      </TeamPage>
    </Layout>
  )
}
