import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";

export const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <div className="login">
      <div className="login_logo">
        <img src="images/logo.svg" alt="LOGO" />
      </div>

      <div className="login_section">
        <div className="login_section--one">
          <img
            src="images/login-image.svg"
            alt="login background"
            className="login_image"
          />
        </div>

        <div className="login_section--two">
          <h1 className="header">Welcome!</h1>
          <p className="text-primary">Enter details to login</p>
          <FormControl sx={{ width: "100%", marginTop: "6rem" }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Email"
              sx={{ marginBottom: "2.5rem" }}
            />
            <TextField
              fullWidth
              variant="outlined"
              type={showPassword ? "text" : "password"}
              sx={{ marginBottom: "2.5rem" }}
              InputProps={{
                endAdornment: (
                  <IconButton size="small" onClick={handleClickShowPassword}>
                    {showPassword ? "HIDE" : "SHOW"}
                  </IconButton>
                ),
              }}
              placeholder="Password"
            />
            <p className="text-secondary">FORGOT PASSWORD?</p>

            <Button variant="contained">LOG IN</Button>
          </FormControl>
        </div>
      </div>
    </div>
  );
};
