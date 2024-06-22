import { Avatar, Button, Dialog, DialogTitle, List, ListItem, Stack, TextField, Typography } from '@mui/material'
import React, { memo, useState } from 'react'
import {  sampleUsers } from '../../constants/sampleData'
import UserItem from '../shared/UserItem'
import { useInputValidation } from '6pp'

const NewGroup = () => {

  const [members,setMembers]=useState(sampleUsers) ;
   const [selectmembers,setSelectedMembers]=useState([])


  const groupName=useInputValidation("")
  const submitHandler=()=>{}
  const selectMemberHandler = (id) => {
    setSelectedMembers((prev) =>
      prev.includes(id)
        ? prev.filter((currElement) => currElement !== id)
        : [...prev, id]
    );
    console.log(selectmembers)
  };
   return (
     <Dialog open={true}>
       <Stack  p={{ xs:"1rem" ,sm:"3rem"}} spacing={"1rem"}   width={"25rem"}>
       <DialogTitle textAlign={'center'}variant='h4'>New Group</DialogTitle>
      <TextField label="Group Name" value={groupName.value} onChange={groupName.changeHandler}/>
      <Typography variant='body1'>
        members
      </Typography>
      <List>
  {members.map((member) => (
    <UserItem
      key={member._id} // Assuming member._id is unique for each member
      user={member}
      handler={selectMemberHandler} // Corrected prop name from `hanler` to `handler`
      isAdded={selectmembers.includes(member._id)} // Check if selectmembers includes member.id
    />
  ))}
</List>
            <Stack direction={"row"} justifyContent={'space-between'}>
               <Button variant='text' color='error' size='large'>Cancel</Button>
               <Button variant='contained' onClick={submitHandler}>Create</Button>

            </Stack>
       </Stack>
     </Dialog>
   )
 }

export default NewGroup