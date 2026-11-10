"use client"

import { useState } from "react";
import DownArrowIcon from "@/public/assets/icons/down-arrow.svg"

export default function FaqsSection({data}: any) {
    const [activeItem, setActiveItem] = useState(0);

    const handleActiveItem = (index: number) => {
        setActiveItem(index);
    };

    return (
        <section data-kte="kt-51781" className="kt-51781 section-faqs-2 section-padding bg-4 position-relative">
					<div data-kte="kt-34435" className="kt-34435 container position-relative z-2">
						<div data-kte="kt-68468" className="kt-68468 text-center mb-8">
							<h3 data-kte="kt-24164" className="kt-24164 ds-3 my-3 fw-bold">{data?.title}</h3>
						</div>
						<div data-kte="kt-49597" className="kt-49597 row align-items-center position-relative z-1">
							<div data-kte="kt-37304" className="kt-37304 col-lg-6">
								<div data-kte="kt-19613" className="kt-19613 accordion">
									<div data-kte="kt-96987" className="kt-96987 mb-3 card p-3 border bg-white rounded-3">
										<div data-kte="kt-22516" className="kt-22516 px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 1 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(1)} data-bs-toggle="collapse" >
												<h6 data-kte="kt-91693" className="kt-91693 m-0">{data?.faq_list[0]?.question}</h6>
												<span data-kte="kt-19421" className="kt-19421 ms-auto arrow me-2">
													<DownArrowIcon />
												</span>
											</a>
										</div>
											<div id="collapse01" className={activeItem == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p data-kte="kt-22356" className="kt-22356 ps-0 card-body">
												{data?.faq_list[0]?.answer}
											</p>
										</div>
									</div>
									<div data-kte="kt-93167" className="kt-93167 mb-3 card p-3 border bg-white rounded-3">
										<div data-kte="kt-59949" className="kt-59949 px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 2 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(2)} data-bs-toggle="collapse" >
												<h6 data-kte="kt-76402" className="kt-76402 m-0">{data?.faq_list[1]?.question}</h6>	
												<span data-kte="kt-61069" className="kt-61069 ms-auto arrow me-2">
													<DownArrowIcon />
												</span>
											</a>
										</div>
										<div id="collapse02" className={activeItem == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p data-kte="kt-42536" className="kt-42536 ps-0 card-body">
												{data?.faq_list[1]?.answer}
											</p>	
										</div>
									</div>
									<div data-kte="kt-33559" className="kt-33559 mb-3 card p-3 border bg-white rounded-3">
										<div data-kte="kt-66040" className="kt-66040 px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 3 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(3)} data-bs-toggle="collapse">
												<h6 data-kte="kt-75937" className="kt-75937 m-0">{data?.faq_list[2]?.question}</h6>
												<span data-kte="kt-54655" className="kt-54655 ms-auto arrow me-2">
													<DownArrowIcon />
												</span>
											</a>
										</div>
										<div id="collapse03" className={activeItem == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p data-kte="kt-49901" className="kt-49901 ps-0 card-body">
												{data?.faq_list[2]?.answer}
											</p>
										</div>
									</div>
									<div data-kte="kt-59001" className="kt-59001 mb-3 card p-3 border bg-white rounded-3">
										<div data-kte="kt-71020" className="kt-71020 px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 4 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(4)} data-bs-toggle="collapse" >
												<h6 data-kte="kt-77477" className="kt-77477 m-0">{data?.faq_list[3]?.question}</h6>
												<span data-kte="kt-18608" className="kt-18608 ms-auto arrow me-2">
													<DownArrowIcon />
												</span>
											</a>
										</div>
										<div id="collapse04" className={activeItem == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p data-kte="kt-22193" className="kt-22193 ps-0 card-body">
												{data?.faq_list[3]?.answer}
											</p>
										</div>
									</div>
									<div data-kte="kt-58144" className="kt-58144 mb-3 card p-3 border bg-white rounded-3">
										<div data-kte="kt-41090" className="kt-41090 px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 5 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(5)} data-bs-toggle="collapse" >
												<h6 data-kte="kt-17842" className="kt-17842 m-0">{data?.faq_list[4]?.question}</h6>
												<span data-kte="kt-77525" className="kt-77525 ms-auto arrow me-2">
													<DownArrowIcon />
												</span>
											</a>
										</div>
										<div id="collapse05" className={activeItem == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p data-kte="kt-32493" className="kt-32493 ps-0 card-body">
												{data?.faq_list[4]?.answer}
											</p>
										</div>	
									</div>
								</div>
							</div>
							<div data-kte="kt-10928" className="kt-10928 col-lg-6 mt-lg-0 mt-2">
								<div data-kte="kt-94310" className="kt-94310 accordion">
									<div data-kte="kt-96333" className="kt-96333 mb-3 card p-3 border bg-white rounded-3">
										<div data-kte="kt-86643" className="kt-86643 px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 6 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(6)} data-bs-toggle="collapse" >
												<h6 data-kte="kt-35637" className="kt-35637 m-0">{data?.faq_list[5]?.question}</h6>
												<span data-kte="kt-76607" className="kt-76607 ms-auto arrow me-2">
													<DownArrowIcon />
												</span>
											</a>
										</div>
										<div id="collapse06" className={activeItem == 6 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p data-kte="kt-15110" className="kt-15110 ps-0 card-body">
												{data?.faq_list[5]?.answer}
											</p>
										</div>
									</div>
									<div data-kte="kt-37982" className="kt-37982 mb-3 card p-3 border bg-white rounded-3">
										<div data-kte="kt-35411" className="kt-35411 px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 7 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(7)} data-bs-toggle="collapse" >
												<h6 data-kte="kt-50844" className="kt-50844 m-0">{data?.faq_list[6]?.question}</h6>
												<span data-kte="kt-48932" className="kt-48932 ms-auto arrow me-2">
													<DownArrowIcon />
												</span>
											</a>
										</div>
										<div id="collapse07" className={activeItem == 7 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p data-kte="kt-33201" className="kt-33201 ps-0 card-body">
												{data?.faq_list[6]?.answer}
											</p>
										</div>
									</div>
									<div data-kte="kt-61698" className="kt-61698 mb-3 card p-3 border bg-white rounded-3">
										<div data-kte="kt-50667" className="kt-50667 px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 8 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(8)} data-bs-toggle="collapse">
												<h6 data-kte="kt-90413" className="kt-90413 m-0">{data?.faq_list[7]?.question}</h6>
												<span data-kte="kt-47103" className="kt-47103 ms-auto arrow me-2">
													<DownArrowIcon />
												</span>
											</a>
										</div>
										<div id="collapse08" className={activeItem == 8 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p data-kte="kt-90603" className="kt-90603 ps-0 card-body">
												{data?.faq_list[7]?.answer}
											</p>
										</div>
									</div>
									<div data-kte="kt-80762" className="kt-80762 mb-3 card p-3 border bg-white rounded-3">
										<div data-kte="kt-55992" className="kt-55992 px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 9 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(9)} data-bs-toggle="collapse" >
												<h6 data-kte="kt-32141" className="kt-32141 m-0">{data?.faq_list[8]?.question}</h6>
												<span data-kte="kt-49410" className="kt-49410 ms-auto arrow me-2">
													<DownArrowIcon />
												</span>
											</a>
										</div>
										<div id="collapse09" className={activeItem == 9 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p data-kte="kt-25407" className="kt-25407 ps-0 card-body">
												{data?.faq_list[8]?.answer}
											</p>
										</div>
									</div>
									<div data-kte="kt-24620" className="kt-24620 mb-3 card p-3 border bg-white rounded-3">
										<div data-kte="kt-80806" className="kt-80806 px-0 card-header border-0 bg-gradient-1">
											<a className={` ${activeItem} == 10 ? "accordion-button" : "accordion-button collapsed"} pointer text-900 fw-bold d-flex align-items-center`} onClick={() => handleActiveItem(10)} data-bs-toggle="collapse" >
												<h6 data-kte="kt-51341" className="kt-51341 m-0">{data?.faq_list[9]?.question}</h6>
												<span data-kte="kt-73650" className="kt-73650 ms-auto arrow me-2">
													<DownArrowIcon />
												</span>
											</a>
										</div>
										<div id="collapse10" className={activeItem == 10 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent=".accordion">
											<p data-kte="kt-96303" className="kt-96303 ps-0 card-body">
												{data?.faq_list[9]?.answer}
											</p>
										</div>
									</div>
									
								</div>
							</div>
						</div>
						<div data-kte="kt-76760" className="kt-76760 ellipse-center position-absolute top-50 start-50 translate-middle z-0" />
					</div>
				</section>
    )
}