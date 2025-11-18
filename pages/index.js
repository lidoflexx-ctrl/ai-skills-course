async function buy(priceId, customerEmail) {
  try {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId, quantity: 1, customerEmail }),
    });

    const json = await res.json();
    if (json?.url) {
      window.location.href = json.url; // send user to Stripe Checkout
    } else {
      alert("Checkout failed: " + (json.error || "Unknown error"));
    }
  } catch (err) {
    alert("Error: " + String(err));
  }
}

export default function Home() {
  const testEmail = "test@example.com"; // later you’ll replace with real email input

  return (
    <div style={{ padding: 40, fontFamily: "Inter, system-ui" }}>
      <h1>AI Skills Landing Page</h1>
      <p>Deployment working. Stripe + form API are set up.</p>

      <button
        style={{
          marginTop: 20,
          padding: "10px 20px",
          borderRadius: 8,
          border: "none",
          background: "#2563eb",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => buy("price_async function buy(priceId, customerEmail) {
  try {
    const res = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId, quantity: 1, customerEmail }),
    });

    const json = await res.json();
    if (json?.url) {
      window.location.href = json.url; // send user to Stripe Checkout
    } else {
      alert("Checkout failed: " + (json.error || "Unknown error"));
    }
  } catch (err) {
    alert("Error: " + String(err));
  }
}

export default function Home() {
  const testEmail = "test@example.com"; // later you’ll replace with real email input

  return (
    <div style={{ padding: 40, fontFamily: "Inter, system-ui" }}>
      <h1>AI Skills Landing Page</h1>
      <p>Deployment working. Stripe + form API are set up.</p>

      <button
        style={{
          marginTop: 20,
          padding: "10px 20px",
          borderRadius: 8,
          border: "none",
          background: "#2563eb",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => buy("price_1SUmV9BRrAJYCW5REXJvxlA1", testEmail)}
      >
        Pay R400 (Test Checkout)
      </button>
    </div>
  );
}
", testEmail)}
      >
        Pay $22.99 (Test Checkout)
      </button>
    </div>
  );
}
