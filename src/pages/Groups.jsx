import React, { memo, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {Box, Drawer, Grid, IconButton, Menu, Stack, Tooltip, Typography} from "@mui/material"
import {orange} from "../constants/color"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {  KeyboardBackspace as KeyboardBackSpaceIcon } from '@mui/icons-material'
import { Link } from "../components/styles/styledComponent";
import AvatarCard from "../components/shared/AvatarCard";
import {samepleChats} from "../constants/sampleData"
const Groups = () =>{

  const navigate=useNavigate()
  const chatId="asbsd"

  const [isMobileMenuOpen,setIsMobileMenuOpen]=useState(false)
  const handelMobile=()=>{

    setIsMobileMenuOpen((prev)=>!prev)
  }
  const handelMobileClose=()=>{
    setIsMobileMenuOpen(false)
  }
  const navigateBack=()=>{
    navigate("/")
  }
  const IconBtns = (
    <>
      <Box sx={{
        display:{
          xs:"bloc",
          sm:"none",
          position:'fixed',
          right:"1rem",
          top:"1rem"
        }
      }}>
        <IconButton onClick={handelMobile}>
          <MenuRoundedIcon />
        </IconButton>
      </Box>
      <Tooltip title="Back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: "rgba(0,0,0,0.8)",
            color: "white",
            "&:hover": {
              bgcolor: "red",
            },
          }}
          onClick={navigateBack}
        >
          <KeyboardBackSpaceIcon />
        </IconButton>
      </Tooltip>
    </>
  )
    return (
    <Grid container height={"100vh"}>
          <Grid 
          sx={{
            display:{
              xs:"none",
              sm:"block"
            }
          }}sm={4}
          bgcolor={orange}>
            <GroupsList myGroups={samepleChats} chatId={chatId}/>
          </Grid>
          <Grid item xs={12} sm={8} sx={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            position:"relative",
            padding:"1rem 3rem"

          }}> 
          {IconBtns}
          </Grid>
          <Drawer 
          sx={{
            display:{
              xs:"block",
              sm:"none"
            }
          }}
          open={isMobileMenuOpen} onClose={handelMobileClose}>
           <GroupsList  myGroups={samepleChats} chatId={chatId}
           w={"50vw"}/>
          </Drawer>
    </Grid>
  )
}
const GroupsList = ({ w = "100%", myGroups = [], chatId }) => (
  <Stack
    width={w}
    sx={{
      // backgroundImage: bgGradient,
      height: "100vh",
      overflow: "auto",
    }}
  >
    {myGroups.length > 0 ? (
      myGroups.map((group) => (
        <GroupListItem group={group} chatId={chatId} key={group._id} />
      ))
    ) : (
      <Typography textAlign={"center"} padding="1rem">
        No groups
      </Typography>
    )}
  </Stack>
);

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;

  return (
    <Link
      to={`?group=${_id}`}
      onClick={(e) => {
        if (chatId === _id) e.preventDefault();
      }}
    >
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Groups