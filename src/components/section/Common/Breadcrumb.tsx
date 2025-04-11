import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();

  const segments = location.pathname.split("/").filter((seg) => seg);

  const capitalized = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1).replace(/-/g, " ");

  return (
    <div>
      <div className="text-[48px] tracking-[8px] font-bold text-white mb-4">
        {capitalized(segments[segments.length - 1])}
      </div>
      <div className="text-md text-center font-medium text-white items-center justify-center flex gap-1">
        <Link to="/" className="text-white hover:underline">
          Home
        </Link>
        {segments.map((segment, index) => {
          const path = "/" + segments.slice(0, index + 1).join("/");
          const isLast = index === segments.length - 1;

          return (
            <span key={index} className="flex items-center gap-1">
              <span className="text-white">{">"}</span>
              {isLast ? (
                <span className="text-[#C9F31C]">{capitalized(segment)}</span>
              ) : (
                <Link to={path} className="text-white hover:underline">
                  {capitalized(segment)}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumb;
