"use client";

import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

export default function LinksPage() {
  const [items, setItems] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState<"add" | "edit" | "view" | null>(null);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  // 🔹 Fetch
  const fetchData = async () => {
    const snap = await getDocs(collection(db, "links"));
    setItems(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 🔹 Add / Update
  const handleSubmit = async () => {
    if (!title || !link) return alert("Fill all fields");

    if (openModal === "edit") {
      await updateDoc(doc(db, "links", selectedItem.id), {
        title,
        link,
      });
    } else {
      await addDoc(collection(db, "links"), {
        title,
        link,
        createdAt: serverTimestamp(),
      });
    }

    closeModal();
    fetchData();
  };

  // 🔹 Delete
  const handleDelete = async (id: string) => {
    if (!confirm("Delete this item?")) return;
    await deleteDoc(doc(db, "links", id));
    fetchData();
  };

  // 🔹 Modal Controls
  const openAdd = () => {
    setOpenModal("add");
    setTitle("");
    setLink("");
  };

  const openEdit = (item: any) => {
    setOpenModal("edit");
    setSelectedItem(item);
    setTitle(item.title);
    setLink(item.link);
  };

  const openView = (item: any) => {
    setSelectedItem(item);
    setOpenModal("view");
  };

  const closeModal = () => {
    setOpenModal(null);
    setSelectedItem(null);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Links</h1>

        <button
          onClick={openAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          + Add Link
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Link</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-3">{item.title}</td>
                <td className="p-3 text-blue-600 underline">
                  <a href={item.link} target="_blank">{item.link}</a>
                </td>

                <td className="p-3 space-x-2">
                  <button onClick={() => openView(item)} className="bg-gray-500 text-white px-2 py-1 rounded">View</button>
                  <button onClick={() => openEdit(item)} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
                  <button onClick={() => handleDelete(item.id)} className="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white w-full max-w-md p-6 rounded-xl relative">

            <button onClick={closeModal} className="absolute top-2 right-3 text-xl">✕</button>

            {/* VIEW */}
            {openModal === "view" && (
              <>
                <h2 className="text-xl font-bold">{selectedItem.title}</h2>
                <a
                  href={selectedItem.link}
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  {selectedItem.link}
                </a>
              </>
            )}

            {/* ADD / EDIT */}
            {(openModal === "add" || openModal === "edit") && (
              <>
                <h2 className="text-xl font-bold mb-3">
                  {openModal === "edit" ? "Edit Link" : "Add Link"}
                </h2>

                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Title"
                  className="w-full border p-2 mb-2"
                />

                <input
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full border p-2 mb-2"
                />

                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white p-2 rounded"
                >
                  Save
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}