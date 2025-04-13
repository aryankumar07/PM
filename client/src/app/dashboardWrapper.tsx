'use client'

import { useEffect } from "react"
import Navbar from "../../components/navbar"
import Sidebar from "../../components/sidebar"
import StoreProvider, { useAppSelector } from "./redux"

interface DashBoardWrapperProps {
  children: React.ReactNode
}

const DashBoardLayout: React.FC<DashBoardWrapperProps> = ({
  children
}) => {


  const isSideBarCollpased = useAppSelector((state) => state.global.isSidebarCollapsed)
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  })


  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      <Sidebar />
      <main className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${isSideBarCollpased ? '' : 'md:pl-64'}`}>
        <Navbar />
        {children}
      </main>
    </div>
  )
}

const DashBoardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashBoardLayout>
        {children}
      </DashBoardLayout>
    </StoreProvider>
  )
}

export default DashBoardWrapper
