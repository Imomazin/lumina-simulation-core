'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Cog,
  Package,
  Truck,
  Factory,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Clock,
  BarChart3,
  Activity,
  Zap,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  Shield,
  Boxes,
  Warehouse,
  CircleDot,
  AlertCircle,
  CheckCircle,
  XCircle,
  Gauge,
  GitBranch,
  Network,
} from 'lucide-react';

// =============================================================================
// TYPES
// =============================================================================

type Role = 'operations-lead' | 'supply-chain-manager' | 'quality-director' | 'finance-liaison';

interface ProductionNode {
  id: string;
  name: string;
  type: 'manufacturing' | 'assembly' | 'warehouse' | 'distribution';
  capacity: number;
  utilization: number;
  efficiency: number;
  qualityRate: number;
  isBottleneck: boolean;
}

interface Supplier {
  id: string;
  name: string;
  reliability: number;
  qualityRating: number;
  priceCompetitiveness: number;
  leadTime: number;
  concentration: number;
  healthStatus: 'strong' | 'stable' | 'weak' | 'distressed';
}

interface GameState {
  round: number;
  maxRounds: number;
  totalCapacity: number;
  totalDemand: number;
  capacityUtilization: number;
  firstPassYield: number;
  defectRate: number;
  onTimeDelivery: number;
  inventoryTurnover: number;
  costPerUnit: number;
  totalOperatingCost: number;
  supplierConcentration: number;
  supplyChainResilience: number;
  bullwhipRatio: number;
  nodes: ProductionNode[];
  suppliers: Supplier[];
  activeDisruptions: Array<{ id: string; type: string; severity: string; nodesAffected: string[] }>;
  qualityIncidents: number;
}

// =============================================================================
// MOCK DATA
// =============================================================================

const ROLES: Record<Role, { title: string; description: string; icon: typeof Cog }> = {
  'operations-lead': {
    title: 'Operations Lead',
    description: 'Owns production capacity, efficiency, and operational strategy',
    icon: Factory,
  },
  'supply-chain-manager': {
    title: 'Supply Chain Manager',
    description: 'Manages suppliers, logistics, and inventory',
    icon: Truck,
  },
  'quality-director': {
    title: 'Quality Director',
    description: 'Ensures product quality, compliance, and continuous improvement',
    icon: Shield,
  },
  'finance-liaison': {
    title: 'Finance Liaison',
    description: 'Manages operational budgets and cost optimization',
    icon: BarChart3,
  },
};

const INITIAL_NODES: ProductionNode[] = [
  { id: 'node-1', name: 'Primary Manufacturing', type: 'manufacturing', capacity: 10000, utilization: 85, efficiency: 92, qualityRate: 97.5, isBottleneck: false },
  { id: 'node-2', name: 'Secondary Assembly', type: 'assembly', capacity: 8500, utilization: 94, efficiency: 88, qualityRate: 98.2, isBottleneck: true },
  { id: 'node-3', name: 'Central Warehouse', type: 'warehouse', capacity: 50000, utilization: 72, efficiency: 95, qualityRate: 99.5, isBottleneck: false },
  { id: 'node-4', name: 'Distribution Hub', type: 'distribution', capacity: 12000, utilization: 78, efficiency: 91, qualityRate: 99.8, isBottleneck: false },
];

const INITIAL_SUPPLIERS: Supplier[] = [
  { id: 'sup-1', name: 'GlobalTech Components', reliability: 92, qualityRating: 95, priceCompetitiveness: 78, leadTime: 14, concentration: 45, healthStatus: 'strong' },
  { id: 'sup-2', name: 'FastShip Materials', reliability: 85, qualityRating: 88, priceCompetitiveness: 92, leadTime: 7, concentration: 30, healthStatus: 'stable' },
  { id: 'sup-3', name: 'ValueParts Inc', reliability: 78, qualityRating: 82, priceCompetitiveness: 95, leadTime: 21, concentration: 15, healthStatus: 'weak' },
  { id: 'sup-4', name: 'PremiumSource', reliability: 98, qualityRating: 99, priceCompetitiveness: 65, leadTime: 10, concentration: 10, healthStatus: 'strong' },
];

