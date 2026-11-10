"use client"

export default function Functionality({ data }: any) {
    if (!data) {
        return null;
    }

    // Predefined set of icons that will be used for all case studies
    const predefinedIcons = [
        '/assets/imgs/casestudies/functionality/icon_1_b181034d73.svg',
        '/assets/imgs/casestudies/functionality/investment_management_4765457496.svg',
        '/assets/imgs/casestudies/functionality/investment_monitoring_851fe36855.svg',
        '/assets/imgs/casestudies/functionality/portfolio_analysis_e3a1210b1f.svg',
        '/assets/imgs/casestudies/functionality/analysis_white_ae82aa9289.svg',
        '/assets/imgs/casestudies/functionality/funds_withdrawal_e48c9614c7.svg',
        '/assets/imgs/casestudies/functionality/ledger_24b24760ba.svg',
        '/assets/imgs/casestudies/functionality/services_Iphone_white_77f8d144d5.svg',
        '/assets/imgs/casestudies/functionality/money_transfer_white_d65b352602.svg',
        '/assets/imgs/casestudies/functionality/group_chat_eb717790f4.svg',
        '/assets/imgs/casestudies/functionality/credit_Cards_1_dba9ed85db.svg',
        '/assets/imgs/casestudies/functionality/games_6d3f7b479f.svg',
        '/assets/imgs/casestudies/functionality/ic_support_white_2_dbaf9a5b82.svg',
        '/assets/imgs/casestudies/functionality/gearsix_1_68963870bd.svg',
        '/assets/imgs/casestudies/functionality/horoscope_bebe7dadb7.svg',
        '/assets/imgs/casestudies/functionality/clock_Wise_white_3_be8c786f63.svg'
    ];

    // Function to get icon for a specific index (cycles through predefined icons)
    const getIconForIndex = (index: number) => {
        return predefinedIcons[index % predefinedIcons.length];
    };

    return (
        <section data-kte="kt-20973" className="kt-20973 section-feature-11 border-bottom">
            <div data-kte="kt-62023" className="kt-62023 container-fluid position-relative section-padding">
                <div data-kte="kt-81808" className="kt-81808 container">
                    <div data-kte="kt-19203" className="kt-19203 text-center mb-5">
                        <div data-kte="kt-66572" className="kt-66572 d-flex align-items-center justify-content-center bg-primary-soft border border-2 border-white d-inline-flex rounded-pill px-4 py-2" data-aos="zoom-in" data-aos-delay={100}>
                            <img src="/assets/imgs/features-1/dots.png" alt="Lasya AI Tech" />
                            <span data-kte="kt-69869" className="kt-69869 tag-spacing fs-7 fw-bold text-linear-2 ms-2 text-uppercase">Our Features</span>
                        </div>
                        <h5 data-kte="kt-23991" className="kt-23991 ds-5 mt-2">{data.title}</h5>
                    </div>
                    
                    <div data-kte="kt-50477" className="kt-50477 row">
                        <div data-kte="kt-16378" className="kt-16378 col-lg-8">
                            <div data-kte="kt-87291" className="kt-87291 row g-4">
                                {data.functions.map((func: any, index: number) => {
                                    // Get predefined icon based on index (cycles through available icons)
                                    const iconUrl = getIconForIndex(index);
                                    console.log(`Functionality ${func.title} (index ${index}):`, iconUrl);
                                    
                                    return (
                                        <div key={func.id} data-kte="kt-60053" className="kt-60053 col-md-4">
                                            <div data-kte="kt-89268" className="kt-89268 text-center h-100 p-4">
                                                <div data-kte="kt-36823" className="kt-36823 bg-primary-soft icon-flip position-relative icon-shape icon-xl rounded-3 mx-auto mb-3" style={{ width: '200px', height: '200px' }}>
                                                    <div data-kte="kt-75564" className="kt-75564 icon d-flex align-items-center justify-content-center h-100">
                                                        <img src={iconUrl} alt={func.title} data-kte="kt-23981" className="kt-23981 w-75" style={{ filter: 'brightness(0)' }} />
                                                    </div>
                                                </div>
                                                <h6 data-kte="kt-65065" className="kt-65065 mb-2">{func.title}</h6>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div data-kte="kt-58653" className="kt-58653 col-lg-4">
                            <div data-kte="kt-10138" className="kt-10138 zoom-img rounded-4 h-100">
                                <img src="/assets/imgs/features-11/img-1.png" alt="Lasya AI Tech" data-kte="kt-46067" className="kt-46067 w-100 h-100 object-fit-cover rounded-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}