/**
 * Fynes Forge — "Ember & Anvil" (Warm dark variant)
 * Name pun: "Ember & Anvil" — the glow of hot coals on cold steel.
 * A warm counterpart to Forge Dark. Deep charred browns and embers
 * replace the cool blues, while brand lavender and cyan remain as
 * cool sparks against the heat.
 */

import { brand, alpha } from '../palette';
import type { ThemeDefinition } from '../types';

export const hearthforge: ThemeDefinition = {
  name: 'Hearthforge',
  type: 'dark',
  semanticHighlighting: true,

  // ── Workbench UI colours ───────────────────────────────────────────────
  colors: {
    'editor.background':                     brand.emberBgDeep,
    'editor.foreground':                     brand.emberFg,
    'editor.lineHighlightBackground':        alpha(brand.emberBg, 0.7),
    'editor.selectionBackground':            alpha(brand.emberOrange, 0.25),
    'editor.inactiveSelectionBackground':    alpha(brand.emberAmber, 0.12),
    'editor.selectionHighlightBackground':   alpha(brand.emberOrange, 0.15),
    'editor.wordHighlightBackground':        alpha(brand.emberCyan, 0.15),
    'editor.wordHighlightStrongBackground':  alpha(brand.emberCyan, 0.28),
    'editor.findMatchBackground':            alpha(brand.emberAmber, 0.45),
    'editor.findMatchHighlightBackground':   alpha(brand.emberAmber, 0.2),
    'editorCursor.foreground':               brand.emberAmber,
    'editorWhitespace.foreground':           alpha(brand.emberOrange, 0.2),
    'editorIndentGuide.background1':         alpha(brand.emberOrange, 0.15),
    'editorIndentGuide.activeBackground1':   alpha(brand.emberAmber, 0.4),
    'editorLineNumber.foreground':           alpha(brand.emberOrange, 0.45),
    'editorLineNumber.activeForeground':     brand.emberAmber,
    'editorBracketMatch.background':         alpha(brand.emberAmber, 0.2),
    'editorBracketMatch.border':             brand.emberAmber,
    'editorError.foreground':                brand.emberRed,
    'editorWarning.foreground':              brand.emberAmber,
    'editorInfo.foreground':                 brand.emberCyan,
    'editorGutter.background':               brand.emberBgDeep,
    'editorGutter.addedBackground':          alpha(brand.emberCyan, 0.6),
    'editorGutter.modifiedBackground':       alpha(brand.emberAmber, 0.6),
    'editorGutter.deletedBackground':        alpha(brand.emberRed, 0.6),

    'sideBar.background':                    brand.emberBgDeep,
    'sideBar.foreground':                    brand.emberFg,
    'sideBar.border':                        alpha(brand.emberOrange, 0.15),
    'sideBarTitle.foreground':               brand.emberAmber,
    'sideBarSectionHeader.background':       alpha(brand.emberBg, 0.6),
    'sideBarSectionHeader.border':           alpha(brand.emberOrange, 0.15),

    'activityBar.background':                brand.emberBgDeep,
    'activityBar.foreground':                brand.emberFg,
    'activityBar.inactiveForeground':        alpha(brand.emberOrange, 0.5),
    'activityBar.border':                    alpha(brand.emberOrange, 0.12),
    'activityBarBadge.background':           brand.emberRed,
    'activityBarBadge.foreground':           '#FFFFFF',

    'statusBar.background':                  brand.emberBg,
    'statusBar.foreground':                  brand.emberFg,
    'statusBar.border':                      alpha(brand.emberOrange, 0.15),
    'statusBarItem.remoteBackground':        brand.emberOrange,
    'statusBarItem.remoteForeground':        '#FFFFFF',

    'titleBar.activeBackground':             brand.emberBgDeep,
    'titleBar.activeForeground':             brand.emberFg,
    'titleBar.inactiveBackground':           alpha(brand.emberBgDeep, 0.8),
    'titleBar.border':                       alpha(brand.emberOrange, 0.12),

    'editorGroupHeader.tabsBackground':      brand.emberBgDeep,
    'tab.activeBackground':                  brand.emberBg,
    'tab.activeForeground':                  brand.emberFg,
    'tab.activeBorderTop':                   brand.emberAmber,
    'tab.inactiveBackground':                brand.emberBgDeep,
    'tab.inactiveForeground':                alpha(brand.emberOrange, 0.7),
    'tab.hoverBackground':                   alpha(brand.emberBg, 0.5),
    'tab.border':                            alpha(brand.emberOrange, 0.1),

    'list.activeSelectionBackground':        alpha(brand.emberOrange, 0.15),
    'list.activeSelectionForeground':        brand.emberFg,
    'list.inactiveSelectionBackground':      alpha(brand.emberAmber, 0.08),
    'list.hoverBackground':                  alpha(brand.emberOrange, 0.08),
    'list.highlightForeground':              brand.emberAmber,

    'input.background':                      alpha(brand.emberBg, 0.8),
    'input.foreground':                      brand.emberFg,
    'input.border':                          alpha(brand.emberOrange, 0.3),
    'input.placeholderForeground':           alpha(brand.emberOrange, 0.4),

    'button.background':                     brand.emberOrange,
    'button.foreground':                     '#FFFFFF',
    'button.hoverBackground':                brand.emberAmber,

    'badge.background':                      brand.emberRed,
    'badge.foreground':                      '#FFFFFF',

    'scrollbarSlider.background':            alpha(brand.emberOrange, 0.15),
    'scrollbarSlider.hoverBackground':       alpha(brand.emberOrange, 0.3),
    'scrollbarSlider.activeBackground':      alpha(brand.emberAmber, 0.4),

    'panel.background':                      brand.emberBgDeep,
    'panel.border':                          alpha(brand.emberOrange, 0.15),
    'panelTitle.activeForeground':           brand.emberAmber,
    'panelTitle.activeBorder':               brand.emberAmber,
    'panelTitle.inactiveForeground':         alpha(brand.emberOrange, 0.5),

    'terminal.background':                   brand.emberBgDeep,
    'terminal.foreground':                   brand.emberFg,
    'terminal.ansiBlack':                    brand.emberBg,
    'terminal.ansiBlue':                     brand.emberLavender,
    'terminal.ansiBrightBlack':              alpha(brand.emberOrange, 0.6),
    'terminal.ansiBrightBlue':               brand.emberCyan,
    'terminal.ansiBrightCyan':               brand.emberCyan,
    'terminal.ansiBrightGreen':              '#A8C89A',
    'terminal.ansiBrightMagenta':            brand.emberLavender,
    'terminal.ansiBrightRed':                brand.emberRed,
    'terminal.ansiBrightWhite':              brand.emberFg,
    'terminal.ansiBrightYellow':             brand.emberAmber,
    'terminal.ansiCyan':                     brand.emberCyan,
    'terminal.ansiGreen':                    '#7DBF8E',
    'terminal.ansiMagenta':                  brand.emberPink,
    'terminal.ansiRed':                      brand.emberRed,
    'terminal.ansiWhite':                    brand.emberFg,
    'terminal.ansiYellow':                   brand.emberAmber,
    'terminalCursor.foreground':             brand.emberAmber,

    'gitDecoration.addedResourceForeground':       brand.emberCyan,
    'gitDecoration.modifiedResourceForeground':    brand.emberAmber,
    'gitDecoration.deletedResourceForeground':     brand.emberRed,
    'gitDecoration.untrackedResourceForeground':   brand.emberLavender,
    'gitDecoration.ignoredResourceForeground':     alpha(brand.emberOrange, 0.4),

    'focusBorder':          alpha(brand.emberAmber, 0.6),
    'selection.background': alpha(brand.emberOrange, 0.3),
    'foreground':           brand.emberFg,
    'icon.foreground':      brand.emberFg,
  },

  // ── Semantic token colours ─────────────────────────────────────────────
  semanticTokenColors: {
    'variable':       brand.emberFg,
    'variable.readonly': brand.emberLavender,
    'parameter':      brand.emberLavender,
    'function':       brand.emberCyan,
    'method':         brand.emberCyan,
    'class':          brand.emberAmber,
    'interface':      { foreground: brand.emberAmber, fontStyle: 'italic' },
    'type':           { foreground: brand.emberAmber, fontStyle: 'italic' },
    'enum':           brand.emberAmber,
    'enumMember':     brand.emberOrange,
    'property':       brand.emberGold,
    'keyword':        brand.emberPink,
    'modifier':       brand.emberPink,
    'string':         brand.emberLavender,
    'number':         brand.emberOrange,
    'operator':       alpha(brand.emberAmber, 0.8),
    'decorator':      { foreground: brand.emberAmber, fontStyle: 'italic' },
    'comment':        { foreground: alpha(brand.emberOrange, 0.5), fontStyle: 'italic' },
  },

  // ── TextMate token colours ─────────────────────────────────────────────
  tokenColors: [
    {
      name: 'Comments',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: alpha(brand.emberOrange, 0.5), fontStyle: 'italic' },
    },
    {
      name: 'Keywords',
      scope: ['keyword', 'keyword.control', 'storage.modifier'],
      settings: { foreground: brand.emberPink },
    },
    {
      name: 'Storage types',
      scope: ['storage.type'],
      settings: { foreground: brand.emberPink, fontStyle: 'italic' },
    },
    {
      name: 'Strings',
      scope: ['string', 'string.quoted', 'string.template'],
      settings: { foreground: brand.emberLavender },
    },
    {
      name: 'Numbers',
      scope: ['constant.numeric'],
      settings: { foreground: brand.emberOrange },
    },
    {
      name: 'Language constants',
      scope: ['constant.language'],
      settings: { foreground: brand.emberOrange, fontStyle: 'italic' },
    },
    {
      name: 'Named constants',
      scope: ['variable.other.constant', 'constant.other'],
      settings: { foreground: brand.emberOrange },
    },
    {
      name: 'Functions',
      scope: ['entity.name.function', 'support.function'],
      settings: { foreground: brand.emberCyan },
    },
    {
      name: 'Function parameters',
      scope: ['variable.parameter'],
      settings: { foreground: brand.emberLavender },
    },
    {
      name: 'Classes',
      scope: ['entity.name.class', 'entity.name.type.class'],
      settings: { foreground: brand.emberAmber },
    },
    {
      name: 'Interfaces & types',
      scope: ['entity.name.type.interface', 'entity.name.type.alias', 'entity.name.type'],
      settings: { foreground: brand.emberAmber, fontStyle: 'italic' },
    },
    {
      name: 'Object properties',
      scope: ['support.type.property-name', 'meta.object-literal.key'],
      settings: { foreground: brand.emberGold },
    },
    {
      name: 'Punctuation',
      scope: ['punctuation', 'meta.brace', 'punctuation.separator'],
      settings: { foreground: alpha(brand.emberAmber, 0.7) },
    },
    {
      name: 'Operators',
      scope: ['keyword.operator'],
      settings: { foreground: alpha(brand.emberAmber, 0.8) },
    },
    {
      name: 'HTML tags',
      scope: ['entity.name.tag'],
      settings: { foreground: brand.emberPink },
    },
    {
      name: 'HTML attributes',
      scope: ['entity.other.attribute-name'],
      settings: { foreground: brand.emberAmber },
    },
    {
      name: 'CSS properties',
      scope: ['support.type.property-name.css'],
      settings: { foreground: brand.emberCyan },
    },
    {
      name: 'This / self',
      scope: ['variable.language.this', 'variable.language.self'],
      settings: { foreground: brand.emberPink, fontStyle: 'italic' },
    },
    {
      name: 'Decorators',
      scope: ['meta.decorator', 'entity.name.function.decorator'],
      settings: { foreground: brand.emberAmber, fontStyle: 'italic' },
    },
    {
      name: 'Markdown headings',
      scope: ['markup.heading'],
      settings: { foreground: brand.emberAmber, fontStyle: 'bold' },
    },
  ],
};
