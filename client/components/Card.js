import { MdOutlineContentCopy, MdOutlineMoreVert } from "react-icons/md";
import { useEffect } from "react";
import hljs from "highlight.js";
import { toast } from "react-toastify";
function Card({ code, title }) {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  function copyToClipBoard() {
    navigator.clipboard.writeText(code);
    toast(`Code Copied Successfully`, {
      position: "top-center",
      type: "success",
    });
  }

  return (
    <div className="rounded-md p-5 shadow-lg border-2 dark:border-primary border-gray-50  max-h-80">
      <div className="flex justify-between">
        <h3 className="font-bold mr-4">{title}</h3>
        <div className="flex relative">
          <MdOutlineContentCopy
            onClick={copyToClipBoard}
            size="24"
            className="cursor-pointer mr-5"
          />
          <MdOutlineMoreVert size="24" className="cursor-pointer" />
          {/* <div className="depth-shadow w-24  p-4 rounded-md border  top-8 right-0 absolute bg-white">
            <button className="mb-2 hover:text-primary">Edit</button>
            <button className=" hover:text-primary">Delete</button>
          </div> */}
        </div>
      </div>
      <pre className="mt-4 lg:max-h-64 max-h-56 overflow-scroll">
        <code>{code}</code>
      </pre>
      <style jsx>{`
        ::-webkit-scrollbar {
          width: 0px;
        }
      `}</style>
    </div>
  );
}

export default Card;