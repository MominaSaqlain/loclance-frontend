// lib/mock.ts
export type Lead = {
  id: string;
  name: string;
  city: string;
  industry: string;
  source: string;
  status: "New" | "Contacted" | "Proposal" | "Won" | "Lost";
  budget: number;
};

export type Job = {
  id: string;
  title: string;
  city: string;
  keywords: string[];
  postedAt: string; // ISO date
};

export const kpis = {
  orders: 120,
  revenue: 4500,
  customers: 350,
  winRate: 42,
};

export const revenueSeries = [
  { month: "Jan", revenue: 800 },
  { month: "Feb", revenue: 920 },
  { month: "Mar", revenue: 1010 },
  { month: "Apr", revenue: 1200 },
  { month: "May", revenue: 1400 },
  { month: "Jun", revenue: 1550 },
  { month: "Jul", revenue: 1720 },
  { month: "Aug", revenue: 1900 },
];

export const funnel = [
  { name: "New", value: 58 },
  { name: "Contacted", value: 34 },
  { name: "Proposal", value: 21 },
  { name: "Won", value: 9 },
  { name: "Lost", value: 7 },
];

export const leads: Lead[] = [
  { id: "L-101", name: "Al Noor Bakery", city: "Lahore", industry: "Food", source: "Google Maps", status: "Contacted", budget: 350 },
  { id: "L-102", name: "TechVista", city: "Karachi", industry: "IT", source: "Website", status: "New", budget: 900 },
  { id: "L-103", name: "Sana Boutique", city: "Islamabad", industry: "Retail", source: "Instagram", status: "Proposal", budget: 1200 },
  { id: "L-104", name: "Green Clinic", city: "Faisalabad", industry: "Healthcare", source: "Referral", status: "Won", budget: 2000 },
  { id: "L-105", name: "Alpha Gym", city: "Multan", industry: "Fitness", source: "Google Maps", status: "New", budget: 600 },
];

export const jobs: Job[] = [
  { id: "J-201", title: "Shopify store redesign", city: "Karachi", keywords: ["shopify","ui"], postedAt: "2025-08-10" },
  { id: "J-202", title: "Restaurant website revamp", city: "Lahore", keywords: ["wordpress","seo"], postedAt: "2025-08-11" },
  { id: "J-203", title: "Clinic appointment app", city: "Islamabad", keywords: ["react","node"], postedAt: "2025-08-12" },
];

export const reminders = [
  { id: "R-1", title: "Follow up: Al Noor Bakery", due: "Today 5:00 PM" },
  { id: "R-2", title: "Send proposal: Sana Boutique", due: "Tomorrow 11:00 AM" },
  { id: "R-3", title: "Email case-study to TechVista", due: "Aug 16, 9:30 AM" },
];

export const quickTips = [
  "Send a short voice note (30s) with your pitch.",
  "Personalize subject lines with city name.",
  "Attach 1 best-case study instead of 5 links.",
];
