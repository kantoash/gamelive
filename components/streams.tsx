
import { Skeleton } from "@/components/ui/skeleton";
import { StreamCard, StreamCardSkeleton } from "./stream-card";
import { User } from "@prisma/client";

interface StreamsProps {
  data: ({
    id: string;
    name: string;
    thumbnailUrl: string | null;
    isLive: boolean;
  } & {
    user: User;
  })[];
}

export const Streams = async ({ data }: StreamsProps) => {
  return (
    <div>
      {data.length === 0 && (
        <div className="text-muted-foreground text-sm">No streams found.</div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {data.map((stream) => (
          <StreamCard key={stream.id} data={stream} />
        ))}
      </div>
    </div>
  );
};

export const StreamsSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-8 w-[290px] mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {[...Array(4)].map((_, i) => (
          <StreamCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};
