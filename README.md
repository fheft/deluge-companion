# delugeCompanion

A website for easy browsing and searching of shortcuts for the [Synthstrom Deluge][].

**[👉 See it in action!](https://fheft.github.io/deluge-companion/)**

[Synthstrom Deluge]: https://synthstrom.com/product/deluge/

## Development

Developed using [Svelte][] and [tailwindcss][].

First install dependencies and start the interactive dev server:
```shell
npm run install
npm run dev
```

Then visit [http://localhost:5173](http://localhost:5173) to see the current development version.

[Svelte]: https://svelte.dev/
[tailwindcss]: https://tailwindcss.com/

## Adding or changing shortcuts

All shortcuts are stored in the [src/data/v4.1.0.ts](src/data/v4.1.0.ts) file.
Simply modify this file to add, edit or remove shortcuts.

Contributions are welcome – especially for new [community firmware][] features!

[community firmware]: https://github.com/SynthstromAudible/DelugeFirmware

## Acknowledgements

* The list of shortcuts used by this project is based on [deluge-shortcuts][] by handeyeco – thanks for doing the tremendous 
  amount of data entry!
* Deluge is a trademark of Synthstrom. This project is not affiliated with or endorsed by Synthstrom.

[deluge-shortcuts]: https://github.com/handeyeco/deluge-shortcuts