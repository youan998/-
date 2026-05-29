import { useState } from 'react'
import Navbar from './components/Navbar'
import HomeFeed from './components/HomeFeed'
import ResourceZone from './components/ResourceZone'
import UserProfile from './components/UserProfile'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-emerald-50/30 to-blue-50/20">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

      <main>
        {activeTab === 'home' && <HomeFeed />}
        {activeTab === 'resources' && <ResourceZone />}
        {activeTab === 'profile' && <UserProfile />}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white/50 backdrop-blur-sm mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
          <p className="text-xs text-gray-400">
            校园贴吧 &mdash; 知识共享，让学习更有温度
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
