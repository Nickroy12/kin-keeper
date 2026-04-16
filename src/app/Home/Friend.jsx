import { Card } from "../ui/Card"

export default async function Friend() {
const res = await fetch("http://localhost:3000/friends.json", {
  cache: "no-store"
});
  const friends = await res.json()

  return (
<div className="">
    <div className="divider"></div>
      <div className="p-3 w-10/12 mx-auto grid md:grid-cols-4 gap-4">
      
      {friends.map((friend , i) => <Card key={i} friend={friend}/>)}
    </div>
</div>
  )
}