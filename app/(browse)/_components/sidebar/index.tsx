import React from "react";
import { Wrapper } from "./wrapper";
import { Toggle, ToggleSkeleton } from "./toggle";
import { Recommended, RecommendedSkeleton } from "./recommended";
import { getRecommended } from "@/lib/recommended-service";
import { getFollowed } from "@/lib/follow-services";
import { Following, FollowingSkeleton } from "./following";

export const Sidebar = async () => {
  const recommended = await getRecommended();
  const follow = await getFollowed();

  return (
    <Wrapper>
      <Toggle />
      <div>
        <Recommended data={recommended} />
        <Following data={follow} />
      </div>
    </Wrapper>
  );
};

export const SidebarSkeleton = () => {
  return (
    <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
      <ToggleSkeleton />
      <FollowingSkeleton />
      <RecommendedSkeleton />
    </aside>
  );
};
