'use client'
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import OctoIcon from "@/components/OctoIcon";
import style from "./home.style";

export default function Home() {
  const router = useRouter();
  const [userName, setUserName] = useState('akash02ab');

  const handleFormAction = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const path = `/user?id=${userName}`;
    router.push(path);
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  }

  return (
    <main className={style.container}>
      <form onSubmit={handleFormAction} className={style.form}>
        <OctoIcon className={style.svg}/>
        <label htmlFor="username" className={style.label}>Find Your OctoProfile</label>
        <input
          name="username"
          type="text"
          placeholder="akash02ab"
          className={style.input}
          onChange={handleInputChange}
        />
      </form>
    </main>
  );
}
