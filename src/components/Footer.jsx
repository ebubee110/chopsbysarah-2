import React from 'react';

function Footer() {
  return (
    <footer className="bg-emerald-700 text-white text-center py-4 mt-8">
      <p>
        &copy; {new Date().getFullYear()} ChopsBySarah. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
