import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { useGetAllCategoriesQuery } from "../categoriesApi";
import { NavLink } from "react-router-dom";
import CategoriesListLoader from "../../../skeleton/CategoriesListLoader";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCw } from "lucide-react";

const CategoriesSideBar = () => {
  const { data, isLoading, error, refetch } = useGetAllCategoriesQuery();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Categories List</SidebarGroupLabel>

          <SidebarGroupContent className="mt-4">
            {error ? (
              <div className="flex flex-col items-center gap-3 p-4">
                <AlertCircle className="h-8 w-8 text-red-500" />
                <p className="text-sm text-red-500 text-center">
                  Failed to load categories
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => refetch()}
                  className="w-full"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Retry
                </Button>
              </div>
            ) : (
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to="/products"
                      className={({ isActive }) =>
                        `w-full rounded-md px-3 py-2 transition-colors ${isActive
                          ? "font-semibold"
                          : ""
                        }`
                      }
                    >
                      All Products
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                {isLoading ? (
                  <CategoriesListLoader />
                ) : (
                  data &&
                  data.map((category) => (
                    <SidebarMenuItem key={category.documentId}>
                      <SidebarMenuButton asChild>
                        <NavLink
                          to={`/products/${category.documentId}`}
                          className={({ isActive }) =>
                            isActive ? "font-semibold " : ""
                          }
                        >
                          <span>{category.name}</span>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))
                )}
              </SidebarMenu>
            )}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default CategoriesSideBar;
