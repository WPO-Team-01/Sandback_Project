import { ChevronLeftIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

export default function SectorTitle({ children }) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center space-x-5">
      <ChevronLeftIcon className="w-6 h-6" onClick={() => navigate(-1)} />
      <div>{children}</div>
    </div>
  );
}
