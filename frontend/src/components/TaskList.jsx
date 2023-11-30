import React, { useEffect, useState } from "react"
import TaskCard from "./TaskCard";
import { getAllTasks } from "../api/task.api";

const TaskList = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const loadTasks = async () => {
      const res = await getAllTasks()
      setTasks(res.data)
    }

    loadTasks()
  }, [])

  return (
    <div className="grid grid-cols-3 gap-3">

      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}

export default TaskList