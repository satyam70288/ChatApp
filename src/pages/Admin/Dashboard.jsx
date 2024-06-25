import React from 'react'
import AdminLogin from './AdmilLogin'
import AdminLayout from '../../components/layout/AdminLayout'
import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import { AdminPanelSettings as AdminPanelSettingsIcon, Group as GroupIcon, Message as MessageIcon, Notifications, Person as PersonIcon } from '@mui/icons-material'
import moment from 'moment'
import { CurveButton, SearchField } from '../../components/styles/styledComponent'
import { matBlack } from '../../constants/color'
import { DoughnutChart, LineChart } from '../../components/Specific/Chart'

const Dashboard = () => {
    const Appbar=<Paper elevation={3}
    sx={{
        padding: {
            xs: "1rem",
            md: "2rem", // Different value for medium screens
        },
        margin: {
            md: "1rem", // Margin only for medium screens
        },
        borderRadius: "1rem",
    }}>
<Stack direction={"row"}  spacing={"1rem"}>
        <AdminPanelSettingsIcon sx={{ fontSize:"3rem"}}/>
        <SearchField placeholder='search'/>
        <CurveButton> Search </CurveButton>
        <Box flexGrow={1}/>
        <Typography 
        display={{
            xs:'none',
            lg:'block'
        }}
        color={"rgba(0,0,0,0.7)"}
        textAlign={"center"}
        >
            {
                moment().format("MMMM DD YYYY")
            }
        </Typography>
        <Notifications/>
       </Stack>
    </Paper>
        
        const Widgets = (
            <Stack
              direction={{
                xs: "column",
                sm: "column",
                lg:"row"
              }}
              spacing="2rem"
              justifyContent="space-between"
              alignItems={"center"}
              margin={"2rem 0"}
            >
              <Widget title={"Users"} 
            //   value={stats?.usersCount}
               Icon={<PersonIcon />} />
              <Widget
                title={"Chats"}
                // value={stats?.totalChatsCount}
                Icon={<GroupIcon />}
              />
              <Widget
                title={"Messages"}
                // value={stats?.messagesCount}
                Icon={<MessageIcon />}
              />
            </Stack>
          );
          return (
    <AdminLayout>
        <Container component={"main"}>

{
    Appbar
}
<Stack
            direction={{
              xs: "column",
              lg: "row",
            }}
            flexWrap={"wrap"}
            justifyContent={"center"}
            alignItems={{
              xs: "center",
              lg: "stretch",
            }}
            sx={{ gap: "2rem" }}
          >
            <Paper
              elevation={3}
              sx={{
                padding: "2rem 3.5rem",
                borderRadius: "1rem",
                width: "100%",
                maxWidth: "45rem",
              }}
            >
              <Typography margin={"2rem 0"} variant="h4">
                Last Messages
              </Typography>

              <LineChart value={[1,2,3]}
            //   value={stats?.messagesChart || []} 
              />
            </Paper>
            <Paper
              elevation={3}
              sx={{
                padding: "1rem ",
                borderRadius: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: { xs: "100%", sm: "50%" },
                position: "relative",
                maxWidth: "25rem",
              }}
            >
              <DoughnutChart
                labels={["Single Chats", "Group Chats"]}
                value={[25,75]}
                // value={[
                //   stats?.totalChatsCount - stats?.groupsCount || 0,
                //   stats?.groupsCount || 0,
                // ]}
              />

              <Stack
                position={"absolute"}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                spacing={"0.5rem"}
                width={"100%"}
                height={"100%"}
              >
                <GroupIcon /> <Typography>Vs </Typography>
                <PersonIcon />
              </Stack>
            </Paper>

{Widgets}
</Stack>
        </Container>
    </AdminLayout>
  )
}

const Widget = ({ title, value, Icon }) => (
    <Paper
      elevation={3}
      sx={{
        padding: "2rem",
        margin: "2rem 0",
        borderRadius: "1.5rem",
        width: "20rem",
      }}
    >
      <Stack alignItems={"center"} spacing={"1rem"}>
        <Typography
          sx={{
            color: "rgba(0,0,0,0.7)",
            borderRadius: "50%",
            border: `5px solid ${matBlack}`,
            width: "5rem",
            height: "5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {value}
        </Typography>
        <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
          {Icon}
          <Typography>{title}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
export default Dashboard