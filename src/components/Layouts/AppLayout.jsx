import React from 'react'
import Header from './Header'
import Title from '../shared/Title'
import { Grid } from '@mui/material'
// import ChatList from '../Specific/ChatList'
import { samepleChats } from '../../constants/sampleData'
import Profile from '../Specific/Profile'

const AppLayout =()=> (WrappedCompnonent) => {
  return (props)=> {
  return (
    <>
    <Title/>
      <Header/>
      <Grid container style={{ height: "calc(100vh - 4rem)" }}>
      <Grid itme sm={4} md={3} sx={{display:{xs:"none",sm:"block"}}} height={"100%"}  bgcolor={""}> 
        {/* <ChatList chats={samepleChats} chatId={1}
        newMessagesAlert={[
          {
            chatId:"1",
            count:4,
          }
        ]
      
        } */}
        {/* onlineUsers={["1","2"]}/> */}
      </Grid>
      <Grid item xs={12} sm={8} md={5} lg={6} height={"100%"}>
            <WrappedCompnonent {...props}
            //  chatId={chatId}
              // user={user} 
              />
          </Grid>
      <Grid item md={4} lg={3} sx={{
            display: { xs: "none", md: "block" },
            padding: "2rem",
            bgcolor: "rgba(0, 0, 0, 0.85)",
            height: "100%"
          }}>
            <Profile/>
          </Grid>
      </Grid>
      
    </>
  )
}
}

export default AppLayout