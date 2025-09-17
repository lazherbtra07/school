import { motion } from 'motion/react';
import { Heart, Star, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-purple-950 to-indigo-950 text-white py-16 px-4 border-t border-yellow-400/30"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 text-center md:text-right mb-12">
          {/* School Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="mb-6">
              <h3 className="text-2xl mb-4 text-yellow-300">
                مدرسة عزائم المجد الخاصة
              </h3>
              <p className="text-purple-200 leading-relaxed text-lg">
                مؤسسة تعليمية متخصصة في تقديم رعاية وتعليم عالي الجودة للأطفال
                في بيئة آمنة ومحفزة للإبداع والتميز
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-purple-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-yellow-400" />
                <span>المملكة العربية السعودية</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-yellow-400" />
                <span>+966 XX XXX XXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-yellow-400" />
                <span>info@azaim-almagd.edu.sa</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-xl mb-6 text-yellow-300">روابط سريعة</h3>
            <ul className="space-y-3 text-purple-200">
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors duration-300 flex items-center justify-center md:justify-end gap-2">
                  <span>من نحن</span>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors duration-300 flex items-center justify-center md:justify-end gap-2">
                  <span>رسالتنا ورؤيتنا</span>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors duration-300 flex items-center justify-center md:justify-end gap-2">
                  <span>معرض الصور</span>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-yellow-400 transition-colors duration-300 flex items-center justify-center md:justify-end gap-2">
                  <span>اتصل بنا</span>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="text-xl mb-6 text-yellow-300">تابع أخبارنا</h3>
            <p className="text-purple-200 mb-4 text-sm">
              اشترك للحصول على آخر الأخبار والفعاليات
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-purple-200 focus:border-yellow-400 focus:outline-none transition-colors duration-300 text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 py-3 rounded-xl text-sm hover:shadow-lg transition-all duration-300"
              >
                اشترك الآن
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-2 text-purple-200 mb-4">
            <p>© 2024 مدرسة عزائم المجد الخاصة. جميع الحقوق محفوظة</p>
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-400 fill-current" />
            </motion.div>
          </div>
          
          <motion.div
            className="flex justify-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 1.4 + i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.2, rotate: 360 }}
              >
                <Star className="w-4 h-4 text-yellow-400 fill-current cursor-pointer" />
              </motion.div>
            ))}
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="text-sm text-purple-300 mt-4"
          >
            مستقبل طفلك بأمان معنا
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
}