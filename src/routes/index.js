import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "../layouts";
import {
  HomeView,
  CartView,
  LoginView,
  RegisterView,
  ProfileView,
  AdminView,
} from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/carrito" element={<CartView />} />
          <Route path="/perfil" element={<ProfileView />} />
        </Route>
        <Route path="/login" element={<LoginView />} />
        <Route path="/admin" element={<AdminView />} />
        <Route path="/register" element={<RegisterView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
