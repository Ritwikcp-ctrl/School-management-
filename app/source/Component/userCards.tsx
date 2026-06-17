import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

const UserCard = ({ type }: { type: String }) => {
  return (
    <div className="rounded-2xl odd:bg-purple-300 even:bg-amber-300 p-4 flex-1">
      <div className="flex justify-between items-cneter">
        <span className="text-[10px] bg-amber-50 px-2 py-1 rounded-full text-green-500">
          2025/26
        </span>
        <EllipsisHorizontalIcon className="size-6 width={20} height ={20}" />
      </div>

      <h1 className="text-2xl font-semibold my -4">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">
        {JSON.stringify(type)}
      </h2>
    </div>
  );
};

export default UserCard;
