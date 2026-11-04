# Publication and provenance record

**Project:** [The Web Is a Material](https://ianmitch90.github.io/HTMLCSS/)  
**Canonical source:** [ianmitch90/HTMLCSS](https://github.com/ianmitch90/HTMLCSS), default branch `master`  
**Original project direction and continuing stewardship:** Ian Mitchell  
**License for repository software and associated documentation:** [MIT](LICENSE.md)

This is a **living index of evidence and sources**, not an immutable timestamp or a legal certificate by itself. Entries below distinguish platform-recorded events from author-reported dates. Links to GitHub pull requests, completed CI/deployment runs, and commit SHAs allow independent inspection of what was publicly available. For an independently archived, cryptographically verifiable release, follow [the release-preservation procedure](#for-each-future-publication).

## Established public history

All times are UTC, taken from GitHub's publicly recorded server metadata unless specified otherwise.

| Event | Platform-recorded date/time | Verifiable record |
| --- | --- | --- |
| Original repository created | September 25, 2018 at 20:32:25 UTC | [Repository](https://github.com/ianmitch90/HTMLCSS) |
| Original pre-revival source, preserved without later edits | Historical snapshot (not a claim about its earliest public date) | [Archive branch](https://github.com/ianmitch90/HTMLCSS/tree/archive/original-2018-2020) at [`3f31dbedf70553d919d1a55de04cf175d8d75372`](https://github.com/ianmitch90/HTMLCSS/tree/3f31dbedf70553d919d1a55de04cf175d8d75372) |
| AI-assisted revival review opened | November 4, 2026 at 02:03:40 UTC | [PR #2](https://github.com/ianmitch90/HTMLCSS/pull/2) |
| Revival merged into the canonical `master` branch | November 4, 2026 at 14:59:14 UTC | [Merge `e50177c97dcfafa52740dc289a98b4a5d711fe6d`](https://github.com/ianmitch90/HTMLCSS/commit/e50177c97dcfafa52740dc289a98b4a5d711fe6d) |
| Initial revival GitHub Pages deployment completed successfully | November 4, 2026 at 14:59:52 UTC | [GitHub Pages run #41853058045](https://github.com/ianmitch90/HTMLCSS/actions/runs/41853058045) |
| Atmospheric and luminous-card revision merged | November 4, 2026 at 16:42:15 UTC | [PR #5](https://github.com/ianmitch90/HTMLCSS/pull/5), [merge `4aa727de54fd83d3330ca4cac54a1c8fe6955918`](https://github.com/ianmitch90/HTMLCSS/commit/4aa727de54fd83d3330ca4cac54a1c8fe6955918) |
| Associated Pages build completed successfully | November 4, 2026 at 16:44:07 UTC | [GitHub Pages run #41870063358](https://github.com/ianmitch90/HTMLCSS/actions/runs/41870063358) |

A public `master` branch can advance after publication, so **cite a particular commit SHA or immutable release** when documenting exactly which code existed. Git commit author/committer dates alone are not independent trusted publication timestamps; the platform-recorded merge and deployment events are better evidence.

### Companion public reflection

- **Article:** [The Web Is Still a Material: Reviving a 2018 Project With AI](https://ianmitch.dev/notes/the-web-is-still-a-material)
- **Editorial date in Sanity:** November 4, 2026
- **CMS creation metadata:** November 4, 2026 at 15:51:11 UTC, as observed in the connected Sanity `production` dataset.
- **Note:** A CMS field and its metadata are useful editorial records, but the author controls the CMS and can edit the content. Archive the **public article URL** independently to corroborate what appeared on the web at a given date.

## What this record attributes

The original HTML/CSS experiments and project were created and stewarded by Ian Mitchell. The 2026 revival was an **AI-assisted development process**: the author supplied goals, source material, project constraints, design direction, editorial context, review and correction; AI tools contributed generated implementation and prose during an iterative process.

This is a record of the development and publication history. It does **not** assert that every generated line, artwork, general CSS technique or broad idea is exclusively copyrightable. For details about what may be reused, see the actual [MIT license](LICENSE.md). The separately published personal reflection should be evaluated under whatever copyright and licensing terms apply on that website; the repository's MIT notice does not automatically determine the article's terms.

## For each future publication

Use this small routine for **each meaningful public software release**, rather than merely changing a blog date or rewriting `master`:

1. **Freeze an exact version.** Confirm the intended source commit and that tests pass. Record its full commit SHA; do not move an old public tag to newer code.
2. **Publish an immutable GitHub Release.** In repository **Settings → General → Releases**, enable release immutability *before publishing* the release. Create a new tag on the desired commit; include the version, scope and actual publication date in the release notes. Publish the release and preserve its URL. Immutable releases have protected tags/assets and signed attestations.
3. **Archive it independently.** Connect this public repository to [Zenodo](https://zenodo.org/) through GitHub before the release. Zenodo can archive each release and provide a version-specific DOI and a project-level concept DOI. Record the resulting DOI here.
4. **Snapshot the public experience.** Use the Internet Archive [Save Page Now](https://web.archive.org/save/) for the live site, the associated article and important screenshots/lesson URLs. Record the actual archived URLs; a single capture does not archive an entire website.
5. **Preserve original artifacts.** Keep a copy of the published screenshots, article text, release archive, design references that can be shared, and optionally SHA-256 checksums of those exact files. A checksum shows file integrity relative to a recorded digest; it is **not** itself evidence of a publication date.
6. **Update this index.** Link the release, SHA, DOI, snapshots and relevant PRs. Add entries rather than altering the historical record to imply an earlier timestamp.

**Status as of the initial version of this document:** The public GitHub history and Pages deployment records above have been verified. No immutable GitHub Release or Zenodo DOI has yet been registered for this repository. Do not present those protections as already active.

### Publication record template

Copy and fill this for future releases:

```text
Title:
Project:
Type: software | article | design / visual asset
Creator / human contributions:
AI assistance (where applicable):
Canonical public URL:
Source repository or CMS record:
Published timestamp (provider-observed, UTC):
Exact commit SHA / asset SHA-256:
Immutable GitHub release and tag (if software):
Zenodo version DOI (if available):
Wayback snapshot URL(s) (if available):
License / reuse terms:
Evidence / provenance notes:
```

For articles and original visual assets not governed by this repository's MIT license, preserve dated exported copies and their publication context separately, and specify their intended reuse policy clearly.

## Independent verification and legal scope

- A [GitHub immutable release](https://docs.github.com/en/code-security/concepts/supply-chain-security/immutable-releases) can protect the associated tag and release assets and furnish a signed attestation. This is stronger than an editable README entry.
- A [Zenodo DOI](https://docs.github.com/en/repositories/archiving-a-github-repository/referencing-and-citing-content) is a durable, externally maintained citation and archival reference for an archived version.
- A [Wayback capture](https://archivesupport.zendesk.com/hc/en-us/articles/360001513491-Save-Pages-in-the-Wayback-Machine) helps establish what a public webpage looked like at the time of capture. Some resources may be missing and captures are not guaranteed.
- U.S. copyright protection can arise automatically for sufficiently original **human-authored expression**. Registration may provide stronger legal remedies and a public claim; timestamps and provenance logs do not replace legal registration, and AI-assisted works require accurate descriptions of the human contribution.

This is a transparency and archival process, not legal advice or a claim that the underlying concepts are exclusive.
