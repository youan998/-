import { Flame, TrendingUp, FileText, ArrowRight, Star } from 'lucide-react'

const hotTopics = [
  { tag: '#期末复习', posts: 238, trending: true },
  { tag: '#考研交流', posts: 186, trending: true },
  { tag: '#二手教材', posts: 142, trending: false },
  { tag: '#社团招新', posts: 97, trending: true },
  { tag: '#实习内推', posts: 85, trending: false },
  { tag: '#计算机组成原理', posts: 73, trending: false },
]

const hotResources = [
  { name: '2025年线性代数期末试题.pdf', downloads: 1256, rating: 4.9 },
  { name: '数据结构考研真题汇编.zip', downloads: 982, rating: 4.8 },
  { name: '英语四级核心词汇总结.docx', downloads: 876, rating: 4.7 },
  { name: '高等数学笔记整理版.pdf', downloads: 754, rating: 4.9 },
]

export default function Sidebar() {
  return (
    <aside className="space-y-5">
      {/* Hot Topics */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-sm">
            <Flame className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-sm font-bold text-gray-800">热门话题</h3>
        </div>
        <div className="space-y-2.5">
          {hotTopics.map((topic) => (
            <button
              key={topic.tag}
              className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-gray-50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-sm font-medium text-gray-700 group-hover:text-emerald-600 transition-colors duration-300">
                  {topic.tag}
                </span>
                {topic.trending && (
                  <TrendingUp className="w-3.5 h-3.5 text-orange-400" />
                )}
              </div>
              <span className="text-xs text-gray-400">{topic.posts} 帖</span>
            </button>
          ))}
        </div>
      </div>

      {/* Hot Resources */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-sm">
            <FileText className="w-4 h-4 text-white" />
          </div>
          <h3 className="text-sm font-bold text-gray-800">热门资源</h3>
        </div>
        <div className="space-y-3">
          {hotResources.map((res) => (
            <div
              key={res.name}
              className="group cursor-pointer p-2.5 rounded-xl hover:bg-gray-50 transition-all duration-300"
            >
              <p className="text-sm font-medium text-gray-700 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2 leading-snug">
                {res.name}
              </p>
              <div className="flex items-center gap-3 mt-1.5">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span className="text-xs text-amber-600 font-medium">{res.rating}</span>
                </div>
                <span className="text-xs text-gray-400">{res.downloads} 次下载</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Post */}
      <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-5 text-white shadow-lg shadow-emerald-200">
        <h3 className="text-sm font-bold mb-1">想分享你的学习资料？</h3>
        <p className="text-xs text-emerald-100 mb-3">上传优质资源，赢取积分奖励和学霸认证</p>
        <button className="flex items-center gap-1.5 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300 hover:-translate-y-0.5">
          立即发布
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  )
}
