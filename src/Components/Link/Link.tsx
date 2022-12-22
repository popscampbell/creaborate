import { mergeClasses } from "Theme"
import { NavLink } from "react-router-dom"
import useStyles from "./Link.styles"
import LinkProps from "./LinkProps"

export default function Link(props: LinkProps) {
  const { to, children, className, inverted, highlightActive } = props
  const classes = useStyles()

  const rootClass = inverted
    ? mergeClasses(classes.root, classes.inverted)
    : classes.root

  function navLinkStyle({ isActive }: { isActive: boolean }) {
    return isActive && highlightActive
      ? mergeClasses(rootClass, classes.active, className)
      : mergeClasses(rootClass, className)
  }

  return (
    <NavLink className={navLinkStyle} to={to}>
      {children}
    </NavLink>
  )
}
