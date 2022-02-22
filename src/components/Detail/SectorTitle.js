import { ChevronLeftIcon } from "@heroicons/react/outline";

export default function SectorTitle({ children }) {
  return (
    <div className="flex items-center space-x-5">
      <ChevronLeftIcon className="w-6 h-6" />
      <div>{children}</div>
    </div>
  );
}
