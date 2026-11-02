<script lang="ts">
  import { newPickups, newPickupWeights } from '$lib/data/new-pickups';

  const repaymentMonths = 102;
  const paymentTarget = 75000;
  let deposit = $state(1500000);
  let annualRate = $state(3);
  let withinTarget = $state(false);
  let sortBy = $state<'rank' | 'price'>('rank');

  const money = (n: number) => 'J$' + Math.round(n).toLocaleString('en-JM');
  const payment = (price: number) => {
    const principal = Math.max(0, price - deposit);
    if (principal === 0) return 0;
    const monthlyRate = annualRate / 1200;
    return monthlyRate === 0
      ? principal / repaymentMonths
      : principal * monthlyRate / (1 - Math.pow(1 + monthlyRate, -repaymentMonths));
  };
  let visible = $derived(
    newPickups.filter(truck => !withinTarget || payment(truck.priceJmd) <= paymentTarget)
      .sort((a, b) => sortBy === 'price' ? a.priceJmd - b.priceJmd : a.rank - b.rank)
  );
</script>

<svelte:head>
  <title>New Pickup Ranking | Pickup Tracker Jamaica</title>
  <meta name="description" content="Balanced 2026 Jamaican new-pickup comparison: long-term reliability, looks, price, servicing and warranty. Independent of the used-pickup rankings." />
</svelte:head>

