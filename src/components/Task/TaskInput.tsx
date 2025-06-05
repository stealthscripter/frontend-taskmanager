import { useState } from "react";

interface TaskInputProps {
  onAdd: (title: string) => void;
}

export default function TaskInput({ onAdd }: TaskInputProps) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleAdd = () => {
    if (!input.trim()) {
      setError("Task title cannot be empty");
      return;
    }

    onAdd(input.trim());
    setInput("");
    setError("");
  };

  return (
    <>
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          className="flex-1 border px-3 py-2 rounded"
          placeholder="Enter a new task"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            if (error) setError("");
          }}
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
    </>
  );
}
