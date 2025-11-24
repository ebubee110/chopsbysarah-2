import { FaTiktok } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { FiFacebook } from 'react-icons/fi';
import { MdFoodBank } from 'react-icons/md';
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="container mx-auto px-4 py-16">
      <div>
        <h4 className="text-2xl font-bold">Follow Us</h4>
        <div className="flex gap-10 mt-7">
          <div className="flex justify-center items-centers text-center w-14 h-11 py-2 rounded  shadow">
            <a href="https://web.facebook.com/sarah.u.ebubechukwu/about">
              <FiFacebook size={28} />
            </a>
          </div>

          <div className="flex justify-center items-centers text-center w-14 h-11 py-2 rounded  shadow">
            <a href="https://www.instagram.com/chops.bysarah?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
              <BsInstagram size={28} />
            </a>
          </div>

          <div className="flex justify-center items-centers text-center w-14 h-11 py-2 rounded shadow">
            <a href="https://www.tiktok.com/@iamsarahphine?_r=1&_t=ZS-91fmJcrosh6">
              <FaTiktok size={28} />
            </a>
          </div>
        </div>
        <p className="mt-2">
          Stay updated with our latest offers and new menu items
        </p>
      </div>
      <div>
        <div>
          {/* <div className="flex flex-row-reverse">
            <h1 className="text-2xl font-bold text-emerald-700 ">
              ChopsBySarah
            </h1>
            <MdFoodBank size={30} className="text-emerald-700" />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Contact;
