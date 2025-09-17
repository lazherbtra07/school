import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 px-8 py-3 rounded-full mb-6">
            تواصل معنا
          </div>
          <h2 className="text-4xl md:text-5xl mb-4">
            لمزيد من المعلومات تواصل الآن
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-3xl mb-8 text-yellow-300 text-right">معلومات التواصل</h3>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="flex items-center gap-4 text-purple-100 hover:text-yellow-300 transition-colors duration-300"
                >
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 rounded-2xl">
                    <MapPin className="w-6 h-6 text-purple-900" />
                  </div>
                  <div className="text-right">
                    <p className="text-white text-lg">العنوان</p>
                    <p className="text-purple-200">المملكة العربية السعودية</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex items-center gap-4 text-purple-100 hover:text-yellow-300 transition-colors duration-300"
                >
                  <div className="bg-gradient-to-r from-blue-400 to-cyan-500 p-4 rounded-2xl">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-white text-lg">رقم الهاتف</p>
                    <p className="text-purple-200">+966 XX XXX XXXX</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="flex items-center gap-4 text-purple-100 hover:text-yellow-300 transition-colors duration-300"
                >
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-4 rounded-2xl">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-white text-lg">البريد الإلكتروني</p>
                    <p className="text-purple-200">info@azaim-almagd.edu.sa</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="flex items-center gap-4 text-purple-100 hover:text-yellow-300 transition-colors duration-300"
                >
                  <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-4 rounded-2xl">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-white text-lg">ساعات العمل</p>
                    <p className="text-purple-200">الأحد - الخميس: 7:00 ص - 2:00 م</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="flex items-center gap-4 text-purple-100 hover:text-yellow-300 transition-colors duration-300"
                >
                  <div className="bg-gradient-to-r from-pink-400 to-red-500 p-4 rounded-2xl">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <p className="text-white text-lg">InstagramLink</p>
                    <p className="text-purple-200">تابعونا على إنستجرام</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-3xl mb-8 text-yellow-300 text-center">
                أرسل رسالة
              </h3>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <input
                    type="text"
                    placeholder="الاسم الكامل"
                    className="w-full p-4 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-purple-200 focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <input
                    type="email"
                    placeholder="البريد الإلكتروني"
                    className="w-full p-4 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-purple-200 focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <input
                    type="tel"
                    placeholder="رقم الهاتف"
                    className="w-full p-4 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-purple-200 focus:border-yellow-400 focus:outline-none transition-colors duration-300"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <textarea
                    placeholder="الرسالة"
                    rows={4}
                    className="w-full p-4 rounded-2xl bg-white/20 border border-white/30 text-white placeholder-purple-200 focus:border-yellow-400 focus:outline-none transition-colors duration-300 resize-none"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="text-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 px-8 py-4 rounded-full text-lg shadow-2xl hover:shadow-yellow-300/50 transition-all duration-300"
                  >
                    إرسال الرسالة
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}