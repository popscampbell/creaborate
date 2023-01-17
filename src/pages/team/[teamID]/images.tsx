import Layout from "src/components/Layout"
import PageSection from "src/components/PageSection"
import TeamPage from "src/components/TeamPage"
import { useAppSelector } from "src/state/hooks"

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
