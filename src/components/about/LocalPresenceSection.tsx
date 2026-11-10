"use client"

const NEIGHBORHOODS = [
  {
    name: "HITEC City",
    note: "Our office sits directly on HITEC City Main Road — same tech corridor as most of the enterprise and product teams we work with.",
  },
  {
    name: "Madhapur",
    note: "Krishe Sapphire, our home base, is a short drive from most Madhapur startups and studios — in-person kickoffs and demos are easy to arrange.",
  },
  {
    name: "Jubilee Hills",
    note: "We regularly meet founders and product teams based in Jubilee Hills for scoping calls and design reviews.",
  },
  {
    name: "Kondapur",
    note: "Kondapur-based teams are within easy reach for on-site workshops when a project calls for it.",
  },
  {
    name: "Gachibowli",
    note: "Gachibowli's IT corridor overlaps closely with our own — a natural fit for joint engineering syncs.",
  },
];

export default function LocalPresenceSection() {
  return (
    <section
      data-kte="kt-local-presence"
      className="kt-local-presence container-fluid position-relative section-padding"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <span className="tag-spacing fs-7 fw-bold text-linear-2 text-uppercase d-inline-block mb-3">
              Where we work from
            </span>
            <h5 className="fw-regular ds-5 mb-3">
              A Hyderabad studio, built for <span className="fw-bold">local collaboration.</span>
            </h5>
            <p className="fs-5 text-500">
              LasyaAitech is based at Krishe Sapphire on HITEC City Main Road, Madhapur, Hyderabad —
              not a remote-only shop with a mailing address. Founders and product teams across HITEC
              City, Madhapur, Jubilee Hills, Kondapur and Gachibowli can meet us in person for kickoffs,
              demos and design reviews, alongside the clients we serve fully remotely worldwide.
            </p>
          </div>
        </div>
        <div className="row g-4">
          {NEIGHBORHOODS.map((area) => (
            <div key={area.name} className="col-md-6 col-lg-4">
              <div className="bg-neutral-100 rounded-3 p-4 h-100">
                <p className="fw-bold text-900 mb-2">{area.name}</p>
                <p className="text-500 fs-6 mb-0">{area.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
