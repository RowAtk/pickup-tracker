export type VehicleAssessment = {
  checkedAt: string;
  coverage: string;
  verdict: string;
  specifications: { label: string; value: string; basis: string }[];
  sellerClaims: string[];
  photoFindings: string[];
  serviceHistory: string;
  ownershipFit: string;
  comparison: string;
  inspection: string[];
  unknowns: string[];
  sources: { label: string; url: string }[];
  photoSources?: { label: string; url: string }[];
};

export const vehicleAssessments: Record<string, VehicleAssessment> = {
  "ranger-top-2019": {
    "checkedAt": "2026-10-24",
    "coverage": "Original Jacars advert text and all 13 listing photos reviewed. Photos support visible details only; no physical or diagnostic inspection.",
    "verdict": "Retain #1 provisionally. The combination of J$4.49M, low advertised mileage, automatic diesel 4WD and a well-equipped cabin is compelling. It is an inspection priority, not a verified low-risk purchase.",
    "specifications": [
      {
        "label": "Year",
        "value": "2019",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Seats",
        "value": "5",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Color",
        "value": "Gray",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Gearbox",
        "value": "Automatic",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Mileage",
        "value": "51794 km",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Body type",
        "value": "Pickup",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Fuel type",
        "value": "Diesel",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Drivetrain",
        "value": "4WD",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Engine size",
        "value": "3,2L",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Right hand drive",
        "value": "Right",
        "basis": "Advert form; seller-provided"
      }
    ],
    "sellerClaims": [
      "JusDrive advertises 51,794 km, a 3.2L diesel, automatic transmission, 4WD, RHD and five seats at J$4.49M negotiable",
      "Dealer describes it as excellent condition with everything working; those claims have not been independently tested"
    ],
    "photoFindings": [
      "Photos 3–4 and 9 show Wildtrak tailgate branding and Wildtrak-embroidered front seats; record as Wildtrak-badged, with original trim requiring VIN/build confirmation",
      "Photo 7 visibly supports RHD, an automatic shifter, rotary 4WD selector, steering-wheel cruise/audio controls, a large touchscreen and climate-control panel",
      "The cluster in photo 7 is consistent with approximately 51,794 km. A photograph corroborates the displayed reading, not its lifetime accuracy",
      "Exterior photos show alloy wheels, side steps, a sports bar and a FORD-letter grille that appears aftermarket. This does not make it a Raptor",
      "All 13 photos reviewed, including the engine bay. No underside, service invoices or diagnostic report is supplied"
    ],
    "serviceHistory": "No dated service records, accident history, import history or ownership chain are supplied. A clean cabin/engine bay and low displayed mileage do not establish maintenance quality. Seek chronological records and compare mileages.",
    "ownershipFit": "Automatic transmission and diesel torque suit commuting and the climb home; 4WD adds flexibility but tyre condition matters on wet roads. Test cooling and gearbox behaviour on a sustained hill. The seven-year calendar age remains relevant despite the low odometer.",
    "comparison": "J$690,000 more than #5, with 78,315 km less advertised use. It is J$1.21M cheaper than the 2021 Wildtrak (#3), with 6,625 km less, although two model years older. The mileage advantage earns priority only if the history supports it.",
    "inspection": [
      "Verify VIN/build sheet, original market, model year and genuine Wildtrak specification with KIG; ask why the grille was changed",
      "Obtain invoices for engine oil, fuel filters, cooling-system work, transmission and differential/transfer-case servicing; match dates and odometer readings",
      "Independent cold start, diagnostic scan and injector/turbo assessment; pressure-test cooling and check for coolant loss or overheating evidence",
      "Drive cold and hot, including an incline; check shifts, torque-converter behaviour, suspension, brakes and 4WD engagement on a suitable surface",
      "Inspect chassis, repair seams, corrosion, flood signs, underbody damage and tyre age; test A/C, touchscreen/radio, camera, sensors, all keys and warning lamps",
      "Confirm cash price, title/lien clearance, current seller inventory and 2026 loan eligibility before paying for valuation"
    ],
    "unknowns": [
      "Actual service history and accident/repair history",
      "Odometer continuity and authenticity",
      "VIN-confirmed trim and any engine/gearbox changes",
      "Recall/service-campaign completion for this VIN",
      "Mechanical condition and current seller availability"
    ],
    "sources": [
      {
        "label": "Original listing / dealer page",
        "url": "https://www.jacars.net/adv/2523078_ford-ranger-3-2l-2019/"
      }
    ],
    "photoSources": [
      {
        "label": "Listing photo 1",
        "url": "https://cdn2.jacars.net/media/cache/e3/dd/e3ddbec4cf4b23fbade0f5257e423b5f.webp"
      },
      {
        "label": "Listing photo 2",
        "url": "https://cdn2.jacars.net/media/cache/16/6e/166ecdfb3aea7ac00feab41c67df6d8d.webp"
      },
      {
        "label": "Listing photo 3",
        "url": "https://cdn2.jacars.net/media/cache/90/f8/90f8d1087f110aca78ce1e13598284cd.webp"
      },
      {
        "label": "Listing photo 4",
        "url": "https://cdn2.jacars.net/media/cache/bf/7a/bf7a5c304d06b81a4086bc8853680a09.webp"
      },
      {
        "label": "Listing photo 5",
        "url": "https://cdn2.jacars.net/media/cache/03/cc/03cc152de5b25ef63d6c22244cab66bd.webp"
      },
      {
        "label": "Listing photo 6",
        "url": "https://cdn2.jacars.net/media/cache/6b/93/6b93f7a7a4d5b73459b8a452be474f52.webp"
      },
      {
        "label": "Listing photo 7",
        "url": "https://cdn2.jacars.net/media/cache/8c/e0/8ce03bf0a206e0ab0d9a2350eeb283d5.webp"
      },
      {
        "label": "Listing photo 8",
        "url": "https://cdn2.jacars.net/media/cache/b8/b7/b8b7e314b902045b606b118232d4876d.webp"
      },
      {
        "label": "Listing photo 9",
        "url": "https://cdn2.jacars.net/media/cache/01/3b/013bf690e57c4a555891073178612e9b.webp"
      },
      {
        "label": "Listing photo 10",
        "url": "https://cdn2.jacars.net/media/cache/86/87/86870b7deb41d9f7c67aa8ee8ec61a01.webp"
      },
      {
        "label": "Listing photo 11",
        "url": "https://cdn2.jacars.net/media/cache/57/81/57816a8d79d9a0e9933ea2745fcd8d85.webp"
      },
      {
        "label": "Listing photo 12",
        "url": "https://cdn2.jacars.net/media/cache/11/d6/11d67e17bfb201750983415c4f3e25cf.webp"
      },
      {
        "label": "Listing photo 13",
        "url": "https://cdn2.jacars.net/media/cache/e6/4e/e64ef450eb00a53fadccbd5f01b94a70.webp"
      }
    ]
  },
  "frontier-2023": {
    "checkedAt": "2026-10-24",
    "coverage": "Original Jacars advert text and all 11 listing photos reviewed. Photos support visible details only; no physical or diagnostic inspection.",
    "verdict": "Strong near-term alternative to #1: newer automatic diesel 4WD with only a small advertised mileage difference. Keep #2 pending records and inspection.",
    "specifications": [
      {
        "label": "Year",
        "value": "2023",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Seats",
        "value": "5",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Color",
        "value": "Silver",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Gearbox",
        "value": "Automatic",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Mileage",
        "value": "54000 km",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Body type",
        "value": "Pickup",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Fuel type",
        "value": "Diesel",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Drivetrain",
        "value": "4WD",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Engine size",
        "value": "2,5L",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Right hand drive",
        "value": "Right",
        "basis": "Advert form; seller-provided"
      }
    ],
    "sellerClaims": [
      "J$5.5M; 2023, 54,000 km, 2.5L diesel, automatic, 4WD, RHD, silver and five seats",
      "Seller calls it clean and well maintained, without attaching dated service evidence"
    ],
    "photoFindings": [
      "Eleven photos show a double cab, RHD cabin, automatic shifter, cloth seating, alloy wheels and a covered bed",
      "Rear photograph carries XE badging; confirm full trim/4WD specification against VIN rather than assuming premium equipment",
      "A cluster photo and engine-bay photo are present, but the small/blurred cluster image does not independently establish an exact current odometer",
      "Photos show interior and exterior presentation, not chassis condition or absence of previous repairs"
    ],
    "serviceHistory": "No invoices or service book supplied. Well-maintained wording is a claim, not documentation. Ask for dealer history, diesel-system maintenance and transmission-fluid records.",
    "ownershipFit": "Good fit for a daily commute and hills: automatic/RHD, useful diesel torque and a newer calendar year. Cloth seats are not a disadvantage if comfort and running condition are good.",
    "comparison": "J$1.01M above #1 for a vehicle four model years newer and only 2,206 km more advertised mileage. J$300,000 above #4 while showing 49,000 km less; that premium is worth testing against actual histories.",
    "inspection": [
      "VIN-confirm year, 2.5L engine and actual XE equipment/drivetrain",
      "Obtain service and accident/ownership records; cross-check odometer chronology",
      "Cold start and diesel/gearbox diagnostic scan; check cooling, turbo hoses and leaks",
      "Test automatic shifts, rear suspension loaded/unloaded, steering/brakes, 4WD and low range appropriately",
      "Inspect chassis/bed for heavy work, corrosion, crash repairs and flood evidence; test cover security and electronics"
    ],
    "unknowns": [
      "Service documentation and accident history",
      "Original market, exact trim, gear count and emissions equipment",
      "Tyre/brake life, warranty balance and seller-confirmed availability"
    ],
    "sources": [
      {
        "label": "Original listing / dealer page",
        "url": "https://www.jacars.net/adv/2526654_nissan-frontier-2-5l-2023/"
      }
    ],
    "photoSources": [
      {
        "label": "Listing photo 1",
        "url": "https://cdn2.jacars.net/media/cache/19/50/1950a17d67dd61b5dda7f388d2c4400d.webp"
      },
      {
        "label": "Listing photo 2",
        "url": "https://cdn2.jacars.net/media/cache/88/0e/880e0cdae9f8e26f2c2df6f6fac184a1.webp"
      },
      {
        "label": "Listing photo 3",
        "url": "https://cdn2.jacars.net/media/cache/95/b9/95b968337bb53bea50865bf75fa1bc74.webp"
      },
      {
        "label": "Listing photo 4",
        "url": "https://cdn2.jacars.net/media/cache/fc/b9/fcb9f67f99a878122d16ffff47ca9a58.webp"
      },
      {
        "label": "Listing photo 5",
        "url": "https://cdn2.jacars.net/media/cache/52/bc/52bc4de71ff211ad37c87c0e80933660.webp"
      },
      {
        "label": "Listing photo 6",
        "url": "https://cdn2.jacars.net/media/cache/6c/b1/6cb10f7df07cff881120adbd2d60b721.webp"
      },
      {
        "label": "Listing photo 7",
        "url": "https://cdn2.jacars.net/media/cache/3b/e7/3be7c0258bf1f50d84c08f6cf4f4bb95.webp"
      },
      {
        "label": "Listing photo 8",
        "url": "https://cdn2.jacars.net/media/cache/6e/b1/6eb112c523d2535301faeb9bc7c9b8aa.webp"
      },
      {
        "label": "Listing photo 9",
        "url": "https://cdn2.jacars.net/media/cache/df/c2/dfc2c89cae917e9b1472be334b9c4b80.webp"
      },
      {
        "label": "Listing photo 10",
        "url": "https://cdn2.jacars.net/media/cache/44/f5/44f52c01facaa89099f85054254b0215.webp"
      },
      {
        "label": "Listing photo 11",
        "url": "https://cdn2.jacars.net/media/cache/36/99/3699a54ea0f4061596656effb87fee97.webp"
      }
    ]
  },
  "wildtrak-2021": {
    "checkedAt": "2026-10-24",
    "coverage": "Original Jacars advert text and all 11 listing photos reviewed. Photos support visible details only; no physical or diagnostic inspection.",
    "verdict": "Retain #3 provisionally. An attractive low-mileage, well-equipped automatic 4WD; the J$5.7M price requires stronger documentary evidence than an equipment list.",
    "specifications": [
      {
        "label": "Year",
        "value": "2021",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Seats",
        "value": "5",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Mileage",
        "value": "58419 km",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Fuel type",
        "value": "Diesel",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Engine size",
        "value": "3,2L",
        "basis": "Advert form; seller-provided"
      }
    ],
    "sellerClaims": [
      "2021 Wildtrak, 58,419 km, J$5.7M negotiable; seller says originally purchased from KIG",
      "3.2L diesel, six-speed automatic, shift-on-the-fly 4WD, locking rear differential and 200 PS/470 Nm are advertised",
      "Seller lists leather/power seating, SYNC 3 with CarPlay/Android Auto, dual-zone A/C, push start, cameras/sensors, rain-sensing wipers, 18-inch alloys and a Roll & Lock cover"
    ],
    "photoFindings": [
      "Eleven photos support RHD, automatic transmission, a rotary 4WD selector, leather-trimmed seating and a touchscreen",
      "Exterior photos show Wildtrak-style trim, a sports bar, side steps, alloy wheels and a FORD-letter grille; verify any cosmetic modifications",
      "The pictured amenities do not prove all advertised functions work, that the original trim is genuine, or that servicing was performed at KIG"
    ],
    "serviceHistory": "KIG purchase origin is a seller claim and is distinct from a KIG service history. No dated service invoices are displayed. Obtain records by VIN with the owner/dealer.",
    "ownershipFit": "Strong comfort fit for your commute. Compared with a plainer XLT, cabin features may add enjoyment, but servicing and condition should determine the premium.",
    "comparison": "J$1.21M above #1 and 6,625 km more advertised mileage, in exchange for a two-year-newer model. Same J$5.7M ask as the separate 92,000-km Wildtrak and the now-reduced 2022 XLT; histories matter more than badges.",
    "inspection": [
      "Confirm VIN, KIG purchase/service records, ownership and any body/grille changes",
      "Cold/hot road test plus diesel, transmission and cooling diagnostics",
      "Demonstrate rear differential lock and 4WD/low range on a suitable surface",
      "Test every advertised comfort/safety feature, both keys, camera/sensors and tonneau operation",
      "Inspect underside, suspension, tyres, accident repairs and flood/corrosion evidence"
    ],
    "unknowns": [
      "Documented servicing rather than dealer-origin claim",
      "Accident/repair history, odometer continuity and full VIN equipment",
      "Current availability and final negotiated price"
    ],
    "sources": [
      {
        "label": "Original listing / dealer page",
        "url": "https://www.jacars.net/adv/2528226_2021-ford-ranger/"
      }
    ],
    "photoSources": [
      {
        "label": "Listing photo 1",
        "url": "https://cdn2.jacars.net/media/cache/4a/a4/4aa44d0e89b48a5658b0752ac9922fe5.webp"
      },
      {
        "label": "Listing photo 2",
        "url": "https://cdn2.jacars.net/media/cache/67/1f/671ff28b256ad0680f5078a604d05aab.webp"
      },
      {
        "label": "Listing photo 3",
        "url": "https://cdn2.jacars.net/media/cache/60/02/6002cb49d686416cdace18b4caa732bf.webp"
      },
      {
        "label": "Listing photo 4",
        "url": "https://cdn2.jacars.net/media/cache/4b/ab/4babee8e2d76f53756b3e2de5a602aba.webp"
      },
      {
        "label": "Listing photo 5",
        "url": "https://cdn2.jacars.net/media/cache/31/f4/31f478b680fad30b98de2f69b1c426b4.webp"
      },
      {
        "label": "Listing photo 6",
        "url": "https://cdn2.jacars.net/media/cache/c3/d7/c3d717eac0ba08e5fe8b7cd3296f8a2a.webp"
      },
      {
        "label": "Listing photo 7",
        "url": "https://cdn2.jacars.net/media/cache/f7/c9/f7c9c29ae389a255098762a4d92a026e.webp"
      },
      {
        "label": "Listing photo 8",
        "url": "https://cdn2.jacars.net/media/cache/fc/e6/fce6b8f817c1d6c40c9c4f545b49b501.webp"
      },
      {
        "label": "Listing photo 9",
        "url": "https://cdn2.jacars.net/media/cache/52/06/5206a06226118b12d687d09c9ff0cd1c.webp"
      },
      {
        "label": "Listing photo 10",
        "url": "https://cdn2.jacars.net/media/cache/f4/c9/f4c99280df8965afdb0069594b1d974c.webp"
      },
      {
        "label": "Listing photo 11",
        "url": "https://cdn2.jacars.net/media/cache/e4/da/e4dad55e1d5ed9016953e37796d14eb7.webp"
      }
    ]
  },
  "dealer-serviced-2529403": {
    "checkedAt": "2026-10-24",
    "coverage": "Original Jacars advert text and all 11 listing photos reviewed. Photos support visible details only; no physical or diagnostic inspection.",
    "verdict": "Retain #4 provisionally. Photos resolve the automatic/RHD and support 4WD; its claimed dealer history is the main reason to investigate further.",
    "specifications": [
      {
        "label": "Year",
        "value": "2022",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Seats",
        "value": "5",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Mileage",
        "value": "103000 km",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Fuel type",
        "value": "Diesel",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Engine size",
        "value": "2,3L",
        "basis": "Advert form; seller-provided"
      }
    ],
    "sellerClaims": [
      "J$5.2M negotiable, 2022, 103,000 km and a listed 2.3L diesel",
      "Seller claims one owner, no accidents, excellent condition and dealer servicing"
    ],
    "photoFindings": [
      "Eleven photos inspected. The tailgate in photo 6 clearly reads XE 4x4, supporting 4WD badging",
      "Photos 2–3 show RHD steering, an automatic shifter and a factory-style multimedia unit",
      "Exterior photos show a double cab, alloy wheels, side steps and a bed cover; an engine-bay photo is included",
      "Badging is not a mechanical test; the listed 2.3L engine needs VIN confirmation because regional Frontier specifications vary"
    ],
    "serviceHistory": "Dealer-serviced is still an unsupported seller claim until invoices or a VIN-matched service printout are provided. No-accident and one-owner claims also require documents and inspection.",
    "ownershipFit": "Automatic diesel/RHD configuration is suitable for commuting and the hill. At 103,000 km, the condition of consumables and driveline fluids is particularly important.",
    "comparison": "Only J$300,000 less than the 2023 Frontier with 49,000 km less advertised use. A comprehensive service record could justify its place; without one, #2 is the stronger paper comparison.",
    "inspection": [
      "VIN-confirm 2.3L engine, year, trim and 4WD; request dealer service printout and ownership/title records",
      "Cold start, injector/turbo diagnostics, cooling pressure test and automatic transmission evaluation",
      "Test 4WD/low range; inspect suspension, brakes, steering and driveline leaks",
      "Check chassis/paint for repairs, corrosion/flood evidence and heavy bed use",
      "Verify odometer chronology, camera/A/C and bed cover operation"
    ],
    "unknowns": [
      "Actual dealer records, accident history and ownership chain",
      "Precise engine code, gearbox specification and emissions configuration",
      "Mechanical condition and seller-confirmed stock"
    ],
    "sources": [
      {
        "label": "Original listing / dealer page",
        "url": "https://www.jacars.net/adv/2529403_excellent-condition-dealer-serviced/"
      }
    ],
    "photoSources": [
      {
        "label": "Listing photo 1",
        "url": "https://cdn2.jacars.net/media/cache/a3/7e/a37eee25a50317ce54f6a7782eda9d6b.webp"
      },
      {
        "label": "Listing photo 2",
        "url": "https://cdn2.jacars.net/media/cache/74/a6/74a6b62f12c9d2810fe04b3aecc755c7.webp"
      },
      {
        "label": "Listing photo 3",
        "url": "https://cdn2.jacars.net/media/cache/96/5e/965ebeed77bc979b50021d7a7def2f24.webp"
      },
      {
        "label": "Listing photo 4",
        "url": "https://cdn2.jacars.net/media/cache/2d/56/2d564be330cf2de077668cc00e7152ab.webp"
      },
      {
        "label": "Listing photo 5",
        "url": "https://cdn2.jacars.net/media/cache/eb/14/eb14c6a6735b66377b9873d3b13a57e1.webp"
      },
      {
        "label": "Listing photo 6",
        "url": "https://cdn2.jacars.net/media/cache/15/ea/15eaac26a707d5c146d2ef9a9647f9ee.webp"
      },
      {
        "label": "Listing photo 7",
        "url": "https://cdn2.jacars.net/media/cache/61/eb/61ebb6352291eb44b721fe8a2a29d05d.webp"
      },
      {
        "label": "Listing photo 8",
        "url": "https://cdn2.jacars.net/media/cache/7a/fb/7afb662edf94d0eced42ef05f24427bf.webp"
      },
      {
        "label": "Listing photo 9",
        "url": "https://cdn2.jacars.net/media/cache/a9/ed/a9ed0344197346bf71cc06c34384384c.webp"
      },
      {
        "label": "Listing photo 10",
        "url": "https://cdn2.jacars.net/media/cache/25/f8/25f8964d4f857d1a87b93099c7e4843b.webp"
      },
      {
        "label": "Listing photo 11",
        "url": "https://cdn2.jacars.net/media/cache/98/7d/987d5ec7a0afd8775cf145d2a3943d63.webp"
      }
    ]
  },
  "ranger-2019-2529367": {
    "checkedAt": "2026-10-24",
    "coverage": "Original Jacars advert text and all 9 listing photos reviewed. Photos support visible details only; no physical or diagnostic inspection.",
    "verdict": "Keep #5 provisionally. Its J$3.8M price is a persuasive value case, but 130,109 km without service documentation leaves a larger maintenance uncertainty than #1.",
    "specifications": [
      {
        "label": "Year",
        "value": "2019",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Seats",
        "value": "5",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Mileage",
        "value": "1 km (placeholder; seller photo sheet states 130,109 km)",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Fuel type",
        "value": "Diesel",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Engine size",
        "value": "3,2L",
        "basis": "Advert form; seller-provided"
      }
    ],
    "sellerClaims": [
      "J$3.8M negotiable, Saint Thomas; photo 9 specifies a 2019 XLT, 3.2L/3,198cc five-cylinder diesel, six-speed automatic, 4WD, RHD and 130,109 km",
      "Photo 8 advertises cruise control, Bluetooth, traction control, reverse camera, rear sensors, power/retractable mirrors, side steps, bedliner, 17-inch alloys and eight airbags"
    ],
    "photoFindings": [
      "All nine photos reviewed, including both seller specification sheets",
      "Cabin photos visibly support RHD and an automatic shifter; exterior shows double cab, sports bar and all-terrain tyres",
      "The exact mileage and six-speed/4WD specification come from a seller-created sheet, not an independent vehicle report",
      "The web form still displays 1 km; use 130,109 km from the seller sheet and retain this discrepancy",
      "Airbag count is not independently confirmed; do not rely on the eight-airbag claim for safety assessment"
    ],
    "serviceHistory": "No documented servicing or accident history supplied. Budget for a baseline service after inspection, but do not assume a service can cure existing wear.",
    "ownershipFit": "Automatic diesel 4WD/RHD fits your needs. The lower financing burden leaves more monthly headroom, although repairs can still be costly.",
    "comparison": "J$690,000 cheaper than #1 with 78,315 km more stated use. A good inspection and chronological service records could make this the stronger budget choice; unknown history is why it stays provisional.",
    "inspection": [
      "Confirm VIN/engine/trim and current odometer against the photo sheet; explain the 1-km web field",
      "Request service, accident and ownership documentation",
      "Cold-start/scan and cooling pressure test; inspect injector/turbo condition and leaks",
      "Test six-speed automatic cold/hot, 4WD and low range appropriately",
      "Check chassis/body repairs, suspension, tyre size/age and wheel alignment; demonstrate advertised camera/sensors and all keys"
    ],
    "unknowns": [
      "Service records and accident/repair history",
      "Airbag count and original factory equipment",
      "Current mechanical condition and seller inventory",
      "2019 reaches eight calendar years in 2027; loan eligibility needs bank confirmation"
    ],
    "sources": [
      {
        "label": "Original listing / dealer page",
        "url": "https://www.jacars.net/adv/2529367_ready-to-go/"
      }
    ],
    "photoSources": [
      {
        "label": "Listing photo 1",
        "url": "https://cdn2.jacars.net/media/cache/f2/eb/f2ebcb79babc8be98ab64f13b7e41780.webp"
      },
      {
        "label": "Listing photo 2",
        "url": "https://cdn2.jacars.net/media/cache/bd/68/bd687d7fb0f9c070fdb538317ad58cc2.webp"
      },
      {
        "label": "Listing photo 3",
        "url": "https://cdn2.jacars.net/media/cache/62/18/621802418de207fea4d094748f69797b.webp"
      },
      {
        "label": "Listing photo 4",
        "url": "https://cdn2.jacars.net/media/cache/ad/6c/ad6c448c539201a77463a02fc8640255.webp"
      },
      {
        "label": "Listing photo 5",
        "url": "https://cdn2.jacars.net/media/cache/44/49/4449af5dfda5239a04c2f5cfbfa6874c.webp"
      },
      {
        "label": "Listing photo 6",
        "url": "https://cdn2.jacars.net/media/cache/4a/04/4a047f5c9830e0d1e606ae398c4e0dbb.webp"
      },
      {
        "label": "Listing photo 7",
        "url": "https://cdn2.jacars.net/media/cache/1f/5a/1f5adf5a3309c0950e211a40a5a5c79f.webp"
      },
      {
        "label": "Listing photo 8",
        "url": "https://cdn2.jacars.net/media/cache/bb/47/bb47e106cc76be70732f1ee5b4f59ca7.webp"
      },
      {
        "label": "Listing photo 9",
        "url": "https://cdn2.jacars.net/media/cache/b6/73/b6734f98a5ad6b4fe5f5dec476f444b1.webp"
      }
    ]
  },
  "f150-2017": {
    "checkedAt": "2026-10-24",
    "coverage": "Original Jacars advert text and all 6 listing photos reviewed. Photos support visible details only; no physical or diagnostic inspection.",
    "verdict": "Value-priced but a weaker overall match than the diesel/RHD midsize pickups. Keep #6 as a conditional alternative, with substantial running-cost and finance checks.",
    "specifications": [
      {
        "label": "Year",
        "value": "2017",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Seats",
        "value": "5",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Color",
        "value": "White",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Gearbox",
        "value": "Automatic",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Mileage",
        "value": "98000 km",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Body type",
        "value": "Pickup",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Fuel type",
        "value": "Petrol",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Engine size",
        "value": "3,5L",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Right hand drive",
        "value": "Left",
        "basis": "Advert form; seller-provided"
      }
    ],
    "sellerClaims": [
      "J$2.8M reduced from J$3.5M; 2017 XLT, 98,000 km, 3.5L petrol V6, automatic, LHD",
      "Seller claims four-wheel drive and says the second side step is included"
    ],
    "photoFindings": [
      "Six photos show a large crew cab, LHD cabin, automatic selector, alloy wheels, front bull bar and 4x4 bed decals",
      "Photos show the current side-step arrangement; inspect the supplied second step and mounting points",
      "No clear odometer close-up, underside inspection or service documentation is supplied; decals do not establish functioning 4WD"
    ],
    "serviceHistory": "No service invoices supplied. The advert does not establish whether the 3.5L is the naturally aspirated or EcoBoost version, nor the exact transmission; VIN identification comes before model-specific maintenance conclusions.",
    "ownershipFit": "Low purchase price helps, but full-size dimensions, LHD sightlines and petrol consumption need a realistic commute/parking test. A cheap payment does not measure fuel, insurance, tyres or repairs.",
    "comparison": "J$1M cheaper than #5, but nine calendar years old in 2026, outside your previously stated seven-year vehicle-loan limit. Any five-year payment shown is illustrative, not an eligibility promise.",
    "inspection": [
      "Decode VIN for exact engine, gearbox, original market and trim; inspect import/title history",
      "Cold-start and hot road test; scan all modules, check cooling, leaks and gear changes",
      "Confirm actual 4WD hardware/operation and inspect chassis, suspension and corrosion",
      "Verify miles versus kilometres and odometer continuity",
      "Price fuel use, insurance and tyres locally; assess parking/LHD visibility and obtain a written finance eligibility answer"
    ],
    "unknowns": [
      "Exact engine/transmission variant and mileage unit",
      "Service history, repairs and import background",
      "Finance eligibility, realistic running costs and seller availability"
    ],
    "sources": [
      {
        "label": "Original listing / dealer page",
        "url": "https://www.jacars.net/adv/2527778_ford-f-150-3-5l-2017/"
      }
    ],
    "photoSources": [
      {
        "label": "Listing photo 1",
        "url": "https://cdn2.jacars.net/media/cache/73/5c/735c1b577f050d3db5eb17f10ce92d0e.webp"
      },
      {
        "label": "Listing photo 2",
        "url": "https://cdn2.jacars.net/media/cache/fe/8b/fe8b09eda75f2093dd7f10c12c29387a.webp"
      },
      {
        "label": "Listing photo 3",
        "url": "https://cdn2.jacars.net/media/cache/9f/fd/9ffda44881353d35c37b31241b595c12.webp"
      },
      {
        "label": "Listing photo 4",
        "url": "https://cdn2.jacars.net/media/cache/99/6d/996d71fa1d1ec139d8e695a3b7dcf6bf.webp"
      },
      {
        "label": "Listing photo 5",
        "url": "https://cdn2.jacars.net/media/cache/ed/0b/ed0bc548b3d0d54d133ec3426474585b.webp"
      },
      {
        "label": "Listing photo 6",
        "url": "https://cdn2.jacars.net/media/cache/a5/12/a51206b394f79743097bce4194090c82.webp"
      }
    ]
  },
  "frontier-midnight-2019": {
    "checkedAt": "2026-10-24",
    "coverage": "Original Jacars advert text and all 5 listing photos reviewed. Photos support visible details only; no physical or diagnostic inspection.",
    "verdict": "Retain #7 as a lower-price petrol alternative. It needs configuration and import-history checks before being compared as an equivalent to diesel/RHD Frontiers.",
    "specifications": [
      {
        "label": "Year",
        "value": "2019",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Seats",
        "value": "5",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Mileage",
        "value": "108000 km",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Fuel type",
        "value": "Petrol",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Engine size",
        "value": "4,0L",
        "basis": "Advert form; seller-provided"
      }
    ],
    "sellerClaims": [
      "J$3.5M negotiable; 2019 SV Limited Midnight Edition, 4.0L petrol V6, 108,000 km, LHD",
      "Seller claims one local owner and well maintained"
    ],
    "photoFindings": [
      "Five photos show a double cab, LHD cabin, cloth seating, bed cover, an automatic selector and a V6 engine cover",
      "The images do not establish 2WD versus 4WD; do not infer drivetrain from the Midnight badge",
      "No clear odometer photograph, service invoices or chassis view accompanies the advert"
    ],
    "serviceHistory": "No documented servicing. One local owner does not establish pre-import history or accident-free status.",
    "ownershipFit": "Lower cost and automatic transmission are attractive, but LHD and petrol running costs are compromises for your Jamaican commute. Confirm the actual drivetrain before attributing hill/off-road capability.",
    "comparison": "J$300,000 below #5 and 22,109 km less advertised mileage; those savings must be weighed against petrol/LHD configuration and history. It reaches eight calendar years in 2027.",
    "inspection": [
      "VIN-confirm original market, SV/Midnight specification, engine, gearbox and drivetrain",
      "Obtain import/title records and check damage history through original-market records where available",
      "Verify mileage unit/history; cold start and scan, inspect cooling and automatic shifts",
      "Inspect chassis corrosion, suspension, axle leaks, brakes and tyre condition",
      "Test visibility, turning/parking and estimate fuel/insurance costs"
    ],
    "unknowns": [
      "2WD or 4WD, exact transmission and original-market history",
      "Service invoices and odometer unit/continuity",
      "Repair history, current condition and seller availability"
    ],
    "sources": [
      {
        "label": "Original listing / dealer page",
        "url": "https://www.jacars.net/adv/2526109_2019-nissan-frontier/"
      }
    ],
    "photoSources": [
      {
        "label": "Listing photo 1",
        "url": "https://cdn2.jacars.net/media/cache/e7/db/e7db557c2054fb7013957b4be930eccf.webp"
      },
      {
        "label": "Listing photo 2",
        "url": "https://cdn2.jacars.net/media/cache/f2/b2/f2b201ef7c6e90f041a96af6ab1ffe73.webp"
      },
      {
        "label": "Listing photo 3",
        "url": "https://cdn2.jacars.net/media/cache/6c/07/6c0724034c0082d37f22936589b1122a.webp"
      },
      {
        "label": "Listing photo 4",
        "url": "https://cdn2.jacars.net/media/cache/3b/8e/3b8eb81e2235c805310a5de858c9f52b.webp"
      },
      {
        "label": "Listing photo 5",
        "url": "https://cdn2.jacars.net/media/cache/bd/6d/bd6dcda93008876411ce0293bc6180b0.webp"
      }
    ]
  },
  "wildtrak-2017": {
    "checkedAt": "2026-10-24",
    "coverage": "Original Jacars advert text and all 15 listing photos reviewed. Photos support visible details only; no physical or diagnostic inspection.",
    "verdict": "Keep #9 at low priority pending corrections. At J$3.83M it offers little price advantage over the newer #5 Ranger, while the advert has material data inconsistencies.",
    "specifications": [
      {
        "label": "Year",
        "value": "2017",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Seats",
        "value": "5",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Color",
        "value": "Gray",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Gearbox",
        "value": "Automatic",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Mileage",
        "value": "0 km (placeholder; historical tracker mileage 148,000 km)",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Body type",
        "value": "Pickup",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Fuel type",
        "value": "Diesel",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Drivetrain",
        "value": "4WD",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Engine size",
        "value": "3.4L as entered; engine size unresolved",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Right hand drive",
        "value": "Right",
        "basis": "Advert form; seller-provided"
      }
    ],
    "sellerClaims": [
      "J$3.83M; 2017 Wildtrak, automatic diesel 4WD, RHD, five seats, Portmore viewing",
      "Advert form shows 0 km and a 3.4L engine; historical tracker mileage was 148,000 km"
    ],
    "photoFindings": [
      "Fifteen photos support RHD and automatic transmission, with Wildtrak-style two-tone seating, side steps, alloys, sports bar and a covered bed",
      "The exterior carries Wildtrak/4x4 markings, but badges cannot resolve the engine-size error",
      "Engine-bay and cabin photos supplied; no legible odometer evidence establishes 148,000 km in this review"
    ],
    "serviceHistory": "No service documentation shown. Treat the 148,000-km figure as historical, not freshly verified. The 0-km field is not meaningful used-vehicle mileage.",
    "ownershipFit": "Equipment is appealing, but older age and uncertain specifications make it a less straightforward financing/maintenance choice.",
    "comparison": "J$30,000 more than #5 despite being two model years older. It is nine calendar years old in 2026, beyond your previous seven-year vehicle-loan boundary; a trim badge does not overcome that.",
    "inspection": [
      "Get a current odometer photo and VIN/engine identification to resolve 0 km and 3.4L fields",
      "Request dated service, gearbox and cooling records",
      "Independent cold/hot engine/gearbox test and diagnostic scan",
      "Inspect frame/repairs/corrosion and demonstrate 4WD; assess tyre and suspension condition",
      "Confirm finance route before spending on valuation"
    ],
    "unknowns": [
      "Actual mileage, actual engine and VIN-confirmed trim",
      "Service and accident history",
      "Loan eligibility and seller availability"
    ],
    "sources": [
      {
        "label": "Original listing / dealer page",
        "url": "https://www.jacars.net/adv/2526738_ford-ranger-3-4l-2017/"
      }
    ],
    "photoSources": [
      {
        "label": "Listing photo 1",
        "url": "https://cdn2.jacars.net/media/cache/44/af/44afe33833a21213943157e67fcc61ba.webp"
      },
      {
        "label": "Listing photo 2",
        "url": "https://cdn2.jacars.net/media/cache/da/2e/da2ee90eb4dfc6305514068bdfe7403b.webp"
      },
      {
        "label": "Listing photo 3",
        "url": "https://cdn2.jacars.net/media/cache/0f/27/0f279ea741cb47b9309f8709bbdd0adb.webp"
      },
      {
        "label": "Listing photo 4",
        "url": "https://cdn2.jacars.net/media/cache/04/d7/04d764c0eb0c9383fda302e889bf7127.webp"
      },
      {
        "label": "Listing photo 5",
        "url": "https://cdn2.jacars.net/media/cache/35/34/35346fdd677531dcd42709234f281eec.webp"
      },
      {
        "label": "Listing photo 6",
        "url": "https://cdn2.jacars.net/media/cache/a3/25/a3259cb1c735daade73f06c256f07060.webp"
      },
      {
        "label": "Listing photo 7",
        "url": "https://cdn2.jacars.net/media/cache/36/7a/367a75caddc4dc2d5c4bbe71efa2f9de.webp"
      },
      {
        "label": "Listing photo 8",
        "url": "https://cdn2.jacars.net/media/cache/01/70/0170f72fe3f0e457b8b7174bcd79ab42.webp"
      },
      {
        "label": "Listing photo 9",
        "url": "https://cdn2.jacars.net/media/cache/18/1b/181bba9fe75d13284ad3cfb6efbc1b55.webp"
      },
      {
        "label": "Listing photo 10",
        "url": "https://cdn2.jacars.net/media/cache/34/b8/34b89b05666da78af38208c40ee24538.webp"
      },
      {
        "label": "Listing photo 11",
        "url": "https://cdn2.jacars.net/media/cache/9a/94/9a9465596a7b3f4ce00b18d1a1dac0ea.webp"
      },
      {
        "label": "Listing photo 12",
        "url": "https://cdn2.jacars.net/media/cache/b3/2d/b32de8fbe2b6797da620dbbbb16c894b.webp"
      },
      {
        "label": "Listing photo 13",
        "url": "https://cdn2.jacars.net/media/cache/d2/f5/d2f570dd843f0d7536e376e85efb7f85.webp"
      },
      {
        "label": "Listing photo 14",
        "url": "https://cdn2.jacars.net/media/cache/b6/10/b610c82695b0a84848bff930fb27e8de.webp"
      },
      {
        "label": "Listing photo 15",
        "url": "https://cdn2.jacars.net/media/cache/99/eb/99ebd3a254630229ede1d7af00c2537f.webp"
      }
    ]
  },
  "dmax-2015": {
    "checkedAt": "2026-10-24",
    "coverage": "Original Jacars advert text and all 12 listing photos reviewed. Photos support visible details only; no physical or diagnostic inspection.",
    "verdict": "Keep #10 as an older value option. The price is now J$3.5M, and the seller offers a potentially useful service record, but age remains a financing obstacle.",
    "specifications": [
      {
        "label": "Year",
        "value": "2015",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Seats",
        "value": "4",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Mileage",
        "value": "78775 km",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Fuel type",
        "value": "Diesel",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Engine size",
        "value": "3,0L",
        "basis": "Advert form; seller-provided"
      }
    ],
    "sellerClaims": [
      "2015, 3.0L diesel and 78,775 km; current J$3.5M negotiable, down from the tracker’s J$3.55M",
      "Seller claims no accidents/no issues, Isuzu-recommended service parts and service dates/parts documented in the owner’s manual; invites a mechanic"
    ],
    "photoFindings": [
      "Twelve photos show RHD, an automatic selector, 4x4 bed markings, alloys, side steps and a sports bar",
      "A cluster close-up is consistent with the stated approximately 78,775 km; verify full reading/current mileage in person",
      "Seat covers limit upholstery assessment. The form lists four seats despite a double-cab rear bench; confirm legal seating on registration",
      "Engine-bay and tyre photos are provided; images cannot establish mechanical health or absence of accidents"
    ],
    "serviceHistory": "The documented-service claim is more specific than generic well-maintained wording. Request clear scans and supporting invoices; nothing in this review authenticates the book.",
    "ownershipFit": "Automatic diesel/RHD is a good configuration. Eleven calendar years of age means rubber, cooling and suspension condition still matter even if the low mileage is genuine.",
    "comparison": "J$300,000 below #5 with 51,334 km less advertised use, but four model years older. Outside your previously stated vehicle-loan age limit; low mileage does not restore eligibility.",
    "inspection": [
      "Photograph service-book pages and invoices, compare mileages and verify VIN/ownership",
      "Cold-start and diesel diagnostics; inspect cooling, leaks and transmission changes",
      "Check 4WD operation and inspect chassis corrosion, body repairs and suspension bushes",
      "Check tyre date codes, hoses, brake lines and seat condition under covers",
      "Confirm legal seating, odometer reading and financing route"
    ],
    "unknowns": [
      "Authenticity/completeness of service records and no-accident claim",
      "Exact trim, legal seat count and original-market specification",
      "Age-related condition, loan eligibility and current seller inventory"
    ],
    "sources": [
      {
        "label": "Original listing / dealer page",
        "url": "https://www.jacars.net/adv/2525441_isuzu-d-max/"
      }
    ],
    "photoSources": [
      {
        "label": "Listing photo 1",
        "url": "https://cdn2.jacars.net/media/cache/2c/0b/2c0b4c934b81b5ad31b6f93eca2e6bf3.webp"
      },
      {
        "label": "Listing photo 2",
        "url": "https://cdn2.jacars.net/media/cache/5b/5c/5b5cfb4ce058b57bbb48cb6076aafbdd.webp"
      },
      {
        "label": "Listing photo 3",
        "url": "https://cdn2.jacars.net/media/cache/8c/57/8c57a5f18add67bd846f36cfb15d8a26.webp"
      },
      {
        "label": "Listing photo 4",
        "url": "https://cdn2.jacars.net/media/cache/62/cb/62cb005b280db15d2ae740237c3509ac.webp"
      },
      {
        "label": "Listing photo 5",
        "url": "https://cdn2.jacars.net/media/cache/7e/81/7e8119bbaa861118c65b4ae142e4f960.webp"
      },
      {
        "label": "Listing photo 6",
        "url": "https://cdn2.jacars.net/media/cache/b8/c2/b8c2df543bb7f2800c528af4d582ed96.webp"
      },
      {
        "label": "Listing photo 7",
        "url": "https://cdn2.jacars.net/media/cache/26/a4/26a4358df3f6844d6128e326abb1cea4.webp"
      },
      {
        "label": "Listing photo 8",
        "url": "https://cdn2.jacars.net/media/cache/c3/54/c354c186d778930fa68da8e85203be5a.webp"
      },
      {
        "label": "Listing photo 9",
        "url": "https://cdn2.jacars.net/media/cache/9c/27/9c279169da717b066f428a60ca833e83.webp"
      },
      {
        "label": "Listing photo 10",
        "url": "https://cdn2.jacars.net/media/cache/9c/90/9c90107a6f7b9a65047f05c154c74fc5.webp"
      },
      {
        "label": "Listing photo 11",
        "url": "https://cdn2.jacars.net/media/cache/cb/6a/cb6a5bc7fdeb769b9ce73735d4d31505.webp"
      },
      {
        "label": "Listing photo 12",
        "url": "https://cdn2.jacars.net/media/cache/00/30/0030dd4a6c10164a57e69cdf966a1e91.webp"
      }
    ]
  },
  "frontier-xgear-2021": {
    "checkedAt": "2026-10-24",
    "coverage": "Original Jacars advert text and all 7 listing photos reviewed. Photos support visible details only; no physical or diagnostic inspection.",
    "verdict": "Keep on the watchlist at low priority at its current ask. The 130,000-km mileage makes J$5.7M difficult to justify against the newer #2 Frontier.",
    "specifications": [
      {
        "label": "Year",
        "value": "2021",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Seats",
        "value": "5",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Mileage",
        "value": "130000 km",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Fuel type",
        "value": "Diesel",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Engine size",
        "value": "2,5L",
        "basis": "Advert form; seller-provided"
      }
    ],
    "sellerClaims": [
      "2021 X-Gear, J$5.7M negotiable, 130,000 km, 2.5L turbo diesel, automatic and 4WD",
      "Seller lists Bluetooth/cruise, rear air vents, fog lamps, alloys, side steps and roof rails"
    ],
    "photoFindings": [
      "Seven photos show RHD, automatic transmission, black/orange seating, black wheels, covered bed and exterior trim matching an X-Gear-style package",
      "Photos do not prove the wheels/trim are original, the exact drivetrain works or the odometer history is continuous"
    ],
    "serviceHistory": "No dated service evidence supplied. Ask specifically for transmission and diesel-system maintenance at this mileage.",
    "ownershipFit": "Comfortable configuration on paper for daily use, but do not pay for styling at the expense of maintenance headroom.",
    "comparison": "J$200,000 more than #2 while two model years older and 76,000 km higher. Prior J$4.7M–4.9M discussion was a negotiation assessment, not an actual seller offer.",
    "inspection": [
      "Confirm VIN/trim, tyre/wheel sizes and factory versus added accessories",
      "Request service/ownership and accident records, with odometer chronology",
      "Cold/hot powertrain and cooling diagnostics; test automatic and 4WD",
      "Inspect suspension, chassis and tyre wear; test cabin electronics and bed cover"
    ],
    "unknowns": [
      "Service history, accident repairs and genuine equipment",
      "Actual condition and seller’s negotiable floor",
      "Seller-confirmed availability"
    ],
    "sources": [
      {
        "label": "Original listing / dealer page",
        "url": "https://www.jacars.net/adv/2530405_2021-nissan-frontier-x-gear/"
      }
    ],
    "photoSources": [
      {
        "label": "Listing photo 1",
        "url": "https://cdn2.jacars.net/media/cache/ba/2c/ba2c306527870bf39482cbacefd2871a.webp"
      },
      {
        "label": "Listing photo 2",
        "url": "https://cdn2.jacars.net/media/cache/c2/01/c201f9ad53ee4426460e75d860554c46.webp"
      },
      {
        "label": "Listing photo 3",
        "url": "https://cdn2.jacars.net/media/cache/74/03/7403a71c807f1a1b709e581b9536828e.webp"
      },
      {
        "label": "Listing photo 4",
        "url": "https://cdn2.jacars.net/media/cache/ac/6a/ac6af31e0a2bfda150417d5517cc55f3.webp"
      },
      {
        "label": "Listing photo 5",
        "url": "https://cdn2.jacars.net/media/cache/05/64/05649ecf8eafa702cdc99e85785c1e01.webp"
      },
      {
        "label": "Listing photo 6",
        "url": "https://cdn2.jacars.net/media/cache/fc/03/fc0378909bbed5b241abbde1097e4fb5.webp"
      },
      {
        "label": "Listing photo 7",
        "url": "https://cdn2.jacars.net/media/cache/05/22/052263baf0003c801c549c5ceb5d7871.webp"
      }
    ]
  },
  "ranger-2014": {
    "checkedAt": "2026-10-24",
    "coverage": "Original Jacars advert text and all 9 listing photos reviewed. Photos support visible details only; no physical or diagnostic inspection.",
    "verdict": "High-risk, low-priority watchlist record. The as-is sale and almost 300,000 km outweigh its lower purchase price for a dependable daily driver.",
    "specifications": [
      {
        "label": "Year",
        "value": "2014",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Seats",
        "value": "5",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Color",
        "value": "Gray",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Gearbox",
        "value": "Automatic",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Mileage",
        "value": "295376 km",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Body type",
        "value": "Pickup",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Fuel type",
        "value": "Petrol",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Drivetrain",
        "value": "4WD",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Engine size",
        "value": "3,2L",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Right hand drive",
        "value": "Right",
        "basis": "Advert form; seller-provided"
      }
    ],
    "sellerClaims": [
      "J$2.35M negotiable; 2014, 295,376 km, automatic, 4WD and RHD",
      "Seller explicitly says as is where is; the form lists petrol with a 3.2L engine, which needs correction/verification"
    ],
    "photoFindings": [
      "Nine photos show RHD, automatic transmission, cloth seating, aftermarket-style wheels and an engine-bay view",
      "The cluster is pictured with several warning lamps illuminated; engine-running status is not established, so this is not a fault diagnosis",
      "Photos do not resolve fuel-type inconsistency or show an independently verified structural condition"
    ],
    "serviceHistory": "No repair/overhaul or routine service history supplied. At this mileage, documentation of major work and current diagnostics are essential; do not infer a rebuild has occurred.",
    "ownershipFit": "Potentially expensive downtime is poorly aligned with your preference for a truck you can use consistently. Twelve calendar years old and outside your previous vehicle-loan boundary.",
    "comparison": "J$1.45M below #5, but approximately 165,267 km more advertised use and five model years older. A smaller loan is not sufficient compensation for unknown repair needs.",
    "inspection": [
      "Resolve fuel/engine identity and VIN; ask for all known faults and reason for as-is sale in writing",
      "Independent compression/engine assessment where indicated, diagnostic scan, cooling pressure test and hot gearbox evaluation",
      "Inspect chassis, corrosion, flood/accident repairs, axles, steering and suspension on a lift",
      "Get a written repair estimate and financing answer before any deposit"
    ],
    "unknowns": [
      "Actual fuel/engine configuration and all known faults",
      "Major repair history and odometer continuity",
      "Roadworthiness, repair budget and seller availability"
    ],
    "sources": [
      {
        "label": "Original listing / dealer page",
        "url": "https://www.jacars.net/adv/2530247_ford-ranger-3-2l-2014/"
      }
    ],
    "photoSources": [
      {
        "label": "Listing photo 1",
        "url": "https://cdn2.jacars.net/media/cache/65/8e/658ed4e65dcfd5e97bdb629c591c9308.webp"
      },
      {
        "label": "Listing photo 2",
        "url": "https://cdn2.jacars.net/media/cache/67/22/6722b178f3cfcb10bd873257250328b9.webp"
      },
      {
        "label": "Listing photo 3",
        "url": "https://cdn2.jacars.net/media/cache/b7/c0/b7c02f4368fd4429ed87659100814d0e.webp"
      },
      {
        "label": "Listing photo 4",
        "url": "https://cdn2.jacars.net/media/cache/3a/bc/3abce777a5aa6404ff9741013e596865.webp"
      },
      {
        "label": "Listing photo 5",
        "url": "https://cdn2.jacars.net/media/cache/b8/48/b8482731e1499887c01c47195e98bd6d.webp"
      },
      {
        "label": "Listing photo 6",
        "url": "https://cdn2.jacars.net/media/cache/0c/98/0c98e4d8ac18b21a206863c5cbda3882.webp"
      },
      {
        "label": "Listing photo 7",
        "url": "https://cdn2.jacars.net/media/cache/a3/2b/a32bcee7f464355f8ff700487c890165.webp"
      },
      {
        "label": "Listing photo 8",
        "url": "https://cdn2.jacars.net/media/cache/34/86/3486f01e65e21b333f0aea41f9a00b2b.webp"
      },
      {
        "label": "Listing photo 9",
        "url": "https://cdn2.jacars.net/media/cache/dd/1a/dd1adcac92bc20a14f2d900f6bfff921.webp"
      }
    ]
  },
  "hilux-2019": {
    "checkedAt": "2026-10-24",
    "coverage": "Original Jacars advert text and all 10 listing photos reviewed. Photos support visible details only; no physical or diagnostic inspection.",
    "verdict": "Keep at low priority on value. Current J$6.55M ask and 185,800 km require a strong history and a substantial reason to prefer it over cheaper contenders.",
    "specifications": [
      {
        "label": "Year",
        "value": "2019",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Seats",
        "value": "5",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Color",
        "value": "Red",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Gearbox",
        "value": "Automatic",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Mileage",
        "value": "185800 km",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Body type",
        "value": "Pickup",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Fuel type",
        "value": "Diesel",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Drivetrain",
        "value": "4WD",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Engine size",
        "value": "2,4L",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Right hand drive",
        "value": "Right",
        "basis": "Advert form; seller-provided"
      }
    ],
    "sellerClaims": [
      "2019 2.4L turbo diesel, automatic, 4WD, RHD, five seats and 185,800 km",
      "Current J$6.55M negotiable, reduced from the tracker’s J$6.65M; seller says newly imported and advertises camera/18-inch wheels"
    ],
    "photoFindings": [
      "Ten photos show RHD, an automatic shifter, cloth seating, touchscreen, alloys, side steps, sports bar and a double-cab body",
      "Engine bay is pictured; no original-market service/export/inspection records are shown",
      "Good visual presentation and fresh import status do not establish low wear or an accident-free history"
    ],
    "serviceHistory": "No chronological service invoices supplied. Newly imported status makes pre-import records and odometer/export documentation particularly useful.",
    "ownershipFit": "The diesel/automatic/RHD configuration fits, but acquisition cost and mileage leave little rationale for paying a brand premium alone.",
    "comparison": "J$2.06M above #1 with 134,006 km more advertised mileage, and J$1.05M above the 2023 Frontier with 131,800 km more. Its value case is currently weak.",
    "inspection": [
      "VIN/engine and import/export/odometer records; clarify original market and year",
      "Cold/hot diesel diagnostics, cooling and automatic transmission evaluation",
      "Check frame/underbody for corrosion, repairs and off-road damage; inspect injectors/turbo where diagnostics indicate",
      "Price upcoming tyres/brakes/suspension service and test all electronics",
      "Confirm final price, registration/title readiness and age-related finance eligibility"
    ],
    "unknowns": [
      "Pre-import servicing, accident history and mileage continuity",
      "Mechanical condition and exact trim",
      "Current seller availability and negotiated price"
    ],
    "sources": [
      {
        "label": "Original listing / dealer page",
        "url": "https://www.jacars.net/adv/2521675_toyota-hilux-2-4l-2019/"
      }
    ],
    "photoSources": [
      {
        "label": "Listing photo 1",
        "url": "https://cdn2.jacars.net/media/cache/ca/14/ca140b247eede28eda23853933d038b9.webp"
      },
      {
        "label": "Listing photo 2",
        "url": "https://cdn2.jacars.net/media/cache/ec/ba/ecba57bef9319f7731421d7e9c8018f0.webp"
      },
      {
        "label": "Listing photo 3",
        "url": "https://cdn2.jacars.net/media/cache/8a/31/8a3149ad7b7ee035afe9acf7abd8e644.webp"
      },
      {
        "label": "Listing photo 4",
        "url": "https://cdn2.jacars.net/media/cache/2c/9c/2c9cae08b3e0d3144b92feb9db846379.webp"
      },
      {
        "label": "Listing photo 5",
        "url": "https://cdn2.jacars.net/media/cache/3c/34/3c34a2d77902c47471713138ba8cb5fa.webp"
      },
      {
        "label": "Listing photo 6",
        "url": "https://cdn2.jacars.net/media/cache/2f/bb/2fbbf5782af08b6977c70956ae90371f.webp"
      },
      {
        "label": "Listing photo 7",
        "url": "https://cdn2.jacars.net/media/cache/e7/64/e764de148cd3e05ed43fe79fb118537f.webp"
      },
      {
        "label": "Listing photo 8",
        "url": "https://cdn2.jacars.net/media/cache/45/77/45773ae00fd19098e05a7e95c8d5fb89.webp"
      },
      {
        "label": "Listing photo 9",
        "url": "https://cdn2.jacars.net/media/cache/90/80/90808b7f92b32a9e705ffa7d7cada3cd.webp"
      },
      {
        "label": "Listing photo 10",
        "url": "https://cdn2.jacars.net/media/cache/1c/7e/1c7ea54afb7b9dc197d43e16d9e5eac6.webp"
      }
    ]
  },
  "raptor-2020": {
    "checkedAt": "2026-10-24",
    "coverage": "Original Jacars advert text and all 15 listing photos reviewed. Photos support visible details only; no physical or diagnostic inspection.",
    "verdict": "A specialist lifestyle option rather than the strongest value commuter. Verify genuine Raptor identity and budget for its dedicated suspension/tyres before prioritising.",
    "specifications": [
      {
        "label": "Year",
        "value": "2020",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Seats",
        "value": "5",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Color",
        "value": "Blue",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Gearbox",
        "value": "Automatic",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Mileage",
        "value": "136000 km",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Body type",
        "value": "Pickup",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Fuel type",
        "value": "Diesel",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Drivetrain",
        "value": "4WD",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Engine size",
        "value": "2,0L",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Right hand drive",
        "value": "Right",
        "basis": "Advert form; seller-provided"
      }
    ],
    "sellerClaims": [
      "2020, J$5.99M reduced from J$7.5M, 136,000 km, 2.0L diesel, automatic 4WD and RHD",
      "Seller advertises paddle shift, lane/collision warnings, CarPlay/Android Auto, bed cover, Maxxis A/T tyres and complimentary fitness/valuation/initial service"
    ],
    "photoFindings": [
      "Fifteen photos show Raptor styling, a FORD grille, wider body treatment, RHD, automatic selector, paddles, leather-style seats and large all-terrain tyres",
      "These visual cues do not authenticate VIN-specific factory Raptor chassis/suspension or confirm serviceability",
      "The advert’s automatic parking brake wording should be physically checked rather than accepted from the feature list"
    ],
    "serviceHistory": "No dated service records provided. A free initial service is not proof of prior servicing or a mechanical warranty.",
    "ownershipFit": "Appealing capability and comfort, but inspect ride quality and price specialist suspension/tyres locally. Do not confuse a genuine Raptor with a cosmetic conversion.",
    "comparison": "J$290,000 above #3 with 77,581 km more advertised use. Price is also J$1.5M above #1; extra capability needs a clear personal use case.",
    "inspection": [
      "VIN-confirm genuine Raptor, actual engine/gearbox and suspension specification",
      "Review engine/gearbox maintenance and model-specific timing-drive schedule using the exact engine/VIN",
      "Scan, cold/hot drive, check cooling and transmission behaviour",
      "Specialist inspection of dampers, suspension arms, frame, off-road impacts and tyre condition",
      "Demonstrate cameras, driver aids, parking brake and written terms of included service/valuation"
    ],
    "unknowns": [
      "Genuine factory Raptor status and complete servicing",
      "Off-road/accident history and specialist repair costs",
      "Actual advertised equipment, current condition and inventory"
    ],
    "sources": [
      {
        "label": "Original listing / dealer page",
        "url": "https://www.jacars.net/adv/2526509_ford-ranger-raptor-2-0l-2020/"
      }
    ],
    "photoSources": [
      {
        "label": "Listing photo 1",
        "url": "https://cdn2.jacars.net/media/cache/2a/52/2a527cb22b35069c3f5f08d35a104a16.webp"
      },
      {
        "label": "Listing photo 2",
        "url": "https://cdn2.jacars.net/media/cache/50/f5/50f50f9769b22325838fffb41e83e4dc.webp"
      },
      {
        "label": "Listing photo 3",
        "url": "https://cdn2.jacars.net/media/cache/e1/f1/e1f19c38fd689359b950769c3ab8aa6a.webp"
      },
      {
        "label": "Listing photo 4",
        "url": "https://cdn2.jacars.net/media/cache/1f/ef/1fef095258c65df763b7d054af0927b6.webp"
      },
      {
        "label": "Listing photo 5",
        "url": "https://cdn2.jacars.net/media/cache/42/13/42136ac7947f4de37c0a6765aa9d1928.webp"
      },
      {
        "label": "Listing photo 6",
        "url": "https://cdn2.jacars.net/media/cache/42/92/4292123a16fa41e058f8338f2274ec90.webp"
      },
      {
        "label": "Listing photo 7",
        "url": "https://cdn2.jacars.net/media/cache/81/5f/815f0dbde6f785613a9e0b700964e851.webp"
      },
      {
        "label": "Listing photo 8",
        "url": "https://cdn2.jacars.net/media/cache/ef/d9/efd9e7ce1b72120a1ed4125d892c8b4b.webp"
      },
      {
        "label": "Listing photo 9",
        "url": "https://cdn2.jacars.net/media/cache/5d/80/5d807b250fcb4d65655f03a6b0063026.webp"
      },
      {
        "label": "Listing photo 10",
        "url": "https://cdn2.jacars.net/media/cache/a9/6f/a96f25b23c6a198a18148cef774930cd.webp"
      },
      {
        "label": "Listing photo 11",
        "url": "https://cdn2.jacars.net/media/cache/02/04/0204c395b62d5dd2cac4159c89f2ec8c.webp"
      },
      {
        "label": "Listing photo 12",
        "url": "https://cdn2.jacars.net/media/cache/b0/c5/b0c5c50736b07b96de6cca6d27a8c17e.webp"
      },
      {
        "label": "Listing photo 13",
        "url": "https://cdn2.jacars.net/media/cache/15/41/1541757fe0093999ee62c2167a3eea6d.webp"
      },
      {
        "label": "Listing photo 14",
        "url": "https://cdn2.jacars.net/media/cache/6e/8b/6e8b167431d263464a283931a2b34287.webp"
      },
      {
        "label": "Listing photo 15",
        "url": "https://cdn2.jacars.net/media/cache/d5/a9/d5a9af881f4a712773a3ecffc515e744.webp"
      }
    ]
  },
  "wildtrak-2022": {
    "checkedAt": "2026-10-24",
    "coverage": "Original Jacars advert text and all 7 listing photos reviewed. Photos support visible details only; no physical or diagnostic inspection.",
    "verdict": "Watchlist: newer-generation appeal, but J$7.3M and 122,000 km need a better evidence base and a clear justification over cheaper trucks.",
    "specifications": [
      {
        "label": "Year",
        "value": "2022",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Seats",
        "value": "5",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Mileage",
        "value": "122000 km",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Fuel type",
        "value": "Diesel",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Engine size",
        "value": "2,0L",
        "basis": "Advert form; seller-provided"
      }
    ],
    "sellerClaims": [
      "2022 Wildtrak, 2.0L diesel, 122,000 km and J$7,299,999 negotiable",
      "Only well maintained is offered as a description; no detailed service or equipment schedule is attached"
    ],
    "photoFindings": [
      "Seven photos show the newer upright-headlamp/vertical-screen Ranger body and cabin layout, RHD, an automatic selector, side steps, bed cover and sports bar",
      "Visual generation cues do not establish build date, genuine trim, single/bi-turbo engine, gear count or actual drivetrain hardware"
    ],
    "serviceHistory": "No service documentation supplied. Identify exact engine/gearbox and obtain its service schedule and records before assuming a 10-speed or a particular timing-drive arrangement.",
    "ownershipFit": "Modern cabin may improve daily enjoyment, but this is a higher purchase commitment with considerable mileage.",
    "comparison": "Approximately J$1.6M above #3 while advertising 63,581 km more use. Only J$690,001 below the new KIG XL catalogue starting price; compare warranty and actual specification, not just trim.",
    "inspection": [
      "Verify VIN/build year, genuine trim, engine, gearbox and 4WD specification",
      "Request all service/repair records, especially transmission and engine-specific scheduled work",
      "Cold/hot road test, module scan and cooling check",
      "Inspect body/frame, off-road use, suspension, tyres and all touchscreen/driver-assist functions",
      "Check original warranty status, ownership and final price"
    ],
    "unknowns": [
      "Exact powertrain, drivetrain and build/registration year",
      "Service history, accident repairs and warranty",
      "Current availability and genuine specification"
    ],
    "sources": [
      {
        "label": "Original listing / dealer page",
        "url": "https://www.jacars.net/adv/2528896_2022-ford-ranger-wildtrak/"
      }
    ],
    "photoSources": [
      {
        "label": "Listing photo 1",
        "url": "https://cdn2.jacars.net/media/cache/61/f1/61f14c69db0fd87ce28b7eab05f1feac.webp"
      },
      {
        "label": "Listing photo 2",
        "url": "https://cdn2.jacars.net/media/cache/f6/50/f650625893c63978f0830ba2852c3fb4.webp"
      },
      {
        "label": "Listing photo 3",
        "url": "https://cdn2.jacars.net/media/cache/fe/53/fe538c6b77cc34ac95171997f65d52b9.webp"
      },
      {
        "label": "Listing photo 4",
        "url": "https://cdn2.jacars.net/media/cache/27/35/273592d5a5bc99bb94d1a0b38c7a5ff3.webp"
      },
      {
        "label": "Listing photo 5",
        "url": "https://cdn2.jacars.net/media/cache/7d/6b/7d6b8f2027bcf31997dd4efbc8bc5aed.webp"
      },
      {
        "label": "Listing photo 6",
        "url": "https://cdn2.jacars.net/media/cache/4b/f4/4bf490b175f3f44fb07ad6f6ec4c061b.webp"
      },
      {
        "label": "Listing photo 7",
        "url": "https://cdn2.jacars.net/media/cache/9d/5a/9d5a7fed066e05b5ad230412eb0b275a.webp"
      }
    ]
  },
  "xlt-2022": {
    "checkedAt": "2026-10-24",
    "coverage": "Original Jacars advert text and all 7 listing photos reviewed. Photos support visible details only; no physical or diagnostic inspection.",
    "verdict": "Price improved to J$5.7M, but 125,000 km makes it a secondary option until its claimed dealer history is produced.",
    "specifications": [
      {
        "label": "Year",
        "value": "2022",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Seats",
        "value": "5",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Color",
        "value": "White",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Gearbox",
        "value": "Automatic",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Mileage",
        "value": "125000 km",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Body type",
        "value": "Pickup",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Fuel type",
        "value": "Diesel",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Drivetrain",
        "value": "4WD",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Engine size",
        "value": "2,2L",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Right hand drive",
        "value": "Right",
        "basis": "Advert form; seller-provided"
      }
    ],
    "sellerClaims": [
      "2022 XLT, 2.2L turbo diesel, automatic 4WD, RHD, 125,000 km",
      "J$5.7M negotiable, reduced from J$6M; seller claims dealer serviced and excellent running condition",
      "Advert lists touchscreen/Bluetooth, camera, cruise control, alloys and multiple airbags"
    ],
    "photoFindings": [
      "Seven photos support RHD, automatic transmission, cloth seats, side steps, alloys and a sports bar",
      "An engine-bay photo is supplied. Neither an XLT badge nor the cabin photo establishes all advertised safety features or the vehicle’s mechanical health"
    ],
    "serviceHistory": "Dealer-serviced claim is unverified without VIN-matched records. At 125,000 km ask what fluid, brake, suspension and cooling work has actually been done.",
    "ownershipFit": "Useful automatic diesel/RHD configuration for commuting, with a plainer cabin than Wildtrak. Test performance on the hill rather than assuming a 2.2L is inadequate.",
    "comparison": "Same J$5.7M ask as #3 Wildtrak but 66,581 km more advertised mileage and one year newer; J$200,000 above #2 with 71,000 km more. Documentation or a lower price is needed.",
    "inspection": [
      "Obtain dealer invoices/printout and VIN-confirm powertrain/trim",
      "Cold/hot drive and scan, cooling pressure test, injector/turbo checks as indicated",
      "Inspect automatic shifts, 4WD/low range, chassis/repairs and suspension",
      "Demonstrate camera/cruise/infotainment and inspect tyres/brakes",
      "Confirm sale price and any warranty in writing"
    ],
    "unknowns": [
      "Actual dealer records and accident history",
      "Gear count, exact factory equipment and odometer continuity",
      "Mechanical condition and seller availability"
    ],
    "sources": [
      {
        "label": "Original listing / dealer page",
        "url": "https://www.jacars.net/adv/2520920_2022-ford-ranger-xlt/"
      }
    ],
    "photoSources": [
      {
        "label": "Listing photo 1",
        "url": "https://cdn2.jacars.net/media/cache/42/98/4298d73f32e7d1c8e5273dead1dd1eba.webp"
      },
      {
        "label": "Listing photo 2",
        "url": "https://cdn2.jacars.net/media/cache/d5/6f/d56f95f08bc1a675daf713153265ff04.webp"
      },
      {
        "label": "Listing photo 3",
        "url": "https://cdn2.jacars.net/media/cache/91/53/91536ad3a965f00a24b13ba59b7a43ae.webp"
      },
      {
        "label": "Listing photo 4",
        "url": "https://cdn2.jacars.net/media/cache/f5/dd/f5dd7530dbd3c8a1276353d5d0c80b8b.webp"
      },
      {
        "label": "Listing photo 5",
        "url": "https://cdn2.jacars.net/media/cache/15/cb/15cb819e970387265c5a9b90971c9ffc.webp"
      },
      {
        "label": "Listing photo 6",
        "url": "https://cdn2.jacars.net/media/cache/80/ff/80ffbc44cc6aeb2466304a9eff342752.webp"
      },
      {
        "label": "Listing photo 7",
        "url": "https://cdn2.jacars.net/media/cache/fe/11/fe119784d23f22d5c65cc5dd01712b45.webp"
      }
    ]
  },
  "triton-2025": {
    "checkedAt": "2026-10-24",
    "coverage": "Original Jacars advert text and all 11 listing photos reviewed. Photos support visible details only; no physical or diagnostic inspection.",
    "verdict": "A credible higher-budget contender: much newer and low stated mileage. Worth investigating if J$7M is affordable without exhausting repair/emergency reserves.",
    "specifications": [
      {
        "label": "Year",
        "value": "2025",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Seats",
        "value": "5",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Color",
        "value": "Blue",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Gearbox",
        "value": "Automatic",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Mileage",
        "value": "13893 km",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Body type",
        "value": "Pickup",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Fuel type",
        "value": "Diesel",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Drivetrain",
        "value": "4WD",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Engine size",
        "value": "2,4L",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Right hand drive",
        "value": "Right",
        "basis": "Advert form; seller-provided"
      }
    ],
    "sellerClaims": [
      "2025, J$7M negotiable, 13,893 km, 2.4L diesel, automatic, 4WD, RHD and five seats",
      "Seller claims immaculate/almost-new condition and well maintained; lady-driven wording is not evidence of reduced wear"
    ],
    "photoFindings": [
      "Eleven photos show the newer Triton body/cabin, RHD, an automatic shifter, rotary drive selector, cloth seating, touchscreen, alloys, sports bar and lined bed",
      "Cluster image is included but glare/small display prevents an independently confident exact current mileage reading in this review",
      "No warranty certificate, dealer servicing or accident report is pictured"
    ],
    "serviceHistory": "Low mileage is attractive but does not remove time-based service requirements. Ask for first-service records, purchase date and transferable warranty confirmation.",
    "ownershipFit": "Modern automatic diesel/RHD pickup with low stated use fits long-term ownership. Compare comfort, safety equipment and warranty with a new truck, not merely model year.",
    "comparison": "J$2.51M above #1 but six model years newer and 37,901 km less advertised use. J$1.35M below the new Triton starting price, subject to like-for-like trim and warranty.",
    "inspection": [
      "VIN-confirm generation, model year, engine, exact automatic and 4WD system; Super Select is not guaranteed by 4WD wording alone",
      "Check purchase invoice, service dates and remaining transferable warranty with the dealer",
      "Scan/road-test and inspect repairs, chassis/underbody, suspension and tyres",
      "Get a legible current odometer image and check title/lien clearance",
      "Compare an all-in new Triton quote with this used unit’s actual equipment"
    ],
    "unknowns": [
      "Exact trim/4WD system, gear count and original market",
      "Verified service/warranty balance and accident history",
      "Current odometer, actual condition and seller availability"
    ],
    "sources": [
      {
        "label": "Original listing / dealer page",
        "url": "https://www.jacars.net/adv/2527362_mitsubishi-triton-l200-2-4l-2025/"
      }
    ],
    "photoSources": [
      {
        "label": "Listing photo 1",
        "url": "https://cdn2.jacars.net/media/cache/8d/db/8ddbb6400cf5edba6468b73dfb80a499.webp"
      },
      {
        "label": "Listing photo 2",
        "url": "https://cdn2.jacars.net/media/cache/dd/24/dd24707e5846355e533bf947e5698736.webp"
      },
      {
        "label": "Listing photo 3",
        "url": "https://cdn2.jacars.net/media/cache/9e/3a/9e3a8438adfd52fa20eef8b9cd00567f.webp"
      },
      {
        "label": "Listing photo 4",
        "url": "https://cdn2.jacars.net/media/cache/27/9b/279b186328e8324f70c43cddc4ac6843.webp"
      },
      {
        "label": "Listing photo 5",
        "url": "https://cdn2.jacars.net/media/cache/d3/71/d37130e7854c93b7bbf14df5fd14e3a5.webp"
      },
      {
        "label": "Listing photo 6",
        "url": "https://cdn2.jacars.net/media/cache/53/53/535387701b7e75aa784cd0c0cadb8870.webp"
      },
      {
        "label": "Listing photo 7",
        "url": "https://cdn2.jacars.net/media/cache/2c/7c/2c7c8a822bd6664db991c3256bb962d2.webp"
      },
      {
        "label": "Listing photo 8",
        "url": "https://cdn2.jacars.net/media/cache/61/1e/611e6eb4d55b7a4b1c9bd476e4a255c6.webp"
      },
      {
        "label": "Listing photo 9",
        "url": "https://cdn2.jacars.net/media/cache/f5/19/f519c8a658456fc4e7775a86e15a44b3.webp"
      },
      {
        "label": "Listing photo 10",
        "url": "https://cdn2.jacars.net/media/cache/11/c8/11c8a27860c4c8aba2bbac2b3875d493.webp"
      },
      {
        "label": "Listing photo 11",
        "url": "https://cdn2.jacars.net/media/cache/d8/ee/d8eea1071929a39d3fad8256c636b106.webp"
      }
    ]
  },
  "wildtrak-2021-other": {
    "checkedAt": "2026-10-24",
    "coverage": "Original Jacars advert text and all 10 listing photos reviewed. Photos support visible details only; no physical or diagnostic inspection.",
    "verdict": "Lower-priority duplicate-year alternative to #3. It now explicitly needs a reverse camera and has higher mileage at the same ask.",
    "specifications": [
      {
        "label": "Year",
        "value": "2021",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Seats",
        "value": "5",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Mileage",
        "value": "92000 km",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Fuel type",
        "value": "Diesel",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Engine size",
        "value": "3,2L",
        "basis": "Advert form; seller-provided"
      }
    ],
    "sellerClaims": [
      "2021 3.2L turbo diesel, automatic 4x4, 92,000 km; J$5.7M reduced from J$6.5M",
      "Seller claims regular servicing and no issues but also explicitly states a new reverse camera is required",
      "Leather, CarPlay/Android Auto, parking sensors, push start and cold A/C are advertised"
    ],
    "photoFindings": [
      "Ten photos show RHD, automatic selector, Wildtrak-embroidered seating, FORD-letter grille, sports bar, alloys and roll-top bed cover",
      "No image proves camera operation; the disclosed defect takes precedence over generic equipment/no-issues wording"
    ],
    "serviceHistory": "Regular servicing is claimed without dated evidence. Request records and a written explanation/diagnosis of the camera failure; it could involve camera, wiring or head unit.",
    "ownershipFit": "Good configuration, but a known repair and higher mileage reduce its appeal relative to #3. Test all accessories rather than assuming this is the only defect.",
    "comparison": "Same J$5.7M as #3 with 33,581 km more advertised use. A repaired/tested camera, stronger history or meaningful discount would be needed to prefer it.",
    "inspection": [
      "Get servicing/ownership records and VIN-confirm trim/powertrain",
      "Diagnose and quote camera repair; test sensors, head unit and wiring",
      "Cold/hot engine/transmission/cooling checks and diagnostic scan",
      "Inspect 4WD, suspension, frame/repairs and tyre age",
      "Negotiate based on documented repairs, not a generic promise to fix"
    ],
    "unknowns": [
      "Camera fault cause/repair cost and any additional electrical problems",
      "Service/accident history and odometer continuity",
      "Current availability and seller’s final price"
    ],
    "sources": [
      {
        "label": "Original listing / dealer page",
        "url": "https://www.jacars.net/adv/2520046_2021-ford-ranger-wildtrak/"
      }
    ],
    "photoSources": [
      {
        "label": "Listing photo 1",
        "url": "https://cdn2.jacars.net/media/cache/d1/08/d1085ea4fd129000f811cd31d131fa39.webp"
      },
      {
        "label": "Listing photo 2",
        "url": "https://cdn2.jacars.net/media/cache/4f/53/4f53c5a4cfac8821301fa5f41368e227.webp"
      },
      {
        "label": "Listing photo 3",
        "url": "https://cdn2.jacars.net/media/cache/d7/c3/d7c3ba2c0b281b87ed0c0f3ab0c9d28b.webp"
      },
      {
        "label": "Listing photo 4",
        "url": "https://cdn2.jacars.net/media/cache/08/dd/08dd2bb8f4bc88c3587b5d9ca1170a46.webp"
      },
      {
        "label": "Listing photo 5",
        "url": "https://cdn2.jacars.net/media/cache/92/c6/92c63ae19fda479462788a51decf8554.webp"
      },
      {
        "label": "Listing photo 6",
        "url": "https://cdn2.jacars.net/media/cache/1a/b0/1ab028cefecc8c1a5f1f1274e5b558d9.webp"
      },
      {
        "label": "Listing photo 7",
        "url": "https://cdn2.jacars.net/media/cache/a6/f9/a6f9e788d676e3040589b6f84a4922d9.webp"
      },
      {
        "label": "Listing photo 8",
        "url": "https://cdn2.jacars.net/media/cache/0c/ab/0cabc682c86d15be1fe6d38cfd4da756.webp"
      },
      {
        "label": "Listing photo 9",
        "url": "https://cdn2.jacars.net/media/cache/64/d3/64d33edf3e38d90afb11e6b172cbb881.webp"
      },
      {
        "label": "Listing photo 10",
        "url": "https://cdn2.jacars.net/media/cache/2c/90/2c908a4ed0ad95a136b5999cebabbbed.webp"
      }
    ]
  },
  "tacoma-2527811": {
    "checkedAt": "2026-10-24",
    "coverage": "Original Jacars advert text and all 6 listing photos reviewed. Photos support visible details only; no physical or diagnostic inspection.",
    "verdict": "A relatively low-mileage petrol option, but expensive for your preferences and still missing drivetrain/history confirmation.",
    "specifications": [
      {
        "label": "Year",
        "value": "2020",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Seats",
        "value": "5",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Mileage",
        "value": "53000 km",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Fuel type",
        "value": "Petrol",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Engine size",
        "value": "3,5L",
        "basis": "Advert form; seller-provided"
      }
    ],
    "sellerClaims": [
      "2020, 53,000 km, 3.5L petrol and J$6M reduced from J$6.5M",
      "Seller says good working condition without supporting history or a detailed equipment list"
    ],
    "photoFindings": [
      "Six photos show a double cab, LHD steering, automatic selector, cloth seating, touchscreen, alloys and side steps",
      "No photograph here establishes a legible current odometer or proves 4WD functionality; do not assign 4WD or a premium trim from styling"
    ],
    "serviceHistory": "No service records or original-market history supplied. Check import, title and accident/repair records rather than relying on appearance.",
    "ownershipFit": "Low stated mileage is a positive, but you have expressed limited enthusiasm for Tacoma styling. LHD/petrol costs also need to be acceptable before spending time on inspection.",
    "comparison": "J$500,000 above #2 Frontier with only 1,000 km less advertised use and three model years older. The price requires a strong individual history or a specific preference for this configuration.",
    "inspection": [
      "VIN-confirm engine, exact transmission, trim and 2WD/4WD",
      "Check mileage unit and current odometer, original-market title/damage history and service invoices",
      "Cold/hot engine and gearbox test; inspect cooling, frame corrosion and body repairs",
      "Test parking/LHD visibility, infotainment, A/C and any 4WD system",
      "Quote fuel, insurance and tyre costs"
    ],
    "unknowns": [
      "Actual drivetrain, trim, gear count and original-market history",
      "Service history, mileage continuity and accident repairs",
      "Mechanical condition and seller availability"
    ],
    "sources": [
      {
        "label": "Original listing / dealer page",
        "url": "https://www.jacars.net/adv/2527811_tacoma/"
      }
    ],
    "photoSources": [
      {
        "label": "Listing photo 1",
        "url": "https://cdn2.jacars.net/media/cache/ea/96/ea96566b12e0b5ebfbc60f07dc2e96ba.webp"
      },
      {
        "label": "Listing photo 2",
        "url": "https://cdn2.jacars.net/media/cache/5e/98/5e98ee1a5d175a6d5f04e4e706e779f8.webp"
      },
      {
        "label": "Listing photo 3",
        "url": "https://cdn2.jacars.net/media/cache/61/b5/61b510fc921e9def8e21778bfeae0c4f.webp"
      },
      {
        "label": "Listing photo 4",
        "url": "https://cdn2.jacars.net/media/cache/35/b8/35b8a3c74b978e345a5a6b9b5da1eddc.webp"
      },
      {
        "label": "Listing photo 5",
        "url": "https://cdn2.jacars.net/media/cache/c7/c1/c7c1ff5bac97529ae4ab7b22a222cfc2.webp"
      },
      {
        "label": "Listing photo 6",
        "url": "https://cdn2.jacars.net/media/cache/e8/3d/e83dc2d124f69e151f0edd4a90e61ed2.webp"
      }
    ]
  },
  "l200-2022": {
    "checkedAt": "2026-10-24",
    "coverage": "Original Jacars advert text and all 15 listing photos reviewed. Photos support visible details only; no physical or diagnostic inspection.",
    "verdict": "Historical sold record. Retain for comparison and do not treat a visible advert or its asking price as a purchasable option.",
    "specifications": [
      {
        "label": "Year",
        "value": "2022",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Seats",
        "value": "5",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Color",
        "value": "Gray",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Gearbox",
        "value": "Automatic",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Mileage",
        "value": "70100 km",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Body type",
        "value": "Pickup",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Fuel type",
        "value": "Diesel",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Drivetrain",
        "value": "4WD",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Engine size",
        "value": "2,8L",
        "basis": "Advert form; seller-provided"
      },
      {
        "label": "Right hand drive",
        "value": "Right",
        "basis": "Advert form; seller-provided"
      }
    ],
    "sellerClaims": [
      "Historical J$4,999,000, 70,100 km, 2022, automatic diesel 4WD/RHD; form lists 2.8L",
      "Seller claims one owner, fully serviced, two new off-road tyres, camera, Bluetooth, push start and rear A/C vents"
    ],
    "photoFindings": [
      "Fifteen photos reviewed. RHD, automatic selector, leather-style seats, camera display, push start and 4WD selector are visible",
      "Cluster photograph reads approximately 70,083 km, slightly below the rounded advertised 70,100 km",
      "The 4WD dial visibly has 2H/4H/4HLc/4LLc-type positions, consistent with a Super Select-style system; original trim/hardware still needs VIN confirmation",
      "The listed 2.8L is unusual for this generation and should not be accepted as a verified engine displacement"
    ],
    "serviceHistory": "Fully serviced is a seller claim without invoices. Vehicle was previously user-confirmed sold; the fresh advert now says expired, which does not reverse that stronger sale evidence.",
    "ownershipFit": "Useful historical benchmark for automatic 4WD equipment and price; no current acquisition plan or financing assessment should treat it as available.",
    "comparison": "Historical price was near several mid-J$5M options, but a sold comparison cannot substitute for a live unit or current quote.",
    "inspection": [
      "If it is ever re-advertised, first establish whether it is the same VIN and a genuine resale",
      "Resolve engine displacement via VIN/documents and verify service records",
      "Recheck current mileage and repeat independent engine/gearbox/chassis/4WD inspection rather than relying on old photos"
    ],
    "unknowns": [
      "No current sale availability; user-confirmed sold retained",
      "Historical engine displacement and service documentation unverified",
      "Any future resale would need fresh identity and condition checks"
    ],
    "sources": [
      {
        "label": "Original listing / dealer page",
        "url": "https://www.jacars.net/adv/2526875_mitsubishi-triton-l200-2-8l-2022/"
      }
    ],
    "photoSources": [
      {
        "label": "Listing photo 1",
        "url": "https://cdn2.jacars.net/media/cache/e7/d7/e7d7a3fa2795718832e4d9661c32cc37.webp"
      },
      {
        "label": "Listing photo 2",
        "url": "https://cdn2.jacars.net/media/cache/34/40/3440a7b20ddea9be557f89008a07ffef.webp"
      },
      {
        "label": "Listing photo 3",
        "url": "https://cdn2.jacars.net/media/cache/61/f2/61f2f32527700b33b142bb7950b697ff.webp"
      },
      {
        "label": "Listing photo 4",
        "url": "https://cdn2.jacars.net/media/cache/10/4c/104c98e612fec61a4eac1927e84b40c3.webp"
      },
      {
        "label": "Listing photo 5",
        "url": "https://cdn2.jacars.net/media/cache/c0/f6/c0f6e3909bfac5208e63dd2190fed8cc.webp"
      },
      {
        "label": "Listing photo 6",
        "url": "https://cdn2.jacars.net/media/cache/55/0f/550ff1590f01db46144dd1ab2769b8dd.webp"
      },
      {
        "label": "Listing photo 7",
        "url": "https://cdn2.jacars.net/media/cache/b4/f1/b4f1e5dd974ea583ea14c0a15fed6d55.webp"
      },
      {
        "label": "Listing photo 8",
        "url": "https://cdn2.jacars.net/media/cache/2e/ac/2eac705d9b5ac6d645c2685edf3cdb04.webp"
      },
      {
        "label": "Listing photo 9",
        "url": "https://cdn2.jacars.net/media/cache/0a/02/0a0267583fe6981a1c96b535b8451947.webp"
      },
      {
        "label": "Listing photo 10",
        "url": "https://cdn2.jacars.net/media/cache/3a/59/3a59392930f8c104a95246c2582a6306.webp"
      },
      {
        "label": "Listing photo 11",
        "url": "https://cdn2.jacars.net/media/cache/cf/84/cf84778a3d9c7398ba7c4f5089a9aad1.webp"
      },
      {
        "label": "Listing photo 12",
        "url": "https://cdn2.jacars.net/media/cache/b8/24/b824b34cff50725b149bf52f62a2c972.webp"
      },
      {
        "label": "Listing photo 13",
        "url": "https://cdn2.jacars.net/media/cache/71/1f/711f163064fbe8a3aa1e17cd4faaa0d1.webp"
      },
      {
        "label": "Listing photo 14",
        "url": "https://cdn2.jacars.net/media/cache/6f/d6/6fd6f12fd5e5cf7550bbb2bede039317.webp"
      },
      {
        "label": "Listing photo 15",
        "url": "https://cdn2.jacars.net/media/cache/28/c6/28c62274d1e44d6d8d78b4f6cff40259.webp"
      }
    ]
  },
  "wildtrak-2015": {
    "checkedAt": "2026-10-24",
    "coverage": "Historical user-confirmed sold record. Original advert now returns 404; no fresh photo/condition assessment possible.",
    "verdict": "Historical sold record, excluded as a live buying opportunity. Preserve the prior details without implying this assessment refreshed the advert.",
    "specifications": [
      {
        "label": "Year",
        "value": "2015",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Mileage (historical/advertised)",
        "value": "92437",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Transmission",
        "value": "Automatic",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Drivetrain",
        "value": "4WD",
        "basis": "See source coverage and seller/photo evidence"
      }
    ],
    "sellerClaims": [
      "Historical tracker: J$3.3M, 92,437 km, 2015 Wildtrak 3.2, automatic 4WD",
      "User previously supplied original-page evidence that the item had sold"
    ],
    "photoFindings": [
      "Original URL returns 404 in this review; no new listing images were inspected",
      "A missing advert is not itself proof of sale; sold status rests on the prior user confirmation"
    ],
    "serviceHistory": "No freshly accessible service or repair evidence. Historical mileage and specifications have not been independently re-established.",
    "ownershipFit": "Age and your previously stated loan limit make it a weak financing match even if a different similar truck becomes available.",
    "comparison": "Historical J$3.3M is J$500,000 below #5, but the vehicle is four model years older and no longer a live contender.",
    "inspection": [
      "Only if a new resale appears: establish VIN, seller authority and current availability first",
      "Request new service records/current odometer and repeat a full mechanical/chassis inspection",
      "Recheck financing eligibility; do not reuse a historical valuation as a current approval"
    ],
    "unknowns": [
      "No live advert or current seller inventory",
      "Historical servicing, condition and trim unverified",
      "No current finance eligibility established"
    ],
    "sources": [
      {
        "label": "Original listing / dealer page",
        "url": "https://www.jacars.net/adv/2524288_ford-ranger-3-2l-2015/"
      }
    ]
  },
  "ranger-2019": {
    "checkedAt": "2026-10-24",
    "coverage": "Original link rechecked by direct retrieval and browser: 404. Prior user screenshot details retained as historical evidence; sale status not inferred.",
    "verdict": "Keep as an evidence-limited watchlist entry. The earlier user screenshots are useful, but this pass cannot establish a live advert or enough drivetrain detail to promote it.",
    "specifications": [
      {
        "label": "Year",
        "value": "2019",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Mileage (historical/advertised)",
        "value": "65000",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Transmission",
        "value": "Unconfirmed",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Drivetrain",
        "value": "Unconfirmed",
        "basis": "See source coverage and seller/photo evidence"
      }
    ],
    "sellerClaims": [
      "Historical user screenshots: J$4.5M negotiable, 65,000 km, 2019 2.2L diesel, Saint Ann, five seats, seller ssmith",
      "The same link previously opened for the user despite a runner 404"
    ],
    "photoFindings": [
      "This pass returns a 404 both through direct retrieval and the browser",
      "No fresh listing photos are available to confirm transmission, drivetrain or condition; the 404 must not be translated into sold status"
    ],
    "serviceHistory": "No service or accident records supplied. Earlier screenshot facts are retained as historical user-provided evidence.",
    "ownershipFit": "Could be a sensible price band if automatic/RHD/appropriate drivetrain and condition are established. Currently too many basics remain unresolved.",
    "comparison": "J$10,000 above #1 with 13,206 km more historically reported use. No demonstrated value advantage unless history/condition is materially better.",
    "inspection": [
      "Recover a working advert or seller-provided VIN/specification sheet and current odometer",
      "Confirm transmission, drivetrain, steering side and engine",
      "Obtain servicing/repair and ownership records before arranging an independent inspection",
      "Confirm availability directly before any valuation or deposit"
    ],
    "unknowns": [
      "Live source access and current availability",
      "Transmission/drivetrain/steering side and actual current mileage",
      "Service/accident history and mechanical condition"
    ],
    "sources": [
      {
        "label": "Original listing / dealer page",
        "url": "https://www.jacars.net/adv/2529943"
      }
    ]
  },
  "ranger-kig-2020": {
    "checkedAt": "2026-10-24",
    "coverage": "Historical dealer lead only. No unit-specific source URL/VIN/photos available; assessment is explicitly incomplete on vehicle facts.",
    "verdict": "Watchlist lead requiring basic identity and specification evidence. A KIG association alone is insufficient to assess J$5.85M value.",
    "specifications": [
      {
        "label": "Year",
        "value": "2020",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Mileage (historical/advertised)",
        "value": "Unconfirmed",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Transmission",
        "value": "Unconfirmed",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Drivetrain",
        "value": "Unconfirmed",
        "basis": "See source coverage and seller/photo evidence"
      }
    ],
    "sellerClaims": [
      "Historical user/dealer discussion: 2020 Ranger at J$5.85M, reportedly KIG serviced and traded because the customer upgraded"
    ],
    "photoFindings": [
      "No unit-specific listing URL, VIN or new photographs are available for this entry",
      "Do not attach photographs/specifications of another KIG Ranger to fill the gaps"
    ],
    "serviceHistory": "KIG-serviced is a historical dealer claim; obtain the actual VIN-matched service printout. No odometer or documented repair history is currently recorded.",
    "ownershipFit": "Dealer support could be useful, but the exact engine, gearbox, steering position and drivetrain must be known before judging suitability.",
    "comparison": "J$150,000 above #3 Wildtrak and J$350,000 above #2 Frontier, with mileage/specification unknown. There is no evidence-based reason to pay that premium yet.",
    "inspection": [
      "Request a dated written quote, VIN, current odometer, trim/powertrain and actual stock photos",
      "Obtain KIG service/repair history and warranty terms",
      "Confirm accident/ownership/title background",
      "If still competitive, perform independent engine/cooling/gearbox/chassis inspection and hill road test"
    ],
    "unknowns": [
      "Unit identity, availability, mileage and all major specifications",
      "Actual dealer servicing and warranty",
      "Accident history, mechanical condition and final price"
    ],
    "sources": []
  },
  "l200-instagram": {
    "checkedAt": "2026-10-24",
    "coverage": "Original Instagram caption freshly reread. Video review limited by sign-up overlay; previous user/photo findings retained as historical, not freshly verified.",
    "verdict": "Appealing budget/style option, but high age and modification uncertainty make it a conditional, high-inspection-risk choice for dependable daily use.",
    "specifications": [
      {
        "label": "Year",
        "value": "2009",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Mileage (historical/advertised)",
        "value": "Unconfirmed",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Transmission",
        "value": "Manual",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Drivetrain",
        "value": "Unconfirmed",
        "basis": "See source coverage and seller/photo evidence"
      }
    ],
    "sellerClaims": [
      "Fresh original Instagram caption confirms 2009 L200 and J$2.19M, JK Auto Dynamics at 7A North Avenue",
      "Seller claims functioning A/C/radio, solid engine/transmission and buy-and-drive condition"
    ],
    "photoFindings": [
      "Earlier user-provided photos showed matte-grey textured body treatment, aftermarket wheels/tyres and roof lighting; these remain historical visual evidence",
      "This pass reread the original caption; a sign-up overlay limited fresh video inspection, so no claim of a new complete video/frame review is made",
      "Prior manual/Sportero identification remains historical pending VIN and current cabin photos"
    ],
    "serviceHistory": "No service invoices, timing-drive service proof, cooling repair history or documented modification work supplied.",
    "ownershipFit": "The styling clearly appeals to you, and cash exposure is lower. Seventeen calendar years of age and unknown modifications conflict with the goal of avoiding repeated repair/downtime.",
    "comparison": "J$1.61M below #5, but ten model years older. Far outside your previous vehicle-loan age limit; a small financed balance is not proof that a secured vehicle loan is available.",
    "inspection": [
      "Obtain VIN, engine identity, actual odometer and proof of manual/4WD configuration",
      "Inspect under coating/wrap, inside bed, chassis and repair seams for corrosion/hidden damage",
      "Assess lift/wheels/tyres, steering geometry, suspension clearances, wiring/fuses and legality/insurance implications of modifications",
      "Independent cold-start, cooling/overheating, compression if indicated, clutch/gearbox and 4WD assessment",
      "Request maintenance invoices and price rectification before committing"
    ],
    "unknowns": [
      "Mileage, exact engine, genuine trim and functioning 4WD",
      "Condition hidden by body treatment, modifications and accident history",
      "Service records, financing route and seller-confirmed inventory"
    ],
    "sources": [
      {
        "label": "Original listing / dealer page",
        "url": "https://www.instagram.com/reel/DevUJOmR3-Y/"
      }
    ]
  },
  "maxus-2026": {
    "checkedAt": "2026-10-24",
    "coverage": "Fresh official local dealer model/inventory text reviewed. Catalogue evidence only: no allocated VIN, physical inspection or seller stock confirmation.",
    "verdict": "Worth retaining as the lowest-priced new pickup in the tracker, provided the manual gearbox and exact local configuration suit you.",
    "specifications": [
      {
        "label": "Year",
        "value": "2026",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Mileage (historical/advertised)",
        "value": "Unconfirmed",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Transmission",
        "value": "Manual",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Drivetrain",
        "value": "Unconfirmed",
        "basis": "See source coverage and seller/photo evidence"
      }
    ],
    "sellerClaims": [
      "Fresh China Wheels inventory lists T60 manual at J$5M",
      "The old MAXUS inventory URL points visitors to /vehicles.html; this current page was checked",
      "Dealer also lists a separate automatic T60 at J$5.79M; it is a comparison, not a new tracker entry"
    ],
    "photoFindings": [
      "Dealer inventory uses manufacturer press imagery rather than photographs of an allocated VIN",
      "Do not transfer the automatic T60’s 2.0L/8-speed specification or T60 MAX features to the J$5M manual"
    ],
    "serviceHistory": "New-vehicle status is a catalogue claim. Exact model year, warranty, service inclusions and stock need a written dealer order/quote.",
    "ownershipFit": "Warranty and low acquisition price could reduce uncertainty compared with an old truck, but test the manual in stop/start traffic and on the climb home. Parts lead times and warranty handling deserve concrete answers.",
    "comparison": "J$510,000 above #1 and J$1.2M above #5. It is also J$1.999M below Rely R8, but not established as an equivalent automatic/4WD specification.",
    "inspection": [
      "Get a VIN-specific quote confirming year, engine, drivetrain, RHD, cab/seats and delivered price",
      "Read written warranty/exclusions, required servicing, labour/parts coverage and service-package limits",
      "Ask for stocked wear parts, diagnostic support, lead times and a service-cost schedule",
      "Test clutch bite, hill start, low-speed gearing, braking and cabin comfort",
      "Verify new-loan eligibility and avoid using the dealer’s unrelated financing example as your staff-loan quote"
    ],
    "unknowns": [
      "Manual unit engine/drivetrain and exact year/equipment",
      "Warranty, service package, support performance and current stock",
      "All-in price and resale/depreciation uncertainty"
    ],
    "sources": [
      {
        "label": "Current model / inventory page",
        "url": "https://chinawheelsja.com/vehicles.html"
      },
      {
        "label": "Original listing / dealer page",
        "url": "https://www.chinawheelsja.com/maxus/inventory.html"
      }
    ]
  },
  "ranger-xl-kig-new": {
    "checkedAt": "2026-10-24",
    "coverage": "Fresh official local dealer model/inventory text reviewed. Catalogue evidence only: no allocated VIN, physical inspection or seller stock confirmation.",
    "verdict": "A more complete new option than the old tracker entry suggested: KIG explicitly advertises automatic 4WD at J$7.99M. Compare carefully with used trucks if the higher commitment is acceptable.",
    "specifications": [
      {
        "label": "Year",
        "value": "2026",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Mileage (historical/advertised)",
        "value": "Unconfirmed",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Transmission",
        "value": "6-speed automatic (dealer catalogue)",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Drivetrain",
        "value": "4WD (dealer catalogue)",
        "basis": "See source coverage and seller/photo evidence"
      }
    ],
    "sellerClaims": [
      "KIG 2026 XL page: starting J$7.99M; 2.0L diesel, six-speed automatic, 4WD and double cab",
      "10-inch SYNC 4A with CarPlay/Android Auto, cruise, rear camera, front/rear sensors, collision mitigation and lane-keeping are advertised",
      "Page states three-year/64,000-km service package and three-year/100,000-km manufacturer warranty"
    ],
    "photoFindings": [
      "Catalogue/marketing images, not an inspected stock unit; confirm each feature against the allocated VIN",
      "Advertised maximum towing/payload figures depend on configuration and should not be treated as simultaneous usable capacities"
    ],
    "serviceHistory": "No prior used history is expected for a genuinely new unregistered unit, but verify build date, delivery mileage, storage condition and warranty start date. Get the advertised service/warranty terms in writing.",
    "ownershipFit": "Automatic diesel 4WD and local dealer support align well with your needs. It is a practical equipment level without paying for the Wildtrak cabin, although the total loan is larger.",
    "comparison": "J$3.5M above #1 and J$2.49M above #2 Frontier. The longer new-vehicle term can soften instalments, but does not erase the larger principal or interest cost.",
    "inspection": [
      "Get VIN-specific delivered price, engine output, equipment and stock/build confirmation",
      "Confirm warranty start date, exclusions and exactly which scheduled services are included",
      "Obtain itemised servicing/tyre/insurance quotes and compare staff versus post-employment rate scenarios",
      "Road-test hill performance, A/C, cabin noise and seat comfort",
      "Inspect on delivery and record odometer, keys, manuals and any transport/storage damage"
    ],
    "unknowns": [
      "Actual allocated VIN/stock, final all-in price and detailed warranty conditions",
      "Exact output/trim equipment and delivery lead time",
      "Long-term repayment affordability at commercial-rate fallback"
    ],
    "sources": [
      {
        "label": "Current model / inventory page",
        "url": "https://kigjamaica.com/2026-ranger-xl/"
      },
      {
        "label": "Original listing / dealer page",
        "url": "https://kigjamaica.com/ford-brand/"
      }
    ]
  },
  "ranger-xlt-kig-new": {
    "checkedAt": "2026-10-24",
    "coverage": "Fresh official local dealer model/inventory text reviewed. Catalogue evidence only: no allocated VIN, physical inspection or seller stock confirmation.",
    "verdict": "Comfortable new automatic 4WD option, but materially above the used-truck budget. The added equipment needs to be worth its premium over the new XL for you.",
    "specifications": [
      {
        "label": "Year",
        "value": "2026",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Mileage (historical/advertised)",
        "value": "Unconfirmed",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Transmission",
        "value": "6-speed automatic (dealer catalogue)",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Drivetrain",
        "value": "4WD (dealer catalogue)",
        "basis": "See source coverage and seller/photo evidence"
      }
    ],
    "sellerClaims": [
      "KIG lists starting J$9.88M, 2.0L single-turbo diesel, 170 hp/405 Nm, six-speed automatic and electronic-shift 4x4",
      "Advertised 10-inch touchscreen, wireless charging, CarPlay/Android Auto, camera, keyless/push start, lane/pre-collision/blind-spot/cross-traffic aids and 17-inch alloys",
      "Dealer page lists leather J$9.88M and fabric J$10.095M; unusual pricing order needs written confirmation"
    ],
    "photoFindings": [
      "Dealer marketing photographs are not a VIN-specific inspection",
      "Do not assume the new XLT has the Wildtrak’s 2.0 bi-turbo/10-speed drivetrain or the same equipment as a 2019 XLT"
    ],
    "serviceHistory": "Request written warranty/service inclusions for this exact offer; do not automatically transfer the XL page’s service package or a different promotion to the XLT.",
    "ownershipFit": "Good everyday equipment and official support, but the higher principal means insurance and rate-reversion affordability deserve attention.",
    "comparison": "J$1.89M above new XL and J$1.64M below new Wildtrak starting asks. An XLT badge does not imply a larger engine: this local offer specifies the 170-hp/405-Nm single-turbo.",
    "inspection": [
      "Confirm leather/fabric quote discrepancy, actual VIN/model year, stock and final delivered price",
      "Get warranty/service coverage and maintenance/insurance costs in writing",
      "Test driver aids, phone integration, cameras and hill performance",
      "Compare total cost at new staff and fallback commercial rates before paying a deposit"
    ],
    "unknowns": [
      "Allocated VIN/year, upholstery price and current stock",
      "Exact warranty/service inclusions and equipment",
      "All-in cost and future commercial-rate affordability"
    ],
    "sources": [
      {
        "label": "Current model / inventory page",
        "url": "https://kigjamaica.com/ranger-xlt/"
      },
      {
        "label": "Original listing / dealer page",
        "url": "https://kigjamaica.com/ford-brand/"
      }
    ]
  },
  "ranger-wildtrak-kig-new": {
    "checkedAt": "2026-10-24",
    "coverage": "Fresh official local dealer model/inventory text reviewed. Catalogue evidence only: no allocated VIN, physical inspection or seller stock confirmation.",
    "verdict": "A premium new choice with more performance and equipment, but the financial stretch is large relative to your used shortlist.",
    "specifications": [
      {
        "label": "Year",
        "value": "2026",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Mileage (historical/advertised)",
        "value": "Unconfirmed",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Transmission",
        "value": "10-speed automatic (dealer catalogue)",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Drivetrain",
        "value": "4WD (dealer catalogue)",
        "basis": "See source coverage and seller/photo evidence"
      }
    ],
    "sellerClaims": [
      "KIG starting J$11.52M; 2.0L bi-turbo diesel, 210 hp/500 Nm, ten-speed automatic and electronic-shift 4x4",
      "Dealer advertises locking rear axle, Wildtrak leather/power seats, dual-zone climate, 12-inch screen, wireless charging and driver-assist features",
      "Page says 20-inch wheel trim but also contains a contradictory 18x7.5 wheel line; exact wheel/tyre package needs clarification"
    ],
    "photoFindings": [
      "Marketing imagery is not evidence of a particular available unit’s specification",
      "This newer powertrain differs from the 3.2L/six-speed Wildtraks on the used shortlist; it is not just cosmetic trim"
    ],
    "serviceHistory": "Obtain VIN-specific warranty/service terms. New status does not remove servicing costs, tyre expense or warranty exclusions.",
    "ownershipFit": "More cabin comfort and power are attractive; larger wheels and advanced equipment can raise replacement/repair costs. Try ride quality on your usual roads.",
    "comparison": "J$1.64M above the new XLT and J$5.82M above the used 2021 Wildtrak. Lower instalments from a longer term should not obscure that purchase-price difference.",
    "inspection": [
      "Get a written VIN/model-year quote resolving the wheel-size contradiction and exact equipment",
      "Confirm engine/ten-speed servicing schedule, warranty/exclusions and service inclusions",
      "Price tyres, insurance and planned maintenance; test ride quality and driver aids",
      "Compare total repayments and fallback-rate affordability with XLT/XL and used choices"
    ],
    "unknowns": [
      "Allocated VIN/year/stock, wheel package and final price",
      "Written warranty/service coverage and delivery timing",
      "Long-term affordability and depreciation"
    ],
    "sources": [
      {
        "label": "Current model / inventory page",
        "url": "https://kigjamaica.com/ranger-wildtrak/"
      },
      {
        "label": "Original listing / dealer page",
        "url": "https://kigjamaica.com/ford-brand/"
      }
    ]
  },
  "rely-r8-new": {
    "checkedAt": "2026-10-24",
    "coverage": "Fresh official local dealer model/inventory text reviewed. Catalogue evidence only: no allocated VIN, physical inspection or seller stock confirmation.",
    "verdict": "A well-equipped new contender at J$6.999M, with a clearer advertised local package than the old entry. Retain as a warranty/support proposition that still needs a dealer due-diligence visit.",
    "specifications": [
      {
        "label": "Year",
        "value": "2027",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Mileage (historical/advertised)",
        "value": "Unconfirmed",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Transmission",
        "value": "8-speed automatic",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Drivetrain",
        "value": "4WD",
        "basis": "See source coverage and seller/photo evidence"
      }
    ],
    "sellerClaims": [
      "TWA advertises 2027, 2.3L/2,298cc turbo diesel, 120 kW/420 Nm, eight-speed automatic, 4WD, five seats and 1,000-kg payload",
      "Current full retail J$6.999M; J$6.65M is explicitly a duty-concession price, not a general retail discount",
      "Advertised five-year/200,000-km warranty, three-year/42,500-km service package, five DuraTrac tyres and roll bar",
      "15.6-inch display, phone integration, ventilated seats, power driver seat, 360 camera and ADAS are advertised, subject to final Jamaica specification"
    ],
    "photoFindings": [
      "Website shows a 2H/4H/4L selector and a modern leather-trimmed cabin in marketing imagery",
      "These are catalogue representations, not proof of actual stocked-unit specification, reliability or warranty fulfilment"
    ],
    "serviceHistory": "Get the full warranty contract, service interval/cost schedule and coverage exclusions. A long warranty is useful only if parts, diagnostics and repair turnaround are effective.",
    "ownershipFit": "Automatic diesel 4WD and comfort equipment fit your commute/hill well on paper. New model/dealer support, parts inventory and future resale remain bigger unknowns than the feature count.",
    "comparison": "J$991,000 below new Ranger XL and essentially the same price as the used 2025 Triton. Compare warranty coverage and parts support, not just monthly marketing figures.",
    "inspection": [
      "Confirm VIN/actual stock, RHD, local safety specification and delivered retail quote",
      "Read warranty exclusions, claim process and who pays diagnostics/labour; confirm all service-package inclusions",
      "Ask to see stocked filters/brakes/body parts, diagnostic equipment and typical parts lead times",
      "Test hill starts, gearbox behaviour, A/C, seat comfort, cameras/ADAS and phone integration",
      "Compare staff-loan calculation with the advertised J$85,000/month offer only after obtaining its deposit/rate/term"
    ],
    "unknowns": [
      "Long-term local reliability, parts turnaround and resale values",
      "Actual unit specification and written warranty/service conditions",
      "Final all-in quote and seller stock"
    ],
    "sources": [
      {
        "label": "Original listing / dealer page",
        "url": "https://relyja.com/"
      }
    ]
  },
  "triton-l200-new": {
    "checkedAt": "2026-10-24",
    "coverage": "Fresh official local dealer model/inventory text reviewed. Catalogue evidence only: no allocated VIN, physical inspection or seller stock confirmation.",
    "verdict": "Established-dealer new alternative at an advertised J$8.35M starting price, but the website mixes specifications from different years. Obtain a coherent written quote before comparing powertrains.",
    "specifications": [
      {
        "label": "Year",
        "value": "2027",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Mileage (historical/advertised)",
        "value": "Unconfirmed",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Transmission",
        "value": "Unconfirmed",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Drivetrain",
        "value": "Unconfirmed",
        "basis": "See source coverage and seller/photo evidence"
      }
    ],
    "sellerClaims": [
      "Mitsubishi Jamaica current page title is 2027 Triton and starting price J$8.35M",
      "Page explicitly associates Super Select 4WD-II with GLS/GSR; it is not proof the starting-price trim includes it",
      "Same page references 2023 L200 safety and five-speed automatic/six-speed manual copy, so those transmission lines are not reliable confirmation of a 2027 unit"
    ],
    "photoFindings": [
      "Catalogue photographs represent a model range; no inspected VIN/stock unit is attached",
      "Do not copy all GLS/GSR comfort or off-road features into the starting-price variant"
    ],
    "serviceHistory": "New warranty and servicing need a dated dealer document with exact kilometre/time limits, exclusions and start date.",
    "ownershipFit": "Strong practical category fit and a local official dealer, but actual trim, automatic transmission and 4WD system determine how useful the J$8.35M offer is for you.",
    "comparison": "J$360,000 above new Ranger XL, J$1.351M above Rely and J$1.35M above the used 2025 Triton. Those are starting-price comparisons, not equivalent-specification quotes.",
    "inspection": [
      "Get VIN/model-year, trim, engine, automatic gear count and exact 4WD system in one signed specification/quotation",
      "Resolve mixed-year website copy and confirm whether J$8.35M includes your required configuration",
      "Get warranty, service schedule, parts support and full delivered price",
      "Test comfort, hill performance and correct operation of the exact 4WD system",
      "Compare insurance/servicing and total loan cost against the new XL and used Triton"
    ],
    "unknowns": [
      "Exact starting-price trim and current stock",
      "Powertrain, 4WD hardware, safety equipment and coherent local specifications",
      "Warranty/service package and final price"
    ],
    "sources": [
      {
        "label": "Current model / inventory page",
        "url": "https://mitsubishi-motors.com.jm/vehicle/2026-triton/"
      },
      {
        "label": "Original listing / dealer page",
        "url": "https://mitsubishi-motors.com.jm/"
      }
    ]
  },
  "frontier-fidelity-new": {
    "checkedAt": "2026-10-24",
    "coverage": "Fresh official local dealer model/inventory text reviewed. Catalogue evidence only: no allocated VIN, physical inspection or seller stock confirmation.",
    "verdict": "Retain as price/specification unconfirmed. The existing J$8.8M number remains an indicative historical third-party figure, not a dealer-verified offer.",
    "specifications": [
      {
        "label": "Year",
        "value": "2026",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Mileage (historical/advertised)",
        "value": "Unconfirmed",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Transmission",
        "value": "Unconfirmed",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Drivetrain",
        "value": "Unconfirmed",
        "basis": "See source coverage and seller/photo evidence"
      }
    ],
    "sellerClaims": [
      "Official Nissan Jamaica site advertises Frontier diesel and a range including automatic 2WD and automatic/manual 4WD versions",
      "The page still labels its version comparison 2021 and embeds dated pricing data; do not treat that as a current 2026/2027 quote",
      "Current display mentions 2.5L diesel; exact local stock engine/model year still needs confirmation"
    ],
    "photoFindings": [
      "Official marketing photos show a model range rather than an allocated truck",
      "Do not infer that the J$8.8M historical 4x2 estimate buys a 4x4, premium trim or a US petrol Frontier"
    ],
    "serviceHistory": "Require new-vehicle warranty and service terms for the actual quote. No current VIN, build date or dealer warranty document is attached.",
    "ownershipFit": "Potentially a suitable local-supported diesel pickup, but value and affordability cannot be confidently judged without a comparable automatic 4WD quote.",
    "comparison": "The stored J$8.8M indicative price is J$810,000 above Ranger XL, but this is not a verified like-for-like comparison. Do not rank on that number alone.",
    "inspection": [
      "Request a dated Fidelity quote for automatic diesel 4WD, confirming year, engine, trim, VIN/stock and RHD",
      "Confirm exact safety/comfort equipment, warranty and service inclusions",
      "Clarify currency, taxes/fees, accessories and full delivered price",
      "Test drive the quoted configuration and compare total repayments/insurance with XL/Triton/Rely"
    ],
    "unknowns": [
      "Dealer-verified current price; J$8.8M remains unconfirmed",
      "Exact year/engine/trim, gearbox, drivetrain and stock",
      "Warranty, service package and all-in cost"
    ],
    "sources": [
      {
        "label": "Current model / inventory page",
        "url": "https://www.nissanjamaica.com/vehicles/new/frontier.html"
      },
      {
        "label": "Original listing / dealer page",
        "url": "https://www.nissanjamaica.com/"
      }
    ]
  },
  "frontier-np300-2020-facebook": {
    "checkedAt": "2026-10-24",
    "coverage": "Fresh signed-in Facebook listing text and selected photos 1, 7, 8 and 10 of 10 reviewed. Other photos not individually assessed; no seller contacted or physical inspection performed.",
    "verdict": "A better-specified watchlist lead after the photo review: manual/RHD and 4x4 badging are visible, and a mileage photograph supports the rounded 48,000-km claim.",
    "specifications": [
      {
        "label": "Year",
        "value": "2020",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Mileage (historical/advertised)",
        "value": "48000",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Transmission",
        "value": "Manual",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Drivetrain",
        "value": "4WD (XE 4x4 badge; verify operation)",
        "basis": "See source coverage and seller/photo evidence"
      }
    ],
    "sellerClaims": [
      "Fresh signed-in listing: J$4.9M negotiable, 2020 NP300, manual, 29k miles/48k km, St Catherine",
      "Seller claims immaculate condition, four-month-old Maxxis A/T tyres and a Roll & Lock cover"
    ],
    "photoFindings": [
      "Selected photos 1, 7, 8 and 10 reviewed from ten listed photos",
      "Photo 1 shows XE 4x4 tailgate badging, double cab, side steps, alloy wheels and a bed cover",
      "Photo 7 displays 29,721 miles, approximately 47,831 km; consistent with rounded 48,000 km, without proving lifetime mileage accuracy",
      "Photo 8 clearly shows a manual gear lever and RHD steering. Seat covers limit upholstery assessment",
      "Engine capacity/fuel type and functioning 4WD are not established by these selected images"
    ],
    "serviceHistory": "No dated maintenance, accident or ownership records supplied. Tyre age/fitment claims require invoices/date-code checks.",
    "ownershipFit": "Low stated mileage and diesel-pickup-style package are attractive, but exact engine/fuel must be confirmed. Test whether manual shifting suits stop/start traffic and your steep approach home.",
    "comparison": "J$600,000 below #2 Frontier while three model years older and manual, with about 6,000 km less rounded mileage. J$410,000 above #1; history and manual preference decide whether it improves the shortlist.",
    "inspection": [
      "VIN-confirm year, engine/fuel and genuine XE 4x4 hardware; demonstrate 4WD/low range appropriately",
      "Get current odometer, service/repair/import records and match mileage units",
      "Check clutch slip/bite, flywheel noises, hill starts, cold/hot engine and cooling under load",
      "Inspect frame/repairs, suspension, tyre dates/sizes and bed-cover operation",
      "Confirm seller availability and 2027 finance eligibility for a 2020 model"
    ],
    "unknowns": [
      "Engine/fuel, service records and functioning 4WD",
      "Accident history and odometer continuity",
      "Clutch/gearbox condition, exact equipment and availability"
    ],
    "sources": [
      {
        "label": "Original listing / dealer page",
        "url": "https://www.facebook.com/marketplace/item/3563490227161748/?ref=search&referral_code=null&referral_story_type=post&tracking=browse_serp%3A1118bd2d-57d3-4191-8f6c-88ec348bfefc"
      }
    ]
  },
  "hilux-2021-facebook": {
    "checkedAt": "2026-10-24",
    "coverage": "Fresh signed-in Facebook listing text and selected photos 1, 4, 5, 6 and 7 of 7 reviewed. Other photos not individually assessed; no seller contacted or physical inspection performed.",
    "verdict": "Keep as a preliminary watchlist lead. Photos now support automatic/RHD, but mileage, actual engine and drivetrain remain unresolved at J$5.5M.",
    "specifications": [
      {
        "label": "Year",
        "value": "2021",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Mileage (historical/advertised)",
        "value": "Unconfirmed",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Transmission",
        "value": "Automatic (photo evidence; seller states 6-speed)",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Drivetrain",
        "value": "Unconfirmed",
        "basis": "See source coverage and seller/photo evidence"
      }
    ],
    "sellerClaims": [
      "Fresh signed-in Hunt Sales listing: 2021 Hilux, J$5.5M negotiable, St Catherine; seller says title stamped and ready",
      "Description lists generic 2.4L/2.8L engine and 2WD/4WD options plus six-speed automatic; it does not specify which engine/drivetrain this truck has"
    ],
    "photoFindings": [
      "Selected photos 1, 4, 5, 6 and 7 reviewed from seven listed photos",
      "Photo 6 supports RHD steering, automatic selector, touchscreen and leather-style seating",
      "Exterior shows a double cab and rear Revo badging; neither Revo styling nor a generic description proves 4WD or engine size",
      "No current readable odometer or service documents seen in the selected photos"
    ],
    "serviceHistory": "No service history supplied. Title-ready wording is a seller claim requiring paperwork/lien checks; it says nothing about maintenance or accident repairs.",
    "ownershipFit": "Automatic/RHD is promising for your commute, but price cannot be judged properly without mileage and the exact engine/drivetrain.",
    "comparison": "Same J$5.5M ask as #2 Frontier, which already states 2023/54,000 km/diesel4WD. The Hilux needs comparable facts before earning a higher position.",
    "inspection": [
      "Request current odometer, VIN/model code and exact engine/fuel/drivetrain confirmation",
      "Obtain service, import/accident and title/lien records",
      "Independent cold/hot engine/gearbox/cooling evaluation and scan",
      "Inspect chassis/body repairs, suspension, tyres and electronics",
      "Test any claimed 4WD system rather than inferring it from trim"
    ],
    "unknowns": [
      "Mileage, actual engine and drivetrain",
      "VIN-confirmed trim, service/accident history and clear title",
      "Actual condition and seller-confirmed inventory"
    ],
    "sources": [
      {
        "label": "Original listing / dealer page",
        "url": "https://www.facebook.com/marketplace/item/1654095633006023/?ref=search&referral_code=null&referral_story_type=post&tracking=browse_serp%3Ab088eb5b-02be-4681-b6e3-12025b98980c"
      }
    ]
  },
  "l200-2021-facebook": {
    "checkedAt": "2026-10-24",
    "coverage": "Fresh signed-in Facebook listing text and selected photos 1, 5, 6 and 8 of 8 reviewed. Other photos not individually assessed; no seller contacted or physical inspection performed.",
    "verdict": "Improved watchlist lead: photos support automatic/RHD and 4WD equipment, but the missing mileage and engine prevent a fair value judgment at J$5.25M.",
    "specifications": [
      {
        "label": "Year",
        "value": "2021",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Mileage (historical/advertised)",
        "value": "Unconfirmed",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Transmission",
        "value": "Automatic (photo evidence)",
        "basis": "See source coverage and seller/photo evidence"
      },
      {
        "label": "Drivetrain",
        "value": "4WD (selector/badging; verify operation)",
        "basis": "See source coverage and seller/photo evidence"
      }
    ],
    "sellerClaims": [
      "Fresh signed-in Ewart Parkes listing: 2021 Mitsubishi Triton/L200, J$5.25M, St Andrew, used-like-new",
      "In-stock label is a listing status, not a direct seller availability confirmation"
    ],
    "photoFindings": [
      "Selected photos 1, 5, 6 and 8 reviewed from eight listed photos",
      "Exterior shows a double cab, side steps, alloys and a 4x4 bed marking",
      "Photo 5 supports RHD steering, an automatic shifter, rotary 4WD control and a touchscreen",
      "Photos 6 and 8 show leather-style rear seating, push start and mirror controls; exact trim/4WD mode labels and equipment operation require confirmation",
      "No usable odometer, engine identification or service documentation is supplied in this review"
    ],
    "serviceHistory": "No service or accident records shown. Like-new wording describes the seller’s assessment, not independent condition.",
    "ownershipFit": "Automatic/RHD and apparent 4WD hardware are a good configuration. Ask about mileage before travelling to view; a high-mileage truck and a low-mileage one are not equivalent at this ask.",
    "comparison": "J$250,000 below #2 Frontier with unknown mileage and a two-year-older stated model. Separate from the user-confirmed sold 2022 L200; do not copy its mileage or specifications.",
    "inspection": [
      "Get VIN, current odometer, exact engine and automatic/4WD specification",
      "Ask for service/repair/ownership records and written availability",
      "Test cooling, automatic changes and 4WD/low range; inspect frame and accident repairs",
      "Check tyres, suspension and all advertised/visible electronics",
      "Confirm model year and title/lien status; compare price again once mileage is known"
    ],
    "unknowns": [
      "Mileage, engine/fuel specification and exact trim/4WD system",
      "Service and accident history",
      "Physical condition and seller availability"
    ],
    "sources": [
      {
        "label": "Original listing / dealer page",
        "url": "https://www.facebook.com/marketplace/item/1070050685685439/?ref=search&referral_code=null&referral_story_type=post&tracking=browse_serp%3A82aa130a-9ea9-42fc-8576-315d81a23baf"
      }
    ]
  }
};
