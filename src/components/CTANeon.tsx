import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SafeButton, TextArrow } from './UltraCTA';

export function CTASectionNeon() {
  return (
    <div className="p-10 flex justify-center bg-black text-center">
      <div className="border border-green-400/40 rounded-2xl p-10 shadow-[0_0_30px_rgba(0,255,150,0.4)]">
        <h2 className="text-3xl font-bold text-green-300 drop-shadow-[0_0_10px_rgba(0,255,150,0.7)] mb-4">
          Explore the Future
        </h2>
        <p className="text-green-200 mb-6 max-w-md">
          A hyper-modern look with neon aesthetics and glowing accents.
        </p>
        <SafeButton className="text-black bg-green-300 hover:bg-green-400 px-6 py-4 rounded-xl font-semibold shadow-[0_0_15px_rgba(0,255,150,0.7)]">
          Start Now <TextArrow />
        </SafeButton>
      </div>
    </div>
  );
}
