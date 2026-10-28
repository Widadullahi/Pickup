# Pickup

Independent Nigerian freight marketplace prototype.

## Run locally

```bash
python3 -m http.server 8000 --directory dist
```

Open http://localhost:8000. Landing page: dist/index.html. Dashboard: dist/dashboard.html.

Booking, payments, KYC, matching and tracking are demos. No live services are connected. Demo records use browser storage.

Vehicle photography is credited on the landing page (Cars.ng and Toyota). Other imagery is AI-generated. Review image usage rights before commercial launch.

## Fare negotiation

Customers propose a fare, compare simulated carrier acceptances and counter-offers, send a counter, and review the agreed total before saving a demo booking. Carrier responses and the included 10% fee are illustrative. Live negotiation, messaging and payments are not connected.
