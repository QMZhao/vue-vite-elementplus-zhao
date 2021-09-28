import { ServerOptions } from "vite";

const httpsRE = /^https:\/\//;

export function useServer(target: string): ServerOptions {
  const isHttps = httpsRE.test(target);
  return {
    host: true,
    port: 9527,
    open: true,
    proxy: {
      "/admin": {
        target,
        changeOrigin: true,
        ws: true,
        rewrite: (path: any) => path.replace(/^\/admin/, "/"),
        ...(isHttps ? { secure: false } : {})
      }
    }
  };
}
