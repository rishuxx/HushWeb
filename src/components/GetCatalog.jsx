import { motion } from "framer-motion";

const GetCatalog = () => {
  return (
    <motion.a
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      href="/Hnb_re.pdf"
      download
      className="inline-block px-6 py-2 text-sm font-light tracking-wider text-[#402D0A] border border-[#402D0A] rounded-2xl hover:bg-[#402D0A] hover:text-white transition-all duration-300 animate-pulse"
      aria-label="Download CV"
    >
      Download CV
    </motion.a>
  );
};

export default GetCatalog;
