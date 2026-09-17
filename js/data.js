/* Shared content. Edit data here. */
const PROFILE = {
  name: "Yang Gao",
  role: "PhD \u00B7 Computational Science &amp; Engineering @ Georgia Tech",
  email: ["ygao492@gatech.edu", "yang.gao61@outlook.com"],
  github: "https://github.com/yanggao04",
  linkedin: "https://www.linkedin.com/in/yang-gao-40573a159/",
  links: [],
};

const ABOUT = [
  "I'm a PhD student in the School of Electrical and Computer Engineering at Georgia Tech, advised by " +
    "Prof. <a href=\"https://ece.gatech.edu/directory/sriram-vishwanath\" target=\"_blank\" rel=\"noopener\">Sriram Vishwanath</a>. " +
    "My work centers on AI with verification and high-performance computing, and on decentralized AI.",
  "I earned master's and bachelor's degrees from the University of Oxford, majoring in mathematics and " +
    "computer science, with a focus on the intersection of concurrency, formal methods, and game theory, as well as collective decision making.",
];

const EDUCATION = [
  { title: "PhD, Computational Science and Engineering", org: "Georgia Institute of Technology",
    date: "Aug 2026 \u2013 Present",
    tag: "Advised by <a href=\"https://ece.gatech.edu/directory/sriram-vishwanath\" target=\"_blank\" rel=\"noopener\">Sriram Vishwanath</a>" },
  { title: "MSc, Mathematics and Computer Science", org: "University of Oxford",
    date: "Oct 2022 \u2013 Jul 2026", tag: null },
];

const EXPERIENCE = [
  { title: "Graduate Research and Teaching Assistant", org: "Georgia Institute of Technology", date: "Aug 2026 \u2013 Present" },
  { title: "Research Intern", org: "Sunblaze Lab, UC Berkeley", date: "May 2025 \u2013 Sep 2025" },
  { title: "Programming Language Intern Engineer", org: "Huawei Technologies", date: "Jul 2024 \u2013 Sep 2024" },
  { title: "HPC Intern Engineer", org: "National Supercomputing Center, Shenzhen", date: "Mar 2024 \u2013 Apr 2024" },
  { title: "R&D Intern Engineer", org: "DigApis Technologies", date: "Jun 2023 \u2013 Sep 2023" },
];

