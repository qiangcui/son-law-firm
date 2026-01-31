/**
 * Son Law Firm - Contact Form Email Handler
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to script.google.com and create a new project
 * 2. Paste this code
 * 3. Click Deploy > New deployment
 * 4. Select "Web app"
 * 5. Set "Execute as" to "Me"
 * 6. Set "Who has access" to "Anyone"
 * 7. Click Deploy and copy the Web App URL
 * 8. Add the URL to your ContactForm component
 * 
 * NOTE: Make sure the Google account running this script has edit access to the spreadsheet.
 */

const FIRM_EMAIL = "gloriacloudco@gmail.com";
const FIRM_NAME = "Son Law Firm";
const FIRM_PHONE = "303-521-7671";

// Google Spreadsheet ID - extracted from your URL
const SPREADSHEET_ID = "1YbQpmsNP-EByFkMIkrqhNO1Fg7kochG7pRF8mZNzp5A";

function doPost(e) {
  try {
    // Handle both JSON and form-encoded data
    let data;
    
    if (e.postData && e.postData.type === 'application/json') {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      // Form-encoded data (URLSearchParams)
      data = {
        name: e.parameter.name || '',
        email: e.parameter.email || '',
        phone: e.parameter.phone || '',
        message: e.parameter.message || ''
      };
    } else {
      throw new Error('No data received');
    }
    
    // Log to Google Spreadsheet
    logToSpreadsheet(data);
    
    // Send email to the law firm
    sendFirmNotification(data);
    
    // Send confirmation email to the customer
    sendCustomerConfirmation(data);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: "Emails sent successfully" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log error for debugging
    Logger.log('Error: ' + error.toString());
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle GET requests (for testing in browser)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "OK", message: "Son Law Firm Contact Form API is running" }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Log contact form submission to Google Spreadsheet
 */
function logToSpreadsheet(data) {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheets()[0]; // Use first sheet
  
  // Check if headers exist, if not add them
  const lastRow = sheet.getLastRow();
  if (lastRow === 0) {
    sheet.appendRow([
      'Timestamp',
      'Name',
      'Email',
      'Phone',
      'Message',
      'Status'
    ]);
    // Format header row
    const headerRange = sheet.getRange(1, 1, 1, 6);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#0f172a');
    headerRange.setFontColor('#ffffff');
  }
  
  // Add the new submission
  const timestamp = new Date().toLocaleString('en-US', { 
    timeZone: 'America/Denver',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  
  sheet.appendRow([
    timestamp,
    data.name || '',
    data.email || '',
    data.phone || '',
    data.message || '',
    'New'
  ]);
  
  // Auto-resize columns for better readability
  sheet.autoResizeColumns(1, 6);
}

function sendFirmNotification(data) {
  const subject = `New Inquiry from ${data.name} - Son Law Firm`;
  const timestamp = new Date().toLocaleString('en-US', { 
    timeZone: 'America/Denver',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  });
  
  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8fafc;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
          
          <!-- Header -->
          <tr>
            <td style="background: #0f172a; padding: 32px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 600; letter-spacing: -0.5px;">Son Law Firm</h1>
              <p style="margin: 8px 0 0; color: #64748b; font-size: 13px;">New Contact Form Submission</p>
            </td>
          </tr>
          
          <!-- Alert Badge -->
          <tr>
            <td style="padding: 32px 40px 0;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background: #dcfce7; color: #166534; padding: 8px 16px; border-radius: 100px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                    ● New Lead
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Contact Info -->
          <tr>
            <td style="padding: 24px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background: #f8fafc; border-radius: 12px; overflow: hidden;">
                <tr>
                  <td style="padding: 20px 24px; border-bottom: 1px solid #e2e8f0;">
                    <p style="margin: 0 0 4px; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Name</p>
                    <p style="margin: 0; color: #0f172a; font-size: 18px; font-weight: 600;">${data.name}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px 24px; border-bottom: 1px solid #e2e8f0;">
                    <p style="margin: 0 0 4px; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Email</p>
                    <p style="margin: 0;"><a href="mailto:${data.email}" style="color: #2563eb; font-size: 16px; text-decoration: none; font-weight: 500;">${data.email}</a></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px 24px; border-bottom: 1px solid #e2e8f0;">
                    <p style="margin: 0 0 4px; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Phone</p>
                    <p style="margin: 0;"><a href="tel:${data.phone}" style="color: #2563eb; font-size: 16px; text-decoration: none; font-weight: 500;">${data.phone || 'Not provided'}</a></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px 24px;">
                    <p style="margin: 0 0 4px; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Submitted</p>
                    <p style="margin: 0; color: #475569; font-size: 14px;">${timestamp}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Message -->
          <tr>
            <td style="padding: 0 40px 32px;">
              <p style="margin: 0 0 12px; color: #64748b; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">Message</p>
              <div style="background: #fffbeb; border: 1px solid #fef3c7; border-radius: 12px; padding: 20px;">
                <p style="margin: 0; color: #1e293b; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${data.message}</p>
              </div>
            </td>
          </tr>
          
          <!-- CTA Button -->
          <tr>
            <td style="padding: 0 40px 40px; text-align: center;">
              <a href="mailto:${data.email}?subject=Re: Your inquiry to Son Law Firm" style="display: inline-block; background: #2563eb; color: #ffffff; padding: 16px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px;">Reply to ${data.name}</a>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background: #f1f5f9; padding: 24px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; color: #94a3b8; font-size: 12px;">Sent from Son Law Firm website contact form</p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
  
  GmailApp.sendEmail(FIRM_EMAIL, subject, `New contact from ${data.name}\n\nEmail: ${data.email}\nPhone: ${data.phone}\n\nMessage:\n${data.message}`, {
    htmlBody: htmlBody,
    name: "Son Law Firm Website"
  });
}

function sendCustomerConfirmation(data) {
  const subject = `We've Received Your Message - Son Law Firm`;
  
  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8fafc;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 560px; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
          
          <!-- Header -->
          <tr>
            <td style="background: #0f172a; padding: 48px 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 700; letter-spacing: -0.5px;">Son Law Firm</h1>
              <p style="margin: 12px 0 0; color: #94a3b8; font-size: 14px; font-weight: 400;">Personal Injury Attorneys</p>
            </td>
          </tr>
          
          <!-- Success Icon -->
          <tr>
            <td style="padding: 40px 40px 0; text-align: center;">
              <div style="display: inline-block; background: #dcfce7; border-radius: 50%; padding: 16px; margin-bottom: 24px;">
                <span style="font-size: 32px;">✓</span>
              </div>
              <h2 style="margin: 0 0 8px; color: #0f172a; font-size: 24px; font-weight: 600;">Message Received</h2>
              <p style="margin: 0; color: #64748b; font-size: 15px;">Thank you for reaching out, ${data.name}</p>
            </td>
          </tr>
          
          <!-- Main Content -->
          <tr>
            <td style="padding: 32px 40px;">
              <p style="margin: 0 0 20px; color: #475569; font-size: 16px; line-height: 1.7;">
                We appreciate you contacting Son Law Firm. Our team is committed to providing personal attention to every case, and we will review your inquiry promptly.
              </p>
              <p style="margin: 0; color: #475569; font-size: 16px; line-height: 1.7;">
                <strong style="color: #0f172a;">Expect to hear from us within 24 hours.</strong>
              </p>
            </td>
          </tr>
          
          <!-- Call Box -->
          <tr>
            <td style="padding: 0 40px 32px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); border-radius: 16px; overflow: hidden;">
                <tr>
                  <td style="padding: 32px; text-align: center;">
                    <p style="margin: 0 0 8px; color: rgba(255,255,255,0.8); font-size: 12px; text-transform: uppercase; letter-spacing: 2px; font-weight: 600;">Need Immediate Help?</p>
                    <a href="tel:${FIRM_PHONE}" style="display: block; margin: 0; color: #ffffff; font-size: 32px; font-weight: 700; text-decoration: none; letter-spacing: -1px;">${FIRM_PHONE}</a>
                    <p style="margin: 12px 0 0; color: rgba(255,255,255,0.7); font-size: 13px;">Available 24/7 for urgent matters</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- What Happens Next -->
          <tr>
            <td style="padding: 0 40px 32px;">
              <p style="margin: 0 0 16px; color: #0f172a; font-size: 16px; font-weight: 600;">What Happens Next?</p>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width: 32px; vertical-align: top;">
                          <div style="background: #dbeafe; color: #2563eb; width: 24px; height: 24px; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: 700;">1</div>
                        </td>
                        <td style="color: #475569; font-size: 15px; padding-left: 12px;">Our team reviews your message</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width: 32px; vertical-align: top;">
                          <div style="background: #dbeafe; color: #2563eb; width: 24px; height: 24px; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: 700;">2</div>
                        </td>
                        <td style="color: #475569; font-size: 15px; padding-left: 12px;">An attorney assesses your case</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width: 32px; vertical-align: top;">
                          <div style="background: #dbeafe; color: #2563eb; width: 24px; height: 24px; border-radius: 50%; text-align: center; line-height: 24px; font-size: 12px; font-weight: 700;">3</div>
                        </td>
                        <td style="color: #475569; font-size: 15px; padding-left: 12px;">We contact you to schedule a free consultation</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Promise Box -->
          <tr>
            <td style="padding: 0 40px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="background: #f8fafc; border-radius: 12px; border-left: 4px solid #2563eb;">
                <tr>
                  <td style="padding: 20px 24px;">
                    <p style="margin: 0 0 8px; color: #0f172a; font-size: 14px; font-weight: 600;">Our Promise to You</p>
                    <p style="margin: 0; color: #64748b; font-size: 14px; line-height: 1.6;">
                      There is no cost and no obligation to learn if we can help. If you retain us, you pay no upfront fees. Our fees come only as a percentage of compensation we obtain for you.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Quote -->
          <tr>
            <td style="padding: 0 40px 40px; text-align: center;">
              <p style="margin: 0; color: #94a3b8; font-size: 15px; font-style: italic; line-height: 1.6;">
                "We provide personal attention to every stage of a case."
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background: #0f172a; padding: 32px 40px; text-align: center;">
              <p style="margin: 0 0 4px; color: #ffffff; font-size: 16px; font-weight: 600;">Son Law Firm</p>
              <p style="margin: 0 0 16px; color: #94a3b8; font-size: 13px;">3025 S. Parker Rd., Suite 705 | Aurora, CO 80014</p>
              <p style="margin: 0;">
                <a href="tel:${FIRM_PHONE}" style="color: #60a5fa; text-decoration: none; font-size: 14px;">${FIRM_PHONE}</a>
                <span style="color: #475569; margin: 0 8px;">•</span>
                <a href="mailto:${FIRM_EMAIL}" style="color: #60a5fa; text-decoration: none; font-size: 14px;">${FIRM_EMAIL}</a>
              </p>
              <p style="margin: 24px 0 0; color: #64748b; font-size: 11px;">
                This email was sent because you submitted a contact form on our website.
              </p>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
  
  GmailApp.sendEmail(data.email, subject, `Dear ${data.name},\n\nThank you for contacting Son Law Firm. We have received your message and will get back to you within 24 hours.\n\nFor immediate assistance, call us at ${FIRM_PHONE}.\n\nBest regards,\nSon Law Firm\n3025 S. Parker Rd., Suite 705\nAurora, CO 80014`, {
    htmlBody: htmlBody,
    name: FIRM_NAME,
    replyTo: FIRM_EMAIL
  });
}

// Test function - run this to test everything (spreadsheet + emails)
function testAll() {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    phone: "555-123-4567",
    message: "This is a test message from the contact form."
  };
  
  logToSpreadsheet(testData);
  sendFirmNotification(testData);
  sendCustomerConfirmation(testData);
  
  Logger.log("Test completed! Check your spreadsheet and email.");
}

// Test only spreadsheet logging (no emails sent)
function testSpreadsheet() {
  const testData = {
    name: "Spreadsheet Test",
    email: "spreadsheet@test.com",
    phone: "555-000-0000",
    message: "Testing spreadsheet logging only."
  };
  
  logToSpreadsheet(testData);
  Logger.log("Spreadsheet test completed! Check your Google Sheet.");
}

// Test only emails (no spreadsheet)
function testEmails() {
  const testData = {
    name: "Email Test User",
    email: "test@example.com",
    phone: "555-123-4567",
    message: "This is a test message for email only."
  };
  
  sendFirmNotification(testData);
  sendCustomerConfirmation(testData);
  Logger.log("Email test completed! Check your inbox.");
}
