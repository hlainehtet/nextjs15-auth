interface Config {
  endPoint: string;
  version1: string;
  dreamLab_token: string;
}

export const key: Config = {
  endPoint: process.env.NEXT_PUBLIC_API_END_POINT!,
  version1: "v1",
  dreamLab_token: "DREAM_LAB_TOKEN",
};
