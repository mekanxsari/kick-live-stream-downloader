import fetch from "node-fetch";

//paste here your kick CLIENT_ID and CLIENT_SECRET
const CLIENT_ID = "CLIENT_ID";
const CLIENT_SECRET = "CLIENT_SECRET";

// write here username of streamer: https://kick.com/username
const CHANNEL_SLUGS = ["username"];

async function getAppToken() {
  const url = "https://id.kick.com/oauth/token";
  const body = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET
  });

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body
  });

  if (!res.ok) {
    console.error("Token is not found:", await res.text());
    return null;
  }

  const data = await res.json();
  return data.access_token;
}

async function checkChannels(slugs) {
  const token = await getAppToken();
  if (!token) return;

  const params = new URLSearchParams();
  slugs.forEach(s => params.append("slug", s));

  const url = `https://api.kick.com/public/v1/channels?${params.toString()}`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "*/*"
    }
  });

  if (!res.ok) {
    console.error("API error:", res.status, await res.text());
    return;
  }

  const data = await res.json();

  data.data.forEach(channel => {
    const live = channel.stream?.is_live ?? false;
    console.log(`${live ? true : false}`);
  });
}

checkChannels(CHANNEL_SLUGS);