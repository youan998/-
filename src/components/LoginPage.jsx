import { useState } from 'react'
import {
  GraduationCap,
  User,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  BookOpen,
  Shield,
  Award,
  Sparkles,
  School,
  LogIn,
} from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: '资源下载',
    desc: '学霸认证资料，期末考研一站获取',
    gradient: 'from-emerald-400 to-emerald-600',
    bg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Shield,
    title: '匿名互助',
    desc: '无压力分享心情，真诚交流不社恐',
    gradient: 'from-blue-400 to-blue-600',
    bg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: Award,
    title: '积分达人',
    desc: '分享点赞赢荣誉，解锁专属身份标识',
    gradient: 'from-amber-400 to-amber-600',
    bg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
]

export default function LoginPage({ onLogin }) {
  const [showPassword, setShowPassword] = useState(false)
  const [studentId, setStudentId] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!studentId.trim() || !password.trim()) return
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      onLogin()
    }, 800)
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* ====== LEFT PANEL — Brand & Vision ====== */}
      <div className="relative lg:w-[58%] bg-gradient-to-br from-emerald-50 via-white to-blue-50 flex flex-col justify-center overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-amber-100/20 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, #059669 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative px-8 sm:px-12 lg:px-16 xl:px-20 py-12 lg:py-16">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-200 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-300 hover:-translate-y-0.5">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight">
                校园贴吧
              </h1>
              <p className="text-xs text-emerald-600 font-medium tracking-wide">
                HFUT COMMUNITY
              </p>
            </div>
          </div>

          {/* Headline */}
          <div className="mb-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 leading-tight tracking-tight">
              开启你的
              <br />
              <span className="bg-gradient-to-r from-emerald-500 to-emerald-700 bg-clip-text text-transparent">
                互助成长之旅
              </span>
            </h2>
            <p className="mt-5 text-base lg:text-lg text-gray-500 leading-relaxed max-w-lg">
              专注于学霸认证、知识共享与匿名互助，
              <br className="hidden sm:block" />
              打造去中心化、公平透明的校园生活圈。
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 max-w-xl">
            {features.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className={`group ${item.bg} rounded-2xl p-4 border border-gray-100/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md mb-2.5 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="w-4.5 h-4.5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-800 mb-0.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* ====== RIGHT PANEL — Login / Register ====== */}
      <div className="lg:w-[42%] bg-white flex flex-col justify-center items-center px-6 sm:px-12 py-12 lg:py-16 relative">
        {/* Mobile-only logo */}
        <div className="lg:hidden flex items-center gap-2.5 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-md shadow-emerald-200">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-extrabold text-gray-800">校园贴吧</span>
        </div>

        <div className="w-full max-w-sm">
          {/* Card */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/60 border border-gray-100 p-8">
            {/* Toggle: Login / Register */}
            <div className="flex bg-gray-100 rounded-full p-1 mb-7">
              <button
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                  isLogin
                    ? 'bg-white text-gray-800 shadow-sm'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                登录
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                  !isLogin
                    ? 'bg-white text-gray-800 shadow-sm'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                注册
              </button>
            </div>

            {/* Title */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-800">
                {isLogin ? '欢迎回来' : '创建新账号'}
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                {isLogin ? '登录你的校园贴吧账号' : '加入校园贴吧，开启知识共享之旅'}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Student ID */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="w-4.5 h-4.5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-300" />
                </div>
                <input
                  type="text"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  placeholder="学号"
                  className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 bg-gray-50 text-sm text-gray-700 placeholder-gray-400 outline-none transition-all duration-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 focus:bg-white hover:border-emerald-200"
                />
              </div>

              {/* Password */}
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="w-4.5 h-4.5 text-gray-400 group-focus-within:text-emerald-500 transition-colors duration-300" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="密码"
                  className="w-full pl-11 pr-12 py-3 rounded-full border border-gray-200 bg-gray-50 text-sm text-gray-700 placeholder-gray-400 outline-none transition-all duration-300 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 focus:bg-white hover:border-emerald-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-300"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Forgot password link */}
              {isLogin && (
                <div className="text-right">
                  <button
                    type="button"
                    className="text-xs text-gray-400 hover:text-emerald-600 transition-colors duration-300"
                  >
                    忘记密码？
                  </button>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold text-sm shadow-lg shadow-emerald-200 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isLoading ? (
                  <>
                    <Sparkles className="w-4 h-4 animate-spin" />
                    登录中...
                  </>
                ) : (
                  <>
                    {isLogin ? '立即登录' : '立即注册'}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100" />
              </div>
              <div className="relative flex justify-center">
                <span className="px-3 bg-white text-xs text-gray-300 font-medium">
                  {isLogin ? '还没有账号？' : '已有账号？'}
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-1 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-300"
                  >
                    {isLogin ? '立即注册' : '立即登录'}
                  </button>
                </span>
              </div>
            </div>

            {/* CAS Button */}
            <button
              type="button"
              onClick={onLogin}
              className="w-full flex items-center justify-center gap-2.5 py-3 rounded-full border-2 border-gray-100 bg-white text-sm font-semibold text-gray-600 transition-all duration-300 hover:border-emerald-200 hover:text-emerald-600 hover:shadow-md hover:-translate-y-0.5 group"
            >
              <School className="w-4.5 h-4.5 text-gray-400 group-hover:text-emerald-500 transition-colors duration-300" />
              使用工大统一身份认证登录（CAS）
              <LogIn className="w-3.5 h-3.5 text-gray-300 group-hover:text-emerald-400 transition-colors duration-300" />
            </button>
          </div>

          {/* Footer note */}
          <p className="text-center text-xs text-gray-300 mt-6">
            登录即表示同意{' '}
            <button className="text-emerald-500 hover:text-emerald-600 transition-colors duration-300">
              用户协议
            </button>{' '}
            和{' '}
            <button className="text-emerald-500 hover:text-emerald-600 transition-colors duration-300">
              隐私政策
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
