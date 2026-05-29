import { useState } from 'react'
import { Filter, ChevronDown, Search } from 'lucide-react'
import ResourceCard from './ResourceCard'

const mockResources = [
  {
    id: 1,
    name: '2025年线性代数期末试题（含答案）.pdf',
    type: 'pdf',
    uploader: '数学系Olivia',
    verified: true,
    size: '2.4 MB',
    downloads: 2341,
    rating: 4.9,
    cost: 10,
  },
  {
    id: 2,
    name: '数据结构与算法考研真题汇编（2018-2024）.zip',
    type: 'zip',
    uploader: '学长Alex',
    verified: true,
    size: '15.8 MB',
    downloads: 1876,
    rating: 4.8,
    cost: 15,
  },
  {
    id: 3,
    name: '大学英语六级核心词汇思维导图.pptx',
    type: 'ppt',
    uploader: '英语达人Mike',
    verified: true,
    size: '8.2 MB',
    downloads: 1523,
    rating: 4.7,
    cost: 10,
  },
]

const specialtyOptions = ['全部专业', '计算机科学', '数学', '英语', '电子工程', '经管']
const courseOptions = ['全部课程', '线性代数', '数据结构', '大学英语', '计算机组成原理', '高等数学']
const examOptions = ['全部考试', '期末考试', '考研', '四六级', '期中考试', '补考']

export default function ResourceZone() {
  const [specialty, setSpecialty] = useState('全部专业')
  const [course, setCourse] = useState('全部课程')
  const [exam, setExam] = useState('全部考试')

  const SelectFilter = ({ label, value, options, onChange }) => (
    <div className="relative group">
      <label className="block text-xs font-medium text-gray-500 mb-1.5">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none w-full pl-3.5 pr-9 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 font-medium cursor-pointer hover:border-emerald-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition-all duration-300"
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none group-hover:text-emerald-500 transition-colors duration-300" />
      </div>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-xl font-bold text-gray-800">资源下载专区</h2>
          <p className="text-sm text-gray-400 mt-0.5">学霸们精心整理的优质学习资源</p>
        </div>
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="搜索资源..."
              className="pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-400 hover:border-emerald-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 outline-none transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-gray-100 p-5 mb-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Filter className="w-4 h-4 text-emerald-500" />
          <span className="text-sm font-bold text-gray-700">筛选条件</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <SelectFilter label="专业方向" value={specialty} options={specialtyOptions} onChange={setSpecialty} />
          <SelectFilter label="课程分类" value={course} options={courseOptions} onChange={setCourse} />
          <SelectFilter label="考试类别" value={exam} options={examOptions} onChange={setExam} />
        </div>
      </div>

      {/* Resource list */}
      <div className="space-y-3">
        {mockResources.map((res, i) => (
          <ResourceCard key={res.id} resource={res} index={i} />
        ))}
      </div>
    </div>
  )
}
