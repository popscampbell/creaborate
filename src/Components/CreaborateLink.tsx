import { Link } from "@aws-amplify/ui-react"
import React from "react"
import { LinkProps, useHref, useLinkClickHandler } from "react-router-dom"

const CreaborateLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ onClick, replace = false, state, target, to, ...rest }, ref) => {
    let href = useHref(to)
    let handleClick = useLinkClickHandler(to, {
      replace,
      state,
      target
    })

    return (
      <Link
        {...rest}
        children={rest.children}
        onClick={(event) => {
          onClick?.(event)
          if (!event.defaultPrevented) {
            handleClick(event)
          }
        }}
        href={href}
        ref={ref}
        target={target}
      />
    )
  }
)

export default CreaborateLink
