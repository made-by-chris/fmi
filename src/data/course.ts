const Course = {
    MONEY_101: {
      id: "money-101",
      title: "Money 101: Stop Being Confused",
      topics: {
        WHAT_IS_MONEY: "What is Money?",
        PAYMENT_TYPES: "Debit vs Credit vs Cash vs Wallets",
        INCOME_VS_EXPENSES: "Income vs Expenses",
        BROKE_LOOP: "The Broke Loop (JS sim)",
        TRACK_SPEND: "Track your spending",
      },
    },
    BANKING: {
      id: "banking",
      title: "Banking",
      topics: {
        OPEN_ACCOUNT: "How to open a bank account",
        CHECKING_VS_SAVINGS: "Checking vs Savings",
        AVOID_FEES_SCAMS: "Avoid fees & scams",
        P2P_APPS: "Venmo / PayPal / Zelle",
        UNBANKED_PARENTS: "What if parents are unbanked?",
        TEEN_FRIENDLY_BANKS: "Teen-friendly banks (PDF)",
      },
    },
    BUDGETING: {
      id: "budgeting",
      title: "Budgeting",
      topics: {
        FIFTY_THIRTY_TWENTY: "50/30/20 Rule (fun version)",
        VARIABLE_INCOME_BUDGET: "Budget with variable income",
        AVOID_DUMB_SPENDING: "Avoid dumb spending",
        EMERGENCY_FUNDS: "Emergency funds ($5 at a time)",
      },
    },
    CREDIT: {
      id: "credit",
      title: "Credit",
      topics: {
        WHAT_IS_CREDIT: "What is credit + why it matters",
        BUILD_CREDIT_TEEN: "How to build credit as a teen",
        INTEREST_APR_DEBT: "Interest, APR, debt explained",
        CREDIT_BLUEPRINT: "Teen credit score blueprint",
      },
    },
    FOR_TEENS: {
      id: "for-teens",
      title: "How to Make Money (For Teens)",
      topics: {
        JOBS_VS_SIDE_HUSTLES: "Jobs vs Side Hustles",
        ONLINE_VS_LOCAL: "Online vs Local businesses",
        TIME_MONEY_TRADEOFF: "Time vs Money trade-off",
        FREELANCING_PLATFORMS: "Freelancing platforms",
        TEEN_TAXES: "Taxes for teens",
      },
    },
    INVESTING: {
      id: "investing",
      title: "Investing",
      topics: {
        WHY_INVEST: "Why investing beats saving",
        COMPOUND_VISUAL: "Compound interest visual",
        ASSET_TYPES: "Stocks vs Crypto vs Index funds",
        START_SMALL: "Start investing with little money",
        ROTH_IRA: "Roth IRAs",
        INDEX_FUNDS: "Importance of index funds",
        AVOID_DAY_TRADING: "Why avoid day trading",
      },
    },
    TAXES: {
      id: "taxes",
      title: "Taxes",
      topics: {
        WHY_TAXES: "Why taxes matter",
        W2_VS_1099_VS_UNDER: "W-2 vs 1099 vs under the table",
        FILE_FOR_FREE: "How to file for free as a teen",
        WHEN_TO_FILE: "When you legally need to file",
        WITHHOLDING_PAYSTUBS: "Withholding & pay stubs explained",
      },
    },
    COLLEGE_FINANCE: {
      id: "college-finance",
      title: "Paying for College Without Debt",
      topics: {
        FAFSA: "FAFSA",
        SCHOLARSHIPS_GRANTS: "Scholarships & grants",
        STUDENT_LOANS: "Student loans decoded",
        AVOID_SCAMMY_COLLEGES: "Avoid scammy colleges",
        GAP_YEAR: "Should I take a gap year?",
      },
    },
    DEBT_SPENDING: {
      id: "debt-spending",
      title: "Debt & Spending Control",
      topics: {
        PAY_CARDS_IN_FULL: "Pay cards in full monthly",
        CAR_DEBT_WARNING: "Avoid car debt (Dave Ramsey style)",
      },
    },
  } as const;
  
  export type ModuleId = keyof typeof Course;
  export type TopicId<M extends ModuleId> = keyof typeof Course[M]["topics"];
  
  export { Course };