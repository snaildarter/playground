import * as vscode from 'vscode';
import * as fs from 'fs';

const hover = vscode.languages.registerHoverProvider("*", {
    provideHover(document, position) {
        const word = document.getText(document.getWordRangeAtPosition(position));
        const lineText = document.lineAt(position)?.text;

        console.log(word);
        return new vscode.Hover(`lang tip:
        - ${word}
        - ${JSON.stringify(lineText)}
        - ${JSON.stringify(position)}
        `);
    },
});

export default hover;