import React from 'react';
import { Avatar, Stack, Typography } from '@mui/material';
import { Face as FaceIcon, AlternateEmail as UsernameIcon, CalendarMonth as CalendarIcon } from "@mui/icons-material";
import moment from "moment"
const Profile = () => {
  return (
    <Stack spacing={2} direction="column" alignItems="center">
      <Avatar
        sx={{
          width: 200,
          height: 200,
          objectFit: "contain",
          marginBottom: "1rem",
          border: "5px solid white"
        }}
      />
      <ProfileCard heading="Bio" text="lorem5" />
      <ProfileCard heading="Username" text="satyamb_" icon={<UsernameIcon />} />
      <ProfileCard heading="Name" text="Satyam Bharti" icon={<FaceIcon />} />
      <ProfileCard heading="Joined" text={moment} icon={<CalendarIcon />} />

    </Stack>

  );
};

const ProfileCard = ({ text, icon, heading }) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={1}
    color="white"
    textAlign="center"
  >
    {icon && icon}
    <Stack>
      <Typography variant='body1'>
        {text}
      </Typography>
      <Typography color="grey" variant='caption'>
        {heading}
      </Typography>
    </Stack>
  </Stack>
);

export default Profile;