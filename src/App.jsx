import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/ArchiveProject/ArchiveProjects';
import About from './pages/About/About';
import Project from './pages/Projects/SingleProject/SingleProject';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />

        <Route path='/projects/:id/:slug' element={<Project />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
