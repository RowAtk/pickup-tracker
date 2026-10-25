<script lang="ts">
  import type { VehicleAssessment } from '$lib/data/vehicle-assessments';
  let { assessment }: { assessment: VehicleAssessment } = $props();
</script>

<section class="min-w-0 space-y-5" aria-label="Vehicle assessment">
  <div class="rounded-xl border border-amber-400/30 bg-zinc-900 p-6">
    <p class="text-xs font-bold uppercase tracking-widest text-amber-400">Assessment · {assessment.checkedAt}</p>
    <h2 class="mt-3 text-xl font-bold">Buying assessment</h2>
    <p class="mt-3 leading-relaxed text-zinc-200">{assessment.verdict}</p>
    <p class="mt-4 border-t border-zinc-800 pt-4 text-sm leading-relaxed text-zinc-400">{assessment.coverage}</p>
  </div>

  <details class="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
    <summary class="cursor-pointer text-lg font-semibold">Source specifications and seller claims</summary>
    <p class="mt-3 text-xs leading-relaxed text-zinc-400">Advert/dealer information is recorded as supplied. Discrepancies and photo-supported corrections are explained below; none of these entries is an independent mechanical verification.</p>
    <dl class="mt-4 divide-y divide-zinc-800 text-sm">
      {#each assessment.specifications as spec}
        <div class="grid grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-3 py-3">
          <dt class="text-zinc-400">{spec.label}</dt>
          <dd class="min-w-0 break-words"><span>{spec.value}</span><span class="mt-1 block text-xs text-zinc-500">{spec.basis}</span></dd>
        </div>
      {/each}
    </dl>
    <ul class="mt-4 list-disc space-y-3 pl-5 text-sm leading-relaxed text-zinc-300">
      {#each assessment.sellerClaims as claim}<li>{claim}</li>{/each}
    </ul>
  </details>

  <div class="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
    <h3 class="text-lg font-semibold">What the photographs support</h3>
    <ul class="mt-3 list-disc space-y-3 pl-5 text-sm leading-relaxed text-zinc-300">
      {#each assessment.photoFindings as finding}<li>{finding}</li>{/each}
    </ul>
    {#if assessment.photoSources?.length}
      <details class="mt-5 border-t border-zinc-800 pt-4">
        <summary class="cursor-pointer text-sm text-amber-400">Original photo evidence ({assessment.photoSources.length})</summary>
        <div class="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs">
          {#each assessment.photoSources as source}<a href={source.url} target="_blank" rel="noopener noreferrer" class="text-zinc-400 underline hover:text-amber-400">{source.label} ↗</a>{/each}
        </div>
      </details>
    {/if}
  </div>

  <div class="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
    <h3 class="text-lg font-semibold">Servicing and history</h3>
    <p class="mt-3 text-sm leading-relaxed text-zinc-300">{assessment.serviceHistory}</p>
    <h3 class="mt-6 text-lg font-semibold">Fit for your commute and hills</h3>
    <p class="mt-3 text-sm leading-relaxed text-zinc-300">{assessment.ownershipFit}</p>
    <h3 class="mt-6 text-lg font-semibold">Value against the other contenders</h3>
    <p class="mt-3 text-sm leading-relaxed text-zinc-300">{assessment.comparison}</p>
  </div>

  <div class="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
    <h3 class="text-lg font-semibold">Before viewing or committing</h3>
    <ol class="mt-3 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-zinc-300">
      {#each assessment.inspection as check}<li>{check}</li>{/each}
    </ol>
    <h3 class="mt-6 text-lg font-semibold text-amber-400">Still unconfirmed</h3>
    <ul class="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-300">
      {#each assessment.unknowns as unknown}<li>{unknown}</li>{/each}
    </ul>
  </div>

  <div class="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
    <h3 class="font-semibold">Assessment sources</h3>
    {#if assessment.sources.length}
      <ul class="mt-3 space-y-3 text-sm">{#each assessment.sources as source}<li><a href={source.url} target="_blank" rel="noopener noreferrer" class="text-amber-400 underline">{source.label} ↗</a></li>{/each}</ul>
    {:else}
      <p class="mt-3 text-sm text-zinc-400">Historical user/dealer lead; no unit-specific source link is available.</p>
    {/if}
    <p class="mt-4 text-xs leading-relaxed text-zinc-500">Comparison and inspection priorities are our assessment, not seller representations. No seller was contacted, no VIN-specific recall clearance was obtained and no physical inspection was performed. A visible listing does not confirm current inventory. Sold records remain historical.</p>
  </div>
</section>
