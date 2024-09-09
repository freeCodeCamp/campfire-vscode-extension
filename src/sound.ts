/**
 * @copyright freeCodeCamp
 * @license BSD-3
 * @author Naomi Carrigan
 */
import { join } from "node:path";
import player from "play-sound";
import { urls } from "./urls.js";
import type vscode from "vscode";

/**
 * Plays a random tone from freeCodeCamp's campfire mode library.
 * @param log -- The output channel to log to.
 * @param context -- The Visual Studio Context API.
 */
export const playSound = (
  log: vscode.OutputChannel,
  context: vscode.ExtensionContext,
): void => {
  const audio = player();

  const selected
    = urls[Math.floor(Math.random() * urls.length)] ?? "Guitar-Sample-01.mp3";

  if (process.platform === "win32") {
    audio.player = "powershell";
  }
  const relativePath = join("out", "audio", selected);
  const audioPath = context.asAbsolutePath(relativePath);

  audio.play(audioPath, (error) => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, @typescript-eslint/strict-boolean-expressions -- typedef says it's always there, but it's only passed if there is an error.
    if (error) {
      log.appendLine(`Error playing audio: ${JSON.stringify(error, null, 2)}`);
      log.appendLine(`Error while playing sound: ${audioPath}`);
    }
  });
};
