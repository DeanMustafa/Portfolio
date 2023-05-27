import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import "./App.css";
//* *****  Pages  *****
import Main from "./components/Main";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

//* *****  Layout  *****
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="main" element={<Main />} />
      <Route path="projects" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

function Portfolio() {
  return <RouterProvider router={router} />;
}

export default Portfolio;
