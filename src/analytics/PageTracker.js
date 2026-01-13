import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "./ga";

const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return null;
};

export default PageTracker;
