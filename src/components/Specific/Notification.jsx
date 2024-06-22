import { Avatar, Button, Dialog, DialogTitle, ListItem, Stack, Typography } from '@mui/material'
import React, { memo } from 'react'
import { sampleNotifications } from '../../constants/sampleData'

const Notification = () => {

 const friendRequestHandler=({_id,accept})=>{
  
 }
  return (
    <Dialog open={true}>
      <Stack  p={{ xs:"1rem" ,sm:"2rem"}}   width={"25rem"}>
       <DialogTitle>Notification</DialogTitle>

{
  sampleNotifications.length > 0 ?
  (
    sampleNotifications.map((i)=>(
      <NotificationItem sender={i.sender}
       _id={i._id}
       handler={friendRequestHandler}
       />
    ))
  )  : <Typography textAlign={"center"}>No Notification</Typography>
}
      </Stack>
    </Dialog>
  )
}

const NotificationItem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender;
  return (
    <ListItem>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={"2rem"}
        // backgroundColor="red" // Corrected spelling of "backgroundColor"
        width={"100%"}
      >
        <Avatar src={avatar} />

        <Typography
          variant="body1"
          sx={{
            flexGlow: 1,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: "100%",
          }}
        >
          {`${name} sent you a friend request.`}
        </Typography>

        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
        >
          <Button onClick={() => handler({ _id, accept: true })}>Accept</Button>
          <Button color="error" onClick={() => handler({ _id, accept: false })}>
            Reject
          </Button>
        </Stack>
      </Stack>
    </ListItem>
  );
});export default Notification