// Script to extract Vision IAS centers information from https://visionias.in/

async function getVisionIASCenters(page) {
  try {
    // Navigate to the website
    await page.goto('https://visionias.in/');
    
    // Scroll to bottom to load all content
    await page.evaluate(() => {
      window.scrollBy(0, document.body.scrollHeight);
    });

    // Wait for content to load
    await page.waitForTimeout(1000);

    // Extract centers information
    const centersData = await page.evaluate(() => {
      const text = document.body.innerText;
      const ourCentersIndex = text.toLowerCase().indexOf('our centers');

      if (ourCentersIndex !== -1) {
        const centersSection = text.substring(ourCentersIndex, ourCentersIndex + 3000);
        return {
          found: true,
          centers: centersSection
        };
      } else {
        return {
          found: false,
          message: "OUR CENTERS section not found"
        };
      }
    });

    return centersData;
  } catch (error) {
    return {
      error: true,
      message: error.message
    };
  }
}

// List of Vision IAS Centers (as extracted)
const visionIASCenters = {
  delhi: [
    {
      name: "Head Office (Central Enquiry) & GMMR Classroom Center",
      address: "33, Pusa Road, Near Karol Bagh Metro Station, Opposite Pillar No. 113, Delhi – 110005"
    },
    {
      name: "Rajinder Nagar Mains Test Center",
      address: "16-B, 2nd Floor, National Trust Building, Bada Bazar Road, Old rajinder nagar, New delhi-110060"
    },
    {
      name: "Mukherjee Nagar Enquiry & Registration Office",
      address: "Plot No. 857, Ground Floor, Mukherjee Nagar, Opposite Punjab & Sindh Bank, New Delhi – 110009"
    },
    {
      name: "Mukherjee Nagar Test Center",
      address: "Plot No. 857, 1st Floor, Banda Bahadur Marg (Opp Punjab & Sindh Bank), Dr. Mukherjee Nagar, Delhi- 110009"
    },
    {
      name: "Vision IAS GTB Nagar Enquiry and Classroom",
      address: "Above GTB Nagar Metro Station Gate No. 2, Delhi- 110009",
      phone: "+91 8468022022"
    }
  ],
  otherCenters: [
    {
      name: "Bengaluru Center",
      address: "36/3, Attiguppe, 2nd Main Road, Attiguppe, Infront of Metro pillar 351, Bengaluru, Karnataka, 560040",
      phone: "+91 8468022022",
      email: "enquiry@visionias.in"
    },
    {
      name: "Pune Center",
      address: "202, Eiffel Square Building, Tilak Road, Sadashiv Peth (Near Shakti Sports), Pune-411030",
      phone: "020-48605656, 8007500096",
      email: "pune@visionias.in"
    },
    {
      name: "Jaipur Center",
      address: "119, Apex Mall, Lalkothi, Tonk Road, Jaipur, Rajasthan-302015",
      phone: "+91 9001949244",
      email: "jaipur@visionias.in"
    },
    {
      name: "Jodhpur Center",
      address: "C-5 Parvati Villa, Bhaskar Circle, Ratanada, Jodhpur, Rajasthan - 332001",
      phone: "+91 9001949244",
      email: "jaipur@visionias.in"
    },
    {
      name: "Hyderabad Center",
      address: "1-1-18/59-62, Ground Floor, SM Plaza, Jawahar Nagar, RTC X Road, Hyderabad, Telangana - 500020",
      phone: "+91 8448449509, +91 9000104133",
      email: "hyderabad@visionias.in"
    },
    {
      name: "Ahmedabad Center",
      address: "117/118, Ratna Business Square, Above Croma, Opp. H. K. Arts College, Ashram Road, Ahmedabad - 380009",
      phone: "+91 9909447040, +91 7575007040, +91 7600227040",
      email: "ahmedabad@visionias.in"
    },
    {
      name: "Lucknow Center",
      address: "B-27, Beli Garad Chauraha Main Rd, near New Sahu Studio, Sector-A, Sector K, Aliganj, Lucknow, Uttar Pradesh – 226024",
      phone: "+91 7042413943, +91 8468022022",
      email: "enquiry@visionias.in"
    },
    {
      name: "Chandigarh Center",
      address: "1st Floor, Dainik Bhaskar Building, 11-12, Sector 25D, Chandigarh-160024",
      phone: "+91 9205544829, +91 8468022022",
      email: "enquiry@visionias.in"
    },
    {
      name: "Bhopal Center",
      address: "Plot No 8, ISBT, Commercial Scheme Zone, Habibganj, Bhopal, Madhya Pradesh-462023",
      phone: "+91 8595955575, +91 9019066066",
      email: "enquiry@visionias.in"
    },
    {
      name: "Prayagraj Center",
      address: "2nd floor, 43/1 Sardar Patel Marg, Civil lines, Prayagraj, Uttar Pradesh - 211001",
      phone: "+91 8468022022, +91 9019066066",
      email: "enquiry@visionias.in"
    },
    {
      name: "Ranchi Center",
      address: "5th Floor, 503, Le Desire Complex, Opp. Hariom Tower, Lalpur Circular Road, Ranchi- 834001",
      phone: "+91 8468022022, +91 9019066066",
      email: "enquiry@visionias.in"
    },
    {
      name: "Guwahati Center",
      address: "6th floor, 602, Amaze Shopping Mall, AT Road, Opp. Pan Bazar Flyover, Guwahati (Above Vishal Mega Mart), Assam, 781001",
      phone: "+91 8468022022, +91 9019066066",
      email: "enquiry@visionias.in"
    }
  ]
};

module.exports = { getVisionIASCenters, visionIASCenters };
