import * as React from "react";
import Typography from "./modules/components/Typography";
import AppFooter from "./modules/views/AppFooter";
import AppAppBar from "./modules/views/AppAppBar";
import AppForm from "./modules/views/AppForm";
import withRoot from "./modules/withRoot";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Call, EmailRounded } from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

function Contact() {
  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
          Você quer entrar em contato comigo?
          </Typography>
          <Typography variant="body2" align="center">
          Para qualquer informação pode me contactar em:

          </Typography>
          <br />
        </React.Fragment>
        <List
          sx={{
            width: '100%',
            bgcolor: 'background.paper',
          }}
        >
          <ListItem>
            <ListItemButton component="a" href="mailto:talitadeoa@gmail.com">
              <ListItemAvatar>
                <Avatar>
                  <EmailRounded />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Envie um e-mail" secondary="talitadeoa@gmail.com" />
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemButton component="a" href="tel:+5584998026288">
              <ListItemAvatar>
                <Avatar>
                  <Call />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Telefone" secondary="+55 84998026288" />
            </ListItemButton>
          </ListItem>
        </List>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Contact);
