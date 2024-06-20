"use client";

import { Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/search");
  }, [router]);

  return (
    <div className="text-center m-auto">
      <Spin />
    </div>
  );
}
