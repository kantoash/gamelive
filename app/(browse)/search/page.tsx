import { Suspense } from "react";
import { redirect } from "next/navigation";
import { StreamsSkeleton, Streams } from "../../../components/streams";
import { getStreams } from "@/lib/stream-services";
import { getSearch } from "@/lib/search-services";

interface SearchPageProps {
  searchParams: {
    term?: string;
  };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  if (!searchParams.term) {
    redirect("/");
  }
  const streams = await getSearch(searchParams.term);
  return (
    <div className="h-full p-8 max-w-screen-2xl mx-auto">
      <Suspense fallback={<StreamsSkeleton />}>
        <Streams data={streams} />
      </Suspense>
    </div>
  );
};

export default SearchPage;
