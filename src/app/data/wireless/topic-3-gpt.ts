import { Quiz } from "@/app/types/quiz";

export const wirelessTopic3GPT: Quiz = {
  id: "wireless-topic-3-gpt",
  categoryId: "wireless",
  subcategoryId: "wireless-topic-3-gpt",
  title: "Wireless Mobile Networking - Topic 3 (GPT Version)",
  questions: [
    {
      id: "chapter3-q1",
      text: "What is the main purpose of using multiple low-power base stations in cellular network design?",
      options: [
        { id: "a", text: "To reduce the cost of mobile devices" },
        {
          id: "b",
          text: "To increase capacity and allow frequency reuse across smaller areas",
        },
        { id: "c", text: "To reduce the need for network switching" },
        { id: "d", text: "To increase signal interference intentionally" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Using multiple low-power transmitters allows more users to share limited spectrum efficiently through frequency reuse.",
        incorrect: {
          a: "It doesn’t directly affect device cost.",
          c: "More base stations require more handoffs, not fewer.",
          d: "It aims to reduce interference, not increase it.",
        },
      },
    },
    {
      id: "chapter3-q2",
      text: "In a cellular system, each base station is assigned a specific group of channels. What is the purpose of this assignment?",
      options: [
        {
          id: "a",
          text: "To allow every base station to use the same frequencies",
        },
        {
          id: "b",
          text: "To minimize interference with neighboring base stations",
        },
        { id: "c", text: "To maximize overlapping signals" },
        { id: "d", text: "To reduce the number of users per base station" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Different channel groups reduce interference between neighboring cells while enabling efficient spectrum reuse.",
        incorrect: {
          a: "Using the same frequencies nearby causes interference.",
          c: "Overlap must be controlled, not maximized.",
          d: "Channel allocation doesn’t control user count directly.",
        },
      },
    },
    {
      id: "chapter3-q3",
      text: "What is the definition of a 'handoff' in a cellular network?",
      options: [
        { id: "a", text: "The process of connecting a new call" },
        {
          id: "b",
          text: "The process of transferring an ongoing call from one base station to another while the call is in progress",
        },
        { id: "c", text: "The process of dropping a weak signal" },
        { id: "d", text: "The process of updating a mobile device’s software" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "A handoff transfers an active call between base stations to maintain connection when the user moves.",
        incorrect: {
          a: "That’s call initiation, not handoff.",
          c: "Weak signals may trigger handoff but are not the definition.",
          d: "Software updates are unrelated.",
        },
      },
    },
    {
      id: "chapter3-q4",
      text: "In which handoff detection strategy does the mobile device itself monitor surrounding signals and make the handoff decision?",
      options: [
        { id: "a", text: "Network Controlled Handoff (NCH)" },
        { id: "b", text: "Mobile Controlled Handoff (MCH)" },
        { id: "c", text: "Mobile Assisted Handoff (MAH)" },
        { id: "d", text: "Dynamic Handoff (DH)" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "In MCH, the mobile device measures surrounding signal strengths and decides when to switch cells.",
        incorrect: {
          a: "In NCH, the network makes the decision.",
          c: "In MAH, the mobile only reports measurements.",
          d: "Dynamic Handoff is not a standard approach.",
        },
      },
    },
    {
      id: "chapter3-q5",
      text: "The 'Guard Channel Concept' helps prioritize handoffs. What is its main disadvantage?",
      options: [
        { id: "a", text: "It increases dropped call rates" },
        {
          id: "b",
          text: "It reduces the total carried traffic because some channels are reserved",
        },
        { id: "c", text: "It slows down the handoff process" },
        { id: "d", text: "It causes more interference between cells" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Guard channels reserve capacity for ongoing calls, reducing total available traffic channels.",
        incorrect: {
          a: "It reduces dropped calls, not increases them.",
          c: "Reservation doesn’t affect speed of handoff.",
          d: "It doesn’t influence interference.",
        },
      },
    },
    {
      id: "chapter3-q6",
      text: "‘Cell dragging’ is a handoff-related issue that typically occurs with which users?",
      options: [
        { id: "a", text: "High-speed car users" },
        { id: "b", text: "Low-speed pedestrian users with a strong signal" },
        { id: "c", text: "Stationary indoor users" },
        { id: "d", text: "Airplane passengers" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Slow-moving pedestrians can stay connected to a distant cell due to strong line-of-sight, causing handoff delay.",
        incorrect: {
          a: "High-speed users require fast handoffs, not cell dragging.",
          c: "Stationary users experience no handoff.",
          d: "Aircraft communication uses different systems.",
        },
      },
    },
    {
      id: "chapter3-q7",
      text: "Which of the three pillars of 5G focuses on providing high data rates and broad coverage?",
      options: [
        { id: "a", text: "Ultra-Reliable Low-Latency Communications (uRLLC)" },
        { id: "b", text: "Massive Machine-Type Communications (mMTC)" },
        { id: "c", text: "Enhanced Mobile Broadband (eMBB)" },
        { id: "d", text: "High Density Network (HDN)" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "eMBB provides wide coverage and high data rates for activities like streaming and VR.",
        incorrect: {
          a: "uRLLC focuses on reliability and latency.",
          b: "mMTC targets IoT scalability.",
          d: "HDN isn’t one of the 5G pillars.",
        },
      },
    },
    {
      id: "chapter3-q8",
      text: "How does 5G achieve extremely high data rates such as 20 Gbit/s peak speeds?",
      options: [
        { id: "a", text: "By using low-frequency bands only" },
        {
          id: "b",
          text: "By employing a large number of antennas and beamforming techniques",
        },
        { id: "c", text: "By reducing user density" },
        { id: "d", text: "By increasing transmission power to unsafe levels" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "5G employs beamforming and massive MIMO to focus signals efficiently and deliver ultra-high speeds.",
        incorrect: {
          a: "5G uses high-frequency millimeter waves as well.",
          c: "User density doesn’t control data rate directly.",
          d: "Power levels remain within safety limits.",
        },
      },
    },
    {
      id: "chapter3-q9",
      text: "Why are hexagonal shapes commonly used to represent cellular coverage areas?",
      options: [
        { id: "a", text: "Because they perfectly match terrain shape" },
        {
          id: "b",
          text: "Because they allow equal distance to all neighboring cells and simplify frequency planning",
        },
        { id: "c", text: "Because it looks neat in diagrams" },
        { id: "d", text: "Because each tower must have six antennas" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Hexagons approximate circular coverage while fitting together neatly for network planning.",
        incorrect: {
          a: "Real terrain varies widely.",
          c: "Aesthetic reasons are secondary.",
          d: "Tower antenna count is unrelated.",
        },
      },
    },
    {
      id: "chapter3-q10",
      text: "What term describes reusing the same frequency channels in different cells separated by a sufficient distance?",
      options: [
        { id: "a", text: "Frequency Reuse" },
        { id: "b", text: "Signal Reflection" },
        { id: "c", text: "Cell Overlap" },
        { id: "d", text: "Dynamic Allocation" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Frequency reuse allows efficient spectrum use by repeating channel groups at safe distances.",
        incorrect: {
          b: "Reflection is a propagation effect.",
          c: "Overlap causes interference.",
          d: "Dynamic allocation assigns frequencies adaptively, not reuse them.",
        },
      },
    },
    {
      id: "chapter3-q11",
      text: "What happens to network capacity when the cell radius is reduced through 'cell splitting'?",
      options: [
        { id: "a", text: "It decreases" },
        { id: "b", text: "It remains the same" },
        {
          id: "c",
          text: "It increases because more cells can reuse the same frequencies",
        },
        { id: "d", text: "It stops working" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Smaller cells increase reuse opportunities, improving total network capacity.",
        incorrect: {
          a: "Splitting cells expands capacity, not reduces it.",
          b: "Capacity scales with number of cells.",
          d: "Cell splitting doesn’t disable the network.",
        },
      },
    },
    {
      id: "chapter3-q12",
      text: "Which technique divides a large cell into smaller zones each with its own low-power transmitter?",
      options: [
        { id: "a", text: "Microcell architecture" },
        { id: "b", text: "Macrocell planning" },
        { id: "c", text: "Umbrella cell approach" },
        { id: "d", text: "Overlapping cell technique" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Microcells are smaller zones served by low-power transmitters, often used in dense areas.",
        incorrect: {
          b: "Macrocells are large coverage areas.",
          c: "Umbrella cells handle high-speed users.",
          d: "Overlapping cells cause interference.",
        },
      },
    },
    {
      id: "chapter3-q13",
      text: "What is the primary purpose of an umbrella cell in cellular networks?",
      options: [
        { id: "a", text: "To cover dead zones in tunnels" },
        {
          id: "b",
          text: "To serve high-speed users passing through microcell areas",
        },
        { id: "c", text: "To improve building penetration" },
        { id: "d", text: "To increase power output" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Umbrella cells use higher power to maintain stable connections for fast-moving users like vehicles.",
        incorrect: {
          a: "Dead zones are covered by repeaters.",
          c: "Penetration is more about frequency and antenna design.",
          d: "Power increase is not the main goal.",
        },
      },
    },
    {
      id: "chapter3-q14",
      text: "What does the term 'co-channel interference' refer to?",
      options: [
        {
          id: "a",
          text: "Interference from other frequencies in nearby cells",
        },
        {
          id: "b",
          text: "Interference between cells using the same frequency channels",
        },
        { id: "c", text: "Noise from the mobile device hardware" },
        { id: "d", text: "Reflection from buildings" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Co-channel interference happens when two or more cells reuse the same frequencies too closely.",
        incorrect: {
          a: "That’s adjacent channel interference.",
          c: "Hardware noise is a different issue.",
          d: "Reflection is multipath interference.",
        },
      },
    },
    {
      id: "chapter3-q15",
      text: "What is the effect of increasing the frequency reuse factor (q) on network interference?",
      options: [
        { id: "a", text: "It increases interference" },
        {
          id: "b",
          text: "It decreases interference by spacing reused frequencies further apart",
        },
        { id: "c", text: "It doesn’t change interference" },
        { id: "d", text: "It stops frequency reuse entirely" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Larger reuse factor means more separation between reused frequencies, reducing interference.",
        incorrect: {
          a: "Closer spacing increases interference.",
          c: "It directly affects interference.",
          d: "It still allows reuse, just at greater distance.",
        },
      },
    },
    {
      id: "chapter3-q16",
      text: "What is a typical reason for performing a handoff during a call?",
      options: [
        {
          id: "a",
          text: "User enters a different cell area and signal from the current base station becomes weak",
        },
        { id: "b", text: "The user changes SIM card" },
        { id: "c", text: "The network resets automatically" },
        { id: "d", text: "The mobile phone overheats" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Handoff is triggered when a user moves toward a neighboring cell and the signal drops below a threshold.",
        incorrect: {
          b: "Changing SIMs doesn’t cause handoff.",
          c: "Network resets are maintenance events.",
          d: "Temperature is unrelated.",
        },
      },
    },
    {
      id: "chapter3-q17",
      text: "Which handoff type occurs when the call is transferred between two cells controlled by different Mobile Switching Centers (MSCs)?",
      options: [
        { id: "a", text: "Intra-cell handoff" },
        { id: "b", text: "Inter-MSC handoff" },
        { id: "c", text: "Intra-MSC handoff" },
        { id: "d", text: "Soft handoff" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "An Inter-MSC handoff occurs when the new cell is managed by another switching center.",
        incorrect: {
          a: "Intra-cell doesn’t involve switching centers.",
          c: "Intra-MSC stays within the same MSC.",
          d: "Soft handoff applies to CDMA networks.",
        },
      },
    },
    {
      id: "chapter3-q18",
      text: "In the context of handoff, what does 'queuing handoffs' refer to?",
      options: [
        {
          id: "a",
          text: "Holding handoff requests temporarily to avoid dropped calls when channels are busy",
        },
        { id: "b", text: "Cancelling handoff requests to save bandwidth" },
        {
          id: "c",
          text: "Using one channel for multiple handoffs simultaneously",
        },
        { id: "d", text: "Delaying handoffs until call completion" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Queuing allows short delays before disconnection, increasing the chance a channel frees up.",
        incorrect: {
          b: "Requests are held, not cancelled.",
          c: "Each handoff requires its own channel.",
          d: "Delaying until end defeats the purpose of handoff.",
        },
      },
    },
    {
      id: "chapter3-q19",
      text: "What is one advantage of cell sectoring using directional antennas?",
      options: [
        { id: "a", text: "It increases co-channel interference" },
        {
          id: "b",
          text: "It reduces co-channel interference by focusing transmission in specific directions",
        },
        { id: "c", text: "It eliminates the need for frequency reuse" },
        { id: "d", text: "It increases total power consumption drastically" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Sectoring divides a cell into 60° or 120° zones to minimize interference and reuse frequencies efficiently.",
        incorrect: {
          a: "It lowers interference.",
          c: "Frequency reuse is still applied.",
          d: "Power is optimized, not wasted.",
        },
      },
    },
    {
      id: "chapter3-q20",
      text: "What is the function of the Mobile Telephone Switching Office (MTSO) in a cellular network?",
      options: [
        {
          id: "a",
          text: "It manages calls and handoffs between different base stations",
        },
        { id: "b", text: "It provides internet access for the base station" },
        { id: "c", text: "It amplifies radio signals" },
        { id: "d", text: "It designs the cell tower structure" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "The MTSO handles call routing, handoffs, and communication management across base stations.",
        incorrect: {
          b: "Internet access isn’t its core function.",
          c: "Signal amplification occurs at base stations.",
          d: "Tower design is unrelated to MTSO duties.",
        },
      },
    },
    {
      id: "chapter3-q21",
      text: "What happens to capacity when a cluster of cells is replicated multiple times across a service area?",
      options: [
        { id: "a", text: "Capacity decreases due to higher interference" },
        {
          id: "b",
          text: "Capacity increases because more channels are reused",
        },
        { id: "c", text: "Capacity remains the same" },
        { id: "d", text: "Capacity depends only on the weather" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Replicating clusters increases the total available capacity by reusing frequencies in new locations.",
        incorrect: {
          a: "Proper reuse avoids interference.",
          c: "It scales with number of clusters.",
          d: "Weather affects propagation, not capacity planning.",
        },
      },
    },
    {
      id: "chapter3-q22",
      text: "In cellular systems, what does the cluster size (N) represent?",
      options: [
        { id: "a", text: "The number of frequencies per user" },
        {
          id: "b",
          text: "The number of cells in which all available channels are used once",
        },
        { id: "c", text: "The number of base stations per region" },
        { id: "d", text: "The number of antennas per tower" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Cluster size represents how many distinct cells are needed before frequencies can be reused.",
        incorrect: {
          a: "It’s not per user.",
          c: "Clusters aren’t limited by region.",
          d: "Antenna count is unrelated.",
        },
      },
    },
    {
      id: "chapter3-q23",
      text: "What is the main goal of frequency reuse in a cellular network?",
      options: [
        { id: "a", text: "To reduce equipment cost" },
        {
          id: "b",
          text: "To increase total network capacity without requiring more spectrum",
        },
        { id: "c", text: "To make all base stations share the same frequency" },
        { id: "d", text: "To eliminate handoffs completely" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Frequency reuse improves spectrum efficiency by using the same frequencies in distant cells.",
        incorrect: {
          a: "Cost reduction is a secondary benefit.",
          c: "Sharing the same frequencies nearby would cause interference.",
          d: "Handoffs still occur in reused systems.",
        },
      },
    },
    {
      id: "chapter3-q24",
      text: "Why is maintaining a high Signal-to-Interference Ratio (SIR) important in cellular communication?",
      options: [
        { id: "a", text: "It ensures clearer signals with less interference" },
        { id: "b", text: "It increases call charges" },
        { id: "c", text: "It slows down data transmission" },
        { id: "d", text: "It reduces the number of base stations" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "A higher SIR means the desired signal is much stronger than interference, leading to better call quality.",
        incorrect: {
          b: "SIR doesn’t affect pricing.",
          c: "Better SIR improves speed, not reduces it.",
          d: "It’s unrelated to station count.",
        },
      },
    },
    {
      id: "chapter3-q25",
      text: "What is the purpose of sectoring a cell into 60° or 120° sectors?",
      options: [
        {
          id: "a",
          text: "To reduce interference and reuse frequencies more efficiently",
        },
        { id: "b", text: "To increase total power output" },
        { id: "c", text: "To cover a larger area with one tower" },
        { id: "d", text: "To improve tower appearance" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Sectoring limits the direction of transmission to minimize co-channel interference and increase capacity.",
        incorrect: {
          b: "Power is not the main factor.",
          c: "Sectoring divides, not expands, coverage.",
          d: "It’s a technical, not aesthetic, solution.",
        },
      },
    },
    {
      id: "chapter3-q26",
      text: "When smaller cells are introduced to handle heavy traffic areas, this process is known as:",
      options: [
        { id: "a", text: "Cell dragging" },
        { id: "b", text: "Cell splitting" },
        { id: "c", text: "Signal merging" },
        { id: "d", text: "Cluster removal" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Cell splitting divides a congested area into smaller cells to increase network capacity.",
        incorrect: {
          a: "Cell dragging is a signal issue, not a design strategy.",
          c: "Signal merging is not used in this context.",
          d: "Clusters are not removed.",
        },
      },
    },
    {
      id: "chapter3-q27",
      text: "What type of users benefit most from the umbrella cell approach?",
      options: [
        { id: "a", text: "Pedestrians walking in city centers" },
        { id: "b", text: "High-speed vehicle users on highways" },
        { id: "c", text: "Stationary office users" },
        { id: "d", text: "Underground metro passengers" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Umbrella cells maintain connection for fast-moving users by using higher power coverage above smaller cells.",
        incorrect: {
          a: "Microcells are better for pedestrians.",
          c: "Stationary users don’t need this approach.",
          d: "Underground requires repeaters.",
        },
      },
    },
    {
      id: "chapter3-q28",
      text: "Which handoff detection strategy involves the network instructing the mobile to measure nearby signals but the network makes the final decision?",
      options: [
        { id: "a", text: "Mobile Controlled Handoff" },
        { id: "b", text: "Network Controlled Handoff" },
        { id: "c", text: "Mobile Assisted Handoff" },
        { id: "d", text: "Hybrid Handoff" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "In MAH, the mobile measures and reports signal strengths, but the network decides when to switch.",
        incorrect: {
          a: "In MCH, the mobile decides.",
          b: "In NCH, the network monitors directly.",
          d: "Hybrid is not a standard category here.",
        },
      },
    },
    {
      id: "chapter3-q29",
      text: "What does 'massive Machine-Type Communications' (mMTC) in 5G focus on?",
      options: [
        {
          id: "a",
          text: "Providing ultra-high data rates for video streaming",
        },
        {
          id: "b",
          text: "Supporting a huge number of IoT devices efficiently",
        },
        { id: "c", text: "Reducing latency for remote surgery" },
        { id: "d", text: "Providing coverage for high-speed trains only" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "mMTC allows 5G to connect millions of IoT devices per square kilometer.",
        incorrect: {
          a: "That’s eMBB’s focus.",
          c: "Low latency belongs to uRLLC.",
          d: "Mobility is a different KPI.",
        },
      },
    },
    {
      id: "chapter3-q30",
      text: "Which 5G pillar ensures ultra-low delay and extremely high reliability for real-time applications?",
      options: [
        { id: "a", text: "Enhanced Mobile Broadband (eMBB)" },
        { id: "b", text: "Massive Machine-Type Communications (mMTC)" },
        { id: "c", text: "Ultra-Reliable Low-Latency Communications (uRLLC)" },
        { id: "d", text: "Dynamic Network Optimization (DNO)" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "uRLLC is crucial for applications like autonomous driving and remote surgery requiring near-zero delay.",
        incorrect: {
          a: "eMBB focuses on speed and coverage.",
          b: "mMTC connects IoT devices.",
          d: "DNO is not an official 5G pillar.",
        },
      },
    },
    {
      id: "chapter3-q31",
      text: "Which of the following best describes 5G beamforming?",
      options: [
        { id: "a", text: "A method to block signals from unwanted users" },
        {
          id: "b",
          text: "A technique to direct signal energy toward specific users using multiple antennas",
        },
        { id: "c", text: "A way to increase antenna height" },
        { id: "d", text: "A type of encryption for data transmission" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Beamforming concentrates energy toward users, improving signal strength and reducing interference.",
        incorrect: {
          a: "It focuses, not blocks signals.",
          c: "Height isn’t changed.",
          d: "Beamforming is physical-layer, not security-related.",
        },
      },
    },
    {
      id: "chapter3-q32",
      text: "What is the peak data rate target of 5G according to ITU IMT-2020 standards?",
      options: [
        { id: "a", text: "1 Gbit/s" },
        { id: "b", text: "10 Gbit/s" },
        { id: "c", text: "20 Gbit/s" },
        { id: "d", text: "100 Mbit/s" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "The ITU specifies 20 Gbit/s as the theoretical peak downlink rate for 5G.",
        incorrect: {
          a: "That’s typical of 4G LTE.",
          b: "Too low for 5G target.",
          d: "That’s average user experience, not peak rate.",
        },
      },
    },
    {
      id: "chapter3-q33",
      text: "What is the expected latency for Ultra-Reliable Low-Latency Communication (uRLLC) in 5G?",
      options: [
        { id: "a", text: "10 milliseconds" },
        { id: "b", text: "5 milliseconds" },
        { id: "c", text: "1 millisecond" },
        { id: "d", text: "50 milliseconds" },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "5G aims for 1 ms latency to support real-time control and automation.",
        incorrect: {
          a: "10 ms suits 4G networks.",
          b: "5 ms is still higher than the target.",
          d: "50 ms is far too high.",
        },
      },
    },
    {
      id: "chapter3-q34",
      text: "What 5G KPI describes the number of devices that can be connected per square kilometer?",
      options: [
        { id: "a", text: "Spectrum Efficiency" },
        { id: "b", text: "Connection Density" },
        { id: "c", text: "Data Rate" },
        { id: "d", text: "Network Slice Ratio" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Connection density measures how many IoT devices a network can support, targeted at 1 million devices/km².",
        incorrect: {
          a: "Spectrum efficiency refers to bandwidth use.",
          c: "Data rate measures speed.",
          d: "Slice ratio isn’t a KPI term.",
        },
      },
    },
    {
      id: "chapter3-q35",
      text: "Why does 5G use high-frequency millimeter waves in addition to traditional bands?",
      options: [
        {
          id: "a",
          text: "To increase data rates with wider bandwidths over short distances",
        },
        { id: "b", text: "To reduce network range intentionally" },
        { id: "c", text: "To save energy in transmission" },
        { id: "d", text: "To increase latency for users" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Millimeter waves provide larger bandwidths, enabling higher speeds though with shorter range.",
        incorrect: {
          b: "Range reduction is a tradeoff, not the goal.",
          c: "Energy use may increase slightly.",
          d: "Latency is reduced, not increased.",
        },
      },
    },
    {
      id: "chapter3-q36",
      text: "Which KPI ensures connectivity for high-speed trains up to 500 km/h in 5G?",
      options: [
        { id: "a", text: "Mobility" },
        { id: "b", text: "Latency" },
        { id: "c", text: "Peak Data Rate" },
        { id: "d", text: "Spectrum Efficiency" },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Mobility KPI ensures stable connections even at speeds of 500 km/h, such as in trains.",
        incorrect: {
          b: "Latency measures delay.",
          c: "Data rate measures throughput.",
          d: "Spectrum efficiency is unrelated to motion.",
        },
      },
    },
    {
      id: "chapter3-q37",
      text: "What term best describes the process of using multiple small cells to increase coverage and capacity in dense urban areas?",
      options: [
        { id: "a", text: "Macrocelling" },
        { id: "b", text: "Microcell deployment" },
        { id: "c", text: "Co-channel mixing" },
        { id: "d", text: "Spectrum narrowing" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Microcells provide dense coverage with lower transmit power in busy city areas.",
        incorrect: {
          a: "Macrocells are large coverage areas.",
          c: "Mixing causes interference.",
          d: "Spectrum narrowing isn’t a technique.",
        },
      },
    },
    {
      id: "chapter3-q38",
      text: "In 5G, improved spectrum efficiency means:",
      options: [
        { id: "a", text: "Using more bandwidth for fewer users" },
        {
          id: "b",
          text: "Transmitting more data over the same bandwidth compared to 4G",
        },
        { id: "c", text: "Reducing the number of connected devices" },
        { id: "d", text: "Limiting transmission range" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Spectrum efficiency measures how much data can be transmitted per unit of bandwidth; 5G triples 4G efficiency.",
        incorrect: {
          a: "Efficiency is about more data, not fewer users.",
          c: "It increases device support.",
          d: "Range is not the metric here.",
        },
      },
    },
    {
      id: "chapter3-q39",
      text: "When a user moves from one city to another during a call, what kind of handoff is most likely required?",
      options: [
        { id: "a", text: "Intercell handoff" },
        { id: "b", text: "Inter-MSC handoff" },
        { id: "c", text: "Intra-base handoff" },
        { id: "d", text: "Sector handoff" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Different cities are managed by different MSCs, requiring an inter-MSC handoff to maintain the ongoing call.",
        incorrect: {
          a: "Intercell handoff occurs within one MSC region.",
          c: "Intra-base occurs within a single base station.",
          d: "Sector handoff happens within one cell.",
        },
      },
    },
    {
      id: "chapter3-q40",
      text: "What is the overall goal of cellular network technology evolution from 1G to 5G?",
      options: [
        { id: "a", text: "To increase call cost and complexity" },
        {
          id: "b",
          text: "To continuously improve speed, capacity, reliability, and connectivity for users and devices",
        },
        { id: "c", text: "To reduce global mobile coverage" },
        { id: "d", text: "To focus only on voice communication" },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The evolution from 1G to 5G focuses on higher data rates, lower latency, broader connectivity, and support for IoT and automation.",
        incorrect: {
          a: "Evolution aims to improve efficiency, not cost.",
          c: "Coverage is expanded, not reduced.",
          d: "Modern generations go beyond voice to data and smart applications.",
        },
      },
    },
  ],
};
