import { Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import {useInputValidation} from "6pp"

import { Search as SearchIcon } from '@mui/icons-material'
import UserItem from '../shared/UserItem'
import { sampleUsers } from '../../constants/sampleData'
const search = () => {

  // const users=["1","2"]
  const search = useInputValidation("");

  const [users, setUsers] = useState(sampleUsers);

  const addFriendHandler = async (id) => {
    await sendFriendRequest("Sending friend request...", { userId: id });
  };

  return (
<Dialog open={true}>
       <Stack  p={"2rem"}  direction={"column"} width={"25rem"}>
       <DialogTitle textAlign={"center"}> Find People</DialogTitle>
       <TextField label="" 
       value={search.value}
        onChange={search.changeHandler}
        variant='outlined'
        size='small'
        InputProps={{
          startAdornment:(
            <InputAdornment position="start">
            <SearchIcon/>
            </InputAdornment>
          )
        }}></TextField>
        <List>
          {
            users.map(i=>(
             <UserItem user={i} key={i._id}
              handler={addFriendHandler}
              // hanler={isLoadingSendFriendRequest}
              />
            ))
          }
        </List>
       </Stack>
</Dialog>
  )
}

export default search