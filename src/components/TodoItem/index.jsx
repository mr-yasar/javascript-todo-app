import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { EditIcon, TrashIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

function TodoItem(props) {
  const {
    id,
    text,
    isCompleted,
    toggleTodoItemComplete,
    openTodoItemEditMode,
    closeTodoItemEditMode,
    updateTodoItemText,
    deleteTodoItem,
    mode = 'view'
  } = props;

  const [todoItemText, setTodoItemText] = useState('Suren');

  console.log('todoItemText ===>');

  const onTodoItemTextChange = (e) => {
    console.log('TodoItem text changed:', e.target.value);
    setTodoItemText(e.target.value);
  };

  const handleCloseEditMode = (id) => {
    closeTodoItemEditMode(id);
    setTodoItemText(text);
  };

  const handleEditSave = (e) => {
    e.preventDefault();
    updateTodoItemText(id, todoItemText);
  };

  return (
    <div>
      {mode === 'view' && (
        <div className="flex gap-2 w-full items-center border-b px-2 py-1">
          <Checkbox
            id={`checkbox-${id}`}
            checked={isCompleted} 
            onCheckedChange={() => toggleTodoItemComplete(id)}
          />
          <div className="flex-1">
            <label
              className={cn("cursor-pointer", isCompleted && "line-through")}
              htmlFor={`checkbox-${id}`}
            >
              {text}
            </label>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => openTodoItemEditMode(id)}
          >
            <EditIcon className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => deleteTodoItem(id)}
          >
            <TrashIcon className="h-4 w-4" />
          </Button>
        </div>
      )}
      {mode === 'edit' && (
        <form 
          className="flex gap-2 w-full items-center border-b px-2 py-1"
          onSubmit={handleEditSave}
        >
          <Input
            type="text"
            value={todoItemText}
            className="flex-1"
            onChange={onTodoItemTextChange}
            autoFocus
          />
          <Button variant="ghost" type="submit">
            Save
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8" 
            onClick={() => handleCloseEditMode(id)}
          >
            <XIcon className="h-4 w-4" />
          </Button>
        </form>
      )}
    </div>
  );
}

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  mode: PropTypes.oneOf(['view', 'edit']),
  toggleTodoItemComplete: PropTypes.func.isRequired,
  openTodoItemEditMode: PropTypes.func.isRequired,
  closeTodoItemEditMode: PropTypes.func.isRequired,
  updateTodoItemText: PropTypes.func.isRequired,
  deleteTodoItem: PropTypes.func.isRequired,
};

export { TodoItem };