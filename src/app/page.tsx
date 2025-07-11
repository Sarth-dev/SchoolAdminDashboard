// pages/index.tsx
import Layout from "@/app/Component/Layout";
import TeacherDetails from "@/app/Component/TeacherDetails";
import Schedule from "@/app/Component/Schedule";

export default function Home() {
  return (
    <Layout>
      <TeacherDetails />
      <Schedule />
    </Layout>
  );
}
