'use client'
import { useState } from 'react'
import ProjectHeader from '../projectHeader'
import Board from '../boardView'

type Props = {
  params: { id: string };
}

const Project = ({ params }: Props) => {
  const { id } = params
  const [activeTab, setActiveTab] = useState('Board')
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false)

  return (
    <div>
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
    </div>
  )

}


export default Project
