import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/layouts";
const ProductsLayout=lazy(()=>import('@layouts/Products-layout/ProductsLayout'))
const UserLayout = lazy(() => import("@layouts/user-layout/UserLayout"));

// Lazy load all pages in one place
const HomePage = lazy(() => import("@/pages/unauth/HomePage"));
const ProductsPage = lazy(() => import("@/pages/unauth/ProductsPage"));
const ProductDetailsPage = lazy(
  () => import("@/pages/unauth/ProductDetailsPage")
);
const LoginPage = lazy(() => import("@/pages/unauth/LoginPage"));
const RegisterPage = lazy(() => import("@/pages/unauth/RegisterPage"));
const CartPage = lazy(() => import("@/pages/unauth/CartPage"));
const ProfilePage = lazy(() => import("@/pages/auth/ProfilePage"));
const WishlistPage = lazy(() => import("@/pages/auth/WishlistPage"));
const OrdersPage = lazy(() => import("@/pages/auth/OrdersPage"));
//not found page
const NotFoundPage = lazy(() => import("@pages/unauth/NotFoundPage"));
const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },

        {
          path: "product-details/:id",
          element: <ProductDetailsPage />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "wishlist",
          element: <WishlistPage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
        {
          path: "user-layout",
          element: <UserLayout />,
          children: [
            {
              index: true,
              element: <OrdersPage />,
            },
            {
              path: "profile-info",
              element: <ProfilePage />,
            },
          ],
        },
        {
          path:'products',
          element:<ProductsLayout/>,
          children:[
            {
              index:true,
              element: <ProductsPage />
            },
            {
              path: ":categoryId",
              element: <ProductsPage />
            },
          ]

        }
      ],
    },
  ]);
  return (
    <Suspense fallback={<div>loading....</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
export default AppRouter;
