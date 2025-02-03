import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Issue } from "./pages/Issue";
import { Home } from "./pages/Home";
import { MainLayout } from "./_layout/MainLayout";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/issue" element={<Issue />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
