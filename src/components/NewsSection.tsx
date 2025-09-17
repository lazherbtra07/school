import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function NewsSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
            <h2 className="text-3xl md:text-4xl text-center">
              مستجدات فعاليات وأنشطة العام
            </h2>
            <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full"></div>
          </div>
          <p className="text-xl text-slate-300">
            مشاركات طلاب المدرسة في العام 2024
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-emerald-500/30">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative rounded-2xl overflow-hidden">
                <ImageWithFallback 
                  src="figma:asset/04048a3fc367bb34c61ff461009770135e02712e.png"
                  alt="School activities 2024"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-emerald-500 text-white px-4 py-2 rounded-full">
                  العام الدراسي 2024
                </div>
              </div>
              
              <div className="text-right space-y-6">
                <h3 className="text-2xl text-emerald-300 mb-4">
                  أنشطة وفعاليات متميزة
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  شهد العام الدراسي 2024 العديد من الأنشطة والفعاليات المميزة التي ساهمت
                  في تنمية قدرات الطلاب وإبداعاتهم في مختلف المجالات العلمية والثقافية.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  من المعارض العلمية إلى المسابقات الثقافية، حققت مدرستنا إنجازات رائعة
                  وحصدت العديد من الجوائز على مستوى المنطقة.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-3 rounded-full hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 shadow-lg"
                >
                  عرض جميع الأنشطة
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}