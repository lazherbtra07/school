import { motion } from 'motion/react';

export function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800 text-white py-20 px-4 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -right-20 w-80 h-80 border-2 border-gold-300/20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-20 w-60 h-60 border-2 border-yellow-300/20 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 left-1/4 w-4 h-4 bg-yellow-300 rounded-full"
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-48 right-1/3 w-3 h-3 bg-yellow-200 rounded-full"
        />
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-300 text-purple-900 px-8 py-3 rounded-full mb-8 shadow-2xl"
        >
          <span className="text-lg">مرحباً بكم في العام الدراسي الجديد</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-300 bg-clip-text text-transparent"
        >
          مدرسـة عزائـم المجــد الخاصــة
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-2xl md:text-3xl text-purple-100 mb-8"
        >
          ترحب بكم للعام الدراسي الجديد 2024 - 2025
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 px-10 py-4 rounded-full text-xl shadow-2xl hover:shadow-yellow-300/50 transition-all duration-300"
          >
            تواصل معنا الآن
          </motion.button>
        </motion.div>
      </div>
    </motion.header>
  );
}