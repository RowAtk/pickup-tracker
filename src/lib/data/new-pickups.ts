// Independent new-vehicle research ranking. Do not merge with existing used rankings.
// Order approved 2026-11-02; buyer information and caveats updated 2026-11-03 without changing its ordering.
// This is a model comparison, not proof that any specific unit is in stock.
export type NewPickup = {
  id: string;
  model: string;
  year: number;
  rank: number;
  priceJmd: number;
  priceBasis: 'dealer-starting' | 'usd-converted' | 'indicative';
  priceNote: string;
  sourceUrl?: string;
  transmission: string;
  drivetrain: string;
  ownership: string;
  appearance: string;
  servicing: string;
  warranty: string;
  watchout: string;
  provisional?: boolean;
  drivingFit?: string;
};
export const newPickupWeights = [
  { label: 'Long-term reliability', weight: 30 },
  { label: 'Appearance', weight: 25 },
  { label: 'Purchase price / value', weight: 25 },
  { label: 'Jamaican servicing & parts', weight: 12 },
  { label: 'Warranty & service benefits', weight: 8 }
] as const;
export const newPickups: NewPickup[] = [
  {
    id:'triton-new-2027', model:'Mitsubishi Triton / L200', year:2027, rank:1,
    priceJmd:8350000, priceBasis:'dealer-starting',
    priceNote:'J$8.35M is the model starting price, NOT a confirmed 4WD automatic quote. Position provisional pending trim-specific written quote.',
    sourceUrl:'https://mitsubishi-motors.com.jm/', transmission:'Confirm automatic trim', drivetrain:'Confirm 4WD trim',
    ownership:'Established L200 heritage with a substantial local dealer/service network.',
    appearance:'Modern, aggressive front end and balanced proportions.',
    servicing:"Mitsubishi / Stewart's service and parts in Jamaica.",
    warranty:'Confirm Triton-specific written warranty and service terms; dealer webpages have shown conflicting terms.',
    watchout:'Price of the specific automatic 4WD trim could exceed this figure substantially.', provisional:true
  },
  {
    id:'hilux-24-new', model:'Toyota Hilux (2027 new generation; entry trim)', year:2027, rank:2,
    priceJmd:9900000, priceBasis:'indicative',
    priceNote:'J$9.9M STARTING price reported by buyer from Toyota Jamaica on 2026-11-03; not independently reproduced in the publicly indexed dealer page. Actual 4WD automatic price may be higher. Replaces the outdated J$8.49M planning figure.',
    sourceUrl:'https://toyotajamaica.com/vehicle/hilux-pickup/overview/',
    transmission:'Automatic (quote pending)', drivetrain:'4WD (quote pending)',
    ownership:'Hilux lineage has a strong durability and parts reputation; this newly revised generation does not yet have a decade of its own reliability data.',
    appearance:'Sharper ninth-generation shape; especially appealing in darker colours.',
    servicing:'Toyota Jamaica dealer workshops plus a broad independent repair ecosystem.',
    warranty:'Dealer warranty terms need written confirmation for selected variant.',
    watchout:'Starting price and trim are unverified for the exact 2027 diesel 4WD automatic; request a dated full-duty on-road quote. Do not confuse older-generation prices with 2027 models.', drivingFit:'The new-generation suspension and steering may improve daily comfort, but the Jamaican variant should be test-driven.', provisional:true
  },
  {
    id:'rely-r8-new', model:'Rely R8 2.3 Turbo Diesel', year:2027, rank:3,
    priceJmd:6999000, priceBasis:'dealer-starting',
    priceNote:'J$6.999M is shown on the current main Jamaican retail page; a separate dealer spec-sheet page shows J$6.799M, so obtain a written JMD quote. J$6.65M concession price is NOT assumed.',
    sourceUrl:'https://relyja.com/', transmission:'8-speed automatic', drivetrain:'4WD with low range',
    ownership:'High equipment-per-dollar value, but 8–12-year reliability and real daily-driver comfort remain unproven. Buyer is experienced with LHD, so steering side alone is not a rejection.',
    appearance:'Sleek but muscular; especially compelling with dark/green paint and stock accessories.',
    servicing:'Tyre Warehouse Automotive, Kingston and Montego Bay.',
    warranty:'Advertised 5 years / 200,000 km; 3 years / 42,500 km servicing.',
    watchout:'Reported harsh/bouncy ride is anecdotal pending a local test drive. Rumoured 2027 suspension changes have NOT been factory/dealer-confirmed. Jamaican stock steering position also needs VIN/photo confirmation; international R8s appear LHD. Ask for suspension build revision, warranty exclusions, parts and after-sales support in writing.', drivingFit:'Provisional #3, not a purchase endorsement: LHD acceptable to this buyer if the truck drives excellently. Test ride over rough Kingston roads, speed bumps, an incline and at highway speed; check steering, gearbox and suspension rebound.', provisional:true
  },
  {
    id:'hilux-28-new', model:'Toyota Hilux 2.8 4WD Automatic (previous generation)', year:2026, rank:4,
    priceJmd:9370000, priceBasis:'indicative',
    priceNote:'Older-generation 2026 2.8L planning estimate only (NOT the newly quoted 2027 Hilux). Previous-generation availability and current quote both unverified.',
    sourceUrl:'https://toyotajamaica.com/vehicle/hilux-pickup/overview/',
    transmission:'Automatic (quote pending)', drivetrain:'4WD (quote pending)',
    ownership:'Strong long-term durability, but the price premium over 2.4L needs justification.',
    appearance:'Rugged Hilux shape, higher trims often look better.',
    servicing:'Toyota Jamaica and extensive aftermarket parts infrastructure.',
    warranty:'Confirm local trim-specific manufacturer warranty.',
    watchout:'Do NOT mistake this outgoing-generation 2026 pricing estimate for the 2027 Hilux. Verify that 2026 stock still exists, price, trim and diesel emissions specification.', provisional:true
  },
  {
    id:'dmax-30-new', model:'Isuzu D-Max 3.0', year:2026, rank:5,
    priceJmd:9100000, priceBasis:'indicative',
    priceNote:'Approximation based on a Jamaican published reference, not a current 4WD automatic dealer quote.',
    transmission:'Verify automatic', drivetrain:'Verify 4x4',
    ownership:'Highly regarded diesel pickup platform; less uncertainty than newly introduced competitors.',
    appearance:'Sharp, aggressive modern styling.',
    servicing:'Established Isuzu dealer and independent diesel servicing presence in Jamaica.',
    warranty:'Obtain exact locally applicable warranty and scheduled-service terms.',
    watchout:'Confirm price, trim, dealer and 4WD automatic stock before treating as purchase-ready.', provisional:true
  },
  {
    id:'gwm-pseries-commercial-new', model:'GWM P-Series Commercial', year:2026, rank:6,
    priceJmd:6900000, priceBasis:'dealer-starting',
    priceNote:'Corrected from the earlier J$7.4M estimate: Stewart’s official 2026 starting full-duty listing is J$6.9M. Automatic/4WD configuration not verified.',
    sourceUrl:'https://stewartsautogroup.com/listings/p-series-commercial/',
    transmission:'Confirm exact automatic variant', drivetrain:'Confirm 4WD and low range',
    ownership:'Attractive diesel value with a meaningful local service route; shorter model durability history than Toyota/Isuzu.',
    appearance:'Solid modern styling but less distinctive than the Offroad version.',
    servicing:"Stewart's authorized service and parts.",
    warranty:'Request written applicable warranty and complimentary service terms for this exact trim.',
    watchout:'Published starting price may not cover your desired automatic 4WD specification.', provisional:true
  },
  {
    id:'riddara-rd6-econ-new', model:'Riddara RD6 Econ (electric)', year:2027, rank:7,
    priceJmd:6999000, priceBasis:'dealer-starting',
    priceNote:'Retail price for the advertised Econ trim; confirm included charging equipment.',
    sourceUrl:'https://riddaraja.com/',
    transmission:'Single-speed EV', drivetrain:'4WD (dealer advertised)',
    ownership:'Strong EV torque and reduced routine servicing, but Jamaica-specific battery repair and long-term support are major unknowns.',
    appearance:'Sleek, clean lifestyle-pickup look.',
    servicing:'Tyre Warehouse Automotive; verify high-voltage repair staffing and battery lead times.',
    warranty:'8-year warranty and 3-year service package advertised; request separate whole-vehicle/battery coverage schedule.',
    watchout:'Home charging, high-voltage repair access, warranty exclusions and battery replacement costs.'
  },
  {
    id:'gwm-pseries-offroad-new', model:'GWM P-Series Offroad', year:2026, rank:8,
    priceJmd:9500000, priceBasis:'dealer-starting',
    priceNote:'Stewart’s advertised starting full-duty price.',
    sourceUrl:'https://stewartsautogroup.com/',
    transmission:'Confirm exact automatic configuration', drivetrain:'4WD configuration to verify',
    ownership:'Dealer support and warranty proposition are positive, though less 10-year model history than Japanese alternatives.',
    appearance:'One of the most visually rugged in the group.',
    servicing:"Stewart's authorized service/parts network.",
    warranty:'GWM Jamaica has advertised generous warranty and service packages; confirm applicability to Offroad.',
    watchout:'Strong visual appeal, but cost rises dramatically versus Commercial and Rely.'
  },
  {
    id:'ranger-xl-new', model:'Ford Ranger XL 4x4', year:2026, rank:9,
    priceJmd:7990000, priceBasis:'dealer-starting',
    priceNote:'KIG advertised 4x4 automatic base price; written final quote needed.',
    sourceUrl:'https://kigjamaica.com/2026-ranger-xl/',
    transmission:'6-speed automatic (dealer)', drivetrain:'4WD (dealer)',
    ownership:'Established model with better repair visibility than newest entrants, but diesel/electronic repair complexity.',
    appearance:'Clean and capable, though less dramatic than upper Ranger trims.',
    servicing:'KIG authorized Ford workshop and parts.',
    warranty:'Ford/KIG package advertised for certain local variants; confirm this VIN and term.',
    watchout:'Check exact warranty, servicing, trim equipment and actual stock.'
  },
  {
    id:'foton-g7-new', model:'Foton Tunland G7 4x4 Automatic', year:2026, rank:10,
    priceJmd:7070000, priceBasis:'usd-converted',
    priceNote:'ATL specific new 4WD automatic inventory price US$44,545 × 158.69 JMD/USD ≈ J$7.07M; separate G7 campaign advertises a J$6.195M STARTING price which may be a different variant.',
    sourceUrl:'https://www.atlautomotive.com/inventory/2026-foton-tunland-g7/',
    transmission:'8-speed automatic', drivetrain:'4WD (ATL listing)',
    ownership:'Competitive specification and ATL backing; limited local decade-long model evidence.',
    appearance:'Conventional rugged design.',
    servicing:'ATL Automotive service and parts.',
    warranty:'3 years / 100,000 km advertised.',
    watchout:'Get a JMD on-road quote for the EXACT 4x4 automatic configuration.'
  },
  {
    id:'ranger-xlt-new', model:'Ford Ranger XLT 4x4', year:2026, rank:11,
    priceJmd:9880000, priceBasis:'dealer-starting',
    priceNote:'KIG new XLT advertised price; stock and final specification to confirm.',
    sourceUrl:'https://kigjamaica.com/ranger-xlt/',
    transmission:'6-speed automatic (dealer)', drivetrain:'4WD (dealer)',
    ownership:'Familiar platform and local dealer support, but expensive relative to XL.',
    appearance:'Sportier exterior than XL.',
    servicing:'KIG authorized service and parts.',
    warranty:'Request written trim-specific warranty and service coverage.',
    watchout:'J$1.89M premium over XL; validate equipment differences.'
  },
  {
    id:'ranger-wildtrak-new', model:'Ford Ranger Wildtrak', year:2026, rank:12,
    priceJmd:11520000, priceBasis:'dealer-starting',
    priceNote:'KIG advertised figure; quote exact allocation and equipment.',
    sourceUrl:'https://kigjamaica.com/',
    transmission:'Automatic (confirm gearbox)', drivetrain:'Confirm actual local 4WD trim',
    ownership:'Capable, appealing and locally supported; high purchase and eventual electronic repair costs.',
    appearance:'Among the strongest designs in the ranking.',
    servicing:'KIG authorized Ford network.',
    warranty:'Confirm warranty and service package for local Wildtrak.',
    watchout:'Appearance premium is difficult to justify financially versus Ranger XL, Rely or Hilux.'
  },
  {
    id:'maxus-t60-max-new', model:'MAXUS T60 MAX', year:2026, rank:13,
    priceJmd:7400000, priceBasis:'dealer-starting',
    priceNote:'China Wheels Jamaican list price; confirm stock, trim and 4WD details.',
    sourceUrl:'https://chinawheelsja.com/vehicles/t60-max.html',
    transmission:'ZF 8-speed automatic (dealer)', drivetrain:'4WD/AWD advertised',
    ownership:'Strong specification but corrosion history from older-market T60 vehicles warrants due diligence.',
    appearance:'Much bolder than standard T60.',
    servicing:'China Wheels authorized local MAXUS service; request parts lead-time details.',
    warranty:'Get written Jamaican-market warranty and anti-corrosion coverage.',
    watchout:'Ask about rust protection, paint, chassis coatings and exclusions.'
  },
  {
    id:'foton-v9-new', model:'Foton Tunland V9', year:2026, rank:14,
    priceJmd:9140000, priceBasis:'usd-converted',
    priceNote:'ATL US$57,576 × 158.69 JMD/USD ≈ J$9.14M; JMD actual invoice depends on dealer FX.',
    sourceUrl:'https://www.atlautomotive.com/inventory/2026-foton-tunland-v9/',
    transmission:'8-speed automatic', drivetrain:'4x4 (ATL listing)',
    ownership:'Very striking but its newer 48V diesel-hybrid system has less proven long-term ownership history.',
    appearance:'Huge American-inspired presence; arguably top-three purely on styling.',
    servicing:'ATL Automotive.',
    warranty:'Request V9-specific Jamaican warranty and coverage for 48V components.',
    watchout:'Premium price, new system complexity, and reports of fit/finish niggles in other markets.'
  },
  {
    id:'maxus-t60-auto-new', model:'MAXUS T60 Automatic', year:2026, rank:15,
    priceJmd:5790000, priceBasis:'dealer-starting',
    priceNote:'China Wheels published local list price; confirm on-road total.',
    sourceUrl:'https://chinawheelsja.com/vehicles/t60.html',
    transmission:'8-speed automatic (dealer)', drivetrain:'4WD (dealer)',
    ownership:'Attractive financing value, but underwhelming design and long-term corrosion concerns.',
    appearance:'Practical rather than striking.',
    servicing:'China Wheels dealer service.',
    warranty:'Confirm written warranty, anti-corrosion cover and service plan.',
    watchout:'Inspect corrosion protection and insist on clearly documented warranty coverage.'
  },
  {
    id:'byd-shark-new', model:'BYD Shark 6 PHEV', year:2027, rank:16,
    priceJmd:13353000, priceBasis:'usd-converted',
    priceNote:'ATL currently advertises US$84,143; at 158.69 JMD/USD ≈ J$13.35M, superseding the previous J$12.5M+ planning floor.',
    sourceUrl:'https://www.atlautomotive.com/vehicle_type/pickup/',
    transmission:'Plug-in hybrid automatic', drivetrain:'Confirm local AWD specification',
    ownership:'Advanced PHEV hardware and high price introduce complexity for 10+ year ownership.',
    appearance:'Modern and imposing.',
    servicing:'ATL BYD dealer service; confirm hybrid/battery-trained technicians.',
    warranty:'Get separate battery, PHEV and complete-vehicle warranty schedules.',
    watchout:'High price, long-term repair complexity and charging use case.'
  },
  {
    id:'maxus-terron9-new', model:'MAXUS Terron 9', year:2026, rank:17,
    priceJmd:10000000, priceBasis:'dealer-starting',
    priceNote:'China Wheels J$10M list price.',
    sourceUrl:'https://chinawheelsja.com/',
    transmission:'Automatic (confirm exact trim)', drivetrain:'Confirm 4WD trim',
    ownership:'Powerful newer model, insufficient long-term reliability history.',
    appearance:'Wide, imposing and very modern.',
    servicing:'China Wheels authorized MAXUS service.',
    warranty:'Confirm written local manufacturer and corrosion warranty.',
    watchout:'Expensive for a newer platform with limited durability evidence.'
  },
  {
    id:'kia-tasman-new', model:'Kia Tasman', year:2026, rank:18,
    priceJmd:11730000, priceBasis:'usd-converted',
    priceNote:'ATL US$73,909.09 × 158.69 JMD/USD ≈ J$11.73M; JMD price can fluctuate.',
    sourceUrl:'https://www.atlautomotive.com/inventory/2026-kia-tasman/',
    transmission:'Automatic (dealer)', drivetrain:'Confirm Jamaican 4WD specification',
    ownership:'Strong established manufacturer but a first-generation pickup, with no long-term model history.',
    appearance:'Distinctive and polarizing — lower subjective styling score in this ranking.',
    servicing:'ATL Kia network.',
    warranty:'Confirm Kia Jamaica pickup-specific warranty and servicing.',
    watchout:'High price for a new platform, styling preference and trim uncertainty.'
  }
];
