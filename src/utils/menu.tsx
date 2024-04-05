import { Apartment, Inbox, Mail } from "@mui/icons-material";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import Link from "next/link";
const route = [
  {
    key: 1,
    name: "All Products",
    icon: <Apartment />,
    link: "dashboard/all-products",
  },
];

export const drawer = (
  <div>
    <Divider />
    <List>
      {route.map(({ key, name, icon, link }) => (
        <ListItem key={key} disablePadding>
          <Link href={link} style={{ textDecoration: "none", color: "grey" }}>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItemButton>
          </Link>
        </ListItem>
      ))}
    </List>
  </div>
);
