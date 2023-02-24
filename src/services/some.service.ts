import { fetchUrl } from '@/services/http/some-http.service';

export function getDataFromUrl(value: string): unknown {
  return fetchUrl(value);
}
