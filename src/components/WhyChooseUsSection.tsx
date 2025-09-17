import { motion } from 'motion/react';
import { Bus, Users, Shield, BookOpen } from 'lucide-react';

const features = [
  {
    icon: Bus,
    title: "باصات مكيفة ومريحة للنقل",
    description: "نوفر خدمة نقل آمنة ومريحة لجميع الطلاب",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "كوادر تعليمية بخبرة عالية",
    description: "فريق تعليمي متخصص ومؤهل لتقديم أفضل تعليم",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "بيئة آمنة ومحفزة على التعلّم",
    description: "بيئة مدرسية آمنة تشجع على الإبداع والتميز",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: BookOpen,
    title: "اهتمام خاص بالقرآن الكريم",
    description: "برامج متخصصة لتحفيظ وتدبر القرآن الكريم",
    color: "from-yellow-500 to-orange-500"
  }
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 px-8 py-3 rounded-full mb-6">
            لماذا نحن؟
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">
            لماذا تختار مدرسة عزائم المجد الخاصة؟
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateY: 5
              }}
              className="group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 h-full border border-white/20 hover:bg-white/20 transition-all duration-500 text-center relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}></div>
                
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  className={`bg-gradient-to-r ${feature.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl relative z-10`}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </motion.div>
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                    className="text-xl mb-4 group-hover:text-yellow-300 transition-colors duration-300"
                  >
                    {feature.title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                    className="text-purple-100 leading-relaxed group-hover:text-white transition-colors duration-300"
                  >
                    {feature.description}
                  </motion.p>
                </div>
                
                {/* Hover Effect */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 px-12 py-5 rounded-full text-xl shadow-2xl hover:shadow-yellow-300/50 transition-all duration-300"
          >
            انضم إلى عائلة مدرستنا
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}