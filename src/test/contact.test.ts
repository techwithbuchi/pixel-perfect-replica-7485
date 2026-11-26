import { describe, expect, it } from "vitest";

import { createWhatsAppUrl } from "@/lib/contact";

describe("P.D. Interior Concepts contact links", () => {
  it("opens the supplied WhatsApp number with the supplied enquiry message", () => {
    expect(createWhatsAppUrl()).toBe(
      "https://wa.me/2349163052838?text=Hello%20P.D.%20Interior%20Concepts%2C%20I%20am%20interested%20in%20your%20interior%20decoration%20and%20furnishing%20services.%20I%20would%20like%20to%20make%20an%20enquiry.",
    );
  });
});