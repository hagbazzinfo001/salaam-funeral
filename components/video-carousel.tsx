"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Hassan",
    role: "Family Member",
    content:
      "Salaam Funeral Services provided exceptional care during our most difficult time. Their adherence to Islamic traditions and compassionate service was truly remarkable.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Fatima Al-Zahra",
    role: "Community Leader",
    content:
      "The team at Salaam Funeral Services handled everything with such professionalism and respect. They made the entire process seamless during our time of grief.",
    image: "https://randomuser.me/api/portraits/women/.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Omar Abdullah",
    role: "Imam",
    content:
      "I have worked with many funeral services, but Salaam truly understands and respects Islamic burial traditions. I recommend them without hesitation.",
    image: "https://randomuser.me/api/portraits/men/25.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Aisha Rahman",
    role: "Family Member",
    content:
      "Their 24/7 availability and immediate response during our emergency was a blessing. The staff was knowledgeable, caring, and professional.",
    image: "https://randomuser.me/api/portraits/women/.jpg",
    rating: 5,
  },
];

export function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-islamic-50 to-gold-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from families we &#39;ve had the honor to serve during their
            most difficult times.
          </p>
        </motion.div>

        <div className="relative">
          {/* Main carousel */}
          <div className="relative h-96 bg-white rounded-2xl shadow-xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center px-8 md:px-16">
                  <motion.img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-4 border-islamic-200"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                  <motion.div
                    className="flex justify-center mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <div
                          key={i}
                          className="w-5 h-5 bg-gold-400 rounded-full mr-1"
                        ></div>
                      )
                    )}
                  </motion.div>
                  <motion.p
                    className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    &#39;{testimonials[currentIndex].content}&#39;
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <h4 className="font-semibold text-lg text-gray-900">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-islamic-600 font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
            onClick={goToPrevious}
          >
            <ChevronLeft size={20} />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
            onClick={goToNext}
          >
            <ChevronRight size={20} />
          </Button>

          {/* Play/Pause button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-4 right-4 bg-white/90 hover:bg-white shadow-lg"
            onClick={togglePlayPause}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </Button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-islamic-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-islamic-600 mb-2">
              500+
            </div>
            <div className="text-gray-600">Families Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold-600 mb-2">
              15+
            </div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-islamic-600 mb-2">
              24/7
            </div>
            <div className="text-gray-600">Availability</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold-600 mb-2">
              100%
            </div>
            <div className="text-gray-600">Islamic Compliant</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
