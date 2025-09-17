import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const activities = [
  {
    title: "الأنشطة العلمية",
    description: "تجارب ومشاريع علمية",
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "الأنشطة الثقافية", 
    description: "فعاليات ثقافية وأدبية",
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "الأنشطة الرياضية",
    description: "برامج رياضية متنوعة",
    color: "from-teal-500 to-emerald-600"
  },
  {
    title: "الأنشطة الفنية",
    description: "ورش فنية وإبداعية",
    color: "from-blue-500 to-cyan-600"
  }
];

export function ActivitiesGrid() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-slate-800 mb-4">
            مجالات أنشطة وبرامج الطلبة المتنوعة
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback 
                    src="figma:asset/04048a3fc367bb34c61ff461009770135e02712e.png"
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${activity.color} opacity-80`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <div className="p-6 text-right">
                  <h3 className="text-xl mb-3 text-slate-800 group-hover:text-emerald-600 transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {activity.description}
                  </p>
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                    className={`h-1 bg-gradient-to-r ${activity.color} mt-4 rounded-full`}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}