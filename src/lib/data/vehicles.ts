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
  sourceKind?: 'listing' | 'dealer-catalogue';
  imageUrl?: string;
  imageCredit?: string;
  notes?: string;
  concerns?: string[];
  positives?: string[];
};
export const vehicles: Vehicle[] = [
  { id:'ranger-top-2019', title:'Ford Ranger 3.2 4WD', year:2019, priceJmd:4490000, mileageKm:51794, rank:1, status:'shortlist', transmission:'Automatic', listingUrl:'https://www.jacars.net/adv/2523078_ford-ranger-3-2l-2019/', drivetrain:'4WD', notes:'Matched JusDrive advert: 51,794 km, J$4.49M, 3.2 diesel 4WD automatic.' },
  { id:'l200-2022', title:'Mitsubishi L200 4WD', year:2022, priceJmd:4999000, mileageKm:70100, rank:2, status:'shortlist', transmission:'Automatic', listingUrl:'https://www.jacars.net/adv/2526875_mitsubishi-triton-l200-2-8l-2022/', drivetrain:'4WD', notes:'Matched 70,100 km and J$4,999,000; 2.8L automatic 4WD, Jacars ID 2526875.' },
  { id: 'f150-2017', title: 'Ford F-150', year: 2017, priceJmd: 2800000, mileageKm: 98000, rank: 5, status: 'shortlist', listingUrl:'https://www.jacars.net/adv/2527778_ford-f-150-3-5l-2017/', notes:'Verified Jacars F-150 XLT 3.5L petrol, left-hand drive, 98,000 km, J$2.8M. Confirm 4WD operation and parts support.' },
  { id: 'frontier-2023', title: 'Nissan Frontier 2.5 Diesel', year: 2023, priceJmd: 5500000, mileageKm: 54000, rank: 3, status: 'shortlist', drivetrain: '4WD', listingUrl: 'https://www.jacars.net/adv/2526654_nissan-frontier-2-5l-2023/', notes: '2023 diesel 4WD candidate.', positives: ['Newer model year', 'Low reported mileage', '4WD'], concerns: ['Confirm service history and diesel system condition'] },
  { id: 'wildtrak-2021', title: 'Ford Ranger Wildtrak', year: 2021, priceJmd: 5700000, mileageKm: 58419, rank: 4, status: 'shortlist', listingUrl: 'https://www.jacars.net/adv/2528226_2021-ford-ranger/', notes: 'Replaced the earlier 92,000 km Wildtrak.', positives: ['Lower mileage than previous Wildtrak listing'], concerns: ['Verify service history and condition'] },
  { id:'wildtrak-2015', title:'Ford Ranger Wildtrak 3.2', year:2015, priceJmd:3300000, mileageKm:92437, rank:6, status:'shortlist', transmission:'Automatic', drivetrain:'4WD', listingUrl:'https://www.jacars.net/adv/2524288_ford-ranger-3-2l-2015/', concerns:['Age and financing eligibility'] , notes:'Exact 92,437 km and J$3.3M listing; Jacars marks the advertisement expired as of 2026-10-22.' },
  { id:'dmax-2015', title:'Isuzu D-Max 3.0', year:2015, priceJmd:3550000, mileageKm:78775, rank:7, status:'shortlist', drivetrain:'4WD', listingUrl:'https://www.jacars.net/adv/2525441_isuzu-d-max/', concerns:['Age and financing eligibility'] , notes:'Exact 78,775 km, J$3.55M; seller claims service documentation and no accidents. Verify independently.' },
  { id:'wildtrak-2017', title:'Ford Ranger Wildtrak', year:2017, priceJmd:3830000, mileageKm:148000, rank:8, status:'shortlist', drivetrain:'4WD', listingUrl:'https://www.jacars.net/adv/2526738_ford-ranger-3-4l-2017/', concerns:['Higher reported mileage'] , notes:'J$3.83M Wildtrak listing. Jacars shows 0 km while earlier research recorded 148,000 km; verify actual odometer.' },
  { id: 'frontier-midnight-2019', title: 'Nissan Frontier SV Midnight Edition', year: 2019, priceJmd: 3500000, mileageKm: 108000, rank: 9, status: 'shortlist', listingUrl:'https://www.jacars.net/adv/2526109_2019-nissan-frontier/' , notes:'Confirmed same listing as 2526109: SV Limited Midnight Edition 4.0L petrol V6, left-hand drive, 108,000 km.' },
  { id: 'maxus-2026', title: 'MAXUS T60', year: 2026, priceJmd: 5000000, rank: 10, status: 'shortlist', transmission: 'Manual', listingUrl:'https://www.chinawheelsja.com/maxus/inventory.html', sourceKind:'dealer-catalogue', notes:'China Wheels inventory lists the 2026 T60 manual at J$5M; this is a dealer catalogue, not a specific Jacars advert.' },
  { id: 'ranger-kig-2020', title: 'Ford Ranger (KIG)', year: 2020, priceJmd: 5850000, status: 'watchlist', notes: 'Dealer says serviced by KIG; seller upgrading.' },
  { id: 'ranger-2014', title: 'Ford Ranger 3.2L', year: 2014, priceJmd: 2350000, status: 'watchlist', listingUrl: 'https://www.jacars.net/adv/2530247_ford-ranger-3-2l-2014/' },
  { id: 'ranger-2019', title: 'Ford Ranger', year: 2019, priceJmd: 4500000, status: 'watchlist', listingUrl: 'https://www.jacars.net/adv/2529943' },
  { id: 'hilux-2019', title: 'Toyota Hilux 2.4L', year: 2019, priceJmd: 6650000, status: 'watchlist', listingUrl: 'https://www.jacars.net/adv/2521675_toyota-hilux-2-4l-2019/', notes: 'Local listing; price needs confirmation.' },
  { id:'raptor-2020', title:'Ford Ranger Raptor 2.0', year:2020, priceJmd:5990000, status:'watchlist', listingUrl:'https://www.jacars.net/adv/2526509_ford-ranger-raptor-2-0l-2020/', notes:'Jacars advertised J$5.99M as checked 2026-10-22.' },
  { id:'wildtrak-2022', title:'Ford Ranger Wildtrak', year:2022, priceJmd:7299999, status:'watchlist', listingUrl:'https://www.jacars.net/adv/2528896_2022-ford-ranger-wildtrak/' },
  { id:'xlt-2022', title:'Ford Ranger XLT', year:2022, priceJmd:6000000, status:'watchlist', listingUrl:'https://www.jacars.net/adv/2520920_2022-ford-ranger-xlt/' },
  { id:'triton-2025', title:'Mitsubishi Triton L200', year:2025, priceJmd:7000000, status:'watchlist', listingUrl:'https://www.jacars.net/adv/2527362_mitsubishi-triton-l200-2-4l-2025/' },
  { id:'wildtrak-2021-other', title:'Ford Ranger Wildtrak (other listing)', year:2021, priceJmd:5700000, status:'watchlist', listingUrl:'https://www.jacars.net/adv/2520046_2021-ford-ranger-wildtrak/', notes:'Separate from ranked 58,419 km Wildtrak; details not verified.' },
  { id:'tacoma-2527811', title:'Toyota Tacoma', year:2020, priceJmd:6000000, status:'watchlist', listingUrl:'https://www.jacars.net/adv/2527811_tacoma/', notes:'2020 Tacoma; further specifications to verify.' },
  { id:'dealer-serviced-2529403', title:'Nissan Frontier (dealer-serviced listing)', year:2022, priceJmd:5200000, status:'watchlist', listingUrl:'https://www.jacars.net/adv/2529403_excellent-condition-dealer-serviced/', notes:'Jacars identifies this as a 2022 Nissan Frontier; seller describes it as dealer serviced.' },
  { id: 'l200-instagram', title: 'Mitsubishi L200 (modified)', year: 0, priceJmd: 0, status: 'watchlist', listingUrl: 'https://www.instagram.com/reel/DevUJOmR3-Y/', notes: 'Age, maintenance, and modifications require review. Price and year unverified.', concerns: ['Modification quality', 'Maintenance history', 'Age and parts condition'] }
];
