import { useState, useEffect } from 'react'
import './App.css'
import { Todoprovider } from './contexts/Todocontext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (todo) =>{
    setTodos((prev)=>[todo,...prev])
  }
  const updateTodo = (id,todo) => {
    setTodos((prev) => prev.map((prevTo)=> (prevTo.id=== id?todo:prevTo)))
  }
  const deleteTodo = (id) =>{
    setTodos((prev)=>prev.filter((todo)=>todo.id !== id))
  }
  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id===id?{...prevTodo,completed: !prevTodo.completed}:prevTodo)))
  }

  useEffect(()=>{
    const todos= JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])
  
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])
return (
  <Todoprovider
    value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
  >
    <div className="min-h-screen relative overflow-hidden bg-black text-white">

      {/* animated background */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[-120px] left-[-100px] w-[300px] h-[300px] bg-pink-500/30 blur-3xl rounded-full animate-pulse"></div>

        <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-cyan-500/30 blur-3xl rounded-full animate-pulse"></div>

        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-violet-500/20 blur-3xl rounded-full animate-spin"
          style={{ animationDuration: "18s" }}
        ></div>

      </div>

      {/* floating grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* main container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-10">

        <div
          className="
            w-full 
            max-w-3xl 
            backdrop-blur-xl
            bg-white/10
            border border-white/20
            shadow-[0_0_80px_rgba(168,85,247,0.35)]
            rounded-[32px]
            p-5
            md:p-8
          "
        >

          {/* top section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

            <div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-pink-400 via-violet-300 to-cyan-300 text-transparent bg-clip-text">
                TODOS
              </h1>

              <p className="text-white/60 mt-2 text-sm md:text-base">
                futuristic productivity experience
              </p>
            </div>

            {/* animated stats circle */}
            <div className="relative mx-auto md:mx-0">

              <div className="w-32 h-32 rounded-full border-[6px] border-cyan-400/30 flex items-center justify-center backdrop-blur-xl bg-white/5 shadow-[0_0_40px_rgba(34,211,238,0.4)] animate-spin"
                style={{ animationDuration: "10s" }}
              >
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center">

                <span className="text-4xl font-black text-cyan-300">
                  {todos.length}
                </span>

                <span className="text-xs tracking-[3px] text-white/60 uppercase">
                  Tasks
                </span>

              </div>

            </div>

          </div>

          {/* form */}
          <div className="mb-8">
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-3 shadow-xl">
              <TodoForm />
            </div>
          </div>

          {/* todo list */}
          <div className="space-y-4">

            {todos.length === 0 && (
              <div className="text-center py-16 border border-dashed border-white/10 rounded-3xl bg-white/5">

                <h2 className="text-2xl font-bold text-white/70">
                  Nothing here yet
                </h2>

                <p className="text-white/40 mt-2">
                  Add your first futuristic task ✨
                </p>

              </div>
            )}

            {todos.map((todo, index) => (
              <div
                key={todo.id}
                className="
                  w-full
                  animate-[fadeIn_.5s_ease]
                  hover:scale-[1.02]
                  duration-300
                "
                style={{
                  animationDelay: `${index * 0.05}s`
                }}
              >
                <TodoItem todo={todo} />
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  </Todoprovider>
)
}

export default App
