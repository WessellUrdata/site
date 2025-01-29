---
title: "Syncthing Relays now up and running 🌐"
date: 2024-06-18
updateDate: 2024-07-04
category: "services"
---

I've just set up some Syncthing relays, they're in the public pool so you may connect to one should you choose the default relay pool.

If you want to connect to my relays manually, use the following addresses:

- HK1: `relay://103.69.129.120:22067` (25 MB/s per session, 300 MB/s globally, subject to change)
- HK2: `relay://149.104.24.71:22067` (1 MB/s per session, 4 MB/s globally, subject to change) (I severely reduced the bandwidth limit because I'm hitting the monthly bandwidth limit for the VPS, and to funnel traffic to HK1)

**Update on 2024-07-04:** I've once again reduced bandwidth for HK2. Seriously, it has only been less than 4 days into July and the server has already hit 25% of its bandwidth allowance.
