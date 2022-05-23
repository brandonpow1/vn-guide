# Translation
Before reading this section, read the Ren'Py documentation about translating a game first. Tl;dr:
* Generate translations by choosing the 
## Choosing Who and When
### Who: Fans or Professionals?
Some projects are lucky enough to be graced by fans who want to translate the game into their native language. My opinion? Support their endeavor as best you can. The quality of translations by fans can be quite high, especially given the fact that they're volunteering! (And anyways if you said no, they'd still be able to push out a translation but without the benefits of your future bug-fixes. Sad.)

Other projects, especially those targeting consoles, may want to hire professional translation services. The cost of doing this should be leveraged on budget. It should not take more than a quarter of the available funds, especially not considering you still have your coders, artists and musicians to think about...

### When: During or After?
There are two times a visual novel can be translated: either in between builds or right at the end when development finishes. The option easiest to the developer is after, since no new text is written. However (as is the case with fan translations most times) everyone is eager to play the latest build with translations, which is a good sign of an interested fanbase. It can be daunting at first to devs with all the additional work, but tell them to keep an open mind. Every translation means being able to reach out to a new playerbase.

## Steps
### Preparing for First Translation
Generate translations for your project by going to Generate Translations in the Actions section of the SDK. When naming a translation, know that you cannot use special characters. I recommend sticking to the English language when naming. You can choose whether or not to capitalize sections, because ultimately it's just a folder name that's referenced in the code. 

There are going to be a ton of bugs. Be mentally ready for this. The common display bugs are in the form of:
* untranslated strings IN A SCREEN: get in the habit of doing `text _("text")` everywhere:
** screen elements eg. `label _(")
** parameters eg. `action Notify(_("This is a string."))`
** 

You may feel the urge to just push the game out after doing all this, however I recommend packaging it for the translators only and letting them test it out. After all, they've been translating in a text file the whole time and might want to change some strings after seeing how it plays out.

## Things people often forget
* If the main script changes, always regenerate translations!
** remember that only strings outside of a script can be ignored. Each block of dialogue has its own unique translation key, which changes even if you change one character in that block. So if you do
`text __("Species: ") + getattr(store, i + "_gallery").species`, then the second part of this doesn't translate. You have to let the object sit alone in a text element:
```py
hbox:
    text __("Species: ")
    text getattr(store, i + "_gallery").species
```
This will work.