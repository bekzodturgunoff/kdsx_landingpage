#!/usr/bin/env node
import { chromium } from 'playwright';

const tests = [
  { name: 'Uzbekistan (Tashkent) - / (locale en)', locale: 'en-US', timezone: 'Asia/Tashkent', path: '/' },
  { name: 'Uzbekistan (Tashkent) - /uz', locale: 'en-US', timezone: 'Asia/Tashkent', path: '/uz' },
  { name: 'Korea (Seoul)', locale: 'ko-KR', timezone: 'Asia/Seoul', path: '/' },
  { name: 'Russia (Moscow)', locale: 'ru-RU', timezone: 'Europe/Moscow', path: '/' },
  { name: 'USA (New York)', locale: 'en-US', timezone: 'America/New_York', path: '/' },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  for (const t of tests) {
    const context = await browser.newContext({ locale: t.locale, timezoneId: t.timezone });
    const page = await context.newPage();
    const url = 'http://localhost:4321' + t.path;
    console.log(`Visiting ${url} as ${t.name} (locale=${t.locale}, tz=${t.timezone})`);
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 20000 });
      // Wait for price element to appear
      await page.waitForSelector('#price-amount', { timeout: 8000 });
      const price = await page.$eval('#price-amount', (el) => el.textContent.trim());
      const navLang = await page.evaluate(() => (navigator.languages && navigator.languages[0]) || navigator.language || null);
      const tz = await page.evaluate(() => Intl.DateTimeFormat().resolvedOptions().timeZone || null);
      console.log(` -> price element: "${price}"`);
      console.log(` -> detected navigator.language=${navLang}, timeZone=${tz}`);
    } catch (e) {
      console.error(' -> ERROR:', e.message);
    }
    await context.close();
  }
  await browser.close();
  process.exit(0);
})();
