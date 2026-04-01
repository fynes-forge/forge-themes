/**
 * Fynes Forge — "Daylighter" (Light theme)
 * Name pun: "Day-lighter" — a forge that works in broad daylight, no darkness needed.
 * Crisp lavender-white background with deepened brand colours for full readability.
 */

import { brand, alpha } from '../palette';
import type { ThemeDefinition } from '../types';

export const dayforge: ThemeDefinition = {
  name: 'Dayforge',
  type: 'light',
  semanticHighlighting: true,

  // ── Workbench UI colours ───────────────────────────────────────────────
  colors: {
    'editor.background':                     brand.lightBg,
    'editor.foreground':                     brand.lightText,
    'editor.lineHighlightBackground':        alpha(brand.lightBgAlt, 0.8),
    'editor.selectionBackground':            alpha(brand.deepLavender, 0.2),
    'editor.inactiveSelectionBackground':    alpha(brand.steelBlue, 0.12),
    'editor.selectionHighlightBackground':   alpha(brand.deepLavender, 0.12),
    'editor.wordHighlightBackground':        alpha(brand.cyan, 0.12),
    'editor.wordHighlightStrongBackground':  alpha(brand.cyan, 0.22),
    'editor.findMatchBackground':            alpha(brand.gold, 0.45),
    'editor.findMatchHighlightBackground':   alpha(brand.gold, 0.22),
    'editor.rangeHighlightBackground':       alpha(brand.gold, 0.1),
    'editorCursor.foreground':               brand.deepPink,
    'editorWhitespace.foreground':           alpha(brand.steelBlue, 0.3),
    'editorIndentGuide.background1':         alpha(brand.steelBlue, 0.15),
    'editorIndentGuide.activeBackground1':   alpha(brand.deepLavender, 0.4),
    'editorLineNumber.foreground':           alpha(brand.steelBlue, 0.5),
    'editorLineNumber.activeForeground':     brand.deepPink,
    'editorRuler.foreground':                alpha(brand.steelBlue, 0.2),
    'editorBracketMatch.background':         alpha(brand.deepLavender, 0.15),
    'editorBracketMatch.border':             brand.deepLavender,
    'editorError.foreground':                '#C0392B',
    'editorWarning.foreground':              brand.lightGold,
    'editorInfo.foreground':                 brand.lightFunction,
    'editorGutter.background':               brand.lightBg,
    'editorGutter.addedBackground':          alpha(brand.lightFunction, 0.6),
    'editorGutter.modifiedBackground':       alpha(brand.lightGold, 0.6),
    'editorGutter.deletedBackground':        alpha(brand.lightConstant, 0.6),

    // Side bar
    'sideBar.background':                    brand.lightBgAlt,
    'sideBar.foreground':                    brand.lightText,
    'sideBar.border':                        alpha(brand.steelBlue, 0.15),
    'sideBarTitle.foreground':               brand.lightGold,
    'sideBarSectionHeader.background':       alpha(brand.darkBlue, 0.06),
    'sideBarSectionHeader.foreground':       brand.lightText,
    'sideBarSectionHeader.border':           alpha(brand.steelBlue, 0.15),

    // Activity bar
    'activityBar.background':                brand.lightBgAlt,
    'activityBar.foreground':                brand.lightText,
    'activityBar.inactiveForeground':        alpha(brand.steelBlue, 0.6),
    'activityBar.border':                    alpha(brand.steelBlue, 0.12),
    'activityBarBadge.background':           brand.lightKeyword,
    'activityBarBadge.foreground':           '#FFFFFF',

    // Status bar
    'statusBar.background':                  brand.darkBlue,
    'statusBar.foreground':                  brand.lavender,
    'statusBar.border':                      alpha(brand.steelBlue, 0.15),
    'statusBar.noFolderBackground':          brand.steelBlue,
    'statusBar.debuggingBackground':         brand.lightKeyword,
    'statusBarItem.hoverBackground':         alpha(brand.steelBlue, 0.2),
    'statusBarItem.remoteBackground':        brand.deepLavender,
    'statusBarItem.remoteForeground':        '#FFFFFF',

    // Title bar
    'titleBar.activeBackground':             brand.lightBgAlt,
    'titleBar.activeForeground':             brand.lightText,
    'titleBar.inactiveBackground':           alpha(brand.lightBgAlt, 0.8),
    'titleBar.inactiveForeground':           alpha(brand.lightMuted, 0.7),
    'titleBar.border':                       alpha(brand.steelBlue, 0.12),

    // Tab bar
    'editorGroupHeader.tabsBackground':      brand.lightBgAlt,
    'tab.activeBackground':                  brand.lightBg,
    'tab.activeForeground':                  brand.lightText,
    'tab.activeBorderTop':                   brand.lightKeyword,
    'tab.inactiveBackground':                brand.lightBgAlt,
    'tab.inactiveForeground':                alpha(brand.lightMuted, 0.8),
    'tab.hoverBackground':                   alpha(brand.steelBlue, 0.08),
    'tab.border':                            alpha(brand.steelBlue, 0.1),

    // Lists
    'list.activeSelectionBackground':        alpha(brand.deepLavender, 0.12),
    'list.activeSelectionForeground':        brand.lightText,
    'list.inactiveSelectionBackground':      alpha(brand.steelBlue, 0.08),
    'list.hoverBackground':                  alpha(brand.steelBlue, 0.06),
    'list.focusBackground':                  alpha(brand.deepLavender, 0.1),
    'list.highlightForeground':              brand.lightKeyword,

    // Input controls
    'input.background':                      '#FFFFFF',
    'input.foreground':                      brand.lightText,
    'input.border':                          alpha(brand.steelBlue, 0.3),
    'input.placeholderForeground':           alpha(brand.lightMuted, 0.6),
    'inputOption.activeBackground':          alpha(brand.deepLavender, 0.15),
    'inputOption.activeBorder':              brand.deepLavender,

    // Buttons
    'button.background':                     brand.lightKeyword,
    'button.foreground':                     '#FFFFFF',
    'button.hoverBackground':                brand.deepPink,
    'button.secondaryBackground':            alpha(brand.steelBlue, 0.15),
    'button.secondaryForeground':            brand.lightText,

    // Badges
    'badge.background':                      brand.lightKeyword,
    'badge.foreground':                      '#FFFFFF',

    // Scrollbar
    'scrollbarSlider.background':            alpha(brand.steelBlue, 0.15),
    'scrollbarSlider.hoverBackground':       alpha(brand.steelBlue, 0.3),
    'scrollbarSlider.activeBackground':      alpha(brand.deepLavender, 0.4),

    // Panels
    'panel.background':                      brand.lightBgAlt,
    'panel.border':                          alpha(brand.steelBlue, 0.15),
    'panelTitle.activeForeground':           brand.lightKeyword,
    'panelTitle.activeBorder':               brand.lightKeyword,
    'panelTitle.inactiveForeground':         brand.lightMuted,

    // Terminal (lighter background but same ansi palette)
    'terminal.background':                   brand.lightBgAlt,
    'terminal.foreground':                   brand.lightText,
    'terminal.ansiBlack':                    brand.darkBlue,
    'terminal.ansiBlue':                     brand.lightString,
    'terminal.ansiBrightBlack':              brand.steelBlue,
    'terminal.ansiBrightBlue':               brand.lightFunction,
    'terminal.ansiBrightCyan':               '#0599B0',
    'terminal.ansiBrightGreen':              '#1E8E52',
    'terminal.ansiBrightMagenta':            brand.lightPunct,
    'terminal.ansiBrightRed':                brand.lightKeyword,
    'terminal.ansiBrightWhite':              brand.lightText,
    'terminal.ansiBrightYellow':             brand.lightGold,
    'terminal.ansiCyan':                     brand.lightFunction,
    'terminal.ansiGreen':                    '#25A562',
    'terminal.ansiMagenta':                  brand.lightPunct,
    'terminal.ansiRed':                      brand.lightConstant,
    'terminal.ansiWhite':                    brand.lightText,
    'terminal.ansiYellow':                   brand.lightGold,
    'terminal.selectionBackground':          alpha(brand.deepLavender, 0.2),
    'terminalCursor.foreground':             brand.lightKeyword,

    // Git decorations
    'gitDecoration.addedResourceForeground':       brand.lightFunction,
    'gitDecoration.modifiedResourceForeground':    brand.lightGold,
    'gitDecoration.deletedResourceForeground':     brand.lightConstant,
    'gitDecoration.untrackedResourceForeground':   brand.lightString,
    'gitDecoration.ignoredResourceForeground':     alpha(brand.lightMuted, 0.6),
    'gitDecoration.conflictingResourceForeground': brand.lightKeyword,

    'focusBorder':              alpha(brand.deepLavender, 0.5),
    'selection.background':     alpha(brand.deepLavender, 0.3),
    'foreground':               brand.lightText,
    'icon.foreground':          brand.lightText,
    'descriptionForeground':    brand.lightMuted,

    'breadcrumb.foreground':               alpha(brand.lightMuted, 0.8),
    'breadcrumb.background':               brand.lightBg,
    'breadcrumb.focusForeground':          brand.lightKeyword,
    'breadcrumb.activeSelectionForeground': brand.lightText,
    'breadcrumbPicker.background':         '#FFFFFF',

    'peekView.border':                     brand.deepLavender,
    'peekViewEditor.background':           alpha(brand.lightBg, 0.9),
    'peekViewEditor.matchHighlightBackground': alpha(brand.lightGold, 0.3),
    'peekViewResult.background':           brand.lightBgAlt,
    'peekViewResult.matchHighlightBackground': alpha(brand.lightGold, 0.25),
    'peekViewTitle.background':            alpha(brand.lightBgAlt, 0.8),
    'peekViewTitleLabel.foreground':       brand.lightKeyword,

    'minimap.selectionHighlight': alpha(brand.deepLavender, 0.3),
    'minimap.findMatchHighlight': alpha(brand.lightGold, 0.5),
  },

  // ── Semantic token colours ─────────────────────────────────────────────
  semanticTokenColors: {
    'variable':       brand.lightText,
    'variable.readonly': brand.lightString,
    'parameter':      brand.lightString,
    'function':       brand.lightFunction,
    'method':         brand.lightFunction,
    'class':          brand.lightGold,
    'interface':      { foreground: brand.lightGold, fontStyle: 'italic' },
    'type':           { foreground: brand.lightGold, fontStyle: 'italic' },
    'enum':           brand.lightGold,
    'enumMember':     brand.lightConstant,
    'property':       brand.lightGold,
    'keyword':        brand.lightKeyword,
    'modifier':       brand.lightKeyword,
    'string':         brand.lightString,
    'number':         brand.lightConstant,
    'operator':       brand.lightPunct,
    'decorator':      { foreground: brand.lightGold, fontStyle: 'italic' },
    'comment':        { foreground: alpha(brand.lightMuted, 0.7), fontStyle: 'italic' },
    'builtinType':    { foreground: brand.lightGold, fontStyle: 'italic' },
  },

  // ── TextMate token colours ─────────────────────────────────────────────
  tokenColors: [
    {
      name: 'Comments',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: alpha(brand.lightMuted, 0.7), fontStyle: 'italic' },
    },
    {
      name: 'Keywords',
      scope: ['keyword', 'keyword.control', 'storage.modifier'],
      settings: { foreground: brand.lightKeyword },
    },
    {
      name: 'Storage types',
      scope: ['storage.type'],
      settings: { foreground: brand.lightKeyword, fontStyle: 'italic' },
    },
    {
      name: 'Strings',
      scope: ['string', 'string.quoted', 'string.template'],
      settings: { foreground: brand.lightString },
    },
    {
      name: 'Numbers',
      scope: ['constant.numeric'],
      settings: { foreground: brand.lightConstant },
    },
    {
      name: 'Language constants',
      scope: ['constant.language'],
      settings: { foreground: brand.lightConstant, fontStyle: 'italic' },
    },
    {
      name: 'Named constants',
      scope: ['variable.other.constant', 'constant.other'],
      settings: { foreground: brand.lightConstant },
    },
    {
      name: 'Functions',
      scope: ['entity.name.function', 'support.function'],
      settings: { foreground: brand.lightFunction },
    },
    {
      name: 'Function parameters',
      scope: ['variable.parameter'],
      settings: { foreground: brand.lightString },
    },
    {
      name: 'Classes',
      scope: ['entity.name.class', 'entity.name.type.class', 'support.class'],
      settings: { foreground: brand.lightGold },
    },
    {
      name: 'Interfaces & types',
      scope: ['entity.name.type.interface', 'entity.name.type.alias', 'entity.name.type'],
      settings: { foreground: brand.lightGold, fontStyle: 'italic' },
    },
    {
      name: 'Object properties',
      scope: ['support.type.property-name', 'meta.object-literal.key'],
      settings: { foreground: brand.lightGold },
    },
    {
      name: 'Punctuation',
      scope: ['punctuation', 'meta.brace', 'punctuation.separator'],
      settings: { foreground: brand.lightPunct },
    },
    {
      name: 'Operators',
      scope: ['keyword.operator'],
      settings: { foreground: brand.lightPunct },
    },
    {
      name: 'HTML tags',
      scope: ['entity.name.tag'],
      settings: { foreground: brand.lightKeyword },
    },
    {
      name: 'HTML attributes',
      scope: ['entity.other.attribute-name'],
      settings: { foreground: brand.lightGold },
    },
    {
      name: 'CSS selectors',
      scope: ['entity.other.attribute-name.class.css', 'entity.other.attribute-name.id.css'],
      settings: { foreground: brand.lightGold },
    },
    {
      name: 'CSS properties',
      scope: ['support.type.property-name.css'],
      settings: { foreground: brand.lightFunction },
    },
    {
      name: 'Markdown headings',
      scope: ['markup.heading'],
      settings: { foreground: brand.lightKeyword, fontStyle: 'bold' },
    },
    {
      name: 'Markdown code',
      scope: ['markup.inline.raw', 'markup.raw'],
      settings: { foreground: brand.lightFunction },
    },
    {
      name: 'Decorators',
      scope: ['meta.decorator', 'entity.name.function.decorator'],
      settings: { foreground: brand.lightGold, fontStyle: 'italic' },
    },
    {
      name: 'This / self',
      scope: ['variable.language.this', 'variable.language.self'],
      settings: { foreground: brand.lightKeyword, fontStyle: 'italic' },
    },
  ],
};
