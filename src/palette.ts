/**
 * Fynes Forge — Brand Palette
 * Single source of truth for all colours used across every theme variant.
 */

export const brand = {
  // ── Core brand colours ──────────────────────────────────────────────────
  darkBlue:     '#404E5C',
  steelBlue:    '#4F6272',
  lavender:     '#B7C3F3',
  pink:         '#DD7596',
  gold:         '#ECDA90',
  lightBlue:    '#83AFDF',
  cyan:         '#63C5EA',
  paleBlue:     '#AED6F1',
  deepLavender: '#9F7EBE',
  deepPink:     '#D05786',
  bgDark:       '#252E36',
  bgDeep:       '#1C2329',

  // ── Light-mode counterparts ──────────────────────────────────────────────
  lightBg:        '#F4F5FF',
  lightBgAlt:     '#E8EBFA',
  lightText:      '#2E3A48',
  lightMuted:     '#6B7A8D',
  lightKeyword:   '#B83060',
  lightFunction:  '#0D7BA8',
  lightString:    '#2A6898',
  lightPunct:     '#6B4F9E',
  lightConstant:  '#C03070',
  lightGold:      '#9A7500',

  // ── Ember / warm variant ──────────────────────────────────────────────────
  emberBg:        '#1E1610',
  emberBgAlt:     '#2A1F14',
  emberBgDeep:    '#150F09',
  emberFg:        '#F2DFC0',
  emberOrange:    '#E8945A',
  emberAmber:     '#F5C06A',
  emberRed:       '#D95B5B',
  emberGold:      '#ECDA90',
  emberCyan:      '#63C5EA',
  emberLavender:  '#B7C3F3',
  emberPink:      '#DD7596',

  // ── Steel (high-contrast monochrome) variant ──────────────────────────────
  steelBg:        '#0D1117',
  steelBgAlt:     '#161B22',
  steelBgDeep:    '#090D12',
  steelFg:        '#E8EDF5',
  steelMuted:     '#5A6A7A',
  steelAccent1:   '#63C5EA',
  steelAccent2:   '#B7C3F3',
  steelAccent3:   '#ECDA90',
  steelAccent4:   '#DD7596',
  steelAccent5:   '#9F7EBE',
} as const;

export type BrandColor = keyof typeof brand;

/** Hex with optional alpha channel (00–FF) appended */
export function alpha(hex: string, opacity: number): string {
  const pct = Math.round(Math.max(0, Math.min(1, opacity)) * 255);
  return `${hex}${pct.toString(16).padStart(2, '0').toUpperCase()}`;
}
