import Image from "next/image";
import Posts from "./components/Posts";
export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-2 items-center justify-center m-8">
        <div className="w-full sm:w-full md:w-1/2">
          <Posts />
        </div>
      </div>
    </>
  );
}
