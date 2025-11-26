import { STACK } from "@/data/stack";
import { TechGroup } from "@/components/ui/TechGroup";

export const TechStack = () => {
	return (
		<section className="py-24 flex justify-center bg-slate-950 border-t border-slate-900/50">
			<div className="container px-4 max-w-5xl">
				<h2 className="text-3xl font-bold text-center text-slate-100 mb-20">Stack Tecnológico</h2>

				<div className="flex flex-wrap justify-center gap-x-10 gap-y-12">
					<TechGroup title="Lenguajes Core" items={STACK.languages} className="w-full md:w-[45%]" />
					<TechGroup title="Frontend & UI" items={STACK.frontend} className="w-full md:w-[45%]" />
					<TechGroup title="Backend & Herramientas" items={STACK.backend} className="w-full" />
				</div>
			</div>
		</section>
	);
};
