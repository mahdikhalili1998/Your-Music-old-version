"use client";
import PersonalInfo from "@/components/template/PersonalInfo";
import { useParams } from "next/navigation";

async function page() {
  const { userId } = useParams();
  console.log(userId);

  return <PersonalInfo url={JSON.parse(JSON.stringify(userId))} />;
}

export default page;
