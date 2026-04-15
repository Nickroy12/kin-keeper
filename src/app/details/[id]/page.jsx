import Image from "next/image";
import { CiChat1 } from "react-icons/ci";
import { FaBellSlash, FaPencilAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoArchive, IoVideocamOutline } from "react-icons/io5";
import { MdAutoDelete } from "react-icons/md";

export default async function DetailsPage({ params }) {
  const { id } = await params;

  const res = await fetch("http://localhost:3000/friends.json");
  const data = await res.json();

  const friend = data.find((f) => f.id == id);

  return (
  <div className="w-10/12 m-auto p-4">
    <h1 className="text-4xl font-bold mb-5">Friends Profile</h1>
  <div className="grid md:grid-cols-5 gap-5">
    
  
    <div className="md:col-span-1 space-y-4">
      <div className="card shadow-md">
        <div className="card-body items-center text-center space-y-2">
          <Image
            src={friend.picture}
            width={70}
            height={70}
            className="rounded-full border-4 border-green-900"
            alt={friend.name}
          />
          <h2 className="text-2xl font-bold">{friend.name}</h2>

          <p className="text-sm text-gray-600 font-bold">
            {friend.tags.join(", ")}
          </p>

          <button
            className={`${
              friend.status === "on-track"
                ? "bg-green-700"
                : friend.status === "almost due"
                ? "bg-amber-400"
                : "bg-red-400"
            } text-white px-4 py-1 rounded-full`}
          >
            {friend.status}
          </button>

          <p className="text-sm">Email: {friend.email}</p>
        </div>
      </div>

   
      <div className="flex flex-col gap-3">
        <button className="btn w-full rounded-full shadow">
          <FaBellSlash /> Snooze 2 Week
        </button>
        <button className="btn w-full rounded-full shadow">
          <IoArchive /> Archive
        </button>
        <button className="btn w-full rounded-full text-red-500 shadow">
          <MdAutoDelete /> Delete
        </button>
      </div>
    </div>

   
    <div className="md:col-span-4 space-y-5">
      
      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center justify-center h-[150px] shadow rounded">
          <h1 className="text-2xl font-bold text-green-900">
            {friend.days_since_contact}
          </h1>
          <p className="text-gray-500">Days since contact</p>
        </div>

        <div className="flex flex-col items-center justify-center h-[150px] shadow rounded">
          <h1 className="text-2xl font-bold text-green-900">
            {friend.goal}
          </h1>
          <p className="text-gray-500">Goal (Days)</p>
        </div>

        <div className="flex flex-col items-center justify-center h-[150px] shadow rounded">
          <h1 className="text-2xl font-bold text-green-900">
            {friend.next_due_date}
          </h1>
          <p className="text-gray-500">Next Due</p>
        </div>
      </div>

     
      <div className="flex justify-between items-center shadow rounded p-4">
        <div>
          <h1 className="text-xl font-bold text-green-900">
            Relationship Goal
          </h1>
          <p>
            Connect every <b>{friend.goal} Day</b>
          </p>
        </div>
        <button className="btn">
          <FaPencilAlt /> Edit
        </button>
      </div>

  
      <div className="grid md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center py-10 shadow rounded">
          <IoIosCall className="text-3xl text-green-900" />
          <p>Call</p>
        </div>

        <div className="flex flex-col items-center py-10 shadow rounded">
          <CiChat1 className="text-3xl text-green-900" />
          <p>Chat</p>
        </div>

        <div className="flex flex-col items-center py-10 shadow rounded">
          <IoVideocamOutline className="text-3xl text-green-900" />
          <p>Video Call</p>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
