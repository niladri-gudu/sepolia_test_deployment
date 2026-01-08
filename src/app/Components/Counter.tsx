"use client"

import { useReadContract } from "wagmi"
import { COUNTER_ADDRESS, COUNTER_ABI } from "@/contracts/counter"

const Counter = () => {
    const { data, isLoading } = useReadContract({
        address: COUNTER_ADDRESS,
        abi: COUNTER_ABI,
        functionName: "getCount"
    })

    if (isLoading) {
        return <p>Loading...</p>
    }

  return (
    <p className="text-9xl">
      Count: {data?.toString()}
    </p>
  )
}
export default Counter