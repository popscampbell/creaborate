import Layout from "src/components/Layout"
import PageSection from "src/components/PageSection"
import UserPage from "src/components/UserPage"
import { useAppSelector } from "src/state/hooks"

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
