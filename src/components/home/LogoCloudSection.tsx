"use client"
import Link from "next/link"
import BlackRightArrowIcon from "@/public/assets/icons/black-right-arrow.svg"
import DiscoverIcon from "@/public/assets/icons/discover.svg"
export function LogoCloudSection({data}: {data: any}) {

    if (!data) return null;

    const { title, description, button } = data
    const viewPartnersButton = button?.find((btn: any) => btn.variant === 'primary')

    return (
        <>
            <section data-kte="kt-59024" className="kt-59024 section-logo-cloud section-logo-cloud-5 position-relative">
                <div data-kte="kt-85840" className="kt-85840 container-fluid pt-110 pb-110 mt-lg-0 border-top border-bottom">
                    <div data-kte="kt-31106" className="kt-31106 container">
                        <div data-kte="kt-16241" className="kt-16241 row align-items-center">
                            <div data-kte="kt-58136" className="kt-58136 col-lg-3 pb-lg-0 pb-8">
                                <h4 data-kte="kt-58974" className="kt-58974 text-nowrap">{title}</h4>
                                <p data-kte="kt-30920" className="kt-30920 pt-2 pb-4">{description}</p>
                                {viewPartnersButton && (
                                    <Link 
                                        href={viewPartnersButton.link} 
                                        className="shadow-1 btn text-start bg-white d-inline-block text-primary hover-up"
                                    >
                                        {viewPartnersButton.label}
                                        <BlackRightArrowIcon/>
                                    </Link>
                                )}
                            </div>
                            <div data-kte="kt-36153" className="kt-36153 col-lg-9 ps-lg-8">
                                <div data-kte="kt-94000" className="kt-94000 bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                                    <img data-kte="kt-21494" className="kt-21494 filter-invert" src="/assets/imgs/logo-cloud-3/logo-1.svg" alt="Lasya AI Tech" />
                                </div>
                                <div data-kte="kt-77868" className="kt-77868 bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                                    <img src="/assets/imgs/logo-cloud-3/logo-2.svg" alt="Lasya AI Tech" />
                                </div>
                                <div data-kte="kt-80825" className="kt-80825 bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                                    <img src="/assets/imgs/logo-cloud-3/logo-3.svg" alt="Lasya AI Tech" />
                                </div>
                                <div data-kte="kt-72100" className="kt-72100 bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                                    <img src="/assets/imgs/logo-cloud-3/logo-4.svg" alt="Lasya AI Tech" />
                                </div>
                                <div data-kte="kt-67724" className="kt-67724 bg-white py-4 px-4 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                                    <img src="/assets/imgs/logo-cloud-3/logo-5.svg" alt="Lasya AI Tech" />
                                    <DiscoverIcon/>
                                </div>
                                <div data-kte="kt-10050" className="kt-10050 bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                                    <img src="/assets/imgs/logo-cloud-3/logo-6.svg" alt="Lasya AI Tech" />
                                </div>
                                <div data-kte="kt-64058" className="kt-64058 bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                                    <img data-kte="kt-53096" className="kt-53096 filter-invert" src="/assets/imgs/logo-cloud-3/logo-8.svg" alt="Lasya AI Tech" />
                                </div>
                                <div data-kte="kt-21575" className="kt-21575 bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                                    <img data-kte="kt-62873" className="kt-62873 filter-invert" src="/assets/imgs/logo-cloud-3/logo-9.svg" alt="Lasya AI Tech" />
                                </div>
                                <div data-kte="kt-89452" className="kt-89452 bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                                    <img src="/assets/imgs/logo-cloud-3/logo-3.svg" alt="Lasya AI Tech" />
                                </div>
                                <div data-kte="kt-87398" className="kt-87398 bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                                    <img data-kte="kt-28827" className="kt-28827 filter-invert" src="/assets/imgs/logo-cloud-3/logo-13.svg" alt="Lasya AI Tech" />
                                </div>
                                <div data-kte="kt-75350" className="kt-75350 bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                                    <img src="/assets/imgs/logo-cloud-3/logo-11.svg" alt="Lasya AI Tech" />
                                </div>
                                <div data-kte="kt-58359" className="kt-58359 bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                                    <img data-kte="kt-37781" className="kt-37781 filter-invert" src="/assets/imgs/logo-cloud-3/logo-12.svg" alt="Lasya AI Tech" />
                                </div>
                                <div data-kte="kt-72447" className="kt-72447 bg-white py-3 px-3 shadow-1 rounded-2 align-self-center icon-height icon-shape hover-up me-2 mb-2">
                                    <img src="/assets/imgs/logo-cloud-3/logo-7.svg" alt="Lasya AI Tech" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-kte="kt-58970" className="kt-58970 bouncing-blobs-container rounded-4 fix">
                        <div data-kte="kt-62090" className="kt-62090 bouncing-blobs-glass rounded-4" />
                        <div data-kte="kt-61106" className="kt-61106 bouncing-blobs">
                            <div data-kte="kt-60236" className="kt-60236 bouncing-blob bouncing-blob--green" />
                            <div data-kte="kt-71083" className="kt-71083 bouncing-blob bouncing-blob--primary" />
                            <div data-kte="kt-25307" className="kt-25307 bouncing-blob bouncing-blob--infor bouncing-blob--infor-2" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
