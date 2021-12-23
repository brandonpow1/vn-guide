---
description: For speedrunners.
---

# Game Timer

![that's one hour, fifty-nine minutes of game time](/assets/gametimer.webp)

anywhere in the game, preferably in `script.rpy`

```renpy
init python:
    def save_playtime(d):
        d["playtime"] = renpy.get_game_runtime()
    config.save_json_callbacks = [save_playtime]
```

in `screens.rpy` in `screen file_slots(title)`:

```renpy
$ playtime = FileJson(slot, "playtime", empty=0, missing=0)
$ mins, secs = divmod(int(playtime), 60)
$ hrs, mins = divmod(mins, 60)
text "[hrs:02d]:[mins:02d]":
    style "slot_name_text"
```

(yes you can write `"[hrs:02d]:[mins:02d]:[secs:02d]"` to show seconds, but i feel that's a bit too granular for a vn.)
