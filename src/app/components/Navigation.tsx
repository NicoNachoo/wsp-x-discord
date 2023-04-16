import Image from "next/image";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center p-4 border-b-[1px] border-b-black dark:border-b-white">
      <div className="flex items-center w-full">
        <h1 className="text-2xl font-bold">Wsp X Discord</h1>
      </div>
    </nav>
  );
}
