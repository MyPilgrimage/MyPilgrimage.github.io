# Site Favicons
`/assets/img/favicons/`

## Changelog
person-hiking-solid.svg <i class="fa-solid fa-person-hiking"><!--About--></i>
 [Hiker Icon](https://fontawesome.com/icons/person-hiking?f=classic&s=solid)
 [Favicon generator](https://realfavicongenerator.net/)

## FAVICON_LIBRARY
- [x] android-chrome-192x192.png 	(Added)
- [x] android-chrome-512x512.png 	(Added)
- [x] apple-touch-icon.png 			(Downloaded)
- [x] favicon-16x16.png 			(Added -NEEDS_BACKGROUND?)
- [x] favicon-32x32.png 			(Added -NEEDS_BACKGROUND?)
- [x] favicon-96x96.png 			(Downloaded)
- [x] favicon.ico 					(Downloaded)
- [x] favicon.svg 					(Downloaded)
- [x] mstile-150x150.png 			(Added)
- [x] web-app-manifest-192x192.png 	(Downloaded)
- [x] web-app-manifest-512x512.png 	(Downloaded)

----------------------------------------
## Additionals

FIL: `index.html`
<!DOCTYPE HTML>
<html>
	<head>
	<link rel="icon" type="image/png" href="/assets/img/favicons/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/assets/img/favicons/favicon.svg" />
	<link rel="shortcut icon" href="/assets/img/favicons/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/assets/img/favicons/apple-touch-icon.png" />
	<meta name="apple-mobile-web-app-title" content="Pilgrimage" />
	<link rel="manifest" href="/assets/img/favicons/site.webmanifest" />
	</head>
</html>

FILE: `site.webmanifest`
<!DOCTYPE JSON>
<json>
{
  "name": "Pilgrimage",
  "short_name": "Pilgrim",
  "icons": [
    {
      "src": "/assets/img/favicons/web-app-manifest-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "/assets/img/favicons/web-app-manifest-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone"
}
</json>

----------------------------------------
