"use client"



export default function Hero({ data }:any) {

    if (!data) {
        return (
            <section data-kte="kt-19041" className="kt-19041 section-contact-4 bg-4 section-padding">
                <div data-kte="kt-22236" className="kt-22236 container">
                    <div data-kte="kt-64567" className="kt-64567 row">
                        <div data-kte="kt-54499" className="kt-54499 col-lg-12 text-center">
                            <p>Loading...</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (!data.data || data.data.length === 0) {
        return null;
    }

    if (!data.data[0] || !data.data[0].hero) {
        return null;
    }
    
    const hero = data.data[0].hero;
    
    // Function to get the correct image URL
    const getImageUrl = (url: string) => {
        if (!url) return '';
        
        // Fix for Pi-1 case study images that have incorrect uploads path
        if (url.includes('Pi_1_award_winning_case_study_d967049abe.webp')) {
            return '/assets/imgs/casestudies/hero/Pi_1_award_winning_case_study_d967049abe.webp';
        }
        
        // If URL starts with public/, remove the public prefix
        if (url.startsWith('public/')) {
            return url.replace('public/', '/');
        }
        
        // If URL starts with /uploads/, it needs BASE_URL prefix
        
        // For any other case, return as is
        return url;
    };
    
    return (
        <section data-kte="kt-27063" className="kt-27063 section-contact-4 bg-4 section-padding">
            <div data-kte="kt-49922" className="kt-49922 container">
                <div data-kte="kt-58793" className="kt-58793 row">
                    <div data-kte="kt-54679" className="kt-54679 col-lg-6">
                        <div data-kte="kt-28524" className="kt-28524 pe-lg-8 me-lg-auto mb-5 mb-lg-0">
                            <h6 data-kte="kt-12974" className="kt-12974 text-primary">{hero.title}</h6>
                            <h1 data-kte="kt-22357" className="kt-22357 ds-3">{hero.subtitle}</h1>
                            <p data-kte="kt-29102" className="kt-29102 fs-5">{hero.description}</p>
                        </div>
                    </div>
                    <div data-kte="kt-68632" className="kt-68632 col-lg-6">
                        {hero.image && hero.image[0] && (
                            <div data-kte="kt-56799" className="kt-56799">
                                <img 
                                    className="rounded-4 w-100" 
                                    src={getImageUrl(hero.image[0].url)}
                                    alt={hero.image[0].alternativeText || hero.title} 
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}