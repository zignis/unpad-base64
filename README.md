# unpad-base64

![npm](https://img.shields.io/npm/v/unpad-base64?style=for-the-badge)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/zignis/unpad-base64/test.yml?style=for-the-badge)
![npm](https://img.shields.io/npm/dw/unpad-base64?style=for-the-badge)
![NPM](https://img.shields.io/npm/l/unpad-base64?style=for-the-badge)

Removes padding from a base64 string

## Test coverage

| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](https://img.shields.io/badge/statements-100%25-brightgreen.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-0%25-red.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-100%25-brightgreen.svg?style=flat) |

## Usage

```typescript
import { unpadBase64 } from 'unpad-base64';

const unpadded = unpadBase64(paddedBase64);
```
