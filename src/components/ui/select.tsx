"use client";

import { Select } from "@base-ui/react/select";
import { Check, ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

export type SelectOption = { value: string; label: string };

/**
 * Brutalist dropdown built on Base UI Select — fully themed (the native
 * `<select>` popup cannot be styled). Sharp corners, 2px borders, accent
 * hover flood, and a hidden form input via the `name` prop.
 */
export function KineticSelect({
  id,
  name,
  required,
  placeholder = "Select an option",
  options,
  className,
}: {
  id?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
  options: SelectOption[];
  className?: string;
}) {
  const items = Object.fromEntries(options.map((o) => [o.value, o.label]));

  return (
    <Select.Root items={items} id={id} name={name} required={required}>
      <Select.Trigger
        className={cn(
          "group flex h-16 w-full items-center justify-between gap-3 rounded-none border-2 border-border bg-transparent px-5 text-left text-sm font-bold uppercase tracking-tight text-foreground outline-none transition-colors hover:border-foreground focus-visible:border-accent data-[open]:border-accent",
          className,
        )}
      >
        <Select.Value
          placeholder={placeholder}
          className="min-w-0 truncate data-[placeholder]:text-muted-foreground"
        />
        <Select.Icon className="shrink-0 text-accent transition-transform duration-200 group-data-[open]:rotate-180">
          <ChevronDown className="h-4 w-4" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Positioner
          className="z-[60] outline-none"
          side="bottom"
          align="start"
          sideOffset={-2}
          alignItemWithTrigger={false}
        >
          <Select.Popup className="max-h-[min(22rem,var(--available-height))] w-[var(--anchor-width)] overflow-y-auto border-2 border-accent bg-background">
            {options.map((o) => (
              <Select.Item
                key={o.value}
                value={o.value}
                className="flex cursor-pointer select-none items-center justify-between gap-3 border-b-2 border-border px-5 py-3.5 text-sm font-bold uppercase tracking-tight text-foreground outline-none transition-colors last:border-b-0 data-[selected]:text-accent data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground"
              >
                <Select.ItemText>{o.label}</Select.ItemText>
                <Select.ItemIndicator className="shrink-0">
                  <Check className="h-4 w-4" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Popup>
        </Select.Positioner>
      </Select.Portal>
    </Select.Root>
  );
}
