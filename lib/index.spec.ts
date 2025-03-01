import { describe, expect, it } from 'vitest';
import { isUSHoliday } from './index';

describe('isUSHoliday', () => {
    it.each([
        new Date(2024, 0, 1),
        new Date(2024, 0, 15),
        new Date(2024, 1, 19),
        new Date(2024, 2, 29),
        new Date(2024, 4, 27),
        new Date(2024, 5, 19),
        new Date(2024, 6, 4),
        new Date(2024, 8, 2),
        new Date(2024, 9, 14),
        new Date(2024, 10, 5),
        new Date(2024, 10, 11),
        new Date(2024, 10, 28),
        new Date(2024, 10, 29),
        new Date(2024, 11, 24),
        new Date(2024, 11, 25),

        new Date(2025, 0, 1),
        new Date(2025, 0, 20),
        new Date(2025, 1, 17),
        new Date(2025, 2, 29),
        new Date(2025, 4, 26),
        new Date(2025, 5, 19),
        new Date(2025, 6, 4),
        new Date(2025, 8, 1),
        new Date(2025, 9, 13),
        new Date(2025, 10, 5),
        new Date(2025, 10, 11),
        new Date(2025, 10, 27),
        new Date(2025, 10, 28),
        new Date(2025, 11, 24),
        new Date(2025, 11, 25),

        new Date(2026, 0, 1),
        new Date(2026, 0, 19),
        new Date(2026, 1, 16),
        new Date(2026, 2, 29),
        new Date(2026, 4, 25),
        new Date(2026, 5, 19),
        new Date(2026, 6, 4),
        new Date(2026, 8, 7),
        new Date(2026, 9, 12),
        new Date(2026, 10, 5),
        new Date(2026, 10, 11),
        new Date(2026, 10, 26),
        new Date(2026, 10, 27),
        new Date(2026, 11, 24),
        new Date(2026, 11, 25),
    ])('Test holiday %s', (date: Date) => {
        expect(isUSHoliday(date)).toBeTruthy();
    });

    it.each([
        new Date(2025, 1, 19),
        new Date(2025, 4, 27),
        new Date(2026, 0, 20),
        new Date(2026, 1, 17),
        new Date(2026, 4, 26),
        new Date(2026, 8, 1),
        new Date(2026, 9, 13),
        new Date(2026, 10, 28),

    ])('Test non holiday', (date: Date) => {
        expect(isUSHoliday(date)).toBeFalsy();
    });
});
