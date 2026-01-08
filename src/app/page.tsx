import Counter from "./Components/Counter";
import Button from "./Components/Button";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="w-screen flex justify-center p-8">
        <ConnectButton />
      </div>
      
      <div className="flex flex-col justify-center items-center gap-20 h-4/5">
        <Counter />
        <Button />
      </div>
    </main>
  );
}
