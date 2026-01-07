"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        "service_wf8w3ov",
        "template_n78frjd",
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
          to_name: "Jerry",
        },
        "hTUe6xugN0VFeLvc-"
      );

      setIsLoading(false);
      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setIsLoading(false);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="lg:ml-48 py-20 px-6 lg:px-16 relative overflow-hidden">
      <div className="max-w-2xl">
        <p className="text-accent text-sm tracking-widest mb-4">GET IN TOUCH</p>
        <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-neon-cyan">
          Let's Work Together
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-foreground/80"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-card/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 backdrop-blur-sm"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-foreground/80"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-card/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 backdrop-blur-sm"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-foreground/80"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-card/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-accent text-accent-foreground py-4 rounded-lg font-bold hover:bg-accent/90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(0,243,255,0.3)] hover:shadow-[0_0_25px_rgba(0,243,255,0.5)]"
          >
            {isLoading ? (
              <span className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-inherit border-t-transparent rounded-full animate-spin" />
                Sending...
              </span>
            ) : (
              <>
                Send Message <FaPaperPlane />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Success Popup Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowSuccess(false)}
          >
            <motion.div
              className="bg-card border border-primary p-8 rounded-2xl shadow-[0_0_50px_rgba(0,243,255,0.2)] max-w-md w-full text-center relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow effect background */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/20 blur-3xl rounded-full -z-10" />

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.2,
                }}
                className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary border border-primary/50"
              >
                <FaCheckCircle className="text-4xl drop-shadow-[0_0_10px_rgba(0,243,255,0.5)]" />
              </motion.div>

              <h3 className="text-2xl font-bold mb-2 text-neon-cyan">
                Message Sent!
              </h3>
              <p className="text-foreground/70 mb-8">
                Thanks for reaching out! I'll get back to you as soon as
                possible.
              </p>

              <button
                onClick={() => setShowSuccess(false)}
                className="px-8 py-2 rounded-full border border-border hover:bg-white/5 transition-colors text-sm font-medium"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
