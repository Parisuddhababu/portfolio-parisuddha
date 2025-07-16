import  React, { lazy } from 'react';
import {  Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
const DashboardLayout = lazy(() => import('./layout/DashboardLayout'));
const PageNotFound = lazy(() => import('./pages/PageNotFound'));
const Projects =lazy(()=>import ('./pages/projects/index'));
const AboutUs=lazy(()=>import ('./pages/about/index'));
const Resume=lazy(()=>import ('./pages/resume/index'));
const Contacts=lazy(()=>import ('./pages/contact/index'));
import HomePage from './pages/HomePage';

function App() {
  return (
    <React.Fragment>
      <Routes>
          <Route path='/' element={<DashboardLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contacts />} />
          <Route path='*' element={<PageNotFound />} />
          </Route>
        </Routes>
      <ToastContainer position="top-right" theme="colored"/>
    </React.Fragment>
  );
}

export default App;
