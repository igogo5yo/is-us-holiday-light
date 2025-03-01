# Is date a US bank holiday (lightweight)

[![NPM](https://img.shields.io/npm/v/is-us-holiday-light.svg "NPM package version")](https://www.npmjs.com/package/is-us-holiday-light)
[![NPM](https://img.shields.io/npm/dt/is-us-holiday-light.svg "NPM package downloads")](https://www.npmjs.com/package/is-us-holiday-light)

[:coffee: Sponsor me :heart:](https://github.com/sponsors/igogo5yo)

This is a lightweight JavaScript library to check if a given date is a US holiday.

## Installation

You can install the library using npm:

```bash
npm install is-us-holiday-light
```

Or using yarn:

```bash
yarn add is-us-holiday-light
```

## Usage

```javascript
import { isUsHoliday } from 'is-us-holiday-light';

const date = new Date('2023-07-04');
console.log(isUsHoliday(date)); // true, because it's Independence Day
```

## Supported Holidays

- New Year's Day
- Independence Day
- Veterans Day
- Election Day
- Christmas Eve
- Christmas Day
- Good Friday
- Juneteenth
- Martin Luther King Jr. Day
- Presidents' Day
- Memorial Day
- Labor Day
- Columbus Day
- Thanksgiving Day
- Day after Thanksgiving Day


## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
