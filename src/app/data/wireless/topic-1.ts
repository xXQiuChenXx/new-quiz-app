import { Quiz } from "@/app/types/quiz";

export const wirelessTopic1: Quiz = {
  id: "wireless-topic-1",
  categoryId: "wireless",
  subcategoryId: "wireless-topic-1",
  title: "Wireless Mobile Networking - Topic 1",
  questions: [
    {
      id: "chapter1-q1",
      text: "What is a primary disadvantage of migrating to higher frequencies for wireless technologies, according to the graph on slide 8?",
      options: [
        {
          id: "a",
          text: "They offer lower data rates.",
        },
        {
          id: "b",
          text: "They have a shorter effective range and are more affected by obstructions.",
        },
        {
          id: "c",
          text: "They require less power to transmit.",
        },
        {
          id: "d",
          text: "They are not suitable for mobile communications.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Slide 8 explicitly states that higher frequencies are 'affected by obstructions' and have a 'shorter effective range'.",
        incorrect: {
          a: "This is incorrect. The slide indicates higher frequencies allow for 'greater data ranges' (rates).",
          c: "This is incorrect. The slide notes they require 'higher power'.",
          d: "This is incorrect. Technologies like 5G and mmWave Wi-Fi use these higher frequencies for mobile applications.",
        },
      },
    },
    {
      id: "chapter1-q2",
      text: "Which of the following is NOT listed as one of the five main types of wireless systems and applications on slide 9?",
      options: [
        {
          id: "a",
          text: "Cellular Systems",
        },
        {
          id: "b",
          text: "Satellite Systems",
        },
        {
          id: "c",
          text: "Wired Optical Networks",
        },
        {
          id: "d",
          text: "Fixed Wireless Access",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Slide 9 lists 1. WLANs, 2. Cellular Systems, 3. Satellite Systems, 4. Fixed Wireless Access, and 5. Short Range Radios. Wired Optical Networks are a wired technology, not wireless.",
        incorrect: {
          a: "Cellular Systems is listed as type 2.",
          b: "Satellite Systems is listed as type 3.",
          d: "Fixed Wireless Access is listed as type 4.",
        },
      },
    },
    {
      id: "chapter1-q3",
      text: "In a WLAN, what factors affect the 'local' coverage area?",
      options: [
        {
          id: "a",
          text: "The number of users and the time of day.",
        },
        {
          id: "b",
          text: "Radio design, operating frequency, and antenna capabilities.",
        },
        {
          id: "c",
          text: "The brand of the device (e.g., Apple vs. Samsung).",
        },
        {
          id: "d",
          text: "Only the internet speed provided by the ISP.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Slide 10 lists 'radio design, operating frequency, propagation characteristics, antenna capabilities' as factors affecting the coverage area.",
        incorrect: {
          a: "While the number of users can affect performance, it doesn't define the physical coverage area.",
          c: "Device brand is not a fundamental factor listed.",
          d: "ISP speed is for the backhaul, not the radio coverage.",
        },
      },
    },
    {
      id: "chapter1-q4",
      text: "What type of transmission architecture does a single Access Point serving multiple clients directly represent?",
      options: [
        {
          id: "a",
          text: "Single-hop radio transmission",
        },
        {
          id: "b",
          text: "Multiple-hop radio transmission",
        },
        {
          id: "c",
          text: "A femtocell network",
        },
        {
          id: "d",
          text: "A satellite relay",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Slide 11 shows a diagram of this setup and explicitly labels it as 'This architecture supports single-hop radio transmission'.",
        incorrect: {
          b: "Multiple-hop transmission, as shown on slide 12, involves relays.",
          c: "Femtocells are part of cellular systems (slide 17).",
          d: "Satellite relays are part of satellite systems (slide 21).",
        },
      },
    },
    {
      id: "chapter1-q5",
      text: "How can a WLAN be designed to support 'hands-off' for a moving client between different access points?",
      options: [
        {
          id: "a",
          text: "By using a single, high-power access point.",
        },
        {
          id: "b",
          text: "By adding relays and supporting multiple-hop radio transmission.",
        },
        {
          id: "c",
          text: "By switching to a licensed frequency band.",
        },
        {
          id: "d",
          text: "By blocking all moving clients from the network.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Slide 12 states, 'Multiple-hop radio transmission supports hands-off of a moving client between different access points.'",
        incorrect: {
          a: "A single AP cannot manage a handoff to another AP.",
          c: "The frequency band type (licensed/unlicensed) does not determine the handoff capability.",
          d: "This is not a supportive solution for mobility.",
        },
      },
    },
    {
      id: "chapter1-q6",
      text: "What kind of frequency bands do WLANs generally use, and how is interference managed?",
      options: [
        {
          id: "a",
          text: "Licensed bands; managed by the FCC.",
        },
        {
          id: "b",
          text: "Unlicensed bands; managed by the WLAN access protocol.",
        },
        {
          id: "c",
          text: "Licensed bands; managed by the WLAN access protocol.",
        },
        {
          id: "d",
          text: "Unlicensed bands; managed by the FCC.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Slide 13 states that WLANs 'generally use unlicensed frequency bands' and 'Interferences between WLAN devices is controlled by the WLAN access protocol'.",
        incorrect: {
          a: "WLANs use unlicensed bands; cellular uses licensed bands.",
          c: "WLANs use unlicensed bands.",
          d: "Interference in unlicensed bands is managed by the protocol (like CSMA/CA), not directly by the FCC.",
        },
      },
    },
    {
      id: "chapter1-q7",
      text: "How do cellular systems primarily differ from WLANs in their use of the radio spectrum?",
      options: [
        {
          id: "a",
          text: "Cellular systems use unlicensed bands, while WLANs use licensed bands.",
        },
        {
          id: "b",
          text: "Cellular systems operate in licensed bands, while WLANs generally use unlicensed bands.",
        },
        {
          id: "c",
          text: "Both systems use only licensed bands.",
        },
        {
          id: "d",
          text: "Neither system uses radio frequencies.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Slide 14 states cellular systems 'operate in licensed frequency bands', while slide 13 states WLANs 'generally use unlicensed frequency bands'.",
        incorrect: {
          a: "This statement is the reverse of the correct answer.",
          c: "WLANs primarily use unlicensed bands.",
          d: "Both are wireless technologies that rely on radio frequencies.",
        },
      },
    },
    {
      id: "chapter1-q8",
      text: "What is the core concept of 'frequency reuse' in cellular systems?",
      options: [
        {
          id: "a",
          text: "Assigning a unique, permanent frequency to every user.",
        },
        {
          id: "b",
          text: "Using the same frequency for all cells simultaneously to maximize power.",
        },
        {
          id: "c",
          text: "Reusing the same frequency over spatially separated locations.",
        },
        {
          id: "d",
          text: "Switching to an unlicensed frequency when the licensed one is busy.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Slide 15 defines frequency reuse as the ability to 'reuse same frequency over spatially separated locations' because signal power falls off with distance.",
        incorrect: {
          a: "This would be extremely inefficient and is not frequency reuse.",
          b: "This would cause massive interference; separation is key.",
          d: "Cellular systems do not typically use unlicensed bands for their primary service.",
        },
      },
    },
    {
      id: "chapter1-q9",
      text: "What potential problem is created by the 'frequency reuse' design in cellular systems?",
      options: [
        {
          id: "a",
          text: "Intercell interference",
        },
        {
          id: "b",
          text: "Inability to handoff",
        },
        {
          id: "c",
          text: "A smaller 'footprint' for the entire network",
        },
        {
          id: "d",
          text: "Network overload from too many channels",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Slide 15 explicitly notes 'intercell interference' as a consequence of reusing channels in other cells.",
        incorrect: {
          b: "Frequency reuse is a core part of the design that *allows* handoffs between cells.",
          c: "Frequency reuse allows for a large network footprint to be built.",
          d: "Overload (slide 18) is when there are more users than channels, a separate issue from interference.",
        },
      },
    },
    {
      id: "chapter1-q10",
      text: "What is a 'hierarchical cellular system architecture'?",
      options: [
        {
          id: "a",
          text: "A system that ranks users by priority (e.g., gold, silver, bronze).",
        },
        {
          id: "b",
          text: "A system using only a single, large macrocell for an entire city.",
        },
        {
          id: "c",
          text: "A system that utilizes small cells (e.g., femtocells) within macrocells.",
        },
        {
          id: "d",
          text: "A system that connects cells in a single line or chain.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Slide 19 defines this architecture as 'utilises small cells within macrocells'. Slide 17 provides a visual example with femtocells inside a macrocell.",
        incorrect: {
          a: "This describes a service/billing model, not a network architecture.",
          b: "This is the opposite of a hierarchical system.",
          d: "This is not the standard definition.",
        },
      },
    },
    {
      id: "chapter1-q11",
      text: "What are the key benefits of using a hierarchical cellular system with small cells?",
      options: [
        {
          id: "a",
          text: "It simplifies network planning and reduces hardware costs.",
        },
        {
          id: "b",
          text: "It eliminates the need for a core network.",
        },
        {
          id: "c",
          text: "It provides increased capacity and reduces required transmit power.",
        },
        {
          id: "d",
          text: "It increases the maximum range of the macrocell.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Slide 19 lists the benefits as 'provide increased capacity' and 'reduce the transmit power required'.",
        incorrect: {
          a: "This architecture arguably *increases* network complexity.",
          b: "The small cells still connect to the core network (as shown on slide 17).",
          d: "It adds capacity *within* the macrocell's range, but doesn't extend it.",
        },
      },
    },
    {
      id: "chapter1-q12",
      text: "Which of the following is a practical issue that affects the optimal placement of cellular transmitters in the real world?",
      options: [
        {
          id: "a",
          text: "The number of text messages sent per day.",
        },
        {
          id: "b",
          text: "Zoning restrictions, site cost, and backhaul availability.",
        },
        {
          id: "c",
          text: "The popularity of the cellular operator.",
        },
        {
          id: "d",
          text: "The shape of the antenna (square vs. triangle).",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Slide 18 lists 'zoning restrictions, rooftop availability, site cost, backhaul and power availability' as practical issues that affect optimal transmitter placement.",
        incorrect: {
          a: "This relates to network load, not physical placement constraints.",
          c: "This is a business metric, not a physical placement constraint.",
          d: "The shape of the *cell* is a model (slide 16), not a practical constraint on placement.",
        },
      },
    },
    {
      id: "chapter1-q13",
      text: "What is the role of the 'Mobile Telephone Switching Office' (MTSO) in a cellular system?",
      options: [
        {
          id: "a",
          text: "It is the central controller that coordinates handoffs and routes calls.",
        },
        {
          id: "b",
          text: "It is the physical antenna on the cell tower.",
        },
        {
          id: "c",
          text: "It is the billing department for the cellular operator.",
        },
        {
          id: "d",
          text: "It is another name for the mobile user's handset.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Slide 20 identifies the MTSO as the 'central controller for the cellular system' responsible for 'coordinating handoffs between cells' and 'routing calls'.",
        incorrect: {
          b: "The antenna is part of the Base Station (BS), not the MTSO.",
          c: "This is an administrative function, not a network component.",
          d: "The handset is the mobile device.",
        },
      },
    },
    {
      id: "chapter1-q14",
      text: "What is a primary advantage of satellite systems?",
      options: [
        {
          id: "a",
          text: "They have zero propagation delay.",
        },
        {
          id: "b",
          text: "They are the cheapest form of wireless communication.",
        },
        {
          id: "c",
          text: "They can provide coverage in remote areas where terrestrial systems cannot.",
        },
        {
          id: "d",
          text: "They do not require any ground stations.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Slide 21 states a key feature is the 'ability to provide coverage in remote areas'.",
        incorrect: {
          a: "They have significant propagation delay, especially GEO (slide 23).",
          b: "Satellites are very expensive to build and launch (slide 23).",
          d: "They communicate with 'Base station or gateway' on the ground (slide 21).",
        },
      },
    },
    {
      id: "chapter1-q15",
      text: "In the satellite system diagram on slide 21, what does 'MUL' stand for?",
      options: [
        {
          id: "a",
          text: "Mobile User Link",
        },
        {
          id: "b",
          text: "Main Uplink Logic",
        },
        {
          id: "c",
          text: "Multi-use Link",
        },
        {
          id: "d",
          text: "Medium Uplink Latency",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "The diagram on slide 21 explicitly labels the link from the mobile user as 'Mobile User Link (MUL)'.",
        incorrect: {
          b: "This is a plausible but incorrect term.",
          c: "This is a plausible but incorrect term.",
          d: "This is a plausible but incorrect term.",
        },
      },
    },
    {
      id: "chapter1-q16",
      text: "Which satellite orbit is characterized by a single satellite providing continuous coverage and large propagation delay?",
      options: [
        {
          id: "a",
          text: "Low Earth Orbit (LEO)",
        },
        {
          id: "b",
          text: "Geostationary Earth Orbit (GEO)",
        },
        {
          id: "c",
          text: "Medium Earth Orbit (MEO)",
        },
        {
          id: "d",
          text: "Elliptical Earth Orbit (EEO)",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Slide 23 states that GEO provides 'Continuous coverage', 'Requires a single satellite', and has a 'Large round-trip delay'.",
        incorrect: {
          a: "LEO provides 'Non-continuous' coverage (per satellite) and has 'Low' delay.",
          c: "MEO is an intermediate orbit.",
          d: "EEO is not one of the three main classes listed on slide 22.",
        },
      },
    },
    {
      id: "chapter1-q17",
      text: "Which satellite system requires a 'constellation' of satellites, has low latency, and is primarily used for mobile services?",
      options: [
        {
          id: "a",
          text: "Geostationary Earth Orbit (GEO)",
        },
        {
          id: "b",
          text: "Low Earth Orbit (LEO)",
        },
        {
          id: "c",
          text: "Medium Earth Orbit (MEO)",
        },
        {
          id: "d",
          text: "Fixed Wireless Access",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Slide 23 lists these characteristics for LEO: 'Typically requires a constellation', 'Low' propagation delay, and 'Mobile services' as its primary service.",
        incorrect: {
          a: "GEO has high latency, uses a single satellite, and is for broadcasting.",
          c: "MEO is an intermediate orbit.",
          d: "FWA is a terrestrial system, not a satellite system (slide 25).",
        },
      },
    },
    {
      id: "chapter1-q18",
      text: "What is the 'Most noticeable standard' mentioned for Fixed Wireless Access (FWA)?",
      options: [
        {
          id: "a",
          text: "IEEE 802.11 (Wi-Fi)",
        },
        {
          id: "b",
          text: "Bluetooth",
        },
        {
          id: "c",
          text: "IEEE 802.16 (WiMAX)",
        },
        {
          id: "d",
          text: "ZigBee",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Slide 25 explicitly states, 'Most noticeable standard is IEEE 802.16 (WiMAX) standard'.",
        incorrect: {
          a: "IEEE 802.11 is the standard for WLANs.",
          b: "Bluetooth is a short-range radio standard (slide 27).",
          d: "ZigBee is a short-range radio standard (slide 29).",
        },
      },
    },
    {
      id: "chapter1-q19",
      text: "Short-range radio systems like Bluetooth and ZigBee are often used for what type of applications?",
      options: [
        {
          id: "a",
          text: "Long-distance global communication.",
        },
        {
          id: "b",
          text: "Broadcasting high-definition television.",
        },
        {
          id: "c",
          text: "Interconnected systems like smart homes and sensor networks.",
        },
        {
          id: "d",
          text: "High-speed backhaul for cellular networks.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Slide 26 lists 'interconnected systems (smart homes, sensor networks etc...)' as applications for short-range radios.",
        incorrect: {
          a: "This is the opposite of 'short-range'.",
          b: "This is a high-bandwidth application, unsuitable for these low-power technologies.",
          d: "This requires a high-capacity link, which these are not.",
        },
      },
    },
    {
      id: "chapter1-q20",
      text: "What type of routing protocol is characteristic of short-range radio systems used in smart homes?",
      options: [
        {
          id: "a",
          text: "Single-hop routing",
        },
        {
          id: "b",
          text: "Multihop routing protocol",
        },
        {
          id: "c",
          text: "Satellite routing protocol",
        },
        {
          id: "d",
          text: "Inter-continental routing protocol",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Slide 26 identifies this category as 'Short Range Radio with Multihop Routing' and lists 'smart homes' as an application.",
        incorrect: {
          a: "Single-hop is characteristic of simple WLANs (slide 11), not mesh-like sensor networks.",
          c: "This is for satellite systems.",
          d: "This is not a relevant term.",
        },
      },
    },
    {
      id: "chapter1-q21",
      text: "A Bluetooth network forms small 'ad hoc networks' of up to 8 devices. What are these networks called?",
      options: [
        {
          id: "a",
          text: "Piconets",
        },
        {
          id: "b",
          text: "Femtocells",
        },
        {
          id: "c",
          text: "Macrocells",
        },
        {
          id: "d",
          text: "WiMAX networks",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Slide 28 states that Bluetooth 'Forms small piconets (ad hoc networks of $le8$ devices).'",
        incorrect: {
          b: "Femtocells are part of cellular systems (slide 17).",
          c: "Macrocells are large cellular areas (slide 17).",
          d: "WiMAX is a standard for FWA (slide 25).",
        },
      },
    },
    {
      id: "chapter1-q22",
      text: "What multiple access method does Bluetooth use?",
      options: [
        {
          id: "a",
          text: "Orthogonal Frequency Division Multiplexing (OFDM)",
        },
        {
          id: "b",
          text: "Frequency hopping",
        },
        {
          id: "c",
          text: "Code Division Multiple Access (CDMA)",
        },
        {
          id: "d",
          text: "A single dedicated channel",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Slide 28 states that Bluetooth 'Uses frequency hopping for multiple access.'",
        incorrect: {
          a: "OFDM is a mitigation technique (slide 38), not the access method for Bluetooth.",
          c: "CDMA is a cellular technology (slide 7).",
          d: "Bluetooth uses one primary *channel* but 'hops' across many frequencies.",
        },
      },
    },
    {
      id: "chapter1-q23",
      text: "What is the key feature of Zigbee's 'Green Mode'?",
      options: [
        {
          id: "a",
          text: "It is designed for high-speed video streaming.",
        },
        {
          id: "b",
          text: "Its radio is powered by energy harvesting, reducing or eliminating the need for a battery.",
        },
        {
          id: "c",
          text: "It operates in a licensed 'green' spectrum band.",
        },
        {
          id: "d",
          text: "It offers a much higher range than Z-Wave.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Slide 29 defines the 'Green Mode' as 'Radio powered by energy harvesting (reducing/eliminating battery need)' with a goal of 'Months or years of operation without recharging'.",
        incorrect: {
          a: "Zigbee is for low-data-rate applications like sensors.",
          c: "It operates in unlicensed bands.",
          d: "Z-Wave is noted for having a higher range (slide 30).",
        },
      },
    },
    {
      id: "chapter1-q24",
      text: "What is a primary advantage of Z-Wave for its target application (smart homes)?",
      options: [
        {
          id: "a",
          text: "It offers a higher range than standard Zigbee or Bluetooth.",
        },
        {
          id: "b",
          text: "It has an extremely high data rate for streaming.",
        },
        {
          id: "c",
          text: "It is powered by energy harvesting.",
        },
        {
          id: "d",
          text: "It uses a licensed frequency for guaranteed quality.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Slide 30 states that Z-Wave 'Offers higher range than standard Zigbee or Bluetooth.'",
        incorrect: {
          b: "It is a low-power, low-data-rate technology for smart homes.",
          c: "Energy harvesting is the key feature mentioned for Zigbee (slide 29).",
          d: "It operates in an unlicensed band.",
        },
      },
    },
    {
      id: "chapter1-q25",
      text: "What are the two 'Key Drivers' mentioned for future wireless trends?",
      options: [
        {
          id: "a",
          text: "A decrease in data traffic and number of devices.",
        },
        {
          id: "b",
          text: "A focus on wired connections and analog signals.",
        },
        {
          id: "c",
          text: "Massive data growth and the explosion in the number of devices.",
        },
        {
          id: "d",
          text: "Reduced government regulation and a move to lower frequencies.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Slide 31 lists the 'Key Drivers' as 'Massive Data Growth' and 'Device Explosion'.",
        incorrect: {
          a: "This is the opposite of the trend.",
          b: "This is the opposite of the trend.",
          d: "The trend is toward higher frequencies (slide 36).",
        },
      },
    },
    {
      id: "chapter1-q26",
      text: "What type of communication is characteristic of Machine-to-Machine (MTM) / Internet of Things (IoT)?",
      options: [
        {
          id: "a",
          text: "Communications involving many short messages, sometimes with stringent delay needs.",
        },
        {
          id: "b",
          text: "A few users streaming continuous, high-definition video.",
        },
        {
          id: "c",
          text: "Long, multi-hour voice calls.",
        },
        {
          id: "d",
          text: "Applications that are never sensitive to delay.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Slide 32 describes MTM/IoT as 'Communications involving many short messages; requires stringent real-time delay for control applications.'",
        incorrect: {
          b: "This is a consumer broadband use case, not typical MTM/IoT.",
          c: "This is a voice telephony use case.",
          d: "This is incorrect; slide 32 explicitly mentions 'stringent real-time delay'.",
        },
      },
    },
    {
      id: "chapter1-q27",
      text: "What is 'Network Densification'?",
      options: [
        {
          id: "a",
          text: "A technique that uses 10 to 100+ antennas.",
        },
        {
          id: "b",
          text: "Using many small transmitters (femtocells, picocells) to reuse carrier frequencies.",
        },
        {
          id: "c",
          text: "A move to frequencies in the 30-300 GHz range.",
        },
        {
          id: "d",
          text: "Focusing a device's needs for interference reduction.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Slide 33 defines 'Network Densification' as 'Uses many small transmitters (femtocells, picocells) to reuse carrier frequencies repeatedly.'",
        incorrect: {
          a: "This is the definition of 'Massive MIMO' (slide 33).",
          c: "This is 'Millimeter Wave (mmWave)' (slide 34).",
          d: "This is 'Device-Centric Architectures' (slide 33).",
        },
      },
    },
    {
      id: "chapter1-q28",
      text: "The wireless technology 'Massive MIMO' is defined as:",
      options: [
        {
          id: "a",
          text: "Using 10 to 100+ antennas to focus antenna beams.",
        },
        {
          id: "b",
          text: "Using many small transmitters (femtocells) to reuse frequencies.",
        },
        {
          id: "c",
          text: "Using frequencies in the 30-300 GHz range.",
        },
        {
          id: "d",
          text: "A service where information is tailored to a user's location.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Slide 33 defines 'Massive MIMO' as 'Uses 10 to 100+ antennas to focus antenna beams toward intended devices.'",
        incorrect: {
          b: "This is 'Network Densification' (slide 33).",
          c: "This is 'Millimeter Wave (mmWave)' (slide 34).",
          d: "This is 'Location-Based Services' (slide 32).",
        },
      },
    },
    {
      id: "chapter1-q29",
      text: "What is the frequency range for 'Millimeter Wave (mmWave)' communication?",
      options: [
        {
          id: "a",
          text: "2.4 - 5 GHz",
        },
        {
          id: "b",
          text: "30 - 300 GHz",
        },
        {
          id: "c",
          text: "800 - 1900 MHz",
        },
        {
          id: "d",
          text: "1 - 5 GHz",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Slide 34 explicitly defines 'Millimeter Wave (mmWave)' as 'Frequencies (30-300 GHz)'.",
        incorrect: {
          a: "This is the range for traditional Wi-Fi.",
          c: "This is a range for cellular (2G/3G/4G).",
          d: "Slide 36 mentions moving *from* 1-5 GHz.",
        },
      },
    },
    {
      id: "chapter1-q30",
      text: "What is 'Multipath Fading'?",
      options: [
        {
          id: "a",
          text: "Signal degradation caused by reflections arriving at different times.",
        },
        {
          id: "b",
          text: "A shift in frequency caused by the user's movement.",
        },
        {
          id: "c",
          text: "Interference from other users on the same channel.",
        },
        {
          id: "d",
          text: "A limitation on available spectrum by government agencies.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Slide 35 defines 'Multipath Fading' as 'Reflections cause multiple signal copies to arrive at different times/attenuations, leading to signal degradation.'",
        incorrect: {
          b: "This is 'Doppler shifting' (slide 35).",
          c: "This is 'interference' (slide 35).",
          d: "This is 'Spectrum Limitations' (slide 36).",
        },
      },
    },
    {
      id: "chapter1-q31",
      text: "What is 'Doppler shifting' in wireless communication?",
      options: [
        {
          id: "a",
          text: "Interference from other users.",
        },
        {
          id: "b",
          text: "A shift in frequency due to movement.",
        },
        {
          id: "c",
          text: "Signal degradation from reflections.",
        },
        {
          id: "d",
          text: "A technique to add error correction bits.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Slide 35 defines 'Doppler shifting' as being 'due to movement'.",
        incorrect: {
          a: "This is 'interference'.",
          c: "This is 'Multipath Fading'.",
          d: "This is 'Error Control Coding'.",
        },
      },
    },
    {
      id: "chapter1-q32",
      text: "Despite offering more bandwidth, what are the *disadvantages* of moving to higher frequencies (like mmWave)?",
      options: [
        {
          id: "a",
          text: "They require less power and are less affected by obstructions.",
        },
        {
          id: "b",
          text: "They offer less available bandwidth.",
        },
        {
          id: "c",
          text: "They require more transmission power and are harder to use effectively due to obstructions.",
        },
        {
          id: "d",
          text: "They can only be used for wired communications.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Slide 36 states that higher frequencies 'Require more transmission power and are harder to use effectively due to obstructions.'",
        incorrect: {
          a: "This is the opposite of the correct answer.",
          b: "This is incorrect; the slide states they 'Offer more available bandwidth.'",
          d: "This is nonsensical.",
        },
      },
    },
    {
      id: "chapter1-q33",
      text: "What is the purpose of 'Error Control Coding (Channel Coding)'?",
      options: [
        {
          id: "a",
          text: "To add bits for error detection and correction.",
        },
        {
          id: "b",
          text: "To dynamically adjust modulation based on channel conditions.",
        },
        {
          id: "c",
          text: "To counteract the effects of multipath fading.",
        },
        {
          id: "d",
          text: "To send the maximum number of bits possible.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Slide 37 defines 'Error Control Coding' as 'Adds bits for error detection and correction.'",
        incorrect: {
          b: "This is 'Adaptive Modulation and Coding' (slide 37).",
          c: "This is 'Equalization' (slide 38).",
          d: "This is 'Modulation' (slide 37).",
        },
      },
    },
    {
      id: "chapter1-q34",
      text: "Which mitigation technique 'Dynamically adjusts modulation/coding based on current channel measurements'?",
      options: [
        {
          id: "a",
          text: "Modulation",
        },
        {
          id: "b",
          text: "Error Control Coding",
        },
        {
          id: "c",
          text: "Adaptive Modulation and Coding",
        },
        {
          id: "d",
          text: "Equalization",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Slide 37 gives this exact definition for 'Adaptive Modulation and Coding'.",
        incorrect: {
          a: "'Modulation' itself is the process, not the adaptive part.",
          b: "'Error Control Coding' adds bits for error correction.",
          d: "'Equalization' counteracts multipath fading.",
        },
      },
    },
    {
      id: "chapter1-q35",
      text: "Which signal processing technique is specifically designed to 'counteract the effects of multipath fading'?",
      options: [
        {
          id: "a",
          text: "Equalization",
        },
        {
          id: "b",
          text: "MIMO",
        },
        {
          id: "c",
          text: "Modulation",
        },
        {
          id: "d",
          text: "Spread Spectrum",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Slide 38 explicitly states, 'Equalization: Counteracts the effects of multipath fading.'",
        incorrect: {
          b: "MIMO uses multiple antennas (slide 38).",
          c: "Modulation is the process of sending bits (slide 37).",
          d: "Spread Spectrum expands the signal over a wide bandwidth (slide 38).",
        },
      },
    },
    {
      id: "chapter1-q36",
      text: "What is 'MIMO' (Multiple-Input Multiple-Output)?",
      options: [
        {
          id: "a",
          text: "A technique that counteracts multipath fading.",
        },
        {
          id: "b",
          text: "A technique that uses multiple antennas to send parallel data streams or focus signals.",
        },
        {
          id: "c",
          text: "A technique that expands the signal over a wide bandwidth.",
        },
        {
          id: "d",
          text: "A technique that breaks a signal into many lower-rate streams.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Slide 38 defines MIMO as 'Uses multiple antennas to direct signals, send simultaneous signals, or parallel data streams.'",
        incorrect: {
          a: "This is 'Equalization' (slide 38).",
          c: "This is 'Spread Spectrum (DSSS)' (slide 38).",
          d: "This is 'OFDM' (slide 38).",
        },
      },
    },
    {
      id: "chapter1-q37",
      text: "Which mitigation technique 'Expands signal over a wide bandwidth to overcome localized problems'?",
      options: [
        {
          id: "a",
          text: "Equalization",
        },
        {
          id: "b",
          text: "MIMO",
        },
        {
          id: "c",
          text: "Spread Spectrum (DSSS)",
        },
        {
          id: "d",
          text: "OFDM",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Slide 38 gives this exact definition for 'Spread Spectrum (DSSS)'.",
        incorrect: {
          a: "This counteracts multipath fading.",
          b: "This uses multiple antennas.",
          d: "This breaks the signal into lower-rate streams.",
        },
      },
    },
    {
      id: "chapter1-q38",
      text: "What is 'Orthogonal Frequency Division Multiplexing (OFDM)'?",
      options: [
        {
          id: "a",
          text: "A technique that counteracts multipath fading by breaking a signal into many lower-rate streams.",
        },
        {
          id: "b",
          text: "A technique that uses multiple antennas to send parallel data streams.",
        },
        {
          id: "c",
          text: "A technique that adds bits for error detection and correction.",
        },
        {
          id: "d",
          text: "A technique that expands a signal over a very wide bandwidth using a code.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Slide 38 defines OFDM as: 'Breaks a signal into many lower rate streams, making it less susceptible to multipath issues.'",
        incorrect: {
          b: "This is 'MIMO' (slide 38).",
          c: "This is 'Error Control Coding' (slide 37).",
          d: "This is 'Spread Spectrum (DSSS)' (slide 38).",
        },
      },
    },
    {
      id: "chapter1-q39",
      text: "Which of the following is listed as a channel limitation caused by reflections?",
      options: [
        {
          id: "a",
          text: "Multipath Fading",
        },
        {
          id: "b",
          text: "Doppler Shifting",
        },
        {
          id: "c",
          text: "Spectrum Limitations",
        },
        {
          id: "d",
          text: "Noise",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Slide 35 defines 'Multipath Fading' as being caused by 'Reflections'.",
        incorrect: {
          b: "This is caused by 'movement' (slide 35).",
          c: "This is a regulatory limitation (slide 36).",
          d: "Noise is a general channel issue, not specifically from reflections.",
        },
      },
    },
    {
      id: "chapter1-q40",
      text: "What future trend focuses on a device's specific needs for interference reduction and throughput?",
      options: [
        {
          id: "a",
          text: "Network Densification",
        },
        {
          id: "b",
          text: "Device-Centric Architectures",
        },
        {
          id: "c",
          text: "Massive MIMO",
        },
        {
          id: "d",
          text: "Millimeter Wave (mmWave)",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Slide 33 lists 'Device-Centric Architectures' as a future trend that 'Focus on a device's needs for interference reduction, throughput, and quality.'",
        incorrect: {
          a: "This uses many small transmitters (slide 33).",
          c: "This uses 10-100+ antennas (slide 33).",
          d: "This refers to frequencies in the 30-300 GHz range (slide 34).",
        },
      },
    },
  ],
};
