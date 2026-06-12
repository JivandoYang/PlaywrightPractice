import { test, expect } from '@playwright/test';
import { ENV } from '../../utils/env';

test('successful login', async ({ request }) => {
    const response = await request.post( `${ENV.API_BASE_URL}/auth`,{
        data: {
            username: ENV.API_USERNAME,
            password: ENV.API_PASSWORD,
        },
    }
    );

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toEqual(200);
    const body = await response.json();
    console.log(body);
});

test('missing username', async ({ request }) => {
    const response = await request.post(`${ENV.API_BASE_URL}/auth`,{
        data: {
            username: ENV.API_USERNAME,
        }
    })
    expect(response.ok()).toBeFalsy;
    const body = await response.json();
    console.log(body);
})

test('missing password', async ({ request }) => {
    const response = await request.post(`${ENV.API_BASE_URL}/auth`,{
        data: {
            password: ENV.API_PASSWORD,
        }
    })
    expect(response.ok()).toBeFalsy;
    const body = await response.json();
    console.log(body);
})

test('wrong password or username', async ({ request }) => {
    const response = await request.post(`${ENV.API_BASE_URL}/auth`,{
        data: {
            username: 'random',
            password: ENV.API_PASSWORD,
        }
    })
    expect(response.ok()).toBeFalsy;
    const body = await response.json();
    console.log(body);
})
