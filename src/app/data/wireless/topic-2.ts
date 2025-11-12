import { Quiz } from "@/app/types/quiz";

export const wirelessTopic2: Quiz = {
  id: "wireless-topic-2",
  categoryId: "wireless",
  subcategoryId: "wireless-topic-2",
  title: "Wireless Mobile Networking - Topic 2",
  questions: [
    {
      id: "chapter2-q1",
      text: "Which of the following best represents the main components of a communication model?",
      options: [
        {
          id: "a",
          text: "Information Source, Input Transducer, Output Transducer",
        },
        {
          id: "b",
          text: "Noise, Distortion, Fading",
        },
        {
          id: "c",
          text: "Transmitter, Channel, Receiver",
        },
        {
          id: "d",
          text: "Modulator, Demodulator, Amplifier",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "The core of the communication model shown on page 4 consists of the Transmitter, the Channel or Medium, and the Receiver, which handle the signal's journey.",
        incorrect: {
          a: "These are the start and end points of the model, but not the complete set of main transmission components.",
          b: "These are sources of signal degradation (page 4), not main components of the model itself.",
          d: "Modulation and amplification are functions of the Transmitter, and demodulation is a function of the Receiver (page 4).",
        },
      },
    },
    {
      id: "chapter2-q2",
      text: "Which parameters define a signal in transmission concepts?",
      options: [
        {
          id: "a",
          text: "Amplitude, Frequency, Phase, Period, Wavelength",
        },
        {
          id: "b",
          text: "Amplitude, Bandwidth, Fading",
        },
        {
          id: "c",
          text: "TDM, FDM, CDM",
        },
        {
          id: "d",
          text: "Ground wave, Sky wave, Line of sight",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Page 5 explicitly lists the signal parameters as 'the amplitude A, the frequency f, the phase shift φ, period, and wavelength'.",
        incorrect: {
          b: "Bandwidth is a property of a range of frequencies (page 13), and fading is a propagation effect (page 32), not a fundamental parameter of a single sine wave.",
          c: "These are multiplexing techniques (pages 38-45).",
          d: "These are signal propagation behaviors (page 26).",
        },
      },
    },
    {
      id: "chapter2-q3",
      text: "Why is a signal represented in both time and frequency domains?",
      options: [
        {
          id: "a",
          text: "To visualize how signal amplitude varies over time and its amplitude at different frequencies.",
        },
        {
          id: "b",
          text: "Because the time domain is for analog signals and the frequency domain is for digital signals.",
        },
        {
          id: "c",
          text: "To measure the antenna size needed for transmission.",
        },
        {
          id: "d",
          text: "To show only the period (time domain) and only the bandwidth (frequency domain).",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Page 6 shows this concept. The 'time domain' graph plots amplitude versus time, while the 'frequency domain' graph plots the amplitude (Peak Value) versus frequency.",
        incorrect: {
          b: "This is incorrect; both analog and digital signals can be represented in both domains.",
          c: "Antenna size is related to frequency/wavelength (page 52), but that's not why *both* domains are used for representation.",
          d: "The time domain shows the entire waveform, not just the period. The frequency domain shows the amplitude of specific frequency components, not just the total bandwidth.",
        },
      },
    },
    {
      id: "chapter2-q4",
      text: "Which statement is true about antennas?",
      options: [
        {
          id: "a",
          text: "All real antennas are omni-directional, like the isotropic radiator.",
        },
        {
          id: "b",
          text: "An isotropic radiator is theoretical; real antennas are directive.",
        },
        {
          id: "c",
          text: "A dipole antenna radiates power equally in all 3D directions.",
        },
        {
          id: "d",
          text: "Smart antennas are a theoretical reference and cannot be built.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Page 16 describes the isotropic radiator as a 'Theoretical reference'. Page 17 follows this by stating 'Real antennas are directive', meaning their intensity varies by direction.",
        incorrect: {
          a: "This is false. The isotropic radiator is theoretical (page 16), and many real antennas are highly directional (page 18).",
          c: "A dipole antenna is 'Omni-directional in *one plane*', not in all directions (page 17).",
          d: "Smart antennas are real and combine multiple elements with signal processing (page 21). The *isotropic radiator* is the theoretical reference.",
        },
      },
    },
    {
      id: "chapter2-q5",
      text: "Which statement correctly describes transmission, detection, and interference ranges?",
      options: [
        {
          id: "a",
          text: "Transmission range is the largest, where the signal is strongest.",
        },
        {
          id: "b",
          text: "Detection range is the largest, but the signal has a lot of noise.",
        },
        {
          id: "c",
          text: "All three ranges are equal in a vacuum.",
        },
        {
          id: "d",
          text: "Interference range is the largest, followed by detection, then transmission.",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "The diagram on pages 22-23 shows three concentric circles. The innermost is 'Transmission', the middle is 'Detection', and the outermost is 'Interference'. This shows that the Interference range is the largest.",
        incorrect: {
          a: "Transmission range is the smallest, innermost circle, where a receiver can 'communicate' (page 23).",
          b: "Interference range is the largest, not detection range.",
          c: "The diagram shows three distinct ranges, even while noting the model is 'only valid in a vacuum' (page 23).",
        },
      },
    },
    {
      id: "chapter2-q6",
      text: "What problem does multi-path propagation cause?",
      options: [
        {
          id: "a",
          text: "It causes the signal to follow the Earth's surface, like a ground wave.",
        },
        {
          id: "b",
          text: "It leads to 'delay spread' which can cause Intersymbol Interference (ISI).",
        },
        {
          id: "c",
          text: "It only causes long-term fading, but not short-term fading.",
        },
        {
          id: "d",
          text: "It combines all signals into a single, stronger, clearer signal.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Page 30 shows how multi-path propagation (signals arriving via different paths) leads to 'delay spread'. Page 31 then shows how this 'delay spread' directly causes 'Intersymbol Interference'.",
        incorrect: {
          a: "This describes ground wave propagation (page 27), which is unrelated to multipath.",
          c: "Multipath propagation is a primary cause of *short-term* fading.",
          d: "It causes interference and signal degradation (page 30), not a stronger, clearer signal.",
        },
      },
    },
    {
      id: "chapter2-q7",
      text: "What is the main difference between short-term and long-term fading?",
      options: [
        {
          id: "a",
          text: "Short-term fading is for 'short distances or durations'; long-term fading is for 'long distances or over long time frame'.",
        },
        {
          id: "b",
          text: "Short-term fading is caused by obstacles (shadowing); long-term fading is caused by multipath.",
        },
        {
          id: "c",
          text: "Short-term fading is only for analog signals; long-term fading is for digital signals.",
        },
        {
          id: "d",
          text: "Short-term fading is line-of-sight; long-term fading is sky wave.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Page 32 defines 'Fading' and directly differentiates the two: 'Short term: short distances or durations' and 'Long term: long distances or over long time frame'.",
        incorrect: {
          b: "This is incorrect. Short-term fading is often caused by multipath, while long-term fading is often caused by large obstacles (shadowing).",
          c: "Fading affects both analog and digital signals.",
          d: "These are propagation behaviors (page 27), not types of fading.",
        },
      },
    },
    {
      id: "chapter2-q8",
      text: "What is the primary purpose of multiplexing in wireless communication?",
      options: [
        {
          id: "a",
          text: "To increase the signal's frequency using a carrier wave.",
        },
        {
          id: "b",
          text: "To enable multiple signals to share a single medium efficiently and improve spectrum utilization.",
        },
        {
          id: "c",
          text: "To make the physical antenna size smaller and more practical.",
        },
        {
          id: "d",
          text: "To convert a digital signal into an analog signal for transmission.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Page 37 defines multiplexing as a technique that 'Enables multiple signals to share a single medium efficiently' and 'Improves spectrum utilization'.",
        incorrect: {
          a: "This is the purpose of *modulation* (page 48).",
          c: "This is a key benefit of *modulation* (page 49, 52-55).",
          d: "This is the purpose of *digital modulation* (page 62).",
        },
      },
    },
    {
      id: "chapter2-q9",
      text: "Which of the following is NOT listed as a dimension of multiplexing?",
      options: [
        {
          id: "a",
          text: "Space",
        },
        {
          id: "b",
          text: "Time",
        },
        {
          id: "c",
          text: "Frequency",
        },
        {
          id: "d",
          text: "Amplitude",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Page 37 lists the 'Multiplexing dimensions' as: 'Space, Time, Frequency, Code'. Amplitude is not listed as a dimension.",
        incorrect: {
          a: "Space Division Multiplexing is a listed dimension (page 37-38).",
          b: "Time Division Multiplexing is a listed dimension (page 37, 41).",
          c: "Frequency Division Multiplexing is a listed dimension (page 37, 39).",
        },
      },
    },
    {
      id: "chapter2-q10",
      text: "In Frequency Division Multiplexing (FDM), how are multiple channels separated?",
      options: [
        {
          id: "a",
          text: "By assigning each channel a different time slot on the same frequency.",
        },
        {
          id: "b",
          text: "By using unique orthogonal codes for each channel on the same frequency and time.",
        },
        {
          id: "c",
          text: "By using non-overlapping frequency bands, separated by guard bands, continuously.",
        },
        {
          id: "d",
          text: "By assigning each channel a different physical space (e.g., a different antenna).",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Page 39 defines FDM as dividing the 'frequency spectrum into non-overlapping bands continuously' and notes it 'Requires guard bands'.",
        incorrect: {
          a: "This describes Time Division Multiplexing (TDM) (page 41).",
          b: "This describes Code Division Multiplexing (CDM) (page 45).",
          d: "This describes Space Division Multiplexing (SDM) (page 38).",
        },
      },
    },
    {
      id: "chapter2-q11",
      text: "What distinguishes Code Division Multiplexing (CDM) from Frequency and Time Division Multiplexing?",
      options: [
        {
          id: "a",
          text: "CDM uses time slots, while FDM and TDM use unique codes.",
        },
        {
          id: "b",
          text: "CDM is only for analog signals, while FDM and TDM are for digital signals.",
        },
        {
          id: "c",
          text: "CDM divides the physical space, while FDM and TDM divide the spectrum.",
        },
        {
          id: "d",
          text: "All users share the same frequency and time, but are separated by unique orthogonal codes.",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Page 45 explicitly states that in CDM, 'All users share same frequency and time' and are 'Separated by unique orthogonal codes'. This is different from FDM (dividing frequency) and TDM (dividing time).",
        incorrect: {
          a: "This is the opposite. TDM uses time slots; CDM uses codes.",
          b: "These are all multiplexing techniques applicable to digital communications.",
          c: "Space Division Multiplexing (SDM) divides physical space (page 38).",
        },
      },
    },
    {
      id: "chapter2-q12",
      text: "Which of the following is listed as one of the three types of analog carrier signal modulation techniques?",
      options: [
        {
          id: "a",
          text: "Amplitude Shift Keying (ASK)",
        },
        {
          id: "b",
          text: "Phase Modulation (PM)",
        },
        {
          id: "c",
          text: "Code Division Modulation",
        },
        {
          id: "d",
          text: "Time Division Modulation",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Page 58 lists the 'Three types of analog carrier signal' modulation as '1. Amplitude', '2. Frequency', and '3. Phase'. Phase Modulation (PM) is shown on page 61.",
        incorrect: {
          a: "Amplitude Shift Keying (ASK) is a type of *digital* modulation (page 62).",
          c: "This is not a standard modulation technique; Code Division is a *multiplexing* technique.",
          d: "This is not a standard modulation technique; Time Division is a *multiplexing* technique.",
        },
      },
    },
    {
      id: "chapter2-q13",
      text: "What is the digital modulation technique that transforms a digital signal by varying the frequency of the analog carrier signal?",
      options: [
        {
          id: "a",
          text: "Frequency Modulation (FM)",
        },
        {
          id: "b",
          text: "Phase Shift Keying (PSK)",
        },
        {
          id: "c",
          text: "Amplitude Shift Keying (ASK)",
        },
        {
          id: "d",
          text: "Frequency Shift Keying (FSK)",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Page 62 lists 'Frequency shift keying' as a digital modulation method. The diagram on page 64 (FSK Signal) shows the frequency of the carrier wave changing to represent the digital message signal.",
        incorrect: {
          a: "Frequency Modulation (FM) is the *analog* equivalent (page 60).",
          b: "Phase Shift Keying (PSK) varies the *phase* of the carrier (page 65).",
          c: "Amplitude Shift Keying (ASK) varies the *amplitude* of the carrier (page 63).",
        },
      },
    },
    {
      id: "chapter2-q14",
      text: "In the communication model, what is the primary function of the Input Transducer?",
      options: [
        {
          id: "a",
          text: "To modulate or amplify the signal for transmission.",
        },
        {
          id: "b",
          text: "To convert the original information into an electric form.",
        },
        {
          id: "c",
          text: "To select the wired or wireless medium for the signal.",
        },
        {
          id: "d",
          text: "To convert the received signal back into its original information form.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The Input Transducer's role is to take the information from the source and convert it into an electric form, as shown by the label 'Become electric form' on page 4.",
        incorrect: {
          a: "Modulating or amplifying is the function of the Transmitter (page 4).",
          c: "The 'Channel or Medium' is the medium itself, not a function of the transducer (page 4).",
          d: "Converting the signal back to its original form is the job of the Output Transducer (page 4).",
        },
      },
    },
    {
      id: "chapter2-q15",
      text: "According to the communication model, what component is responsible for 'Modulator or amplifying' the signal?",
      options: [
        {
          id: "a",
          text: "Input Transducer",
        },
        {
          id: "b",
          text: "Transmitter",
        },
        {
          id: "c",
          text: "Receiver",
        },
        {
          id: "d",
          text: "Channel or Medium",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The Transmitter is labeled with the function 'Modulator or amplifying' on the diagram (page 4).",
        incorrect: {
          a: "The Input Transducer converts the signal to an electric form (page 4).",
          c: "The Receiver demodulates the signal (page 4).",
          d: "The Channel or Medium is what the signal travels through (page 4).",
        },
      },
    },
    {
      id: "chapter2-q16",
      text: "What component in the communication model is responsible for 'Demodulator extracting original content'?",
      options: [
        {
          id: "a",
          text: "Transmitter",
        },
        {
          id: "b",
          text: "Receiver",
        },
        {
          id: "c",
          text: "Output Transducer",
        },
        {
          id: "d",
          text: "Information Source",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The Receiver is pointed to with the description 'Demodulator extracting original content' (page 4).",
        incorrect: {
          a: "The Transmitter modulates or amplifies the signal (page 4).",
          c: "The Output Transducer converts the electric signal 'Back to original form' (page 4).",
          d: "The Information Source provides the initial information (page 4).",
        },
      },
    },
    {
      id: "chapter2-q17",
      text: "What is the correct mathematical relationship between Period (T) and Frequency (f) of a sine wave?",
      options: [
        {
          id: "a",
          text: "T = f",
        },
        {
          id: "b",
          text: "T = 1 + f",
        },
        {
          id: "c",
          text: "T = 1 / f",
        },
        {
          id: "d",
          text: "T = f^2",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Page 5 explicitly states and shows in a diagram that the period T is the inverse of the frequency f, or T = 1/f.",
        incorrect: {
          a: "Period and frequency are inversely related, not equal.",
          b: "This is not the correct relationship.",
          d: "This is not the correct relationship.",
        },
      },
    },
    {
      id: "chapter2-q18",
      text: "If a signal has a Time Period of 1/4 seconds, what is its frequency?",
      options: [
        {
          id: "a",
          text: "0.25 Hz",
        },
        {
          id: "b",
          text: "1 Hz",
        },
        {
          id: "c",
          text: "8 Hz",
        },
        {
          id: "d",
          text: "4 Hz",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Frequency is the inverse of the period (f = 1/T). Therefore, f = 1 / (1/4) = 4 Hz. This is confirmed in the example on pages 9-10.",
        incorrect: {
          a: "0.25 Hz would be the frequency if the period was 4 seconds.",
          b: "1 Hz would be the frequency if the period was 1 second.",
          c: "8 Hz is the amplitude (Peak Value) in the example, not the frequency (page 10).",
        },
      },
    },
    {
      id: "chapter2-q19",
      text: "What concept demonstrates that a complex waveform can be decomposed into a sum of simple sine waves?",
      options: [
        {
          id: "a",
          text: "Fourier transformation",
        },
        {
          id: "b",
          text: "Amplitude modulation",
        },
        {
          id: "c",
          text: "Intersymbol interference",
        },
        {
          id: "d",
          text: "Path loss",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Page 11 is titled 'Fourier transformation' and shows a complex wave being broken down into component sine waves (f, 3f, 9f), which are then plotted in the frequency domain on page 12.",
        incorrect: {
          b: "Amplitude modulation is a technique for encoding information onto a carrier wave (page 59).",
          c: "Intersymbol interference is a propagation problem where signal pulses overlap (page 31).",
          d: "Path loss refers to the reduction in signal power over distance (page 25).",
        },
      },
    },
    {
      id: "chapter2-q20",
      text: "How is Bandwidth (BW) defined in the presentation?",
      options: [
        {
          id: "a",
          text: "The center frequency of the channel.",
        },
        {
          id: "b",
          text: "The difference between the upper ($f_U$) and lower ($f_L$) frequencies of a range.",
        },
        {
          id: "c",
          text: "The peak amplitude of a signal.",
        },
        {
          id: "d",
          text: "The inverse of the time period ($1/T$).",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Page 13 states 'Bandwidth is differences between frequency range', and page 14 provides the formula $BW = f_U - f_L$.",
        incorrect: {
          a: "The center frequency is just a point within the band, not the width of the band (page 15).",
          c: "The peak amplitude is a measure of signal strength, not frequency range (page 6).",
          d: "The inverse of the time period is the frequency, not the bandwidth (page 5).",
        },
      },
    },
    {
      id: "chapter2-q21",
      text: "According to the table on page 13, what is the bandwidth of a 'Speech Signal (for telephone)'?",
      options: [
        {
          id: "a",
          text: "300 Hz",
        },
        {
          id: "b",
          text: "3400 Hz",
        },
        {
          id: "c",
          text: "3100 Hz",
        },
        {
          id: "d",
          text: "5 MHz",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "The table on page 13 lists the bandwidth for a 'Speech Signal' as '3100' Hz. This is the result of the frequency range 3400 Hz (upper) - 300 Hz (lower).",
        incorrect: {
          a: "300 Hz is the lower bound of the frequency range.",
          b: "3400 Hz is the upper bound of the frequency range.",
          d: "5 MHz is the bandwidth listed for a 'TV Signal (Picture)'.",
        },
      },
    },
    {
      id: "chapter2-q22",
      text: "A $\\lambda/2$ dipole antenna is described as being:",
      options: [
        {
          id: "a",
          text: "Omni-directional in one plane",
        },
        {
          id: "b",
          text: "Perfectly isotropic (radiating equally in all directions)",
        },
        {
          id: "c",
          text: "Highly directional for focusing signals",
        },
        {
          id: "d",
          text: "A theoretical reference antenna",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Page 17 explicitly states that a 'Dipole antenna ($\\lambda/2$ dipole)' is 'Omni-directional in one plane'.",
        incorrect: {
          b: "An isotropic radiator radiates equally in all directions (page 16); a dipole is only omni-directional in one plane.",
          c: "Directional antennas focus signals (page 18); a dipole is omni-directional in a plane.",
          d: "The isotropic radiator is the theoretical reference (page 16).",
        },
      },
    },
    {
      id: "chapter2-q23",
      text: "What type of antenna combines several directed antennas on a single pole to enable frequency reuse in cellular networks?",
      options: [
        {
          id: "a",
          text: "Isotropic radiator",
        },
        {
          id: "b",
          text: "Dipole antenna",
        },
        {
          id: "c",
          text: "Directional antenna",
        },
        {
          id: "d",
          text: "Sectorized Antenna",
        },
      ],
      correctOptionId: "d",
      explanation: {
        correct:
          "Page 19 defines a 'Sectorized Antenna' as 'Combining several directed antennas on a single pole' and notes that it 'Enable[s] frequency reuse'.",
        incorrect: {
          a: "An isotropic radiator is a theoretical reference (page 16).",
          b: "A dipole antenna is a single element, typically omni-directional in one plane (page 17).",
          c: "A directional antenna is a single antenna that focuses a signal (page 18), while a sectorized antenna combines several of them.",
        },
      },
    },
    {
      id: "chapter2-q24",
      text: "What is a 'Smart antenna'?",
      options: [
        {
          id: "a",
          text: "An antenna that combines multiple elements with signal processing to optimize its pattern.",
        },
        {
          id: "b",
          text: "A theoretical antenna that radiates equally in all directions.",
        },
        {
          id: "c",
          text: "A single-element $\\lambda/4$ antenna efficient for cars.",
        },
        {
          id: "d",
          text: "An antenna that only uses 'Switched/Selection Diversity'.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Page 21 defines 'Smart antennas' as those that 'combine multiple antenna elements with signal processing' to 'Optimize the radiation/reception pattern'.",
        incorrect: {
          b: "This is an 'isotropic radiator' (page 16).",
          c: "This is just an example of a simple antenna type (page 17).",
          d: "Switched diversity is a simpler technique (page 20), while smart antennas use more complex signal processing to 'Optimize' the pattern.",
        },
      },
    },
    {
      id: "chapter2-q25",
      text: "In the signal propagation model, the range where the signal is 'detectable with error rate (e.g. noise)' is called the:",
      options: [
        {
          id: "a",
          text: "Transmission range",
        },
        {
          id: "b",
          text: "Detection range",
        },
        {
          id: "c",
          text: "Interference range",
        },
        {
          id: "d",
          text: "Vacuum range",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The middle ring in the diagram on pages 22-23 is labeled 'Detection' and described as the area where the 'Signal is detectable with error rate (e.g. noise)'.",
        incorrect: {
          a: "The 'Transmission' range is the inner circle, where a 'Receiver can communicate' (page 23).",
          c: "The 'Interference' range is the outer area where the 'Signal is not detectable with a lot of noises' (page 23).",
          d: "The entire model is described as being 'only valid in a vacuum' (page 23), which is a condition, not a range.",
        },
      },
    },
    {
      id: "chapter2-q26",
      text: "Why is 'Real' signal coverage shown as an irregular shape on page 24?",
      options: [
        {
          id: "a",
          text: "Because it represents the 'Ideal' model, which is a perfect circle.",
        },
        {
          id: "b",
          text: "Because 'Fictitious' cells are hexagonal, forcing the real ones to be irregular.",
        },
        {
          id: "c",
          text: "Because 'Real' coverage is affected by obstacles, terrain, and buildings.",
        },
        {
          id: "d",
          text: "Because real signals are only transmitted in a vacuum.",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "The 'Real' shape is irregular because real-world propagation is affected by propagation effects (page 28-29) and obstacles like 'terrain, buildings, valleys' (mentioned on page 18) which are not present in the 'Ideal' model.",
        incorrect: {
          a: "The 'Ideal' model is a perfect circle, but the 'Real' model is irregular because it is *not* ideal.",
          b: "The 'Fictitious' hexagonal cells are a simplified model for planning, not the cause of real-world irregularity.",
          d: "The simple 'Ideal' model is the one described as 'only valid in a vacuum' (page 23), implying the real one is not.",
        },
      },
    },
    {
      id: "chapter2-q27",
      text: "Which fundamental propagation behavior is used for mobile phone systems and satellite systems (frequencies > 30 MHz)?",
      options: [
        {
          id: "a",
          text: "Ground wave",
        },
        {
          id: "b",
          text: "Sky wave",
        },
        {
          id: "c",
          text: "Line of sight",
        },
        {
          id: "d",
          text: "Shadowing",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "The table on page 27 states that 'Line of sight' propagation is used for frequencies '> 30 MHz' and its use cases include 'Mobile phone systems, satellite systems'.",
        incorrect: {
          a: "Ground wave is for '< 2 MHz' (e.g., AM radio) (page 27).",
          b: "Sky wave is for '2-30 MHz' (e.g., international broadcasts) (page 27).",
          d: "Shadowing is a propagation *effect* (an impairment) (page 28), not a fundamental propagation behavior.",
        },
      },
    },
    {
      id: "chapter2-q28",
      text: "What propagation behavior, used for amateur radio and international broadcasts, works by bouncing signals off the ionosphere?",
      options: [
        {
          id: "a",
          text: "Ground wave",
        },
        {
          id: "b",
          text: "Sky wave",
        },
        {
          id: "c",
          text: "Line of sight",
        },
        {
          id: "d",
          text: "Reflection",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "The table on page 27 describes the 'Sky wave' as 'bounce[ing] back and forth between the ionosphere and the earth's surface' and lists 'international broadcasts and amateur radio' as use cases.",
        incorrect: {
          a: "Ground wave follows the earth's surface (page 27).",
          c: "Line of sight travels in a straight line (page 27).",
          d: "Reflection is a general effect (page 28), while 'Sky wave' is the specific name for this propagation behavior involving the ionosphere.",
        },
      },
    },
    {
      id: "chapter2-q29",
      text: "What propagation *effect* is described as 'Attenuation due to large obstacles'?",
      options: [
        {
          id: "a",
          text: "Reflection",
        },
        {
          id: "b",
          text: "Refraction",
        },
        {
          id: "c",
          text: "Blocking/Shadowing",
        },
        {
          id: "d",
          text: "Diffraction",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Page 28 defines 'Blocking/Shadowing' as 'Attenuation due to large obstacles'.",
        incorrect: {
          a: "Reflection is when a wave bounces off a large object (page 28).",
          b: "Refraction is when a wave bends as it passes through different media (page 28).",
          d: "Diffraction is when a wave is deflected at an edge (page 29).",
        },
      },
    },
    {
      id: "chapter2-q30",
      text: "Which multiplexing technique is described as having 'Built-in security' because the signal is useless to a receiver without the secret code?",
      options: [
        {
          id: "a",
          text: "Time Division Multiplexing (TDM)",
        },
        {
          id: "b",
          text: "Frequency Division Multiplexing (FDM)",
        },
        {
          id: "c",
          text: "Code Division Multiplexing (CDM)",
        },
        {
          id: "d",
          text: "Space Division Multiplexing (SDM)",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Page 46 states that 'Code Division Multiplexing' has 'Built-in security' because 'By using a secret code (or language), a secure channel can be established'.",
        incorrect: {
          a: "TDM security is not mentioned; anyone synchronized to the time slot could listen.",
          b: "FDM security is not mentioned; anyone tuned to the frequency could listen.",
          d: "SDM relies on physical separation, not code security (page 38).",
        },
      },
    },
    {
      id: "chapter2-q31",
      text: "What is modulation?",
      options: [
        {
          id: "a",
          text: "The process of putting a low-frequency message signal onto a high-frequency carrier signal.",
        },
        {
          id: "b",
          text: "The process of sharing a single medium among multiple users.",
        },
        {
          id: "c",
          text: "The fluctuation of signal strength due to a moving receiver.",
        },
        {
          id: "d",
          text: "The decomposition of a complex wave into simple sine waves.",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Page 48 shows a 'Message Signal (Low Frequency)' being combined with a 'Carrier Signal (High Frequency)' in a process called 'MODULATION'.",
        incorrect: {
          b: "This is multiplexing (page 37).",
          c: "This is fading (page 32).",
          d: "This is Fourier transformation (page 11).",
        },
      },
    },
    {
      id: "chapter2-q32",
      text: "Which of the following is listed as a primary reason for the 'Importance of modulation'?",
      options: [
        {
          id: "a",
          text: "Controlling antenna size",
        },
        {
          id: "b",
          text: "Increasing Intersymbol Interference",
        },
        {
          id: "c",
          text: "Enabling Sky wave propagation",
        },
        {
          id: "d",
          text: "Creating isotropic radiators",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Page 49 lists the 'Importance of modulation' and includes three factors: 'Interference', 'Frequency Multiplexing', and 'Antenna size'.",
        incorrect: {
          b: "Intersymbol interference is a problem (page 31), not a goal.",
          c: "Sky wave is a propagation type (page 27), but controlling antenna size and multiplexing are the key reasons given.",
          d: "Isotropic radiators are theoretical reference points (page 16).",
        },
      },
    },
    {
      id: "chapter2-q33",
      text: "Why is modulation necessary regarding antenna size?",
      options: [
        {
          id: "a",
          text: "It makes the antenna size larger, which is more powerful.",
        },
        {
          id: "b",
          text: "It allows for a practical, small antenna by using a high-frequency carrier (which has a short wavelength).",
        },
        {
          id: "c",
          text: "It eliminates the need for an antenna.",
        },
        {
          id: "d",
          text: "It ensures the antenna is omni-directional.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Pages 52-55 explain that antenna size is proportional to wavelength ($lambda$), and $lambda = c/f$. A low-frequency signal (e.g., 3400 Hz) would require a massive 88,235m antenna. By modulating onto a high-frequency carrier (e.g., 5 GHz), the wavelength becomes tiny (6cm), allowing for a small, practical antenna.",
        incorrect: {
          a: "A smaller, practical antenna is the goal, not a larger one.",
          c: "Modulation makes transmission *possible* with a practical antenna, it doesn't eliminate it.",
          d: "The antenna *type* (e.g., dipole, directional) determines its directionality, not modulation itself (page 17).",
        },
      },
    },
    {
      id: "chapter2-q34",
      text: "According to the calculation on page 53, what antenna size would be needed to transmit a 3400 Hz signal directly?",
      options: [
        {
          id: "a",
          text: "6 cm",
        },
        {
          id: "b",
          text: "88235 m",
        },
        {
          id: "c",
          text: "0.06 m",
        },
        {
          id: "d",
          text: "3400 m",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Page 53 explicitly calculates the wavelength for a 3400 Hz signal: $lambda = (3 \times 10^8) / 3400 = 88235$ m, and exclaims that this size is needed.",
        incorrect: {
          a: "6 cm is the calculated size for a 5 GHz signal (page 55).",
          c: "0.06 m is the same as 6 cm, the size for a 5 GHz signal (page 55).",
          d: "This value is not part of the calculation.",
        },
      },
    },
    {
      id: "chapter2-q35",
      text: "What antenna size is calculated for a 5 GHz ($5 \times 10^9$ Hz) signal?",
      options: [
        {
          id: "a",
          text: "88235 m",
        },
        {
          id: "b",
          text: "5 m",
        },
        {
          id: "c",
          text: "0.06 m (or 6 cm)",
        },
        {
          id: "d",
          text: "5.895 m",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Page 55 calculates the wavelength for a $5 \times 10^9$ Hz signal: $lambda = (3 \times 10^8) / (5 \times 10^9) = 0.06$ m, which is 6 cm.",
        incorrect: {
          a: "88235 m is the calculated size for a 3400 Hz signal (page 53).",
          b: "This value is not part of the calculation.",
          d: "This value is not part of the calculation.",
        },
      },
    },
    {
      id: "chapter2-q36",
      text: "What are the two main 'Type[s] of modulation' listed on page 57?",
      options: [
        {
          id: "a",
          text: "Time and Frequency",
        },
        {
          id: "b",
          text: "Multiplexing and Demultiplexing",
        },
        {
          id: "c",
          text: "Analog and Digital",
        },
        {
          id: "d",
          text: "Transmitter and Receiver",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "Page 57 shows a diagram where 'Type of modulation' branches into 'Analog modulation' and 'Digital modulation'.",
        incorrect: {
          a: "Time and Frequency are *dimensions* for multiplexing (page 37) or *parameters* varied in modulation (page 58).",
          b: "Multiplexing is a different concept (page 37), and demultiplexing is its inverse.",
          d: "Transmitter and Receiver are components of the communication model (page 4).",
        },
      },
    },
    {
      id: "chapter2-q37",
      text: "What are the three types of analog modulation, based on which property of the carrier signal is varied?",
      options: [
        {
          id: "a",
          text: "Amplitude (AM), Frequency (FM), and Phase (PM)",
        },
        {
          id: "b",
          text: "Amplitude Shift (ASK), Frequency Shift (FSK), and Phase Shift (PSK)",
        },
        {
          id: "c",
          text: "Time (TDM), Frequency (FDM), and Code (CDM)",
        },
        {
          id: "d",
          text: "Ground, Sky, and Line of Sight",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "Page 58, under 'MODULATION (ANALOG)', lists the three types as: '1. Amplitude', '2. Frequency', and '3. Phase'. These are shown in diagrams on pages 59-61.",
        incorrect: {
          b: "ASK, FSK, and PSK are the three types of *digital* modulation listed on page 62.",
          c: "These are multiplexing techniques (page 37).",
          d: "These are signal propagation behaviors (page 26).",
        },
      },
    },
    {
      id: "chapter2-q38",
      text: "What is the goal of digital modulation?",
      options: [
        {
          id: "a",
          text: "To modulate using an analog message signal.",
        },
        {
          id: "b",
          text: "To transform a digital signal into an analog signal for transmission.",
        },
        {
          id: "c",
          text: "To convert an analog signal into a digital signal.",
        },
        {
          id: "d",
          text: "To separate users by unique orthogonal codes.",
        },
      ],
      correctOptionId: "b",
      explanation: {
        correct:
          "Page 62, under 'MODULATION (DIGITAL)', states its purpose is to 'Transform digital signal into analog'. The diagrams on pages 63-65 show a digital 'Message Signal' being used to create an analog 'ASK/FSK/PSK Signal'.",
        incorrect: {
          a: "This describes *analog* modulation, which uses an analog message signal (pages 59-61).",
          c: "This would be analog-to-digital conversion (ADC), which happens before the digital modulation step.",
          d: "This is the definition of Code Division Multiplexing (CDM) (page 45).",
        },
      },
    },
    {
      id: "chapter2-q39",
      text: "Which digital modulation technique varies the amplitude of the carrier wave to represent digital data?",
      options: [
        {
          id: "a",
          text: "Amplitude Shift Keying (ASK)",
        },
        {
          id: "b",
          text: "Frequency Shift Keying (FSK)",
        },
        {
          id: "c",
          text: "Phase Shift Keying (PSK)",
        },
        {
          id: "d",
          text: "Amplitude Modulation (AM)",
        },
      ],
      correctOptionId: "a",
      explanation: {
        correct:
          "'Amplitude Shift Keying' (page 63) shows the amplitude of the 'Carrier Signal' being changed (in this case, set to zero for a '0' bit) to match the digital 'Message Signal'.",
        incorrect: {
          b: "FSK varies the frequency (page 64).",
          c: "PSK varies the phase (page 65).",
          d: "AM is the *analog* equivalent (page 59), while ASK is the *digital* method.",
        },
      },
    },
    {
      id: "chapter2-q40",
      text: "Which digital modulation technique, shown on page 65, varies the phase of the carrier wave to represent digital data?",
      options: [
        {
          id: "a",
          text: "Amplitude Shift Keying (ASK)",
        },
        {
          id: "b",
          text: "Frequency Shift Keying (FSK)",
        },
        {
          id: "c",
          text: "Phase Shift Keying (PSK)",
        },
        {
          id: "d",
          text: "Phase Modulation (PM)",
        },
      ],
      correctOptionId: "c",
      explanation: {
        correct:
          "'Phase Shift Keying' (page 65) shows the phase of the 'Carrier Signal' being inverted (shifted by 180 degrees) to match the 'Message Signal' (e.g., when the bit changes from 1 to 0).",
        incorrect: {
          a: "ASK varies the amplitude (page 63).",
          b: "FSK varies the frequency (page 64).",
          d: "PM is the *analog* equivalent (page 61), while PSK is the *digital* method.",
        },
      },
    },
  ],
};