const INITIAL_STATE: GameState = {
  round: 1,
  maxRounds: 8,
  totalCapacity: 10000,
  totalDemand: 8500,
  capacityUtilization: 85,
  firstPassYield: 94.5,
  defectRate: 1250,
  onTimeDelivery: 91.2,
  inventoryTurnover: 8.5,
  costPerUnit: 42.50,
  totalOperatingCost: 385,
  supplierConcentration: 45,
  supplyChainResilience: 68,
  bullwhipRatio: 1.8,
  nodes: INITIAL_NODES,
  suppliers: INITIAL_SUPPLIERS,
  activeDisruptions: [],
  qualityIncidents: 3,
};

// =============================================================================
// COMPONENTS
// =============================================================================

function SupplyChainFlow({ nodes }: { nodes: ProductionNode[] }) {
  const nodeIcons = {
    manufacturing: Factory,
    assembly: Cog,
    warehouse: Warehouse,
    distribution: Truck,
  };

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-white">Supply Chain Flow</h3>
        <Network className="w-5 h-5 text-slate-500" />
      </div>

      <div className="relative">
        {/* Flow visualization */}
        <div className="flex items-center justify-between">
          {nodes.map((node, index) => {
            const Icon = nodeIcons[node.type];
            return (
              <div key={node.id} className="flex items-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`relative p-4 rounded-xl border-2 ${
                    node.isBottleneck
                      ? 'border-red-500 bg-red-500/10'
                      : node.utilization > 90
                      ? 'border-amber-500 bg-amber-500/10'
                      : 'border-slate-700 bg-slate-800'
                  }`}
                >
                  {node.isBottleneck && (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center"
                    >
                      <AlertTriangle className="w-3 h-3 text-white" />
                    </motion.div>
                  )}

                  <Icon className={`w-8 h-8 ${node.isBottleneck ? 'text-red-400' : 'text-slate-400'} mb-2`} />
                  <p className="text-xs text-slate-300 font-medium text-center">{node.name.split(' ')[0]}</p>

                  <div className="mt-2 w-20">
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${node.utilization}%` }}
                        transition={{ duration: 1 }}
                        className={`h-full rounded-full ${
                          node.utilization > 90 ? 'bg-red-500' :
                          node.utilization > 75 ? 'bg-amber-500' :
                          'bg-emerald-500'
                        }`}
                      />
                    </div>
                    <p className="text-xs text-slate-500 text-center mt-1">{node.utilization}%</p>
                  </div>
                </motion.div>

                {index < nodes.length - 1 && (
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="mx-2"
                  >
                    <ChevronRight className="w-6 h-6 text-slate-600" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottleneck warning */}
        {nodes.some(n => n.isBottleneck) && (
          <div className="mt-4 p-3 bg-red-900/30 border border-red-700 rounded-lg flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-300">Bottleneck detected at Secondary Assembly - throughput limited</span>
          </div>
        )}
      </div>
    </div>
  );
}

function QualityMetrics({ yieldRate, defectRate, incidents }: { yieldRate: number; defectRate: number; incidents: number }) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Quality Metrics</h3>
        <Shield className="w-5 h-5 text-slate-500" />
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-slate-400">First Pass Yield</span>
            <span className={`font-bold ${yieldRate >= 95 ? 'text-emerald-400' : yieldRate >= 90 ? 'text-amber-400' : 'text-red-400'}`}>
              {yieldRate}%
            </span>
          </div>
          <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${yieldRate}%` }}
              transition={{ duration: 1 }}
              className={`h-full rounded-full ${
                yieldRate >= 95 ? 'bg-emerald-500' : yieldRate >= 90 ? 'bg-amber-500' : 'bg-red-500'
              }`}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
          <div>
            <span className="text-xs text-slate-500">Defect Rate</span>
            <p className="text-lg font-bold text-amber-400">{defectRate} ppm</p>
          </div>
          <div>
            <span className="text-xs text-slate-500">Quality Incidents</span>
            <p className={`text-lg font-bold ${incidents > 5 ? 'text-red-400' : incidents > 2 ? 'text-amber-400' : 'text-emerald-400'}`}>
              {incidents}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SupplierRiskPanel({ suppliers }: { suppliers: Supplier[] }) {
  const healthColors = {
    strong: 'bg-emerald-500/20 text-emerald-400',
    stable: 'bg-blue-500/20 text-blue-400',
    weak: 'bg-amber-500/20 text-amber-400',
    distressed: 'bg-red-500/20 text-red-400',
  };

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white">Supplier Risk</h3>
        <Boxes className="w-5 h-5 text-slate-500" />
      </div>

      <div className="space-y-3">
        {suppliers.map((supplier) => (
          <div key={supplier.id} className="p-3 bg-slate-800/50 rounded-lg border border-slate-700">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="font-medium text-white">{supplier.name}</span>
                <span className={`px-2 py-0.5 rounded text-xs font-medium ${healthColors[supplier.healthStatus]}`}>
                  {supplier.healthStatus}
                </span>
              </div>
              <span className="text-sm text-slate-400">{supplier.concentration}% share</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-xs">
              <div>
                <span className="text-slate-500">Reliability</span>
                <div className="h-1.5 bg-slate-700 rounded-full mt-1">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${supplier.reliability}%` }} />
                </div>
              </div>
              <div>
                <span className="text-slate-500">Quality</span>
                <div className="h-1.5 bg-slate-700 rounded-full mt-1">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: `${supplier.qualityRating}%` }} />
                </div>
              </div>
              <div>
                <span className="text-slate-500">Lead Time</span>
                <p className="text-slate-300 font-medium">{supplier.leadTime}d</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResilienceScore({ score, bullwhip }: { score: number; bullwhip: number }) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-slate-400 uppercase tracking-wider">Supply Chain Health</h3>
        <Activity className="w-5 h-5 text-slate-500" />
      </div>

      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xs text-slate-500 mb-1">Resilience Score</p>
          <span className={`text-4xl font-bold ${
            score >= 70 ? 'text-emerald-400' : score >= 50 ? 'text-amber-400' : 'text-red-400'
          }`}>
            {score}
          </span>
          <span className="text-slate-500 text-lg">/100</span>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-500 mb-1">Bullwhip Ratio</p>
          <span className={`text-2xl font-bold ${
            bullwhip < 1.5 ? 'text-emerald-400' : bullwhip < 2.5 ? 'text-amber-400' : 'text-red-400'
          }`}>
            {bullwhip.toFixed(1)}x
          </span>
        </div>
      </div>

      {bullwhip > 2 && (
        <div className="p-3 bg-amber-900/30 border border-amber-700 rounded-lg flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-400" />
          <span className="text-sm text-amber-300">High demand variability amplification detected</span>
        </div>
      )}
    </div>
  );
}

