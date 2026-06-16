// app/DisableInspect.jsx
'use client';

import { useEffect } from 'react';

export default function DisableInspect() {
  useEffect(() => {
    const blockContextMenu = (e) => e.preventDefault();

    const blockKeys = (e) => {
      const blocked =
        e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I', 'J', 'C'].includes(e.key)) ||
        (e.ctrlKey && e.key === 'U');
      if (blocked) e.preventDefault();
    };

    document.addEventListener('contextmenu', blockContextMenu);
    document.addEventListener('keydown', blockKeys);

    return () => {
      document.removeEventListener('contextmenu', blockContextMenu);
      document.removeEventListener('keydown', blockKeys);
    };
  }, []);

  return null;
}