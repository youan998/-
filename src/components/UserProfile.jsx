import { useState } from 'react'
import { Award, Star, TrendingUp, Clock, Heart, MessageCircle, Bookmark, Download, FileText, Settings, Edit3 } from 'lucide-react'

const MOCK_AVATAR = 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=user1'

const myPosts = [
  {
    id: 1,
    title: '计算机组成原理期末复习攻略，看这一篇就够了！',
    tags: ['#期末复习', '#计算机组成原理'],
    likes: 128,
    comments: 36,
    time: '2 小时前',
  },
  {
    id: 2,
    title: '推荐几个超好用的免费查重网站，写论文必备',
    tags: ['#学习资源', '#论文'],
    likes: 86,
    comments: 24,
    time: '3 天前',
  },
]

const myFavorites = [
  {
    id: 1,
    title: '【干货】线性代数从及格到满绩，我的逆袭经验分享',
    author: '数学系Olivia',
    likes: 341,
    time: '8 小时前',
  },
]

const downloadHistory = [
  {
    id: 1,
    name: '2025年线性代数期末试题（含答案）.pdf',
    cost: 10,
    time: '昨天 14:30',
  },
  {
    id: 2,
    name: '数据结构考研真题汇编.zip',
    cost: 15,
    time: '3 天前',
  },
  {
    id: 3,
    name: '英语四级核心词汇总结.docx',
    cost: 10,
    time: '1 周前',
  },
]

export default function UserProfile() {
  const [activePanel, setActivePanel] = useState('posts')

  const panelTabs = [
    { key: 'posts', label: '我的帖子', icon: FileText },
    { key: 'favorites', label: '我的收藏', icon: Bookmark },
    { key: 'downloads', label: '下载记录', icon: Download },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Profile card */}
      <div className="relative bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
        {/* Banner */}
        <div className="h-32 bg-gradient-to-r from-emerald-400 via-emerald-500 to-blue-500" />

        {/* Avatar */}
        <div className="px-6 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 -mt-10">
            <div className="relative">
              <img
                src={MOCK_AVATAR}
                alt="avatar"
                className="w-20 h-20 rounded-2xl bg-white ring-4 ring-white shadow-lg"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-gray-800">用户1</h2>
                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-emerald-100 to-emerald-200 text-emerald-700">
                  达人
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-0.5">学无止境，分享让知识更有价值 ✨</p>
            </div>
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-emerald-300 hover:text-emerald-600 transition-all duration-300">
              <Edit3 className="w-3.5 h-3.5" />
              编辑资料
            </button>
          </div>
        </div>
      </div>

      {/* Stats & Badges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Points */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-sm">
              <Star className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-bold text-gray-700">我的积分</span>
          </div>
          <p className="text-3xl font-bold text-emerald-600 mb-3">5,000</p>
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-gray-500">
              <span>等级: 达人</span>
              <span>距下一级 2,500 积分</span>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full transition-all duration-500" />
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-sm">
              <Award className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-bold text-gray-700">荣誉勋章</span>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-50 border border-amber-100 flex-1">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shadow-sm">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-amber-800">学霸达人</p>
                <p className="text-xs text-amber-600">上传 5+ 优质资源</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-purple-50 border border-purple-100 flex-1">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center shadow-sm">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold text-purple-800">分享之星</p>
                <p className="text-xs text-purple-600">累计获赞 500+</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Panel tabs */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="flex border-b border-gray-100">
          {panelTabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.key}
                onClick={() => setActivePanel(tab.key)}
                className={`
                  flex items-center gap-2 px-5 py-3.5 text-sm font-medium transition-all duration-300 relative
                  ${activePanel === tab.key
                    ? 'text-emerald-600'
                    : 'text-gray-400 hover:text-gray-600'}
                `}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
                {activePanel === tab.key && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full" />
                )}
              </button>
            )
          })}
        </div>

        <div className="p-5">
          {/* My Posts */}
          {activePanel === 'posts' && (
            <div className="space-y-3 animate-fade-in-up">
              {myPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-emerald-100 hover:shadow-sm transition-all duration-300"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-800">
                      {post.title}
                      {post.tags.map((tag) => (
                        <span key={tag} className="inline-block ml-1.5 text-[11px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </h4>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Heart className="w-3 h-3" /> {post.likes}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <MessageCircle className="w-3 h-3" /> {post.comments}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock className="w-3 h-3" /> {post.time}
                      </span>
                    </div>
                  </div>
                  <button className="shrink-0 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                    <Settings className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* My Favorites */}
          {activePanel === 'favorites' && (
            <div className="space-y-3 animate-fade-in-up">
              {myFavorites.map((fav) => (
                <div
                  key={fav.id}
                  className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-emerald-100 hover:shadow-sm transition-all duration-300"
                >
                  <Bookmark className="w-5 h-5 text-emerald-400 fill-emerald-400 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-800">{fav.title}</h4>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="text-xs text-gray-500">{fav.author}</span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Heart className="w-3 h-3" /> {fav.likes}
                      </span>
                      <span className="text-xs text-gray-400">{fav.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Download History */}
          {activePanel === 'downloads' && (
            <div className="space-y-2 animate-fade-in-up">
              {downloadHistory.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3.5 rounded-xl hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center">
                      <Download className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700">{item.name}</p>
                      <p className="text-xs text-gray-400">{item.time}</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-red-400">-{item.cost} 积分</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
