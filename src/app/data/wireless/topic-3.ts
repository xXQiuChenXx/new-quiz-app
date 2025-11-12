import { Quiz } from "@/app/types/quiz";

export const wirelessTopic3: Quiz = {
  id: "wireless-topic-3",
  categoryId: "wireless",
  subcategoryId: "wireless-topic-3",
  title: "Wireless Mobile Networking - Topic 3",
  questions: [
    {
      id: "chapter3-q1",
      text: "What is the definition of a 'handoff' in a cellular network?",
      options: [
        {
          id: "a",
          text: "Initiating a new call when moving into a new cell.",
        },
        {
          id: "b",
          text: "The process of transferring an ongoing call from one base station to another while the call is in progress.",
        },
        {
          id: "c",
          text: "Dropping a call when the signal is too weak.",
        },
        {
          id: "d",
          text: "Connecting to two base stations simultaneously to improve quality.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "A handoff (or handover) is specifically the seamless transfer of an active call or data session from one cell (and its base station) to another to maintain connectivity as the user moves (slide 29).",
        incorrect: {
          a: "This describes initiating a new call, not transferring an existing one.",
          c: "This is a 'dropped call', which handoffs are designed to prevent.",
          d: "This describes a 'soft handoff' (common in 3G), but the general definition is the transfer process itself.",
        },
      },
    },
    {
      id: "chapter3-q2",
      text: "In which handoff detection strategy does the mobile device itself continuously monitor surrounding signals and make the handoff decision?",
      options: [
        {
          id: "a",
          text: "Network Controlled Handoff (NCH)",
        },
        {
          id: "b",
          text: "Mobile Assisted Handoff (MAH)",
        },
        {
          id: "c",
          text: "Mobile Controlled Handoff (MCH)",
        },
        {
          id: "d",
          text: "Base Station Controlled Handoff (BCH)",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "In Mobile Controlled Handoff (MCH), the mobile device is responsible for monitoring signals and deciding when to handoff (slide 35).",
        incorrect: {
          a: "In NCH, the network (base stations or MTSO) monitors the signal and makes the decision.",
          b: "In MAH, the mobile *assists* by measuring signals, but the *network* makes the final decision.",
          d: "BCH is not a standard term used in this context; control is either by the network (NCH) or the mobile (MCH/MAH).",
        },
      },
    },
    {
      id: "chapter3-q3",
      text: "The 'Guard Channel Concept' is a strategy for prioritizing handoffs. What is its main disadvantage?",
      options: [
        {
          id: "a",
          text: "It increases the probability of dropping new calls.",
        },
        {
          id: "b",
          text: "It is complex to implement.",
        },
        {
          id: "c",
          text: "It reduces the total carried traffic.",
        },
        {
          id: "d",
          text: "It only works for low-speed users.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "By reserving channels exclusively for handoffs, those channels are not available for new calls, which reduces the overall traffic capacity of the cell (slide 36).",
        incorrect: {
          a: "It *decreases* the probability of dropping *handoff* calls, but its disadvantage is that fewer channels are available for *new* calls, reducing total traffic.",
          b: "It's a relatively simple concept compared to dynamic queuing strategies.",
          d: "This strategy is not limited by user speed.",
        },
      },
    },
    {
      id: "chapter3-q4",
      text: "'Cell dragging' is a handoff-related issue that typically occurs with...",
      options: [
        {
          id: "a",
          text: "high-speed users on a highway.",
        },
        {
          id: "b",
          text: "users in a dense urban area with many buildings.",
        },
        {
          id: "c",
          text: "low-speed pedestrian users with a strong signal.",
        },
        {
          id: "d",
          text: "users who are stationary and not moving.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Cell dragging happens when a low-speed user (like a pedestrian) maintains a strong line-of-sight (LOS) signal to a base station even after moving out of its primary coverage area, 'dragging' the connection (slide 38).",
        incorrect: {
          a: "High-speed users are associated with the 'Umbrella Cell' solution, not the 'cell dragging' problem.",
          b: "Dense urban areas often cause signals to fade *quickly*, leading to more frequent handoffs, not cell dragging.",
          d: "Stationary users do not require handoffs, so cell dragging is not an issue.",
        },
      },
    },
    {
      id: "chapter3-q5",
      text: "Which of the three pillars of 5G focuses on providing high data rates and broad coverage?",
      options: [
        {
          id: "a",
          text: "Enhanced Mobile Broadband",
        },
        {
          id: "b",
          text: "Massive Machine-Type Communications",
        },
        {
          id: "c",
          text: "Ultra-Reliable Low-Latency Communications",
        },
        {
          id: "d",
          text: "High-Speed Mobility Connectivity",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Enhanced Mobile Broadband (eMBB) is the pillar of 5G focused on improving data rates for streaming, browsing, and broad coverage (slide 43).",
        incorrect: {
          b: "Massive Machine-Type Communications (mMTC) focuses on connecting a very high density of low-power devices (IoT).",
          c: "Ultra-Reliable Low-Latency Communications (URLLC) focuses on near-instantaneous, highly reliable connections for critical applications.",
          d: "While 5G supports high-speed mobility, it's a KPI (Key Performance Indicator), not one of the three main pillars.",
        },
      },
    },
    {
      id: "chapter3-q6",
      text: "How does 5G achieve its extremely high data rates, like the 20 Gbit/s peak?",
      options: [
        {
          id: "a",
          text: "By using analog signals instead of digital.",
        },
        {
          id: "b",
          text: "By decreasing the number of base stations.",
        },
        {
          id: "c",
          text: "By employing a large number of antennas (beamforming).",
        },
        {
          id: "d",
          text: "By limiting connections to voice-only.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "5G uses 'Massive MIMO' (a large number of antennas) to create focused beams (beamforming), allowing it to serve multiple users simultaneously and use high-frequency bands effectively (slide 46).",
        incorrect: {
          a: "5G is a digital technology; analog was used in 1G.",
          b: "5G generally requires *more* base stations (especially small cells) to use high-frequency bands.",
          d: "5G is designed primarily for data; 1G/2G were focused on voice.",
        },
      },
    },
    {
      id: "chapter3-q7",
      text: "What is the fundamental idea behind the 'cellular design' in mobile networking?",
      options: [
        {
          id: "a",
          text: "Using a single, high-power transmitter to cover an entire city.",
        },
        {
          id: "b",
          text: "Replacing a single high-power transmitter with many low-power transmitters.",
        },
        {
          id: "c",
          text: "Assigning a unique frequency to every user in the network.",
        },
        {
          id: "d",
          text: "Using satellites to relay all mobile phone calls.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The cellular concept is a system-level idea that replaces one high-power transmitter with many low-power transmitters (base stations), each covering a small area (a 'cell') (slide 4).",
        incorrect: {
          a: "This is what cellular design *replaces*. A single high-power transmitter has limited capacity.",
          c: "This is not feasible as it would require an enormous amount of spectrum. Cellular design *reuses* frequencies.",
          d: "This describes a satellite phone system, not a terrestrial cellular network.",
        },
      },
    },
    {
      id: "chapter3-q8",
      text: "Why is the hexagon commonly used to model cells in cellular network diagrams?",
      options: [
        {
          id: "a",
          text: "It is the only shape that can be used.",
        },
        {
          id: "b",
          text: "It perfectly represents the actual radio coverage of a base station.",
        },
        {
          id: "c",
          text: "It covers a region without overlap, and the center is equidistant to all edges.",
        },
        {
          id: "d",
          text: "It allows for the maximum number of users in a single cell.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "The hexagon is used as a model because it neatly tiles an entire region without any gaps or overlap (unlike circles) and provides equal distances from the center to its sides, simplifying analysis (slide 7).",
        incorrect: {
          a: "Other shapes like squares or triangles could be used, but hexagons are preferred (slide 6).",
          b: "Actual cell coverage is irregular and depends on the environment (slide 5). The hexagon is just a model.",
          d: "The number of users is related to channel allocation, not the geometric shape used for modeling.",
        },
      },
    },
    {
      id: "chapter3-q9",
      text: "In a cellular system, how are radio channels typically assigned to neighboring base stations?",
      options: [
        {
          id: "a",
          text: "They are assigned the exact same group of channels.",
        },
        {
          id: "b",
          text: "They are assigned different groups of channels.",
        },
        {
          id: "c",
          text: "They dynamically borrow channels from each other.",
        },
        {
          id: "d",
          text: "They do not use radio channels; they use fiber optics.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Neighboring base stations are assigned different groups of channels to minimize interference between them (slide 8).",
        incorrect: {
          a: "Assigning the same channels would cause severe interference (co-channel interference).",
          c: "While dynamic channel assignment exists, the fundamental principle is to use *different* groups for *adjacent* cells.",
          d: "Fiber optics connect base stations to the core network, but radio channels are used to connect to the mobile device.",
        },
      },
    },
    {
      id: "chapter3-q10",
      text: "What are 'co-channel' cells?",
      options: [
        {
          id: "a",
          text: "Cells that are immediately adjacent to each other.",
        },
        {
          id: "b",
          text: "Cells that use the same group of frequencies.",
        },
        {
          id: "c",
          text: "Cells that are part of a different network operator.",
        },
        {
          id: "d",
          text: "Cells that have no channels assigned to them.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Co-channel cells are cells that use the same set of frequencies. They are separated by a 'reuse distance' to keep interference tolerable (slide 13).",
        incorrect: {
          a: "Adjacent cells are assigned *different* frequencies to avoid interference.",
          c: "This describes a different operator's network, not co-channel cells within the same system.",
          d: "All active cells have channels assigned.",
        },
      },
    },
    {
      id: "chapter3-q11",
      text: "What does a 'cluster' represent in cellular design?",
      options: [
        {
          id: "a",
          text: "A single base station tower.",
        },
        {
          id: "b",
          text: "A group of cells where each cell uses the same frequency.",
        },
        {
          id: "c",
          text: "A group of cells (N) that, as a whole, uses the complete set of available frequencies.",
        },
        {
          id: "d",
          text: "The total number of users in a city.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "A cluster is a group of N cells where each cell has a unique set of frequencies, and the entire set of system frequencies is used within the cluster. This cluster pattern is then repeated (slide 9, 13).",
        incorrect: {
          b: "Cells *within* a cluster use *different* frequencies. Cells that use the same frequency are 'co-channel cells'.",
          a: "A cluster is made up of multiple base stations (cells).",
          d: "A cluster is a unit of network planning, not a measure of total users.",
        },
      },
    },
    {
      id: "chapter3-q12",
      text: "Slide 12 describes a rule: 'move i cells... turn 60 degrees... move j cells'. What is this rule used for?",
      options: [
        {
          id: "a",
          text: "To calculate the signal strength in a cell.",
        },
        {
          id: "b",
          text: "To determine the direction a user is moving.",
        },
        {
          id: "c",
          text: "To find the location of the next co-channel cell.",
        },
        {
          id: "d",
          text: "To decide when a handoff is necessary.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "This geometric rule is used to navigate the hexagonal grid to find the center of the nearest co-channel cells based on the 'i' and 'j' parameters, which also define the cluster size N (slide 12).",
        incorrect: {
          a: "Signal strength calculation involves path loss, not this geometric rule.",
          b: "This rule is for network planning, not tracking a user.",
          d: "Handoff decisions are based on signal strength, not this grid rule.",
        },
      },
    },
    {
      id: "chapter3-q13",
      text: "What is the 'frequency reuse distance' (D)?",
      options: [
        {
          id: "a",
          text: "The radius of a single cell.",
        },
        {
          id: "b",
          text: "The minimum distance between the centers of cells that use the same frequency.",
        },
        {
          id: "c",
          text: "The maximum distance a mobile phone can be from a base station.",
        },
        {
          id: "d",
          text: "The distance between two adjacent cells.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The reuse distance (D) is defined as the minimum distance between the centers of co-channel cells (cells using the same frequency band) (slide 13).",
        incorrect: {
          a: "The radius of a cell is 'R' (slide 13).",
          c: "This is related to cell coverage or range, not specifically the reuse distance.",
          d: "Adjacent cells use *different* frequencies; their centers are close, but this is not the reuse distance.",
        },
      },
    },
    {
      id: "chapter3-q14",
      text: "What does the 'frequency reuse factor' (q) represent?",
      options: [
        {
          id: "a",
          text: "The total number of channels in the system.",
        },
        {
          id: "b",
          text: "The ratio of the cell radius to the reuse distance.",
        },
        {
          id: "c",
          text: "The ratio of the reuse distance to the cell radius.",
        },
        {
          id: "d",
          text: "The number of cells in a cluster.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "The reuse factor (q) is the ratio of the reuse distance (D) to the cell radius (R), or q = D/R (slide 15).",
        incorrect: {
          a: "This is the system capacity 'C' or 'S' (slide 18-19).",
          b: "This is the inverse of the reuse factor (R/D).",
          d: "This is the cluster size 'N' (slide 9).",
        },
      },
    },
    {
      id: "chapter3-q15",
      text: "A system is designed with a cluster size 'N' of 7. How would an engineer find the reuse factor 'q'?",
      options: [
        {
          id: "a",
          text: "Multiply 3 by 7.",
        },
        {
          id: "b",
          text: "Calculate the square root of (3 times 7).",
        },
        {
          id: "c",
          text: "Divide 7 by 3.",
        },
        {
          id: "d",
          text: "Calculate (3 squared) + (7 squared).",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The reuse factor 'q' is found by calculating the square root of (3 times N). In this case, N is 7, so the calculation is the square root of 21 (slide 15).",
        incorrect: {
          a: "This is only the first step (3*N) before taking the square root.",
          c: "This calculation is not used for the reuse factor.",
          d: "This is not related to the reuse factor. The cluster size N itself is found using a different formula (i^2 + ij + j^2).",
        },
      },
    },
    {
      id: "chapter3-q16",
      text: "A cell has a radius 'R' of 2 km. The system's reuse factor 'q' is 4.6. How would an engineer calculate the reuse distance 'D'?",
      options: [
        {
          id: "a",
          text: "Divide the reuse factor (4.6) by the radius (2 km).",
        },
        {
          id: "b",
          text: "Add the reuse factor (4.6) to the radius (2 km).",
        },
        {
          id: "c",
          text: "Multiply the radius (2 km) by the reuse factor (4.6).",
        },
        {
          id: "d",
          text: "Calculate the square root of (3 times 4.6).",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "The reuse distance 'D' is found by multiplying the cell radius 'R' by the reuse factor 'q' (D = q * R) (slide 13, 15).",
        incorrect: {
          a: "This would be q/R, which is not D.",
          b: "These values are multiplicative, not additive.",
          d: "This calculation is part of finding 'q' from 'N', not 'D' from 'q' and 'R'.",
        },
      },
    },
    {
      id: "chapter3-q17",
      text: "What does 'S' represent in the context of a cellular cluster?",
      options: [
        {
          id: "a",
          text: "The signal strength of the base station.",
        },
        {
          id: "b",
          text: "The total number of channels available in one cluster.",
        },
        {
          id: "c",
          text: "The size of the cell in square kilometers.",
        },
        {
          id: "d",
          text: "The number of sectors in a cell.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "'S' represents the total number of unique channels in a single cluster, which is found by multiplying the number of channels per cell (k) by the number of cells in the cluster (N) (slide 18).",
        incorrect: {
          a: "Signal strength is 'S' in 'SIR' (Signal-to-Interference Ratio), but 'S' on slide 18 refers to total channels.",
          c: "This is the cell area.",
          d: "Sectoring is a different concept (slide 25).",
        },
      },
    },
    {
      id: "chapter3-q18",
      text: "The total system capacity 'C' is calculated by multiplying M (number of clusters) by S (channels per cluster). What does 'M' represent?",
      options: [
        {
          id: "a",
          text: "The number of mobile users.",
        },
        {
          id: "b",
          text: "The number of times the cluster pattern is replicated.",
        },
        {
          id: "c",
          text: "The number of co-channel interfering cells.",
        },
        {
          id: "d",
          text: "The number of minutes a call can last.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "'M' represents the number of times the cluster (with its 'S' channels) is replicated over the entire system's geographic area (slide 19).",
        incorrect: {
          a: "Capacity 'C' defines the *total channels*, which *limits* the number of users, but 'M' is not the user count.",
          c: "'M' is used for the number of interfering cells in the SIR formula (slide 23), but in the capacity formula 'C=MS', it stands for cluster replications (slide 19).",
          d: "This is not related to the capacity calculation.",
        },
      },
    },
    {
      id: "chapter3-q19",
      text: "A cluster has 7 cells (N=7). Each cell is assigned 20 channels (k=20). How many total unique channels 'S' are in this one cluster?",
      options: [
        {
          id: "a",
          text: "27",
        },
        {
          id: "b",
          text: "140",
        },
        {
          id: "c",
          text: "2.85",
        },
        {
          id: "d",
          text: "7",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The total channels 'S' in a cluster is found by multiplying the number of cells 'N' by the channels per cell 'k'. The calculation is 7 * 20 = 140 (slide 18, 20).",
        incorrect: {
          a: "This is the result of adding (7 + 20), not multiplying.",
          c: "This is the result of dividing (20 / 7), not multiplying.",
          d: "This is just the cluster size 'N'.",
        },
      },
    },
    {
      id: "chapter3-q20",
      text: "A system has 140 unique channels per cluster (S=140). The cluster pattern is repeated 10 times (M=10) over a city. What is the total channel capacity 'C' of the system?",
      options: [
        {
          id: "a",
          text: "1400",
        },
        {
          id: "b",
          text: "150",
        },
        {
          id: "c",
          text: "14",
        },
        {
          id: "d",
          text: "130",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "The total capacity 'C' is found by multiplying the channels per cluster 'S' by the number of cluster replications 'M'. The calculation is 140 * 10 = 1400 (slide 19, 20).",
        incorrect: {
          b: "This is the result of adding (140 + 10), not multiplying.",
          c: "This is the result of dividing (140 / 10), not multiplying.",
          d: "This is the result of subtracting (140 - 10), not multiplying.",
        },
      },
    },
    {
      id: "chapter3-q21",
      text: "What does a high Signal-to-Interference Ratio (SIR) indicate?",
      options: [
        {
          id: "a",
          text: "A clear signal with less interference.",
        },
        {
          id: "b",
          text: "A weak signal with high interference.",
        },
        {
          id: "c",
          text: "The signal and interference are equal.",
        },
        {
          id: "d",
          text: "The base station is out of service.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "A higher SIR means the desired signal's power is much stronger than the interfering signals' power, resulting in a clearer signal and better call quality (slide 21).",
        incorrect: {
          b: "This would be a low SIR.",
          c: "This would be an SIR of 0 dB, which is very poor.",
          d: "This would result in no signal, not an SIR measurement.",
        },
      },
    },
    {
      id: "chapter3-q22",
      text: "What is the primary source of 'co-channel interference'?",
      options: [
        {
          id: "a",
          text: "Noise from buildings and mountains.",
        },
        {
          id: "b",
          text: "Signals from adjacent cells that use different frequencies.",
        },
        {
          id: "c",
          text: "Signals from other cells that are using the same frequency.",
        },
        {
          id: "d",
          text: "The mobile device's own transmitter.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Co-channel interference is caused by signals from other base stations (co-channel cells) that are using the same frequency channel (slide 22).",
        incorrect: {
          a: "This is environmental noise or multipath fading, not co-channel interference.",
          b: "This is 'adjacent channel interference', which is a different, less significant problem.",
          d: "This is not a source of co-channel interference.",
        },
      },
    },
    {
      id: "chapter3-q23",
      text: "What are the 'first-tier co-channel base stations'?",
      options: [
        {
          id: "a",
          text: "The 6 cells immediately surrounding the serving cell.",
        },
        {
          id: "b",
          text: "The 6 nearest cells that use the same frequency as the serving cell.",
        },
        {
          id: "c",
          text: "The 6 oldest base stations in the network.",
        },
        {
          id: "d",
          text: "The 6 base stations with the strongest signals.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The first tier refers to the first 'ring' of co-channel cells—the 6 nearest base stations that are reusing the same frequency as the central, serving cell (slide 21, 22).",
        incorrect: {
          a: "The 6 cells immediately surrounding the serving cell are *adjacent* cells and use *different* frequencies.",
          c: "The 'tier' is about distance and frequency, not age.",
          d: "The interfering cells have weaker signals due to distance; the serving cell has the strongest signal.",
        },
      },
    },
    {
      id: "chapter3-q24",
      text: "An engineer wants to estimate the Signal-to-Interference Ratio (SIR). They know the reuse factor (q) is 4.6, the path loss exponent (n) is 4, and there are 6 interfering cells (M). The first step is to calculate (4.6 raised to the power of 4). What is the next step?",
      options: [
        {
          id: "a",
          text: "Multiply the result by the number of interfering cells (6).",
        },
        {
          id: "b",
          text: "Divide the result by the number of interfering cells (6).",
        },
        {
          id: "c",
          text: "Take the square root of the result.",
        },
        {
          id: "d",
          text: "Multiply the result by 10.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The SIR (as a ratio, not in dB) is found by dividing (q to the power of n) by M. So, after calculating (4.6^4), the next step is to divide by 6 (slide 23, 24).",
        incorrect: {
          a: "Multiplying would incorrectly increase the SIR.",
          c: "The square root is not part of this calculation.",
          d: "Multiplying by 10 (and taking the log) is the final step to convert the ratio to decibels (dB), not the next step in finding the ratio itself.",
        },
      },
    },
    {
      id: "chapter3-q25",
      text: "What is the goal of 'cell sectoring'?",
      options: [
        {
          id: "a",
          text: "To increase the geographic size of a cell.",
        },
        {
          id: "b",
          text: "To reduce co-channel interference.",
        },
        {
          id: "c",
          text: "To increase the total number of cells in a cluster.",
        },
        {
          id: "d",
          text: "To allow users to connect to multiple base stations at once.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The purpose of cell sectoring is to use directional antennas to reduce the amount of co-channel interference received and transmitted by the base station (slide 25).",
        incorrect: {
          a: "Sectoring changes the cell's internal structure, not its overall geographic size.",
          c: "Sectoring divides an existing cell; it does not add new cells to the cluster.",
          d: "This is related to soft handoff, not sectoring.",
        },
      },
    },
    {
      id: "chapter3-q26",
      text: "How is cell sectoring typically implemented?",
      options: [
        {
          id: "a",
          text: "By stacking multiple base stations on top of each other.",
        },
        {
          id: "b",
          text: "By replacing a single omnidirectional antenna with multiple directional antennas.",
        },
        {
          id: "c",
          text: "By splitting the cell into many smaller, new cells.",
        },
        {
          id: "d",
          text: "By using lower frequencies for transmission.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Sectoring is achieved by replacing one omnidirectional antenna (which transmits 360 degrees) with several directional antennas (e.g., three 120-degree antennas or six 60-degree antennas), each covering a 'sector' (slide 25).",
        incorrect: {
          c: "This is 'cell splitting', a different technique (slide 26).",
          a: "This is not a recognized technique.",
          d: "Frequency choice is separate from the physical antenna arrangement of sectoring.",
        },
      },
    },
    {
      id: "chapter3-q27",
      text: "What is the primary purpose of 'cell splitting'?",
      options: [
        {
          id: "a",
          text: "To increase capacity in high-traffic areas.",
        },
        {
          id: "b",
          text: "To decrease the number of base stations needed.",
        },
        {
          id: "c",
          text: "To simplify the handoff process.",
        },
        {
          id: "d",
          text: "To cover a larger geographic area with a single cell.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Cell splitting is a technique to increase the capacity (number of available channels) in a high-traffic area by replacing a large cell with multiple smaller 'microcells' (slide 26).",
        incorrect: {
          b: "This *increases* the number of base stations, as new ones are added for the microcells.",
          c: "It can make handoffs *more* frequent and complex, as users cross more cell boundaries.",
          d: "It does the opposite; it divides a large cell into smaller ones.",
        },
      },
    },
    {
      id: "chapter3-q28",
      text: "When 'cell splitting' is used, what is the effect on frequency reuse?",
      options: [
        {
          id: "a",
          text: "Frequency reuse is no longer necessary.",
        },
        {
          id: "b",
          text: "The frequency reuse factor is increased in that area.",
        },
        {
          id: "c",
          text: "The same frequencies are just divided among the smaller cells.",
        },
        {
          id: "d",
          text: "The cluster size 'N' must be increased.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "By introducing new, smaller cells, the original cell's frequencies can be reused more often in the same geographic area, effectively increasing the frequency reuse factor and overall capacity (slide 26).",
        incorrect: {
          a: "Frequency reuse is the core concept that *allows* cell splitting to increase capacity.",
          c: "The frequencies are *reused* in the new, smaller cells, not just subdivided.",
          d: "The cluster size 'N' is often kept the same, but applied to the smaller cells.",
        },
      },
    },
    {
      id: "chapter3-q29",
      text: "What is the main trigger for a handoff?",
      options: [
        {
          id: "a",
          text: "The signal level from the current base station drops below a handoff threshold.",
        },
        {
          id: "b",
          text: "The user's phone battery is running low.",
        },
        {
          id: "c",
          text: "The user dials a new phone number while on a call.",
        },
        {
          id: "d",
          text: "The base station is too crowded.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "A handoff occurs when the mobile station moves and the signal level from its current base station drops below a certain threshold, indicating a new base station is needed to maintain the call (slide 29).",
        incorrect: {
          b: "Battery level does not trigger a handoff.",
          c: "This is not possible; a user cannot dial a new number while on an active call (without conferencing, which is different).",
          d: "While traffic balancing can trigger handoffs, the primary trigger described is signal strength as the user moves.",
        },
      },
    },
    {
      id: "chapter3-q30",
      text: "What is the role of the Mobile Telephone Switching Office (MTSO) in the call process?",
      options: [
        {
          id: "a",
          text: "It is the antenna on the car.",
        },
        {
          id: "b",
          text: "It is another name for the base station tower.",
        },
        {
          id: "c",
          text: "It is the central coordinating element that connects base stations to the wider network.",
        },
        {
          id: "d",
          text: "It is a device inside the mobile phone.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "The MTSO (or MSC) is the central switch that coordinates all base stations in a region, manages handoffs, and connects the cellular network to the public telephone network (slide 30).",
        incorrect: {
          a: "The antenna is part of the mobile station (MS).",
          b: "The base station tower is the Base Transceiver Station (BTS) (slide 34).",
          d: "The MTSO is a core part of the network, not the user's device.",
        },
      },
    },
    {
      id: "chapter3-q31",
      text: "According to slide 33, what happens in an 'improper handoff situation'?",
      options: [
        {
          id: "a",
          text: "The call is transferred too early, when the signal is still strong.",
        },
        {
          id: "b",
          text: "The handoff happens exactly at the 'Handoff threshold'.",
        },
        {
          id: "c",
          text: "The signal drops below the 'Minimum acceptable signal' *before* the handoff is made.",
        },
        {
          id: "d",
          text: "The call is transferred to a base station that is farther away.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "The 'improper' situation shows the signal level from BS 1 dropping below the minimum level needed to maintain the call (at point B) *before* a handoff can be completed, resulting in a dropped call (slide 33).",
        incorrect: {
          a: "This is not what the diagram shows; the issue is a *late* or *failed* handoff.",
          b: "This would be part of a *proper* handoff, as shown in the lower diagram.",
          d: "The handoff fails entirely; it is not transferred at all.",
        },
      },
    },
    {
      id: "chapter3-q32",
      text: "What does an 'Inter-MSC handover' (Type 3 in the diagram) involve?",
      options: [
        {
          id: "a",
          text: "The mobile station moves between two sectors of the same cell.",
        },
        {
          id: "b",
          text: "The mobile station moves between two base stations controlled by the same BSC.",
        },
        {
          id: "c",
          text: "The mobile station moves between two base stations controlled by different MSCs.",
        },
        {
          id: "d",
          text: "The mobile station connects to two MSCs at the same time.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "An Inter-MSC handover is the most complex, occurring when a user moves from a cell controlled by one Mobile Switching Center (MSC) to a cell controlled by an entirely different MSC (slide 34).",
        incorrect: {
          a: "This would be an 'Intracell' handover.",
          b: "This is an 'Inter-BSC' or 'Intra-MSC' handover (Type 2).",
          d: "A mobile is typically controlled by only one MSC at a time.",
        },
      },
    },
    {
      id: "chapter3-q33",
      text: "In Network Controlled Handoff (NCH), what part of the system monitors the signal and arranges the handoff?",
      options: [
        {
          id: "a",
          text: "The mobile device only.",
        },
        {
          id: "b",
          text: "The Base Stations or the Mobile Telephone Switching Office (MTSO).",
        },
        {
          id: "c",
          text: "The user must manually select a new network.",
        },
        {
          id: "d",
          text: "A satellite in orbit.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "In NCH, the network itself (specifically the base stations or the MTSO) is responsible for monitoring the mobile's signal and initiating the handoff when needed (slide 35).",
        incorrect: {
          a: "This describes Mobile Controlled Handoff (MCH).",
          c: "Handoffs are automatic.",
          d: "This is a terrestrial cellular system.",
        },
      },
    },
    {
      id: "chapter3-q34",
      text: "What is the key difference between Mobile Controlled Handoff (MCH) and Mobile Assisted Handoff (MAH)?",
      options: [
        {
          id: "a",
          text: "There is no difference; they are the same.",
        },
        {
          id: "b",
          text: "In MCH, the mobile decides; in MAH, the mobile measures but the network decides.",
        },
        {
          id: "c",
          text: "In MCH, the network decides; in MAH, the mobile decides.",
        },
        {
          id: "d",
          text: "MCH is for 4G, and MAH is for 3G.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "In MCH, the mobile makes the handoff decision. In MAH, the mobile *assists* by measuring signals and reporting them, but the *network* (Base Station) makes the final decision (slide 35).",
        incorrect: {
          a: "They are two distinct strategies.",
          c: "This is the reverse of the correct definitions.",
          d: "The concepts are general; MAH is notably used in GSM (a 2G standard).",
        },
      },
    },
    {
      id: "chapter3-q35",
      text: "What is the main advantage of 'Queuing Handoffs'?",
      options: [
        {
          id: "a",
          text: "It guarantees a call will never be dropped.",
        },
        {
          id: "b",
          text: "It allows for full utilization of traffic channels without reserving guard channels.",
        },
        {
          id: "c",
          text: "It reduces the number of base stations needed.",
        },
        {
          id: "d",
          text: "It blocks new calls in favor of handoffs.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Queuing allows handoff requests to wait for a brief period if all channels are busy. This allows the system to use all channels for traffic (no guard channels), leading to efficient spectrum utilization (slide 37).",
        incorrect: {
          a: "It doesn't guarantee it; if a channel doesn't free up in time, the call will still drop.",
          c: "It is a channel management strategy, not a network layout strategy.",
          d: "This is a *disadvantage* (increased new call blocking), not the advantage.",
        },
      },
    },
    {
      id: "chapter3-q36",
      text: "How does the 'microcell' concept described on slide 39 help reduce co-channel interference?",
      options: [
        {
          id: "a",
          text: "By using a single high-power transmitter for all zones.",
        },
        {
          id: "b",
          text: "By using low-power transmitters at the edge of the region.",
        },
        {
          id: "c",
          text: "By connecting all zones to different base stations.",
        },
        {
          id: "d",
          text: "By increasing the geographic size of the cell.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The microcell zone concept uses multiple low-power transmitters. Because the power is low, the signals don't travel as far, which lowers the co-channel interference experienced by and from distant cells (slide 39).",
        incorrect: {
          a: "It uses *low-power* transmitters, not a single high-power one.",
          c: "All zones are connected to the *same* base station, which uses a 'zone selector'.",
          d: "This concept is used to cover a cell, not to increase its size.",
        },
      },
    },
    {
      id: "chapter3-q37",
      text: "What problem is the 'Umbrella cell approach' designed to solve?",
      options: [
        {
          id: "a",
          text: "Handling low-speed pedestrian traffic.",
        },
        {
          id: "b",
          text: "Handling high-speed users (e.g., in cars on a highway).",
        },
        {
          id: "c",
          text: "Providing coverage inside buildings.",
        },
        {
          id: "d",
          text: "Reducing the cost of base stations.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The umbrella cell uses a large, high-power cell to cover high-speed users (like on a highway) so they don't have to perform handoffs too frequently as they pass through many small microcells (slide 40).",
        incorrect: {
          a: "Low-speed traffic is handled by the small microcells *under* the umbrella.",
          c: "This is typically solved with 'picocells' or 'femtocells', not umbrella cells.",
          d: "This approach adds an 'umbrella' cell, it doesn't necessarily reduce cost.",
        },
      },
    },
    {
      id: "chapter3-q38",
      text: "What was the main technological difference between 1G and 2G networks?",
      options: [
        {
          id: "a",
          text: "1G was digital, and 2G was analog.",
        },
        {
          id: "b",
          text: "1G was analog, and 2G was digital.",
        },
        {
          id: "c",
          text: "1G was for data, and 2G was for voice.",
        },
        {
          id: "d",
          text: "1G used satellites, and 2G used towers.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The first generation (1G) of wireless networks used analog-based protocols. The second generation (2G) introduced the first digital standards, like GSM and CDMA (slide 41).",
        incorrect: {
          a: "This is the reverse of the correct fact.",
          c: "Both 1G and 2G were primarily designed for voice. 2G added some data capabilities (like SMS).",
          d: "Both 1G and 2G were terrestrial cellular systems using towers.",
        },
      },
    },
    {
      id: "chapter3-q39",
      text: "What was the primary design philosophy shift from 3G to 4G?",
      options: [
        {
          id: "a",
          text: "3G was digital, while 4G was analog.",
        },
        {
          id: "b",
          text: "3G was designed for voice with some data, while 4G was designed primarily for data.",
        },
        {
          id: "c",
          text: "3G was IP-based, while 4G was circuit-switched.",
        },
        {
          id: "d",
          text: "3G focused on high speed, while 4G focused on voice quality.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "3G was the first mobile broadband, designed for voice but with data consideration. 4G (LTE) represented a shift to an IP-based protocol designed *primarily* for data, providing 'true' mobile broadband (slide 41).",
        incorrect: {
          a: "Both 3G and 4G are digital.",
          c: "This is reversed. 4G (LTE) is IP-based. 3G still had circuit-switched elements for voice.",
          d: "4G focused on much higher data speeds than 3G.",
        },
      },
    },
    {
      id: "chapter3-q40",
      text: "Which 5G pillar is designed to support a massive deployment of IoT devices, up to 1 million per square kilometer?",
      options: [
        {
          id: "a",
          text: "Enhanced Mobile Broadband (eMBB)",
        },
        {
          id: "b",
          text: "Ultra-Reliable Low-Latency Communications (URLLC)",
        },
        {
          id: "c",
          text: "Massive Machine-Type Communications (mMTC)",
        },
        {
          id: "d",
          text: "High-Density Device Connectivity (HDDC)",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Massive Machine-Type Communications (mMTC) is the 5G pillar focused on supporting an extremely high connection density for low-power IoT devices (slide 43, 45).",
        incorrect: {
          a: "eMBB focuses on high data rates for users.",
          b: "URLLC focuses on high reliability and low latency for critical applications.",
          d: "This is not one of the three standard pillars of 5G.",
        },
      },
    },
  ],
};
