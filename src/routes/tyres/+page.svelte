<script lang="ts">
  const tyres = [
    { name: 'Falken WILDPEAK H/T02', type: 'Highway terrain', tag: 'Road-focused starting point', image: 'https://falken-tires-website-storage.s3.amazonaws.com/storage/app/media/Exports/Wildpeak%20HT02%20Tire%20Product%20Page/Desktop/Description/x1/Tire-WildPeakHT02-angled-comp.png', source: 'https://www.falkentire.com/wildpeak/ht02', note: 'Highway tread with a rugged upper sidewall. A useful starting point for daily driving when you want a tougher appearance without choosing an all-terrain tread.', supplier: 'Chad-Ad and Jamaica Tire Discounter: Falken brand leads only.' },
    { name: 'BFGoodrich Trail-Terrain T/A', type: 'Road-oriented all-terrain', tag: 'Rugged everyday alternative', image: 'https://dxm.contentcenter.michelin.com/api/wedia/dam/transform/b98rpyxf61b4quj4z6fer6eq1c/4w-490_3528708261297_tire_bfgoodrich_trail-terrain-t-slash-a_265-slash-70-r17-115t_owl_a_main_1-30_nopad.webp?height=500&t=resize', source: 'https://www.bfgoodrichtires.com/auto/tires/bfgoodrich-trail-terrain-t-a', note: 'Designed for SUVs and light-duty pickups, with an emphasis on road comfort and occasional adventure. Worth comparing if you want a more rugged tread appearance.', supplier: 'Jamaica Tire Discounter: BFGoodrich brand lead only.' },
    { name: 'Toyo Open Country A/T III', type: 'On-/off-road all-terrain', tag: 'More off-road capability', image: 'https://www.toyotires.com/media/4236/opat3-right.jpg?v=1dbb05c24fcf900', source: 'https://www.toyotires.com/product/open-country-at3', note: 'A full all-terrain option, rather than merely a highway tyre with rugged styling. Compare the exact size and construction carefully if comfort and everyday road use are your priorities.', supplier: 'Jamaica Tire Discounter: Toyo brand lead only.' }
  ];
  let failed = $state<Record<string, boolean>>({});
</script>
<svelte:head><title>Tyre shortlist | Pickup Tracker</title><meta name="description" content="Pickup tyre reference gallery: road-focused rugged styling, official product photos and Jamaican supplier leads." /></svelte:head>
<div class="min-h-screen bg-zinc-950 text-zinc-100">
  <header class="border-b border-zinc-800"><nav class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5" aria-label="Main navigation"><a href="/" class="text-xl font-bold">PICKUP<span class="text-amber-400">/</span>TRACKER</a><a href="/" class="text-sm text-amber-400">← Back to vehicle tracker</a></nav></header>
  <main class="mx-auto max-w-6xl px-5 py-10">
    <p class="text-sm font-semibold uppercase tracking-widest text-amber-400">After-purchase ideas</p>
    <h1 class="mt-3 text-4xl font-bold">Rugged looks. Everyday roads.</h1>
    <p class="mt-4 max-w-3xl text-zinc-300">A tyre reference shortlist for a future pickup: mainly daily driving, rough Jamaican roads and occasional country trips. These are research candidates, not confirmed fitments or stock offers.</p>
    <div class="mt-6 rounded-xl border border-amber-400/30 bg-amber-400/5 p-5 text-sm text-zinc-300"><strong class="text-amber-300">Fitment pending:</strong> choose the pickup first, then confirm its tyre size, wheel width, load and speed ratings with the dealer. A rugged tread does not guarantee better wet braking, pothole protection or a softer ride. Construction and correct inflation matter. Prices, local stock and Jamaican warranty coverage are unconfirmed.</div>
    <section class="mt-8 grid gap-6 md:grid-cols-3" aria-label="Tyre models">
      {#each tyres as tyre}
        <article class="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
          <a href={tyre.source} target="_blank" rel="noreferrer" class="flex h-72 items-center justify-center bg-white p-6" aria-label={'View official photos of ' + tyre.name}>
            {#if failed[tyre.name]}<span class="text-center text-sm text-zinc-700">Photo unavailable here.<br />Open official product photos →</span>{:else}<img src={tyre.image} alt={tyre.name + ' — official three-quarter product photograph'} class="h-full w-full object-contain" loading="lazy" onerror={() => failed[tyre.name] = true} />{/if}
          </a>
          <div class="p-5"><p class="text-xs font-semibold uppercase tracking-wide text-amber-400">{tyre.type}</p><h2 class="mt-2 text-xl font-bold">{tyre.name}</h2><p class="mt-2 text-sm font-medium text-zinc-200">{tyre.tag}</p><p class="mt-3 text-sm leading-relaxed text-zinc-400">{tyre.note}</p><p class="mt-4 border-t border-zinc-800 pt-4 text-sm text-zinc-300">{tyre.supplier}</p><a href={tyre.source} target="_blank" rel="noreferrer" class="mt-4 inline-block text-sm font-semibold text-amber-400">Manufacturer details & image source ↗</a></div>
        </article>
      {/each}
    </section>
    <p class="mt-3 text-xs text-zinc-500">Official manufacturer photography. Sidewall lettering and appearance can vary by size or market. Images are hosted by their respective manufacturers.</p>
    <section class="mt-10 rounded-2xl border border-zinc-800 p-6" aria-labelledby="suppliers"><h2 id="suppliers" class="text-2xl font-bold">Jamaican supplier leads</h2><p class="mt-2 text-sm text-zinc-400">Research checked 16 November 2026. Brand listings do not confirm that any of these exact models are currently available.</p>
      <ul class="mt-5 space-y-4 text-sm leading-relaxed text-zinc-300">
        <li><a class="font-semibold text-amber-400" href="https://www.findyello.com/Jamaica/Jamaica-Tire-Discounter/profile/" target="_blank" rel="noreferrer">Jamaica Tire Discounter ↗</a> — directory lists BFGoodrich, Falken and Toyo. 39–41 Second Street, Newport West; 876-926-2003. Ask about the exact model, size, date code and fitted price.</li>
        <li><a class="font-semibold text-amber-400" href="https://www.calljaa.com/chad-ad-distributors-limited/" target="_blank" rel="noreferrer">Chad-Ad Distributors ↗</a> — an older JAA listing includes Falken. Current brand range and H/T02 availability need confirmation.</li>
        <li><a class="font-semibold text-amber-400" href="https://www.bdgregg.com/about.php" target="_blank" rel="noreferrer">B.D. Gregg ↗</a> — advertises special orders. No exact-model stock confirmed.</li>
        <li><a class="font-semibold text-amber-400" href="https://www.tyrewarehousejm.com/" target="_blank" rel="noreferrer">Tyre Warehouse ↗</a> — lists several alternative brands; these three exact models were not verified. Ask about comparable road-focused options.</li>
      </ul>
    </section>
  </main>
</div>
