export type Vehicle = {
  id: string;
  title: string;
  year: number;
  priceJmd: number;
  mileageKm?: number;
  rank?: number;
  status: 'shortlist' | 'watchlist';
  transmission?: string;
  drivetrain?: string;
  listingUrl?: string;
  imageUrl?: string;
  notes?: string;
  concerns?: string[];
  positives?: string[];
};
export const vehicles: Vehicle[] = [
  { id: 'f150-2017', title: 'Ford F-150', year: 2017, priceJmd: 2800000, status: 'shortlist', notes: 'Previously reduced to J$2.8M. Verify listing status.' },
  { id: 'frontier-2023', title: 'Nissan Frontier 2.5 Diesel', year: 2023, priceJmd: 5500000, mileageKm: 54000, rank: 3, status: 'shortlist', drivetrain: '4WD', listingUrl: 'https://www.jacars.net/adv/2526654', notes: '2023 diesel 4WD candidate.', positives: ['Newer model year', 'Low reported mileage', '4WD'], concerns: ['Confirm service history and diesel system condition'] },
  { id: 'wildtrak-2021', title: 'Ford Ranger Wildtrak', year: 2021, priceJmd: 5700000, mileageKm: 58419, rank: 4, status: 'shortlist', listingUrl: 'https://www.jacars.net/adv/2528226', notes: 'Replaced the earlier 92,000 km Wildtrak.', positives: ['Lower mileage than previous Wildtrak listing'], concerns: ['Verify service history and condition'] },
  { id: 'frontier-midnight-2019', title: 'Nissan Frontier SV Midnight Edition', year: 2019, priceJmd: 3500000, mileageKm: 108000, rank: 9, status: 'shortlist' },
  { id: 'maxus-2026', title: 'MAXUS T60', year: 2026, priceJmd: 5000000, rank: 10, status: 'shortlist', transmission: 'Manual' },
  { id: 'ranger-kig-2020', title: 'Ford Ranger (KIG)', year: 2020, priceJmd: 5850000, status: 'watchlist', notes: 'Dealer says serviced by KIG; seller upgrading.' },
  { id: 'ranger-2014', title: 'Ford Ranger 3.2L', year: 2014, priceJmd: 2350000, status: 'watchlist', listingUrl: 'https://www.jacars.net/adv/2530247_ford-ranger-3-2l-2014/' },
  { id: 'ranger-2019', title: 'Ford Ranger', year: 2019, priceJmd: 4500000, status: 'watchlist', listingUrl: 'https://www.jacars.net/adv/2529943' },
  { id: 'hilux-2019', title: 'Toyota Hilux 2.4L', year: 2019, priceJmd: 0, status: 'watchlist', listingUrl: 'https://www.jacars.net/adv/2521675', notes: 'Local listing; price needs confirmation.' },
  { id: 'l200-instagram', title: 'Mitsubishi L200 (modified)', year: 0, priceJmd: 0, status: 'watchlist', listingUrl: 'https://www.instagram.com/reel/DevUJOmR3-Y/', notes: 'Age, maintenance, and modifications require review. Price and year unverified.', concerns: ['Modification quality', 'Maintenance history', 'Age and parts condition'] }
];
