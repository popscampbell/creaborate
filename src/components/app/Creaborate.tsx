import Typography from "@mui/material/Typography"

export enum CreaborateVariant {
  HEADER = "header",
  BODY = "body"
}

export default function Creaborate(props: { variant?: CreaborateVariant }) {
  const { variant } = props

  function getVariant() {
    switch (variant) {
      case CreaborateVariant.HEADER:
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
