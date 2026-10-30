import type { Vehicle } from './vehicles';

export type RankingId = 'original' | 'long-term' | 'gemini';
type Entry = { id: string; reason: string };
type Perspective = { id: RankingId; label: string; description: string; entries: Entry[] };
export const rankings: Perspective[] = [
  {
    "id": "original",
    "label": "Main shortlist · Hybrid",
    "description": "Updated October 28, 2026 using Gemini’s second opinion plus ChatGPT’s affordability and evidence corrections. Provisional purchase priorities; J$1.4M planning deposit / J$1.5M maximum.",
    "entries": [
      {
        "id": "frontier-2023",
        "reason": "Best overall starting point: newer automatic diesel 4WD at J$5.5M. Inspect records and condition; the commercial-rate scenario is tighter than the staff payment."
      },
      {
        "id": "maxus-t60-auto-2026",
        "reason": "Best new automatic to investigate. Compare a written on-road quote, warranty and service costs; do not choose solely for the low payment over 8.5 years."
      },
      {
        "id": "gwm-pseries-2023-2514157",
        "reason": "High inspection priority at J$3.99M: newer than the budget Rangers with substantial payment headroom. Promotion depends on condition, history and practical parts support."
      },
      {
        "id": "ranger-2019-2529367",
        "reason": "Budget alternative at J$3.8M, with an established model/service route. Higher mileage needs records and a repair reserve; confirm 2019 loan eligibility before committing."
      },
      {
        "id": "ranger-top-2019",
        "reason": "Jusdrive offer reduced to J$4.1M after the user’s October 29 visit; cosmetic condition satisfactory to user. Advertised 51,794 km, service history and mechanical condition still need independent verification; confirm 2019 financing eligibility."
      },
      {
        "id": "dealer-serviced-2529403",
        "reason": "J$5.2M alternative if the servicing claim is documented. The newer J$5.5M Frontier has much lower advertised mileage."
      },
      {
        "id": "navara-pro4x-2022-2530201",
        "reason": "Worth inspecting, but J$6M and modifications need justification. Differential-lock equipment alone does not earn priority for a paved hill commute."
      },
      {
        "id": "triton-2025",
        "reason": "Low-mileage, newer used alternative at J$7M. Staff payments fit narrowly in 2026; a shorter age-band term in 2027 and commercial rates weaken affordability."
      },
      {
        "id": "rely-r8-new",
        "reason": "New automatic comparison around J$7M; it is within the staff loan-payment target under the supplied new-vehicle term. Written warranty, support and resale evidence must justify the commitment."
      },
      {
        "id": "maxus-t60-max-2026",
        "reason": "Higher-budget new benchmark. Extra performance/equipment must justify J$1.61M over the standard automatic; the commercial-rate payment exceeds target."
      }
    ]
  },
  {
    "id": "long-term",
    "label": "Long-Term Ownership",
    "description": "Prioritizes ownership beyond a 4–6 year loan. Higher ranks may cost more; availability remains unconfirmed.",
    "entries": [
      {
        "id": "frontier-2023",
        "reason": ""
      },
      {
        "id": "maxus-t60-auto-2026",
        "reason": ""
      },
      {
        "id": "triton-2025",
        "reason": ""
      },
      {
        "id": "ranger-xlt-2022-2527799",
        "reason": "Newly discovered 2022 2.2L diesel automatic 4WD with 32,000 km advertised and dealer service claimed. Category shows J$5.6M but individual advert shows J$5.8M; confirm price, records and mechanical condition before promotion beyond watchlist. 8% stress payments are tight."
      },
      {
        "id": "dealer-serviced-2529403",
        "reason": ""
      },
      {
        "id": "wildtrak-2021",
        "reason": ""
      },
      {
        "id": "ranger-top-2019",
        "reason": ""
      },
      {
        "id": "frontier-np300-2020-facebook",
        "reason": ""
      },
      {
        "id": "l200-2021-facebook",
        "reason": ""
      },
      {
        "id": "hilux-2021-facebook",
        "reason": ""
      },
     ]
  },
  {
    "id": "gemini",
    "label": "Gemini second opinion",
    "description": "Gemini’s supplied top ten, recorded October 28, 2026. Order preserved; its unverified specifications and incorrect financing claims are not adopted. The calculator uses the tracker’s planning terms.",
    "entries": [
      {
        "id": "frontier-2023",
        "reason": "Gemini’s overall balance of model year, price and advertised configuration. History and condition remain unverified."
      },
      {
        "id": "maxus-t60-auto-2026",
        "reason": "Gemini’s preferred new automatic for cash flow. The 102-month term, final price, stock and warranty need confirmation."
      },
      {
        "id": "ranger-top-2019",
        "reason": "Low advertised mileage and J$4.49M asking price; genuine trim, service history and financing eligibility remain provisional."
      },
      {
        "id": "navara-pro4x-2022-2530201",
        "reason": "Gemini values its advertised equipment and low displayed mileage. Exact trim, engine and gear count are not established."
      },
      {
        "id": "ranger-2019-2529367",
        "reason": "Lower-price established-model option; 130,109 km and missing service documentation require a repair reserve."
      },
      {
        "id": "gwm-pseries-2023-2514157",
        "reason": "Strong price/year proposition. Confirm history, modification scope, local parts costs and support."
      },
      {
        "id": "dealer-serviced-2529403",
        "reason": "Mid-price alternative whose dealer-servicing claim needs actual records."
      },
      {
        "id": "frontier-np300-2020-facebook",
        "reason": "Low photographed mileage reading and manual gearbox. Engine/fuel details, history and actual 4WD operation need confirmation."
      },
      {
        "id": "maxus-t60-max-2026",
        "reason": "Premium new alternative; warranty and local specification need confirmation. Longer financing does not erase the higher price."
      },
      {
        "id": "wildtrak-2021",
        "reason": "Well-equipped backup at a premium. Correct planning term is five years in 2026: about J$77,265/month at 3% with J$1.4M down, before fees and insurance."
      }
    ]
  }
];
export const rankingById = (id: RankingId) => rankings.find(r => r.id === id)!;
export const rankFor = (vehicle: Vehicle, id: RankingId): number | undefined => {
  if (id === 'original') return vehicle.rank;
  const index = rankingById(id).entries.findIndex(entry => entry.id === vehicle.id);
  return index < 0 ? undefined : index + 1;
};
export const reasonFor = (vehicle: Vehicle, id: RankingId) => rankingById(id).entries.find(entry => entry.id === vehicle.id)?.reason;

