import { useEffect } from "react";
import { trackPageView } from "./ga";
// eslint-disable-next-line react/prop-types
const PageTracker = ({ pageTitle }) => {
  useEffect(() => {
    trackPageView(window.location.pathname, pageTitle);
  }, [pageTitle]);

  return null;
};

export default PageTracker;
