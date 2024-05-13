
// core styles are required for all packages
import AddCourses from './components/CourseManagement/AddCourses'
// import Mycourses from './components/CourseManagement/Mycourses'
import NavbarMinimalColored from './components/CourseManagement/NavbarMinimalColored'
import { DoubleNavbar } from './components/navbar'
// import ProfileSetting from './components/CourseManagement/ProfileSetting'
function App() {

  return (
    <div class="flex w-full h-screen justify-between">
      <DoubleNavbar />
      <AddCourses />
    </div>
  )
}

export default App
