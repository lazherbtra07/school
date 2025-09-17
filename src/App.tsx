import { motion } from 'motion/react';
import { Header } from './components/Header';
import { AboutSection } from './components/AboutSection';
import { MissionVisionSection } from './components/MissionVisionSection';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="min-h-screen bg-white overflow-x-hidden"
    >
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Large floating circles */}
        <motion.div
          animate={{
            x: [0, 200, 0],
            y: [0, -150, 0],
            rotate: [0, 360, 720],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-200/10 to-yellow-200/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, -180, 0],
            y: [0, 120, 0],
            rotate: [720, 360, 0],
            scale: [1.2, 1, 1.2]
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-96 right-20 w-56 h-56 bg-gradient-to-r from-indigo-200/10 to-purple-200/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
            rotate: [0, -360, -720],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-40 left-1/3 w-32 h-32 bg-gradient-to-r from-yellow-200/10 to-pink-200/10 rounded-full blur-2xl"
        />
        
        {/* Small floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute w-3 h-3 bg-gradient-to-r from-purple-400 to-yellow-400 rounded-full blur-sm"
            style={{
              left: `${10 + (i * 7)}%`,
              top: `${20 + (i * 5)}%`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <AboutSection />
        <MissionVisionSection />
        <PhotoGallerySection />
        <WhyChooseUsSection />
        <ContactSection />
        <Footer />
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 via-yellow-400 to-indigo-600 z-50 origin-left shadow-lg"
        style={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Floating Action Button */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="fixed bottom-8 right-8 z-40"
      >
        <motion.button
          whileHover={{ 
            scale: 1.1, 
            rotate: 360,
            boxShadow: "0 0 30px rgba(234, 179, 8, 0.6)"
          }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-2xl"
        >
          📞
        </motion.button>
      </motion.div>
    </motion.div>
  );
}