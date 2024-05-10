import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import All from './Pages/All';
import Fullstack from './Pages/Fullstack';
import Datascience from './Pages/Datascience';
import Cybersecurity from './Pages/Cybersecurity';
import Career from './Pages/Career';
import Pagenotfound from './Pages/Pagenotfound';
import Navbar from './Components/Navbar';
import Guvi from './Pages/Guvi';


const App = () => {
  let data=[
{
image:"https://www.guvi.in/blog/wp-content/uploads/2024/04/Transitioning-From-Front-End-to-Full-Stack_-A-Guide-for-Developers.png",
head:"Full stack developer",
content:"By Meghana D",
date:"2 may 2024"
},
{
image:"https://www.guvi.in/blog/wp-content/uploads/2021/09/Top-10-Full-Stack-Developer-Interview-Questions-1-600x400.png",
head:"Full stack developer",
content:"By Archana",
date:"2 may 2024"
},
{
image:"https://www.guvi.in/blog/wp-content/uploads/2024/04/Feature-Image-Navigating-the-Best-Datasets-for-Your-Data-Science-Projects.webp",
head:"Data science",
content:"By Archana",
date:"2 may 2024"
},
{
image:"https://www.guvi.in/blog/wp-content/uploads/2021/07/Blog-1-1-600x314.png",
head:"Data science",
content:"By Jaishree Tomar",
date:"2 may 2024"
},
{
image:"https://www.guvi.in/blog/wp-content/uploads/2022/03/real-time-Cybersecurity-projects-2.png",
head:"Cyber security",
content:"By Jaishree Tomar",
date:"3 may 2024"
},
{
image:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
head:"Cyber security",
content:"By Jaishree Tomar",
date:"15 may 2024"
},
{
image:"https://www.guvi.in/blog/wp-content/uploads/2024/05/Feature-Image-Career-in-Animation.webp",
head:"Career",
content:"By Saanchi Bhardwaj",
date:"15 may 2024"
},
{
image:"https://www.guvi.in/blog/wp-content/uploads/2024/04/Feature-Image-Tips-to-Stay-Motivated-in-Your-Motion-Graphic-Design-Career.webp",
head:"Career",
content:"By Saanchi Bhardwaj",
date:"15 may 2024"

},
  ]

  return (
    <div>
      <BrowserRouter>
      <div>
     <Navbar />

      </div>
      <Routes>
      <Route path='/'element={<All data={data}/>}/>
      <Route path='/Fullstack'element={<Fullstack  data={data}/>}/>
      <Route path='/Datascience'element={<Datascience data={data}/>}/>
      <Route path='/Cybersecurity'element={<Cybersecurity data={data}/>}/>
      <Route path='/Career'element={<Career data={data}/>}/>
      <Route path='*'element={<Pagenotfound/>}/>
      <Route path='/Guvi'element={<Guvi data={data}/>}/>




      </Routes>
      
      
      
      </BrowserRouter>
    </div>
  );
};

export default App;