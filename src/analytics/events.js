import { trackEvent } from "./ga";

export const AnalyticsEvents = {
  downloadResume: () =>
    trackEvent("download_resume", "resume" , "user_downloaded_resume"),
};
