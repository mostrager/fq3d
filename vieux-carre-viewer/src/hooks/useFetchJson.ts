import { useQuery } from "@tanstack/react-query";

export function useFetchJson<T>(url: string) {
  return useQuery({
    queryKey: [url],
    queryFn: async () => {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json() as Promise<T>;
    }
  });
}
