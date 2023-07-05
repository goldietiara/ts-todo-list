import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";
import React from "react";

async function createTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }

  await prisma.todo.create({ data: { title, complete: false } });
  redirect("/");
  console.log("hi");
}

const New = () => {
  return (
    <div className="w-full h-96 flex justify-center items-center">
      <div className=" w-8/12 h-96 px-5 flex flex-col bg-orange-100">
        <div className=" flex gap-5 py-3 font-medium items-center relative">
          <h1 className=" text-3xl text-orange-500 font-bold lg:absolute lg:top-4 lg:left-0 lg:right-0 md:absolute md:top-4 md:left-0 md:right-0">
            Create New Todo
          </h1>
          <Link href={"/"}>
            <div className="grid grid-cols-1 w-14 h-10 self-center relative ">
              <div className="w-12 h-8 self-end ml-1 bg-gray-800"></div>
              <button className="absolute top-1 right-0 w-12 h-8 py-1 self-center bg-pink-400 cursor-pointer transition-all ease-in-out duration-300 hover:top-2 hover:right-1">
                back
              </button>
            </div>
          </Link>
        </div>
        <div className=" w-96 h-32 self-center flex justify-center items-center relative mt-5">
          <form
            action={createTodo}
            className="w-80 h-28 grid grid-cols-1 place-items-center border-2 border-gray-800 absolute right-7 bg-red-200"
          >
            <input
              name="title"
              type="text"
              placeholder="type here"
              className=" w-full h-full overflow-auto text-left bg-white border-b-2 border-gray-800 self-center py-3 px-5"
            ></input>
            <button
              type="submit"
              className="bg-yellow-300 py-3 px-5 w-full h-full transition-all ease-in-out duration-200 font-medium hover:text-base hover:py-4 hover:font-semibold"
            >
              <p>add</p>
            </button>
          </form>
          <div className=" h-28 w-80 bg-gray-800 self-end mr-2"></div>
        </div>
      </div>
    </div>
  );
};

export default New;
