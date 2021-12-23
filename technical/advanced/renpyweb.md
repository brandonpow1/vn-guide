# Renpyweb

{% hint style="danger" %}
This distribution is not compatible with [Discord Rich Presence](discord-rich-presence.md). You will have to manually delete all calls to discordrpc for every build you release.
{% endhint %}

Distributing for web browsers is a great way to get people to play your game without running Ren'Py executables. Great for those who are lazy to unpack your .zip file every time you update your game.

### Major Limitations

* The asset streaming service isn't perfect. Even with a blazing fast internet speed it can cause sprites and backgrounds to appear blurry on first display. Also music only cuts in when a significant amount loads (personal experience: \~5 seconds after `play` command). If you're making a cutscene with timed music, consider having it preloaded in game.zip.
* You can't play it on iOS browsers. Safari, Firefox, Chrome on the iPhone... they won't let you play this. Sorry.

## How To Set Up

1. Press this on the launcher- ![](</assets/webbutton.webp>) -and let it download the necessary files.
2. Press this button- ![](</assets/buildbutton.webp>) -and wait.
3. Your files should be in the builds folder. That's it!



The official website for this is [https://renpy.beuc.net/](https://renpy.beuc.net) (Wayback Archive version [here](https://web.archive.org/web/20210303225842/https://renpy.beuc.net/)), in case you want to read more. The github repo is [here](https://github.com/renpy/renpyweb).
