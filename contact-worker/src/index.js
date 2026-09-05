const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request, env) {
    // Handle browser preflight request
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: corsHeaders,
      });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", {
        status: 405,
        headers: corsHeaders,
      });
    }

    try {
      const body = await request.json();

      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Shiva Kailash Real Estate and Investment Pvt. Ltd. <info@shivakailashrealstate.com.np>",
          to: ["info@shivakailashrealstate.com.np"],
          reply_to: body.email,
          subject: `New Enquiry — ${body.subject}`,

          html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    body {
      margin: 0;
      padding: 0;
      background: #f7f7f5;
      font-family: Arial, Helvetica, sans-serif;
      color: #1f2933;
    }

    .email {
      width: 100%;
      padding: 40px 16px;
      box-sizing: border-box;
    }

    .container {
      max-width: 620px;
      margin: 0 auto;
      background: #ffffff;
      border: 1px solid #e6e4df;
    }

    .top {
      padding: 32px 36px 26px;
      border-bottom: 1px solid #e6e4df;
    }

    .brand {
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 2px;
      color: #0b1e3d;
    }

    .brand span {
      color: #b3945a;
    }

    .title {
      margin: 24px 0 8px;
      font-size: 25px;
      line-height: 1.3;
      font-weight: 500;
      color: #111827;
    }

    .subtitle {
      margin: 0;
      color: #6b7280;
      font-size: 14px;
      line-height: 1.6;
    }

    .content {
      padding: 32px 36px;
    }

    .section-title {
      margin: 0 0 18px;
      font-size: 11px;
      letter-spacing: 1.6px;
      text-transform: uppercase;
      color: #9a7b45;
      font-weight: 700;
    }

    .details {
      border-top: 1px solid #e6e4df;
      border-bottom: 1px solid #e6e4df;
    }

    .row {
      padding: 16px 0;
      border-bottom: 1px solid #eeeeeb;
    }

    .row:last-child {
      border-bottom: none;
    }

    .label {
      margin-bottom: 5px;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #8a8f98;
    }

    .value {
      font-size: 15px;
      color: #202833;
      line-height: 1.5;
      word-break: break-word;
    }

    .message-section {
      margin-top: 30px;
    }

    .message {
      padding: 20px;
      background: #fafaf8;
      border-left: 3px solid #b3945a;
      color: #374151;
      font-size: 15px;
      line-height: 1.75;
      white-space: pre-wrap;
      word-break: break-word;
    }

    .action {
      text-align: center;
      padding: 32px 0 8px;
    }

    .button {
      display: inline-block;
      background: #0b1e3d;
      color: #ffffff !important;
      text-decoration: none;
      padding: 13px 25px;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: .3px;
    }

    .footer {
      padding: 22px 36px;
      background: #0b1e3d;
      color: #aeb8c7;
      text-align: center;
      font-size: 12px;
      line-height: 1.7;
    }

    .footer strong {
      color: #ffffff;
      font-size: 12px;
      letter-spacing: .8px;
    }

    @media only screen and (max-width: 600px) {
      .email {
        padding: 20px 10px;
      }

      .top,
      .content {
        padding-left: 24px;
        padding-right: 24px;
      }

      .footer {
        padding-left: 24px;
        padding-right: 24px;
      }

      .title {
        font-size: 22px;
      }
    }
  </style>
</head>

<body>

  <div class="email">

    <div class="container">

      <!-- Header -->
      <div class="top">

        <div class="brand">
          SHIVA KAILASH <span>REAL ESTATE AND INVESTMENT PVT. LTD</span>
        </div>

        <div class="title">
          New Contact Enquiry
        </div>

        <p class="subtitle">
          A new enquiry has been submitted through your website.
        </p>

      </div>

      <!-- Content -->
      <div class="content">

        <div class="section-title">
          Contact Details
        </div>

        <div class="details">

          <div class="row">
            <div class="label">Name</div>
            <div class="value">
              ${body.name || "Not provided"}
            </div>
          </div>

          <div class="row">
            <div class="label">Email</div>
            <div class="value">
              ${body.email || "Not provided"}
            </div>
          </div>

          <div class="row">
            <div class="label">Phone</div>
            <div class="value">
              ${body.phone || "Not provided"}
            </div>
          </div>

          <div class="row">
            <div class="label">Subject</div>
            <div class="value">
              ${body.subject || "Not provided"}
            </div>
          </div>

        </div>

        <!-- Message -->
        <div class="message-section">

          <div class="section-title">
            Message
          </div>

          <div class="message">
            ${body.message || "No message provided."}
          </div>

        </div>

        <!-- Reply -->
        <div class="action">

          <a
            href="mailto:${body.email}"
            class="button"
          >
            Reply to ${body.name || "Visitor"}
          </a>

        </div>

      </div>

      <!-- Footer -->
      <div class="footer">

        <strong>
          SHIVA KAILASH REAL ESTATE AND INVESTMENT PVT. LTD.
        </strong>

        <br>

        Kathmandu, Nepal

        <br>

        info@shivakailashrealstate.com.np

      </div>

    </div>

  </div>

</body>
</html>
          `,
        }),
      });

      return new Response(await resendResponse.text(), {
        status: resendResponse.status,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      });

    } catch (err) {
      return new Response(
        JSON.stringify({
          error: err.message,
        }),
        {
          status: 500,
          headers: {
            ...corsHeaders,
            "Content-Type": "application/json",
          },
        }
      );
    }
  },
};
