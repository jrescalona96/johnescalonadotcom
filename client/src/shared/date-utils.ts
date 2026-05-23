import { Experience } from "../data/models/experience";

export const formatDate = (exp: Experience) => {
  if (!exp.startDate && !exp.endDate) return "";
  if (exp.startDate && !exp.endDate) return "Present";
  if (exp.startDate && exp.endDate && exp.startDate === exp.endDate) return String(exp.startDate);
  if (exp.startDate && exp.endDate && exp.startDate !== exp.endDate) {
    if (exp.type === "education" || (exp.endDate - exp.startDate) > 1) {
      return `${exp.startDate} – ${exp.endDate}`;
    }
    return String(exp.startDate);
  }
  return "";
};