function DecisionPanel({ role, onSubmit }: { role: Role; onSubmit: (decisions: Record<string, string | number>) => void }) {
  const [decisions, setDecisions] = useState<Record<string, string | number>>({});

  const roleDecisions: Record<Role, Array<{
    id: string;
    label: string;
    type: 'select' | 'slider';
    options?: Array<{ value: string; label: string }>;
    min?: number;
    max?: number;
    description: string;
  }>> = {
    'operations-lead': [
      {
        id: 'capacityInvestment',
        label: 'Capacity Investment',
        type: 'slider',
        min: 0,
        max: 50,
        description: 'Investment in expanding capacity ($M)',
      },
      {
        id: 'maintenanceSpend',
        label: 'Maintenance Priority',
        type: 'select',
        options: [
          { value: 'minimal', label: 'Minimal (Cost Savings)' },
          { value: 'preventive', label: 'Preventive Maintenance' },
          { value: 'predictive', label: 'Predictive/Advanced' },
        ],
        description: 'Equipment maintenance approach',
      },
    ],
    'supply-chain-manager': [
      {
        id: 'inventoryPolicy',
        label: 'Inventory Policy',
        type: 'select',
        options: [
          { value: 'lean', label: 'Lean (Lower Costs, Higher Risk)' },
          { value: 'standard', label: 'Standard Buffer' },
          { value: 'buffer', label: 'High Buffer (Resilient)' },
        ],
        description: 'Safety stock and inventory approach',
      },
      {
        id: 'supplierStrategy',
        label: 'Supplier Strategy',
        type: 'select',
        options: [
          { value: 'consolidate', label: 'Consolidate (Cost Focus)' },
          { value: 'maintain', label: 'Maintain Current' },
          { value: 'diversify', label: 'Diversify (Risk Reduction)' },
        ],
        description: 'Supplier base management',
      },
    ],
    'quality-director': [
      {
        id: 'qualityInvestment',
        label: 'Quality Investment',
        type: 'slider',
        min: 0,
        max: 30,
        description: 'Investment in quality programs ($M)',
      },
      {
        id: 'inspectionLevel',
        label: 'Inspection Level',
        type: 'select',
        options: [
          { value: 'sampling', label: 'Statistical Sampling' },
          { value: 'enhanced', label: 'Enhanced Inspection' },
          { value: 'full', label: 'Full Inspection (100%)' },
        ],
        description: 'Product inspection approach',
      },
    ],
    'finance-liaison': [
      {
        id: 'costTarget',
        label: 'Cost Reduction Target',
        type: 'slider',
        min: 0,
        max: 20,
        description: 'Operational cost reduction goal (%)',
      },
      {
        id: 'investmentApproval',
        label: 'CapEx Threshold',
        type: 'select',
        options: [
          { value: 'tight', label: 'Tight (>20% IRR Only)' },
          { value: 'standard', label: 'Standard (>15% IRR)' },
          { value: 'flexible', label: 'Flexible (Strategic Value)' },
        ],
        description: 'Capital investment approval criteria',
      },
    ],
  };

  const currentDecisions = roleDecisions[role] || [];

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-orange-600/20 rounded-xl flex items-center justify-center">
          {(() => {
            const RoleIcon = ROLES[role].icon;
            return <RoleIcon className="w-6 h-6 text-orange-400" />;
          })()}
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">{ROLES[role].title} Decisions</h2>
          <p className="text-sm text-slate-400">{ROLES[role].description}</p>
        </div>
      </div>

      <div className="space-y-6">
        {currentDecisions.map((decision) => (
          <div key={decision.id} className="space-y-2">
            <label className="block text-sm font-medium text-slate-300">{decision.label}</label>
            <p className="text-xs text-slate-500 mb-2">{decision.description}</p>

            {decision.type === 'select' && decision.options && (
              <div className="space-y-2">
                {decision.options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setDecisions({ ...decisions, [decision.id]: opt.value })}
                    className={`w-full p-3 rounded-lg border text-sm font-medium transition-all text-left ${
                      decisions[decision.id] === opt.value
                        ? 'border-orange-500 bg-orange-500/20 text-orange-300'
                        : 'border-slate-700 bg-slate-800 text-slate-400 hover:border-slate-600'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            {decision.type === 'slider' && (
              <div className="space-y-2">
                <input
                  type="range"
                  min={decision.min}
                  max={decision.max}
                  value={decisions[decision.id] as number || decision.min}
                  onChange={(e) => setDecisions({ ...decisions, [decision.id]: parseInt(e.target.value) })}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-xs text-slate-500">
                  <span>${decision.min}M</span>
                  <span className="font-medium text-orange-400">${decisions[decision.id] || decision.min}M</span>
                  <span>${decision.max}M</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={() => onSubmit(decisions)}
        className="mt-6 w-full py-3 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-semibold rounded-xl hover:from-orange-500 hover:to-amber-500 transition-all flex items-center justify-center gap-2"
      >
        Submit Decisions
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

// =============================================================================
// MAIN PAGE
// =============================================================================

export default function OperationsExcellencePage() {
  const [gameState, setGameState] = useState<GameState>(INITIAL_STATE);
  const [selectedRole, setSelectedRole] = useState<Role>('operations-lead');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleDecisionSubmit = (decisions: Record<string, string | number>) => {
    console.log('Submitted decisions:', decisions);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center">
                  <Cog className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-white">Operations Excellence</h1>
                  <p className="text-xs text-slate-400">Flow, Capacity, and Fragility</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-500" />
                <span className="text-sm text-slate-400">Round</span>
                <span className="text-lg font-bold text-white">{gameState.round}</span>
                <span className="text-sm text-slate-500">/ {gameState.maxRounds}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* KPI Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {[
            { label: 'Utilization', value: `${gameState.capacityUtilization}%`, icon: Gauge, trend: 'neutral' },
            { label: 'OTD', value: `${gameState.onTimeDelivery}%`, icon: Truck, trend: 'up' },
            { label: 'First Pass Yield', value: `${gameState.firstPassYield}%`, icon: CheckCircle, trend: 'down' },
            { label: 'Cost/Unit', value: `$${gameState.costPerUnit}`, icon: BarChart3, trend: 'neutral' },
            { label: 'Inventory Turn', value: `${gameState.inventoryTurnover}x`, icon: Package, trend: 'up' },
            { label: 'Op. Cost', value: `$${gameState.totalOperatingCost}M`, icon: Activity, trend: 'down' },
          ].map((kpi) => (
            <div key={kpi.label} className="bg-slate-900 rounded-xl p-4 border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <kpi.icon className="w-4 h-4 text-slate-500" />
                {kpi.trend === 'up' && <ArrowUpRight className="w-4 h-4 text-emerald-400" />}
                {kpi.trend === 'down' && <ArrowDownRight className="w-4 h-4 text-red-400" />}
                {kpi.trend === 'neutral' && <Minus className="w-4 h-4 text-slate-400" />}
              </div>
              <p className="text-xs text-slate-500 mb-1">{kpi.label}</p>
              <p className="text-xl font-bold text-white">{kpi.value}</p>
            </div>
          ))}
        </div>

        {/* Supply Chain Flow */}
        <div className="mb-8">
          <SupplyChainFlow nodes={gameState.nodes} />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Role Selector */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {(Object.keys(ROLES) as Role[]).map((role) => {
                const RoleIcon = ROLES[role].icon;
                return (
                  <button
                    key={role}
                    onClick={() => setSelectedRole(role)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl whitespace-nowrap transition-all ${
                      selectedRole === role
                        ? 'bg-orange-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    <RoleIcon className="w-4 h-4" />
                    <span className="text-sm font-medium">{ROLES[role].title}</span>
                  </button>
                );
              })}
            </div>

            {/* Decision Panel */}
            <DecisionPanel role={selectedRole} onSubmit={handleDecisionSubmit} />

            {/* Supplier Risk */}
            <SupplierRiskPanel suppliers={gameState.suppliers} />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Quality Metrics */}
            <QualityMetrics
              yieldRate={gameState.firstPassYield}
              defectRate={gameState.defectRate}
              incidents={gameState.qualityIncidents}
            />

            {/* Resilience Score */}
            <ResilienceScore score={gameState.supplyChainResilience} bullwhip={gameState.bullwhipRatio} />
          </div>
        </div>
      </main>
    </div>
  );
}
