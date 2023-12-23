import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
  
  interface ToolTipProps {
    label: string;
    children: React.ReactNode;
    asChild?: boolean;
    side?: "top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
  };
  
  export const ToolTip = ({
    label,
    children,
    asChild,
    side,
    align,
  }: ToolTipProps) => {
    return (
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild={asChild}>
            {children}
          </TooltipTrigger>
          <TooltipContent 
            className="text-black bg-white " 
            side={side}
            align={align}
          >
            <p className="text-xs">
              {label}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };