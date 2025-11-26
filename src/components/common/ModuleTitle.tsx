"use client";

import { motion } from "framer-motion";
import React from "react";
import Button from "../button/Button";

interface ModuleTitleProps {
  suppertitle?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  onCtaClick?: () => void;
  className?: string;
  variant?: "v1" | "v2" | "v3";
  colorVariant?: "light" | "dark" | "primary"; // New prop for text color
}

export const ModuleTitle: React.FC<ModuleTitleProps> = ({
  suppertitle,
  title,
  subtitle,
  ctaText,
  ctaHref,
  className = "",
  variant = "v1",
  colorVariant = "dark", // default text color
}) => {
  if (!suppertitle && !title && !subtitle && !ctaText) return null;

  const getTextColor = () => {
    switch (colorVariant) {
      case "light":
        return "text-white";
      case "primary":
        return "text-primary";
      case "dark":
      default:
        return "text-black";
    }
  };

  // Helper function to parse text and wrap [content] in span with primary color
  const parseHighlightedText = (text?: string) => {
    if (!text) return null;
    const parts = text.split(/(\[.*?\])/g);
    return parts.map((part, index) =>
      part.startsWith("[") && part.endsWith("]") ? (
        <h2 key={index} className="text-h2 font-title font-semibold text-primary">
          {part.slice(1, -1)}
        </h2>
      ) : (
        <h2 key={index}>{part}</h2>
      )
    );
  };

  // Variant 1 – Minimal & Centered
  if (variant === "v1") {
    return (
      <motion.div
        className={`text-center space-y-3 mb-16 max-w-[850px] m-auto ${className}`}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {suppertitle && (
          <motion.p
            className={getTextColor()}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {parseHighlightedText(suppertitle)}
          </motion.p>
        )}
        {title && (
          <motion.h2
            className={`${getTextColor()} font-playfair text-4xl lg:text-5xl`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {parseHighlightedText(title)}
          </motion.h2>
        )}
        {subtitle && (
          <motion.p
            className={getTextColor()}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {parseHighlightedText(subtitle)}
          </motion.p>
        )}
      </motion.div>
    );
  }

  // Variant 2 – Left-Aligned with Accent Border
  if (variant === "v2") {
    return (
      <motion.div
        className={`flex items-center justify-between gap-6 mb-16 ${className}`}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-[650px]">
          {suppertitle && (
            <motion.p
              className={`mb-4 ${getTextColor()}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {parseHighlightedText(suppertitle)}
            </motion.p>
          )}
          {title && (
            <motion.h2
              className={`mb-4 ${getTextColor()}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {parseHighlightedText(title)}
            </motion.h2>
          )}
          {subtitle && (
            <motion.p
              className={getTextColor()}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {parseHighlightedText(subtitle)}
            </motion.p>
          )}
        </div>
        {ctaText && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button label={ctaText} href={ctaHref || "#"} />
          </motion.div>
        )}
      </motion.div>
    );
  }

  // Variant 3 – Centered (neutral layout)
  if (variant === "v3") {
    return (
      <motion.div
        className={`flex items-center justify-between flex-wrap gap-4 mb-16 ${className}`}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-[750px]">
          {suppertitle && (
            <motion.p
              className={`uppercase tracking-wide ${getTextColor()}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {parseHighlightedText(suppertitle)}
            </motion.p>
          )}
          {title && (
            <motion.h2
              className={`${getTextColor()} mt-4`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {parseHighlightedText(title)}
            </motion.h2>
          )}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {subtitle && (
            <p className={`${getTextColor()} mb-6`}>
              {parseHighlightedText(subtitle)}
            </p>
          )}
          {ctaText && <Button label={ctaText} href={ctaHref || "#"} />}
        </motion.div>
      </motion.div>
    );
  }

  return null;
};
