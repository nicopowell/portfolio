import { IconType } from "react-icons";

export interface TechItem {
	name: string;
	icon: IconType;
	color: string;
}

interface TechGroupProps {
	title: string;
	items: TechItem[];
	className?: string;
}

export const TechGroup = ({ title, items, className = "" }: TechGroupProps) => {
	return (
		<div className={`flex flex-col items-center ${className}`}>
			<h3 className="text-lg font-semibold text-slate-100 mb-4 text-center">{title}</h3>
			<div className="flex flex-wrap justify-center gap-x-10 gap-y-8 w-full">
				{items.map((tech) => (
					<div
						key={tech.name}
						className="group flex flex-col items-center gap-2"
						style={{ "--hover-color": tech.color } as React.CSSProperties}
					>
						<div className="p-1 transition-transform duration-300 group-hover:scale-110">
							<tech.icon className="text-5xl text-slate-600 transition-colors duration-300 group-hover:text-[var(--hover-color)]" />
						</div>

						<span className="text-sm font-mono text-slate-500 transition-colors duration-300 group-hover:text-slate-300">
							{tech.name}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};
