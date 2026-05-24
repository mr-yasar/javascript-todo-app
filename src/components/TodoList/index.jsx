import { useState }  from "react"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { TodoItem } from "@/components/TodoItem";


function TodoList() {
  //const [todos, setTodos] = useState<TodoItemData[]>([]);
  const [newTodo, setNewTodo] = useState("");
  // const [selectedFilter, setSelectedFilter] = useState<"all" | "pending" | "completed">("all");
  const [selectedFilter, setSelectedFilter] = useState("all");
  

  const todos = [];

  
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;

    const todoItem = {
      text: newTodo,
      isCompleted: false,
    }

    // Add the new todo item to the list
    setNewTodo("");
  }

  const onAddTodoChange = (e) => {
    setNewTodo(e.target.value);
  }

  const toggleTodoItemComplete = (id) => {
    console.log("Toggle complete for todo item with id:", id);
  }

  const openTodoItemEditMode = (id) => {
    console.log("Open edit mode for todo item with id:", id);
  }

  const closeTodoItemEditMode = (id) => {
    console.log("Close edit mode for todo item with id:", id);
  }

  const updateTodoItemText = (id, newText) => {
    console.log("Update text for todo item with id:", id, "to new text:", newText);
  }

  const deleteTodoItem = (id) => {
    console.log("Delete todo item with id:", id);
  }

  // const allCount = todos.length;
  // const pendingCount = todos.filter(todo => !todo.isCompleted).length;
  // const completedCount = todos.filter(todo => todo.isCompleted).length;

  // const filteredTodos = todos.filter(todo => {
  //   if (selectedFilter === "pending") {
  //     return !todo.isCompleted;
  //   } else if (selectedFilter === "completed") {
  //     return todo.isCompleted;
  //   }
  //   return true;
  // });

  return (
    <div className="flex flex-col w-full gap-4">
      <form className="flex gap-1 w-full" onSubmit={handleAddTodo}>
        <Input type="text" id="add-task" placeholder="Add todo item" value={newTodo} onChange={onAddTodoChange} />
        <Button type="submit" variant="secondary">Add</Button>
      </form>
      {/* <div className="flex gap-3">
        <Button size="sm" variant={selectedFilter === "all" ? "default" : "outline"} onClick={() => setSelectedFilter("all")}>
          All({allCount})
        </Button>
        <Button size="sm" variant={selectedFilter === "pending" ? "default" : "outline"} onClick={() => setSelectedFilter("pending")}>
          Pending({pendingCount})
        </Button>
        <Button size="sm" variant={selectedFilter === "completed" ? "default" : "outline"} onClick={() => setSelectedFilter("completed")}>
          Completed({completedCount})
        </Button>
      </div> */}
      <div className="flex flex-col gap-1">
        {todos.map((todo) => (
          <TodoItem 
            key={todo.id} 
            id={todo.id} 
            text={todo.text}
            isCompleted={todo.isCompleted}
            toggleTodoItemComplete={toggleTodoItemComplete}
            mode="view"
            openTodoItemEditMode={openTodoItemEditMode}
            updateTodoItemText={updateTodoItemText}
            closeTodoItemEditMode={closeTodoItemEditMode}
            deleteTodoItem={deleteTodoItem}
          />
        ))}
      </div>
    </div>
  );
}

export { TodoList };