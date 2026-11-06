# Pickup

Independent Nigerian freight marketplace prototype.

## Run locally

```bash
python3 -m http.server 8000 --directory dist
```

Open http://localhost:8000. Landing page: dist/index.html. Dashboard: dist/dashboard.html.

For a Cloudflare-compatible preview:

```bash
npm install
npm run dev
```

## Deploy to Cloudflare Workers

The site is configured as a Cloudflare Worker with Static Assets. Wrangler publishes the contents of `dist/`, applies the security and cache rules in `dist/_headers`, and serves `dist/404.html` for missing routes.

```bash
npm install
npx wrangler login
npm run deploy
```

The first deployment creates the `pickup-ng` Worker and returns its `workers.dev` URL. Add a custom domain later from Cloudflare Dashboard → Workers & Pages → pickup-ng → Settings → Domains & Routes.

Booking, payments, KYC, matching and tracking are demos. No live services are connected. Demo records use browser storage.

Vehicle photography is credited on the landing page (Cars.ng and Toyota). Other imagery is AI-generated. Review image usage rights before commercial launch.

## Fare negotiation

Customers propose a fare, compare simulated carrier acceptances and counter-offers, send a counter, and review the agreed total before saving a demo booking. Carrier responses and the included 10% fee are illustrative. Live negotiation, messaging and payments are not connected.


Delivery check page: open `dist/check.html`. The sample reference `PK-1048` shows an illustrative tracking layout; carrier lookup and live GPS are not connected.


Scheduled delivery demo: choose a future pickup date and time, then track it from the Scheduled deliveries tab. Booking data and carrier offers remain illustrative in this prototype.
