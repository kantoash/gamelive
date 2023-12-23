
import { isFollowingUser } from "@/lib/follow-services";
import { notFound } from "next/navigation";
import React from "react";
import { isBlockedByUser } from "@/lib/block-services";
import { StreamPlayer } from "@/components/stream-player";
import { getUserByUsername } from "@/lib/user-services";

const UserPage = async ({ params }: { params: { username: string } }) => {
  const user = await getUserByUsername(params.username);

  if (!user || !user.stream) {
    notFound();
  }

  const isFollowing = await isFollowingUser(user.id);
  const isBlocked = await isBlockedByUser(user.id);

  if (isBlocked) {
    notFound();
  }
 // to do error user.stream!
  return (
    <StreamPlayer user={user} stream={user.stream} isFollowing={isFollowing} />
  );
};

export default UserPage;
