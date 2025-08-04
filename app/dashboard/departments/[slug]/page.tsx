import React, { Suspense } from "react";
import Loading from "@/components/Loading";
import Department from "@/components/Department";

export default function page({ params }: { params: { slug: string } }) {
  return (
    <Suspense fallback={<Loading />}>
      <Department slug={params.slug} />
    </Suspense>
  );
}
