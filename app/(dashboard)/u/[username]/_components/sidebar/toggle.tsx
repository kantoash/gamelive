"use client";

import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";

import { ToolTip } from "@/components/tooltip";
import { Button } from "@/components/ui/button";
import { useDashboardSidebar } from "@/hooks/use-dashboard-sidebar";

export const Toggle = () => {
  const { collapsed, onExpand, onCollapse } = useDashboardSidebar(
    (state) => state
  );

  const label = collapsed ? "Expand" : "Collapse";

  return (
    <>
      {collapsed && (
        <div className="w-full hidden lg:flex items-center justify-center pt-4 mb-4">
          <ToolTip label={label} side="right" asChild>
            <Button onClick={onExpand} variant="ghost" className="h-auto p-2">
              <ArrowRightFromLine className="h-4 w-4" />
            </Button>
          </ToolTip>
        </div>
      )}
      {!collapsed && (
        <div className="p-3 pl-6 mb-2 hidden lg:flex items-center w-full">
          <p className="font-semibold text-primary">Dashboard</p>
          <ToolTip label={label} side="right" asChild>
            <Button
              onClick={onCollapse}
              variant="ghost"
              className="h-auto p-2 ml-auto"
            >
              <ArrowLeftFromLine className="h-4 w-4" />
            </Button>
          </ToolTip>
        </div>
      )}
    </>
  );
};
