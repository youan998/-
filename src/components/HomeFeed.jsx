import { useState } from 'react'
import { SlidersHorizontal, TrendingUp } from 'lucide-react'
import PostCard from './PostCard'
import Sidebar from './Sidebar'

const categories = ['全部', '学习资源', '校园生活', '二手交易', '社团活动', '匿名树洞']

const mockPosts = [
  {
    id: 1,
    author: '学长Alex',
    avatarSeed: 'user1',
    isAnonymous: false,
    badge: '学霸达人',
    time: '2 小时前',
    title: '计算机组成原理期末复习攻略，看这一篇就够了！',
    tags: ['#期末复习', '#计算机组成原理', '#考研交流'],
    content:
      '整理了这学期的计组重点知识框架和常见考点，包括冯诺依曼结构、Cache映射策略、虚拟存储器、指令流水线等核心内容。附上我整理的思维导图和历年真题解析，希望能帮到正在备考的学弟学妹们！特别提醒：第五章的流水线冲突分析是今年考试的重点，王老师上课重点强调过。',
    likes: 128,
    comments: 36,
    bookmarks: 89,
  },
  {
    id: 2,
    author: '',
    avatarSeed: 'anonymous',
    isAnonymous: true,
    time: '5 小时前',
    title: '有没有人觉得图书馆三楼靠窗的位置特别好，但总是抢不到？',
    tags: ['#校园生活'],
    content:
      '每天早上八点去图书馆，三楼靠窗那个位置永远有人。关键是那个位置采光好、插座多、离饮水机近，简直是黄金座位中的战斗机。大家都是几点去的啊？有没有什么"潜规则"比如放本书占座的？虽然学校明令禁止占座但我还是想吐槽一下这个卷的环境...',
    likes: 256,
    comments: 89,
    bookmarks: 12,
  },
  {
    id: 3,
    author: '数学系Olivia',
    avatarSeed: 'user3',
    isAnonymous: false,
    badge: '分享之星',
    time: '8 小时前',
    title: '【干货】线性代数从及格到满绩，我的逆袭经验分享',
    tags: ['#学习资源', '#线性代数', '#经验分享'],
    content:
      '大一下学期线代期中只考了62分，当时感觉天都塌了。后来找到了正确的学习方法，期末直接92分。核心就三件事：第一，理解几何意义而不是死记公式；第二，3Blue1Brown的线性代数本质系列必看；第三，课后习题反复做，尤其是证明题。我把我的笔记扫描成PDF了，需要的同学可以在资源区下载~',
    likes: 341,
    comments: 67,
    bookmarks: 203,
  },
]

export default function HomeFeed() {
  const [activeCategory, setActiveCategory] = useState('全部')

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex gap-6">
        {/* Main content */}
        <div className="flex-1 min-w-0">
          {/* Category tabs */}
          <div className="flex items-center gap-1.5 mb-5 overflow-x-auto pb-1 scrollbar-hide">
            <button className="shrink-0 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300">
              <SlidersHorizontal className="w-4 h-4 text-gray-400" />
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${activeCategory === cat
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md shadow-emerald-200'
                    : 'bg-white text-gray-500 border border-gray-200 hover:border-emerald-200 hover:text-emerald-600 hover:shadow-sm'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Post list */}
          <div className="space-y-4">
            {mockPosts.map((post, i) => (
              <PostCard key={post.id} post={post} index={i} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block w-80 shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}
