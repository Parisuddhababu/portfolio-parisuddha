const WhatIDo = () => (
  <div className="bg-gradient-to-r from-blue-500/20 to-blue-500/10 rounded-3xl border border-white/20 p-8">
    <h4 className="text-xl font-bold text-white mb-4">What I Do</h4>
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
        <span className="text-white/80">Build responsive and accessible web applications</span>
      </div>
      <div className="flex items-center space-x-3">
        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
        <span className="text-white/80">Create educational content for developers</span>
      </div>
      <div className="flex items-center space-x-3">
        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
        <span className="text-white/80">Contribute to open source projects</span>
      </div>
      <div className="flex items-center space-x-3">
        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
        <span className="text-white/80">Stay updated with latest web technologies</span>
      </div>
    </div>
  </div>
);

export default WhatIDo; 