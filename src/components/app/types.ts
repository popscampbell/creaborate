import { NavigatorLink } from "@/state/types"

export interface ActionButtonProps {
  text: string
  onClick: () => void
  title?: string
  icon?: React.ReactNode
}

export type AppNavigatorLinkProps = NavigatorLink & { disabled?: boolean }