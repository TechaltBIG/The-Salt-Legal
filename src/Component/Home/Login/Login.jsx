import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import "./Login.css";
import {
  Card,
  CardContent,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
  Checkbox,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faGooglePlus,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useRecoilState } from "recoil";
import { jwtTokenState, userIdState } from "../../auth/atoms";
import toast from "react-hot-toast";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [jwtToken, setJwtToken] = useRecoilState(jwtTokenState);
  const [userId, setUserId] = useRecoilState(userIdState);
  // useEffect(() => {
  //   // Load saved email and password from localStorage when component mounts
  //   const savedEmail = localStorage.getItem("savedEmail");
  //   const savedPassword = localStorage.getItem("savedPassword");

  //   // if (savedEmail && savedPassword && rememberMe) {
  //   //   setEmail(savedEmail);
  //   //   setPassword(savedPassword);
  //   // }
  // }, [rememberMe]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://the-salt-legal-backend.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        console.log("Response is", response);
        console.log("Login successful", responseData);

        const token = responseData.data.token;
        const email = responseData.data.email;
        const userId = responseData.data.userId;
        const name = responseData.data.name; // Add name
        const isDeleted = responseData.data.isDeleted; // Add isDeleted
        const choosenPlan = responseData.data.choosenPlan; // Add choosenPlan
        const isPaidUser = responseData.data.isPaidUser; // Add isPaidUser

        console.log("Logged in successfully", token, userId);

        // Store details in session storage
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("userId", userId);
        sessionStorage.setItem("name", name); // Store name
        sessionStorage.setItem("isDeleted", isDeleted); // Store isDeleted
        sessionStorage.setItem("choosenPlan", choosenPlan); // Store choosenPlan
        sessionStorage.setItem("isPaidUser", isPaidUser); // Store isPaidUser

        setJwtToken(token);
        setUserId(userId);
        setSuccessMessage("Logged successfully");

        // Clear input fields
        setEmail("");
        setPassword("");
        setMessage("");

        // Navigate to the desired page after successful login
        navigate("/package");
      } else {
        console.error("Login failed", responseData);
        setMessage(
          `Login Failed: ${
            responseData?.message || "An unknown error occurred."
          }`
        );
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("An unexpected error has occurred.");
    }
  };

  return (
    <div className="section-div">
      <Card
        className="section-card"
        sx={{
          borderRadius: "10px",
          boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
          background: "white",
          opacity: "0.8",
          backgroundSize: "cover",
          position: "absolute",
        }}
      >
        <CardContent>
          <Box
            sx={{
              m: 8,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              className="card-heading"
              sx={{
                color: "#404040",
                fontSize: "18px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Log In with Us
            </Typography>
            {message && (
              <Typography variant="body1" color="error">
                {message}
              </Typography>
            )}
            {successMessage && (
              <Typography
                variant="body2"
                style={{ color: "green", textAlign: "center" }}
              >
                {successMessage}
              </Typography>
            )}
            <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
              <Input
                id="standard-adornment-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: "35ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // endAdornment={
                //   <InputAdornment position="end">
                //     <IconButton
                //       aria-label="toggle password visibility"
                //       onClick={handleClickShowPassword}
                //       onMouseDown={handleMouseDownPassword}
                //     >

                //     </IconButton>
                //   </InputAdornment>
                // }
              />
            </FormControl>
            {/* <Checkbox
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            Remember me
            <br /> */}

            <Link to="/forgotpassword" className="div-p">
              Forgot your password?
            </Link>
            <div className="div-button">
              <Button
                variant="contained"
                sx={{ justifyContent: "center", m: 1 }}
                onClick={handleLogin}
              >
                LogIn
              </Button>
            </div>

            {/* <Button variant="contained" sx={{justifyContent:'center', m: 1, borderRadius:'100%'}}></Button>
             */}
            <Link to="/register" className="div-p1">
              Don't have account? Register Here
            </Link>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default Login;
