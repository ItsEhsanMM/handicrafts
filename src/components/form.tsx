import React from "react";

export default function Form() {
   return (
      <>
         <div className="w-full md:w-1/3 flex flex-col gap-y-2 rounded-2xl p-4 bg-red-500">
            <span>ارسال پیام به ما</span>
            <input
               className=" p-2 indent-2 bg-background rounded-xl"
               type="text"
               placeholder="name"
            />
            <input
               className=" p-2 indent-2 bg-background rounded-xl"
               type="text"
               placeholder="name"
            />
            <input
               className=" p-2 indent-2 bg-background rounded-xl"
               type="text"
               placeholder="name"
            />
            <textarea
               name="postContent"
               className="bg-background rounded-2xl w-full h-38 resize-none"
            />
            <div className="w-full flex justify-end">
               <button className="bg-primary px-4 py-2  rounded-lg flex items-center justify-center">
                  <span>ارسال</span>
               </button>
            </div>
         </div>
      </>
   );
}
