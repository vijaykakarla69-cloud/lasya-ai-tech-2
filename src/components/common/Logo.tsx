import Link from "next/link"

const Logo = ({ color }: { color?: string }) => {
	return (
		<Link data-kte="kt-60877" className="kt-60877 navbar-brand d-flex main-logo align-items-center" href="/">
      <img src="/assets/imgs/latlogoonly.png" alt="Lasya AI Tech" data-kte="kt-40196" className="kt-40196 logo-icon" />
      {color === "white" && <img src="/assets/imgs/latlogo5white.png" alt="Lasya AI Tech" data-kte="kt-40196" className="kt-40196 logo-icon" />} 
      {color === "black" && <img src="/assets/imgs/latlogo5.png" alt="Lasya AI Tech" data-kte="kt-40196" className="kt-40196 logo-icon" />}	
    </Link>
	)
}

export default Logo