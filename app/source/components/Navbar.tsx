import { MegaphoneIcon } from "@heroicons/react/24/solid";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
//curly braces means import the named export ,
//without curly braces it means import the default export so , heroicons has not default export .

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/*search bar */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 ">
        {/* <img src="/search.png" alt="" width={14} height={14} /> */}
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-900" />
        <input type="text"
        placeholder = "Search..."
        className ="w-50 p-2 bg-transparent outline-none" />

      </div>

      {/*icons and user */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7  flex items-center justify-center cursor-pointer">
          {/* <img src="/message.png" alt="" width ={20} height={20}/> */}
          <ChatBubbleLeftRightIcon className="w-5 h-5  text-gray-800" />
        </div>
        <div className="bg-white rounded-full w-7 h-7 flex items-center jsutify-center cursor-pointer relative">
          {/* <img src= "" alt="" width={20} height={20} /> */}
          <MegaphoneIcon className="w-8 h-8 text-gray-800" />

          <div className="absolute top-3 -right-3 w-5 h-5  flex items-center justify-center bg-purple-600 text-white rounded-full text-[10px]">
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium   text-gray-500 text-right">
            Sunny rai
          </span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <UserCircleIcon className="w-8 h-8 text-gray-700" />
      </div>
    </div>
  );
};

export default Navbar;
