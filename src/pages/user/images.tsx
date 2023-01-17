import Layout from "components/Layout"
import PageSection from "components/PageSection"
import UserPage from "components/UserPage"
import { useAppSelector } from "state/hooks"

export default function UserImagesPage() {
  const { images } = useAppSelector((state) => state.user)

  return (
    <Layout>
      <UserPage subtitle="Images">
        <PageSection items={images} renderLabel={(image) => image.id} />
      </UserPage>
    </Layout>
  )
}
