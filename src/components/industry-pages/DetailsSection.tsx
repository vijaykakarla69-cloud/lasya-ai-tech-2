"use client"
import Link from "next/link";

export default function DetailsSection({data}: any) {
    const getImageUrl = (imageData: any) => {
        // Use image from JSON data if available
        if (imageData && imageData.url) {
            return imageData.url;
        }
        return null;
    };

    return (
        <section data-kte="kt-14663" className="kt-14663 features-10 py-9 bg-primary-light">
            <div data-kte="kt-68753" className="kt-68753 container">
                <div data-kte="kt-87450" className="kt-87450 row">
                    {/* prettier-ignore */}
                    <div data-kte="kt-23834" className="kt-23834 col-lg-3 col-md-6">
                        <div data-kte="kt-59567" className="kt-59567 feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up h-100" style={{ minHeight: '380px' }}>
                            <div data-kte="kt-77188" className="kt-77188 bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                                <div data-kte="kt-19331" className="kt-19331 icon">
                                    {data?.[0]?.image && data[0].image.length > 0 && getImageUrl(data[0].image[0]) ? (
                                        <img src={getImageUrl(data[0].image[0])} alt={data[0].title || "Feature icon"} />
                                    ) : (
                                        <img src="/assets/imgs/features-1/icon-1.svg" alt="Lasya AI Tech" />
                                    )}
                                </div>
                            </div>
                            <div data-kte="kt-54183" className="kt-54183 content-wrapper" style={{ height: 'calc(100% - 100px)', display: 'flex', flexDirection: 'column' }}>
                                <h6 data-kte="kt-47271" className="kt-47271 mb-3">{data?.[0]?.title}</h6>
                                <p data-kte="kt-19291" className="kt-19291 mb-4 flex-grow-1">{data?.[0]?.description}</p>
                            </div>
                            <div data-kte="kt-32457" className="kt-32457 position-absolute end-0 top-0">
                                <img src="/assets/imgs/feature-10/bg-line.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div data-kte="kt-34954" className="kt-34954 col-lg-3 col-md-6">
                        <div data-kte="kt-16860" className="kt-16860 feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up h-100" style={{ minHeight: '380px' }}>
                            <div data-kte="kt-36339" className="kt-36339 bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                                <div data-kte="kt-81611" className="kt-81611 icon">
                                    {data?.[1]?.image && data[1].image.length > 0 && getImageUrl(data[1].image[0]) ? (
                                        <img src={getImageUrl(data[1].image[0])} alt={data[1].title || "Feature icon"} />
                                    ) : (
                                        <img src="/assets/imgs/features-1/icon-2.svg" alt="Lasya AI Tech" />
                                    )}
                                </div>
                            </div>
                            <div data-kte="kt-10638" className="kt-10638 content-wrapper" style={{ height: 'calc(100% - 100px)', display: 'flex', flexDirection: 'column' }}>
                                <h6 data-kte="kt-31986" className="kt-31986 mb-3">{data?.[1]?.title}</h6>
                                <p data-kte="kt-97481" className="kt-97481 mb-4 flex-grow-1">{data?.[1]?.description}</p>
                            </div>
                            <div data-kte="kt-58446" className="kt-58446 position-absolute end-0 top-0">
                                <img src="/assets/imgs/feature-10/bg-line.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div data-kte="kt-28122" className="kt-28122 col-lg-3 col-md-6">
                        <div data-kte="kt-18749" className="kt-18749 feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up h-100" style={{ minHeight: '380px' }}>
                            <div data-kte="kt-23139" className="kt-23139 bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                                <div data-kte="kt-51593" className="kt-51593 icon">
                                    {data?.[2]?.image && data[2].image.length > 0 && getImageUrl(data[2].image[0]) ? (
                                        <img src={getImageUrl(data[2].image[0])} alt={data[2].title || "Feature icon"} />
                                    ) : (
                                        <img src="/assets/imgs/features-1/icon-3.svg" alt="Lasya AI Tech" />
                                    )}
                                </div>
                            </div>
                            <div data-kte="kt-76825" className="kt-76825 content-wrapper" style={{ height: 'calc(100% - 100px)', display: 'flex', flexDirection: 'column' }}>
                                <h6 data-kte="kt-39555" className="kt-39555 mb-3">{data?.[2]?.title}</h6>
                                <p data-kte="kt-55260" className="kt-55260 mb-4 flex-grow-1">{data?.[2]?.description}</p>
                            </div>
                            <div data-kte="kt-89507" className="kt-89507 position-absolute end-0 top-0">
                                <img src="/assets/imgs/feature-10/bg-line.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div data-kte="kt-72562" className="kt-72562 col-lg-3 col-md-6">
                        <div data-kte="kt-92082" className="kt-92082 feature-item mb-5 position-relative mb-lg-0 bg-white p-5 rounded-4 hover-up h-100" style={{ minHeight: '380px' }}>
                            <div data-kte="kt-13399" className="kt-13399 bg-primary-soft icon-flip position-relative icon-shape icon-xxl rounded-3 mb-4">
                                <div data-kte="kt-73080" className="kt-73080 icon">
                                    {data?.[3]?.image && data[3].image.length > 0 && getImageUrl(data[3].image[0]) ? (
                                        <img src={getImageUrl(data[3].image[0])} alt={data[3].title || "Feature icon"} />
                                    ) : (
                                        <img src="/assets/imgs/features-1/icon-4.svg" alt="Lasya AI Tech" />
                                    )}
                                </div>
                            </div>
                            <div data-kte="kt-59177" className="kt-59177 content-wrapper" style={{ height: 'calc(100% - 100px)', display: 'flex', flexDirection: 'column' }}>
                                <h6 data-kte="kt-71516" className="kt-71516 mb-3">{data?.[3]?.title}</h6>
                                <p data-kte="kt-88524" className="kt-88524 mb-4 flex-grow-1">{data?.[3]?.description}</p>
                            </div>
                            <div data-kte="kt-91511" className="kt-91511 position-absolute end-0 top-0">
                                <img src="/assets/imgs/feature-10/bg-line.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}