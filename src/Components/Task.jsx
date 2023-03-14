// import React, { useState } from "react";

// function editTask(id, newName) {
//   const editedTaskList = tasks.map((task) => {
//   // if this task has the same ID as the edited task
//     if (id === task.id) {
//       //
//       return {...task, name: newName}
//     }
//     return task;
//   });
//   setTasks(editedTaskList);
// }

// const taskList = tasks.map((task) => (
//   <Todo
//     id={task.id}
//     name={task.name}
//     completed={task.completed}
//     key={task.id}
//     toggleTaskCompleted={toggleTaskCompleted}
//     deleteTask={deleteTask}
//     editTask={editTask}
//   />
// ));
// const [isEditing, setEditing] = useState(false);

// const editingTemplate = (
//   <form className="stack-small">
//     <div className="form-group">
//       <label className="todo-label" htmlFor={props.id}>
//         New name for {props.name}
//       </label>
//       <input id={props.id} className="todo-text" type="text" />
//     </div>
//     <div className="btn-group">
//       <button type="button" className="btn todo-cancel">
//         Cancel
//         <span className="visually-hidden">renaming {props.name}</span>
//       </button>
//       <button type="submit" className="btn btn__primary todo-edit">
//         Save
//         <span className="visually-hidden">new name for {props.name}</span>
//       </button>
//     </div>
//   </form>
// );
// const viewTemplate = (
//   <div className="stack-small">
//     <div className="c-cb">
//         <input
//           id={props.id}
//           type="checkbox"
//           defaultChecked={props.completed}
//           onChange={() => props.toggleTaskCompleted(props.id)}
//         />
//         <label className="todo-label" htmlFor={props.id}>
//           {props.name}
//         </label>
//       </div>
//       <div className="btn-group">
//         <button type="button" className="btn">
//           Edit <span className="visually-hidden">{props.name}</span>
//         </button>
//         <button
//           type="button"
//           className="btn btn__danger"
//           onClick={() => props.deleteTask(props.id)}
//         >
//           Delete <span className="visually-hidden">{props.name}</span>
//         </button>
//       </div>
//   </div>
// );

// return <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>;

{/* <button type="button" className="btn" onClick={() => setEditing(true)}>
  Edit <span className="visually-hidden">{props.name}</span>
</button>

<button
  type="button"
  className="btn todo-cancel"
  onClick={() => setEditing(false)}
>
  Cancel
  <span className="visually-hidden">renaming {props.name}</span>
</button> */}

// const [newName, setNewName] = useState('');

// function handleChange(e) {
//   setNewName(e.target.value);
// }

// <input
//   id={props.id}
//   className="todo-text"
//   type="text"
//   value={newName}
//   onChange={handleChange}
// />

// function handleSubmit(e) {
//   e.preventDefault();
//   props.editTask(props.id, newName);
//   setNewName("");
//   setEditing(false);
// }

// <form className="stack-small" onSubmit={handleSubmit}></form>

// const [filter, setFilter] = useState('All');

// const FILTER_MAP = {
//   All: () => true,
//   Active: (task) => !task.completed,
//   Completed: (task) => task.completed
// };

// const FILTER_NAMES = Object.keys(FILTER_MAP);

// const filterList = FILTER_NAMES.map((name) => (
//   <FilterButton key={name} name={name}/>
// ));




// function FilterButton() {

//     return (
//         <div className="container mx-auto flex flex-col items-center justify-between p-4 mb-2 rounded-xl shadow-md md:flex-row" >
//             <h1 className="text-xl mb-3 md:mb-0">Filter an accounts</h1>
//             <div className='flex gap-x-6'>
//                 <div>
//                     <input type="radio" id="all" name="accounts" className="peer hidden" value="all" /*checked*/ />
//                     <label htmlFor="coding" className="block cursor-pointer select-none rounded-xl py-1 px-6 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">All</label>
//                 </div>
//                 <div>
//                     <input type="radio" id="active" name="accounts" className="peer hidden" value="active" />
//                     <label htmlFor="music" className="block cursor-pointer select-none rounded-xl py-1 px-6 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">Active</label>
//                 </div>
//                 <div>
//                     <input type="radio" id="empty" name="accounts" className="peer hidden" value="empty" />
//                     <label htmlFor="music" className="block cursor-pointer select-none rounded-xl py-1 px-6 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white" >Empty</label>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default FilterButton;
