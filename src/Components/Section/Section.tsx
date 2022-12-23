import { mergeClasses } from "Theme"
import useStyles from "./Section.styles"
import SectionProps from "./SectionProps"

export default function Section(props: SectionProps) {
  const { background, children, fill } = props
  const classes = useStyles()

  let backgroundColorClass: string

  switch (background) {
    case "light":
      backgroundColorClass = classes.backgroundLight
      break
    case "lighter":
      backgroundColorClass = classes.backgroundLighter
      break
    case "main":
      backgroundColorClass = classes.backgroundMain
      break
    case "dark":
      backgroundColorClass = classes.backgroundDark
      break
    case "darker":
      backgroundColorClass = classes.backgroundDarker
      break
    default:
      backgroundColorClass = classes.backgroundLight
  }

  return (
    <section
      className={mergeClasses(
        classes.root,
        backgroundColorClass,
        fill ? classes.fill : undefined
      )}
    >
      <div className={classes.content}>{children}</div>
    </section>
  )
}
