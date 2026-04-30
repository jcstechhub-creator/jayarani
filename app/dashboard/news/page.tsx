"use client";

import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function NewsPage() {
  const [news, setNews] = useState<any[]>([]);
  const [openModal, setOpenModal] = useState<"add" | "edit" | "view" | null>(null);
  const [selectedNews, setSelectedNews] = useState<any>(null);

  const [title, setTitle] = useState("");
  const [subheading, setSubheading] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    immediatelyRender: false,
  });

  // 🔹 Fetch News
  const fetchNews = async () => {
    const snap = await getDocs(collection(db, "news"));
    setNews(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // 🔹 Upload Image
  const uploadImage = async (file: File) => {
    const res = await fetch("/api/sign", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ folder: "news" }),
});
    const { timestamp, signature, api_key, cloud_name } = await res.json();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("api_key", api_key);
    formData.append("timestamp", timestamp);
    formData.append("signature", signature);
    formData.append("folder", "news");

    const uploadRes = await fetch(
      `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
      { method: "POST", body: formData }
    );

    return await uploadRes.json();
  };

  // 🔹 Add / Update
  const handleSubmit = async () => {
    const description = editor?.getHTML();

    if (!title || !subheading) return alert("Fill all fields");

    let imageData: any = {};
    if (file) imageData = await uploadImage(file);

    if (openModal === "edit") {
      await updateDoc(doc(db, "news", selectedNews.id), {
        title,
        subheading,
        description,
        ...(file && { image: imageData.secure_url }),
      });
    } else {
      await addDoc(collection(db, "news"), {
        title,
        subheading,
        description,
        image: imageData.secure_url,
        createdAt: serverTimestamp(),
      });
    }

    closeModal();
    fetchNews();
  };

  // 🔹 Delete
  const handleDelete = async (id: string) => {
    if (!confirm("Delete this news?")) return;
    await deleteDoc(doc(db, "news", id));
    fetchNews();
  };

  // 🔹 Modal Controls
  const openAdd = () => {
    setOpenModal("add");
    setTitle("");
    setSubheading("");
    setFile(null);
    editor?.commands.clearContent();
  };

  const openEdit = (item: any) => {
    setOpenModal("edit");
    setSelectedNews(item);
    setTitle(item.title);
    setSubheading(item.subheading);
    editor?.commands.setContent(item.description);
  };

  const openView = (item: any) => {
    setSelectedNews(item);
    setOpenModal("view");
  };

  const closeModal = () => {
    setOpenModal(null);
    setSelectedNews(null);
  };

  if (!editor) return null;

  return (
    <div className="p-6 max-w-6xl mx-auto">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">News</h1>

        <button
          onClick={openAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          + Add News
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white shadow rounded-xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Image</th>
              <th className="p-3">Title</th>
              <th className="p-3">Subheading</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {news.map((n) => (
              <tr key={n.id} className="border-t">
                <td className="p-3">
                  <img src={n.image} className="w-20 h-14 object-cover rounded" />
                </td>
                <td className="p-3">{n.title}</td>
                <td className="p-3">{n.subheading}</td>

                <td className="p-3 space-x-2">
                  <button onClick={() => openView(n)} className="bg-gray-500 text-white px-2 py-1 rounded">View</button>
                  <button onClick={() => openEdit(n)} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
                  <button onClick={() => handleDelete(n.id)} className="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL same as your events */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-2xl p-6 rounded-xl shadow-lg relative">

            <button onClick={closeModal} className="absolute top-2 right-3 text-xl">✕</button>

            {openModal === "view" && (
              <>
                <img src={selectedNews.image} className="w-full h-60 object-cover rounded" />
                <h2 className="text-xl font-bold mt-3">{selectedNews.title}</h2>
                <p className="text-gray-500">{selectedNews.subheading}</p>
                <div dangerouslySetInnerHTML={{ __html: selectedNews.description }} />
              </>
            )}

            {(openModal === "add" || openModal === "edit") && (
              <>
                <h2 className="text-xl font-bold mb-3">
                  {openModal === "edit" ? "Edit News" : "Add News"}
                </h2>

                <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full border p-2 mb-2" />
                <input value={subheading} onChange={(e) => setSubheading(e.target.value)} placeholder="Subheading" className="w-full border p-2 mb-2" />

                <div className="flex gap-2 bg-gray-100 p-2 rounded mb-2">
                  <button onClick={() => editor.chain().focus().toggleBold().run()} type="button">B</button>
                  <button onClick={() => editor.chain().focus().toggleItalic().run()} type="button">I</button>
                </div>

                <div className="border p-2 mb-2">
                  <EditorContent editor={editor} />
                </div>

                <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />

                <button onClick={handleSubmit} className="mt-3 w-full bg-blue-600 text-white p-2 rounded">
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