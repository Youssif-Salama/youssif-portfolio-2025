export interface Route {
  name: string;
  link?: string;
  argument?: string;
  type: "link" | "argument";
}