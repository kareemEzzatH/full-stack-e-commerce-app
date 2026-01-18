import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"
import { useGetAllCategoriesQuery } from "../categoriesApi"
import { NavLink } from "react-router-dom"
import CategoriesListLoader from "../../../skeleton/CategoriesListLoader"

const CategoriesSideBar = () => {
    const { data, isLoading, error } = useGetAllCategoriesQuery()

    if (error) {
        return <p className="text-red-500">Failed to load categories</p>;
    }
    return (

        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Categories List</SidebarGroupLabel>
                    <br />
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {isLoading?(<CategoriesListLoader/>):data && data.map((category) => (
                                <SidebarMenuItem key={category.documentId}>
                                    <SidebarMenuButton asChild>
                                        <NavLink to={`/products/${category.slug}`} >

                                            <span>{category.name}</span>
                                        </NavLink>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>))}


                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export default CategoriesSideBar
