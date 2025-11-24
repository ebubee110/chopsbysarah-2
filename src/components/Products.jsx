import React from 'react';

const products = [
  {
    name: 'Burger',
    description:
      'Juicy, flavorful, and packed with fresh ingredients, our burger is the perfect bite for real food lovers.',
    img: './public/Images/Burger.jpg',
  },
  {
    name: 'Meat Pie',
    description:
      'Flaky, buttery crust filled with seasoned meat and veggies — homemade and satisfying in every bite.',
    img: './public/Images/Meat Pie.jpg',
  },
  {
    name: 'Pastries',
    description:
      'Freshly baked pastries with irresistible flavors — perfect for tea time, breakfast, or anytime cravings',
    img: './public/Images/Pasties.jpg',
  },
  {
    name: 'Finger Foods',
    description:
      'Crispy, delicious, and perfect for sharing — our finger foods will keep you snacking happily!',
    img: './public/Images/Finger foods.jpg',
  },
  {
    name: 'Breakfast Options',
    description:
      'Start your day right with our freshly-made breakfast delights — tasty, energizing, and prepared with love every morning',
    img: './public/Images/Breakfast options.jpg',
  },
  {
    name: 'Cake',
    description:
      'Soft, moist, and heavenly! Our cakes are made fresh with premium ingredients for every occasion and celebration.',
    img: './public/Images/Cake.jpg',
  },
  {
    name: 'Tigernut Drinks',
    description:
      'Natural, refreshing tigernut drink — sweet, healthy, and preservative-free for a nourishing taste.',
    img: './public/Images/Tingernut drink.jpg',
  },
  {
    name: 'Small Chops',
    description:
      'Crispy small chops platter filled with tasty bites — ideal for parties, events, or personal enjoyment.',
    img: './public/Images/Small Chops .jpg',
  },
  {
    name: 'Goat Curry Sauce',
    description:
      'Tender goat meat simmered in rich curry spices — packed with flavor and perfect with rice or pasta.',
    img: './public/Images/Goat curry sauce.jpg',
  },
  {
    name: 'Dirty Chinese Rice',
    description:
      'A rich, flavorful Chinese-style rice stir-fried with veggies, proteins, and spices for that authentic restaurant taste.',
    img: './public/Images/Dirty Chinese rice and whole grilled chicken.jpg',
  },
  {
    name: 'Special Coconut Rice',
    description:
      'Aromatic coconut rice cooked with fresh spices and flavors — creamy, delicious, and unforgettable.',
    img: './public/Images/Special coconut rice.jpg',
  },
  {
    name: 'Parfait',
    description:
      'Layers of creamy yoghurt, fresh fruits, and crunchy granola—our parfait is a perfect healthy treat for breakfast or anytime cravings',
    img: './public/Images/Parfait.jpg',
  },
];

function Products() {
  return (
    <section id="products" className="bg-white py-35 lg:py-16 px-4 mt-12">
      <div className="container mx-auto">
        <div className="flex justify justify-center flex-col items-center   mb-9 gap-0">
          <h1 className="text-3xl font-bold uppercase text-emerald-700 ">
            Taste the Goodness
          </h1>

          <p className="text-center">
            Pick from our freshly prepared menu and enjoy flavor, quality, and
            affordability in every order.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 ">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <p className="text-gray-950 font-medium">{item.description}</p>
                <div className="flex justify justify-center">
                  <a
                    href={`https://wa.me/2348123456789?text=Hi%20I%20want%20to%20order%20${item.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-block bg-emerald-700
                     text-white  w-92 py-2 rounded hover:bg-emerald-600 font-semibold text-center"
                  >
                    Order
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
