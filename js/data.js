/* Shared content. Edit data here. */
const PROFILE = {
  name: "Yang Gao",
  role: "PhD student \u00B7 Computational Science &amp; Engineering @ Georgia Tech",
  email: ["ygao492@gatech.edu", "yang.gao61@outlook.com"],
  github: "https://github.com/yanggao04",
  links: [
    { label: "Advisor: S. Vishwanath", url: "https://ece.gatech.edu/directory/sriram-vishwanath" },
  ],
};

const ABOUT = [
  "I'm a PhD student in the School of Electrical and Computer Engineering at Georgia Tech, advised by " +
    "Prof. Sriram Vishwanath. My work centers on AI with verification and high-performance computing, and on decentralized AI.",
  "I earned master's and bachelor's degrees from the University of Oxford, majoring in mathematics and " +
    "computer science, with a focus on the intersection of concurrency, formal methods, and game theory, as well as collective decision making.",
];

const EDUCATION = [
  { title: "PhD, Computational Science and Engineering", org: "Georgia Institute of Technology",
    date: "Aug 2026 \u2013 Present", tag: "Advised by Sriram Vishwanath" },
  { title: "MSc, Mathematics and Computer Science", org: "University of Oxford",
    date: "Oct 2022 \u2013 Jul 2026", tag: "First Class Degree" },
];

const EXPERIENCE = [
  { title: "Research Intern", org: "Sunblaze Lab, UC Berkeley", date: "May 2025 \u2013 Sep 2025" },
  { title: "Programming Language Intern Engineer", org: "Huawei Technologies", date: "Jul 2024 \u2013 Sep 2024" },
  { title: "HPC Intern Engineer", org: "National Supercomputing Center, Shenzhen", date: "Mar 2024 \u2013 Apr 2024" },
  { title: "R&D Intern Engineer", org: "DigApis Technologies", date: "Jun 2023 \u2013 Sep 2023" },
];

const PROJECTS = [
  { title: "Model Checking Multi-Agent Stochastic Games with Imperfect Information",
    date: "Feb 2025 \u2013 Apr 2026", url: null,
    desc: [
      "Study logic languages such as Alternating-time Temporal Logic (ATL) and Probabilistic ATL;",
      "Investigate model-checking methods for (Partially Observable) MDPs and Concurrent Stochastic Games;",
      "Design models for concurrent stochastic games with imperfect information and algorithms from existing complexity results.",
    ] },
  { title: "Verina: Benchmarking Verifiable Code Generation",
    date: "May 2025 \u2013 Sep 2025",
    url: "https://github.com/sunblaze-ucb/verina",
    desc: [
      "Contribute to verification benchmarks for generative LLMs, incl. Lean sample code and LLM pipelines;",
      "Debug API and prompting issues in automated benchmarking for DeepSeek Prover;",
      "Analyze generated outputs and factors in the training set.",
    ] },
  { title: "JavaScript Runtime High-Level Optimization",
    date: "Jul 2024 \u2013 Sep 2024", url: null,
    desc: [
      "Understand VM and JIT-compiler architectures and optimising passes;",
      "Explore speculative optimisation, function inlining, sea-of-nodes IR, feedback lattices;",
      "Test V8 builds, compare IRs and instruction selection in V8 TurboFan and ArkVM.",
    ] },
  { title: "OxFolder: Semantic Analyser Web Application",
    date: "Feb 2024 \u2013 May 2024", url: null,
    desc: [
      "Gather product requirements via client meetings, build Flask backend and APIs;",
      "Optimise embedding generation and similarity-computation algorithms;",
      "Won the Department of Computer Science Group Project Prize 2024.",
    ] },
  { title: "Tracer: Thread Monitor via eBPF",
    date: "Jun 2023 \u2013 Sep 2023",
    url: "https://github.com/yanggao04/Extended-Implementation-of-eBPF-Bootstrap",
    desc: [
      "Study x86_64 data formats, instruction sets, and hardware implementations, plus extended BPF;",
      "Develop a kernel-space thread monitor using libbpf-bootstrap.",
    ] },
];

const PUBLICATIONS = [
  { authors: "Y. Gao", title: "Model Checking PATL under Imperfect Information",
    source: "Master Thesis", year: "2026", url: null },
];

/* Optional: papers on home page. Defaults to PUBLICATIONS. */
const HOME_PUBLICATIONS = PUBLICATIONS;
