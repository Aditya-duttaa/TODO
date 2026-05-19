import React,{useState} from 'react'
import { useTodo } from '../contexts/Todocontext';
function TodoForm() {
    const [todo,setTodo]= useState("")
    const {addTodo}= useTodo()

    const add = (e) => {
        e.preventDefault()
        if(!todo) return
        addTodo({
            id: Date.now(),
            todo: todo,
            completed: false 
        })
        setTodo("")
    }
return (
    <form
        onSubmit={add}
        className="
            relative
            flex
            items-center
            gap-3
            w-full
        "
    >

        {/* glowing background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-pink-500/20 blur-2xl rounded-2xl"></div>

        {/* input */}
        <div className="relative flex-1">

            <input
                type="text"
                placeholder="Enter your futuristic mission..."
                className="
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/30
                    backdrop-blur-xl
                    px-5
                    py-4
                    text-white
                    placeholder:text-white/40
                    outline-none
                    transition-all
                    duration-300
                    focus:border-cyan-400
                    focus:shadow-[0_0_30px_rgba(34,211,238,0.35)]
                    text-lg
                "
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />

            {/* animated glow line */}
            <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 rounded-full opacity-70"></div>

        </div>

        {/* add button */}
        <button
            type="submit"
            className="
                relative
                overflow-hidden
                rounded-2xl
                px-6
                py-4
                font-bold
                text-white
                bg-gradient-to-r
                from-cyan-500
                via-violet-500
                to-pink-500
                hover:scale-105
                active:scale-95
                transition-all
                duration-300
                shadow-[0_0_35px_rgba(168,85,247,0.5)]
                group
            "
        >

            {/* animated shine */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>

            <span className="relative flex items-center gap-2">

                <span className="text-xl">✦</span>

                <span className="hidden sm:block">
                    Add Task
                </span>

            </span>

        </button>

    </form>
)
}

export default TodoForm;

