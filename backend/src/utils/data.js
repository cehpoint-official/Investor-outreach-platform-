// Expected keys for CSV upload
const EXPECTED_KEYS = [
  "partner_name",
  "partner_email",
  "firm_name",
  "fund_stage",
  "fund_type",
  "sector_focus",
  "portfolio_companies",
  "investment_size",
  "location",
  "website",
  "linkedin",
  "twitter",
  "notes"
];

// Fund stages
const FUND_STAGES = [
  "Pre-seed",
  "Seed",
  "Series A",
  "Series B",
  "Series C",
  "Series D",
  "Series E+",
  "Growth",
  "Late Stage",
  "IPO"
];

// Fund types
const FUND_TYPES = [
  "Venture Capital",
  "Private Equity",
  "Angel Investor",
  "Corporate VC",
  "Government Fund",
  "University Fund",
  "Family Office",
  "Accelerator",
  "Incubator"
];

// Sector focus areas
const SECTOR_FOCUS = [
  "Technology",
  "Healthcare",
  "Fintech",
  "E-commerce",
  "SaaS",
  "AI/ML",
  "Biotech",
  "Clean Energy",
  "Education",
  "Real Estate",
  "Transportation",
  "Entertainment",
  "Food & Beverage",
  "Fashion",
  "Sports",
  "Media",
  "Manufacturing",
  "Retail",
  "Agriculture",
  "Other"
];

module.exports = {
  EXPECTED_KEYS,
  FUND_STAGES,
  FUND_TYPES,
  SECTOR_FOCUS,
}; 