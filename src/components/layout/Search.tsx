import Link from 'next/link'
import SearchIcon from "@/public/assets/icons/search.svg"
export default function Search({ isSearch, handleSearch }: any) {
	return (
		<>
			{/* Offcanvas search */}
			<div className={`offcanvas offcanvas-top offcanvasTop h-50 ${isSearch ? 'show' : ''}`} tabIndex={-1}>
				<div data-kte="kt-49630" className="kt-49630 offcanvas-header">
					<button data-kte="kt-58185" className="kt-58185 btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleSearch} />
				</div>
				<div data-kte="kt-83912" className="kt-83912 offcanvas-body">
					<div data-kte="kt-37807" className="kt-37807 container">
						<div data-kte="kt-63187" className="kt-63187 row py-md-5 py-2">
							<div data-kte="kt-99682" className="kt-99682 col-12 col-lg-8 mx-auto">
								<h4 data-kte="kt-87418" className="kt-87418 mb-2 fs-sm-5">What are you looking for?</h4>
								<p data-kte="kt-46191" className="kt-46191 text-500 fs-6 mb-5">Explore our services and discover how we can help you achieve your goals</p>
								<div data-kte="kt-72623" className="kt-72623 input-group" data-aos="zoom-in">
									<input type="text" data-kte="kt-72789" className="kt-72789 form-control ps-5 rounded-start-pill" name="name" placeholder="Enter Your Keywords" />
									<button data-kte="kt-21553" className="kt-21553 btn btn-primary rounded-end-pill">
										<SearchIcon />	
									</button>
								</div>
								<div data-kte="kt-87019" className="kt-87019 d-flex flex-column flex-lg-row mt-5">
									<h6 data-kte="kt-66300" className="kt-66300 d-inline me-2">Suggest:</h6>
									<div data-kte="kt-17694" className="kt-17694 d-flex flex-wrap gap-2">
										<Link href="#">Startup</Link>
										<Link href="#">Agency</Link>
										<Link href="#">Creative</Link>
										<Link href="#">Consulting</Link>
										<Link href="#">IT services</Link>
										<Link href="#">Pricing</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</>
	)
}
