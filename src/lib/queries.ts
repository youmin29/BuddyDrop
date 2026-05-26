import { supabase, Release } from "./supabase";

function sortBySemver(releases: Release[]): Release[] {
  return [...releases].sort((a, b) => {
    const [aMaj, aMin, aPatch] = a.version.split(".").map(Number);
    const [bMaj, bMin, bPatch] = b.version.split(".").map(Number);
    if (bMaj !== aMaj) return bMaj - aMaj;
    if (bMin !== aMin) return bMin - aMin;
    return bPatch - aPatch;
  });
}

export async function getReleases(): Promise<Release[]> {
  const { data, error } = await supabase
    .from("releases")
    .select("*")
    .eq("published", true);

  if (error) throw new Error(error.message);
  return sortBySemver(data ?? []);
}

export async function getReleaseWithMessages(version: string): Promise<Release | null> {
  const { data, error } = await supabase
    .from("releases")
    .select("*, release_messages(*)")
    .eq("version", version)
    .eq("published", true)
    .order("order", { referencedTable: "release_messages", ascending: true })
    .single();

  if (error) return null;
  return data;
}

export async function getAllVersions(): Promise<{ version: string }[]> {
  const { data, error } = await supabase
    .from("releases")
    .select("version")
    .eq("published", true);

  if (error) return [];
  return data ?? [];
}
