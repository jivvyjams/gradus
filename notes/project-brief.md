# Project Brief:

**Project name:** Mawsam / Taqsi / Gradus

**Your name:** Jawad Al Bdiwi

**In one sentence, what does your app do?** Displays detailed weather view

---

## The API

**API you are using:** [Open-Meteo](https://open-meteo.com/)

**Link to the API documentation:** [Documentation](https://open-meteo.com/en/docs)

**Does it require an API key?**

- [x] No
- [ ] Yes — I have already obtained one and confirmed it works

**Paste an example API response (just the first item if it's a list):**

```json
{
  "latitude": 52.52,
  "longitude": 13.419998,
  "generationtime_ms": 0.001430511474609375,
  "utc_offset_seconds": 0,
  "timezone": "GMT",
  "timezone_abbreviation": "GMT",
  "elevation": 38.0
}
```

---

## Pages

**`HomePage.tsx` — path:** `/`

What it shows: home page with header, navigation bar, search bar and footer.

**`NotFoundPage.tsx` — path:** (e.g. `/*`)

What it shows: not found page with 404 message that links back to home page.

**`WeatherPage.tsx` — path:** (e.g. `/leiden`) ← this must be a dynamic route

What it shows: detailed weather view of the city.

## Components

List the components you plan to build. Don't worry about getting this perfect — it will change as you build.

- `Navigation.tsx` — nav links, dark mode toggle
- `SearchBar.tsx` — input field to search for location
- `Weather.tsx` — temperature and weather condition
- `DetailView.tsx` — details of weather conditions and forecast

---

## State and data flow

**Where will your fetched data live?** `Weather.tsx` will likely hold the data

**Will any state need to be shared between components?** Probably not

---

## The form

**What does your form do?** Search

**What field(s) does it have?** Input field and submit button

**What validation will you add?** Valid string (no numbers) and empty submission handling

## Checklist before you start building

- [x] I have read the full project brief
- [x] My chosen API is free and doesn't require complex authentication
- [x] I have tested the API in my browser and confirmed it returns the data I expect
- [x] I have identified which endpoint gives me a list and which gives me a single item
