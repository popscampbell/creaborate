import UserPage from "@/components/user/UserPage"
import Typography from "@mui/material/Typography"
import Page from "./Page"

export default function NotFoundPage(props: { message?: string }) {
  const text = props.message ?? "The requested page was not found."

  return (
    <Page title="404">
      <Typography>{text}</Typography>
    </Page>
  )
}
