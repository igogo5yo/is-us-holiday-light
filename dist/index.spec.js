"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_1 = require("./index");
(0, vitest_1.describe)('isUSHoliday', () => {
    vitest_1.it.each([
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
    ])('Test holiday %s', (date) => {
        (0, vitest_1.expect)((0, index_1.isUSHoliday)(date)).toBeTruthy();
    });
    vitest_1.it.each([
        new Date(2025, 1, 19),
        new Date(2025, 4, 27),
        new Date(2026, 0, 20),
        new Date(2026, 1, 17),
        new Date(2026, 4, 26),
        new Date(2026, 8, 1),
        new Date(2026, 9, 13),
        new Date(2026, 10, 28),
    ])('Test non holiday', (date) => {
        (0, vitest_1.expect)((0, index_1.isUSHoliday)(date)).toBeFalsy();
    });
});
//# sourceMappingURL=index.spec.js.map