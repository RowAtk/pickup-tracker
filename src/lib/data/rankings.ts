import type { Vehicle } from './vehicles';

export type RankingId = 'original' | 'long-term' | 'gemini' | 'chatgpt';
type Entry = { id: string; reason: string };
type Perspective = { id: RankingId; label: string; description: string; entries: Entry[] };
const entries = (rows: [string, string][]): Entry[] => rows.map(([id, reason]) => ({ id, reason }));
export const rankings: Perspective[] = [
  { id: 'original', label: 'Original shortlist', description: 'The existing approved shortlist. Separate perspectives do not change shortlist/watchlist membership.', entries: [] },
  { id: 'long-term', label: 'Long-Term Ownership', description: 'Prioritizes ownership beyond a 4–6 year loan. Higher ranks may cost more; availability remains unconfirmed.', entries: entries([
    ['frontier-2023', ''], ['maxus-t60-auto-2026', ''], ['triton-2025', ''], ['dealer-serviced-2529403', ''], ['wildtrak-2021', ''], ['ranger-top-2019', ''], ['frontier-np300-2020-facebook', ''], ['l200-2021-facebook', ''], ['hilux-2021-facebook', ''], ['maxus-2026', '']
  ]) },
  { id: 'gemini', label: 'Gemini second opinion', description: 'Gemini’s supplied top ten, recorded October 28, 2026. Order preserved; its unverified specifications and incorrect financing claims are not adopted. The calculator uses the tracker’s planning terms.', entries: entries([
    ['frontier-2023', 'Gemini’s overall balance of model year, price and advertised configuration. History and condition remain unverified.'],
    ['maxus-t60-auto-2026', 'Gemini’s preferred new automatic for cash flow. The 102-month term, final price, stock and warranty need confirmation.'],
    ['ranger-top-2019', 'Low advertised mileage and J$4.49M asking price; genuine trim, service history and financing eligibility remain provisional.'],
    ['navara-pro4x-2022-2530201', 'Gemini values its advertised equipment and low displayed mileage. Exact trim, engine and gear count are not established.'],
    ['ranger-2019-2529367', 'Lower-price established-model option; 130,109 km and missing service documentation require a repair reserve.'],
    ['gwm-pseries-2023-2514157', 'Strong price/year proposition. Confirm history, modification scope, local parts costs and support.'],
    ['dealer-serviced-2529403', 'Mid-price alternative whose dealer-servicing claim needs actual records.'],
    ['frontier-np300-2020-facebook', 'Low photographed mileage reading and manual gearbox. Engine/fuel details, history and actual 4WD operation need confirmation.'],
    ['maxus-t60-max-2026', 'Premium new alternative; warranty and local specification need confirmation. Longer financing does not erase the higher price.'],
    ['wildtrak-2021', 'Well-equipped backup at a premium. Correct planning term is five years in 2026: about J$77,265/month at 3% with J$1.4M down, before fees and insurance.']
  ]) },
  { id: 'chatgpt', label: 'ChatGPT recommendation', description: 'Provisional inspection and purchase priorities, October 28, 2026: budget headroom, history, practical suitability and support. J$1.4M planning deposit / J$1.5M maximum. Rankings are judgments, not verified condition scores.', entries: entries([
    ['frontier-2023', 'Best overall starting point: newer automatic diesel 4WD at J$5.5M. Inspect records and condition; the commercial-rate scenario is tighter than the staff payment.'],
    ['maxus-t60-auto-2026', 'Best new automatic to investigate. Compare a written on-road quote, warranty and service costs; do not choose solely for the low payment over 8.5 years.'],
    ['gwm-pseries-2023-2514157', 'High inspection priority at J$3.99M: newer than the budget Rangers with substantial payment headroom. Promotion depends on condition, history and practical parts support.'],
    ['ranger-2019-2529367', 'Budget alternative at J$3.8M, with an established model/service route. Higher mileage needs records and a repair reserve; confirm 2019 loan eligibility before committing.'],
    ['ranger-top-2019', 'Compelling J$4.49M / 51,794-km paper proposition. Pay the premium over the XLT only if condition and odometer history support it; 2027 eligibility is a concern.'],
    ['dealer-serviced-2529403', 'J$5.2M alternative if the servicing claim is documented. The newer J$5.5M Frontier has much lower advertised mileage.'],
    ['navara-pro4x-2022-2530201', 'Worth inspecting, but J$6M and modifications need justification. Differential-lock equipment alone does not earn priority for a paved hill commute.'],
    ['triton-2025', 'Low-mileage, newer used alternative at J$7M. Staff payments fit narrowly in 2026; a shorter age-band term in 2027 and commercial rates weaken affordability.'],
    ['rely-r8-new', 'New automatic comparison around J$7M; it is within the staff loan-payment target under the supplied new-vehicle term. Written warranty, support and resale evidence must justify the commitment.'],
    ['maxus-t60-max-2026', 'Higher-budget new benchmark. Extra performance/equipment must justify J$1.61M over the standard automatic; the commercial-rate payment exceeds target.']
  ]) }
];
export const rankingById = (id: RankingId) => rankings.find(r => r.id === id)!;
export const rankFor = (vehicle: Vehicle, id: RankingId): number | undefined => {
  if (id === 'original') return vehicle.rank;
  const index = rankingById(id).entries.findIndex(entry => entry.id === vehicle.id);
  return index < 0 ? undefined : index + 1;
};
export const reasonFor = (vehicle: Vehicle, id: RankingId) => rankingById(id).entries.find(entry => entry.id === vehicle.id)?.reason;
