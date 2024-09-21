/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'vue-router'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/': RouteRecordInfo<'/', '/', Record<never, never>, Record<never, never>>,
    '/dashboard/': RouteRecordInfo<'/dashboard/', '/dashboard', Record<never, never>, Record<never, never>>,
    '/dashboard/auth/login': RouteRecordInfo<'/dashboard/auth/login', '/dashboard/auth/login', Record<never, never>, Record<never, never>>,
    '/dashboard/clusters/': RouteRecordInfo<'/dashboard/clusters/', '/dashboard/clusters', Record<never, never>, Record<never, never>>,
    '/dashboard/clusters/[id]': RouteRecordInfo<'/dashboard/clusters/[id]', '/dashboard/clusters/:id', { id: ParamValue<true> }, { id: ParamValue<false> }>,
    '/dashboard/clusters/admin': RouteRecordInfo<'/dashboard/clusters/admin', '/dashboard/clusters/admin', Record<never, never>, Record<never, never>>,
    '/dashboard/rank': RouteRecordInfo<'/dashboard/rank', '/dashboard/rank', Record<never, never>, Record<never, never>>,
    '/dashboard/sources': RouteRecordInfo<'/dashboard/sources', '/dashboard/sources', Record<never, never>, Record<never, never>>,
  }
}
