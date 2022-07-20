import { useMatch, useResolvedPath, Link } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);

  let match = useMatch({ path: `${resolved.pathname}/*`, end: true });

  return (
    <div>
      <Link to={to} {...props}>
        <div
          className={
            match
              ? "text-base font-semibold text-black md:text-white"
              : "text-base font-semibold text-slate-400 md:text-[#808080]"
          }
        >
          {children}
        </div>
      </Link>
    </div>
  );
};

export default CustomLink;
