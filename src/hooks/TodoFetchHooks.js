import React from "react";

import useTodoFetch from "./useTodoFetch";

function TodoFetchHooks() {
  const { isLoading, todo } = useTodoFetch();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{todo && todo.title}</div>;
}

export default TodoFetchHooks;
