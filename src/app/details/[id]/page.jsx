import Image from "next/image";
import { FaBellSlash, FaPencilAlt } from "react-icons/fa";
import { IoArchive } from "react-icons/io5";
import { MdAutoDelete } from "react-icons/md";

export default async function DetailsPage({ params }) {
  const { id } = await params;

  const res = await fetch('http://localhost:3000/friends.json');
  const data = await res.json();

  const friend = data.find(f => f.id == id);

  return (
    <div className="w-10/12 m-auto p-4">
      <div className="grid md:grid-cols-5 gap-5">
         <div className="">
          <div  className="card shadow-md space-y-2">
           <div className="card-body items-center text-center">
             <figure>
                 <Image src={friend.picture} width={70} height={70} className='rounded-full border-4 border-green-900' alt={friend.name}/>
             </figure>
             <h2 className="card-title text-3xl">{friend.name}</h2>
            
             <div className="card-actions justify-end">
            <p className="text-[15px] text-gray-600 font-bold">
  {friend.tags.join(', ')}
</p>
                 
             </div>
             <button  className={` ${friend.status === 'on-track'? "bg-green-700" : friend.status === 'almost due' ? "bg-amber-400": 'bg-red-400'} text-white rounded-4xl p-2 `} >{friend.status}</button>
             <p>Email: {friend.email}</p>
           </div>
         </div>
         </div>
         <div className=" col-span-4">
                <div className="grid grid-cols-3  gap-4">
        
        <div className="flex justify-center flex-col items-center h-[150px] shadow rounded">
          <h1 className="md:text-2xl text-xl font-bold text-green-900">{friend.days_since_contact}</h1>
          <p className='text-gray-500 font-semibold text-center' >days since contact</p>
        </div>

        <div className="flex justify-center flex-col items-center h-[150px] shadow rounded">
          <h1 className="md:text-2xl text-xl font-bold text-green-900">{friend.goal}</h1>
           <p className='text-gray-500  font-semibold' >Goal (Days)</p>
        </div>

        <div className="flex justify-center flex-col items-center h-[150px] shadow rounded">
          <h1 className="md:text-2xl text-xl font-bold text-green-900">{friend.next_due_date}</h1>
           <p className='text-gray-500 font-semibold' >Next Due</p>
        </div>

        <div className=" md:col-span-3 col-span-2 h-[160px] flex justify-between shadow rounded p-4">
         <div>
          <h1 className="text-2xl font-bold text-green-900">Relationship Goal</h1>
          <p>Connect every <b>{friend.goal} Day</b></p>
         </div>
         <button className="btn"><FaPencilAlt />Edit</button>
        </div>

      </div>
         </div>
         <div className="space-y-2 flex gap-4 md:block">
          <button className="btn md:w-full  rounded-4xl shadow"><FaBellSlash /> Snooze 2 Week</button>
          <button className="btn md:w-full rounded-4xl shadow"><IoArchive /> Archive</button>
          <button className="btn md:w-full rounded-4xl text-red-500 shadow"><MdAutoDelete /> Delete</button>
         </div>
           <div className=" col-span-4">

           </div>
      </div>
    </div>
  );
}