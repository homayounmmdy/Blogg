"use client";

import ArchiveContent from "@/app/components/ArchiveContent";
import { Suspense } from "react";

export default function ArchivePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-950" />}>
      <ArchiveContent />
    </Suspense>
  );
}