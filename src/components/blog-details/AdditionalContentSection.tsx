'use client';

export default function AdditionalContentSection({ blogData }: { blogData: any }) {
    return (
        <section data-kte="kt-55917" className="kt-55917 additional-content">
            <div data-kte="kt-98435" className="kt-98435 container">
                <div data-kte="kt-77442" className="kt-77442 row">
                    <div data-kte="kt-65889" className="kt-65889 col-md-8 mx-auto">
                        <h5 data-kte="kt-47207" className="kt-47207 mt-5 mb-3">{blogData.additional_content.title1}</h5>
                        <p>{blogData.additional_content.description1}</p>
                        <h5 data-kte="kt-25710" className="kt-25710 mt-5 mb-3">{blogData.additional_content.title2}</h5>
                        <div data-kte="kt-75570" className="kt-75570 d-flex flex-column flex-lg-row">
                            <p data-kte="kt-68782" className="kt-68782 pe-8 mb-0">{blogData.additional_content.description2}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}