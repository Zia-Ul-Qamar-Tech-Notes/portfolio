import { trackEvent } from "./ga";

export const AnalyticsEvents = {
  downloadResume: () =>
    trackEvent("download_resume", "resume" , "user_downloaded_resume"),
  hireMe: () =>
    trackEvent("hire_me", "hire" , "user_clicked_hire_me"),
  contactFormSubmit: () =>
    trackEvent("contact_form_submit", "contact" , "user_submitted_contact_form"),
};
