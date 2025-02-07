import { ReactNode } from "react";

interface TopCardProps {
  children: ReactNode;
}

export function TopCard({ children }: TopCardProps) {
  return (
    <div className="items- relative -top-24 flex w-full justify-center gap-8 rounded-xl bg-profile px-8 py-10">
      {children}
    </div>
  );
}
