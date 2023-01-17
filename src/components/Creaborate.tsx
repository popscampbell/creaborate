import Typography from "@mui/material/Typography"

export default function Creaborate(props: { variant?: "header" | "body" }) {
  const { variant } = props

  function getVariant() {
    switch (variant) {
      case "header":
        return "h4"
      default:
        return "body1"
    }
  }

  return (
    <Typography variant={getVariant()}>
      Creaborate<sup style={{ fontSize: "small" }}>&reg;</sup>
    </Typography>
  )
}