<div class="min-h-screen bg-zinc-950 text-zinc-100">
  <header class="border-b border-zinc-800/80">
    <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5">
      <a href="/" class="text-xl font-bold tracking-tight">PICKUP<span class="text-amber-400">/</span>TRACKER</a>
      <a href="/" class="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-300 hover:border-amber-400">← Used rankings & watchlist</a>
    </div>
  </header>

  <main class="mx-auto max-w-6xl px-5 py-10 sm:py-12">
    <p class="mb-3 text-xs font-semibold uppercase tracking-[.25em] text-amber-400">Separate ranking · Approved 2 November 2026</p>
    <h1 class="max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">Brand-new pickups.<br/><span class="text-zinc-500">Long-term ownership first.</span></h1>
    <p class="mt-5 max-w-3xl leading-relaxed text-zinc-400">An independent ranking of 18 new trucks in Jamaica, balancing appearance, long-term reliability, purchase price, local servicing and warranty. The existing used-pickup shortlist, hybrid ranking, Gemini ranking and watchlist are unchanged.</p>

    <div class="mt-8 grid gap-3 sm:grid-cols-3">
      <div class="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
        <div class="text-3xl font-bold">18</div><p class="mt-1 text-sm text-zinc-400">New-pickup contenders</p>
      </div>
      <div class="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
        <div class="text-3xl font-bold">J$75k</div><p class="mt-1 text-sm text-zinc-400">Target monthly loan payment</p>
      </div>
      <div class="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
        <div class="text-3xl font-bold">102 months</div><p class="mt-1 text-sm text-zinc-400">Illustrative new-vehicle staff term</p>
      </div>
    </div>

    <section class="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-5" aria-label="Ranking weights">
      <h2 class="text-lg font-bold">Balanced ranking weights</h2>
      <div class="mt-4 flex flex-wrap gap-2">
        {#each newPickupWeights as item}
          <span class="rounded-full border border-zinc-700 px-3 py-1.5 text-xs text-zinc-300">{item.label} <strong class="text-amber-400">{item.weight}%</strong></span>
        {/each}
      </div>
      <p class="mt-3 text-xs leading-relaxed text-zinc-400">Ranks are editorial judgments, not statistically validated reliability scores. The top-ranked Triton has a provisional position until the exact automatic 4WD price is established. No dealer catalogue entry proves available stock.</p>
    </section>

    <section class="mt-5 rounded-xl border border-zinc-800 bg-zinc-900 p-5" aria-label="Loan assumptions">
      <div class="flex flex-wrap items-start justify-between gap-3">
        <div><h2 class="text-lg font-bold">Loan comparison</h2><p class="mt-1 text-sm text-zinc-400">Reducing-balance estimate · 8.5 years · excludes fees, insurance and running costs</p></div>
        <div class="flex flex-wrap gap-2">
          <button type="button" onclick={() => annualRate = 3} aria-pressed={annualRate === 3} class={annualRate === 3 ? 'rounded-lg bg-amber-400 px-3 py-2 text-sm font-bold text-zinc-950' : 'rounded-lg bg-zinc-800 px-3 py-2 text-sm text-zinc-300'}>Staff 3%</button>
          <button type="button" onclick={() => annualRate = 8.35} aria-pressed={annualRate === 8.35} class={annualRate === 8.35 ? 'rounded-lg bg-amber-400 px-3 py-2 text-sm font-bold text-zinc-950' : 'rounded-lg bg-zinc-800 px-3 py-2 text-sm text-zinc-300'}>Commercial 8.35%</button>
        </div>
      </div>
      <label for="new-deposit" class="mt-5 block text-sm font-semibold text-zinc-300">Down payment (J$)</label>
      <div class="mt-2 flex flex-wrap items-center gap-3">
        <input id="new-deposit" type="number" min="0" max="10000000" step="100000" bind:value={deposit} class="w-48 max-w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2.5 outline-none focus:border-amber-400" />
        {#each [1000000, 1400000, 1500000, 1800000, 2000000] as amount}
          <button type="button" onclick={() => deposit = amount} aria-pressed={deposit === amount} class={deposit === amount ? 'rounded-lg border border-amber-400 bg-amber-400 px-3 py-2 text-xs font-semibold text-zinc-950' : 'rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-2 text-xs text-zinc-300 hover:border-amber-400'}>{money(amount)}</button>
        {/each}
      </div>
      <div class="mt-5 flex flex-wrap items-center justify-between gap-4">
        <label class="flex items-center gap-2 text-sm text-zinc-300"><input type="checkbox" bind:checked={withinTarget} /> Show only vehicles at or below J$75k/month</label>
        <label class="flex items-center gap-2 text-sm text-zinc-300">Sort
          <select bind:value={sortBy} class="rounded-lg border border-zinc-700 bg-zinc-950 px-2 py-2"><option value="rank">Approved rank</option><option value="price">Lowest price</option></select>
        </label>
      </div>
    </section>

    <p class="mt-6 text-xs text-zinc-500">Retail starting prices and planning approximations are mixed: every vehicle is labeled. USD listings use 1 USD ≈ J$158.69 on November 2, 2026. Verify dealer FX, full-duty pricing, your exact trim and on-road quotation before a purchase. Warranty statements are summaries, not contracts.</p>

    <div class="mt-5 grid gap-5 lg:grid-cols-2">
      {#each visible as truck (truck.id)}
        <article class="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
          <div class="flex items-start justify-between gap-3">
            <div><p class="text-xs font-semibold uppercase tracking-wide text-amber-400">Approved rank #{truck.rank}{truck.provisional ? ' · Provisional' : ''}</p>
              <h2 class="mt-2 text-xl font-bold">{truck.year} {truck.model}</h2>
            </div>
            <span class="shrink-0 rounded-md border border-zinc-700 px-2 py-1 text-[11px] text-zinc-300">{truck.priceBasis === 'dealer-starting' ? 'Dealer starting price' : truck.priceBasis === 'usd-converted' ? 'USD conversion' : 'Planning estimate'}</span>
          </div>
          <div class="mt-5 grid grid-cols-2 gap-3">
            <div class="rounded-lg bg-zinc-950 p-3"><p class="text-xs text-zinc-500">Approx. vehicle price</p><p class="mt-1 text-xl font-bold">{money(truck.priceJmd)}</p></div>
            <div class="rounded-lg bg-zinc-950 p-3"><p class="text-xs text-zinc-500">Monthly at {annualRate}%</p><p class="mt-1 text-xl font-bold" class:text-emerald-400={payment(truck.priceJmd) <= paymentTarget} class:text-amber-400={payment(truck.priceJmd) > paymentTarget}>{money(payment(truck.priceJmd))}</p></div>
          </div>
          <p class="mt-3 text-xs leading-relaxed text-zinc-400">{truck.priceNote}</p>
          <p class="mt-3 text-sm text-zinc-300"><strong>Looks:</strong> {truck.appearance}</p>
          <p class="mt-2 text-sm text-zinc-300"><strong>Long-term outlook:</strong> {truck.ownership}</p>
          <p class="mt-2 text-sm text-zinc-300"><strong>Servicing:</strong> {truck.servicing}</p>
          <p class="mt-2 text-sm text-zinc-300"><strong>Warranty:</strong> {truck.warranty}</p>
          <p class="mt-3 text-sm text-amber-200"><strong>Check:</strong> {truck.watchout}</p>
          <div class="mt-4 flex flex-wrap items-center gap-2 border-t border-zinc-800 pt-4">
            <span class="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-400">{truck.drivetrain}</span>
            <span class="rounded-md bg-zinc-800 px-2 py-1 text-xs text-zinc-400">{truck.transmission}</span>
          </div>
          {#if truck.sourceUrl}
            <a href={truck.sourceUrl} target="_blank" rel="noopener noreferrer" class="mt-4 inline-block rounded-lg bg-amber-400 px-4 py-2 text-sm font-bold text-zinc-950 hover:bg-amber-300">View Jamaican dealer source ↗</a>
          {:else}
            <p class="mt-4 text-xs text-zinc-500">Current precise dealer quotation/source still needed.</p>
          {/if}
        </article>
      {/each}
    </div>
    {#if visible.length === 0}<p class="mt-8 rounded-lg border border-zinc-800 p-5 text-zinc-400">No contenders meet this monthly-payment filter. Try another deposit or interest rate.</p>{/if}

    <section class="mt-8 rounded-xl border border-zinc-800 p-5">
      <h2 class="text-lg font-bold">Not included in these 18</h2>
      <p class="mt-2 text-sm leading-relaxed text-zinc-400">The new Nissan Frontier/Navara remains in the main tracker catalogue, but a current local new-vehicle automatic 4WD quote was not sufficiently established for this price-based ranking. The Changan Hunter is also retained in the main tracker watchlist, not silently removed or assigned an unapproved rank.</p>
      <a href="/" class="mt-4 inline-block text-sm font-semibold text-amber-400 hover:underline">Return to used rankings and all watchlist entries →</a>
    </section>
  </main>
  <footer class="mx-auto max-w-6xl border-t border-zinc-800 px-5 py-8 text-sm text-zinc-500">New model comparison, approved 2 November 2026 · Independent of the used pickup rankings · All terms and prices subject to written confirmation</footer>
</div>
