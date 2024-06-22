import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { useInputValidation, useStrongPassword } from "6pp";
import { styled } from '@mui/material';
import { VisuallyHiddenInput } from '../components/styles/styledComponent';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [avatarImage, setAvatarImage] = useState(null); // State to hold selected avatar image

    const name = useInputValidation("");
    const bio = useInputValidation("");
    const password = useStrongPassword();
    const username = useInputValidation("");


    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAvatarImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handellogin = () => {
        // Login logic
    };

    const handelSignUp = () => {
        // Signup logic
    };

    const toggleLogin = () => setIsLogin(prev => !prev);

    return (
        <div style={{
            backgroundImage: 'linear-gradient(rgb(255,255,209), rgb(249,149,159))',
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: 'center',
            padding: 0,
            overflow: "hidden",
        }}>
            <Container component={"main"} maxWidth="xs"
                sx={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: 'center',
                    padding: 0, // Remove default padding
                    overflow: "hidden", // Prevents scrollbars
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        padding: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        borderRadius: 10, // Border radius added here
                    }}
                >
                    {
                        isLogin ? (
                            <>
                                <Typography variant='h5'> Login</Typography>
                                <form
                                    style={{
                                        width: "100%",
                                        marginTop: "1rem",
                                        borderRadius: "50%"
                                    }}
                                    onSubmit={handellogin}
                                >
                                    <TextField
                                        required
                                        fullWidth
                                        label="username"
                                        margin="normal"
                                        variant="outlined"
                                        value={username.value}
                                        onChange={username.changeHandler}
                                    />
                                    <TextField
                                        required
                                        fullWidth
                                        label="password"
                                        margin="normal"
                                        type="password"
                                        variant="outlined"
                                        value={password.value}
                                        onChange={password.changeHandler}
                                    />
                                    <Button
                                        sx={{ marginTop: "1rem" }}
                                        fullWidth
                                        variant='contained'
                                        color="primary"
                                        type="submit"
                                    >
                                        Login
                                    </Button>
                                    <Typography textAlign={"center"} m={"1rem"}> OR</Typography>
                                    <Button
                                        sx={{ marginTop: "1rem" }}
                                        variant='text'
                                        fullWidth
                                        onClick={toggleLogin}
                                    >
                                        Register
                                    </Button>
                                </form>
                            </>
                        ) : (
                            <>
                                <Typography variant='h5'> Sign UP</Typography>
                                <form style={{
                                    width: "100%",
                                    marginTop: "1rem"
                                }}
                                    onSubmit={handelSignUp}
                                >
                                    <Stack
                                        position={"relative"}
                                        width={"10rem"}
                                        margin={"auto"}
                                    >
                                        <Avatar
                                            src={avatarImage} // Set Avatar src to display selected image
                                            sx={{
                                                width: "10rem",
                                                height: "10rem",
                                                objectFit: "contain"
                                            }}
                                        />
                                        <IconButton
                                            sx={{
                                               // width:1,
                                                // borderRadius:50,
                                                position: "absolute",
                                                bottom: '0',
                                                right: "0",
                                                color: "white",
                                                bgcolor: "rgba(0 ,0,0,0.5)",
                                                ":hover": {
                                                    bgcolor: "rgba(0 ,0,0,0.8)",
                                                }
                                            }}
                                            component="label"
                                        >
                                            <>
                                                <CameraAltIcon />

                                                <VisuallyHiddenInput type="file" onChange={handleAvatarChange}/>
                                                {/* <input
                                                style={{ 
                                                    // display:"hidden",
                                                    //  border: 0,
                                                    // clip: 'rect(0 0 0 0)',
                                                    // height: 2,
                                                    // margin: -1,
                                                    // overflow: 'hidden',
                                                    // padding: 0,
                                                    // position: 'absolute',
                                                    // whiteSpace: 'nowrap',
                                                    // width: 1
                                            }}
                                                    type="file"
                                                    // className={visuallyHiddenInput}
                                                    onChange={handleAvatarChange} // Handle file selection
                                                /> */}
                                            </>
                                        </IconButton>
                                    </Stack>
                                    <TextField
                                        required
                                        fullWidth
                                        size="small" // Smaller size
                                        label="username"
                                        margin="normal"
                                        variant="outlined"
                                        value={username.value}
                                        onChange={username.changeHandler}
                                    />
                                    {
                                        username.error && (
                                            <Typography color="error" variant='caption'>
                                                {username.error}
                                            </Typography>
                                        )
                                    }
                                    <TextField
                                        required
                                        fullWidth
                                        size="small" // Smaller size
                                        label="Name"
                                        margin="normal"
                                        variant="outlined"
                                        value={name.value}
                                        onChange={name.changeHandler}
                                    />
                                    <TextField
                                        required
                                        fullWidth
                                        size="small" // Smaller size
                                        label="Bio"
                                        margin="normal"
                                        variant="outlined"
                                        value={bio.value}
                                        onChange={bio.changeHandler}
                                    />
                                    <TextField
                                        required
                                        fullWidth
                                        size="small" // Smaller size
                                        label="password"
                                        margin="normal"
                                        type="password"
                                        variant="outlined"
                                        value={password.value}
                                        onChange={password.changeHandler}
                                    />
                                    {
                                        password.error && (
                                            <Typography color="error" variant='caption'>
                                                {password.error}
                                            </Typography>
                                        )
                                    }
                                    <Button
                                        sx={{ marginTop: "1rem" }}
                                        fullWidth
                                        variant='contained'
                                        color="primary"
                                        type="submit"
                                    >
                                        Sign Up
                                    </Button>
                                    <Typography textAlign={"center"} m={"1rem"}> OR</Typography>
                                    <Button
                                        variant='text'
                                        fullWidth
                                        onClick={toggleLogin}
                                    >
                                        Login instead
                                    </Button>
                                </form>
                            </>
                        )
                    }
                </Paper>
            </Container>
        </div>
    );
}

export default Login;
