import { Quiz } from "@/app/types/quiz";

export const wirelessTopic4: Quiz = {
  id: "wireless-topic-4",
  categoryId: "wireless",
  subcategoryId: "wireless-topic-4",
  title: "Wireless Mobile Networking - Topic 4",
  questions: [
    {
      id: "chapter4-q1",
      text: "A Metropolitan Area Network (MAN) is best described as a network that:",
      options: [
        {
          id: "a",
          text: "Connects devices within a single room or building (LAN)",
        },
        {
          id: "b",
          text: "Spans a large geographical area, like a country or continent (WAN)",
        },
        {
          id: "c",
          text: "Occupies a middle ground between LANs and WANs, covering a city area",
        },
        {
          id: "d",
          text: "Is used exclusively for personal mobile devices (PAN)",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "A MAN occupies a middle ground between LANs and WANs and is designed for a metropolitan area.",
        incorrect: {
          a: "This describes a Local Area Network (LAN), which is smaller than a MAN.",
          b: "This describes a Wide Area Network (WAN), which is larger than a MAN.",
          d: "This describes a Personal Area Network (PAN).",
        },
      },
    },
    {
      id: "chapter4-q2",
      text: "What is the most prominent and widely standardized technology for a Wireless MAN?",
      options: [
        {
          id: "a",
          text: "Wi-Fi (IEEE 802.11)",
        },
        {
          id: "b",
          text: "WiMAX (IEEE 802.16)",
        },
        {
          id: "c",
          text: "Bluetooth (IEEE 802.15)",
        },
        {
          id: "d",
          text: "LTE (3GPP)",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The most prominent and widely standardized MAN technology is WiMAX, based on the IEEE 802.16 standard.",
        incorrect: {
          a: "Wi-Fi is the standard for Wireless Local Area Networks (WLANs), not MANs.",
          c: "Bluetooth is a standard for Personal Area Networks (PANs).",
          d: "LTE is a standard for cellular mobile communications, which is a type of WAN.",
        },
      },
    },
    {
      id: "chapter4-q3",
      text: "Which amendment to the IEEE 802.16 standard introduced support for mobility (Mobile WiMAX)?",
      options: [
        {
          id: "a",
          text: "IEEE 802.16-2001",
        },
        {
          id: "b",
          text: "IEEE 802.16a (2003)",
        },
        {
          id: "c",
          text: "IEEE 802.16e (2005)",
        },
        {
          id: "d",
          text: "IEEE 802.11g (2003)",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "IEEE 802.16e (2005) is the amendment that introduced mobility, also known as Mobile WiMAX.",
        incorrect: {
          a: "IEEE 802.16-2001 was for fixed broadband wireless access in the 10-66 GHz range.",
          b: "IEEE 802.16a (2003) added NLOS support in the 2-11 GHz range but not full mobility.",
          d: "IEEE 802.11g is a Wi-Fi (WLAN) standard, not a WiMAX (WMAN) standard.",
        },
      },
    },
    {
      id: "chapter4-q4",
      text: "In the WiMAX Network Reference Model, which component is responsible for providing IP connectivity and services like authentication and internet access?",
      options: [
        {
          id: "a",
          text: "Access Service Network (ASN)",
        },
        {
          id: "b",
          text: "Connectivity Service Network (CSN)",
        },
        {
          id: "c",
          text: "Base Station (BS)",
        },
        {
          id: "d",
          text: "Subscriber Station (SS)",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The Connectivity Service Network (CSN) is the set of network functions that provide IP connectivity services, including internet access and authentication.",
        incorrect: {
          a: "The ASN is responsible for providing the radio access to WiMAX subscribers.",
          c: "The Base Station is part of the ASN and provides wireless connectivity.",
          d: "The Subscriber Station is the user's terminal.",
        },
      },
    },
    {
      id: "chapter4-q5",
      text: "The WiMAX MAC layer is divided into three sublayers. Which of the following is NOT one of those sublayers?",
      options: [
        {
          id: "a",
          text: "Service-Specific Convergence Sublayer (CS)",
        },
        {
          id: "b",
          text: "MAC Common Part Sublayer (CPS)",
        },
        {
          id: "c",
          text: "Security Sublayer",
        },
        {
          id: "d",
          text: "Physical Layer",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "The Physical Layer is a separate layer below the MAC layer in the protocol architecture. It is not a sublayer of the MAC layer.",
        incorrect: {
          a: "The Service-Specific Convergence Sublayer is the topmost sublayer of the MAC layer.",
          b: "The MAC Common Part Sublayer is the middle sublayer of the MAC layer.",
          c: "The Security Sublayer is the bottom sublayer of the MAC layer.",
        },
      },
    },
    {
      id: "chapter4-q6",
      text: "What is the primary function of the 'Service-Specific Convergence Sublayer' in the WiMAX protocol architecture?",
      options: [
        {
          id: "a",
          text: "To handle encryption and secure key exchange",
        },
        {
          id: "b",
          text: "To manage access to the wireless medium",
        },
        {
          id: "c",
          text: "To map upper-level data, like IP packets, into the 802.16 MAC format",
        },
        {
          id: "d",
          text: "To handle signal encoding and bit transmission",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "The Service-Specific Convergence Sublayer's function is to map upper-level data (like IP packets) into the 802.16 MAC format.",
        incorrect: {
          a: "This is the function of the Security Sublayer.",
          b: "This is the function of the MAC Common Part Sublayer.",
          d: "This is the function of the Physical Layer.",
        },
      },
    },
    {
      id: "chapter4-q7",
      text: "In WiMAX, what is a 'Service Flow'?",
      options: [
        {
          id: "a",
          text: "A physical cable connecting the BS to the CSN",
        },
        {
          id: "b",
          text: "A unidirectional flow of packets that has a specific set of QoS parameters",
        },
        {
          id: "c",
          text: "A security protocol for authenticating users",
        },
        {
          id: "d",
          text: "The process of a mobile station changing base stations",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "A Service Flow is a unidirectional flow of packets that has a specific set of QoS (Quality of Service) parameters.",
        incorrect: {
          a: "A Service Flow is a logical connection, not a physical cable.",
          c: "This describes an authentication mechanism, which is handled by the Security Sublayer or CSN.",
          d: "This describes a handover or mobility event.",
        },
      },
    },
    {
      id: "chapter4-q8",
      text: "Which component in the WiMAX Network Reference Model is a business entity that provides the WiMAX radio access infrastructure?",
      options: [
        {
          id: "a",
          text: "Network Service Provider (NSP)",
        },
        {
          id: "b",
          text: "Network Access Provider (NAP)",
        },
        {
          id: "c",
          text: "Connectivity Service Network (CSN)",
        },
        {
          id: "d",
          text: "ASN Gateway",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The Network Access Provider (NAP) is defined as the business entity that provides the WiMAX radio access infrastructure.",
        incorrect: {
          a: "The NSP is a business entity that provides IP connectivity and WiMAX services *to subscribers*.",
          c: "The CSN is a set of network functions, not a business entity in this context.",
          d: "The ASN Gateway is a functional component that connects an ASN to an NSP.",
        },
      },
    },
    {
      id: "chapter4-q9",
      text: "What is the primary role of the MAC Common Part Sublayer (CPS)?",
      options: [
        {
          id: "a",
          text: "To handle authentication and encryption",
        },
        {
          id: "b",
          text: "To map IP packets to MAC formats",
        },
        {
          id: "c",
          text: "To govern access to the wireless medium and manage connections",
        },
        {
          id: "d",
          text: "To encode and decode signals for transmission",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "The MAC Common Part Sublayer (CPS) is the core of the MAC layer and governs access to the wireless medium and manages the connection-oriented service.",
        incorrect: {
          a: "This is the role of the Security Sublayer.",
          b: "This is the role of the Service-Specific Convergence Sublayer.",
          d: "This is the role of the Physical Layer.",
        },
      },
    },
    {
      id: "chapter4-q10",
      text: "Which component of the WiMAX PDU is optional and used to detect errors in the header and payload?",
      options: [
        {
          id: "a",
          text: "Header",
        },
        {
          id: "b",
          text: "Payload",
        },
        {
          id: "c",
          text: "CRC (Cyclic Redundancy Check)",
        },
        {
          id: "d",
          text: "Connection Identifier",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "The CRC field is optional and contains an error-detecting code that covers both the header and the payload.",
        incorrect: {
          a: "The header is a mandatory part of the PDU.",
          b: "The payload is optional, but it is the data, not the error-checking code.",
          d: "The Connection Identifier is part of the header, not a separate optional field at the end.",
        },
      },
    },
    {
      id: "chapter4-q11",
      text: "In the Generic MAC Header, what is the purpose of the 16-bit 'Connection Identifier' (CID)?",
      options: [
        {
          id: "a",
          text: "To indicate the physical location of the subscriber station",
        },
        {
          id: "D",
          text: "To specify the encryption algorithm being used",
        },
        {
          id: "c",
          text: "To identify a unidirectional, MAC-layer connection",
        },
        {
          id: "d",
          text: "To count the number of fragments in a PDU",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "The Connection Identifier (16 bits) is a unidirectional, MAC-layer address that identifies a connection.",
        incorrect: {
          a: "The CID is a logical identifier, not a physical location.",
          b: "The encryption key sequence (EKS) field relates to encryption keys, not the CID.",
          d: "Fragmentation is handled by subheaders, indicated by the 'Type' field.",
        },
      },
    },
    {
      id: "chapter4-q12",
      text: "What does the 'Header type' bit (set to zero) in the Generic MAC Header indicate?",
      options: [
        {
          id: "a",
          text: "That the header is a Bandwidth Request Header",
        },
        {
          id: "b",
          text: "That the header is a Generic MAC PDU header",
        },
        {
          id: "c",
          text: "That the payload is encrypted",
        },
        {
          id: "d",
          text: "That there is a CRC error",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The 'Header type' bit being set to zero indicates the header type is a generic MAC PDU.",
        incorrect: {
          a: "A Bandwidth Request Header would have a different header type identifier (implicitly, 1).",
          c: "Payload encryption is indicated by the 'Encryption control' bit.",
          d: "A CRC error is detected using the HCS or CRC fields, not indicated by the header type bit.",
        },
      },
    },
    {
      id: "chapter4-q13",
      text: "What is the purpose of the 'Packing' subheader indicated by the 'Type' field?",
      options: [
        {
          id: "a",
          text: "To divide a large data block into smaller fragments",
        },
        {
          id: "b",
          text: "To combine multiple MAC SDUs into a single MAC PDU payload",
        },
        {
          id: "c",
          text: "To request additional bandwidth from the base station",
        },
        {
          id: "d",
          text: "To request feedback from an advanced antenna system",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The 'Packing subheader' is defined as being used for the process where multiple MAC SDUs are packed into a single MAC PDU payload.",
        incorrect: {
          a: "This is the purpose of the 'Fragmentation subheader'.",
          c: "This is done using the 'Bandwidth Request Header' or 'Grant management subheader'.",
          d: "This is the purpose of the 'Fast feedback allocation subheader'.",
        },
      },
    },
    {
      id: "chapter4-q14",
      text: "Which MAC subheader is used only in the uplink direction to convey information about bandwidth management?",
      options: [
        {
          id: "a",
          text: "Fast feedback allocation subheader",
        },
        {
          id: "b",
          text: "Packing subheader",
        },
        {
          id: "c",
          text: "Grant management subheader",
        },
        {
          id: "d",
          text: "Fragmentation subheader",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "The 'Grant management subheader' is used only in the uplink direction and conveys information related to bandwidth management.",
        incorrect: {
          a: "The 'Fast feedback allocation subheader' is used only in the downlink direction.",
          b: "The 'Packing subheader' can be used in general, its direction is not restricted.",
          d: "The 'Fragmentation subheader' can be used in general, its direction is not restricted.",
        },
      },
    },
    {
      id: "chapter4-q15",
      text: "What is the purpose of the 'Bandwidth Request Header'?",
      options: [
        {
          id: "a",
          text: "To carry user data payload",
        },
        {
          id: "b",
          text: "To be used by a subscriber to request additional bandwidth",
        },
        {
          id: "c",
          text: "To establish an initial connection with the base station",
        },
        {
          id: "d",
          text: "To encrypt the payload of a MAC PDU",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The 'Bandwidth Request Header' is used by the subscriber to request additional bandwidth.",
        incorrect: {
          a: "This header is for a MAC frame with *no* payload.",
          c: "Initial connection setup involves more complex procedures, not just this header.",
          d: "Encryption is handled by the Security Sublayer and indicated by bits in the Generic MAC Header.",
        },
      },
    },
    {
      id: "chapter4-q16",
      text: "WiMAX supports operation in which frequency bands?",
      options: [
        {
          id: "a",
          text: "Only the 2.4 GHz band",
        },
        {
          id: "b",
          text: "Only the 5 GHz band",
        },
        {
          id: "c",
          text: "Licensed and unlicensed bands (2-11 GHz and 10-66 GHz)",
        },
        {
          id: "d",
          text: "Only the 60 GHz band",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "WiMAX operates in licensed and unlicensed frequency bands, specifically 2-11 GHz and 10-66 GHz.",
        incorrect: {
          a: "The 2.4 GHz band is commonly used by Wi-Fi and Bluetooth.",
          b: "The 5 GHz band is also commonly used by Wi-Fi.",
          d: "The 60 GHz band is used for other technologies like WiGig.",
        },
      },
    },
    {
      id: "chapter4-q17",
      text: "What does 'NLOS' operation mean in the context of WiMAX?",
      options: [
        {
          id: "a",
          text: "No Line-of-Sight",
        },
        {
          id: "b",
          text: "Near Line-of-Sight",
        },
        {
          id: "c",
          text: "Networked Line-of-Sight",
        },
        {
          id: "d",
          text: "New Line-of-Sight",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "WiMAX supports Non-Line-of-Sight (NLOS) operation, meaning it can function even when there is no direct, unobstructed visual path between the transmitter and receiver.",
        incorrect: {
          b: "This is not a standard term in this context.",
          c: "This is not a standard term in this context.",
          d: "This is not a standard term in this context.",
        },
      },
    },
    {
      id: "chapter4-q18",
      text: "Which component in the WiMAX Network Reference Model is the user's fixed or mobile terminal?",
      options: [
        {
          id: "a",
          text: "Base Station (BS)",
        },
        {
          id: "b",
          text: "ASN Gateway",
        },
        {
          id: "c",
          text: "Subscriber Station (SS)",
        },
        {
          id: "d",
          text: "CSN Server",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "The Subscriber Station (SS) is defined as the user's fixed or mobile terminal.",
        incorrect: {
          a: "The Base Station (BS) provides wireless connectivity to subscribers.",
          b: "The ASN Gateway connects the ASN to the NSP.",
          d: "The CSN Server is part of the Connectivity Service Network.",
        },
      },
    },
    {
      id: "chapter4-q19",
      text: "What is the function of the Security Sublayer in the WiMAX MAC layer?",
      options: [
        {
          id: "a",
          text: "To handle signal encoding and decoding",
        },
        {
          id: "b",
          text: "To manage QoS parameters for a service flow",
        },
        {
          id: "c",
          text: "To assemble data into MAC PDUs",
        },
        {
          id: "d",
          text: "To handle authentication, secure key exchange, and encryption",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "The Security Sublayer handles authentication, secure key exchange, and encryption for the wireless link.",
        incorrect: {
          a: "This is the function of the Physical Layer.",
          b: "This is related to the Service-Specific Convergence Sublayer (mapping QoS) and MAC CPS (managing connections).",
          c: "This is a function of the MAC Common Part Sublayer.",
        },
      },
    },
    {
      id: "chapter4-q20",
      text: "What are the three sections of a WiMAX MAC PDU?",
      options: [
        {
          id: "a",
          text: "Header, Payload, and CRC",
        },
        {
          id: "b",
          text: "IP Address, Port Number, and Data",
        },
        {
          id: "c",
          text: "Preamble, Data, and Postamble",
        },
        {
          id: "d",
          text: "Source MAC, Destination MAC, and Payload",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct: "The PDU consists of 3 sections: Header, Payload, and CRC.",
        incorrect: {
          b: "This describes components of a TCP/UDP segment.",
          c: "This describes components of a physical layer frame.",
          d: "This describes components of an Ethernet (IEEE 802.3) frame.",
        },
      },
    },
    {
      id: "chapter4-q21",
      text: "In the Generic MAC Header, what is the 'PDU length' field used for?",
      options: [
        {
          id: "a",
          text: "To indicate the length of the header in bytes",
        },
        {
          id: "b",
          text: "To indicate the length of the payload in bytes",
        },
        {
          id: "c",
          text: "To indicate the length of the entire MAC PDU in bytes",
        },
        {
          id: "d",
          text: "To indicate the number of PDUs remaining",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "The 'PDU length' (11 bits) field indicates the length in bytes of the *entire* MAC PDU.",
        incorrect: {
          a: "The header has a fixed size (48 bits or 6 bytes).",
          b: "It specifies the length of the entire PDU, not just the payload.",
          d: "This is not the function of the PDU length field.",
        },
      },
    },
    {
      id: "chapter4-q22",
      text: "What is the purpose of the 8-bit 'Header Check Sequence' (HCS) in the Generic MAC Header?",
      options: [
        {
          id: "a",
          text: "To encrypt the header",
        },
        {
          id: "b",
          text: "To detect errors in the header",
        },
        {
          id: "c",
          text: "To detect errors in the payload",
        },
        {
          id: "d",
          text: "To identify the connection",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The 'Header check sequence' (8 bits) is an 8-bit CRC used to detect errors *in the header*.",
        incorrect: {
          a: "Encryption is handled by the Security Sublayer and indicated by other fields.",
          c: "The optional 32-bit CRC at the end of the PDU detects errors in the payload.",
          d: "The Connection Identifier (CID) is used to identify the connection.",
        },
      },
    },
    {
      id: "chapter4-q23",
      text: "What is 'Fragmentation' in the context of the WiMAX MAC layer?",
      options: [
        {
          id: "a",
          text: "Combining multiple small packets into one large packet",
        },
        {
          id: "b",
          text: "Dividing a higher-level data block (SDU) into two or more fragments",
        },
        {
          id: "c",
          text: "Requesting a fragment of bandwidth",
        },
        {
          id: "d",
          text: "A type of security attack",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The 'Fragmentation subheader' is used to divide a higher-level block of data (SDU) into two or more fragments.",
        incorrect: {
          a: "This is 'Packing'.",
          c: "Bandwidth requests are handled by specific headers/subheaders.",
          d: "While fragmentation can be used in attacks, in this context, it is a standard protocol function.",
        },
      },
    },
    {
      id: "chapter4-q24",
      text: "Which subheader is used only in the downlink direction to request feedback from an SS with an advanced antenna system?",
      options: [
        {
          id: "a",
          text: "Grant management subheader",
        },
        {
          id: "b",
          text: "Packing subheader",
        },
        {
          id: "c",
          text: "Fast feedback allocation subheader",
        },
        {
          id: "d",
          text: "Fragmentation subheader",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "The 'Fast feedback allocation subheader' is only used in the downlink direction and requests feedback from an SS with an advanced antenna system.",
        incorrect: {
          a: "The 'Grant management subheader' is used only in the uplink direction.",
          b: "The 'Packing subheader' is not restricted to the downlink or for this purpose.",
          d: "The 'Fragmentation subheader' is not restricted to the downlink or for this purpose.",
        },
      },
    },
    {
      id: "chapter4-q25",
      text: "What is the size of the 'Bandwidth request' field in the Bandwidth Request Header?",
      options: [
        {
          id: "a",
          text: "1 bit",
        },
        {
          id: "b",
          text: "8 bits",
        },
        {
          id: "c",
          text: "16 bits",
        },
        {
          id: "d",
          text: "19 bits",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "The format of the Bandwidth Request Header indicates that the 'Bandwidth request' field is 19 bits long.",
        incorrect: {
          a: "Multiple fields are 1 bit, but not this one.",
          b: "The HCS field is 8 bits.",
          c: "The Connection Identifier is 16 bits.",
        },
      },
    },
    {
      id: "chapter4-q26",
      text: "What is the primary difference between a MAN and a LAN?",
      options: [
        {
          id: "a",
          text: "MANs are exclusively wireless, while LANs are exclusively wired.",
        },
        {
          id: "b",
          text: "MANs cover a larger geographical area (like a city) than LANs (like a building).",
        },
        {
          id: "c",
          text: "MANs are slower and have lower data rates than LANs.",
        },
        {
          id: "d",
          text: "MANs are only for businesses, while LANs are for home users.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "A MAN occupies a middle ground between LANs and WANs and covers a metropolitan area, which is larger than the area covered by a LAN (e.g., a building).",
        incorrect: {
          a: "Both LANs and MANs can be wired or wireless (e.g., WLAN and WMAN).",
          c: "MANs provide high-capacity connectivity and often have higher data rates than WLANs.",
          d: "Both MANs and LANs are used by businesses and other users.",
        },
      },
    },
    {
      id: "chapter4-q27",
      text: "WiMAX is an alternative to which type of wired 'last mile' broadband access?",
      options: [
        {
          id: "a",
          text: "Infrared (IrDA)",
        },
        {
          id: "b",
          text: "Dial-up modem",
        },
        {
          id: "c",
          text: "DSL, cable, or fiber",
        },
        {
          id: "d",
          text: "Ethernet",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "WiMAX offers a cost-effective alternative to wired systems like DSL, cable, or fiber for providing 'last mile' access.",
        incorrect: {
          a: "Infrared is a very short-range wireless technology.",
          b: "Dial-up is a much older, slower technology, not considered 'broadband'.",
          d: "Ethernet is typically used within a LAN, not for 'last mile' access.",
        },
      },
    },
    {
      id: "chapter4-q28",
      text: "Which industry alliance is responsible for the interoperability and certification of WiMAX products?",
      options: [
        {
          id: "a",
          text: "IEEE (Institute of Electrical and Electronics Engineers)",
        },
        {
          id: "b",
          text: "Wi-Fi Alliance",
        },
        {
          id: "c",
          text: "WiMAX Forum",
        },
        {
          id: "d",
          text: "3GPP (3rd Generation Partnership Project)",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "The WiMAX Forum is the industry alliance for interoperability and certification.",
        incorrect: {
          a: "The IEEE creates the 802.16 *standard*, but the WiMAX Forum handles certification and interoperability.",
          b: "The Wi-Fi Alliance handles certification for Wi-Fi (802.11) products.",
          d: "3GPP is the standards body for cellular technologies like LTE and 5G.",
        },
      },
    },
    {
      id: "chapter4-q29",
      text: "In the WiMAX Network Reference Model, what does the ASN Gateway connect?",
      options: [
        {
          id: "a",
          text: "A Subscriber Station (SS) to a Base Station (BS)",
        },
        {
          id: "b",
          text: "A Base Station (BS) to another Base Station (BS)",
        },
        {
          id: "c",
          text: "An Access Service Network (ASN) to a Network Service Provider (NSP)",
        },
        {
          id: "d",
          text: "A Connectivity Service Network (CSN) to the Internet",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct: "The ASN Gateway provides connectivity from an ASN to an NSP.",
        incorrect: {
          a: "The SS connects to the BS via the radio air interface.",
          b: "Base stations connect to an ASN gateway.",
          d: "The CSN provides connectivity *to* the internet.",
        },
      },
    },
    {
      id: "chapter4-q30",
      text: "The WiMAX protocol architecture (IEEE 802.16) defines the air interface between which two components?",
      options: [
        {
          id: "a",
          text: "The Subscriber Station (SS) and the Base Station (BS)",
        },
        {
          id: "b",
          text: "The Base Station (BS) and the ASN Gateway",
        },
        {
          id: "c",
          text: "The ASN Gateway and the CSN Server",
        },
        {
          id: "d",
          text: "The CSN Server and the Internet",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "The IEEE 802.16 standard defines the air interface between the Subscriber Station (SS) and the Base Station (BS).",
        incorrect: {
          b: "This interface is part of the ASN, often a wired backhaul connection.",
          c: "This is the interface between the ASN and CSN.",
          d: "This is the interface for the CSN to the public internet.",
        },
      },
    },
    {
      id: "chapter4-q31",
      text: "What is a key characteristic of the WiMAX MAC layer?",
      options: [
        {
          id: "a",
          text: "It is connectionless, like Ethernet.",
        },
        {
          id: "b",
          text: "It is connection-oriented.",
        },
        {
          id: "c",
          text: "It only has one layer.",
        },
        {
          id: "d",
          text: "It does not support security.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The MAC layer is connection-oriented. This is reinforced by the connection-oriented nature of Service Flows.",
        incorrect: {
          a: "It is explicitly connection-oriented, not connectionless.",
          c: "It is divided into three sublayers.",
          d: "It has a dedicated Security Sublayer.",
        },
      },
    },
    {
      id: "chapter4-q32",
      text: "Which of the following is an example of a QoS parameter for a WiMAX Service Flow?",
      options: [
        {
          id: "a",
          text: "Subscriber's name",
        },
        {
          id: "b",
          text: "IP address",
        },
        {
          id: "c",
          text: "Latency (maximum acceptable delay)",
        },
        {
          id: "d",
          text: "Signal strength",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Examples of Service Flow parameters include Latency, Jitter, and Throughput.",
        incorrect: {
          a: "The subscriber's name is user information, not a QoS parameter.",
          b: "An IP address is for identification/routing, not a QoS parameter itself.",
          d: "Signal strength is a physical layer metric, not a QoS parameter for a logical service flow.",
        },
      },
    },
    {
      id: "chapter4-q33",
      text: "In the WiMAX PDU, what is the 'Payload' section used for?",
      options: [
        {
          id: "a",
          text: "To detect errors in the header",
        },
        {
          id: "b",
          text: "To carry higher-level data (like an IP packet) or a MAC control message",
        },
        {
          id: "c",
          text: "To identify the connection",
        },
        {
          id: "d",
          text: "To request more bandwidth",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The payload may be either higher-level data (e.g., an IP packet) or a MAC control message.",
        incorrect: {
          a: "This is the function of the Header Check Sequence (HCS).",
          c: "This is the function of the Connection Identifier (CID) in the header.",
          d: "This is done using a specific header (Bandwidth Request Header) which has no payload.",
        },
      },
    },
    {
      id: "chapter4-q34",
      text: "What are the two types of MAC headers defined in the presentation?",
      options: [
        {
          id: "a",
          text: "TCP Header and UDP Header",
        },
        {
          id: "b",
          text: "Generic MAC header and Bandwidth Request header",
        },
        {
          id: "c",
          text: "Fragmentation header and Packing header",
        },
        {
          id: "d",
          text: "Uplink header and Downlink header",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The two types of header defined are: Generic MAC header and Bandwidth request header.",
        incorrect: {
          a: "TCP and UDP are transport layer protocols, not WiMAX MAC headers.",
          c: "Fragmentation and Packing are subheaders, not the main header types.",
          d: "While some subheaders are direction-specific, these are not the two main header types.",
        },
      },
    },
    {
      id: "chapter4-q35",
      text: "What does the 'Encryption control' (EC) bit in the Generic MAC Header indicate?",
      options: [
        {
          id: "a",
          text: "Whether the header is encrypted",
        },
        {
          id: "b",
          text: "Whether the payload is encrypted",
        },
        {
          id: "c",
          text: "The type of encryption algorithm used",
        },
        {
          id: "d",
          text: "A control signal for the encryption key sequence",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The 'Encryption control' (1 bit) indicates whether the *payload* is encrypted.",
        incorrect: {
          a: "The header itself is generally not encrypted in this manner; it contains control information.",
          c: "This is not indicated by a single bit; the algorithm is established by the Security Sublayer.",
          d: "The Encryption Key Sequence (EKS) is a separate field.",
        },
      },
    },
    {
      id: "chapter4-q36",
      text: "If multiple MAC SDUs are combined into a single MAC PDU, which subheader is used?",
      options: [
        {
          id: "a",
          text: "Fragmentation subheader",
        },
        {
          id: "b",
          text: "Grant management subheader",
        },
        {
          id: "c",
          text: "Fast feedback allocation subheader",
        },
        {
          id: "d",
          text: "Packing subheader",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "The 'Packing subheader' is used for the process in which multiple MAC SDUs are packed into a single MAC PDU payload.",
        incorrect: {
          a: "Fragmentation is the opposite: splitting one SDU into multiple fragments.",
          b: "This is for bandwidth management in the uplink.",
          c: "This is for antenna feedback in the downlink.",
        },
      },
    },
    {
      id: "chapter4-q37",
      text: "What is the purpose of the 'Type' field in the Generic MAC Header?",
      options: [
        {
          id: "a",
          text: "To indicate if the header is generic or a bandwidth request",
        },
        {
          id: "b",
          text: "To indicate the subheaders and special payload types present",
        },
        {
          id: "c",
          text: "To specify the Quality of Service (QoS) type",
        },
        {
          id: "d",
          text: "To check for errors in the header",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The 'Type' (6 bits) field indicates the subheaders and special payload types present in the message payload.",
        incorrect: {
          a: "This is indicated by the 'Header type' bit.",
          c: "QoS is managed via Service Flows, not directly by this 'Type' field.",
          d: "This is the purpose of the 'Header Check Sequence' (HCS).",
        },
      },
    },
    {
      id: "chapter4-q38",
      text: "The 'Bandwidth Request Header' is used in which direction?",
      options: [
        {
          id: "a",
          text: "Downlink (BS to SS)",
        },
        {
          id: "b",
          text: "Uplink (SS to BS)",
        },
        {
          id: "c",
          text: "Both Uplink and Downlink",
        },
        {
          id: "d",
          text: "Peer-to-peer (SS to SS)",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "This header is 'used by the subscriber to request additional bandwidth'. Since the subscriber (SS) requests from the base station (BS), this is an uplink transmission.",
        incorrect: {
          a: "The BS grants bandwidth (downlink), it does not request it in this manner.",
          c: "It is specific to the uplink direction for requests.",
          d: "This communication is between the SS and the BS.",
        },
      },
    },
    {
      id: "chapter4-q39",
      text: "A WiMAX logical connection, identified by a 16-bit CID, is...",
      options: [
        {
          id: "a",
          text: "Unidirectional",
        },
        {
          id: "b",
          text: "Bidirectional",
        },
        {
          id: "c",
          text: "Multidirectional",
        },
        {
          id: "d",
          text: "Connectionless",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "A Service Flow is defined as a *unidirectional* flow. The Connection Identifier (CID) is a *unidirectional* MAC-layer address.",
        incorrect: {
          b: "A bidirectional service would require two separate CIDs (one for uplink, one for downlink).",
          c: "This is not a standard term for this context.",
          d: "The WiMAX MAC layer is explicitly connection-oriented.",
        },
      },
    },
    {
      id: "chapter4-q40",
      text: "What is the primary function of the Physical Layer (PHY) in WiMAX?",
      options: [
        {
          id: "a",
          text: "To manage user authentication",
        },
        {
          id: "b",
          text: "To handle signal encoding/decoding and bit transmission",
        },
        {
          id: "c",
          text: "To map IP packets into the MAC format",
        },
        {
          id: "d",
          text: "To manage access to the wireless medium",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The Physical Layer (PHY) handles signal encoding/decoding, bit transmission, and frequency allocation.",
        incorrect: {
          a: "This is a function of the Security Sublayer and CSN.",
          c: "This is the function of the Service-Specific Convergence Sublayer.",
          d: "This is the function of the MAC Common Part Sublayer.",
        },
      },
    },
  ],
};
