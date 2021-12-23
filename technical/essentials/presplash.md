---
description: Content warning, language selectors...
---

# Presplash

{% hint style="info" %}
Official documentation: [https://www.renpy.org/doc/html/splashscreen\_presplash.html](https://www.renpy.org/doc/html/splashscreen\_presplash.html)
{% endhint %}

When your game needs to show something right at the start, you use the `presplash` label. It returns to the main menu. This label is great for things like your project logo, an opening movie and other things.

## One-Time Screen (Persistent Data)

If you want to show a warning just once, a combination of persistent data and a check should be used. Displaying both a content warning and asking for the player's preferred language on first start can help the player get a head start.

In the following example, this sample Ren'Py project has two languages, German and English. The game was initially written in German, and was later translated into English. On first start, the game presents itself in German. (As a coder joining an existing project sometimes you will encounter such cases where English isn't the main language.) However, some players who download the game without reading the instructions on itch.io find themselves lost when presented with the following screen:

![](</assets/deutschmenue.webp>)

Just having the game present itself in a language not understood by the player can reduce the desire to play. Sure, one can try and spam all the buttons in the game and arrive at the language selection, but some languages don't use the letters in the alphabet.

Sample solution:

{% tabs %}
{% tab title="Result" %}
![](</assets/sprachauswahl.webp>)
{% endtab %}

{% tab title="Code" %}
```renpy
# This checks if the game has ever been run before.
default persistent.firstrun = False

# Splashscreen code runs before main menu.
label splashscreen:
    # This if statement checks whether the game's been run before.
    if persistent.firstrun == False:
        # If not, it draws a black screen:
        scene black
        # And calls the selection screen. The dissolve is for aesthetic effect.
        call screen language_select with dissolve
    else:
        pass
    # This return loads the main menu.
    return

screen language_select:
    modal True
    frame:
        xalign 0.5 yalign 0.5
        # If you have a fancy background, you can add it here.
        background None
        xsize 1200 ysize 1000
        vbox:
            xalign 0.5 yalign 0.5
            spacing 50
            label "{size=+5}Language Select / Sprachauswahl{/size}" xalign 0.5
            vbox:
                xalign 0.5
                spacing 30
                button:
                    xsize 400 ysize 100
                    idle_background "#00000080"
                    hover_background "#ADD8E660"
                    text "English / Englisch" xalign 0.5 yalign 0.5
                    action [Language("english"), SetVariable("persistent.firstrun", True), Return()]
                button:
                    xsize 400 ysize 100
                    idle_background "#00000080"
                    hover_background "#ADD8E660"
                    text "German / Deutsch" xalign 0.5 yalign 0.5
                    action [Language(None), SetVariable("persistent.firstrun", True), Return()]
```
{% endtab %}
{% endtabs %}

Oh, but do remember, while it is tempting to add a flag of a country here, [flags don't represent languages](http://www.flagsarenotlanguages.com/blog/why-flags-do-not-represent-language/#:\~:text=Languages%20represent%20a%20shared%20method,confuse%20or%20even%20offend%20users.), but rather nations themselves. I would avoid using flags as a visual aid here.

### Combining Content Warning + Language Selection

Here is a different style of language selection which is more serious; it carries a content warning. That means with one click of a button the player both accepts to read your VN that contains such content, and selects the language. For a majority of the VNs I come across, this is an NSFW warning, however there are many other topics that can and should be forewarned to the player. In the following example, the sample VN deals with self-harm and death, two topics that can be considered disturbing to players.

{% tabs %}
{% tab title="Result" %}
![](</assets/inhaltswarnung.webp>)
{% endtab %}

{% tab title="Code" %}
```renpy
default persistent.firstrun = False

label splashscreen:
    if persistent.firstrun == False:
        scene black
        call screen language_select with dissolve
    else:
        pass
    return

screen language_select:
    modal True
    frame:
        xalign 0.5 yalign 0.5
        background None
        xsize 1200 ysize 1000
        vbox:
            yalign 0.5
            spacing 25
            label "{size=+5}Content Warning / Inhaltswarnung{/size}" xalign 0.5
            vbox:
                spacing 10
                # Warnings for multiple languages can be aesthetically designed by changing the color or size of the other language.
                text "This visual novel contains elements of self-harm and death."
                text "{size=-2}In diesem Visual Novel werden Szenen von selbstverletzenden Verhalten und Tod dargestellt.{/size}" color "#DCDCDC"
            vbox:
                spacing 10
                text "Please select a language."
                text "{size=-2}Bitte wählen Sie eine Sprache.{/size}" color "#DCDCDC"
            null height 20
            hbox:
                xalign 0.5
                spacing 200
                button:
                    xsize 350 ysize 70
                    idle_background "#00000080"
                    hover_background "#ADD8E660"
                    text "English / Englisch" xalign 0.5 yalign 0.5
                    action [Language("english"), SetVariable("persistent.firstrun", True), Return()]
                button:
                    xsize 350 ysize 70
                    idle_background "#00000080"
                    hover_background "#ADD8E660"
                    text "German / Deutsch" xalign 0.5 yalign 0.5
                    action [Language(None), SetVariable("persistent.firstrun", True), Return()]
            null height 20
            vbox:
                spacing 10
                text "{size=-5}Language settings can be changed in Preferences.{/size}"
                text "{size=-5}Sprachen können in der Einstellungen ausgewählt werden.{/size}" color "#DCDCDC"
```
{% endtab %}
{% endtabs %}

(Assistance on the topic of translations, as well as the rational of content warnings will be handled in future pages.)
