import { STATS_OBJECT_NAME } from './sources';
import type { StatsStore } from './store';

/** Accès à l'instance unique du Durable Object de statistiques (null si la liaison est absente). */
export function statsStub(env: any): DurableObjectStub<StatsStore> | null {
  const ns = env?.STATS;
  if (!ns) return null;
  return ns.get(ns.idFromName(STATS_OBJECT_NAME));
}
