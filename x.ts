import {cron, daily, monthly, weekly} from 'https://deno.land/x/deno_cron/cron.ts';
import axiod from "https://deno.land/x/axiod/mod.ts";
// Run Job in every 30 minutes
let data = axiod.get('https://global.americanexpress.com/api/servicing/v1/financials/transactions?limit=1000&status=posted&extended_details=merchant,category,tags,rewards,offer,deferred_details,receipts,flags,plan_details,transaction_codes',
{
    headers: {
    'authority': 'global.americanexpress.com', 
    'accept': 'application/json', 
    'accept-language': 'en-GB,en;q=0.6',
    'account_token': 'NPDGSV9EZFXQQ8V',
    'content-type': 'application/json',
    'correlation_id': 'MYCA-a587e4fd-1e9c-4204-92fe-3aa0113b61b6',
    'referer': 'https://global.americanexpress.com/activity/recent',
    'sec-ch-ua': `"Chromium";v="118", "Brave";v="118", "Not=A?Brand";v="99"`,
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': `"macOS"`,
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'sec-gpc': 1,
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
    'x-dtpc': '$237878462_685h72vCPAEKADAVCWJHEUKPQCWGJIPTHHPRGML-0e0',
    'x-dtreferer': 'https://global.americanexpress.com/activity?account_key=6838270546F47ED5D7E6DA28CE5A3C28'
}
}).then((res) => {
    return res.data;
})
data.then((data) => {
    console.log(data);
})
