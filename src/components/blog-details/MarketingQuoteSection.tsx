'use client';

import Quotes from "@/public/assets/icons/quotes.svg"
const BASE_URL = 'https://cms.kriva.tech';

export default function MarketingQuoteSection({ blogData }: { blogData: any }) {
    return (
        <section data-kte="kt-92025" className="kt-92025 marketing-quote">
            <div data-kte="kt-59661" className="kt-59661 container">
                <div data-kte="kt-52273" className="kt-52273 row">
                    <div data-kte="kt-53520" className="kt-53520 col-md-8 mx-auto">
                        <div data-kte="kt-28169" className="kt-28169 bg-primary-light position-relative m-lg-7 rounded-4 text-center">
                            <Quotes />
                            <blockquote data-kte="kt-65982" className="kt-65982 mt-6 px-lg-0 px-5">
                                {blogData.marketing_quote?.description || 'Default marketing description here.'}
                            </blockquote>
                            <div data-kte="kt-90620" className="kt-90620 d-inline-flex align-items-center mt-5 mb-8">
                                {blogData.marketing_quote?.icon?.[0]?.url ? (
                                    <img 
                                        className="avatar-lg rounded-circle" 
                                        src={`${BASE_URL}${blogData.marketing_quote.icon[0].url}`} 
                                        alt={blogData.marketing_quote.name || 'marketing quote'} 
                                    />
                                ) : (
                                    <img 
                                        className="avatar-lg" 
                                        src="/default-avatar.png" 
                                        alt="default avatar" 
                                    />
                                )}
                                <div data-kte="kt-83920" className="kt-83920 d-flex flex-column">
                                    <h6 data-kte="kt-64777" className="kt-64777 text-white">{blogData.marketing_quote?.name}</h6>
                                    <p data-kte="kt-42579" className="kt-42579 fs-8 text-white">{blogData.marketing_quote?.role}</p>
                                </div>
                            </div>
                            {blogData.marketing_quote?.bg_line?.url && (
                                <img 
                                    className="position-absolute top-0 end-0 z-0" 
                                    src={`${BASE_URL}${blogData.marketing_quote.bg_line.url}`} 
                                    alt="background line" 
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}