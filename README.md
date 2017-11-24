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
