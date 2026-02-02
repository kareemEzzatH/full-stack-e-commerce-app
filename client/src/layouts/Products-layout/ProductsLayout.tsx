import { Outlet } from 'react-router-dom'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { CategoriesSideBar } from '@/features'

const ProductsLayout = () => {
  return (
    <div className='flex flex-1 h-full'>
      <SidebarProvider>
        <CategoriesSideBar />
        <main className="flex-1">
          <SidebarTrigger />
          <Outlet />
        </main>
      </SidebarProvider>
    </div>
  )
}

export default ProductsLayout
