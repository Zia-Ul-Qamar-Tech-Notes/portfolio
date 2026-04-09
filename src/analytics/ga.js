import ReactGA from "react-ga4";

const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const initGA = () => {
  if (!GA_ID) return;

  ReactGA.initialize(GA_ID, {
    gaOptions: {
      anonymizeIp: true,     // GDPR friendly
    },
  });
};

// Global page view tracker
export const trackPageView = (path, pageTitle) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
    title: pageTitle,
  });
};

// Generic event tracker (future use)
export const trackEvent = (
  action,
  category,
  label,
  value
) => {
  if (import.meta.env.MODE !== "production") return;

  ReactGA.event({
    action,
    category,
    label,
    value,
  });
};
