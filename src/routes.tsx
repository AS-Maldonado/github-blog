import { Route, Routes } from "react-router-dom";
import { Issue } from "./pages/Issue";
import { Home } from "./pages/Home";
import { MainLayout } from "./pages/_layout/MainLayout";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/issue" element={<Issue />} />
      </Route>
    </Routes>
  );
}
