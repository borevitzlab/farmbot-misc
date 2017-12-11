# farmbot-misc
Hold farmbot todos and tips

## Farmbot image scraper

The farmbot web app currently appears to hold 100 images. No batch download option is currently available in the provided interface.

scraper.js can be pasted into the Chrome console when the web app is loaded to the [farmware interface](https://my.farmbot.io/app/farmware). This will output text under the Photos widget as url-filename pairs. Copy this text into a file, and run this (using the filename `urls.txt`):

```
curl -K urls.txt
```

This will download all the photos and name them according to unix timestamps.

Tested on Chrome 62 with Mac OS 10.12, but should work on most browsers and systems with curl.

## Test plant

*Y coords*

Row 1 - 270 - white radish

+380

Row 2 - 650 - coriander

+450

Row 3 - 1100 - red radish

*X coords*

Planting x from 150 to 2400 in 200 mm intervals

150
350
550
750
950
1150
1350
1550
1750
1950
2150
2350
