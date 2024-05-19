import NavbarItem from "./NavbarItem";
import { useSearchParams } from "next/navigation";
export default function Navbar() {
  return (
    <div className="w-full h-14 bg-amber-100 flex justify-center items-center gap-7 dark:bg-gray-600 p-4">
      <NavbarItem title="Trending" fetchParam="fetchTrending" />
      <NavbarItem title="Top Rated" fetchParam="fetchTopRated" />
    </div>
  );
}
