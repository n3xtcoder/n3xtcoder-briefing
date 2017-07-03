# n3xtcoder briefings

These are just static html/css/js. Slides are defined as sections. On mobile, they are stacked vertically and scrollable, rather than acting as slides.

Briefings are stored in named folders and the site.css is shared between them.

When getting a location map image, generate one from google's static maps api, then save it locally, so we don't need to keep hitting their API or use an API key.

e.g:

```
https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyA4rAT0fdTZLNkJ5o0uaAwZ89vVPQpr_Kc&center=48.89239226819903,2.388165049999998&zoom=17&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0xf5f5f5&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x616161&style=element:labels.text.stroke%7Ccolor:0xf5f5f5&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:road%7Celement:geometry%7Ccolor:0xffffff&style=feature:road.arterial%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:road.highway%7Celement:geometry%7Ccolor:0xdadada&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:transit.line%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:transit.station%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:water%7Celement:geometry%7Ccolor:0xc9c9c9&style=feature:water%7Celement:geometry.fill%7Ccolor:0x0c3c64&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&size=800x800&markers=size:mid%7Ccolor:0x0c3c64%7C48.89239226819903,2.388165049999998
```
