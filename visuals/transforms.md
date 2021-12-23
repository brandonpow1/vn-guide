# Transforms

{% hint style="info" %}
Official documentation: [https://www.renpy.org/doc/html/atl.html](https://www.renpy.org/doc/html/atl.html)
{% endhint %}

## Static vs Parameterized

There are two styles to writing a transition in Ren'Py:

{% tabs %}
{% tab title="Static" %}
```renpy
transform shake:
    xoffset 0
    linear 0.02 xoffset -3
    linear 0.02 xoffset 0
    linear 0.02 xoffset 3
    linear 0.02 xoffset 0
    repeat
```
{% endtab %}

{% tab title="Parameterized" %}
```renpy
transform shake(t=0.02, x=3, waittime=0, count=None):
        xoffset 0
        easein t xoffset -x
        easein t xoffset 0
        easein t xoffset x
        easein t xoffset 0
        pause waittime
        repeat count
```
{% endtab %}
{% endtabs %}

Let's talk about the pros and cons of both. In the above example, both codes do the same thing when applied to a sprite, for example:

```renpy
show eileen at center, shake
e "Help! I'm shaking!"
hide eileen
show eileen at center
e "I'm no longer shaking."
```

![It looks a lot smoother in-game, trust me](../assets/shake2.gif)

