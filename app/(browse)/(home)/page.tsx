import { Suspense } from "react";
import { Streams, StreamsSkeleton } from "@/components/streams";
import { getStreams } from '@/lib/stream-services'
export default async function Home() {
  const streams = await getStreams();
  return (
    <div className="h-full p-8 max-w-screen-2xl mx-auto">
      <Suspense fallback={<StreamsSkeleton />}>
        <Streams data={streams}  />
      </Suspense>
    </div>
  );
}
