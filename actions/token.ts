"use server";

import { v4 } from "uuid";
import { AccessToken } from "livekit-server-sdk";
import { getSelf } from "@/lib/auth-services";
import { isBlockedByUser } from "@/lib/block-services";
import { getUserById } from "@/lib/user-services";

export const createViewerToken = async (hostIdentity: string) => {
  let user;

  try {
    user = await getSelf();
  } catch {
    const id = v4();
    const username = `guest#${Math.floor(Math.random() * 1000)}`;
    user = { id, username };
  }

  const host = await getUserById(hostIdentity);

  if (!host) {
    throw new Error("User not found");
  }

  const isBlocked = await isBlockedByUser(host.id);

  if (isBlocked) {
    throw new Error("User is blocked");
  }

  const isHost = user.id === host.id;

  const token = new AccessToken(
    process.env.LIVEKIT_API_KEY!,
    process.env.LIVEKIT_API_SECRET!,
    {
      identity: isHost ? `host-${user.id}` : user.id,
      name: user.username,
    }
  );

  token.addGrant({
    room: host.id,
    roomJoin: true,
    canPublish: false,
    canPublishData: true,
  });

  return await Promise.resolve(token.toJwt());
};