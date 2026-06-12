import { test as base } from '@playwright/test';
import { ENV } from '../../utils/env';

export const test = 
// menambahkan fixture baru bernama token yang tipenya string
base.extend<{
  token: string;
}>({
  // saat dipanggil di test maka jalankan proses dibawah
  token: async ({ request }, use) => {
    const res = await request.post(`${ENV.API_BASE_URL}/auth`, {
      data: {
        username: ENV.API_USERNAME,
        password: ENV.API_PASSWORD,
      },
    });
    const body = await res.json();

    // use untuk memasukan nilai ke dalam fixture token string tadi
    await use(body.token);
  },
});

export { expect } from '@playwright/test';