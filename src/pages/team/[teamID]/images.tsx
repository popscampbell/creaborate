import Layout from "components/Layout"
import PageSection from "components/PageSection"
import TeamPage from "components/TeamPage"
import { useAppSelector } from "state/hooks"

export default function TeamImages() {
  const { images } = useAppSelector((state) => state.team)

  return (
    <Layout>
      <TeamPage subtitle="Images">
        <PageSection items={images} renderLabel={(image) => image.id} />
      </TeamPage>
    </Layout>
  )
}
