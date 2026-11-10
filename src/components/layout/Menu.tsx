import Link from "next/link"
import { headerMenuDataMaster, headerMenuData } from "@/src/supporting-data/constants" 

export default function Menu() {
	return (
		<>
			<div data-kte="kt-61557" className="kt-61557 d-none d-lg-flex">
				<ul data-kte="kt-92515" className="kt-92515 navbar-nav mx-auto gap-4 align-items-lg-center">
					{headerMenuData.map((item, index) => (
						<li key={index} data-kte="kt-80182" className="kt-80182 nav-item">
							<Link data-kte="kt-90227" className="kt-90227 nav-link fw-bold d-flex align-items-center" href={item.menuLink}>{item.menuName}</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}
