import { useState } from 'react';
import Contact from './components/Contact';
import Main from './components/Main';
import Projects from './components/Projects';
import Sidenav from './components/Sidenav';
import Work from './components/Work';
import Photo from './components/Photo';
import Resume from './components/Resume/Resume';
import ResumeCopy from './components/ResumeCopy/ResumeCopy';

function App() {
  return (
    <div className='bg-[#1f1f1f]'>
      <Sidenav/>
      <Main/>
      <Work />
      <Projects/>
      <ResumeCopy/>
      {/* <Resume /> */}
      <Photo/>
      <Contact/>
    </div>
  )
}

export default App
