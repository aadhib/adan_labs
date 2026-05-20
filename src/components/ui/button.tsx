import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-3 rounded-none font-bold uppercase tracking-tighter whitespace-nowrap transition-transform duration-200 outline-none select-none disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Acid-yellow primary — scales on hover, presses on click
        accent:
          "border-2 border-accent bg-accent text-accent-foreground hover:scale-105 active:scale-95",
        // Hard color flip — transparent to off-white fill, text inverts
        outline:
          "border-2 border-border bg-transparent text-foreground hover:border-foreground hover:bg-foreground hover:text-background active:scale-95",
        // Minimal — text shifts to accent
        ghost:
          "border-2 border-transparent bg-transparent text-foreground hover:text-accent",
      },
      size: {
        sm: "h-10 px-4 text-xs [&_svg]:size-3.5",
        default: "h-14 px-8 text-sm [&_svg]:size-4",
        lg: "h-16 px-10 text-base md:h-20 md:px-12 md:text-lg [&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "accent",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "accent",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
