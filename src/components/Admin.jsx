import React, { useState } from 'react';
import { db, storage } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { onSnapshot } from 'firebase/firestore';

onSnapshot(collection(db, 'products'), (snapshot) => {
  snapshot.docs.forEach((doc) => {
    console.log(doc.data());
  });
});

function Admin() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!image) return alert('Please select an image');

    setLoading(true);

    const imageRef = ref(storage, `products/${image.name}`);

    await uploadBytes(imageRef, image);
    const imageURL = await getDownloadURL(imageRef);

    await addDoc(collection(db, 'products'), {
      name,
      price,
      image: imageURL,
      createdAt: new Date(),
    });

    setLoading(false);
    alert('Product Uploaded ✅');
    setName('');
    setPrice('');
    setImage(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <form onSubmit={handleUpload} className="space-y-3">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border p-2 w-full"
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="border p-2 w-full"
        />

        <button
          type="submit"
          className="bg-green-600 text-white p-2 w-full rounded"
        >
          {loading ? 'Uploading...' : 'Upload Product'}
        </button>
      </form>
    </div>
  );
}

export default Admin;
