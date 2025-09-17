import { motion } from 'motion/react';
import { Target, Eye } from 'lucide-react';

export function MissionVisionSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-yellow-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-yellow-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-yellow-300 rounded-full"></div>
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
            رسالتنا ورؤيتنا
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            نحو مستقبل تعليمي مشرق
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 h-full border border-white/20 hover:bg-white/15 transition-all duration-300">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              >
                <Target className="w-8 h-8 text-purple-900" />
              </motion.div>
              
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-3xl mb-6 text-yellow-300"
              >
                رسـالـتـنـا
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-lg leading-relaxed text-purple-100"
              >
                تحقيق تنمية متكاملة في شخصية وسلوك الطفل، وتنمية روح الانتماء للوطن، من خلال استراتيجيات التعليم النشط وتوظيف التكنولوجيا التعليمية
              </motion.p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 h-full border border-white/20 hover:bg-white/15 transition-all duration-300">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              >
                <Eye className="w-8 h-8 text-purple-900" />
              </motion.div>
              
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-3xl mb-6 text-yellow-300"
              >
                رؤيـتـنــا
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="text-lg leading-relaxed text-purple-100"
              >
                إعداد طفل مُبدع متكامل الشخصية مُحبًا لدينه ووطنه ومجتمعه، ومُحافظ على أصالته، ومُواكب لعصره في ظل مشاركة مجتمعية فعّالة
              </motion.p>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-yellow-200 mb-8">
            مستقبل طفلك بأمان.. تواصل الآن..
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 px-10 py-4 rounded-full text-lg shadow-2xl hover:shadow-yellow-300/50 transition-all duration-300"
          >
            ابدأ رحلة طفلك معنا
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}