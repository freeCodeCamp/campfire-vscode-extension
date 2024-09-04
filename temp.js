const { writeFile } = require("fs").promises;
const { join } = require("path");

(async () => {
    const base = "https://campfire-mode.freecodecamp.org/mariachi/";
    const urls = [ "Guitar-Sample-01.mp3",
        "Guitar-Sample-02.mp3",
        "Guitar-Sample-03.mp3",
        "Guitar-Sample-04.mp3",
        "Guitar-Sample-05.mp3",
        "Guitar-Sample-06.mp3",
        "Guitar-Sample-07.mp3",
        "Guitar-Sample-08.mp3",
        "Guitar-Sample-09.mp3",
        "Guitar-Sample-10.mp3",
        "Guitar-Sample-11.mp3",
        "Guitar-Sample-12.mp3",
        "Guitar-Sample-13.mp3",
        "Guitar-Sample-14.mp3",
        "Guitar-Sample-15.mp3",
        "Guitar-Sample-16.mp3",
        "Guitar-Sample-17.mp3",
        "Guitar-Sample-18.mp3",
        "Guitar-Sample-19.mp3",
        "Guitar-Sample-20.mp3",
        "Guitar-Sample-21.mp3",
        "Guitar-Sample-22.mp3",
        "Guitar-Sample-23.mp3",
        "Guitar-Sample-24.mp3",
        "Guitar-Sample-25.mp3",
        "Guitar-Sample-26.mp3",
        "Guitar-Sample-27.mp3",
        "Guitar-Sample-28.mp3",
        "Guitar-Sample-29.mp3",
        "Guitar-Sample-30.mp3",
        "Guitar-Sample-31.mp3",
        "Guitar-Sample-32.mp3",
        "Guitar-Sample-33.mp3",
        "Guitar-Sample-34.mp3",
        "Guitar-Sample-35.mp3",
        "Guitar-Sample-36.mp3",
        "Guitar-Sample-37.mp3",
        "Guitar-Sample-38.mp3",
        "Guitar-Sample-39.mp3",
        "Guitar-Sample-40.mp3",
        "Guitar-Sample-41.mp3",
        "Guitar-Sample-42.mp3",
        "Guitar-Sample-43.mp3",
        "Guitar-Sample-44.mp3",
        "Guitar-Sample-45.mp3" ];
    for (const url of urls) {
        const response = await fetch(base + url);
        const buffer = await response.arrayBuffer();
        // write to /src/audio/{url}
        await writeFile(join(__dirname, "src", "audio", url), Buffer.from(buffer));
    }
})();