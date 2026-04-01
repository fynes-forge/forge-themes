/**
 * Fynes Forge — "Forge Dark" (Dark theme)
 * Name pun: "The Forge is Dark" — forged in darkness, shaped in steel.
 * The canonical brand dark experience. Deep workshop blues, lavender
 * text, gold accents and pink highlights straight from the brand palette.
 */

import { brand, alpha } from '../palette';
import type { ThemeDefinition } from '../types';

export const forge: ThemeDefinition = {
  name: 'Forge',
  type: 'dark',
  semanticHighlighting: true,

  // ── Workbench UI colours ───────────────────────────────────────────────
  colors: {
    // Editor canvas
    'editor.background':                     brand.bgDeep,
    'editor.foreground':                     brand.lavender,
    'editor.lineHighlightBackground':        alpha(brand.darkBlue, 0.5),
    'editor.selectionBackground':            alpha(brand.deepLavender, 0.35),
    'editor.inactiveSelectionBackground':    alpha(brand.steelBlue, 0.25),
    'editor.selectionHighlightBackground':   alpha(brand.deepLavender, 0.2),
    'editor.wordHighlightBackground':        alpha(brand.cyan, 0.15),
    'editor.wordHighlightStrongBackground':  alpha(brand.cyan, 0.3),
    'editor.findMatchBackground':            alpha(brand.gold, 0.4),
    'editor.findMatchHighlightBackground':   alpha(brand.gold, 0.2),
    'editor.rangeHighlightBackground':       alpha(brand.gold, 0.1),
    'editorCursor.foreground':               brand.gold,
    'editorWhitespace.foreground':           alpha(brand.steelBlue, 0.4),
    'editorIndentGuide.background1':         alpha(brand.steelBlue, 0.2),
    'editorIndentGuide.activeBackground1':   alpha(brand.deepLavender, 0.5),
    'editorLineNumber.foreground':           alpha(brand.steelBlue, 0.6),
    'editorLineNumber.activeForeground':     brand.gold,
    'editorRuler.foreground':                alpha(brand.steelBlue, 0.25),
    'editorBracketMatch.background':         alpha(brand.deepLavender, 0.25),
    'editorBracketMatch.border':             brand.deepLavender,
    'editorOverviewRuler.border':            alpha(brand.steelBlue, 0.2),
    'editorOverviewRuler.findMatchForeground': brand.gold,
    'editorOverviewRuler.selectionHighlightForeground': brand.deepLavender,
    'editorError.foreground':                '#E06C75',
    'editorWarning.foreground':              brand.gold,
    'editorInfo.foreground':                 brand.cyan,
    'editorHint.foreground':                 brand.lightBlue,

    // Gutter
    'editorGutter.background':               brand.bgDeep,
    'editorGutter.addedBackground':          alpha(brand.cyan, 0.7),
    'editorGutter.modifiedBackground':       alpha(brand.gold, 0.7),
    'editorGutter.deletedBackground':        alpha(brand.deepPink, 0.7),

    // Side bar
    'sideBar.background':                    brand.bgDeep,
    'sideBar.foreground':                    brand.lavender,
    'sideBar.border':                        alpha(brand.steelBlue, 0.2),
    'sideBarTitle.foreground':               brand.gold,
    'sideBarSectionHeader.background':       alpha(brand.darkBlue, 0.6),
    'sideBarSectionHeader.foreground':       brand.lavender,
    'sideBarSectionHeader.border':           alpha(brand.steelBlue, 0.2),

    // Activity bar
    'activityBar.background':                brand.bgDeep,
    'activityBar.foreground':                brand.lavender,
    'activityBar.inactiveForeground':        alpha(brand.steelBlue, 0.7),
    'activityBar.border':                    alpha(brand.steelBlue, 0.15),
    'activityBarBadge.background':           brand.deepPink,
    'activityBarBadge.foreground':           '#FFFFFF',

    // Status bar
    'statusBar.background':                  brand.darkBlue,
    'statusBar.foreground':                  brand.lavender,
    'statusBar.border':                      alpha(brand.steelBlue, 0.2),
    'statusBar.noFolderBackground':          brand.steelBlue,
    'statusBar.debuggingBackground':         brand.deepPink,
    'statusBarItem.hoverBackground':         alpha(brand.steelBlue, 0.3),
    'statusBarItem.activeBackground':        alpha(brand.deepLavender, 0.3),
    'statusBarItem.remoteBackground':        brand.deepLavender,
    'statusBarItem.remoteForeground':        '#FFFFFF',

    // Title bar
    'titleBar.activeBackground':             brand.bgDeep,
    'titleBar.activeForeground':             brand.lavender,
    'titleBar.inactiveBackground':           alpha(brand.bgDeep, 0.8),
    'titleBar.inactiveForeground':           alpha(brand.steelBlue, 0.8),
    'titleBar.border':                       alpha(brand.steelBlue, 0.15),

    // Tab bar
    'editorGroupHeader.tabsBackground':      brand.bgDeep,
    'tab.activeBackground':                  brand.bgDark,
    'tab.activeForeground':                  brand.lavender,
    'tab.activeBorderTop':                   brand.gold,
    'tab.inactiveBackground':                brand.bgDeep,
    'tab.inactiveForeground':                alpha(brand.steelBlue, 0.8),
    'tab.hoverBackground':                   alpha(brand.darkBlue, 0.5),
    'tab.border':                            alpha(brand.steelBlue, 0.1),
    'tab.unfocusedActiveBackground':         alpha(brand.bgDark, 0.8),

    // Lists & trees
    'list.activeSelectionBackground':        alpha(brand.deepLavender, 0.2),
    'list.activeSelectionForeground':        brand.lavender,
    'list.inactiveSelectionBackground':      alpha(brand.steelBlue, 0.15),
    'list.hoverBackground':                  alpha(brand.steelBlue, 0.1),
    'list.focusBackground':                  alpha(brand.deepLavender, 0.15),
    'list.highlightForeground':              brand.gold,
    'list.errorForeground':                  '#E06C75',
    'list.warningForeground':                brand.gold,

    // Input controls
    'input.background':                      alpha(brand.darkBlue, 0.6),
    'input.foreground':                      brand.lavender,
    'input.border':                          alpha(brand.steelBlue, 0.4),
    'input.placeholderForeground':           alpha(brand.steelBlue, 0.6),
    'inputOption.activeBackground':          alpha(brand.deepLavender, 0.3),
    'inputOption.activeForeground':          brand.lavender,
    'inputOption.activeBorder':              brand.deepLavender,
    'inputValidation.errorBackground':       alpha('#E06C75', 0.15),
    'inputValidation.errorBorder':           '#E06C75',
    'inputValidation.warningBackground':     alpha(brand.gold, 0.15),
    'inputValidation.warningBorder':         brand.gold,

    // Buttons
    'button.background':                     brand.deepPink,
    'button.foreground':                     '#FFFFFF',
    'button.hoverBackground':                brand.pink,
    'button.secondaryBackground':            brand.steelBlue,
    'button.secondaryForeground':            brand.lavender,

    // Badges
    'badge.background':                      brand.deepPink,
    'badge.foreground':                      '#FFFFFF',

    // Scrollbar
    'scrollbar.shadow':                      alpha(brand.bgDeep, 0.5),
    'scrollbarSlider.background':            alpha(brand.steelBlue, 0.2),
    'scrollbarSlider.hoverBackground':       alpha(brand.steelBlue, 0.4),
    'scrollbarSlider.activeBackground':      alpha(brand.deepLavender, 0.5),

    // Panels (terminal, problems etc.)
    'panel.background':                      brand.bgDeep,
    'panel.border':                          alpha(brand.steelBlue, 0.2),
    'panelTitle.activeForeground':           brand.gold,
    'panelTitle.activeBorder':               brand.gold,
    'panelTitle.inactiveForeground':         brand.steelBlue,

    // Terminal
    'terminal.background':                   brand.bgDeep,
    'terminal.foreground':                   brand.lavender,
    'terminal.ansiBlack':                    brand.darkBlue,
    'terminal.ansiBlue':                     brand.lightBlue,
    'terminal.ansiBrightBlack':              brand.steelBlue,
    'terminal.ansiBrightBlue':               brand.paleBlue,
    'terminal.ansiBrightCyan':               brand.cyan,
    'terminal.ansiBrightGreen':              '#98C379',
    'terminal.ansiBrightMagenta':            brand.lavender,
    'terminal.ansiBrightRed':                brand.pink,
    'terminal.ansiBrightWhite':              '#E8EDF5',
    'terminal.ansiBrightYellow':             brand.gold,
    'terminal.ansiCyan':                     brand.cyan,
    'terminal.ansiGreen':                    '#7DBF8E',
    'terminal.ansiMagenta':                  brand.deepLavender,
    'terminal.ansiRed':                      brand.deepPink,
    'terminal.ansiWhite':                    brand.lavender,
    'terminal.ansiYellow':                   brand.gold,
    'terminal.selectionBackground':          alpha(brand.deepLavender, 0.3),
    'terminalCursor.foreground':             brand.gold,

    // Git decorations
    'gitDecoration.addedResourceForeground':       brand.cyan,
    'gitDecoration.modifiedResourceForeground':    brand.gold,
    'gitDecoration.deletedResourceForeground':     brand.deepPink,
    'gitDecoration.untrackedResourceForeground':   brand.lightBlue,
    'gitDecoration.ignoredResourceForeground':     alpha(brand.steelBlue, 0.6),
    'gitDecoration.conflictingResourceForeground': brand.pink,
    'gitDecoration.stageModifiedResourceForeground': alpha(brand.gold, 0.8),
    'gitDecoration.stageDeletedResourceForeground':  alpha(brand.deepPink, 0.8),

    // Notifications
    'notifications.background':             brand.darkBlue,
    'notifications.foreground':             brand.lavender,
    'notifications.border':                 alpha(brand.steelBlue, 0.2),
    'notificationLink.foreground':          brand.cyan,

    // Widgets & dropdowns
    'widget.shadow':                         alpha(brand.bgDeep, 0.6),
    'dropdown.background':                   brand.darkBlue,
    'dropdown.foreground':                   brand.lavender,
    'dropdown.border':                       alpha(brand.steelBlue, 0.4),
    'quickInput.background':                 brand.bgDeep,
    'quickInput.foreground':                 brand.lavender,
    'quickInputList.focusBackground':        alpha(brand.deepLavender, 0.2),

    // Focus & selection
    'focusBorder':                           alpha(brand.deepLavender, 0.7),
    'selection.background':                  alpha(brand.deepLavender, 0.4),
    'foreground':                            brand.lavender,
    'descriptionForeground':                 brand.steelBlue,
    'errorForeground':                       '#E06C75',
    'icon.foreground':                       brand.lavender,

    // Breadcrumb
    'breadcrumb.foreground':                 alpha(brand.steelBlue, 0.8),
    'breadcrumb.background':                 brand.bgDeep,
    'breadcrumb.focusForeground':            brand.gold,
    'breadcrumb.activeSelectionForeground':  brand.lavender,
    'breadcrumbPicker.background':           brand.darkBlue,

    // Peek view
    'peekView.border':                       brand.deepLavender,
    'peekViewEditor.background':             alpha(brand.bgDeep, 0.9),
    'peekViewEditor.matchHighlightBackground': alpha(brand.gold, 0.3),
    'peekViewResult.background':             brand.bgDeep,
    'peekViewResult.fileForeground':         brand.lavender,
    'peekViewResult.lineForeground':         brand.steelBlue,
    'peekViewResult.matchHighlightBackground': alpha(brand.gold, 0.25),
    'peekViewResult.selectionBackground':    alpha(brand.deepLavender, 0.2),
    'peekViewResult.selectionForeground':    brand.lavender,
    'peekViewTitle.background':              alpha(brand.darkBlue, 0.8),
    'peekViewTitleLabel.foreground':         brand.gold,
    'peekViewTitleDescription.foreground':   brand.steelBlue,

    // Minimap
    'minimap.background':                    alpha(brand.bgDeep, 0.8),
    'minimap.selectionHighlight':            alpha(brand.deepLavender, 0.4),
    'minimap.findMatchHighlight':            alpha(brand.gold, 0.5),
    'minimapGutter.addedBackground':         alpha(brand.cyan, 0.6),
    'minimapGutter.modifiedBackground':      alpha(brand.gold, 0.6),
    'minimapGutter.deletedBackground':       alpha(brand.deepPink, 0.6),
  },

  // ── Semantic token colours ─────────────────────────────────────────────
  semanticTokenColors: {
    'variable':                   brand.lavender,
    'variable.readonly':          brand.paleBlue,
    'parameter':                  brand.paleBlue,
    'function':                   brand.cyan,
    'method':                     brand.cyan,
    'class':                      brand.gold,
    'interface':                  brand.gold,
    'type':                       brand.gold,
    'enum':                       brand.gold,
    'enumMember':                 brand.deepPink,
    'property':                   brand.gold,
    'namespace':                  brand.lavender,
    'keyword':                    brand.pink,
    'modifier':                   brand.pink,
    'string':                     brand.lightBlue,
    'number':                     brand.deepPink,
    'regexp':                     brand.cyan,
    'operator':                   brand.deepLavender,
    'decorator':                  brand.gold,
    'comment':                    { foreground: alpha(brand.steelBlue, 0.8), fontStyle: 'italic' },
    'selfParameter':              { foreground: brand.pink, fontStyle: 'italic' },
    'builtinType':                { foreground: brand.gold, fontStyle: 'italic' },
  },

  // ── TextMate token colours ─────────────────────────────────────────────
  tokenColors: [
    {
      name: 'Comments',
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: alpha(brand.steelBlue, 0.8), fontStyle: 'italic' },
    },
    {
      name: 'Keywords',
      scope: [
        'keyword',
        'keyword.control',
        'keyword.operator.new',
        'keyword.operator.delete',
        'keyword.operator.typeof',
        'keyword.operator.void',
        'storage.type.class',
        'storage.type.function',
        'storage.type.interface',
        'storage.modifier',
      ],
      settings: { foreground: brand.pink },
    },
    {
      name: 'Storage types (const, let, var, type)',
      scope: ['storage.type', 'keyword.operator.type.annotation'],
      settings: { foreground: brand.pink, fontStyle: 'italic' },
    },
    {
      name: 'Strings',
      scope: ['string', 'string.quoted', 'string.template'],
      settings: { foreground: brand.lightBlue },
    },
    {
      name: 'Template literal expressions',
      scope: ['punctuation.definition.template-expression', 'string.template punctuation'],
      settings: { foreground: brand.deepLavender },
    },
    {
      name: 'Numbers',
      scope: ['constant.numeric', 'constant.numeric.decimal', 'constant.numeric.hex'],
      settings: { foreground: brand.deepPink },
    },
    {
      name: 'Constants & language literals',
      scope: ['constant.language', 'constant.language.boolean', 'constant.language.null', 'constant.language.undefined'],
      settings: { foreground: brand.deepPink, fontStyle: 'italic' },
    },
    {
      name: 'Named constants (ALL_CAPS)',
      scope: ['variable.other.constant', 'constant.other'],
      settings: { foreground: brand.deepPink },
    },
    {
      name: 'Functions',
      scope: [
        'entity.name.function',
        'support.function',
        'meta.function-call entity.name.function',
        'meta.method-call entity.name.function',
      ],
      settings: { foreground: brand.cyan },
    },
    {
      name: 'Function parameters',
      scope: ['variable.parameter', 'meta.parameters variable.other'],
      settings: { foreground: brand.paleBlue },
    },
    {
      name: 'Classes & constructors',
      scope: [
        'entity.name.class',
        'entity.name.type.class',
        'support.class',
        'new.expr entity.name.class',
      ],
      settings: { foreground: brand.gold },
    },
    {
      name: 'Interfaces & types (TypeScript)',
      scope: [
        'entity.name.type.interface',
        'entity.name.type.alias',
        'entity.name.type',
        'support.type',
      ],
      settings: { foreground: brand.gold, fontStyle: 'italic' },
    },
    {
      name: 'Type annotations (: Type)',
      scope: [
        'meta.type.annotation',
        'meta.type.parameters',
        'meta.return.type',
      ],
      settings: { foreground: alpha(brand.gold, 0.85) },
    },
    {
      name: 'Generics angle brackets',
      scope: [
        'punctuation.definition.typeparameters',
        'meta.type.parameters punctuation',
      ],
      settings: { foreground: brand.deepLavender },
    },
    {
      name: 'Object properties / JSON keys',
      scope: [
        'support.type.property-name',
        'variable.other.property',
        'meta.object-literal.key',
        'meta.object.member entity.name.tag',
      ],
      settings: { foreground: brand.gold },
    },
    {
      name: 'Punctuation',
      scope: [
        'punctuation',
        'meta.brace',
        'punctuation.separator',
        'punctuation.terminator',
        'punctuation.accessor',
      ],
      settings: { foreground: brand.deepLavender },
    },
    {
      name: 'Operators',
      scope: [
        'keyword.operator',
        'keyword.operator.arithmetic',
        'keyword.operator.comparison',
        'keyword.operator.logical',
        'keyword.operator.assignment',
      ],
      settings: { foreground: brand.deepLavender },
    },
    {
      name: 'Imports & modules',
      scope: ['keyword.control.import', 'keyword.control.export', 'keyword.control.from'],
      settings: { foreground: brand.pink },
    },
    {
      name: 'This / self',
      scope: ['variable.language.this', 'variable.language.self'],
      settings: { foreground: brand.pink, fontStyle: 'italic' },
    },
    {
      name: 'Decorators / annotations',
      scope: [
        'punctuation.decorator',
        'meta.decorator',
        'entity.name.function.decorator',
      ],
      settings: { foreground: brand.gold, fontStyle: 'italic' },
    },
    {
      name: 'Enums',
      scope: ['entity.name.type.enum', 'constant.other.enum'],
      settings: { foreground: brand.gold },
    },
    {
      name: 'Enum members',
      scope: ['variable.other.enummember'],
      settings: { foreground: brand.deepPink },
    },
    {
      name: 'Regex',
      scope: ['string.regexp', 'constant.other.character-class.regexp'],
      settings: { foreground: brand.cyan },
    },
    {
      name: 'HTML tags',
      scope: ['entity.name.tag', 'meta.tag entity.name.tag'],
      settings: { foreground: brand.pink },
    },
    {
      name: 'HTML/JSX attributes',
      scope: ['entity.other.attribute-name', 'meta.tag entity.other.attribute-name'],
      settings: { foreground: brand.gold },
    },
    {
      name: 'CSS selectors',
      scope: ['entity.other.attribute-name.class.css', 'entity.other.attribute-name.id.css'],
      settings: { foreground: brand.gold },
    },
    {
      name: 'CSS properties',
      scope: ['support.type.property-name.css', 'meta.property-name'],
      settings: { foreground: brand.cyan },
    },
    {
      name: 'CSS values',
      scope: ['support.constant.property-value', 'meta.property-value constant'],
      settings: { foreground: brand.lightBlue },
    },
    {
      name: 'Markdown headings',
      scope: ['markup.heading', 'entity.name.section'],
      settings: { foreground: brand.gold, fontStyle: 'bold' },
    },
    {
      name: 'Markdown bold',
      scope: ['markup.bold', 'punctuation.definition.bold'],
      settings: { foreground: brand.lavender, fontStyle: 'bold' },
    },
    {
      name: 'Markdown italic',
      scope: ['markup.italic', 'punctuation.definition.italic'],
      settings: { foreground: brand.lavender, fontStyle: 'italic' },
    },
    {
      name: 'Markdown code',
      scope: ['markup.inline.raw', 'markup.raw'],
      settings: { foreground: brand.cyan },
    },
    {
      name: 'Markdown links',
      scope: ['markup.underline.link', 'meta.link'],
      settings: { foreground: brand.lightBlue },
    },
    {
      name: 'Invalid / deprecated',
      scope: ['invalid', 'invalid.illegal'],
      settings: { foreground: '#E06C75' },
    },
  ],
};
