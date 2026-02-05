// Talent & Culture Simulation - Configuration
// 4 distinct configurations representing different organizational talent contexts

export const CONFIGURATIONS = {
  HIGH_GROWTH: {
    id: 'high_growth',
    name: 'High-Growth Scaling',
    description: 'Rapidly scaling organization struggling to maintain culture while doubling headcount',
    initialState: {
      talentPipeline: 0.4,
      employeeEngagement: 0.6,
      culturalAlignment: 0.5,
      leadershipBench: 0.3,
      learningCapability: 0.5,
      employerBrand: 0.7
    },
    modifiers: {
      hiringPressure: 2.0,
      attritionRisk: 1.5,
      cultureFragility: 1.8,
      growthMultiplier: 1.5
    },
    context: {
      headcount: 500,
      annualHiring: 250,
      annualAttrition: 0.18,
      hrBudget: 15000000
    }
  },

  TRANSFORMATION: {
    id: 'transformation',
    name: 'Cultural Transformation',
    description: 'Legacy organization attempting fundamental culture change',
    initialState: {
      talentPipeline: 0.6,
      employeeEngagement: 0.4,
      culturalAlignment: 0.3,
      leadershipBench: 0.5,
      learningCapability: 0.4,
      employerBrand: 0.5
    },
    modifiers: {
      hiringPressure: 1.0,
      attritionRisk: 1.8,
      cultureFragility: 1.5,
      growthMultiplier: 0.8
    },
    context: {
      headcount: 5000,
      annualHiring: 500,
      annualAttrition: 0.15,
      hrBudget: 50000000
    }
  },

  TALENT_WAR: {
    id: 'talent_war',
    name: 'Competitive Talent Market',
    description: 'Fierce competition for scarce technical talent',
    initialState: {
      talentPipeline: 0.3,
      employeeEngagement: 0.5,
      culturalAlignment: 0.6,
      leadershipBench: 0.4,
      learningCapability: 0.6,
      employerBrand: 0.5
    },
    modifiers: {
      hiringPressure: 1.8,
      attritionRisk: 2.0,
      cultureFragility: 1.2,
      growthMultiplier: 1.2
    },
    context: {
      headcount: 2000,
      annualHiring: 400,
      annualAttrition: 0.22,
      hrBudget: 30000000
    }
  },

  POST_MERGER: {
    id: 'post_merger',
    name: 'Post-Merger Integration',
    description: 'Integrating two distinct organizational cultures after acquisition',
    initialState: {
      talentPipeline: 0.5,
      employeeEngagement: 0.35,
      culturalAlignment: 0.25,
      leadershipBench: 0.45,
      learningCapability: 0.5,
      employerBrand: 0.4
    },
    modifiers: {
      hiringPressure: 0.8,
      attritionRisk: 2.2,
      cultureFragility: 2.0,
      growthMultiplier: 0.9
    },
    context: {
      headcount: 8000,
      annualHiring: 600,
      annualAttrition: 0.20,
      hrBudget: 80000000
    }
  }
};

export const TALENT_DIMENSIONS = {
  ATTRACT: { weight: 0.20, name: 'Talent Attraction' },
  DEVELOP: { weight: 0.20, name: 'Talent Development' },
  ENGAGE: { weight: 0.20, name: 'Employee Engagement' },
  RETAIN: { weight: 0.15, name: 'Retention' },
  CULTURE: { weight: 0.15, name: 'Culture' },
  LEAD: { weight: 0.10, name: 'Leadership' }
};

export const CULTURE_ARCHETYPES = {
  INNOVATIVE: { traits: ['risk_taking', 'creativity', 'experimentation'], focus: 'new_ideas' },
  PERFORMANCE: { traits: ['results', 'competition', 'achievement'], focus: 'outcomes' },
  COLLABORATIVE: { traits: ['teamwork', 'consensus', 'inclusion'], focus: 'relationships' },
  PROCESS: { traits: ['efficiency', 'consistency', 'reliability'], focus: 'systems' }
};

export const EMPLOYEE_SEGMENTS = {
  HIGH_PERFORMERS: { percentage: 0.15, retentionPriority: 'critical', developmentFocus: 'acceleration' },
  SOLID_PERFORMERS: { percentage: 0.70, retentionPriority: 'important', developmentFocus: 'growth' },
  DEVELOPING: { percentage: 0.10, retentionPriority: 'selective', developmentFocus: 'improvement' },
  UNDERPERFORMERS: { percentage: 0.05, retentionPriority: 'low', developmentFocus: 'remediation' }
};

export default CONFIGURATIONS;
