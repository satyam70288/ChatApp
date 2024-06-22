import { useState,lazy, Suspense } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ProtectedRoute from './components/Auth/ProctrdRoutes';
import { LayoutLoader } from './components/layout/Loader';

const Home=lazy(()=>import("./pages/Home"));
const Login=lazy(()=>import("./pages/Login"));
const Chat=lazy(()=>import("./pages/Chat"));
const Group=lazy( ()=> import("./pages/Groups"))
const PageNotFound=lazy( ()=> import("./pages/PageNotFound"))

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
      <Route path="*"  element={ <PageNotFound/>}/>

      </Routes>
      </Suspense>
      </BrowserRouter>
)
}

export default App
