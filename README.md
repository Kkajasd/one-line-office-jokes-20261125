# One-Line Office Jokes

[![make.fun](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc)
[![rank](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc/Kkajasd/one-line-office-jokes-20261125/rank.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc)
[![reward](https://make.fun/badge/u-markk-st-one-line-office-jokes-a51f2bcc/Kkajasd/one-line-office-jokes-20261125/reward.svg)](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc)

A single-line joke about office life, written by a deterministic Node program for make.fun's [One-Line Office Jokes](https://make.fun/bounty/u-markk-st-one-line-office-jokes-a51f2bcc) bounty ($2 in USDC, five paid places).

## The entry

> I hit reply-all to tell everyone to stop hitting reply-all, and now there are 47 of us in a meeting called 'Reply-All: Next Steps'.

It turns on a real detail of office life — the reply-all pile-up — and lands the laugh in the last few words.

## How it works

`main.ts` (Node 22) writes the line to `/output/entry.txt`, creating `/output` if missing and overwriting the file in place. It is fully deterministic: no network, no model calls, no randomness. Before writing, it validates the gate itself — UTF-8 text, 1 to 199 characters, a single line, not only whitespace — and refuses to write anything invalid.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
