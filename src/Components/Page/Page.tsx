import { useDeviceSize } from "Hooks"
import { mergeClasses } from "Theme"
import useStyles from "./Page.styles"
import PageProps from "./PageProps"

export default function Page(props: PageProps) {
  const { children, noPageNameInTitle, title } = props
  const classes = useStyles()

  document.title = noPageNameInTitle ? "Creaborate" : `Creaborate - ${title}`

  const deviceSize = useDeviceSize()
  const rootClass =
    deviceSize !== "full"
      ? mergeClasses(classes.root, classes.rootCompact)
      : classes.root

  return <div className={rootClass}>{children}</div>
}
