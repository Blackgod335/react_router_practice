
import Home from './pages/Home'
import Product from './pages/product';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import About from './pages/about'
import RootLayout from './layout/RootLayout';
import ContactLayout from './layout/ContactLayout';
import ContactInfo from './componets/ContactInfo';
import ContactForm from './componets/ContactForm';
import NotFound from './componets/NotFound';
import JobsLayout from './layout/JobsLayout';
import Jobs, { JobsLoader } from './pages/Jobs';
import JobDeatils, { jobsDetailsLoader } from './componets/JobDeatils';
import Error from './componets/Error';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='product' element={<Product />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<ContactLayout />}>
        <Route path='jobs' element={<JobsLayout/>}/>
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="jobs" element={<JobsLayout />}>
          <Route index element ={<Jobs/>} loader={JobsLoader}/>
          <Route path=":id" element={<JobDeatils/>} loader={jobsDetailsLoader}
          errorElement={<Error/>}/>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route >)
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App