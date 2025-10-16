import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    company: "Strapi",
    logo: "🎯",
    quote:
      "We sync our design tokens and icons to our tools with Specify, and it gives our design and engineering teams peace of mind!",
    author: "Hicham El Abbassi",
    role: "Front-End Developer",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    company: "Pocket",
    logo: "📱",
    quote:
      "Specify helps our designers keep their assets and design decisions in sync with the actual code, avoiding extra development effort and making design implementation much more flexible.",
    author: "Niels Boey",
    role: "Product Designer",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
  {
    company: "makemusic",
    logo: "🎵",
    quote:
      "Specify is the missing link between our design and engineering workflows. It saves us a tremendous amount of time, and seamlessly keeps our design tokens in the right places.",
    author: "ActiveState",
    role: "Product Windows",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
];

function ClientReviews() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev - 0.5) % (testimonials.length * 400));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    // 🖤 Black full page background
    <div className="min-h-screen bg-black flex items-center justify-center">
      {/* Centered glowing testimonial section */}
      <motion.section
        className="relative bg-gradient-to-b from-black via-blue-950/30 to-blue-900/40 text-white py-24  rounded-[40px] max-w-7xl w-full mx-auto overflow-hidden mt-30 mb-30"
       
      >
        {/* Glowing background effects */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-800/10 rounded-full blur-[150px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-600/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-blue-500/30 rounded-full blur-[180px] pointer-events-none" />

        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Trusted by product teams
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Book your demo and start automating the distribution of your
              design — your team will love it.
            </p>
          </div>

          {/* Sliding testimonials */}
          <div className="overflow-hidden relative">
            <motion.div
              className="flex gap-6"
              animate={{ x: offset }}   
              transition={{ ease: "linear", duration: 0 }}
            >
              {[...testimonials, ...testimonials, ...testimonials].map(
                (testimonial, index) => (
                  <motion.div
                    key={index}
                    className="min-w-[350px] md:min-w-[400px] bg-blue-300/30 backdrop-blur-xl rounded-3xl p-8 border border-blue-400/20 shadow-2xl shadow-blue-500/10 relative overflow-hidden group"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                      margin: "0px 0px -200px 0px",
                    }}
                  >
    
                    <div className="relative z-10">
                      <div className="mb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-3xl">{testimonial.logo}</span>
                          <span className="text-2xl font-bold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                            {testimonial.company}
                          </span>
                        </div>
                        <p className="text-gray-200 leading-relaxed text-base">
                          "{testimonial.quote}"
                        </p>
                      </div>

                      <div className="flex items-center gap-4 mt-6 pt-6 border-t border-blue-400/10">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-400/30"
                        />
                        <div>
                          <div className="text-white font-semibold text-lg">
                            {testimonial.author}
                          </div>
                          <div className="text-sm text-blue-300">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </motion.div>

            {/* Fading edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-20" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-20" />
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default ClientReviews;
