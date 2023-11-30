import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import { createTask, deleteTask, updateTask, getTaskById } from "../api/task.api"
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const TaskFormPage = () => {
  const { register, handleSubmit, setValue } = useForm()
  const navigate = useNavigate()
  const params = useParams()

  const onSubmit = handleSubmit(async data => {
    if (params.id) {
      await updateTask(params.id, data)
      toast.success('Tarea Actualizada', {
        position: 'bottom-right',
        style: {
          background: "#101010",
          color: "#fff"
        }
      })
    } else {
      await createTask(data)
      toast.success('Tarea Creada', {
        position: 'bottom-right',
        style: {
          background: "#101010",
          color: "#fff"
        }
      })
    }
    navigate('/tasks')
  })

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const { data: { title, description } } = await getTaskById(params.id)
        setValue('title', title)
        setValue('description', description)
      }
    }

    loadTask()

  }, [])

  return (
    <div className="max-w-xl mx-auto ">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3" />

        <textarea
          placeholder="Description"
          rows="3"
          {...register("description", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"></textarea>
        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">Save</button>
      </form>

      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () => {
              const accepted = window.confirm('Are you sure?')
              if (accepted) {
                await deleteTask(params.id);
                toast.success("Task Removed", {
                  position: "bottom-right",
                  style: {
                    background: "#101010",
                    color: "#fff",
                  },
                });
                navigate("/tasks");
              }
            }}>Delete</button>
        </div>
      )}
    </div>
  )
}

export default TaskFormPage
