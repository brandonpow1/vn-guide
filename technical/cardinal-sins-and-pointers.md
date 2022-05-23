# Cardinal Sins & Pointers

* Don't define variables the first time in labels. Stick to the habit of `define` or `default`, or even an `init python:` if you really have to. When you define variables in labels you tend to assume they'll work elsewhere, and then when you try to call up a screen or label without ever passing through the label with that variable definition, you get a KeyError.
* If you have a self-written Python script you're proud of, that calls files, `os.read()` is likely to return an error. Try `renpy.file()` instead but remember that it's read-only. If you need to save variables... I dunno a good fail-proof method yet.

Good Practices

