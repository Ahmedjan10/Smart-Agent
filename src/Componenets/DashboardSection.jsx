import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import {
  Plus,
  Bell,
  Users,
  Phone,
  MessageSquare,
  Activity,
  BarChart3,
  Settings,
  HelpCircle,
  ChevronUp
} from 'lucide-react';

const DashboardSection = () => {
  const [activeNav, setActiveNav] = useState('Dashboard');

  // Sample data
  const usageData = [
    { name: 'Jan', chatbot: 8000, voicebot: 6000, multiagent: 2000 },
    { name: 'Feb', chatbot: 6000, voicebot: 4000, multiagent: 4000 },
    { name: 'Mar', chatbot: 4000, voicebot: 12000, multiagent: 6000 },
    { name: 'Apr', chatbot: 8000, voicebot: 8000, multiagent: 4000 },
    { name: 'May', chatbot: 10000, voicebot: 6000, multiagent: 8000 },
    { name: 'Jun', chatbot: 8000, voicebot: 8000, multiagent: 6000 },
  ];

  const pieData = [
    { name: 'ChatBot', value: 45, color: '#00d4ff' },
    { name: 'VoiceBot', value: 30, color: '#a855f7' },
    { name: 'Multi-Agent', value: 25, color: '#06b6d4' },
  ];

  const stats = [
    { title: 'Active Agents', value: '24', change: '+12%', icon: Users, color: 'text-cyan-400' },
    { title: 'User Interactions', value: '15.2k', change: '+8%', icon: MessageSquare, color: 'text-purple-400' },
    { title: 'Calls Made', value: '3.8k', change: '+15%', icon: Phone, color: 'text-emerald-400' },
    { title: 'Success Rate', value: '96.4%', change: '+2%', icon: Activity, color: 'text-pink-400' }
  ];

  const navItems = [
    { name: 'Dashboard', icon: BarChart3, active: true },
    { name: 'Agents', icon: Users, active: false },
    { name: 'Analytics', icon: Activity, active: false },
    { name: 'Settings', icon: Settings, active: false },
    { name: 'Support', icon: HelpCircle, active: false },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Header Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Admin Dashboard
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Monitor, manage, and optimize your AI agents with real-time analytics and intuitive controls
            </p>
          </motion.div>
        </div>

        {/* Windows Activation Notice - Top Right */}
        <div className="absolute top-6 right-6">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg px-4 py-2 text-right">
            <p className="text-slate-300 text-sm font-medium">Activate Windows</p>
            <p className="text-slate-400 text-xs">Go to Settings to activate Windows.</p>
          </div>
        </div>
      </section>

      {/* Dashboard Interface */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-72 bg-slate-800/50 backdrop-blur-sm border-r border-slate-700/50">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-8">
              <Settings className="w-6 h-6 text-cyan-400" />
              <h1 className="text-white font-semibold text-lg">Control Panel</h1>
            </div>

            <nav className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveNav(item.name)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeNav === item.name
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                  {activeNav === item.name && (
                    <div className="w-2 h-2 bg-cyan-400 rounded-full ml-auto"></div>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Windows Activation Notice in Sidebar */}
          <div className="absolute bottom-6 left-6 right-6">
            <div className="bg-slate-700/50 rounded-lg p-4 border border-slate-600/50">
              <p className="text-slate-300 text-sm mb-2">Activate Windows</p>
              <p className="text-slate-400 text-xs">Go to Settings to activate Windows.</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden">
          {/* Header */}
          <div className="bg-slate-800/30 backdrop-blur-sm border-b border-slate-700/50 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Agent Management</h2>
                <p className="text-slate-400">Monitor performance and control your AI workforce</p>
              </div>
              <div className="flex items-center gap-4">
                <button className="p-2 text-slate-400 hover:text-white">
                  <Bell className="w-5 h-5" />
                </button>
                <span className="text-slate-400">Alerts</span>
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
                  <Plus className="w-4 h-4" />
                  Add Agent
                </button>
              </div>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-6 space-y-6 overflow-y-auto h-full">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 rounded-lg bg-slate-700/50 ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded text-xs font-medium">
                      {stat.change}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.title}</div>
                </motion.div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Usage Trends Chart */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
              >
                <div className="flex items-center gap-2 mb-6">
                  <BarChart3 className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white">Agent Usage Trends</h3>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={usageData}>
                    <defs>
                      <linearGradient id="colorChatbot" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00d4ff" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#00d4ff" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorVoicebot" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorMultiagent" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                    <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} />
                    <YAxis stroke="#9CA3AF" fontSize={12} />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#F9FAFB'
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="chatbot"
                      stroke="#00d4ff"
                      fillOpacity={1}
                      fill="url(#colorChatbot)"
                      strokeWidth={2}
                    />
                    <Area
                      type="monotone"
                      dataKey="voicebot"
                      stroke="#a855f7"
                      fillOpacity={1}
                      fill="url(#colorVoicebot)"
                      strokeWidth={2}
                    />
                    <Area
                      type="monotone"
                      dataKey="multiagent"
                      stroke="#06b6d4"
                      fillOpacity={1}
                      fill="url(#colorMultiagent)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </motion.div>

              {/* Service Distribution Chart */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
              >
                <div className="flex items-center gap-2 mb-6">
                  <Activity className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg font-semibold text-white">Service Distribution</h3>
                </div>
                <div className="flex items-center justify-center">
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={120}
                        paddingAngle={2}
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: '#1F2937',
                          border: '1px solid #374151',
                          borderRadius: '8px',
                          color: '#F9FAFB'
                        }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                {/* Legend */}
                <div className="flex justify-center gap-6 mt-4">
                  {pieData.map((entry, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: entry.color }}
                      />
                      <span className="text-sm text-slate-300">{entry.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Windows Activation Message */}
            <div className="fixed bottom-4 right-4">
              <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-700/50 rounded-lg px-4 py-2 flex items-center gap-2 text-slate-300 text-sm">
                <span>Activate Windows</span>
                <span className="text-slate-500">Go to Settings to activate Windows.</span>
                <button className="text-cyan-400 hover:text-cyan-300">
                  <ChevronUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSection;