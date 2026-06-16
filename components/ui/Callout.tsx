import { Info, Lightbulb, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutType = "info" | "tip" | "warning";

const config: Record<CalloutType, { icon: React.ReactNode; className: string }> = {
  info: {
    icon: <Info size={16} />,
    className: "bg-[rgba(57,182,255,0.08)] border-[rgba(57,182,255,0.3)] text-[var(--color-sky)]",
  },
  tip: {
    icon: <Lightbulb size={16} />,
    className: "bg-[rgba(61,220,151,0.08)] border-[rgba(61,220,151,0.3)] text-[var(--color-mint)]",
  },
  warning: {
    icon: <AlertTriangle size={16} />,
    className: "bg-[rgba(255,107,94,0.08)] border-[rgba(255,107,94,0.3)] text-[var(--color-coral)]",
  },
};

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: React.ReactNode;
}

export default function Callout({ type = "info", title, children }: CalloutProps) {
  const { icon, className } = config[type];
  return (
    <div className={cn("rounded-xl border p-4 my-6", className)}>
      <div className="flex gap-3">
        <span className="flex-shrink-0 mt-0.5">{icon}</span>
        <div className="text-sm text-[var(--color-text-primary)]">
          {title && <p className="font-semibold mb-1">{title}</p>}
          <div className="text-[var(--color-text-secondary)]">{children}</div>
        </div>
      </div>
    </div>
  );
}
