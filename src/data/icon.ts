import type { Icon } from "../models/icon";
import type { Tag } from "../models/tag";

export const icons: { [key in Icon]: string } = {
  nodejs: "logos:nodejs-icon",
  typescript: "logos:typescript-icon",
  angular: "logos:angular-icon",
  nestjs: "logos:nestjs",
  hash: "bi:hash",
  keyboard: "mdi:keyboard-outline",
};

export function getTagIcon(tag: Tag): string {
  switch (tag) {
    case "Programming":
      return icons.keyboard;
    default:
      return icons.hash;
  }
}
