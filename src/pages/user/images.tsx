import PageSection from "@/components/app/PageSection"
import UserPage from "@/components/user/UserPage"
import { useAppSelector } from "state/hooks"

export default function UserImagesPage() {
  const { images } = useAppSelector((state) => state.user)

  return (
    <UserPage title="Images">
      <PageSection items={images} renderLabel={(image) => image.id} />
    </UserPage>
  )
}
