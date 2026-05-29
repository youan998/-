import { FileText, FileSpreadsheet, Presentation, Download, Star, Award } from 'lucide-react'

const iconMap = {
  pdf: { Icon: FileText, color: 'text-red-500', bg: 'bg-red-50' },
  docx: { Icon: FileText, color: 'text-blue-500', bg: 'bg-blue-50' },
  ppt: { Icon: Presentation, color: 'text-orange-500', bg: 'bg-orange-50' },
  xlsx: { Icon: FileSpreadsheet, color: 'text-green-500', bg: 'bg-green-50' },
  zip: { Icon: FileText, color: 'text-purple-500', bg: 'bg-purple-50' },
}

export default function ResourceCard({ resource, index }) {
  const { Icon, color, bg } = iconMap[resource.type] || iconMap.pdf

  return (
    <div
      className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gray-100 animate-fade-in-up"
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'both' }}
    >
      {/* File icon */}
      <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
        <Icon className={`w-6 h-6 ${color}`} />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-semibold text-gray-800 truncate">{resource.name}</h4>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-xs text-gray-500">{resource.uploader}</span>
          {resource.verified && (
            <span className="inline-flex items-center gap-0.5 text-[10px] px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 font-medium">
              <Award className="w-3 h-3" />
              学霸认证
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 mt-1.5">
          <div className="flex items-center gap-0.5">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span className="text-xs text-gray-400">{resource.rating}</span>
          </div>
          <span className="text-xs text-gray-400">{resource.downloads} 次下载</span>
          <span className="text-xs text-gray-400">{resource.size}</span>
        </div>
      </div>

      {/* Download button */}
      <button className="shrink-0 flex flex-col items-center gap-0.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md shadow-emerald-200 hover:shadow-lg hover:shadow-emerald-300 hover:-translate-y-0.5 transition-all duration-300 group">
        <Download className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
        <span className="text-xs font-medium whitespace-nowrap">积分下载</span>
        <span className="text-[10px] text-emerald-100 whitespace-nowrap">-{resource.cost}积分</span>
      </button>
    </div>
  )
}
