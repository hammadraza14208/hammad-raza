"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/content/data";
import { SectionHeading } from "@/components/ui/section-heading";

export function Testimonials() {
  return (
    <section className="section-space">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Client Voice"
          title="Chosen by teams that care how quality feels before it is measured."
          description="Our clients come to us when the brand needs to signal its next level with confidence, calm, and commercial clarity."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="glass-panel rounded-[1.75rem] p-6 shadow-luxe"
            >
              <p className="text-lg leading-8 text-foreground/84">“{testimonial.quote}”</p>
              <footer className="mt-6 border-t border-white/10 pt-5">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-foreground/62">{testimonial.role}</div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
