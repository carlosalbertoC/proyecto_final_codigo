import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import Divider from "@mui/material/Divider";
import ClearIcon from "@mui/icons-material/Clear";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";

import { CartContext } from "../../context/CartContext";

import { CartButton } from "..";
import { useContext } from "react";
import { Image } from "@mui/icons-material";

export default function InsetDividers() {
  const { cart, totalCart, removeCart } = useContext(CartContext);

  return (
    <div>
      <List
        sx={{
          width: "100%",
          maxWidth: 500,
          bgcolor: "background.paper",
          margin: "0 auto",
        }}
      >
        {cart.length > 0 &&
          cart.map((product, index) => (
            <ListItem>
              <ListItemAvatar>
                <Avatar variant="rounded">
                  <LaptopChromebookIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={product.name}
                secondary={`$ ${product.precio}`}
              />
              <ListItemAvatar onClick={() => removeCart(product.id)}>
                <Tooltip title="Delete">
                  <IconButton>
                    <Avatar>
                      <ClearIcon />
                    </Avatar>
                  </IconButton>
                </Tooltip>
              </ListItemAvatar>
            </ListItem>
          ))}

        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemText
            primary={`$${totalCart()}`}
            secondary="Monto a pagar"
            sx={{ textAlign: "right" }}
          />
        </ListItem>
        <CartButton />
      </List>
    </div>
  );
}
