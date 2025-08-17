// frontend/src/lib/api.ts
export async function api(url: string, options: any) {
  const BASE_URL = "http://localhost:5000"; // backend ka URL aur port
  const res = await fetch(`${BASE_URL}${url}`, options);
  return res.json();
}

