<script lang="ts">
  import { vehicles } from '$lib/data/vehicles';
  import { vehicleImages } from '$lib/data/vehicle-images';
  let view = $state<'all' | 'shortlist' | 'watchlist'>('all');
  let search = $state('');
  let sort = $state<'rank' | 'price' | 'year'>('rank');
  const money = (n: number) => n ? 'J$' + new Intl.NumberFormat('en-JM').format(n) : 'Price TBD';
  let visible = $derived(vehicles.filter(v => (view === 'all' || v.status === view) && (v.title + ' ' + v.notes).toLowerCase().includes(search.toLowerCase())).sort((a,b) => sort === 'price' ? (a.priceJmd || Infinity) - (b.priceJmd || Infinity) : sort === 'year' ? b.year - a.year : (a.rank ?? 99) - (b.rank ?? 99)));
</script>
<svelte:head><title>Pickup Tracker | Jamaica</title><meta name="description" content="Pickup truck shortlist, watchlist and purchase research." /></svelte:head>
<div class="min-h-screen bg-zinc-950 text-zinc-100">
  <header class="border-b border-zinc-800/80"><div class="mx-auto flex max-w-6xl items-center justify-between px-5 py-5"><a href="/" class="text-xl font-bold tracking-tight">PICKUP<span class="text-amber-400">/</span>TRACKER</a><span class="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">Jamaica · Vehicle hunt</span></div></header>
  <main class="mx-auto max-w-6xl px-5 py-12">
    <p class="mb-3 text-xs font-semibold uppercase tracking-[.25em] text-amber-400">The search for the right truck</p>
    <h1 class="max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">Every contender.<br/><span class="text-zinc-500">One place.</span></h1>
    <p class="mt-5 max-w-2xl text-zinc-400">A living shortlist of pickups, prices, mileage, listings and research. Figures are asking prices and may change.</p>
    <div class="mt-9 grid gap-3 sm:grid-cols-3">
      <div class="rounded-xl border border-zinc-800 bg-zinc-900 p-5"><div class="text-3xl font-bold">{vehicles.filter(v=>v.status==='shortlist').length}</div><div class="mt-1 text-sm text-zinc-400">Recorded shortlist entries</div></div>
      <div class="rounded-xl border border-zinc-800 bg-zinc-900 p-5"><div class="text-3xl font-bold">{vehicles.filter(v=>v.status==='watchlist').length}</div><div class="mt-1 text-sm text-zinc-400">Watchlist entries</div></div>
      <div class="rounded-xl border border-zinc-800 bg-zinc-900 p-5"><div class="text-3xl font-bold">3%</div><div class="mt-1 text-sm text-zinc-400">Staff financing reference rate</div></div>
    </div>
    <div class="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div class="flex gap-2">{#each ['all','shortlist','watchlist'] as tab}<button onclick={() => view = tab as typeof view} class={`rounded-lg px-4 py-2 text-sm font-semibold capitalize ${view === tab ? "bg-amber-400 text-zinc-950" : "bg-zinc-800 text-zinc-300"}`}>{tab}</button>{/each}</div>
      <div class="flex gap-2"><input aria-label="Search vehicles" placeholder="Search trucks..." bind:value={search} class="min-w-0 rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm outline-none focus:border-amber-400" /><select aria-label="Sort vehicles" bind:value={sort} class="rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm"><option value="rank">Rank</option><option value="price">Lowest price</option><option value="year">Newest</option></select></div>
    </div>
    <p class="mt-5 text-xs text-zinc-500">Inventory is still being reconciled. Only confirmed rankings are displayed; prices and listing availability should be verified.</p>
    <div class="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {#each visible as vehicle (vehicle.id)}
      <article class="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
        <a href={`/vehicles/${vehicle.id}`} class="flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-950 text-zinc-600 hover:text-amber-400">{#if vehicleImages[vehicle.id]?.cover}<img src={vehicleImages[vehicle.id].cover} alt={`${vehicle.year} ${vehicle.title}`} loading="lazy" class="h-full w-full object-cover" />{:else}<span class="text-sm uppercase tracking-[.2em]">Photo pending · View details →</span>{/if}</a>
        <div class="p-5"><div class="mb-3 flex items-center justify-between"><span class="rounded-md bg-zinc-800 px-2 py-1 text-xs uppercase text-zinc-300">{vehicle.status}</span>{#if vehicle.rank}<span class="text-sm font-semibold text-amber-400"># {vehicle.rank}</span>{/if}</div>
        <h2 class="text-xl font-bold"><a class="hover:text-amber-400" href={`/vehicles/${vehicle.id}`}>{vehicle.year || 'Year TBD'} {vehicle.title}</a></h2><p class="mt-2 text-2xl font-bold">{money(vehicle.priceJmd)}</p>
        <p class="mt-2 text-sm text-zinc-400">{vehicle.mileageKm ? vehicle.mileageKm.toLocaleString() + ' km' : 'Mileage TBD'} {vehicle.drivetrain ? ' · ' + vehicle.drivetrain : ''} {vehicle.transmission ? ' · ' + vehicle.transmission : ''}</p>
        {#if vehicle.notes}<p class="mt-4 text-sm leading-relaxed text-zinc-400">{vehicle.notes}</p>{/if}
        <a href={`/vehicles/${vehicle.id}`} class="mt-5 mr-3 inline-block rounded-lg border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 hover:border-amber-400">Details →</a>
        {#if vehicle.listingUrl}<a href={vehicle.listingUrl} target="_blank" rel="noopener noreferrer" class="mt-5 inline-block rounded-lg bg-amber-400 px-4 py-2 text-sm font-bold text-zinc-950 hover:bg-amber-300">View listing ↗</a>{/if}
        </div>
      </article>
      {/each}
    </div>
    {#if visible.length===0}<p class="mt-10 text-zinc-400">No vehicles match your filters.</p>{/if}
  </main>
  <footer class="mx-auto max-w-6xl border-t border-zinc-800 px-5 py-8 text-sm text-zinc-500">Personal research tracker · Verify listing details and availability with sellers.</footer>
</div>
