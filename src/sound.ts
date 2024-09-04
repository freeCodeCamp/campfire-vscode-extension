/**
 * @copyright nhcarrigan
 * @license Naomi's Public License
 * @author Naomi Carrigan
 */

import { join } from "node:path";
import player from "play-sound";
import { urls } from "./urls.js";
import type vscode from "vscode";

/**
 * Plays a random tone from freeCodeCamp's campfire mode library.
 * @param log -- The output channel to log to.
 */
export const playSound = (log: vscode.OutputChannel): void => {
  const audio = player();
  const selected
  = urls[Math.floor(Math.random() * urls.length)] ?? "Guitar-Sample-01.mp3";

  // eslint-disable-next-line unicorn/prefer-module -- we can't use import.module here because extensions for VSC are CJS.
  audio.play(join(__dirname, "audio", selected), (error) => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, @typescript-eslint/strict-boolean-expressions -- typedef says it's always there, but it's only passed if there is an error.
    if (error) {
      log.append(`Error playing audio: ${JSON.stringify(error, null, 2)}`);
    }
  });
};
