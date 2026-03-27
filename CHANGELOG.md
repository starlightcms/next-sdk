# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## 4.0.0 - 2026-03-27

### Added
- Changelog

### Changed
- Update @starlightcms/react-sdk to v4.0.0
  - This update introduces breaking changes from the upstream @starlightcms/js-sdk library, see the [4.0.0 release notes](https://github.com/starlightcms/js-sdk/blob/develop/CHANGELOG.md#400---2026-03-27) for more information
- The `Image` component will now skip rendering if the given `media` prop is `undefined`
  - This behavior is in line with how the `getMediaFile` function exported by the JS SDK works starting in version 4.0.0
