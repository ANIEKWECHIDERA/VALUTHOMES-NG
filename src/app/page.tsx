"use client"; // Required for client-side hooks
import { useQuery } from "@tanstack/react-query";
import { BarChart, Bar, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const fetchFakeData = async () => {
  return [
    { name: "A", value: 400 },
    { name: "B", value: 300 },
    { name: "C", value: 500 },
  ];
};

export default function Home() {
  const { data } = useQuery({ queryKey: ["fakeData"], queryFn: fetchFakeData });

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, "test@example.com", "password123");
      alert("Logged in!");
    } catch (error) {
      alert("Login failed: " + (error as any).message);
    }
  };

  return (
    <div>
      <h1>Welcome to My Property App</h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Button onClick={handleLogin}>Login</Button>
      </motion.div>
      {data && (
        <BarChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      )}
    </div>
  );
}
