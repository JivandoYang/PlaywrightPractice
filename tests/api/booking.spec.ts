import {test, expect} from "../fixtures/auth"
import { ENV } from "../../utils/env"


test.describe('get booking', () => {
    test('get-list-id', async ({ request }) => {
        const response = await request.get(`${ENV.API_BASE_URL}/booking`)
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toEqual(200);
    })

    test('get-book-by-id', async ({ request }) => {
        const id = '5'
        const response = await request.get(`${ENV.API_BASE_URL}/booking/${id}`)
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toEqual(200);
        const body = await response.json();
        console.log(body);
    })
})

test.describe('create booking', () => {
    test('valid create booking', async ({ request }) => {
        const response = await request.post(`${ENV.API_BASE_URL}/booking`, {
            data: {
                firstname: "John",
                lastname: "Gaming",
                totalprice: 150,
                depositpaid: true,
                bookingdates: {
                    checkin: "2024-01-01",
                    checkout: "2024-01-05"
                },
                additionalneeds: "Breakfast"
            }
        });
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body.bookingid).toBeDefined();
        expect(body.booking.firstname).toBe("John");
    });

    test('missing data', async ({ request }) => {
        const response = await request.post(`${ENV.API_BASE_URL}/booking`, {
        data: {
            firstname: "John",
            totalprice: 150,
            bookingdates: {
                checkin: "2024-01-01",
                checkout: "2024-01-05"
            },
            additionalneeds: "Breakfast"
        }
        });
        expect(response.ok()).toBeFalsy();
    });
});

test.describe('update booking', () => {
    test('valid update booking', async ({ request, token }) => {

    const response = await request.put(`${ENV.API_BASE_URL}/booking/10`, {
        headers: { Cookie: `token=${token}`, 'Content-Type': 'application/json' },
        data: {
            firstname: "Jane",
            lastname: "Doe",
            totalprice: 150,
            depositpaid: true,
            bookingdates: {
                checkin: "2024-01-01",
                checkout: "2024-01-05"
            },
            additionalneeds: "Breakfast"
        }
    });

    console.log('STATUS:', response.status());
    console.log('BODY:', await response.text());

    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    });

    test('missing data', async ({ request, token }) => {
        const response = await request.put(`${ENV.API_BASE_URL}/booking/1263`, {
        headers: {
            Cookie: `token=${token}`
        },
        data: {
            firstname: "John",
            totalprice: 150,
            bookingdates: {
                checkin: "2024-01-01",
                checkout: "2024-01-05"
            },
            additionalneeds: "Breakfast"
        }
        });
        expect(response.ok()).toBeFalsy();
    });

    test('invalid id', async ({ request, token }) => {
        const response = await request.put(`${ENV.API_BASE_URL}/booking/99999`, {
        headers: {
            Cookie: `token=${token}`
        },
        data: {
            firstname: "Jane",
            lastname: "Doe",
            totalprice: 150,
            depositpaid: true,
            bookingdates: {
                checkin: "2024-01-01",
                checkout: "2024-01-05"
            },
            additionalneeds: "Breakfast"
        }
        });
        expect(response.ok()).toBeFalsy();
    });
});

test.describe('delete booking', () => {
    test('valid delete', async ({ request, token }) => {
        const createRes = await request.post(`${ENV.API_BASE_URL}/booking`, {
            data: {
            firstname: "John",
            lastname: "Doe",
            totalprice: 100,
            depositpaid: true,
            bookingdates: {
                checkin: "2024-01-01",
                checkout: "2024-01-05"
            },
            additionalneeds: "Breakfast"
            }
        });

        const createBody = await createRes.json();
        const bookingId = createBody.bookingid;
        const response = await request.delete(`${ENV.API_BASE_URL}/booking/${bookingId}`, {
            headers: {
                Cookie: `token=${token}`
            }
        });

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(201);
    });

    test('without token', async ({ request }) => {
        const response = await request.delete(`${ENV.API_BASE_URL}/booking/1263`);
        expect(response.ok()).toBeFalsy();
    })

    test('invalid id', async ({ request,token }) => {
        const response = await request.delete(`${ENV.API_BASE_URL}/booking/99999`, {
            headers: {
                Cookie: `token=${token}`
            }
        });
        expect(response.ok()).toBeFalsy();
    })
});