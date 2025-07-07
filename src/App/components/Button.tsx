import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
	variants: {
		variant: {
			primary:
				"w-full rounded px-4 py-2 bg-green-400 hover:bg-green-700 hover:text-white",
		},
	},
	defaultVariants: {
		variant: "primary",
	},
});

type PropsButton = ComponentProps<"button"> &
	VariantProps<typeof buttonVariants>;

const Button = ({ className, children, variant, ...props }: PropsButton) => {
	
	const classButton = twMerge(buttonVariants({ variant }), className);

	return (
		<button className={classButton} {...props}>
			{children}
		</button>
	);
};

export default Button;
