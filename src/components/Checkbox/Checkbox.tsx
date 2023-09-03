import Checkbox from '@mui/material/Checkbox'
import { styled } from '@mui/material'

const CustomCheckbox = styled(Checkbox)(({ theme }: any) => ({
  color: theme.status.danger,
  '&.Mui-checked': {
    color: theme.status.danger,
  },
}));

export default function CustomStyles() {
  return (
      <CustomCheckbox defaultChecked />
  );
}
