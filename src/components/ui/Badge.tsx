import { ReactNode } from "react";

interface BadgeProps {
	children: ReactNode;
	className?: string;
}

export const Badge = ({ children, className = "" }: BadgeProps) => {
	return (
		<span
			className={`inline-flex items-center rounded-lg px-4 py-2 text-xs font-medium ring-indigo-500/50 text-indigo-400 ring-1 ring-inset bg-indigo-500/10 hover:bg-indigo-500/20 transition-colors ${className}`}
		>
			{children}
		</span>
	);
};