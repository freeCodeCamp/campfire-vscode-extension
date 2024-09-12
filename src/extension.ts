/**
 * @copyright freeCodeCamp
 * @license BSD-3
 * @author Naomi Carrigan
 */

import vscode from "vscode";
import { playSound } from "./sound.js";

/**
 * Instantiates the extensions, registers the commands necessary to
 * trigger on typing.
 * @param context -- The extension context.
 */
function activate(context: vscode.ExtensionContext): void {
  const outputChannel = vscode.window.createOutputChannel("Campfire Mode");
  outputChannel.show();
  outputChannel.appendLine("Campfire Mode Activated");

  // Listen for the 'type' command
  context.subscriptions.push(
    vscode.commands.registerCommand("type", (rest) => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        const originalCommand = vscode.commands.executeCommand(
          "default:type",
          rest,
        );
        playSound(outputChannel, context);
        return originalCommand;
      }
      return null;
    }),
  );

  outputChannel.appendLine("Event listeners set up");
}

export { activate };
