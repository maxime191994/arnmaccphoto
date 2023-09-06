const client = createClient({
  space: process.env.arnmaccphotoCONTENTFUL_SPACE_ID,
  accessToken: process.env.arnmaccphotoIS_PREVIEW === "true" ?
    process.env.arnmaccphotoCONTENTFUL_PREVIEW_TOKEN :
    process.env.arnmaccphotoCONTENTFUL_DELIVERY_TOKEN
})

// Alternatively you can use the CDN API as follows...
const baseUrl = process.env.arnmaccphotoIS_PREVIEW === "true" ? "preview.contentful.com" : "cdn.contentful.com"