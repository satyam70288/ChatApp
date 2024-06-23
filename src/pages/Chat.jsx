import React, { useRef } from 'react'
import AppLayout from '../components/layout/AppLayout';
import { IconButton, Stack } from '@mui/material';
import { grayColor, orange } from '../constants/color';
import { AttachFile as AttachFileIcon, Send as SendIcon} from '@mui/icons-material';
import { InputBox } from '../components/styles/styledComponent';
import { grey } from '@mui/material/colors';
import FileMenu from "../components/Dialog/FileMenu"
import { sampleMessage } from '../constants/sampleData';
import MessageComponent from '../components/shared/MessageComponent';

const Chat = () => {

  const user={
    _id:"sdfsdfsdf",
    name:"satyam"
  }
  const containerRef=useRef(null);
  const fileMenuRef=useRef(null)
  return (
<>
    <Stack ref={containerRef}
    boxSizing={"border-box"}
    padding={"1rem"}
    spacing={"1rem"}
    bgcolor={grey}
    height={"90%"}
    sx={{
      overflowX:"hidden",
      overflowY:"auto"
    }}
    
    >

{
          sampleMessage.map((i) => (
            <MessageComponent key={i._id} message={i} user={user} />
          ))
  
}
    </Stack >
    <form style={{
  height: "10%",
  backgroundColor: "red"  // Use backgroundColor instead of bgcolor
}}>
      <Stack direction={"row"} height={"100%"} padding={"1rem"} alignItems={"center"} position={"relative"} >
        <IconButton  sx={{
          position:"absolute",
          left:"1.5rem",
          rotate:"30deg",
          
        }} >
          <AttachFileIcon/>
        </IconButton>

        <InputBox placeholder='Type Mesage Here'/>
        <IconButton type="submit" sx={{
          backgroundColor:orange,
          color:"white",
          marginLeft:"1rem",
          padding:"0.5rem",
          "&hover":{
            bgcolor:"error.dark"
          }
        }} >
          <SendIcon/>
        </IconButton>

      </Stack>
    </form>
     <FileMenu/>
</>  ) 
}

export default AppLayout()(Chat)