/**
 * Fynes Forge — Theme Types
 * Minimal type surface for VS Code colour-theme JSON generation.
 */

export interface TokenSetting {
  foreground?: string;
  fontStyle?: '' | 'italic' | 'bold' | 'underline' | 'italic bold' | 'italic underline';
}

export interface TokenColor {
  name: string;
  scope: string | string[];
  settings: TokenSetting;
}

export interface SemanticTokenColors {
  [key: string]: string | { foreground: string; fontStyle?: string };
}

export interface WorkbenchColors {
  [key: string]: string;
}

export interface ThemeDefinition {
  name: string;
  type: 'dark' | 'light';
  semanticHighlighting: boolean;
  colors: WorkbenchColors;
  semanticTokenColors: SemanticTokenColors;
  tokenColors: TokenColor[];
}
