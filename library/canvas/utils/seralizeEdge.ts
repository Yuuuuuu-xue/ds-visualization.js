export default function  seralizeEdge(v1_id: string, v2_id: string): string {
  return JSON.stringify([v1_id, v2_id]);
};