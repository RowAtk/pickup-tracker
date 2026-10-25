<script lang="ts">
  import { page } from '$app/state';
  import { vehicles } from '$lib/data/vehicles';
  import { vehicleImages } from '$lib/data/vehicle-images';
  let vehicle = $derived(vehicles.find(v => v.id === page.params.id));
  let deposit = $state(2000000);
  let rateScenario = $state<'staff' | 'commercial'>('staff');
  let annualRate = $state(3);
  // Calendar-year age follows the financing bands supplied by the user.
  let currentYear = $state(Number(new Intl.DateTimeFormat('en', { timeZone: 'America/Jamaica', year: 'numeric' }).format(new Date())));
  let vehicleAge = $derived(Math.max(0, currentYear - (vehicle?.year ?? currentYear)));
  let isNew = $derived(vehicle?.sourceKind === 'dealer-catalogue' && (vehicle?.year ?? 0) >= currentYear);
  let maxTerm = $derived(isNew ? 8.5 : vehicleAge <= 1 ? 7 : vehicleAge <= 4 ? 6 : 5);
  let requestedYears = $state<number | undefined>(undefined);
  let years = $derived(Math.min(requestedYears ?? maxTerm, maxTerm));
  let termOptions = $derived([1, 2, 3, 4, 5, 6, 7, 8, 8.5].filter(y => y <= maxTerm));
  let financed = $derived(Math.max(0, (vehicle?.priceJmd ?? 0) - deposit));
  let image = $derived(vehicle ? vehicleImages[vehicle.id] : undefined);
  let monthly = $derived(financed === 0 ? 0 : annualRate === 0 ? financed / (years * 12) : financed * (annualRate / 1200) / (1 - Math.pow(1 + annualRate / 1200, -years * 12)));
  const money = (n: number) => 'J$' + Math.round(n).toLocaleString('en-JM');
