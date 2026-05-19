import React,{useState} from 'react'
import { useTodo } from '../contexts/Todocontext';
function TodoItem({ todo }) {
    const {updateTodo, deleteTodo, toggleComplete}=useTodo()
    const [isEdit, setisEdit]= useState(false)
    const [todoMsg, settodoMsg]=useState(todo.todo)
    const editTodo =()=>{
        updateTodo(todo.id,{...todo,todo: todoMsg})
        setisEdit(false)
    }
    const handletoggleComplete=()=>{
        toggleComplete(todo.id)
    }

return (
    <div
        className={`
            group
            relative
            overflow-hidden
            flex
            items-center
            gap-4
            rounded-[28px]
            border
            px-4
            py-4
            backdrop-blur-2xl
            transition-all
            duration-500
            hover:scale-[1.015]
            ${
                todo.completed
                    ? "bg-emerald-500/10 border-emerald-400/20 shadow-[0_0_35px_rgba(16,185,129,0.18)]"
                    : "bg-white/5 border-white/10 shadow-[0_0_35px_rgba(168,85,247,0.15)]"
            }
        `}
    >

        {/* hover glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/5 via-violet-500/5 to-pink-500/5"></div>

        {/* checkbox */}
        <label className="relative z-10 cursor-pointer">

            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handletoggleComplete}
                className="peer hidden"
            />

            <div
                className="
                    w-7
                    h-7
                    rounded-full
                    border-2
                    border-cyan-400
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    peer-checked:bg-cyan-400
                    peer-checked:shadow-[0_0_20px_rgba(34,211,238,0.7)]
                "
            >

                <span className="text-black text-sm opacity-0 peer-checked:opacity-100">
                    ✓
                </span>

            </div>

        </label>

        {/* input */}
        <input
            type="text"
            value={todoMsg}
            onChange={(e) => settodoMsg(e.target.value)}
            readOnly={!isEdit}
            className={`
                relative
                z-10
                flex-1
                bg-transparent
                outline-none
                rounded-2xl
                px-3
                py-2
                text-lg
                md:text-xl
                font-medium
                transition-all
                duration-300
                ${
                    todo.completed
                        ? "text-emerald-200"
                        : "text-white"
                }
                ${
                    isEdit
                        ? "border border-cyan-400/30 bg-white/5 shadow-[0_0_20px_rgba(34,211,238,0.18)]"
                        : "border border-transparent"
                }
            `}
        />

        {/* buttons */}
        <div className="relative z-10 flex items-center gap-2">

            {/* edit/save */}
            <button
                onClick={() => {
                    if (todo.completed) return

                    if (isEdit) {
                        editTodo()
                    } else {
                        setisEdit((prev) => !prev)
                    }
                }}
                disabled={todo.completed}
                className="
                    w-11
                    h-11
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    bg-white/10
                    border
                    border-white/10
                    hover:bg-cyan-500/15
                    hover:border-cyan-400/40
                    transition-all
                    duration-300
                    disabled:opacity-40
                "
            >

                <span className="text-lg">
                    {isEdit ? "💾" : "✏️"}
                </span>

            </button>

            {/* delete */}
            <button
                type="button"
                onClick={() => deleteTodo(todo.id)}
                className="
                    w-11
                    h-11
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    bg-red-500/10
                    border
                    border-red-400/20
                    hover:bg-red-500/20
                    hover:border-red-400/40
                    hover:shadow-[0_0_20px_rgba(239,68,68,0.35)]
                    active:scale-90
                    transition-all
                    duration-300
                "
            >

                <span className="text-red-300 text-xl">
                    ⨯
                </span>

            </button>

        </div>

        {/* side glow bar */}
        <div
            className={`
                absolute
                left-0
                top-0
                h-full
                w-[4px]
                rounded-full
                ${
                    todo.completed
                        ? "bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.8)]"
                        : "bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                }
            `}
        ></div>

    </div>
)
}

export default TodoItem;
