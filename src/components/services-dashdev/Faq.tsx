"use client"
import { useState } from "react";
import OrangeStar from "@/public/assets/icons/orange-star.svg"
import DownArrow from "@/public/assets/icons/down-arrow.svg"
export default function Faq(){
    const [activeItem, setActiveItem] = useState<number>(0)

	const handleActiveItem = (index: number) => {
		setActiveItem(activeItem === index ? 0 : index)
	}
    return(
<section>
<div data-kte="kt-57044" className="kt-57044 container-fluid position-relative section-padding">
    <div data-kte="kt-86046" className="kt-86046 container">
        <div data-kte="kt-57236" className="kt-57236 row align-items-center">
            <div data-kte="kt-87791" className="kt-87791 col-lg-6 text-lg-start text-center">
                <div data-kte="kt-73897" className="kt-73897 position-relative z-1 d-inline-block mb-lg-0 mb-8">
                    <img data-kte="kt-77359" className="kt-77359 rounded-4 position-relative z-1" src="/assets/imgs/cta-5/img-1.png" alt="Lasya AI Tech" />
                    <div data-kte="kt-85622" className="kt-85622 position-absolute bottom-0 start-md-100 start-0 translate-middle-md-x mb-md-8 backdrop-filter rounded-4 px-7 py-4 text-center z-1">
                        <p data-kte="kt-16137" className="kt-16137 pt-2">Loved by over 4k <br /> happy clients</p>
                        <div data-kte="kt-90727" className="kt-90727 d-flex align-items-center justify-content-center py-4">
                            <img src="/assets/imgs/features-3/avatar-1.png" alt="Lasya AI Tech" />
                            <img data-kte="kt-34805" className="kt-34805 avt-hero z-1" src="/assets/imgs/features-3/avatar-2.png" alt="Lasya AI Tech" />
                            <img data-kte="kt-68550" className="kt-68550 avt-hero z-0" src=" assets/imgs/features-3/avatar-3.png" alt="Lasya AI Tech" />
                        </div>
                        <div data-kte="kt-37725" className="kt-37725 d-flex align-items-center justify-content-center">
                         <OrangeStar />
                          <OrangeStar />
                          <OrangeStar />
                          <OrangeStar />
                          <OrangeStar />
                        </div>
                    </div>
                    <div data-kte="kt-24218" className="kt-24218 position-absolute top-0 start-0 translate-middle z-0 pt-5">
                        <img data-kte="kt-59250" className="kt-59250 alltuchtopdown" src="/assets/imgs/cta-4/vector.svg" alt="Lasya AI Tech" />
                    </div>
                </div>
            </div>
            <div data-kte="kt-93864" className="kt-93864 col-lg-6 mt-lg-0 mt-5">
                <h5 data-kte="kt-66719" className="kt-66719 ds-5">We Provide Best IT Services For Your Need
                </h5>
                <p data-kte="kt-71614" className="kt-71614 fs-5 my-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                <div data-kte="kt-20465" className="kt-20465 accordion">
                    <div data-kte="kt-51017" className="kt-51017 px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
                        <div data-kte="kt-45881" className="kt-45881 px-0 card-header border-0 bg-gradient-1">
                            <a className={`${activeItem} == 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(1)} data-bs-toggle="collapse">
                                <span data-kte="kt-69081" className="kt-69081 icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">1</span>
                                <h6 data-kte="kt-22453" className="kt-22453 m-0">What is product development in fintech?</h6>
                                <span data-kte="kt-40855" className="kt-40855 ms-auto arrow me-2">
                                    <DownArrow />
                                </span>
                            </a>
                        </div>
                        <div id="collapseOne" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
                            <p data-kte="kt-28183" className="kt-28183 px-0 card-body fs-6 text-600">
                                Product development in fintech refers to the tailored process of designing, creating, and implementing software products such as mobile applications specifically for a financial organization. This process is guided by the unique requirements of the client, ensuring the product meets the specific needs of their target audience and aligns with market expectations.
                            </p>
                        </div>
                    </div>
                    <div data-kte="kt-85288" className="kt-85288 px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
                        <div data-kte="kt-82175" className="kt-82175 px-0 card-header border-0 bg-gradient-1">
                            <a className={`${activeItem} == 2 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(2)} data-bs-toggle="collapse">
                                <span data-kte="kt-65013" className="kt-65013 icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">2</span>
                                <h6 data-kte="kt-73004" className="kt-73004 m-0">How do you create a fintech product?</h6>
                                <span data-kte="kt-58130" className="kt-58130 ms-auto arrow me-2">
                                  <DownArrow />
                                </span>
                            </a>
                        </div>
                        <div id="collapseTwo" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
                            <p data-kte="kt-58836" className="kt-58836 px-0 card-body fs-6 text-600">
                                During a full-cycle fintech product development, we conduct thorough market research, identify user needs, create a secure and user-friendly design, run development with advanced financial technology, and perform comprehensive testing for functionality and security.
                            </p>
                        </div>
                    </div>
                    <div data-kte="kt-88328" className="kt-88328 px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
                        <div data-kte="kt-57453" className="kt-57453 px-0 card-header border-0 bg-gradient-1">
                            <a className={`${activeItem} == 3 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(3)} data-bs-toggle="collapse">
                                <span data-kte="kt-79922" className="kt-79922 icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">3</span>
                                <h6 data-kte="kt-23626" className="kt-23626 m-0">What are the 5 stages of product development?</h6>
                                <span data-kte="kt-16268" className="kt-16268 ms-auto arrow me-2">
                                  <DownArrow />
                                </span>
                            </a>
                        </div>
                        <div id="collapseThree" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
                            <p data-kte="kt-59292" className="kt-59292 px-0 card-body fs-6 text-600">
                                Conceptualization, where ideas are generated and assessed, market research for understanding customer needs and market potential, design and development, where the product is created, testing, to ensure quality and compliance, and launch and marketing, to introduce the product to the market.
                            </p>
                        </div>
                    </div>
                    <div data-kte="kt-59966" className="kt-59966 px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
                        <div data-kte="kt-63708" className="kt-63708 px-0 card-header border-0 bg-gradient-1">
                            <a className={`${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(4)} data-bs-toggle="collapse">
                                <span data-kte="kt-81894" className="kt-81894 icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">4</span>
                                <h6 data-kte="kt-98245" className="kt-98245 m-0">What is the cost of product development with LasyaAiTech?</h6>
                                <span data-kte="kt-39884" className="kt-39884 ms-auto arrow me-2">
                                 <DownArrow />
                                </span>
                            </a>
                        </div>
                        <div id="collapsefour" className={activeItem == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
                            <p data-kte="kt-45974" className="kt-45974 px-0 card-body fs-6 text-600">
                                The cost of product development with LasyaAiTech is variable and depends on your business priorities, project timeline, type of product, its market uniqueness and the level of innovativeness, infrastructure complexity, and specific technology and integration needs. You can request an approximate estimate by contacting us with your project details.
                            </p>
                        </div>
                    </div>
                    <div data-kte="kt-48723" className="kt-48723 px-0 card p-3 border-0 border-bottom bg-transparent rounded-0">
                        <div data-kte="kt-19010" className="kt-19010 px-0 card-header border-0 bg-gradient-1">
                            <a className={`${activeItem} == 5 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(5)} data-bs-toggle="collapse">
                                <span data-kte="kt-38671" className="kt-38671 icon-shape icon-xs fs-7 rounded-circle d-none d-md-block me-3 bg-primary text-white">5</span>
                                <h6 data-kte="kt-52838" className="kt-52838 m-0">Why do companies need product development?</h6>
                                <span data-kte="kt-50964" className="kt-50964 ms-auto arrow me-2">
                                <DownArrow />
                                </span>
                            </a>
                        </div>
                        <div id="collapseFive" className={activeItem == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
                            <p data-kte="kt-60707" className="kt-60707 px-0 card-body fs-6 text-600">
                                Businesses need product development services for their existing solutions or for bringing to life a brand-new idea to stay competitive, meet changing customer needs, enhance reputation and customer loyalty, and capitalize on new opportunities
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>
    )
}