import { styled } from "@mui/material/styles";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
  },
});

export default function SideMenu() {
  return (
    <Drawer variant="permanent">
      <Stack
        sx={{
          justifyContent: "center",
          flex: 1,
          gap: 2,
          p: 2,
        }}
      >
        <Button variant="contained">Вакансии</Button>
        <Button variant="contained">Курсы</Button>
      </Stack>
    </Drawer>
  );
}
