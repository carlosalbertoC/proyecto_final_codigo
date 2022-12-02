import ImageAvatars from "./ProfileImage";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { get } from "../../services";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const ProfileComponents = () => {
  const { user } = useContext(AuthContext);

  return (
    <Card sx={{ width: "500px", margin: "50px auto" }}>
      <CardContent>
        <ImageAvatars />
        <Typography variant="h2" gutterBottom textAlign="center">
          Hola {user.nombre}
        </Typography>
        <Typography variant="h5" gutterBottom textAlign="center">
          {user.email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProfileComponents;
