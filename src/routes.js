import Favorites from "pages/Favorites";
import Home from "pages/Home";
import InfoPage from "pages/InfoPage";
import ModelPage from "pages/ModelPage";
import { ModelPageStyled } from "pages/ModelPage/styled";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRouter() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ModelPage />}>
          <Route path="*" element={<div>error 404</div>} />
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path=":id" element={<InfoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}
