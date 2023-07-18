"use client"
import axios from "axios"
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
      const response = await axios.get(
        `https://na1.api.riotgames.com/tft/summoner/v1/summoners/by-name/Dingus%20Khann?api_key=${process.env.NEXT_PUBLIC_RIOT_API_KEY}`
      );
        setUser(response.data)
      } catch (err) {
        // Not in 200 response range
        console.log(`Error:`)
      }
    } 

    fetchUser();
  }, [])
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <pre>{ user }</pre>
    </main>
  )
}
