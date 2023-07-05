"use client";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
};
export function TodoItems({ id, title, complete, toggleTodo }: TodoItemProps) {
  return (
    <div className="grid grid-cols-1 w-96 h-16 relative ">
      <div className="py-3 px-5 w-80 ml-8 h-14 self-end bg-gray-800 "></div>
      <div className=" flex gap-2 absolute top-1 right-7 py-4 px-5 w-80 h-14 overflow-auto text-left bg-white border-2 border-gray-800 transition-all ease-in-out duration-300 hover:right-6 hover:top-0 cursor-pointer">
        <div className=" flex justify-between flex-row-reverse w-full">
          <input
            type="checkbox"
            id={id}
            className=" cursor-pointer peer self-center"
            defaultChecked={complete}
            onChange={(e) => toggleTodo(id, e.target.checked)}
          />

          <label
            htmlFor={id}
            className=" cursor-pointer peer-checked:line-through peer-checked:text-stone-300"
          >
            {title}
          </label>
        </div>
        <button className=" font-medium bg-pink-400 w-3 h-3 self-center text-xs shadow-inner relative hover:bg-pink-600"></button>
      </div>
    </div>
  );
}
