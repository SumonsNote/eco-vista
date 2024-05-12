"use client";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function LocationDetector() {
  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams(searchParams);
    navigator.geolocation.getCurrentPosition((position) => {
      params.set("latitude", position.coords.latitude);
      params.set("longitude", position.coords.longitude);
      setLoading(false);
      router.push(`/currnet?${params.toString()}`);
    });
  }, [pathname, searchParams, router]);
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
      {loading && (
        <>
          <Image
            src="/network.gif"
            alt="network"
            width={500}
            height={500}
            className="border rounded-md my-4"
          />
          <p className="text-4xl text-center">Detecting Location...</p>
        </>
      )}
    </div>
  );
}
