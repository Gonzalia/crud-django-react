import { useNavigate } from "react-router-dom"

const TaskCard = ({ task }) => {
  const navigate = useNavigate()

  return (
    <div onClick={() => {
      navigate('/tasks/' + task.id)
    }}
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer">
      <h1 className="font-bold uppercase">{task.title}</h1>
      <p className="text-slate-400">{task.description}</p>
    </div>
  )
}

export default TaskCard