const PROJECTS = [
  { title: "Masked Language Modeling and Investigation of FactorGraph Transformer Architecture",
    date: "May 2026 \u2013 Present", url: null,
    desc: [
      "Understand the basic architecture and codebase of a new transformer architecture: FactorGraph Transformer (FGT);",
      "Build an MLM training schema and carry out pretraining for FGT and a vanilla transformer to compare performance and utility;",
      "Analyze training outcomes and give constructive suggestions.",
    ] },
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

const AWARDS = [
  { title: "President's Fellowship", org: "Georgia Institute of Technology", date: "2026" },
  { title: "Otto F. and Jenny H. Krauss Fellowship", org: "Georgia Institute of Technology", date: "2026" },
  { title: "Mary Somerville Prize", org: "Somerville College, University of Oxford", date: "2026" },
  { title: "Distinction in Master", org: "University of Oxford", date: "2026" },
  { title: "First Class Degree in Part A/B", org: "University of Oxford", date: "2025" },
  { title: "Department of Computer Science Group Project Prize", org: "University of Oxford", date: "2024" },
  { title: "Distinction in Prelims", org: "University of Oxford", date: "2023" },
];

/* Research write-ups. "blocks" are rendered in order and may interleave prose and figures:
   { p: "paragraph text" }  |  { fig: { src, caption, small? } }  */
const RESEARCH = [
  {
    title: "FactorGraph Transformer: A Factor-Graph-Based MLM Architecture",
    meta: "Collaboration \u00B7 Ongoing",
    blocks: [
      { p:
        "A factor graph is a bipartite graph that represents the factorization of a function. " +
        "Variable nodes (circles) are connected to factor nodes (squares), and each factor encodes " +
        "a local function of the variables it touches. In probabilistic modelling a factor graph " +
        "expresses how a joint distribution factorises, which lets marginals be computed " +
        "efficiently with message passing (for example the sum\u2013product algorithm) " +
        "[Kschischang et al., 2001; Wikipedia contributors, 2024]." },
      { fig: { src: "assets/research/factorgraph.png", small: true,
        alt: "A factor graph with variable nodes (circles) and factor nodes (squares).",
        caption: "A factor graph: variable nodes (circles) and factor nodes (squares), each " +
          "factor a local function of its neighbouring variables. Image: " +
          "<a href=\"https://commons.wikimedia.org/wiki/File:Factor_graph.png\" target=\"_blank\" rel=\"noopener\">\u201CFactor graph\u201D by Kibblebrain</a>, " +
          "Wikimedia Commons, CC0 1.0." } },
      { p:
        "This project investigates a new masked language modeling (MLM) architecture that applies " +
        "factor-graph structure to the transformer. Standard self-attention models token " +
        "interactions as pairwise, whereas a factor graph can represent higher-order and structured " +
        "dependencies among variables, giving the model a different inductive bias for language " +
        "modeling." },
      { p:
        "The work involves building the pretraining pipeline and training schema for the " +
        "architecture, and then pretraining it alongside a vanilla transformer baseline under " +
        "matched settings to compare quality, stability, and efficiency." },
      { p:
        "Specific architectural and training details are withheld while the work is ongoing. The " +
        "broader goal is to understand when structured factor-graph attention helps over the " +
        "standard transformer, and how well it scales under parallel and distributed training." },
    ],
  },
  {
    title: "Model Checking PATL under Imperfect Information",
    meta: "Master Thesis \u00B7 University of Oxford \u00B7 2025\u20132026",
    blocks: [
      { p:
        "Multi-agent systems rarely have complete information about their environment. When agents " +
        "act simultaneously, transitions are probabilistic, and each agent perceives only part of " +
        "the state, it becomes difficult to reason about what a coalition of agents can guarantee. " +
        "This thesis studies exactly that setting: model checking Probabilistic Alternating-time " +
        "Temporal Logic (PATL) [Alur et al., 2002] over concurrent stochastic games with imperfect " +
        "information." },
      { p:
        "Imperfect information changes the problem fundamentally. A strategy that is optimal in one " +
        "state can be arbitrary in another state that the agent cannot distinguish from the first, " +
        "so values are no longer obtained by simply combining the players' individual optima. The " +
        "small game below illustrates why the usual minimax reasoning breaks down." },
      { fig: { src: "assets/research/fig1.png", small: true,
        caption: "A two-player game showing that, under imperfect information, the value of a " +
          "coalition is not the minimax of its members (non-zero-sum behaviour)." } },
      { p:
        "Because the problem is undecidable in general [Dima and Tiplea, 2011], the thesis develops " +
        "an approximating algorithm instead of an exact one. The construction proceeds in two steps. " +
        "The game is first lifted into a belief CSG, which preserves satisfiability of the formula " +
        "while making the state observable; the continuous belief space is then discretised into a " +
        "finite CSG that standard probabilistic model-checking algorithms can solve by value " +
        "iteration [Kwiatkowska et al., 2018; Chen et al., 2013]." },
      { p:
        "The approach is exercised on a robot navigating a 3\u00D72 plane, where motion is imprecise " +
        "and a horizontal gust acts as an adversarial second player. The figure below shows the " +
        "resulting concurrent stochastic game decomposed by action set, which is then checked for " +
        "bounded and unbounded reachability." },
      { fig: { src: "assets/research/fig2.png",
        caption: "The robot-locomotion-in-the-wind case study: the concurrent stochastic game " +
          "decomposed by action set." } },
      { p:
        "The case study also exposes the limits of the method. Unlike POMDP discretisation " +
        "[Yu and Bertsekas, 2004; Norman et al., 2017], convergence is no longer monotonic, and " +
        "merging players can expand the action space substantially, so the algorithm is tractable " +
        "mainly when observation classes are small or disjoint. Under memoryless strategies the " +
        "problem becomes decidable, for instance \u0394\u00B2p-complete [Belardinelli et al., 2023] " +
        "and in EXPTIME [Belardinelli et al., 2024]." },
    ],
  },
  {
    title: "JavaScript VM Runtime and JIT Optimisation",
    meta: "Huawei Technologies \u00B7 2024",
    blocks: [
      { p:
        "A virtual machine (VM) is a software abstraction of a computer: instead of executing " +
        "native code directly, it runs a program written in an intermediate instruction set. In a " +
        "language runtime such as a JavaScript engine, the VM executes the engine's bytecode and " +
        "manages memory, objects, and calls on behalf of the program [Wikipedia contributors, 2024]." },
      { p:
        "A typical process VM has four cooperating parts. A loader and parser turn source code into " +
        "bytecode; an interpreter executes that bytecode one instruction at a time; one or more " +
        "compilers translate frequently executed (\u201Chot\u201D) bytecode into optimised machine " +
        "code; and a runtime system supplies garbage collection, the object model, and standard " +
        "libraries." },
      { fig: { src: "assets/research/js-vm.svg",
        alt: "Composition of a JavaScript virtual machine: parser, bytecode generator, interpreter, profiler, optimizing JIT, runtime.",
        caption: "Simplified composition of the Google V8 JavaScript engine: a parser and bytecode " +
          "generator feed an interpreter (Ignition); a profiler drives an optimizing JIT (TurboFan) " +
          "whose machine code can be deoptimised back to the interpreter. Runtime services \u2014 " +
          "heap and garbage collector, object model, call stack, built-ins and host APIs \u2014 sit " +
          "underneath. Other tiers (baseline JIT, concurrent GC) are omitted. Original diagram." } },
      { p:
        "A runtime JIT (just-in-time) compiler runs inside the VM and translates bytecode into " +
        "machine code while the program executes. It trades compilation time for faster execution " +
        "and relies on profiling feedback to apply speculative optimisations such as function " +
        "inlining and type specialisation; if an assumption later fails, the VM deoptimises and " +
        "falls back to the interpreter [Aycock, 2003; Wikipedia contributors, 2024]." },
      { fig: { src: "assets/research/jit-compilation.png",
        alt: "Diagram of how just-in-time compilation works.",
        caption: "Interpreter and compiler flow in a just-in-time system. Image: " +
          "<a href=\"https://commons.wikimedia.org/wiki/File:How_JIT_Compilation_works.svg\" target=\"_blank\" rel=\"noopener\">Arun Reginald</a>, " +
          "Wikimedia Commons, CC BY-SA 3.0." } },
    ],
  },
];

/* Research page intro. */
const RESEARCH_INTRO =
  "Recently I've been working on machine learning parallel training and on verification for AI " +
  "and AI systems.";

const HOME_EDUCATION = [
  { title: "PhD, Computational Science and Engineering", org: "Georgia Institute of Technology" },
  { title: "MSc, Mathematics and Computer Science", org: "University of Oxford" },
];

const HOME_AWARDS = [
  { title: "President's Fellowship", org: "Georgia Institute of Technology", date: "2026" },
  { title: "Otto F. and Jenny H. Krauss Fellowship", org: "Georgia Institute of Technology", date: "2026" },
  { title: "Mary Somerville Prize", org: "Somerville College, University of Oxford", date: "2026" },
  { title: "First Class Degree", org: "University of Oxford", date: "2026" },
];
