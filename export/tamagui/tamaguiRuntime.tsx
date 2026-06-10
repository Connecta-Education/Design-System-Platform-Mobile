/**
 * In-browser runtime shim for the Tamagui handoff files.
 * -------------------------------------------------------
 * The design-system preview bundler can't resolve npm packages, so the
 * `@tamagui/core` / `@tamagui/shorthands` imports were being dropped — leaving
 * `styled`, `createTokens`, etc. undefined and breaking the whole bundle at load.
 *
 * This module provides lightweight, API-compatible stand-ins so the handoff
 * code (components.tsx, tokens.ts, fonts.ts, tamagui.config.ts) evaluates
 * cleanly in the preview. It is NOT a real Tamagui runtime — in a production
 * app, install Tamagui and swap these imports back to `@tamagui/core` /
 * `@tamagui/shorthands` (see export/tamagui/README.md).
 */
import * as React from 'react';

// Only forward props that are valid on a DOM node — tamagui style props are
// ignored here (the shim is for resolution/structure, not pixel fidelity).
const DOM_SAFE = new Set(['id', 'className', 'style', 'role', 'title', 'href']);
function domProps(props: Record<string, any> = {}) {
  const out: Record<string, any> = {};
  for (const k of Object.keys(props)) {
    if (DOM_SAFE.has(k)) out[k] = props[k];
    else if (k.startsWith('aria-') || k.startsWith('data-')) out[k] = props[k];
  }
  return out;
}

export const Stack: any = React.forwardRef(function Stack(props: any, ref: any) {
  const { children, tag, onPress, onClick, ...rest } = props || {};
  const Tag: any = tag || 'div';
  return React.createElement(Tag, { ref, onClick: onPress || onClick, ...domProps(rest) }, children);
});

export const Text: any = React.forwardRef(function Text(props: any, ref: any) {
  const { children, tag, onPress, onClick, ...rest } = props || {};
  const Tag: any = tag || 'span';
  return React.createElement(Tag, { ref, onClick: onPress || onClick, ...domProps(rest) }, children);
});

// styled(Component, config) → a component that renders the base, dropping
// tamagui-only config (variants/hoverStyle/token props) which the shim ignores.
export function styled(Component: any, _config: any = {}) {
  const Styled: any = React.forwardRef(function Styled(props: any, ref: any) {
    return React.createElement(Component, { ref, ...(props || {}) });
  });
  Styled.displayName = 'Styled';
  return Styled;
}

// <Theme> just renders its children in the shim.
export function Theme(props: any) {
  return React.createElement(React.Fragment, null, props && props.children);
}

// useTheme() returns a Proxy whose every key is a token accessor with .get().
const tokenAccessor = { get: () => undefined, val: undefined };
export function useTheme() {
  return new Proxy({}, { get: () => tokenAccessor });
}

// Config builders are identity passthroughs in the shim.
export const createTokens = (t: any) => t;
export const createFont = (f: any) => f;
export const createTamagui = (c: any) => c;
export const shorthands: Record<string, string> = {};
