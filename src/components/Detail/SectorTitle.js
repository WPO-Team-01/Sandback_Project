import { ChevronLeftIcon } from "@heroicons/react/outline";

export default function SectorTitle({ children, onClick }) {
  return (
    <div className="flex items-center space-x-5">
      <ChevronLeftIcon className="w-6 h-6" onClick={() => onClick()} />
      <div>{children}</div>
    </div>
  );
}
