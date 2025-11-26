"use client";

import Link from "next/link";

interface ButtonProps {
  href?: string;
  label: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  href,
  label,
  className = "",
  onClick,
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 font-semibold rounded-full bg-theme text-body transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:pointer-events-none";

  if (href && !disabled) {
    return (
      <Link href={href} className={className}>
        <div className={baseClasses}>{label}</div>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${className}`}
    >
      {label}
    </button>
  );
}
