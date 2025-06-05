import { Check, X } from "lucide-react";
import type { Task } from "../../types/Task";
import { useState } from "react";

interface TaskItemProps {
  task: Task;
  onToggle: () => void;
  onDelete: () => void;
}

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    setTimeout(() => {
      onDelete();
    }, 300);
  };

  return (
    <li
      className={`flex justify-between items-center border border-zinc-200 hover:border-zinc-400 p-2 rounded transition-all duration-300 ${
        isDeleting ? "opacity-0 translate-y-[-20px]" : "opacity-100"
      }`}
    >
      <div className="flex items-center flex-1 cursor-pointer" onClick={onToggle}>
        <span
          className={`w-5 h-5 mr-2 rounded border flex items-center justify-center text-xs ${
            task.completed
              ? "bg-kuraz border-kuraz text-white"
              : "border-gray-400"
          }`}
        >
          {task.completed && <Check size={15} />}
        </span>
        <span
          className={`${
            task.completed ? "line-through text-gray-400" : ""
          }`}
        >
          {task.title}
        </span>
      </div>
      <button
        onClick={handleDelete}
        className="text-red-500 hover:text-red-700 ml-4 cursor-pointer"
        aria-label="Delete task"
      >
        <X />
      </button>
    </li>
  );
}