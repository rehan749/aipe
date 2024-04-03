"use client"
import  { useEffect } from 'react';

const Bootstrap = () => {
  useEffect(() => {
    const loadBootstrap = async () => {
      await import('bootstrap/dist/js/bootstrap.bundle.min.js');
    };

    loadBootstrap();
  }, []);

  return null;
};

export default Bootstrap;
