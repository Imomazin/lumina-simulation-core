// Strategic Leadership Simulation - Configuration
// 4 distinct configurations representing different leadership contexts

export const CONFIGURATIONS = {
  TURNAROUND: {
    id: 'turnaround',
    name: 'Corporate Turnaround',
    description: 'Lead a struggling organization back to health under intense pressure',
    initialState: {
      strategicClarity: 0.3,
      executionCapability: 0.4,
      stakeholderTrust: 0.3,
      organizationalMomentum: 0.2,
      leadershipCredibility: 0.5,
      changeReadiness: 0.6
    },
    modifiers: {
      urgencyMultiplier: 1.8,
      stakeholderPatience: 0.5,
      resourceConstraint: 1.5,
      mediaScrutiny: 1.3
    },
    context: {
      financialPressure: 'severe',
      boardExpectations: 'immediate_results',
      employeeMorale: 'low',
      competitivePosition: 'declining'
    }
  },

  GROWTH: {
    id: 'growth',
    name: 'Scaling Success',
    description: 'Lead rapid expansion while maintaining organizational integrity',
    initialState: {
      strategicClarity: 0.7,
      executionCapability: 0.6,
      stakeholderTrust: 0.7,
      organizationalMomentum: 0.8,
      leadershipCredibility: 0.7,
      changeReadiness: 0.5
    },
    modifiers: {
      urgencyMultiplier: 1.2,
      stakeholderPatience: 0.8,
      resourceConstraint: 0.7,
      mediaScrutiny: 1.1
    },
    context: {
      financialPressure: 'moderate',
      boardExpectations: 'sustained_growth',
      employeeMorale: 'high',
      competitivePosition: 'strong'
    }
  },

  TRANSFORMATION: {
    id: 'transformation',
    name: 'Digital Transformation',
    description: 'Lead fundamental change in business model and operations',
    initialState: {
      strategicClarity: 0.5,
      executionCapability: 0.5,
      stakeholderTrust: 0.6,
      organizationalMomentum: 0.4,
      leadershipCredibility: 0.6,
      changeReadiness: 0.4
    },
    modifiers: {
      urgencyMultiplier: 1.4,
      stakeholderPatience: 0.6,
      resourceConstraint: 1.0,
      mediaScrutiny: 1.2
    },
    context: {
      financialPressure: 'moderate',
      boardExpectations: 'future_positioning',
      employeeMorale: 'uncertain',
      competitivePosition: 'threatened'
    }
  },

  SUCCESSION: {
    id: 'succession',
    name: 'New Leadership Transition',
    description: 'Navigate the challenges of stepping into an established leadership role',
    initialState: {
      strategicClarity: 0.6,
      executionCapability: 0.6,
      stakeholderTrust: 0.5,
      organizationalMomentum: 0.5,
      leadershipCredibility: 0.4,
      changeReadiness: 0.5
    },
    modifiers: {
      urgencyMultiplier: 1.0,
      stakeholderPatience: 0.7,
      resourceConstraint: 0.8,
      mediaScrutiny: 1.4
    },
    context: {
      financialPressure: 'low',
      boardExpectations: 'prove_yourself',
      employeeMorale: 'watchful',
      competitivePosition: 'stable'
    }
  }
};

export const LEADERSHIP_DIMENSIONS = {
  VISION: { weight: 0.20, name: 'Strategic Vision' },
  EXECUTION: { weight: 0.20, name: 'Execution Excellence' },
  INFLUENCE: { weight: 0.15, name: 'Stakeholder Influence' },
  CULTURE: { weight: 0.15, name: 'Culture Shaping' },
  RESILIENCE: { weight: 0.15, name: 'Adaptive Resilience' },
  INTEGRITY: { weight: 0.15, name: 'Ethical Leadership' }
};

export const DECISION_STYLES = {
  DIRECTIVE: { speed: 1.5, buy_in: 0.6, accuracy: 0.8 },
  CONSULTATIVE: { speed: 1.0, buy_in: 0.85, accuracy: 0.9 },
  PARTICIPATIVE: { speed: 0.7, buy_in: 0.95, accuracy: 0.85 },
  DELEGATIVE: { speed: 1.2, buy_in: 0.8, accuracy: 0.75 }
};

export const LEADERSHIP_CAPITAL = {
  POLITICAL: 'Ability to navigate organizational politics',
  RELATIONAL: 'Strength of key relationships',
  EXPERTISE: 'Credibility from domain knowledge',
  POSITIONAL: 'Authority from formal role',
  REPUTATIONAL: 'External standing and recognition'
};

export default CONFIGURATIONS;
