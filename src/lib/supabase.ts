import { createClient } from "@supabase/supabase-js";

export type MessageType = "announce" | "feature" | "fix" | "improvement";
export type ReleaseTag = "latest" | "stable" | "legacy";

export interface ReleaseMessage {
  id: string;
  release_id: string;
  type: MessageType;
  text: string;
  detail: string | null;
  order: number;
}

export interface Release {
  id: string;
  version: string;
  date: string;
  summary: string;
  tag: ReleaseTag;
  published: boolean;
  release_messages?: ReleaseMessage[];
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
