import { UserInfo } from "@/utils/types";
import axios from "axios";

/**
 * 登陆
 * @returns
 */
export async function fetchLogin() {
  return new Promise<UserInfo>((resolve) => {
    const zs = {
      name: "张三",
      id: "1",
      age: 19,
    };
    resolve(zs);
  });
}
