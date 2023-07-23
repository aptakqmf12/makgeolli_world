"use client";

import { useState, useEffect, useRef } from "react";
import { fetchUsers, UserType } from "@/api";
import { createUser, removeUser, updateUser } from "../../api/index";

export default function Home() {
  const [userList, setUserList] = useState<UserType[]>([]);
  const nameRef = useRef<HTMLInputElement>(null);
  const oldRef = useRef<HTMLInputElement>(null);

  const record = async () => {
    const res = await fetchUsers();
    setUserList(res.data);
  };

  const onCreateUser = () => {
    if (!nameRef.current || !oldRef.current) return;

    const [name, old] = [nameRef.current.value, oldRef.current.value];

    createUser({ name, old }).then(() => {
      record();

      if (!nameRef.current || !oldRef.current) return;
      nameRef.current.value = "";
      oldRef.current.value = "";
    });
  };

  useEffect(() => {
    record();
  }, []);
  return (
    <>
      <h2>userList</h2>

      <ul>
        {userList?.map((user, i) => (
          <UserCard user={user} record={record} key={user.id} />
        ))}
      </ul>

      <input type={"text"} ref={nameRef} />
      <input type={"number"} ref={oldRef} />
      <button onClick={onCreateUser}>createUser!</button>
    </>
  );
}

const UserCard = ({ user, record }: { user: UserType; record: () => void }) => {
  const [name, setName] = useState(user.name);
  const [old, setOld] = useState(user.old);

  const [editMode, setEditMode] = useState(false);

  const onRemoveUser = () => {
    removeUser({ id: user.id }).then(() => {
      record();
    });
  };
  const onUpdateUser = () => {
    updateUser({ id: user.id, name, old }).then(() => {
      record();
      setEditMode(false);
    });
  };

  return (
    <li>
      {!editMode && (
        <>
          <span>{name}</span>
          <span>{old}</span>
        </>
      )}

      {editMode && (
        <>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <input
            value={old}
            type={"number"}
            onChange={(e) => setOld(e.target.value)}
          />
        </>
      )}

      <button onClick={onRemoveUser}>삭제</button>
      <button onClick={() => setEditMode(!editMode)}>수정</button>
      {editMode && (
        <>
          <button onClick={onUpdateUser}>저장</button>
        </>
      )}
    </li>
  );
};
