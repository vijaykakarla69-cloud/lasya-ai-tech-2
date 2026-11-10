"use client"

export default function Icon({ data }: any) {
    if (!data || !data.icons) {
        return null;
    }

    return (
        <section data-kte="kt-30655" className="kt-30655 py-5" style={{ background: 'transparent' }}>
            <div data-kte="kt-51854" className="kt-51854 container">
                <div data-kte="kt-77577" className="kt-77577 row mb-5">
                    <div data-kte="kt-37403" className="kt-37403 col-12">
                        <h2 data-kte="kt-48447" className="kt-48447 text-start fw-bolder text-uppercase position-relative" 
                            style={{ 
                                fontSize: '2.5rem', 
                                letterSpacing: '0.05em',
                                color: '#8B7BF7'
                            }}>
                            {data.input_title}
                        </h2>
                    </div>
                </div>
                <div data-kte="kt-70241" className="kt-70241 row position-relative">
                    <div data-kte="kt-41580" className="kt-41580 col-12">
                        <div data-kte="kt-40910" className="kt-40910 d-flex flex-wrap align-items-start justify-content-center gap-4 py-5" 
                             style={{ 
                                borderTop: '2px dotted #8B7BF7', 
                                borderBottom: '2px dotted #8B7BF7'
                             }}>
                            {data.icons.map((item: any) => (
                                <div key={item.id} 
                                     className="text-center transform-on-hover" 
                                     style={{ 
                                        flex: '0 0 auto',
                                        width: '150px',
                                        margin: '10px',
                                        transition: 'all 0.3s ease'
                                     }}>
                                    <div data-kte="kt-81556" className="kt-81556 mb-4 d-flex align-items-center justify-content-center rounded-circle" 
                                         style={{ 
                                            width: '90px', 
                                            height: '90px', 
                                            margin: '0 auto', 
                                            backgroundColor: '#8B7BF7',
                                            boxShadow: '0 8px 20px rgba(139, 123, 247, 0.2)',
                                            transition: 'all 0.3s ease'
                                         }}>
                                        <img 
                                            src={item.icon[0].url} 
                                            alt={item.icon_name}
                                            style={{ 
                                                width: '50px', 
                                                height: '50px', 
                                                objectFit: 'contain',
                                                filter: item.id === 1 ? 'brightness(0) invert(1) contrast(200%)' : 'brightness(0) invert(1)'
                                            }}
                                        />
                                    </div>
                                    <p data-kte="kt-63213" className="kt-63213 mb-0 text-uppercase fw-bold" 
                                       style={{ 
                                        fontSize: '0.85rem', 
                                        letterSpacing: '0.05em',
                                        color: '#333',
                                        lineHeight: '1.4'
                                       }}>
                                        {item.icon_name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div data-kte="kt-93150" className="kt-93150 row mt-5">
                    <div data-kte="kt-17100" className="kt-17100 col-12 text-end">
                        <h2 data-kte="kt-12065" className="kt-12065 fw-bolder text-uppercase mb-4" 
                            style={{ 
                                fontSize: '2.5rem', 
                                letterSpacing: '0.05em',
                                color: '#8B7BF7'
                            }}>
                            {data.result_title}
                        </h2>
                    </div>
                    <div data-kte="kt-26123" className="kt-26123 col-12">
                        <p data-kte="kt-54082" className="kt-54082 fs-5 text-900 fw-bold text-center mx-auto" 
                           style={{ 
                            maxWidth: '900px',
                            color: '#555'
                           }}>
                            {data.description}
                        </p>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .transform-on-hover:hover {
                    transform: translateY(-5px);
                }
                .transform-on-hover:hover .rounded-circle {
                    transform: scale(1.05);
                    box-shadow: 0 12px 25px rgba(139, 123, 247, 0.3);
                }
            `}</style>
        </section>
    )
}