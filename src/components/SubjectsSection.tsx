import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function SubjectsSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-4">
            التميز في العلوم والرياضيات والتكنولوجيا
          </h2>
          <div className="w-24 h-1 bg-yellow-300 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Math Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="relative">
              <ImageWithFallback 
                src="figma:asset/04048a3fc367bb34c61ff461009770135e02712e.png"
                alt="Math activities"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4 bg-emerald-500 text-white px-4 py-2 rounded-full">
                رياضيات
              </div>
            </div>
            <div className="p-8 text-right">
              <h3 className="text-2xl mb-4 text-slate-800">الرياضيات</h3>
              <p className="text-slate-600 leading-relaxed">
                برنامج متطور لتعليم الرياضيات يركز على الفهم العميق والتطبيق العملي
                مع استخدام أحدث الوسائل التعليمية التفاعلية لضمان تحقيق أفضل النتائج.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-emerald-500 text-white px-6 py-3 rounded-full hover:bg-emerald-600 transition-colors"
              >
                المزيد من التفاصيل
              </motion.button>
            </div>
          </motion.div>

          {/* Physics Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="relative">
              <ImageWithFallback 
                src="figma:asset/04048a3fc367bb34c61ff461009770135e02712e.png"
                alt="Physics activities"
                className="w-full h-64 object-cover"
              />
              <div className="absolute top-4 right-4 bg-cyan-500 text-white px-4 py-2 rounded-full">
                فيزياء
              </div>
            </div>
            <div className="p-8 text-right">
              <h3 className="text-2xl mb-4 text-slate-800">الفيزياء</h3>
              <p className="text-slate-600 leading-relaxed">
                منهج شامل لتعليم الفيزياء يجمع بين النظرية والتطبيق العملي
                في مختبرات مجهزة بأحدث الأجهزة لتنمية روح البحث والاستكشاف.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-cyan-500 text-white px-6 py-3 rounded-full hover:bg-cyan-600 transition-colors"
              >
                المزيد من التفاصيل
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}