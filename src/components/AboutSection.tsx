import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
              >
                <ImageWithFallback 
                  src="figma:asset/04048a3fc367bb34c61ff461009770135e02712e.png"
                  alt="Students in classroom"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
              </motion.div>
              
              {/* Floating decoration */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 rounded-2xl shadow-xl"
              >
                <span className="text-2xl">📚</span>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 text-right"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full mb-6"
            >
              تعرف علينا
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-4xl md:text-5xl mb-8 text-purple-900"
            >
              من نحن؟
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="space-y-6 text-gray-700 text-lg leading-relaxed"
            >
              <p>
                مؤسسة تعليمية متخصصة في تقديم رعاية وتعليم عالي الجودة للأطفال، كما تأسست مدرستنا برؤية تربوية تهدف إلى توفير بيئة آمنة وتعليمية مُحفّزة تُساهم في نمو شامل للطفل.
              </p>
              
              <p>
                إطارنا التعليمي مُميز يعتمد على المعايير التربوية الحديثة، كما نعتبر أنفسنا شركاء في تنشئة وتربية أطفالكم.. أبناؤكم في أيدٍ أمينة
              </p>
              
              <p>
                لمزيد من الاستفسارات والمعلومات
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-8"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-purple-300/50 transition-all duration-300"
              >
                اعرف المزيد
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}