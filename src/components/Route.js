import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
  // have to track this in state, even though its tracked live in window object to cause the re-render
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  // empty array = only runs on mount

  return currentPath === path ? children : null;
};

export default Route;
