import { useEffect } from "react";
import { trackPageView } from "./ga";

const PageTracker = (pageTitle) => {
  const location = window.location.pathname

  useEffect(() => {
    trackPageView(location, pageTitle);
  }, [location, pageTitle]);

  return null;
};

export default PageTracker;
