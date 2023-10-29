"use client";
import { useState, useEffect } from "react";
import { Makgeolli } from "@/types";
import {
  useRouter,
  usePathname,
  useParams,
  useSearchParams,
} from "next/navigation";

export default function MakgeolliView() {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(url);
    // You can now use the current URL
    // ...
  }, [pathname, searchParams]);

  return (
    <div>
      <div></div>
    </div>
  );
}
