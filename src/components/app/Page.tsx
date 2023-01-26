import { Flex } from "@aws-amplify/ui-react"
import { Box, Button, Toolbar, Typography, useTheme } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import { ActionButtonProps } from "./types"
import AppBreadcrumbs from "./AppBreadcrumbs"
import ActionButton from "./ActionButton"

export interface PageProps {
  context?: string
  title?: string
  onDelete?: () => void
  onEdit?: () => void
  children?: any
  actions?: ActionButtonProps[]
  dismissable?: boolean
}

export default function Page(props: PageProps) {
  const { context, title, children, onDelete, onEdit, actions, dismissable } =
    props
  const theme = useTheme()

  return (
    <Box flexGrow={1} padding={3}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h1">{title}</Typography>
        {actions && (
          <Toolbar>
            {actions.map((action, key) => (
              <ActionButton key={key} {...action} />
            ))}
          </Toolbar>
        )}
      </Box>
      {children}
    </Box>
  )

  return (
    <Flex
      className="page"
      direction="column"
      grow={1}
      padding={theme.spacing(2)}
    >
      <Flex
        role="heading"
        className="title"
        aria-level={1}
        ariaLabel={`${context} ${title}`}
      >
        {title && (
          <Typography
            role="presentation"
            fontSize={theme.typography.fontSize * 3}
          >
            {title}
          </Typography>
        )}
      </Flex>
      <Flex className="subheading">
        <Flex grow={1}>
          {context && (
            <Typography
              role="presentation"
              fontSize={theme.typography.fontSize * 2}
            >
              {context}
            </Typography>
          )}
        </Flex>
        {(onEdit || onDelete || actions) && (
          <Flex className="toolbar" role="toolbar">
            <Toolbar variant="dense">
              <>
                {onEdit && (
                  <Button
                    variant="outlined"
                    title="edit"
                    startIcon={<EditIcon />}
                  >
                    Edit
                  </Button>
                )}
                {onDelete && (
                  <Button
                    variant="outlined"
                    title="delete"
                    startIcon={<DeleteIcon />}
                  >
                    Delete
                  </Button>
                )}
                {actions}
              </>
            </Toolbar>
          </Flex>
        )}
      </Flex>
      {children}
    </Flex>
  )
}
