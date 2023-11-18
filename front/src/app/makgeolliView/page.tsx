"use client";
import { useState, useEffect } from "react";
import { Makgeolli } from "@/types";
import axios from "axios";
import {
  useRouter,
  usePathname,
  useParams,
  useSearchParams,
} from "next/navigation";
import MakgeolliCard from "@/component/makgeolliCard";
import Layout from "@/component/layout/layout";

export default function MakgeolliView() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [info, setInfo] = useState<Makgeolli>();

  const record = async () => {
    const res = await axios.get(`/makgeolliView?id=${id}`);
    setInfo(res.data);
  };

  useEffect(() => {
    record();
  }, [id]);

  return (
    <Layout>
      <h2>{info?.name}</h2>

      {info && <MakgeolliCard {...info} />}
    </Layout>
  );
}
