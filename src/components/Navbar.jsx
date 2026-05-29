import { useState } from 'react'
import { GraduationCap, Search, PlusCircle, Bell, Menu, X } from 'lucide-react'

const MOCK_AVATAR = 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=user1'

export default function Navbar({ activeTab, onTabChange }) {
  const [searchFocused, setSearchFocused] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const tabs = [
    { key: 'home', label: '首页信息流' },
    { key: 'resources', label: '资源下载专区' },
    { key: 'profile', label: '个人中心' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-md shadow-emerald-200">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-800 tracking-tight hidden sm:block">
              校园贴吧
            </span>
          </div>

          {/* Search */}
          <div className={`flex-1 max-w-md relative transition-all duration-300 ${searchFocused ? 'scale-105' : ''}`}>
            <div className={`
              flex items-center rounded-full border px-4 py-2 gap-2 transition-all duration-300
              ${searchFocused
                ? 'border-emerald-400 ring-2 ring-emerald-100 bg-white shadow-lg'
                : 'border-gray-200 bg-gray-50 hover:border-emerald-200'}
            `}>
              <Search className={`w-4 h-4 transition-colors duration-300 ${searchFocused ? 'text-emerald-500' : 'text-gray-400'}`} />
              <input
                type="text"
                placeholder="搜索帖子、资源、话题..."
                className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none border-none"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Desktop nav tabs */}
            <nav className="hidden md:flex items-center gap-1">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => onTabChange(tab.key)}
                  className={`
                    px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-300
                    ${activeTab === tab.key
                      ? 'bg-emerald-50 text-emerald-700 shadow-sm'
                      : 'text-gray-500 hover:text-emerald-600 hover:bg-emerald-50/50'}
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </nav>

            <button className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-medium shadow-md shadow-emerald-200 hover:shadow-lg hover:shadow-emerald-300 hover:-translate-y-0.5 transition-all duration-300">
              <PlusCircle className="w-4 h-4" />
              发布
            </button>

            <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors duration-300">
              <Bell className="w-5 h-5 text-gray-500" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white" />
            </button>

            <button className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 transition-colors duration-300">
              <img
                src={MOCK_AVATAR}
                alt="avatar"
                className="w-8 h-8 rounded-full bg-emerald-100 ring-2 ring-emerald-200"
              />
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-gray-600" /> : <Menu className="w-5 h-5 text-gray-600" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-3 flex flex-col gap-1 animate-fade-in-up">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => { onTabChange(tab.key); setMobileMenuOpen(false) }}
                className={`
                  px-4 py-2.5 rounded-lg text-sm font-medium text-left transition-all duration-300
                  ${activeTab === tab.key
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'text-gray-500 hover:bg-gray-50'}
                `}
              >
                {tab.label}
              </button>
            ))}
            <button className="sm:hidden flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-medium mt-1">
              <PlusCircle className="w-4 h-4" />
              发布新帖
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
