---
description: Version control > Google Drive
---

# Git(hub Desktop)

{% hint style="info" %}
Before reading this page, please take the time to familiarize yourself with Git concepts of push, pull, fetch, origin and merge. Even if you're not the tech person on your team, it'll help.
{% endhint %}

Google Drive works fine for keeping files for one person. It does what it says on the box: store your pictures, story and whatnot. It's when you're collaborating with other people that it becomes super messy. Nobody has time to point fingers at each other when version 125 of `script.rpy` suddenly causes a major game-breaking bug nobody knows how to fix and you're not sure how to revert it. Or if an asset gets deleted. Enter: Git!

#### What Git is:

* Easy version control.
* Sync helper. The master version in the cloud is king, and whatever gets pushed to it. This ensures everyone has the same version when they pull. No more out-of-sync edits!
* Auto-uploader. Backups can be too sparse and too few between, when disaster strikes. You can't plan your coffee spill right after a backup, after all.

#### What Git _isn't:_

* A fail-safe backup system. Sometimes, an artist may keep `.psd` files in the `images` folder, and your Git might have those files omitted in `.gitignore` so your other members don't have to sync gigabytes of data per edit. But! If you delete the folder itself, you can only restore files tracked by Git and nothing else. That means `.jpg` and `.png` files are fine, _but the_ `.psd` _files are gone forever._ Don't let this accidentally happen - back up! Online and offline.
* A Google Docs simultaneous editor system. You know those ads where everyone's collaborating on text at the same time in the same paragraph? Yeah, Git hates that and might throw you a merge conflict. This can be considered a downside, so either coordinate with your teammates to avoid editing the same paragraph between commits, or resolve conflicts manually.

Now if you're still not convinced to use this system, that's ok, the guide doesn't require you to use it. Just be very careful with your project's assets.

## Resolving Merge Conflicts

