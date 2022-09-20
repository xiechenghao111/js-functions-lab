fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const todoscompletedByUser = json.reduce ((acc, todo)=> {
     todo.completed
     ? acc
     : acc.push ({userId: todo.userId, title: todo.title })
     return acc;
     }, []);
     console.log(todoscompletedByUser);
    })
    .catch(function(err) { 
      console.log(err);
    });
   