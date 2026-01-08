"use client"

import { useWaitForTransactionReceipt, useWriteContract } from "wagmi"
import { COUNTER_ADDRESS, COUNTER_ABI } from "@/contracts/counter"
import { useState } from "react";

type ButtonProps = {
  onSuccess?: () => void;
};

const Button = ({ onSuccess }: ButtonProps ) => {
    const [hash, setHash] = useState<`0x${string}` | undefined>();

    const { mutateAsync, isPending } = useWriteContract()

    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
        hash,
    })

    const handleIncrement = async () => {
        try {
            const txHash = await mutateAsync({
                address: COUNTER_ADDRESS,
                abi: COUNTER_ABI,
                functionName: "increment",
            })

            setHash(txHash)
        } catch (error) {
            console.error("Increment failed:", error);
        }
    }

    if (isSuccess) {
        onSuccess?.();
    }

  return (
    <div className="flex flex-col items-center gap-2">
        <button disabled={isPending || isConfirming} onClick={handleIncrement} className="rounded-xl bg-white text-black px-4 py-2 disabled:opacity-60">
                    {isPending
                        ? "Waiting for wallet..."
                        : isConfirming
                        ? "Updating on-chain..."
                        : "Increment"}
        </button>
        
        {isConfirming && (
            <p className="text-sm text-gray-400">
            Transaction pending on Sepolia…
            </p>
        )}
    </div>
  )
}
export default Button