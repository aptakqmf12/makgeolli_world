"use client";
import { signin } from "@/api";
import { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id.length === 0 || pw.length === 0) return;

    const res = await signin(id, pw);
    console.log(res);

    if (res.status === 200) {
      localStorage.setItem("name", res.data[0].name);
      router.push("/");
    }
  };

  return (
    <div>
      <FormWrapper onSubmit={handleSubmit}>
        <label>
          아이디
          <input value={id} onChange={(e) => setId(e.target.value)} />
        </label>

        <label>
          비밀번호
          <input value={pw} onChange={(e) => setPw(e.target.value)} />
        </label>

        <button type="submit">로그인</button>
      </FormWrapper>
    </div>
  );
}

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;
