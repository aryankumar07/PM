'use client'

import { useState } from "react"
import Image from "next/image"
import { ChevronUp, ChevronDown, LockIcon, Home, X, Briefcase, Search, Settings, User, Users, AlertCircle, ShieldAlert, AlertTriangle, AlertOctagon, Layers3 } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/app/redux"
import SidebarLink from "./sidebarLinks"
import { setIsSidebarCollapsed } from "@/state"
import { useGetProjectsQuery } from "@/state/api"




const Sidebar = () => {

  const [showProjects, setShowProjects] = useState(true);
  const [showPriority, setShowPriority] = useState(true);


  const { data: projects } = useGetProjectsQuery()

  const dispatch = useAppDispatch()
  const isSidebarCollapsed = useAppSelector((state) => state.global.isSidebarCollapsed)




  const sidebarClassNames = `
  fixed flex flex-col h-[100%] justify-between shadown-xl transition-all duration-300 h-full
  z-40 dark:bg-black overflow-y-auto bg-white
  ${isSidebarCollapsed ? 'w-0 hidden' : "w-64"}
  `

  return (
    <div className={sidebarClassNames}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        <div className="flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
          <div className="text-xl font-bold text-gray-800 dark:text-white">
            PLIST
          </div>
          {
            isSidebarCollapsed ? null : (
              <button
                className="py-3"
                onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
              >
                <X className="w-6 h-6 text-gray-700 hover:text-gray-500 dark:text-white" />
              </button>
            )
          }
        </div>

        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
          <Image alt="logo" src={'https://pms3magesproject.s3.us-east-1.amazonaws.com/logo.png'} width={40} height={40} />
          <div>
            <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
              MY Team
            </h3>
            <div className="mt-1 flex items-center gap-2">
              <LockIcon className="mt-[0.1rem] h-3 w-3 txt-gray-500 dark:text-gray-400" />
              <p className="text-xs text-gray-500">
                private
              </p>
            </div>
          </div>
        </div>
        <nav className="z-10 w-full">
          <SidebarLink icon={Home} label="home" href="/" />
          <SidebarLink icon={Briefcase} label="Timeline" href="/timeline" />
          <SidebarLink icon={Search} label="Search" href="/search" />
          <SidebarLink icon={Settings} label="Settings" href="/settings" />
          <SidebarLink icon={User} label="Users" href="/users" />
          <SidebarLink icon={Users} label="Teams" href="/teams" />
        </nav>
        <button
          onClick={() => setShowProjects((prev) => !prev)}
          className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
        >
          <span className="">Projects</span>
          {showProjects ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>

        {
          showProjects && projects?.map((project) => {
            return (
              <SidebarLink
                key={project.id}
                icon={Briefcase}
                label={project.name}
                href={`/projects/${project.id}`}
              />
            )
          })
        }


        <button
          onClick={() => setShowPriority((prev) => !prev)}
          className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
        >
          <span className="">Priority</span>
          {showPriority ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </button>
        {showPriority && (
          <>
            <SidebarLink
              icon={AlertCircle}
              label="Urgent"
              href="/priority/urgent"
            />
            <SidebarLink
              icon={ShieldAlert}
              label="High"
              href="/priority/high"
            />
            <SidebarLink
              icon={AlertTriangle}
              label="Medium"
              href="/priority/medium"
            />
            <SidebarLink icon={AlertOctagon} label="Low" href="/priority/low" />
            <SidebarLink
              icon={Layers3}
              label="Backlog"
              href="/priority/backlog"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default Sidebar
