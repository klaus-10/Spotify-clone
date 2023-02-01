import React, { useState } from "react";

//material components
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

//icon
import { InputAdornment } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";

import "./Log.css";

export default function Log() {
  const [login, setLogin] = useState(false);

  const handleLoginMockUp = () => {
    setLogin(!login);
  };

  return (
    <div className="log-container">
      <div className="log-container-box">
        <div className="log-box">
          {login ? (
            <div className="register-box">
              <div className="register-title">
                <h1>Login</h1>
              </div>

              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                placeholder="e-mail"
                style={{ marginTop: "20px" }}
                fullWidth={true}
                variant="standard"
              />

              <TextField
                type="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon />
                    </InputAdornment>
                  ),
                }}
                placeholder="password"
                fullWidth={true}
                style={{ marginTop: "20px" }}
                variant="standard"
              />

              <div style={{ width: "100%" }}>
                <Button
                  fullWidth={true}
                  className="register-btn"
                  style={{ marginTop: "20px" }}
                  variant="contained"
                >
                  LOGIN
                </Button>
                <div className="sign-up">
                  <h5>Not registered yet?</h5>
                  <p onClick={handleLoginMockUp}>sign up</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="register-box">
              <div className="register-title">
                <h1>Register</h1>
              </div>

              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
                placeholder="username"
                style={{ marginTop: "20px" }}
                fullWidth={true}
                variant="standard"
              />

              <TextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                placeholder="e-mail"
                style={{ marginTop: "20px" }}
                fullWidth={true}
                variant="standard"
              />

              <TextField
                type="password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon />
                    </InputAdornment>
                  ),
                }}
                placeholder="password"
                fullWidth={true}
                style={{ marginTop: "20px" }}
                variant="standard"
              />

              <div style={{ width: "100%" }}>
                <Button
                  fullWidth={true}
                  className="register-btn"
                  style={{ marginTop: "20px" }}
                  variant="contained"
                >
                  REGISTER
                </Button>
                <div className="sign-up">
                  <h5>Have you an account?</h5>
                  <p onClick={handleLoginMockUp}>login</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
