#!/usr/bin/env node
const tests = [
  { name: 'en-US + Asia/Tashkent', userLocale: 'en-US', tz: 'Asia/Tashkent' },
  { name: 'en-US + /uz path + Asia/Tashkent', userLocale: 'en-US', tz: 'Asia/Tashkent', path: '/uz' },
  { name: 'en-US + Asia/Seoul', userLocale: 'en-US', tz: 'Asia/Seoul' },
  { name: 'en-US + Europe/Moscow', userLocale: 'en-US', tz: 'Europe/Moscow' },
  { name: 'en-US + America/New_York', userLocale: 'en-US', tz: 'America/New_York' },
  { name: 'ko-KR + Asia/Seoul', userLocale: 'ko-KR', tz: 'Asia/Seoul' },
  { name: 'ru-RU + Europe/Moscow', userLocale: 'ru-RU', tz: 'Europe/Moscow' },
  { name: 'en-GB + (no tz)', userLocale: 'en-GB', tz: '' },
  { name: 'uz + (no tz)', userLocale: 'uz', tz: '' },
];

function detectCurrency(userLocale, tz) {
  const userLocaleSafe = userLocale || 'en-US';
  const userLocaleParts = userLocaleSafe.split('-');
  const userLang = (userLocaleParts[0] || 'en').toLowerCase();
  let lang = userLang;

  const langToCurrency = { en: 'USD', ko: 'KRW', ru: 'RUB', uz: 'UZS' };
  let currency = langToCurrency[lang] || 'USD';

  try {
    const tzLower = String(tz || '').toLowerCase();
    if (/tashkent|uzbekistan|asia\/tashkent/.test(tzLower)) {
      currency = 'UZS';
      lang = 'uz';
    } else if (/seoul|korea|asia\/seoul/.test(tzLower)) {
      currency = 'KRW';
      lang = 'ko';
    } else if (/moscow|europe\/moscow|europe\/minsk|europe\/saint_petersburg/.test(tzLower)) {
      currency = 'RUB';
      lang = 'ru';
    }
  } catch (e) {}

  // If timezone didn't determine a non-USD currency, look at region subtags
  if (!currency || currency === 'USD') {
    try {
      const region = userLocaleParts[1] ? userLocaleParts[1].toUpperCase() : '';
      if (region === 'UZ') currency = 'UZS';
      else if (region === 'KR') currency = 'KRW';
      else if (region === 'RU' || region === 'BY') currency = 'RUB';
      else if (['US', 'GB', 'AU', 'CA', 'NZ'].includes(region)) currency = 'USD';
    } catch (e) {}
  }

  return { currency, lang };
}

for (const t of tests) {
  const out = detectCurrency(t.userLocale, t.tz);
  console.log(`${t.name}: -> currency=${out.currency}, lang=${out.lang}`);
}
