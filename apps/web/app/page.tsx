import Image from "next/image";
import { Id } from "shared";

export default function Home() {
  return (
    <div>L
      <h1 className="text-4xl">Web</h1>
      <h2 className="text-lg">{Id.novoHash()}</h2> 
    </div>
  );
}
