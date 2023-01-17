import Typography from "@mui/material/Typography"

export default function Copyright(props: { variant?: "footer" | "body" }) {
  const { variant } = props

  const year = new Date().getFullYear()

  function getVariant() {
    switch (variant) {
      case "footer":
        return "caption"
      default:
        return "body1"
    }
  }

  return (
    <Typography variant={getVariant()}>
      &copy; Michael Campbell {year}
    </Typography>
  )
}
