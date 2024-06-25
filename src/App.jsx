import { useState,lazy, Suspense } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ProtectedRoute from './components/Auth/ProctrdRoutes';
import { LayoutLoader } from './components/layout/Loader';

const Home=lazy(()=>import("./pages/Home"));
const Login=lazy(()=>import("./pages/Login"));
const Chat=lazy(()=>import("./pages/Chat"));
const Group=lazy( ()=> import("./pages/Groups"))
const PageNotFound=lazy( ()=> import("./pages/PageNotFound"))
const AdminLogin=lazy( ()=> import("./pages/Admin/AdmilLogin"))
const ChatManagement=lazy( ()=> import("./pages/Admin/ChatManagement"))
const Dashboard=lazy( ()=> import("./pages/Admin/Dashboard"))
const UserManagement=lazy( ()=> import("./pages/Admin/UserManagement"))
const MessageManagement=lazy( ()=> import("./pages/Admin/MessageManagement"))

let user=true;
function App() {
  return (
    <BrowserRouter>
    <Suspense fallback={<LayoutLoader/>}>

    <Routes>
      <Route element={<ProtectedRoute user={user}/>} >

      <Route path="/"  element={ <Home/>}/>
       <Route path="/chat/:chatId" element={<Chat/>}/>
       <Route path="/groups" element={<Group/>}/>

      </Route>
      <Route path="/login" element={<ProtectedRoute user={!user} redirect="/"><Login/></ProtectedRoute>}/>
      <Route path="/admin" element={<AdminLogin/>}/>
      <Route path="/admin/dashboard" element={<Dashboard/>}/>
      <Route path="/admin/users" element={<UserManagement/>}/>
      <Route path="/admin/chats" element={<ChatManagement/>}/>
      <Route path="/admin/message" element={<MessageManagement/>}/>


      <Route path="*"  element={ <PageNotFound/>}/>

      </Routes>
      </Suspense>
      </BrowserRouter>
)
}

export default App
