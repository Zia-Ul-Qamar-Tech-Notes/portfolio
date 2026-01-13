import { useEffect } from "react";
import { trackPageView } from "./ga";

const PageTracker = (pageName ) => {
  useEffect(() => {
    trackPageView(window.location.pathname, pageName);
  }, [pageName]);

  return null;
};

export default PageTracker;
