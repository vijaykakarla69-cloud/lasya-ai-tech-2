'use client';

export default function FinalContentSection({ blogData }: { blogData: any }) {
    return (
        <section data-kte="kt-47403" className="kt-47403 final-content">
            <div data-kte="kt-13977" className="kt-13977 container">
                <div data-kte="kt-10419" className="kt-10419 row">
                    <div data-kte="kt-89255" className="kt-89255 col-md-8 mx-auto">
                        <h5 data-kte="kt-21435" className="kt-21435 mt-7 mb-3">{blogData.final_content.title3}</h5>
                        <p>{blogData.final_content.description3}</p>
                        <p>{blogData.final_content.description4}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}