import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "./App";
import AllBooks from "./pages/AllBooks";
import About from "./pages/About";
import Home from "./pages/Home";
import SpecifikBookInfo from "./pages/SpecifikBookInfo";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="allbooks" element={<AllBooks />} />
      <Route path="allbooks/:id" element={<SpecifikBookInfo />} />
      {/* // men borde inte de va en nestlad route allbooks id i allbooks?About
      gjorde så från början men fungera ej */}
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route>

    // <Route path="/" element={<App />}>
    //   <Route index element={<Home />} />
    //   <Route path="allbooks" element={<AllBooks />}>
    //     <Route path=":id" element={<SpecifikBookInfo />} />
    //   </Route>
    //   <Route path="about" element={<About />} />
    //   <Route path="*" element={<NotFound />} />
    // </Route>

    // den fungerar inte why?
  )
);