</script>
<svelte:head><title>{vehicle ? vehicle.year + ' ' + vehicle.title : 'Vehicle not found'} | Pickup Tracker</title></svelte:head>
<div class="min-h-screen bg-zinc-950 text-zinc-100">
  <header class="border-b border-zinc-800"><div class="mx-auto max-w-5xl px-5 py-5"><a href="/" class="font-bold tracking-tight">← PICKUP<span class="text-amber-400">/</span>TRACKER</a></div></header>
  <main class="mx-auto max-w-5xl px-5 py-10">
  {#if vehicle}
    <a href="/" class="text-sm text-zinc-400 hover:text-amber-400">← Back to dashboard</a>
    <div class="mt-7 flex flex-wrap items-start justify-between gap-5">
      <div><p class="mb-2 text-xs font-bold uppercase tracking-widest text-amber-400">{vehicle.status}{vehicle.rank ? ' · Rank #' + vehicle.rank : ''} · {vehicle.availability === 'sold' ? 'Sold' : vehicle.availability === 'expired' ? 'Expired advertisement' : vehicle.availability === 'dealer-catalogue' ? 'Dealer catalogue' : 'Availability unconfirmed'}</p><h1 class="text-3xl font-bold sm:text-5xl">{vehicle.year || 'Year TBD'} {vehicle.title}</h1><p class="mt-3 text-3xl font-bold">{vehicle.priceJmd ? money(vehicle.priceJmd) : 'Price TBD'}</p></div>
      {#if vehicle.listingUrl}<a href={vehicle.listingUrl} target="_blank" rel="noopener noreferrer" class="rounded-lg bg-amber-400 px-5 py-3 font-semibold text-zinc-950">{vehicle.sourceKind === 'dealer-catalogue' ? 'Dealer inventory ↗' : 'Original listing ↗'}</a>{/if}
    </div>
    {#if image?.cover}
      <figure class="mt-8 overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
        <img src={image.cover} alt={`Listing photograph of ${vehicle.year} ${vehicle.title}`} class="max-h-[520px] w-full object-contain" />
        <figcaption class="px-4 py-2 text-xs text-zinc-400">Original listing photograph · Verify vehicle identity with seller</figcaption>
      </figure>
    {/if}
    {#if image?.gallery?.length}
      <section class="mt-4" aria-label="Listing photo gallery">
        <h2 class="mb-3 text-lg font-semibold">Listing photos</h2>
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {#each image.gallery as photo, index}
            <a href={photo} target="_blank" rel="noopener noreferrer" class="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 focus-visible:outline-2 focus-visible:outline-amber-400" aria-label={`Open listing photo ${index + 2} in a new tab`}>
              <img src={photo} alt={`Listing photo ${index + 2} of ${vehicle.year} ${vehicle.title}`} loading="lazy" class="aspect-[4/3] w-full object-contain" />
            </a>
          {/each}
        </div>
        <p class="mt-2 text-xs text-zinc-400">Select a photo to view it at full size. Specification sheets contain seller-provided information.</p>
      </section>
    {/if}
    <section class="mt-6 rounded-xl border border-zinc-800 bg-zinc-900 p-5"><h2 class="font-semibold">Availability verification</h2><p class="mt-2 text-sm text-zinc-400">Last recorded check: {vehicle.availabilityCheckedAt ?? 'Not checked'} · Evidence: {vehicle.availabilityEvidence?.replaceAll('-', ' ') ?? 'Not recorded'}. Opening an advertisement does not confirm seller inventory.</p>{#if vehicle.availabilityHistory?.length}<ul class="mt-3 space-y-2 text-sm text-zinc-400">{#each vehicle.availabilityHistory as event}<li>{event.date}: {event.status} — {event.note}</li>{/each}</ul>{/if}</section>
    <div class="mt-8 grid gap-4 sm:grid-cols-3">
      <div class="rounded-xl border border-zinc-800 bg-zinc-900 p-5"><p class="text-xs text-zinc-400">Mileage</p><p class="mt-2 text-xl font-semibold">{vehicle.mileageKm ? vehicle.mileageKm.toLocaleString() + ' km' : 'Unknown'}</p></div>
      <div class="rounded-xl border border-zinc-800 bg-zinc-900 p-5"><p class="text-xs text-zinc-400">Drivetrain</p><p class="mt-2 text-xl font-semibold">{vehicle.drivetrain ?? 'Unconfirmed'}</p></div>
      <div class="rounded-xl border border-zinc-800 bg-zinc-900 p-5"><p class="text-xs text-zinc-400">Transmission</p><p class="mt-2 text-xl font-semibold">{vehicle.transmission ?? 'Unconfirmed'}</p></div>
    </div>
    <div class="mt-8 grid gap-5 md:grid-cols-2">
      <section class="rounded-xl border border-zinc-800 bg-zinc-900 p-6"><h2 class="text-xl font-bold">Research notes</h2><p class="mt-3 leading-relaxed text-zinc-400">{vehicle.notes ?? 'Assessment pending. Confirm vehicle history and condition before committing.'}</p>
      {#if vehicle.positives?.length}<h3 class="mt-6 font-semibold text-emerald-400">Advantages</h3><ul class="mt-2 list-disc space-y-2 pl-5 text-sm text-zinc-300">{#each vehicle.positives as item}<li>{item}</li>{/each}</ul>{/if}
      {#if vehicle.concerns?.length}<h3 class="mt-6 font-semibold text-amber-400">Things to check</h3><ul class="mt-2 list-disc space-y-2 pl-5 text-sm text-zinc-300">{#each vehicle.concerns as item}<li>{item}</li>{/each}</ul>{/if}</section>
      <section class="rounded-xl border border-zinc-800 bg-zinc-900 p-6"><h2 class="text-xl font-bold">Loan estimate</h2><p class="mt-2 text-sm text-zinc-400">Illustrative reducing-balance loan. Excludes fees and insurance.</p>
        <label class="mt-5 block text-sm text-zinc-300">Down payment (J$)<input type="number" min="0" max={vehicle.priceJmd || undefined} step="100000" bind:value={deposit} class="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-950 p-3"/></label>
        <div class="mt-5 flex gap-2"><button type="button" onclick={() => { rateScenario = 'staff'; annualRate = 3; }} class={`rounded-lg px-3 py-2 text-sm ${rateScenario === 'staff' ? 'bg-amber-400 text-zinc-950' : 'bg-zinc-800'}`}>Staff 3%</button><button type="button" onclick={() => { rateScenario = 'commercial'; annualRate = isNew ? 8.35 : 10.6; }} class={`rounded-lg px-3 py-2 text-sm ${rateScenario === 'commercial' ? 'bg-amber-400 text-zinc-950' : 'bg-zinc-800'}`}>Commercial estimate</button></div>
        <label class="mt-4 block text-sm text-zinc-300">Annual interest rate (%)<input type="number" min="0" max="100" step=".1" bind:value={annualRate} class="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-950 p-3"/></label>
        <label class="mt-4 block text-sm text-zinc-300">Term (years)<select value={years} onchange={(event) => requestedYears = Number(event.currentTarget.value)} class="mt-2 w-full rounded-lg border border-zinc-700 bg-zinc-950 p-3">{#each termOptions as y}<option value={y}>{y === 8.5 ? '8.5 (102 months)' : y}</option>{/each}</select></label>
        <p class="mt-2 text-xs text-zinc-400">Maximum term: {maxTerm} years · {isNew ? 'New vehicle' : vehicleAge + ' calendar years old'} (as of {currentYear}). Defaults to the maximum; shorter terms are available.</p>
        <p class="mt-2 text-xs text-zinc-500">Planning terms: new 8.5 years; up to 1 year old 7 years; 2–4 years old 6 years; older 5 years. New status assumes a current/future model-year dealer-catalogue vehicle; confirm with the dealer. Terms and eligibility require bank confirmation. <a class="underline hover:text-amber-400" href="https://www.jncb.com/personal/auto-loan/" target="_blank" rel="noopener noreferrer">NCB auto loan calculator ↗</a></p>
        {#if vehicle.priceJmd}<div class="mt-6 border-t border-zinc-700 pt-5"><p class="text-sm text-zinc-400">Estimated monthly payment</p><p class="mt-1 text-3xl font-bold text-amber-400">{money(monthly)}</p><p class="mt-2 text-xs text-zinc-500">Amount financed: {money(financed)}. Target monthly payment: J$75,000. {monthly > 75000 ? 'Above target.' : 'Within target.'} Rates are illustrative; older vehicles may be ineligible for vehicle financing.</p></div>{:else}<p class="mt-5 text-sm text-zinc-400">Awaiting confirmed asking price.</p>{/if}
      </section>
    </div>
  {:else}<h1 class="text-2xl font-bold">Vehicle not found</h1><a href="/" class="mt-5 inline-block text-amber-400">Return to dashboard</a>{/if}
  </main>
</div>
