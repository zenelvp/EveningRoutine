"use client";

import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  // Measure content height
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [answer]);

  return (
    <div className="w-full mb-2">
      {/* Header */}
      <div
        className={`flex items-center justify-between gap-5 w-full cursor-pointer transition-all duration-300 px-4 py-5 rounded-2xl ${
          isOpen ? "bg-theme text-body" : ""
        }`}
        onClick={onToggle}
        role="button"
        aria-expanded={isOpen}
      >
        <h6 className={`${isOpen ? "text-body" : ""}`}>{question}</h6>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={`${isOpen ? "text-body" : ""}`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>

      {/* Accordion content */}
      <motion.div
        animate={{ maxHeight: isOpen ? contentHeight : 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.6,
        }}
        className="overflow-hidden"
      >
        <div ref={contentRef} className="text-base py-4 px-3">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

interface AccordionProps {
  items: { question: string; answer: string }[];
  defaultOpenIndex?: number;
  type?: "single" | "multiple";
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenIndex = 0,
  type = "single",
  className = "",
}) => {
  const [openItems, setOpenItems] = useState<number[]>(
    defaultOpenIndex !== undefined ? [defaultOpenIndex] : []
  );

  const handleToggle = (index: number) => {
    if (type === "single") {
      setOpenItems(openItems.includes(index) ? [] : [index]);
    } else {
      setOpenItems((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openItems.includes(index)}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
