// "use client";
import { TodoItems } from "@/components/todoItems/TodoItems";
import { prisma } from "@/db";
import Link from "next/link";
import { todo } from "node:test";
import React, { useState } from "react";

function countTodos() {
  // "use client";
  // const [count, setCount] = useState<number>(1);
}

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server";
  await prisma.todo.update({ where: { id }, data: { complete } });
  console.log(id, complete);
}

export default async function Home() {
  const todos = await getTodos();
  // await prisma.todo.create({ data: { title: "ngopi", complete: false } });
  return (
    <div className="w-full h-96 flex justify-center items-center">
      <div className=" w-8/12 h-96 px-5 flex flex-col bg-orange-100 gap-5">
        <div className=" flex justify-end py-3 font-medium items-center relative">
          <h1 className=" text-3xl text-orange-500 font-bold lg:absolute lg:top-4 lg:left-0 lg:right-0 md:absolute md:top-4 md:left-0 md:right-0">
            Remaining Todos: {todos.length}
          </h1>

          <Link href={"/new"}>
            <div className="grid grid-cols-1 w-14 h-10 self-center relative ">
              <div className="w-12 h-8 self-end ml-1 bg-gray-800"></div>
              <button className="absolute top-1 right-0 w-12 h-8 py-1 self-center bg-emerald-400 cursor-pointer transition-all ease-in-out duration-300 hover:top-2 hover:right-1">
                new
              </button>
            </div>
          </Link>
        </div>
        <div className=" h-full w-full overflow-y-auto overflow-x-hidden flex flex-col items-center gap-2">
          {todos.map((v, i, a) => {
            return (
              <TodoItems key={v.id} {...v} toggleTodo={toggleTodo}></TodoItems>
            );
          })}
        </div>
      </div>
    </div>
  );
}
