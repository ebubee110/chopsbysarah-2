// import React, { useState } from 'react';
// import { db, storage } from '../firebase';
// import { collection, addDoc } from 'firebase/firestore';
// import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// export default function AdminUpload() {
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [description, setDescription] = useState('');
//   const [image, setImage] = useState(null);

//   const handleUpload = async (e) => {
//     e.preventDefault();
//     if (!image) return alert('Please select an image');

//     // Upload image to Firebase Storage
//     const imageRef = ref(storage, `products/${image.name}`);
//     await uploadBytes(imageRef, image);
//     const imageUrl = await getDownloadURL(imageRef);

//     // Save product info in Firestore
//     await addDoc(collection(db, 'products'), {
//       name,
//       price,
//       description,
//       imageUrl,
//     });

//     alert('Product uploaded successfully!');
//     setName('');
//     setPrice('');
//     setDescription('');
//     setImage(null);
//   };

//   return (
//     <div className="p-6 max-w-md mx-auto bg-white rounded-2xl shadow-md">
//       <h2 className="text-xl font-bold mb-4 text-center">Add New Product</h2>
//       <form onSubmit={handleUpload} className="space-y-4">
//         <input
//           type="text"
//           placeholder="Product Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full border p-2 rounded"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Price"
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           className="w-full border p-2 rounded"
//           required
//         />
//         <textarea
//           placeholder="Description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="w-full border p-2 rounded"
//           required
//         />
//         <input
//           type="file"
//           onChange={(e) => setImage(e.target.files[0])}
//           className="w-full"
//           required
//         />
//         <button
//           type="submit"
//           className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
//         >
//           Upload Product
//         </button>
//       </form>
//     </div>
//   );
// }

async function uploadProduct() {
  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const file = document.getElementById('file').files[0];

  if (!name || !price || !file) {
    alert('Fill all fields!');
    return;
  }

  const storageRef = ref(storage, `products/${file.name}`);
  await uploadBytes(storageRef, file);
  const imageURL = await getDownloadURL(storageRef);

  await addDoc(collection(db, 'products'), {
    name,
    price,
    imageURL,
    createdAt: new Date(),
  });

  alert('Upload successful!');
}
