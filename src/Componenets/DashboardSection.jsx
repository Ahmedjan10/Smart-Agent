import React from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import {
  Plus,
  Edit,
  Trash2,
  BarChart3,
  Users,
  Phone,
  MessageSquare,
  Activity,
  Settings,
  Bell,
  TrendingUp,
  Zap
} from 'lucide-react';

const Card = ({ children, className = "" }) => (
  <div className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="p-6 pb-3">
    {children}
  </div>
);

const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-semibold text-white ${className}`}>
    {children}
  </h3>
);

const CardContent = ({ children }) => (
  <div className="p-6 pt-0">
    {children}
  </div>
);

const Button = ({ children, variant = "primary", size = "md", className = "", onClick }) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200";
  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700",
    secondary: "bg-slate-700 text-white hover:bg-slate-600",
    outline: "border border-slate-600 text-white hover:bg-slate-700"
  };
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Switch = ({ checked, onCheckedChange }) => (
  <button
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
      checked ? 'bg-cyan-500' : 'bg-slate-600'
    }`}
    onClick={() => onCheckedChange(!checked)}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
        checked ? 'translate-x-6' : 'translate-x-1'
      }`}
    />
  </button>
);

const Badge = ({ children, variant = "default" }) => {
  const variants = {
    default: "bg-slate-700 text-white",
    success: "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
    warning: "bg-amber-500/20 text-amber-400 border border-amber-500/30",
    error: "bg-red-500/20 text-red-400 border border-red-500/30"
  };
  
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  );
};

const DashboardSection = () => {
  // Sample data for charts
  const usageData = [
    { name: 'Jan', chatbot: 4000, voicebot: 2400, multiagent: 1400 },
    { name: 'Feb', chatbot: 3000, voicebot: 1398, multiagent: 2210 },
    { name: 'Mar', chatbot: 2000, voicebot: 9800, multiagent: 2290 },
    { name: 'Apr', chatbot: 2780, voicebot: 3908, multiagent: 2000 },
    { name: 'May', chatbot: 1890, voicebot: 4800, multiagent: 2181 },
    { name: 'Jun', chatbot: 2390, voicebot: 3800, multiagent: 2500 },
  ];

  const pieData = [
    { name: 'ChatBot', value: 45, color: '#00d4ff' },
    { name: 'VoiceBot', value: 30, color: '#a855f7' },
    { name: 'Multi-Agent', value: 25, color: '#06b6d4' },
  ];

  const stats = [
    { title: 'Active Agents', value: '24', change: '+12%', icon: Users, color: 'text-cyan-400', trend: 'up' },
    { title: 'User Interactions', value: '15.2k', change: '+8%', icon: MessageSquare, color: 'text-purple-400', trend: 'up' },
    { title: 'Calls Made', value: '3.8k', change: '+15%', icon: Phone, color: 'text-emerald-400', trend: 'up' },
    { title: 'Success Rate', value: '96.4%', change: '+2%', icon: Activity, color: 'text-pink-400', trend: 'up' }
  ];

  const agents = [
    { name: 'Customer Support Bot', type: 'ChatBot', status: 'Active', performance: 98, requests: '1.2k' },
    { name: 'Sales Assistant', type: 'VoiceBot', status: 'Active', performance: 94, requests: '856' },
    { name: 'Technical Support', type: 'Multi-Agent', status: 'Inactive', performance: 89, requests: '423' },
    { name: 'Lead Qualifier', type: 'ChatBot', status: 'Active', performance: 97, requests: '2.1k' }
  ];

  return (
    <section id="dashboard" className="py-20 relative overflow-hidden min-h-screen bg-gradient-to-t from-slate-900 to-slate-800">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
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

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/60 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className={`text-sm ${stat.color} flex items-center gap-1`}>
                    <TrendingUp className="w-4 h-4" />
                    {stat.change}
                  </p>
                </div>
                <div className={`p-3 rounded-lg bg-slate-700/50 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </Card>
          ))}
        </motion.div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Usage Chart */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Usage Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={usageData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: '1px solid #374151',
                        borderRadius: '8px',
                        color: '#F9FAFB'
                      }}
                    />
                    <Area type="monotone" dataKey="chatbot" stackId="1" stroke="#00d4ff" fill="#00d4ff" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="voicebot" stackId="1" stroke="#a855f7" fill="#a855f7" fillOpacity={0.6} />
                    <Area type="monotone" dataKey="multiagent" stackId="1" stroke="#06b6d4" fill="#06b6d4" fillOpacity={0.6} />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Agent Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Agent Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
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
                <div className="flex justify-center gap-4 mt-4">
                  {pieData.map((entry, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: entry.color }}
                      ></div>
                      <span className="text-sm text-white/80">{entry.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Agents Management */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>AI Agents Management</CardTitle>
                <Button className="flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add Agent
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {agents.map((agent, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="font-medium text-white">{agent.name}</h4>
                        <Badge variant={agent.status === 'Active' ? 'success' : 'warning'}>
                          {agent.status}
                        </Badge>
                        <span className="text-sm text-white/60">{agent.type}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-white/60">
                        <span>Performance: {agent.performance}%</span>
                        <span>Requests: {agent.requests}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch checked={agent.status === 'Active'} onCheckedChange={() => {}} />
                      <Button variant="secondary" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="secondary" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="p-6 text-center">
            <BarChart3 className="w-8 h-8 mx-auto mb-3 text-cyan-400" />
            <h3 className="font-semibold text-white mb-2">Analytics</h3>
            <p className="text-sm text-white/60 mb-4">View detailed performance metrics</p>
            <Button variant="outline" size="sm">View Reports</Button>
          </Card>

          <Card className="p-6 text-center">
            <Settings className="w-8 h-8 mx-auto mb-3 text-purple-400" />
            <h3 className="font-semibold text-white mb-2">Settings</h3>
            <p className="text-sm text-white/60 mb-4">Configure agent parameters</p>
            <Button variant="outline" size="sm">Open Settings</Button>
          </Card>

          <Card className="p-6 text-center">
            <Bell className="w-8 h-8 mx-auto mb-3 text-pink-400" />
            <h3 className="font-semibold text-white mb-2">Notifications</h3>
            <p className="text-sm text-white/60 mb-4">Manage alerts and updates</p>
            <Button variant="outline" size="sm">View Alerts</Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardSection;