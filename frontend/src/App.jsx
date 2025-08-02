import "./App.css";
import LoginPage from "./pages/LoginPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import Home from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CheckOutPage from "./pages/CheckOutPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Protected from "./features/Auth/components/Protected";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkUserAsync,
  loaderSelector,
  userCheck,
  userSelector,
} from "./features/Auth/AuthSlice";
import { fetchCartsById } from "./features/Cart/CartSlice";
import PageNotFound from "./pages/PageNotFound";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import UserProfile from "./features/User/components/UserProfile";
import UserOrders from "./features/User/components/UserOrders";
import UsersOrdersPage from "./pages/UsersOrdersPage";
import UserProfilePage from "./pages/UserProfilePage";
import SignOut from "./features/Auth/components/SignOut";
import ForgotPassword from "./features/Auth/components/ForgotPassword";
import AdminProductDetailsPage from "./pages/AdminProductDetailsPage";
import AdminProductListPage from "./pages/AdminHomePage";
import AdminProtected from "./features/Auth/components/AdminProtected";
import AdminHome from "./pages/AdminHomePage";
import AdminHomePage from "./pages/AdminHomePage";
import ProductForm from "./features/Admin/components/ProductForm";
import AdminProductFormPage from "./pages/AdminProductFormPage";
import AdminOrdersPage from "./pages/AdminOrdersPage";
import ResetPassword from "./features/Auth/components/ResetPassword";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

function App() {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const checkUserStatus = useSelector(userCheck);
  // const isLoading = useSelector(loaderSelector)
  console.log("user in app.jsx-", user);
  console.log("check-user", checkUserStatus);

  useEffect(() => {
    dispatch(checkUserAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCartsById());
  }, [dispatch]);

  if (!checkUserStatus) {
    return (
      <div className="h-screen w-full border flex justify-center items-center">
        <div role="status">
          <svg
            aria-hidden="true"
            class="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div>
        {checkUserStatus && ( // user check karane ke baad hi routing perform karana
          <BrowserRouter>
            <Routes>
              <Route path="/signup" element={<SignupPage />} />

              <Route
                path="/"
                element={
                  <Protected>
                    <Home />
                  </Protected>
                }
              />
              <Route path="/login" element={<LoginPage />} />

              <Route
                path="/cart"
                element={
                  <Protected>
                    <CartPage />
                  </Protected>
                }
              />

              <Route
                path="/checkout"
                element={
                  <Protected>
                    <CheckOutPage />
                  </Protected>
                }
              />
              <Route
                path="/product-details/:id"
                element={
                  <Protected>
                    <ProductDetailsPage />
                  </Protected>
                }
              />
              <Route path="/order-success/:id" element={<OrderSuccessPage />} />
              <Route
                path="/orders"
                element={
                  <Protected>
                    <UsersOrdersPage />
                  </Protected>
                }
              />
              <Route
                path="/profile"
                element={
                  <Protected>
                    <UserProfilePage />
                  </Protected>
                }
              />
              <Route
                path="/signOut"
                element={
                  <Protected>
                    <SignOut />
                  </Protected>
                }
              />
              <Route path="/forgot-password" element={<ForgotPasswordPage />} />

              <Route path="/reset-password" element={<ResetPasswordPage />} />

              <Route
                path="/admin/product-details/:id"
                element={
                  <AdminProtected>
                    <AdminProductDetailsPage />
                  </AdminProtected>
                }
              />

              <Route
                path="/admin"
                element={
                  <AdminProtected>
                    <AdminHomePage />
                  </AdminProtected>
                }
              />

              <Route
                path="/admin/product-form"
                element={
                  <AdminProtected>
                    <AdminProductFormPage />
                  </AdminProtected>
                }
              />

              <Route
                path="/admin/orders"
                element={
                  <AdminProtected>
                    <AdminOrdersPage />
                  </AdminProtected>
                }
              />

              <Route
                path="/admin/product-form/edit/:id"
                element={
                  <AdminProtected>
                    <AdminProductFormPage />
                  </AdminProtected>
                }
              />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        )}
      </div>
    </>
  );
}

export default App;
