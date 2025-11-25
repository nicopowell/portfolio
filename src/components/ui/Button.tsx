import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	className?: string;
	variant?: "primary" | "outline";
}

export const Button = ({
	children,
	className,
	variant = "primary",
	...props
}: ButtonProps) => {
  const baseStyles = "cursor-pointer inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 disabled:pointer-events-none disabled:opacity-50"
	const variants = {
		primary: "bg-slate-200 text-slate-950 hover:bg-white",
		outline: "bg-transparent text-slate-300 border border-slate-700 hover:bg-slate-800 hover:text-slate-100",
	};
	return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
};
