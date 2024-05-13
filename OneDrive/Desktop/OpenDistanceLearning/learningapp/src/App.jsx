// import Login from './components/Login'
import { MantineProvider } from '@mantine/core'
import AddCourses from './components/CourseManagement/AddCourses'
// import Mycourses from './components/CourseManagement/Mycourses'
// import NavbarMinimalColored from './components/CourseManagement/NavbarMinimalColored'
// import ProfileSetting from './components/CourseManagement/ProfileSetting'
function App() {
 
  return (
    <>
    {/* <center>
    <Login/> */}
    <MantineProvider>
      {/* <ProfileSetting/> */}
   {/* <Mycourses/> */}
   <AddCourses/>
    </MantineProvider>
    
    {/* </center> */}
    </>
  )
}

export default App
