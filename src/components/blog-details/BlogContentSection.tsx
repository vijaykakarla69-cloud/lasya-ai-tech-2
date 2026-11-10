'use client';

export default function BlogContentSection({ blogData }: { blogData: any }) {
    const blogContent = blogData.blog_content?.content || [];
    
    let foundInfluencer = false;
    const beforeImagesContent: typeof blogContent = [];
    const afterImagesContent: typeof blogContent = [];

    // Separate content based on whether we've found the Influencer Marketing section
    blogContent.forEach((item: any) => {
        if (!foundInfluencer && item.type === "paragraph" && 
            item.children?.[0]?.text && 
            item.children[0].text.includes("Influencer Marketing")) {
            foundInfluencer = true;
        }
        
        if (foundInfluencer) {
            afterImagesContent.push(item);
        } else {
            beforeImagesContent.push(item);
        }
    });

    return (
        <section data-kte="kt-16866" className="kt-16866 blog-content">
            <div data-kte="kt-88954" className="kt-88954 container">
                <div data-kte="kt-85208" className="kt-85208 row">
                    <div data-kte="kt-49366" className="kt-49366 col-md-8 mx-auto">
                        {/* Content before images */}
                        {beforeImagesContent.map((item: any, index: number) => {
                            if(item.type === "heading"){
                                return (
                                    <h2 key={index} data-kte="kt-47215" className="kt-47215 mb-3">{item.children[0].text}</h2>
                                );
                            }
                            if (item.type === "paragraph" && item.children) {
                                return (
                                    <p key={index} data-kte="kt-30545" className="kt-30545 mb-3">
                                        {item.children.map((child: any, childIndex: number) => {
                                            if (child.bold) {
                                                return <strong key={childIndex}>{child.text}</strong>;
                                            }
                                            return child.text;
                                        })}
                                    </p>
                                );
                            }
                            if (item.type === "image" && item.image) {
                                if (index === 0) {
                                    return (
                                        <img 
                                            key={index} 
                                            className="rounded-4 w-100" 
                                            src={item.image.url} 
                                            alt={item.image.alternativeText || ''} 
                                        />
                                    );
                                }
                            }
                            return null;
                        })}

                        {/* Images grid */}
                        <div data-kte="kt-52361" className="kt-52361 row g-0 mt-0">
                            {blogContent.map((item: any, index: number) => {
                                if (item.type === "image" && item.image && index !== 0) {
                                    return (
                                        <div data-kte="kt-90351" className="kt-90351 col-6 p-0" key={index}>
                                            <img 
                                                className="rounded-4 w-100 h-100"
                                                style={{ 
                                                    objectFit: 'cover',
                                                    minHeight: '400px',
                                                    padding: '2px'
                                                }}
                                                src={item.image.url} 
                                                alt={item.image.alternativeText || ''} 
                                            />
                                        </div>
                                    );
                                }
                                return null;
                            })}
                        </div>

                        {/* Content after images */}
                        {afterImagesContent.map((item: any, index: number) => {
                            if(item.type === "heading"){
                                return (
                                    <h2 key={`after-${index}`} data-kte="kt-45320" className="kt-45320 mb-3">{item.children[0].text}</h2>
                                );
                            }
                            if (item.type === "paragraph" && item.children) {
                                return (
                                    <p key={`after-${index}`} data-kte="kt-85267" className="kt-85267 mb-3">
                                        {item.children.map((child: any, childIndex: number) => {
                                            if (child.bold) {
                                                return <strong key={childIndex}>{child.text}</strong>;
                                            }
                                            return child.text;
                                        })}
                                    </p>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}