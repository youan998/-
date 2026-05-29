import { useState } from 'react'
import { Heart, MessageCircle, Bookmark, Flag, Share2, Clock } from 'lucide-react'

const AVATARS = {
  user1: 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=user1',
  user2: 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=user2',
  user3: 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=user3',
  anonymous: 'https://api.dicebear.com/9.x/bottts-neutral/svg?seed=anonymous',
}

export default function PostCard({ post, index }) {
  const [liked, setLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(post.likes)
  const [bookmarked, setBookmarked] = useState(false)

  const handleLike = () => {
    if (liked) {
      setLiked(false)
      setLikesCount((c) => c - 1)
    } else {
      setLiked(true)
      setLikesCount((c) => c + 1)
    }
  }

  return (
    <article
      className="bg-white rounded-2xl border border-gray-100 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gray-100 animate-fade-in-up"
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'both' }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={post.isAnonymous ? AVATARS.anonymous : AVATARS[post.avatarSeed]}
          alt={post.author}
          className="w-10 h-10 rounded-full bg-gray-100 ring-2 ring-emerald-100"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-800">
              {post.isAnonymous ? '匿名用户' : post.author}
            </span>
            {post.isAnonymous && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-purple-100 text-purple-600 font-medium">
                匿名
              </span>
            )}
            {post.badge && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700 font-medium flex items-center gap-0.5">
                {post.badge}
              </span>
            )}
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-400 mt-0.5">
            <Clock className="w-3 h-3" />
            <span>{post.time}</span>
          </div>
        </div>
      </div>

      {/* Title with tags */}
      <h3 className="text-base font-semibold text-gray-800 mb-2 leading-snug">
        {post.title}
        {post.tags && post.tags.map((tag) => (
          <span key={tag} className="inline-block ml-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md">
            {tag}
          </span>
        ))}
      </h3>

      {/* Content preview */}
      <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">
        {post.content}
      </p>

      {/* Actions */}
      <div className="flex items-center gap-5 pt-3 border-t border-gray-50">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1.5 text-sm transition-all duration-300 group ${liked ? 'text-red-500' : 'text-gray-400 hover:text-red-400'}`}
        >
          <Heart className={`w-4 h-4 transition-all duration-300 ${liked ? 'fill-current scale-110' : 'group-hover:scale-110'}`} />
          <span>{likesCount}</span>
        </button>

        <button className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-blue-400 transition-all duration-300 group">
          <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
          <span>{post.comments}</span>
        </button>

        <button
          onClick={() => setBookmarked(!bookmarked)}
          className={`flex items-center gap-1.5 text-sm transition-all duration-300 group ml-auto ${bookmarked ? 'text-emerald-500' : 'text-gray-400 hover:text-emerald-400'}`}
        >
          <Bookmark className={`w-4 h-4 transition-all duration-300 ${bookmarked ? 'fill-current scale-110' : 'group-hover:scale-110'}`} />
          <span>{bookmarked ? post.bookmarks + 1 : post.bookmarks}</span>
        </button>

        <button className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-blue-500 transition-all duration-300 group">
          <Share2 className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
        </button>

        <button className="flex items-center gap-1.5 text-sm text-gray-300 hover:text-red-400 transition-all duration-300 group">
          <Flag className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
        </button>
      </div>
    </article>
  )
}
