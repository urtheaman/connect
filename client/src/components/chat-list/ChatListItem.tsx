import Image from "next/image";

const ChatListItem = () => {
  const fullName = "Alyssia Octavia";
  const imageSrc = "/girl1.jpg";
  const lastMessage = "Hii Alyssia! please reply me baby😘";
  return (
    <div className="flex items-start w-full px-2">
      <div>
        <Image
          src={imageSrc}
          alt={fullName}
          width={45}
          height={45}
          className="rounded-full"
        />
      </div>
      <div className="ml-3 border-b border-gray-300 pb-4 mb-4 flex-grow">
        <div className="flex flex-col w-full mr-1 cursor-pointer">
          <div className="flex justify-between items-center">
            <h4 className="font-semibold text-light-black">Estelle Harwood</h4>
            <span className="text-[0.65rem] whitespace-nowrap">1 min ago</span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm">
              {lastMessage.slice(0, 29) +
                (lastMessage.length > 29 ? "..." : "")}
            </p>
            <span className="bg-green-400 text-black rounded-2xl ml-1 px-3 flex items-center justify-center text-xs font-semibold">
              2
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatListItem;