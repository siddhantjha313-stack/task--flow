import { Menu, Bell, User } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function Navbar({ onMenuClick }) {
  const { user } = useAuth()

  return (
    <nav className="bg-dark-800 border-b border-white/10 px-6 py-4 flex items-center justify-between">
      <button
        onClick={onMenuClick}
        className="p-2 hover:bg-white/10 rounded-lg transition"
      >
        <Menu className="w-6 h-6" />
      </button>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-white/10 rounded-lg transition relative">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-white/10">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-blue-400 flex items-center justify-center font-bold">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium">{user?.name}</p>
            <p className="text-xs text-gray-400">{user?.role}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}
