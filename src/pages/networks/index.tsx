import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { Header } from "../../components/Header";


import { db } from "../../services/firebaseConnection";
import {
  setDoc,
  doc,
  getDoc  
} from 'firebase/firestore';

export function Networks() {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");

  useEffect(() => {
    async function loadLinks() {
      const docRef = doc(db, "social", "link");
      try {
        const snapshot = await getDoc(docRef);
        if (snapshot.exists()) {
          const data = snapshot.data();
          setFacebook(data?.facebook || "");
          setInstagram(data?.instagram || "");
          setYoutube(data?.youtube || "");
        }
      } catch (error) {
        console.error("Erro ao buscar os links:", error);
      }
    }

    loadLinks();
  }, []);

  function handleRegister(e: FormEvent) {
    e.preventDefault();

    setDoc(doc(db, "social", "link"), {
      facebook,
      instagram,
      youtube
    })
    .then(() => {
      alert("Links salvos com sucesso!");
    })
    .catch((error) => {
      console.error("Erro ao salvar os links:", error);
      alert("Erro ao salvar os links.");
    });
  }

  return (
    <div className="flex items-center flex-col min-h-screen pb-7 px-2">
      <Header />

      <h1 className="text-white text-2xl font-medium mt-8 mb-4">Minhas redes sociais</h1>

      <form className="flex flex-col max-w-xl w-full" onSubmit={handleRegister}>
        <label htmlFor="facebook" className="text-white font-medium mt-2 mb-2">Link do Facebook</label>
        <input
          id="facebook"
          type="url"
          placeholder="Digite a url do Facebook..."
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />

        <label htmlFor="instagram" className="text-white font-medium mt-2 mb-2">Link do Instagram</label>
        <input
          id="instagram"
          type="url"
          placeholder="Digite a url do Instagram..."
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />

        <label htmlFor="youtube" className="text-white font-medium mt-2 mb-2">Link do Youtube</label>
        <input
          id="youtube"
          type="url"
          placeholder="Digite a url do Youtube..."
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />

        <button
          type="submit"
          className="text-white bg-blue-600 h-9 rounded-md items-center justify-center flex mb-7 font-medium"
        >
          Salvar Links
        </button>
      </form>
    </div>
  );
}
