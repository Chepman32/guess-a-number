import memoize from 'lodash.memoize'; // Use for caching/memoize for better performance
import i18n from 'i18n-js';
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Localization from 'expo-localization';
import { I18nManager } from 'react-native';
export const translationGetters = {
    'en-US': () => require('./constants/en.json'),
    'ru-RU': () => require('./constants/ru.json'),
    "fr-FR": () => require("./constants/fr.json"),
    "es-US": () => require("./constants/es.json"),
    "de-DE": () => require("./constants/de.json"),
    "ch-CM": () => require("./constants/ch.json")
  };
  export const IMLocalized = memoize(
    (key, config) =>
      i18n.t(key, config).includes('missing') ? key : i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key),
  );
  const readData = async () => {
    try {
    const value = await AsyncStorage.getItem("ACTIVE_LANGUAGE");
    if(value !== null) {
      return value
    }
    }
    catch (e) {
    alert('Failed to fetch the settings from storage');
    }
};
  export const init = async () => {
    const stored = await readData()
    i18n.fallbacks = true;
    i18n.defaultLocale = 'en';
    i18n.locale = 'en';
    let localeLanguageTag = stored !== null ? stored : Localization.locale;
    let isRTL = Localization.isRTL;
    IMLocalized.cache.clear();
    // update layout direction
    I18nManager.forceRTL(isRTL);
    // set i18n-js config
    i18n.translations = {
      [localeLanguageTag]: translationGetters[localeLanguageTag](),
    };
    i18n.locale = localeLanguageTag;
  };