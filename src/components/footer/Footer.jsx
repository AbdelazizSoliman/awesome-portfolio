import React from 'react';
import './footer.css';

export default function Footer() {
  return <>
<footer className='d-flex justify-content-between mb-4'>
  <ul className='d-flex gap-2 p-0'>
    <li><a href="/">About</a></li>
    <li><a href="/">Projects</a></li>
    <li><a href="/">Speaking</a></li>
    <li><a href="/">Uses</a></li>
    <li></li>
  </ul>
  <p>© 2024 Spencer sharp. All rights reserved</p>
</footer>
  </>
}
  