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
    <div className="flex justify-center items-center">
      <Spin />
    </div>
  );
}
