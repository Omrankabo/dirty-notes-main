import Nav from './components/Nav';
import Footer from './components/Footer';
import { Routes ,Route } from 'react-router-dom';
import { useTheme } from './context/ThemeProvider';
import { lazy,Suspense } from 'react';
import Loading from './components/loader/Loading';

const Home = lazy(()=>import('./pages/Home'))
const NotFound = lazy(()=>import('./pages/NotFound'))
const Notes = lazy(()=>import('./pages/Notes'))
const Contact = lazy(()=>import('./pages/Contact'))
const SingleNote = lazy(()=>import('./pages/SingleNote'))

const App = () => {
  const {theme} = useTheme()
  return (
    <div className={`${theme? 'dark' : ''} font-primary text-text-base bg-background-base min-w-screen min-h-screen gridlines flex flex-col items-center justify-center `}>
      <Nav/>
      <div className='container sm:max-w-[600pxs] md:mx-auto md:max-w-[700px] lg:max-w-[986px] py-[85px] px-6 lg:px-2 min-h-fit '>
        <Routes>
          <Route path='/' element={
          <Suspense fallback={<Loading/>}>
            <Home/>
          </Suspense>}/>
          <Route path='/notes' element={
          <Suspense fallback={<Loading/>}>
            <Notes/>
          </Suspense>}/>
          <Route path='/contact' element={
          <Suspense fallback={<Loading/>}>
            <Contact/>
          </Suspense>}/>
          <Route path='/Note' element={
          <Suspense fallback={<Loading/>}>
            <SingleNote/>
          </Suspense>}/>
          <Route path='*' element={
          <Suspense fallback={<Loading/>}>
            <NotFound/>
          </Suspense>}/>
        </Routes>
      </div>
      <Routes>
        <Route/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
