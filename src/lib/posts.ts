export type Post = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  readingTime: string;
  body: string;
};

export const POSTS: Post[] = [
  {
    slug: 'capital-controls-emerging-markets-2024',
    title: 'Capital Controls in Emerging Markets: A Structural Assessment',
    date: '2024-11-12',
    tags: ['Capital Controls', 'Macro', 'Governance'],
    summary: 'An examination of capital control architecture across fourteen jurisdictions, with attention to velocity of adoption, enforcement mechanisms, and historical reversion patterns.',
    readingTime: '12 min',
    body: `Capital controls rarely announce themselves. They accumulate through administrative narrowing—reporting thresholds tightened, approval timelines extended, foreign-exchange queues lengthened. By the time a formal regime is codified, the functional constraints have already been in place for months.

## Structural Patterns

Analysis of fourteen jurisdictions between 2018 and 2024 reveals a consistent preliminary signature: an initial expansion of reporting requirements framed as anti-money-laundering compliance, followed six to fourteen months later by substantive transaction limits. The regulatory language in the AML phase and the capital control phase is often identical.

This sequencing matters. It creates a period during which investors and residents believe they are experiencing administrative friction rather than structural constraint. The distinction collapses only in retrospect.

## What This Analysis Does Not Address

This report examines structural patterns in capital control architecture. It does not assess the appropriateness of any particular capital allocation decision, nor does it constitute advice regarding individual exposure management. Readers requiring judgment on specific circumstances should consult Borderless Concierge.

## Key Findings

The jurisdictions displaying the highest capital control risk signature in this dataset share three characteristics: elevated current account deficits exceeding 5% of GDP, recent currency depreciation of 20% or more against major reserves currencies, and a pattern of executive interference in central bank governance during the preceding 24 months.

## Methodology

Country-level data was sourced from IMF Article IV consultations, central bank regulatory bulletins, and primary review of legislative records. Where official records conflict with observed practitioner experience, both are noted with sourcing.`,
  },
  {
    slug: 'eu-residency-permit-architecture-analysis',
    title: 'EU Residency Permit Architecture: A Comparative Survey',
    date: '2024-10-28',
    tags: ['Jurisdiction', 'Migration', 'EU'],
    summary: 'A comparative survey of residency permit structures across eight EU member states, examining processing infrastructure, legislative stability, and access rights under Directive 2003/109/EC.',
    readingTime: '9 min',
    body: `EU long-term residency status is structurally more portable than any single member state's national permit, but it is issued at the national level and governed by national administrative capacity. The gap between legal entitlement and practical access is a function of that capacity.

## Permit Architecture

Directive 2003/109/EC establishes the framework. National transposition determines the outcome. Eight jurisdictions examined here have implemented the directive in ways that produce meaningfully different effective rights, processing timelines, and administrative failure rates.

## Key Findings

Malta, Portugal, and the Netherlands demonstrate the highest processing integrity scores in this survey—defined as consistency between statutory timelines and observed processing outcomes, completeness of written decision records, and accessibility of administrative appeal mechanisms.

Three jurisdictions—Bulgaria, Romania, and Hungary—show statistically significant gaps between statutory and observed processing timelines, and in two cases, documentary requirements that exceed directive specifications without legal basis.

## What This Does Not Mean

A high processing integrity score does not constitute a recommendation to pursue residency in a given jurisdiction. Residency selection involves considerations—tax treatment, lifestyle alignment, family circumstances, asset structure—that are outside the scope of this analysis.`,
  },
  {
    slug: 'institutional-decoherence-index-methodology',
    title: 'Institutional Decoherence: Notes on Index Construction',
    date: '2024-09-15',
    tags: ['Governance', 'Methodology', 'Indicators'],
    summary: 'A methodological note on how institutional decoherence is measured, what it captures, and what it does not — with attention to the distinction between measured decay and experienced decay.',
    readingTime: '7 min',
    body: `Institutional decoherence is not collapse. It is the progressive divergence between formal institutional structures and their operational reality. The gap between what institutions say they do and what they do is the measurement target.

## The Measurement Problem

Most institutional quality indices measure inputs (legal frameworks, stated procedures) or outputs (perceived corruption, survey-based trust). Neither directly measures the gap. A jurisdiction can have an excellent formal legal framework and a significant decoherence problem. A jurisdiction can score poorly on perception surveys while maintaining high operational integrity.

## Indicator Construction

The Borderless Sovereignty Index approaches this through a multi-layer observation methodology. Primary inputs include: administrative record completeness, decision-timeline consistency, judicial independence from executive appointment patterns, and legislative override frequency of judicial decisions.

These are observable. They do not require survey responses or expert opinion—though expert observation is used to validate data against practitioner experience.

## Key Findings

The most common leading indicator of accelerating decoherence is not dramatic institutional failure but procedural compression: the quiet shortening of comment periods, the consolidation of regulatory approval pathways under executive-adjacent bodies, and the reclassification of previously public records as protected.

## Limitations

This methodology captures measurable decoherence. It does not capture the full experiential texture of institutional decline, which often precedes measurable indicators. Practitioners and residents frequently experience the early signals before they appear in data.`,
  },
  {
    slug: 'latin-america-sovereign-risk-update-q4',
    title: 'Latin America Sovereign Risk: Q4 2024 Update',
    date: '2024-12-01',
    tags: ['Macro', 'Jurisdiction', 'Capital Controls'],
    summary: 'Quarterly update on sovereign risk conditions across seven Latin American jurisdictions, with indicator movements and structural observations.',
    readingTime: '10 min',
    body: `This quarterly update covers indicator movements across Argentina, Brazil, Chile, Colombia, Ecuador, Mexico, and Uruguay for Q4 2024. Full BSI profiles for each jurisdiction are available in the research archive.

## Aggregate Observations

The quarter was characterized by divergence at the extremes. Chile and Uruguay maintained stable indicator scores; Argentina remained in the highest-risk tier following currency restructuring in September. Brazil's institutional coherence indicators declined marginally but remain within normal variance.

## Argentina

Argentina's Q4 reading reflects the post-restructuring administrative environment. Capital control architecture remains in active reconfiguration. The practical environment for international asset holders is difficult to assess in real time given the velocity of regulatory change.

## Chile

Chile continued to demonstrate the strongest institutional coherence profile in the regional dataset. Legislative stability, judicial independence, and central bank operational autonomy scores all held within their 12-month ranges.

## What This Update Does Not Address

Quarterly indicator updates reflect structural conditions, not tactical positioning. They do not constitute advice regarding jurisdictional allocation, and they do not account for individual circumstances that may make a given jurisdiction more or less suitable for a specific person or entity.`,
  },
  {
    slug: 'five-passport-programs-structural-review',
    title: 'Citizenship-by-Investment: A Structural Review of Five Programs',
    date: '2024-08-20',
    tags: ['Jurisdiction', 'Migration', 'Governance'],
    summary: 'A structural review of five citizenship-by-investment programs examining legislative durability, EU access provisions, and program administration integrity.',
    readingTime: '11 min',
    body: `Citizenship-by-investment programs are legislative instruments. Their value depends on the legislative environment that sustains them. Analysis that focuses on current program terms without examining legislative durability systematically overstates value.

## Programs Reviewed

This review covers Malta (MEIN), St. Kitts and Nevis, Dominica, Vanuatu, and Jordan. These programs were selected to span the range of legislative architectures, administrative integrity profiles, and access right structures in the current market.

## Legislative Durability

Malta's program has faced the most sustained external pressure—primarily from the European Commission regarding compatibility with EU citizenship norms—but has demonstrated the highest legislative stability of the five programs reviewed. St. Kitts and Nevis has undergone three structural program revisions since 2015, each materially affecting prior investor access.

## Key Findings

The strongest predictor of program durability is constitutional rather than statutory entrenchment of citizenship criteria, combined with explicit legislative history of cross-party support. Programs supported by executive action alone without legislative codification carry the highest revision risk.

## What This Does Not Address

This review does not assess the suitability of any program for any individual circumstance. Citizenship acquisition decisions involve legal, tax, and personal considerations that require individual counsel. Refer to Borderless Concierge for advisory engagement.`,
  },
  {
    slug: 'governance-failure-indicators-taxonomy',
    title: 'A Taxonomy of Governance Failure Indicators',
    date: '2024-07-10',
    tags: ['Governance', 'Methodology', 'Indicators'],
    summary: 'A working taxonomy of governance failure indicators organized by failure mode, with notes on data availability, leading versus lagging characteristics, and cross-indicator correlation.',
    readingTime: '8 min',
    body: `Governance failure is rarely singular. It accumulates across dimensions—institutional, fiscal, social—and the dimensions interact. A taxonomy organized by failure mode, rather than by institutional sector, better captures this interaction.

## Taxonomy Structure

This taxonomy organizes indicators across four primary failure modes: Fiscal Sovereignty Erosion, Executive Branch Expansion, Judicial Independence Contraction, and Civil Society Compression. Each mode has leading and lagging indicators; cross-mode correlations are noted where they are empirically supported.

## Leading vs. Lagging Indicators

Most governance indices are lagging: they measure the accumulated effects of decisions already made. Leading indicators capture the decision-making environment before outcomes are observable. The most useful category for prospective analysis is leading indicators with established lag distributions—where the typical time between indicator movement and observable outcome is known from historical observation.

## Cross-Indicator Correlation

Judicial independence contraction and executive branch expansion show the highest cross-mode correlation (r = 0.71 in this dataset). Fiscal sovereignty erosion and civil society compression show a meaningful but delayed correlation: fiscal erosion typically precedes civil society compression by 18–36 months in historical cases.

## Data Availability

The primary limitation of this taxonomy is data availability at the leading indicator level. Observable leading indicators often require primary source monitoring—direct review of legislative records, regulatory filings, and judicial decision archives—rather than secondary data collection.`,
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find(p => p.slug === slug);
}

export function getPostsByTag(tag: string): Post[] {
  return POSTS.filter(p => p.tags.includes(tag));
}

export const ALL_TAGS = Array.from(new Set(POSTS.flatMap(p => p.tags))).sort();
