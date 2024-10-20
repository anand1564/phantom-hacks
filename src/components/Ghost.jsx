
import { useState } from "react"
import { motion } from "framer-motion"
import { Ghost } from "lucide-react"

export default function MovingGhost() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const moveGhost = () => {
    const newX = Math.random() * (window.innerWidth - 100) // 100 is the ghost size
    const newY = Math.random() * (window.innerHeight - 100)
    setPosition({ x: newX, y: newY })
  }

  return (
      <motion.div
        className="absolute cursor-pointer z-50"
        animate={position}
        transition={{ type: "spring", damping: 10, stiffness: 100 }}
        onClick={moveGhost}
      >
        <Ghost className="w-24 h-24 text-white opacity-80 hover:opacity-100 transition-opacity" />
      </motion.div>
  )
}