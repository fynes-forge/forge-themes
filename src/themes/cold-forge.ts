/**
 * Fynes Forge — "Cold Steel" (High-contrast dark variant)
 * Name pun: "Cold Steel" — the finished product; forged, cooled and razor sharp.
 * Maximum contrast. Near-black background, bright crisp whites and brand
 * accent colours turned up to full saturation. For those who code in the void.
 */

import { brand, alpha } from '../palette';
import type { ThemeDefinition } from '../types';

export const coldForge: ThemeDefinition = {
  name: 'Cold Forge',
  type: 'dark',
  semanticHighlighting: true,

  // ── Workbench UI colours ───────────────────────────────────────────────
  colors: {
    'editor.background':                     brand.steelBgDeep,
    'editor.foreground':                     brand.steelFg,
    'editor.lineHighlightBackground':        alpha(brand.steelBgAlt, 0.7),
    'editor.selectionBackground':            alpha(brand.steelAccent2, 0.3),
    'editor.inactiveSelectionBackground':    alpha(brand.steelMuted, 0.2),
    'editor.selectionHighlightBackground':   alpha(brand.steelAccent2, 0.15),
    'editor.wordHighlightBackground':        alpha(brand.steelAccent1, 0.18),
    'editor.wordHighlightStrongBackground':  alpha(brand.steelAccent1, 0.35),
    'editor.findMatchBackground':            alpha(brand.steelAccent3, 0.45),
    'editor.findMatchHighlightBackground':   alpha(brand.steelAccent3, 0.2),
    'editorCursor.foreground':               brand.steelAccent3,
    'editorWhitespace.foreground':           alpha(brand.steelMuted, 0.3),
    'editorIndentGuide.background1':         alpha(brand.steelMuted, 0.2),
    'editorIndentGuide.activeBackground1':   alpha(brand.steelAccent2, 0.5),
    'editorLineNumber.foreground':           alpha(brand.steelMuted, 0.5),
    'editorLineNumber.activeForeground':     brand.steelAccent3,
    'editorRuler.foreground':                alpha(brand.steelMuted, 0.2),
    'editorBracketMatch.background':         alpha(brand.steelAccent2, 0.2),
    'editorBracketMatch.border':             brand.steelAccent2,
    'editorError.foreground':                '#FF5370',
    'editorWarning.foreground':              brand.steelAccent3,
    'editorInfo.foreground':                 brand.steelAccent1,
    'editorGutter.background':               brand.steelBgDeep,
    'editorGutter.addedBackground':          alpha(brand.steelAccent1, 0.7),
    'editorGutter.modifiedBackground':       alpha(brand.steelAccent3, 0.7),
    'editorGutter.deletedBackground':        alpha(brand.steelAccent4, 0.7),

    'sideBar.background':                    brand.steelBg,
    'sideBar.foreground':                    brand.steelFg,
    'sideBar.border':                        alpha(brand.steelMuted, 0.2),
    'sideBarTitle.foreground':               brand.steelAccent3,
    'sideBarSectionHeader.background':       alpha(brand.steelBgAlt, 0.8),
    'sideBarSectionHeader.border':           alpha(brand.steelMuted, 0.2),

    'activityBar.background':                brand.steelBg,
    'activityBar.foreground':                brand.steelFg,
    'activityBar.inactiveForeground':        alpha(brand.steelMuted, 0.7),
    'activityBar.border':                    alpha(brand.steelMuted, 0.15),
    'activityBarBadge.background':           brand.steelAccent4,
    'activityBarBadge.foreground':           '#FFFFFF',

    'statusBar.background':                  brand.steelBg,
    'statusBar.foreground':                  brand.steelFg,
    'statusBar.border':                      alpha(brand.steelMuted, 0.2),
    'statusBarItem.remoteBackground':        brand.steelAccent5,
    'statusBarItem.remoteForeground':        '#FFFFFF',

    'titleBar.activeBackground':             brand.steelBgDeep,
    'titleBar.activeForeground':             brand.steelFg,
    'titleBar.inactiveBackground':           alpha(brand.steelBgDeep, 0.8),
    'titleBar.border':                       alpha(brand.steelMuted, 0.15),

    'editorGroupHeader.tabsBackground':      brand.steelBg,
    'tab.activeBackground':                  brand.steelBgAlt,
    'tab.activeForeground':                  brand.steelFg,
    'tab.activeBorderTop':                   brand.steelAccent3,
    'tab.inactiveBackground':                brand.steelBg,
    'tab.inactiveForeground':                alpha(brand.steelMuted, 0.8),
    'tab.hoverBackground':                   alpha(brand.steelBgAlt, 0.6),
    'tab.border':                            alpha(brand.steelMuted, 0.1),

    'list.activeSelectionBackground':        alpha(brand.steelAccent2, 0.15),
    'list.activeSelectionForeground':        brand.steelFg,
    'list.inactiveSelectionBackground':      alpha(brand.steelMuted, 0.1),
    'list.hoverBackground':                  alpha(brand.steelMuted, 0.07),
    'list.highlightForeground':              brand.steelAccent3,

    'input.background':                      alpha(brand.steelBgAlt, 0.8),
    'input.foreground':                      brand.steelFg,
    'input.border':                          alpha(brand.steelMuted, 0.4),
    'input.placeholderForeground':           alpha(brand.steelMuted, 0.5),

    'button.background':                     brand.steelAccent4,
    'button.foreground':                     '#FFFFFF',
    'button.hoverBackground':                alpha(brand.steelAccent4, 0.8),

    'badge.background':                      brand.steelAccent4,
    'badge.foreground':                      '#FFFFFF',

    'scrollbarSlider.background':            alpha(brand.steelMuted, 0.18),
    'scrollbarSlider.hoverBackground':       alpha(brand.steelMuted, 0.35),
    'scrollbarSlider.activeBackground':      alpha(brand.steelAccent2, 0.45),

    'panel.background':                      brand.steelBg,
    'panel.border':                          alpha(brand.steelMuted, 0.2),
    'panelTitle.activeForeground':           brand.steelAccent3,
    'panelTitle.activeBorder':               brand.steelAccent3,
    'panelTitle.inactiveForeground':         brand.steelMuted,

    'terminal.background':                   brand.steelBgDeep,
    'terminal.foreground':                   brand.steelFg,
    'terminal.ansiBlack':                    brand.steelBg,
    'terminal.ansiBlue':                     brand.steelAccent2,
    'terminal.ansiBrightBlack':              brand.steelMuted,
    'terminal.ansiBrightBlue':               brand.steelAccent1,
    'terminal.ansiBrightCyan':               brand.steelAccent1,
    'terminal.ansiBrightGreen':              '#89DDFF',
    'terminal.ansiBrightMagenta':            brand.steelAccent4,
    'terminal.ansiBrightRed':                '#FF5370',
    'terminal.ansiBrightWhite':              brand.steelFg,
    'terminal.ansiBrightYellow':             brand.steelAccent3,
    'terminal.ansiCyan':                     brand.steelAccent1,
    'terminal.ansiGreen':                    '#C3E88D',
    'terminal.ansiMagenta':                  brand.steelAccent5,
    'terminal.ansiRed':                      '#FF5370',
    'terminal.ansiWhite':                    brand.steelFg,
    'terminal.ansiYellow':                   brand.steelAccent3,
    'terminalCursor.foreground':             brand.steelAccent3,

    'gitDecoration.addedResourceForeground':       brand.steelAccent1,
    'gitDecoration.modifiedResourceForeground':    brand.steelAccent3,
    'gitDecoration.deletedResourceForeground':     brand.steelAccent4,
    'gitDecoration.untrackedResourceForeground':   brand.steelAccent2,
    'gitDecoration.ignoredResourceForeground':     alpha(brand.steelMuted, 0.5),
    'gitDecoration.conflictingResourceForeground': brand.steelAccent4,

    'focusBorder':          alpha(brand.steelAccent2, 0.7),
    'selection.background': alpha(brand.steelAccent2, 0.4),
    'foreground':           brand.steelFg,
    'icon.foreground':      brand.steelFg,
  },

  // ── Semantic token colours ─────────────────────────────────────────────
  semanticTokenColors: {
    'variable':       brand.steelFg,
    'variable.readonly': brand.steelAccent2,
    'parameter':      brand.steelAccent2,
    'function':       brand.steelAccent1,
    'method':         brand.steelAccent1,
    'class':          brand.steelAccent3,
    'interface':      { foreground: brand.steelAccent3, fontStyle: 'italic' },
    'type':           { foreground: brand.steelAccent3, fontStyle: 'italic' },
    'enum':           brand.steelAccent3,
    'enumMember':     brand.steelAccent4,
    'property':       brand.steelAccent3,
    'keyword':        brand.steelAccent4,
    'modifier':       brand.steelAccent4,
    'string':         brand.steelAccent2,
    'number':         brand.steelAccent4,
    'operator':       brand.steelAccent5,
    'decorator':      { foreground: brand.steelAccent3, fontStyle: 'italic' },
    'comment':        { foreground: alpha(brand.steelMuted, 0.7), fontStyle: 'italic' },
  },

  // ── TextMate token colours ─────────────────────────────────────────────
  tokenColors: [
    {
      name: 'Comments',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: alpha(brand.steelMuted, 0.7), fontStyle: 'italic' },
    },
    {
      name: 'Keywords',
      scope: ['keyword', 'keyword.control', 'storage.modifier'],
      settings: { foreground: brand.steelAccent4 },
    },
    {
      name: 'Storage types',
      scope: ['storage.type'],
      settings: { foreground: brand.steelAccent4, fontStyle: 'italic' },
    },
    {
      name: 'Strings',
      scope: ['string', 'string.quoted', 'string.template'],
      settings: { foreground: brand.steelAccent2 },
    },
    {
      name: 'Numbers',
      scope: ['constant.numeric'],
      settings: { foreground: brand.steelAccent4 },
    },
    {
      name: 'Language constants',
      scope: ['constant.language'],
      settings: { foreground: brand.steelAccent4, fontStyle: 'italic' },
    },
    {
      name: 'Named constants',
      scope: ['variable.other.constant', 'constant.other'],
      settings: { foreground: brand.steelAccent4 },
    },
    {
      name: 'Functions',
      scope: ['entity.name.function', 'support.function'],
      settings: { foreground: brand.steelAccent1 },
    },
    {
      name: 'Function parameters',
      scope: ['variable.parameter'],
      settings: { foreground: brand.steelAccent2 },
    },
    {
      name: 'Classes',
      scope: ['entity.name.class', 'entity.name.type.class'],
      settings: { foreground: brand.steelAccent3 },
    },
    {
      name: 'Interfaces & types',
      scope: ['entity.name.type.interface', 'entity.name.type.alias', 'entity.name.type'],
      settings: { foreground: brand.steelAccent3, fontStyle: 'italic' },
    },
    {
      name: 'Object properties',
      scope: ['support.type.property-name', 'meta.object-literal.key'],
      settings: { foreground: brand.steelAccent3 },
    },
    {
      name: 'Punctuation',
      scope: ['punctuation', 'meta.brace', 'punctuation.separator'],
      settings: { foreground: brand.steelAccent5 },
    },
    {
      name: 'Operators',
      scope: ['keyword.operator'],
      settings: { foreground: brand.steelAccent5 },
    },
    {
      name: 'HTML tags',
      scope: ['entity.name.tag'],
      settings: { foreground: brand.steelAccent4 },
    },
    {
      name: 'HTML attributes',
      scope: ['entity.other.attribute-name'],
      settings: { foreground: brand.steelAccent3 },
    },
    {
      name: 'CSS properties',
      scope: ['support.type.property-name.css'],
      settings: { foreground: brand.steelAccent1 },
    },
    {
      name: 'This / self',
      scope: ['variable.language.this', 'variable.language.self'],
      settings: { foreground: brand.steelAccent4, fontStyle: 'italic' },
    },
    {
      name: 'Decorators',
      scope: ['meta.decorator', 'entity.name.function.decorator'],
      settings: { foreground: brand.steelAccent3, fontStyle: 'italic' },
    },
    {
      name: 'Markdown headings',
      scope: ['markup.heading'],
      settings: { foreground: brand.steelAccent3, fontStyle: 'bold' },
    },
  ],
};
