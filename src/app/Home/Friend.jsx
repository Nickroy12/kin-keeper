import { Card } from "../ui/Card"

export default async function Friend() {
  const res = await fetch('http://localhost:3000/friends.json')
  const friends = await res.json()

  return (
    <div className="p-3 w-10/12 mx-auto grid md:grid-cols-3 gap-4">
      {friends.map((friend , i) => <Card key={i} friend={friend}/>)}
    </div>
  )
}