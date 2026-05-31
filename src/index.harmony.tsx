/*
 * Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
 * Use of this source code is governed by a MIT license that can be
 * found in the LICENSE file.
*/

import { Appearance, ColorSchemeName, NativeEventSubscription, useColorScheme as rnUseColorScheme } from 'react-native';
import { AppearanceListener, AppearancePreferences } from './Appearance.types';
import { NativeAppearanceProvider } from './NativeAppearance';

export class AppearanceHarmony {
  /**
   * Note: Although color scheme is available immediately, it may change at any
   * time. Any rendering logic or styles that depend on this should try to call
   * this function on every render, rather than caching the value (for example,
   * using inline styles rather than setting a value in a `StyleSheet`).
   *
   * Example: `const colorScheme = Appearance.getColorScheme();`
   */
  static getColorScheme(): ColorSchemeName {
    return Appearance.getColorScheme();
  }

  /**
   * Set the color scheme preference. This is useful for overriding the default
   * color scheme preference for the app. Note that this will not change the
   * appearance of the system UI, only the appearance of the app.
   */
  static setColorScheme(scheme: ColorSchemeName | null | undefined): void {
    Appearance.setColorScheme(scheme);
  }

  static set(preferences: AppearancePreferences): void {
    let color: ColorSchemeName = preferences.colorScheme;
    Appearance.setColorScheme(color);
  }

  /**
   * Add an event handler that is fired when appearance preferences change.
   */
  static addChangeListener(listener: AppearanceListener): NativeEventSubscription {
    return Appearance.addChangeListener(listener);
  }
}

export const AppearanceProvider = (props: { children: any }) => (
  <NativeAppearanceProvider style={{ flex: 1 }} {...props} />
);

/**
 * A new useColorScheme hook is provided as the preferred way of accessing
 * the user's preferred color scheme (e.g. Dark Mode).
 */
export function useColorScheme(): ColorSchemeName {
  return rnUseColorScheme();
}
