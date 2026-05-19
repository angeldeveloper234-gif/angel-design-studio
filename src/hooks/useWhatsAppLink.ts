"use client";

import { useState, useEffect } from 'react';
import { CONTACT_INFO } from '@/constants/contact';

export const useWhatsAppLink = (message?: string) => {
  const [link, setLink] = useState(() => {
    let base = CONTACT_INFO.whatsappLink;
    if (message) {
      base += `?text=${encodeURIComponent(message)}`;
    }
    return base;
  });

  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      let waParam = urlParams.get('wa');
      
      if (waParam) {
        localStorage.setItem('wa_number', waParam);
      } else {
        waParam = localStorage.getItem('wa_number');
      }
      
      const defaultNumber = CONTACT_INFO.phone;
      const numberToUse = waParam || defaultNumber;
      
      let newLink = `https://wa.me/${numberToUse}`;
      if (message) {
        newLink += `?text=${encodeURIComponent(message)}`;
      }
      setLink(newLink);
    } catch (e) {
      // Ignore errors if window is not defined or URL parsing fails
    }
  }, [message]);

  return link;
};

export const getDynamicWhatsAppNumber = () => {
  const defaultNumber = CONTACT_INFO.phone;
  if (typeof window !== 'undefined') {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const waParam = urlParams.get('wa');
      if (waParam) {
        localStorage.setItem('wa_number', waParam);
        return waParam;
      }
      return localStorage.getItem('wa_number') || defaultNumber;
    } catch (e) {
      return defaultNumber;
    }
  }
  return defaultNumber;
};
