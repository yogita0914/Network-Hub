import { motion } from "framer-motion";

import { FaStar, FaQuoteLeft } from "react-icons/fa";

import "./Review.css";

function Review() {
  const reviews = [
    {
      name: "Krish",
      role: "Laptop Customer",
      review:
        "Excellent laptop repair service. My laptop was fixed within one day and working perfectly now.",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/051/960/739/small/business-cartoon-portrait-of-a-man-in-a-suit-and-red-tie-ideal-for-professional-use-corporate-identity-or-office-decor-png.png",
    },

    {
      name: "Pooja",
      role: "Printer Service",
      review:
        "Very professional team and affordable pricing. Printer cartridge refilling service was amazing.",
      image:
        "https://t3.ftcdn.net/jpg/12/21/27/40/360_F_1221274069_yCJlveuBYWxe5hgjbKVCrfViVqFYKtT7.jpg",
    },

    {
      name: "Shruti",
      role: "Laptop Customer",
      review:
        "Amazing laptop repair service with quick response and professional support. Highly recommended.",
      image:
        "https://cdnai.iconscout.com/ai-image/premium/thumb/ai-professional-businesswomen-working-on-laptop-3d-illustration-png-download-jpg-14488774.png",
    },

    {
      name: "Gopal",
      role: "Desktop Service",
      review:
        "Best desktop repair service with fast response and genuine pricing.",
      image:
        "https://icon2.cleanpng.com/20230829/qfi/transparent-glasses-1711081247680.webp",
    },

    {
      name: "Jeenu",
      role: "Accessories Customer",
      review: "Quality laptop accessories and very friendly customer support.",
      image:
        "https://static.vecteezy.com/system/resources/previews/059/523/282/non_2x/confident-cartoon-businessman-in-augmented-reality-concept-digital-workspace-animated-character-professional-environment-engaging-view-free-png.png",
    },

    {
      name: "Santosh",
      role: "Printer Customer",
      review:
        "Printer repair and cartridge refilling service was excellent and affordable.",
      image:
        "https://img.freepik.com/premium-photo/friendly-young-caucasian-man-suit-tie-cartoon-illustration-professional-use_533090-3663.jpg",
    },
  ];

  return (
    <section className="review-section" id="reviews">
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Customer Reviews
      </motion.h2>

      <motion.p
        className="review-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Trusted Laptop, Desktop, Printer & CCTV services with satisfied
        customers.
      </motion.p>

      <div className="review-container">
        {reviews.map((item, index) => (
          <motion.div
            className="review-card"
            key={index}
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            whileHover={{
              scale: 1.03,
            }}
          >
            <FaQuoteLeft className="quote-icon" />

            <div className="review-stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="review-text">{item.review}</p>

            <div className="review-user">
              <img src={item.image} alt={item.name} />

              <div>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Review;
