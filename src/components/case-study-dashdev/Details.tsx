"use client"	
import { useState } from 'react';

export default function Details({ data }: any) {
   const [isTab, setIsTab] = useState(1);

   // Check if data exists and has the details array
   if (!data || !Array.isArray(data)) {
      return null;
   }

   const handleTab = (i: number) => {
      setIsTab(i);
   };
   
   return(
      <section data-kte="kt-20244" className="kt-20244 py-4">
         <div data-kte="kt-67316" className="kt-67316 container">
            <div data-kte="kt-18238" className="kt-18238 bg-primary rounded-4 py-4 px-4">
              <div data-kte="kt-33570" className="kt-33570 d-flex flex-column flex-md-row text-center align-items-center justify-content-between" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                  {data.map((detail: any) => (
                     <div key={detail.id} data-kte="kt-74462" className="kt-74462 py-3">
                        <span data-kte="kt-68910" className="kt-68910 text-white text-sm mb-2 d-block" style={{ fontSize: '14px', opacity: '0.8' }}>{detail.title}</span>
                        <p data-kte="kt-62881" className="kt-62881 text-white mb-0 fw-bold" style={{ fontSize: '24px' }}>{detail.subtitle}</p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}