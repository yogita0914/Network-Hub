import { motion } from 'framer-motion'
import {
  FaLaptop,
  FaDesktop,
  FaPrint,
  FaVideo,
} from 'react-icons/fa'

import './Services.css'

function Services() {
  const services = [
    {
      icon: <FaLaptop />,
      title: 'Laptop Service',
      desc: 'Professional laptop repair and maintenance services.',
      image:
        'https://img3.exportersindia.com/product_images/bc-full/2019/5/6336649/laptop-repair-1557310767-4894209.jpeg',
    },

    {
      icon: <FaDesktop />,
      title: 'Desktop Service',
      desc: 'Complete desktop setup, repair and upgrade solutions.',
      image:
        'https://5.imimg.com/data5/SELLER/Default/2021/1/FV/KA/HS/501956/desktop-repair-service-500x500.jpg',
    },

    {
      icon: <FaPrint />,
      title: 'Printer Service',
      desc: 'Printer installation, repair and cartridge support.',
      image:
        'https://content.jdmagicbox.com/comp/saharsa/f7/9999p6478.6478.220322002419.q2f7/catalogue/hp-and-epson-service-center-saharsa-saharsa-ho-saharsa-computer-printer-repair-and-services-gkj849zw95.jpg',
    },

    {
      icon: <FaVideo />,
      title: 'CCTV Installation',
      desc: 'Secure CCTV installation and monitoring solutions.',
      image:
        'https://www.sg-cctv.com/wp-content/uploads/2019/12/cctv-planning-installation-guide-for-buildings.jpg',
    },
  ]

  return (
    <section className="services" id="services">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Our Services
      </motion.h2>

      <div className="service-container">
        {services.map((item, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
            whileHover={{ scale: 1.05 }}
            style={{
              backgroundImage: `linear-gradient(
                rgba(0,0,0,0.75),
                rgba(0,0,0,0.85)
              ), url(${item.image})`,
            }}
          >
            <div className="service-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services;