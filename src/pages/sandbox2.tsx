import UserPage from "@/components/user/UserPage"
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField
} from "@mui/material"
import { useForm } from "react-hook-form"

export default function Sandbox2() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  function onSubmit(data: any) {}

  return (
    <UserPage>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <FormControl>
            <FormControlLabel
              label="My field"
              control={<TextField {...register("myfield", {})} />}
            />
          </FormControl>

          <FormControl>
            <Button variant="outlined" onClick={handleSubmit(onSubmit)}>
              Submit
            </Button>
          </FormControl>
        </FormGroup>
      </Box>
    </UserPage>
  )
}
