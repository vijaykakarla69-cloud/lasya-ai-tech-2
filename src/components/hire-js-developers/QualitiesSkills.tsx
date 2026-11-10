'use client'
import React, { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';

const QualitiesSkills = ({ data }: { data: any }) => {
  const [content, setContent] = useState(data);

  useEffect(() => {
    setContent(data);
  }, [data]); // Update content when data changes

  if (!content) return null; 

  return (
    <section data-kte="kt-43842" className="kt-43842 section-testimonial-2 position-relative">
      <div data-kte="kt-29003" className="kt-29003 container position-relative z-1">
        <div data-kte="kt-36241" className="kt-36241 row pb-9 text-left justify-content-left align-items-left mt-9">
          {Array.isArray(content) ? content.map((item: any) => {
            return (
              <div key={item.id} data-kte="kt-62485" className="kt-62485 text-left fs-5 text-900">
                <ReactMarkdown
                  components={{
                    // Body copy renders one level down: the page H1 is the
                    // hero heading, so a markdown "# " here becomes an h2
                    // rather than a competing second H1.
                    h1: ({children}) => <h2 data-kte="kt-28067" className="kt-28067 fw-bold mb-3">{children}</h2>,
                    h2: ({children}) => <h2 data-kte="kt-92118" className="kt-92118 fw-bold mb-3">{children}</h2>,
                    h3: ({children}) => <h3 data-kte="kt-38014" className="kt-38014 fw-bold mb-3">{children}</h3>,
                    h4: ({children}) => <h4 data-kte="kt-60365" className="kt-60365 fw-bold mb-3">{children}</h4>,
                    h5: ({children}) => <h5 data-kte="kt-28376" className="kt-28376 fw-bold mb-3">{children}</h5>,
                    h6: ({children}) => <h6 data-kte="kt-56966" className="kt-56966 fw-bold mb-3">{children}</h6>,
                    p: ({children}) => <div data-kte="kt-14143" className="kt-14143 mb-3">{children}</div>,
                    img: ({src, alt}) => (
                      <img 
                        src={src} 
                        alt={alt} 
                        className="img-fluid rounded my-4"
                      />
                    ),
                  }}
                  className="markdown-content"
                >
                  {item.qualities}
                </ReactMarkdown>
              </div>
            );
          }) : null}
        </div>
      </div>
    </section>
  );
};

export default QualitiesSkills;

