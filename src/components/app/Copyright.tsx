import Typography from "@mui/material/Typography"

export enum CopyrightVariant {
  FOOTER = "footer",
  BODY = "body"
}

export default function Copyright(props: { variant?: CopyrightVariant }) {
  const { variant } = props

  const year = new Date().getFullYear()

  function getVariant() {
    switch (variant) {
      case CopyrightVariant.FOOTER:
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
