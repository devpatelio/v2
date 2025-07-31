// Enhanced project data with additional fields for filtering
const projects = [
    {
        id: 'introspect-ai',
        title: 'Introspect AI',
        year: '2025',
        date: 'June 2025',
        category: 'AI Research',
        status: 'Completed',
        location: 'San Francisco',
        description: 'Visualize your ChatGPT and Claude conversations in 3D space. Transform AI conversation history into interactive 3D experiences with semantic clustering.',
        tech: ['React', 'Three.js', 'Flask', 'UMAP', 'Claude API', 'Supabase'],
        tools: 'React, Three.js, Flask, UMAP, Claude API, Supabase',
        logo: 'IA',
        card_image: 'cover/introspect.png',
        links: [
            { label: 'Live Demo', url: 'https://introspect-ai.com' },
            { label: 'GitHub', url: 'https://github.com/devpatelio/introspect-ai' },
            { label: 'Documentation', url: 'https://docs.introspect-ai.com' }
        ],
        details: {
            cover_image: 'cover/introspect.png',
            subtitle: 'Your AI conversations, beautifully visualized in 3D space',
            type: 'Full-stack Application',
            year: '2024',
            sections: [
                {
                    id: 'overview',
                    title: 'What It Does',
                    content: 'Introspect transforms your ChatGPT and Claude conversation history into an interactive 3D experience. Like Spotify Wrapped, but for your AI chats. Every message becomes a glowing point in space, clustered by meaning using UMAP and AI-powered topic detection.'
                },
                {
                    id: 'features',
                    title: 'The Magic',
                    content: '3D Semantic Clustering: Conversations with similar themes naturally group together using UMAP dimensionality reduction. AI-Powered Labels: Claude auto-generates topic names like "Python & Data Analysis" or "Philosophy & Ethics". Multi-User Support: Color-coded by user, with separate clusters and statistics per person. Interactive Exploration: Smooth camera controls, zoom, search, filtering, and hover-to-view details.'
                },
                {
                    id: 'technical',
                    title: 'Tech Stack',
                    content: 'Frontend: React + Three.js + WebGL shaders for high-performance 3D rendering. Backend: Flask + UMAP + Claude API + Voyage AI for embeddings + Groq for summarization. Database: Supabase + pgvector for semantic search and storage. ML Pipeline: SpaCy NLP → Voyage embeddings → UMAP 3D → KMeans Clustering + Claude. Smart Parsing handles both Claude and ChatGPT exports with no manual cleanup needed.'
                },
                {
                    id: 'experience',
                    title: 'The Experience',
                    content: 'Upload your conversations → Watch them bloom in 3D → See patterns you never noticed → Reflect, share, and explore your AI journey. Built for AI power users, researchers, and curious minds who want to understand their AI interaction patterns in a completely new way.'
                }
            ]
        }
    },
    {
        id: 'microml',
        title: 'MicroML',
        year: '2025',
        date: 'May 2025',
        category: 'ML Infrastructure',
        status: 'Completed',
        location: 'Remote',
        description: 'A lightweight neural network framework and autograd engine for core deep learning applications built in C++20 with SIMD optimizations.',
        tech: ['C++20', 'SIMD', 'xsimd', 'Graphviz'],
        tools: 'C++20, SIMD, xsimd, Graphviz',
        logo: 'ML',
        card_image: 'https://pbs.twimg.com/media/GrvbT6JXEAAxPkZ?format=jpg&name=large',
        links: [
            { label: 'GitHub', url: 'https://github.com/devpatelio/microml' },
            { label: 'Thread', url: 'https://x.com/devpatelio/status/1926376515043721636' }
        ],
        details: {
            cover_image: 'https://raw.githubusercontent.com/devpatelio/microml/main/cover.png',
            sections: [
                {
                    heading: 'Overview',
                    text: 'MicroML is a lightweight neural network framework built with core deep learning components in C++. It features automatic differentiation with computational graph optimizations, SIMD-optimized tensor operations, and end-to-end training workflows - all with minimal dependencies. The system uses dynamic graph building with topological sorting for efficient gradient flow.',
                    images: []
                },
                {
                    heading: 'Core Features',
                    text: 'Automatic Differentiation: Computational graph construction with reverse-mode autodiff and efficient backpropagation. Tensor Operations: Broadcasting, SIMD-accelerated MatMul leveraging xsimd for AVX2/FMA speed. Neural Network Components: Value system with smart pointer-based computational nodes, loss functions (cross-entropy, MSE), activation functions (ReLU, Sigmoid), and configurable MLPs with Xavier initialization.',
                    images: []
                },
                {
                    heading: 'Performance Results',
                    text: 'Achieved consistent 8-9x speedup across all training scenarios with SIMD optimization. Training time reduced from 4.7 minutes to 32 seconds, making experimentation much more interactive. Matrix operations leverage AVX2/FMA instructions with cache-friendly memory access patterns. Successfully demonstrated learning on XOR gate (100% accuracy) and greater than gate (98% accuracy) classification tasks.',
                    images: [
                        'https://raw.githubusercontent.com/devpatelio/microml/main/viz/ce_test.png',
                        'https://raw.githubusercontent.com/devpatelio/microml/main/viz/xor_ce_test.png'
                    ]
                },
                {
                    heading: 'Technical Implementation',
                    text: `Built with C++20 featuring computational graph engine with automatic gradient tracking, tensor broadcasting for NumPy-style operations, SIMD-optimized matrix multiplication using vectorized instructions, and AdamW optimizer with adaptive learning rates and weight decay. Includes graph visualization via DOT file generation for educational purposes and comprehensive examples with binary classification workflows.`,
                    images: []
                },
                {
                    heading: 'Key Learning Outcomes',
                    text: 'This was an incredibly fun project to build that got me deep into the weeds of C++ and creating a powerful API for ML. Key learnings include automatic differentiation and computational graphs, memory management with smart pointers, numerical stability in loss functions, linear algebra operations and broadcasting, optimization theory with adaptive learning rates, and software architecture for modular ML components.',
                    images: []
                }
            ]
        }
    },
    {
        id: 'agile-agents',
        title: 'Agile Agents: Multi-Agent LLM Framework for Large-Scale Software Projects',
        year: '2025',
        date: 'March 2025',
        category: 'AI Research',
        status: 'Completed',
        location: 'Remote',
        description: 'Led development of a novel multi-agent collaboration framework achieving 25% success rate on real-world software engineering tasks, outperforming single-agent approaches by 2.3x.',
        tech: ['Python', 'LLMs', 'Orchestration', 'Multi-Agent Systems'],
        tools: 'Python, LLMs, Custom Orchestration, Hierarchical Agents',
        logo: 'AA',
        card_image: 'cover/cot.png',
        details: {
            cover_image: 'cover/agile_agent.png',
            sections: [
                {
                    heading: 'Overview',
                    text: 'Agile Agents is a multi-agent LLM framework designed for large-scale software projects. It enables dynamic task delegation and hierarchical orchestration among specialized LLM agents, featuring agent task delegation, structured history management, and context-sharing for accurate task decomposition.',
                    images: []
                },
                {
                    heading: 'Results',
                    text: 'Achieved 25% success rate on real-world software engineering tasks, outperforming single-agent approaches by 2.3x. The framework demonstrates effective collaboration between multiple AI agents working on complex software engineering challenges.',
                    images: ['cover/whitepaper.png']
                }
            ]
        }
    },
    {
        "id": "unitrial",
        "title": "UniTrial: Optimizing Clinical Trial Patient Recruitment with RAG",
        "year": "2024",
        "date": "May 2024 - Present",
        "category": "Health AI",
        "status": "In Progress",
        "location": "Remote",
        "description": "Built Multi-Modal RAG on LlamaIndex with Mistral-7B, MED-BERT, and BGE for embedding unstructured and structured medical data; created vector database (ChromaDB) to manage clinical trial and patient EHR data.",
        "tech": ["LlamaIndex", "Mistral-7B", "MED-BERT", "BGE", "ChromaDB", "REST API"],
        "tools": "Python, LlamaIndex, ChromaDB, FHIR, MESH-IDs",
        "logo": "UT",
        "card_image": "cover/unitrial.png",
        "details": {
            "cover_image": "https://www.fightcancer.org/sites/default/files/National%20Images/Resources%20Graphics/Fig%2010%20Patient-facing%20Clinical%20Trial%20Matching%20150.jpg",
            "subtitle": "Multi-modal RAG for clinical trial recruitment",
            "type": "AI System",
            "year": "2024",
            "sections": [
                {
                    "id": "inspiration",
                    "title": "Inspiration",
                    "content": "Drug discovery costs billions, with cancer and neurodegenerative trials facing a 97% failure rate. Patient recruitment is the biggest bottleneck for early-stage oncology trials, worsened by fragmented EHRs and local recruitment barriers. UniTrial aims to solve this with an AI-powered patient-trial matchmaker, using live ClinicalTrials.Gov data and patient EHRs to reduce recruitment time and improve outcomes."
                },
                {
                    "id": "overview",
                    "title": "What It Does",
                    "content": "The system takes patient EHR PDFs or condition prompts and matches them to suitable trials using a RAG pipeline with Mistral-7B, MED-BERT, and BGE embeddings. It uses a novel schema with FHIR and MESH IDs to reduce hallucinations. It features EHR de-identification, real-time updates, and dual visualizations for patients and CROs to search trials and patients securely."
                },
                {
                    "id": "technical",
                    "title": "How We Built It",
                    "content": "We preprocess EHRs, extract biomarkers, embed structured/unstructured data with MED-BERT/BGE, and store them in ChromaDB. Our custom REST API extends ClinicalTrials.gov queries. Vector similarity searches select top trial matches, minimizing hallucination. Langchain, Firebase, and Streamlit power the system, and future releases will add HIPAA-compliant patient data support."
                },
                {
                    "id": "business",
                    "title": "Business Model",
                    "content": "UniTrial’s revenue model includes subscriptions for CROs and value-based pricing for successful matches. Pharmaceutical sponsors can advertise trials for higher visibility, building a two-sided market moat. Our advantage is combining cutting-edge RAG AI with robust patient data pipelines."
                },
                {
                    "id": "challenges",
                    "title": "Challenges",
                    "content": "Key challenges included finding usable EHR datasets, aligning LLM output with our vector database, and reducing hallucination. Extensive cleaning and tuning helped refine the system."
                },
                {
                    "id": "impact",
                    "title": "Impact & Next Steps",
                    "content": "We’re proud to have reduced hallucination rates and built a robust patient-trial search system. Next, we’re adding real EHR clusters to enable patient-side recruitment and expanding disease areas. See our GitHub for live demos."
                },
                {
                    "id": "links",
                    "title": "Links",
                    "content": "[GitHub](https://github.com/devpatelio/unitrial)"
                }
            ]
        }
    },
    {
        "id": "bluesky",
        "title": "Project BlueSky: Multimodal Mental Health Patient Monitoring",
        "year": "2023",
        "date": "Jan 2023 - May 2023",
        "category": "Health AI",
        "status": "Completed",
        "location": "Remote",
        "description": "Built multimodal deep learning system (BlueSky) for personalized mental health support, using audio, facial, and text cues to extract emotion and behavioral insight in real-time.",
        "tech": ["MFCC", "BiLSTM-CRF", "DeepSpeech2", "CNN", "Haar Cascades"],
        "tools": "Python, PyTorch, OpenCV, DeepSpeech2",
        "logo": "BS",
        "card_image": "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*YMQ1a_N6iDDiEtXq7HV7iw.png",
        "details": {
            "cover_image": "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*Nkm1m0lOCq76jC-mtG3Qwg.png",
            "subtitle": "Multimodal deep learning for mental health monitoring",
            "type": "AI System",
            "year": "2023",
            "sections": [
                {
                    "id": "inspiration",
                    "title": "Inspiration",
                    "content": "Mental health care access remains a global crisis, with 70% of individuals receiving no treatment and many others lacking personalized care. Project BlueSky was inspired by the need to create emotionally intelligent systems that go beyond chatbots and understand the nuances of human speech, tone, and expression."
                },
                {
                    "id": "overview",
                    "title": "Overview",
                    "content": "BlueSky uses deep learning to analyze facial expressions, speech tone, and spoken text to identify emotional patterns and psychological triggers. By capturing mood and sentiment across multiple modalities, it offers a robust patient profile that can assist mental health professionals or users themselves."
                },
                {
                    "id": "voice",
                    "title": "Voice & Audio Pipeline",
                    "content": "Audio data is preprocessed using Mel-Frequency Cepstral Coefficients (MFCCs), spectrograms, and LSTM networks to model time-series emotion. Speech-to-text is performed using a DeepSpeech2-inspired model that feeds audio through convolutional layers and gated recurrent units to transcribe speech while retaining emotional cues."
                },
                {
                    "id": "face",
                    "title": "Facial Sentiment Pipeline",
                    "content": "Facial sentiment is detected using Haar Cascades for face localization and 68-point landmark detection to model emotions through spatial geometry. A CNN-based classifier complements this with pixel-level emotion recognition, offering redundancy and improving prediction confidence in real time."
                },
                {
                    "id": "nlp",
                    "title": "Conversation & NLP",
                    "content": "Using ASR output, the system applies PoS tagging, Named Entity Recognition (NER), and key-phrase extraction using a BiLSTM-CRF architecture. This helps map specific phrases to emotional shifts, enabling the system to surface potentially meaningful or concerning thoughts within a user's narrative."
                },
                {
                    "id": "tech-stack",
                    "title": "Technical Stack",
                    "content": "Core models were built in PyTorch and OpenCV. DeepSpeech2 and MFCC pipelines powered audio, Haar Cascades and CNNs enabled facial analysis, and NLTK and CRF models handled NLP. Pretrained models improved low-data generalization."
                },
                {
                    "id": "impact",
                    "title": "Impact & Purpose",
                    "content": "BlueSky bridges the gap between machines and mental health support. It aims not to replace therapists, but to provide better tools for understanding patient emotions and context, creating a more compassionate and data-rich foundation for care."
                },
                {
                    "id": "links",
                    "title": "Read More",
                    "content": "https://ai.plainenglish.io/we-can-do-better-than-chat-bots-for-mental-health-9979b875e55e"
                }
            ]
        }
    },
    {
        "id": "rolodex",
        "title": "Rolodex: External Memory for Dementia Patients",
        "year": "2023",
        "date": "August 2023",
        "category": "Health AI",
        "status": "Prototype",
        "location": "Remote",
        "description": "Rolodex is an AI-powered external memory system built on Brilliant Labs Frame Glasses to help people with Alzheimer's and memory disorders remember faces, relationships, and past conversations.",
        "tech": ["Brilliant Labs Frame Glasses", "Facial Recognition", "ASR", "Vector Search", "Database Management"],
        "tools": "Python, OpenCV, FaceNet, Whisper ASR, Supabase",
        "logo": "RX",
        "card_image": "cover/glasses.png",
        "details": {
            "cover_image": "cover/rolodex.png",
            "subtitle": "Wearable memory augmentation for dementia",
            "type": "Hardware + AI Prototype",
            "year": "2024",
            "sections": [
                {
                    "id": "inspiration",
                    "title": "Inspiration",
                    "content": "Dementia and Alzheimer's patients often struggle to remember loved ones and their relationships, which can be emotionally challenging. Rolodex was inspired by the idea of giving patients a gentle external memory system to help them stay connected."
                },
                {
                    "id": "overview",
                    "title": "What It Does",
                    "content": "With Brilliant Labs Frame Glasses, users can tap to start recording conversations. The glasses capture short interactions, transcribe speech, and store them with timestamps and face snapshots. This creates a living memory bank linked to the people in their lives."
                },
                {
                    "id": "pipeline",
                    "title": "How It Works",
                    "content": "Captured audio is transcribed with an ASR model (Whisper). Frames from the glasses camera are processed with FaceNet for facial embeddings. These embeddings are cross-referenced with the user’s personal 'Rolodex' — a database of known faces, relationship tags, and context notes. Users can later search conversations and view memory logs by person or relationship."
                },
                {
                    "id": "interaction",
                    "title": "User Experience",
                    "content": "Tap to start or stop conversations. The system updates memory profiles in real-time. Users or caregivers can add notes, context, or photos to strengthen associations. The chat-based interface helps patients retrieve ‘who was this?’ and ‘what did we talk about?’ moments easily."
                },
                {
                    "id": "impact",
                    "title": "Impact & Next Steps",
                    "content": "Rolodex aims to reduce anxiety and loneliness for dementia patients by augmenting their memory in a private, user-controlled way. Next steps include improving face matching, real-time processing, and integrating with clinical care routines for wider adoption."
                }
            ]
        }
    },
    {
        "id": "pyr-health",
        "title": "PYR Health: Microfluidic Device for Remote Blood Counts",
        "year": "2024",
        "date": "Nov 2023 - June 2024",
        "category": "Bioengineering",
        "status": "In Progress",
        "location": "UC Berkeley",
        "description": "Designed custom microfluidic chip and computer vision system for low-cost CBC counts, helping chemotherapy patients monitor blood toxicity remotely.",
        "tech": ["Microfluidics", "Vision Transformers", "YoloV8", "Random Forest"],
        "tools": "Python, MxNet, YoloV8, Custom Hardware",
        "logo": "PYR",
        "card_image": "cover/pyr_card.png",
        "details": {
            "cover_image": "cover/pyr_cover.png",
            "subtitle": "Low-cost CBC monitoring for chemotherapy patients",
            "type": "Bioengineering Project",
            "year": "2023",
            "sections": [
                {
                    "id": "problem",
                    "title": "Problem Statement",
                    "content": "Cancer’s high mortality rates are partly due to chemotherapy’s severe side effects and poor monitoring in resource-limited settings. Standard CBC tests are costly, require large equipment, and are inaccessible for many, leading to avoidable complications and treatment delays."
                },
                {
                    "id": "background",
                    "title": "Background",
                    "content": "Chemotherapy-induced anemia, neutropenia, and platelet deficiencies can be fatal if unmonitored. Yet, existing monitoring systems are expensive and infrequent, especially in developing regions where cancer mortality is up to 1000% higher than in developed nations."
                },
                {
                    "id": "solution",
                    "title": "Solution",
                    "content": "PYR Health proposes a portable, low-cost microfluidic device that prepares blood samples automatically. A vision transformer and YoloV8 pipeline processes blood smears for real-time WBC, RBC, and platelet counts. This empowers continuous monitoring, integrates with physician workflows, and provides detailed cell morphology data."
                },
                {
                    "id": "technical",
                    "title": "Technical Pipeline",
                    "content": "Custom chip design automates sample prep. The microscope apparatus captures images, which a ViT processes for cell classification. Ensemble models like Random Forest validate cytotoxicity risks with 85% accuracy, improving dosing decisions."
                },
                {
                    "id": "impact",
                    "title": "Impact & Vision",
                    "content": "Enables outpatient chemotherapy monitoring, lowering hospital costs and improving patient survival by avoiding toxicity-related delays. Finalist at UC Big Ideas. Long-term vision: scalable, affordable CBC diagnostics for underserved regions."
                },
                {
                    "id": "links",
                    "title": "Links",
                    "content": "[Read More](https://docs.google.com/document/d/1gKT-vwVgJ1WBZjoQ3S6IHzCznSWmHcdrbjg12vnIwdA/edit?usp=sharing)"
                }
            ]
        }
    },
    {
        "id": "alzheimers-druggability",
        "title": "Alzheimer’s Genome Variant and Druggability Project",
        "year": "2022",
        "date": "Jan 2022",
        "category": "Bioinformatics",
        "status": "Completed",
        "location": "UK",
        "description": "Explored genetic variation in motor neurone disease to discover new drug targets, combining GWAS insights, Mendelian Randomization, and drug-protein interactions using ChemBL.",
        "tech": ["GWAS", "Mendelian Randomization", "ChemBL", "Drug Repurposing"],
        "tools": "Python, Bioinformatics, VEP, BCFtools",
        "logo": "AD",
        "card_image": "cover/NGV_hunters_logo.png",
        "details": {
            "cover_image": "https://user-images.githubusercontent.com/11878969/149540648-551f283d-c2fb-434f-9dac-e94540eb023c.png",
            "subtitle": "Drug repurposing for Alzheimer’s and Motor Neuron Disease using genomics",
            "type": "Research Project",
            "year": "2022",
            "sections": [
                {
                    "id": "inspiration",
                    "title": "Inspiration",
                    "content": "Motor neurone diseases (like ALS) have a complex genetic architecture. New GWAS findings revealed multiple risk loci, offering a path to discover novel drug targets and repurpose existing compounds for neurodegenerative disease longevity."
                },
                {
                    "id": "aims",
                    "title": "Project Aims",
                    "content": "Our team (NGV Hunters) focused on three goals: (1) Explore genetic variation linked to ALS, (2) use Mendelian Randomization to infer causal links between variants and disease, and (3) build a drug discovery pipeline for druggable targets."
                },
                {
                    "id": "pipeline",
                    "title": "Pipeline",
                    "content": "We processed variant data with VEP and BCFtools, ran Mendelian Randomization scatter plots to estimate SNP effects, and conducted funnel plot analyses to validate instruments. For drug discovery, we mapped causal genes to ChemBL and drug-protein interaction datasets to rank therapeutic candidates."
                },
                {
                    "id": "results",
                    "title": "Results & Impact",
                    "content": "The pipeline identified novel ALS gene targets with high druggability scores. We extended the analysis to pathway and transmembrane region enrichment, highlighting actionable nodes for future pre-clinical studies."
                },
                {
                    "id": "awards",
                    "title": "Awards",
                    "content": "Won 1st place in the UK’s DEMON Dementia Network Neurohack Challenge, receiving a $10K research grant for continued work on Alzheimer’s and motor neurone disease drug repurposing."
                },
                {
                    "id": "links",
                    "title": "Project Resources",
                    "content": "[GitHub Repo](https://github.com/devpatelio/Neurohack-C3-LA-Solution)"
                }
            ]
        }
    }
];

// Work experience data
const experiences = [
    {
        id: 'amd',
        title: 'AMD',
        year: '2025',
        date: 'March 2025 - Present',
        category: 'AI Software Development',
        status: 'Current',
        location: 'San Jose, California',
        description: 'AI Software Developer on AIE NPU Engine Runtime and Vitis Compiler Team, working on next-generation AI acceleration hardware and software.',
        tech: ['C++', 'Redis', 'LLVM', 'MLIR', 'Python', 'Vitis HLS'],
        tools: 'C++, Redis, LLVM, MLIR, OpenCL, Python, Vitis HLS',
        logo: 'AMD',
        card_image: 'https://pbs.twimg.com/media/DeDsacZXcAIgeEc.jpg',
        details: {
            cover_image: 'cover/rai2.png',
            subtitle: 'AI Software Developer Intern',
            type: 'Internship',
            year: '2025',
            sections: [
                {
                    id: 'introduction',
                    title: 'Embarking on My AMD Journey',
                    content: 'When I began my internship at AMD in the summer of 2025, I entered with curiosity and limited prior knowledge about Neural Processing Units (NPUs). However, I quickly embraced the challenges, diving deep into AMD’s innovative Ryzen AI dataflow architecture. I gained hands-on experience and became comfortable with its unique intricacies, appreciating how software intricately drives hardware acceleration for edge AI workloads.'
                },
                {
                    id: 'overview',
                    title: 'My Role and Goals',
                    content: 'At AMD, I joined the AI Compiler and Heterogeneous Computing team, where my primary objective was to design and deploy compiler optimizations to significantly enhance edge ML inference performance on the Ryzen AI NPU. Leveraging LLVM to accelerate deep learning kernels and compute graphs, my contributions directly improved key components such as FlexML and VitisAI, essential tools within AMD’s AI Engine compiler ecosystem.'
                },
                {
                    id: 'deep-dive-benchmarking-platform',
                    title: 'Creating a Comprehensive Benchmarking Platform',
                    content: 'One of the central projects during my internship was the creation of an internal microbenchmarking suite designed to systematically analyze runtime performance and memory utilization of ONNX models on AMD’s AIE hardware. Recognizing a significant gap in existing tools that only provided layer-level insights, I developed a command-line tool enabling detailed parameter sweeps across various dimensions, datatypes (FP32, Quantized INT8), and compilation flags. This system was designed to capture granular operator-level runtime data, identifying performance bottlenecks previously hidden by higher-level analyses. By providing comprehensive visualizations through an intuitive dashboard, our team could effectively interpret complex datasets, improving efficiency and decision-making.'
                },
                {
                    id: 'integration-pytorch-onnx',
                    title: 'Integrating PyTorch, ONNX, and Low-Level Optimizations',
                    content: 'To further enhance AI workflows at AMD, I focused heavily on integrating PyTorch and ONNX models with robust low-level system optimizations in C++. This involved sophisticated multi-threading strategies, memory management techniques, redis-based job execution, and direct hardware acceleration. By tackling critical issues such as L2-L3 memory bottlenecks and CPU core stalls, my optimizations yielded up to 40× performance improvements, significantly enhancing operator execution speeds and efficiency in complex parameter sweeps.'
                },
                {
                    id: 'hardware-tracing-system',
                    title: 'Advanced Hardware Tracing and Analysis',
                    content: 'Understanding hardware-level details was crucial for optimizing performance. Therefore, I implemented a detailed hardware tracing system integrated with a remote Windows VM via automated SSH-based workflows. This enabled the precise capture and analysis of hardware performance data, including cycle measurements and resource utilization. By systematically managing trace configurations and using automated batch scripts, our team gained unprecedented insights into hardware behavior, guiding further compiler and kernel optimizations.'
                },
                {
                    id: 'task-management-resource-handling',
                    title: 'Efficient Task Management and Resource Handling',
                    content: 'To manage the intensive benchmarking processes efficiently, I developed a distributed task execution framework using Celery with Redis backend support. This system provided robust task queuing, real-time asynchronous tracking, and detailed error handling. It ensured optimal hardware utilization through NPU resource locking and prioritized job execution, significantly improving operational efficiency and enabling extensive parallel compilation across multiple cores.'
                },
                {
                    id: 'learnings-reflections',
                    title: 'Learnings and Reflections',
                    content: 'This internship at AMD was profoundly educational, enhancing both my technical knowledge and practical engineering skills. Through hands-on experience with the AI Engine architecture, I learned deeply about Very Long Instruction Word (VLIW), Single Instruction Multiple Data (SIMD) processing, and the critical importance of efficient data movement and memory management in heterogeneous systems. Furthermore, engaging with complex debugging scenarios and iterative optimization cycles underscored the value of structured, scalable benchmarking and performance analysis tools. This experience solidified my passion for hardware-software co-design and laid the groundwork for my future aspirations in pushing technological boundaries in AI.'
                },
                {
                    id: 'future-directions',
                    title: 'Future Directions',
                    content: 'Moving forward, I aim to enhance the benchmarking suite by incorporating more sophisticated data compression and storage methodologies, and potentially integrating it within broader AMD workflows. This will improve accessibility and scalability, ensuring that the insights and optimizations developed during my internship will continue to benefit AMD’s future AI hardware developments and broader software ecosystem.'
                }
            ]
        }
    },
    {
        id: 'berkeley-air',
        title: 'Berkeley Artificial Intelligence Research',
        year: '2024',
        date: 'October 2024 - Present',
        category: 'Applied ML Research',
        status: 'Current',
        location: 'Berkeley, California',
        description: 'Applied ML Researcher working on machine learning for AFib prediction using multimodal healthcare data and advanced neural architectures.',
        tech: ['PyTorch', 'Transformers', 'scikit-learn', 'Pandas', 'MLflow'],
        tools: 'PyTorch, Transformers, scikit-learn, Pandas, MLflow',
        logo: 'BAIR',
        card_image: 'https://educationsnapshots.com/wp-content/uploads/sites/4/2020/10/university-of-california-berkeley-college-of-engineering-berkeley-artificial-intelligence-research-lab-bair-5-1200x801.jpg',
        details: {
            cover_image: 'cover/bair.png',
            subtitle: 'Applied ML Researcher',
            type: 'Research Position',
            year: '2024',
            sections: [
                {
                    id: 'overview',
                    title: 'Research Focus',
                    content: 'Developing machine learning models for early prediction of atrial fibrillation (AFib) using multimodal healthcare data including ECG signals, clinical notes, and patient demographics. Working with large-scale electronic health record datasets to build predictive models that can improve patient outcomes.'
                },
                {
                    id: 'technical',
                    title: 'Technical Approach',
                    content: 'Implementing transformer-based architectures for time-series analysis of ECG data. Developing multimodal fusion techniques to combine structured and unstructured healthcare data. Using advanced feature engineering and deep learning techniques to extract meaningful patterns from complex medical datasets.'
                },
                {
                    id: 'impact',
                    title: 'Research Impact',
                    content: 'Building models that achieve state-of-the-art performance in AFib prediction with potential for clinical deployment. Collaborating with medical professionals to ensure clinical relevance and interpretability. Contributing to the broader healthcare AI research community through publications and open-source contributions.'
                }
            ]
        }
    },
    {
        id: 'health-engine',
        title: 'Health Engine',
        year: '2023',
        date: 'August 2023 - Present',
        category: 'Health-Tech Management',
        status: 'Current',
        location: 'Berkeley, California',
        description: 'Project Manager focused on startups, venture capital, and health-tech initiatives, driving strategic projects in the healthcare technology space.',
        tech: ['Project Management', 'Strategic Planning', 'Health-Tech', 'Data Analysis'],
        tools: 'Project Management, Strategic Planning, Health-Tech, Data Analysis',
        logo: 'HE',
        card_image: 'cover/he.jpg',
        details: {
            cover_image: 'cover/he_perf.png',
            subtitle: 'Project Manager',
            type: 'Permanent Full-time',
            year: '2023',
            sections: [
                {
                    id: 'overview',
                    title: 'Role Overview',
                    content: 'Leading strategic initiatives in the health-tech space, focusing on startup incubation, venture capital partnerships, and technology development projects. Managing cross-functional teams to deliver innovative healthcare solutions and drive business growth in the rapidly evolving health technology sector.'
                },
                {
                    id: 'projects',
                    title: 'Key Projects',
                    content: 'Overseeing development of health-tech startups from ideation to market entry. Managing partnerships with venture capital firms to secure funding for promising healthcare innovations. Leading strategic planning initiatives for technology adoption in healthcare settings and coordinating with regulatory bodies.'
                },
                {
                    id: 'impact',
                    title: 'Business Impact',
                    content: 'Successfully launched multiple health-tech initiatives that have improved patient outcomes and operational efficiency. Built strategic partnerships with leading venture capital firms and healthcare organizations. Contributed to the growth of the health-tech ecosystem through mentorship and strategic guidance for emerging startups.'
                }
            ]
        }
    },
    {
        id: 'gladstone',
        title: 'Gladstone Institutes',
        year: '2024',
        date: 'June 2024 - September 2024',
        category: 'Deep Learning Research',
        status: 'Completed',
        location: 'San Francisco Bay Area',
        description: 'Deep Learning Intern working on multimodal foundation models for biology, focusing on advancing AI applications in biological research.',
        tech: ['PyTorch', 'Transformers', 'Bioinformatics', 'CUDA', 'Docker'],
        tools: 'PyTorch, Transformers, Bioinformatics, CUDA, Docker',
        logo: 'GI',
        card_image: 'https://phiab.com/wp-content/uploads/2020/05/SanFrancisco-1024x341.jpg',
        details: {
            cover_image: 'cover/ye.png',
            subtitle: 'Deep Learning Intern',
            type: 'Internship',
            year: '2024',
            sections: [
                {
                    id: 'overview',
                    title: 'Research Mission',
                    content: 'Contributed to cutting-edge research on multimodal foundation models for biological applications. Worked on developing AI systems that can understand and reason about complex biological data, including genomic sequences, protein structures, and cellular imaging data.'
                },
                {
                    id: 'technical',
                    title: 'Technical Work',
                    content: 'Implemented transformer-based models for biological sequence analysis and protein structure prediction. Developed multimodal learning frameworks that can process and integrate diverse biological data types. Optimized model training pipelines for large-scale biological datasets using distributed computing resources.'
                },
                {
                    id: 'outcomes',
                    title: 'Research Outcomes',
                    content: 'Contributed to the development of foundation models that advance the state-of-the-art in computational biology. Collaborated with biologists and computational scientists to ensure models address real-world biological research needs. Presented research findings at internal seminars and contributed to ongoing publication efforts.'
                }
            ]
        }
    },
    {
        id: 'university-toronto',
        title: 'University of Toronto',
        year: '2022',
        date: 'March 2022 - September 2022',
        category: 'Bioinformatics Engineering',
        status: 'Completed',
        location: 'Toronto, Ontario',
        description: 'Dry Lab Engineer focused on optimizing DNA diagnostics through computational approaches and algorithm development.',
        tech: ['Python', 'R', 'Bioinformatics', 'MATLAB', 'Linux'],
        tools: 'Python, R, Bioinformatics, MATLAB, Linux',
        logo: 'UT',
        card_image: 'https://display.blogto.com/articles/20250121-university-of-toronto-ranking.jpg',
        details: {
            cover_image: 'cover/poster.png',
            subtitle: 'Dry Lab Engineer',
            type: 'Research Position',
            year: '2022',
            sections: [
                {
                    id: 'overview',
                    title: 'Project Focus',
                    content: 'Worked on optimizing DNA diagnostic workflows through computational analysis and algorithm development. Focused on improving the accuracy and efficiency of genetic testing procedures through advanced bioinformatics approaches and data analysis techniques.'
                },
                {
                    id: 'technical',
                    title: 'Technical Contributions',
                    content: 'Developed computational pipelines for DNA sequence analysis and variant calling. Implemented quality control algorithms for genetic testing workflows. Created data visualization tools for interpreting complex genomic data and improving diagnostic accuracy.'
                },
                {
                    id: 'impact',
                    title: 'Project Impact',
                    content: 'Improved diagnostic accuracy by 20% through optimized computational workflows. Reduced processing time for genetic tests through efficient algorithm implementation. Contributed to the development of standardized protocols for DNA diagnostic procedures in clinical settings.'
                }
            ]
        }
    },
    {
        id: 'benchsci',
        title: 'BenchSci',
        year: '2021',
        date: 'August 2021 - September 2021',
        category: 'ML Research',
        status: 'Completed',
        location: 'Toronto, Ontario',
        description: 'ML Research Intern working on AI-powered clinical trials optimization and biomedical research acceleration.',
        tech: ['TensorFlow', 'NLP', 'Python', 'scikit-learn', 'Jupyter'],
        tools: 'TensorFlow, NLP, Python, scikit-learn, Jupyter',
        logo: 'BS',
        card_image: 'https://cdn.betakit.com/wp-content/uploads/2023/10/Untitled-design-2-1.jpg',
        details: {
            cover_image: 'https://i.ytimg.com/vi/fPs5xzYYHSs/hqdefault.jpg',
            subtitle: 'ML Research Intern',
            type: 'Internship',
            year: '2021',
            sections: [
                {
                    id: 'overview',
                    title: 'Research Focus',
                    content: 'Contributed to AI-powered solutions for accelerating clinical trials and biomedical research. Worked on natural language processing and machine learning models to extract insights from biomedical literature and experimental data.'
                },
                {
                    id: 'technical',
                    title: 'Technical Implementation',
                    content: 'Developed NLP models for extracting structured information from biomedical papers and experimental protocols. Implemented machine learning algorithms for predicting experimental outcomes and optimizing research workflows. Created data processing pipelines for handling large-scale biomedical datasets.'
                },
                {
                    id: 'outcomes',
                    title: 'Research Outcomes',
                    content: 'Contributed to models that improved research efficiency for pharmaceutical companies and academic researchers. Developed tools that accelerated the literature review process for clinical trial design. Gained experience in applying AI to real-world biomedical research challenges.'
                }
            ]
        }
    }
];

// Image carousel data
const carouselImages = [
    // { src: 'media_converted/IMG_9971.jpg', alt: 'Photo 1' },
    { src: 'media_converted/IMG_9871.jpg', alt: 'Photo 2' },
    { src: 'media_converted/IMG_8069.jpg', alt: 'Photo 5' },
    { src: 'media_converted/IMG_8064.jpg', alt: 'Photo 6' },
    { src: 'media_converted/IMG_7667.jpg', alt: 'Photo 7' },
    { src: 'media_converted/IMG_7665.jpg', alt: 'Photo 8' },
    { src: 'media_converted/IMG_7551.jpg', alt: 'Photo 9' },
    { src: 'media_converted/IMG_7442.jpg', alt: 'Photo 10' },
    { src: 'media_converted/IMG_7101.jpg', alt: 'Photo 11' },
    { src: 'media_converted/IMG_6810.jpg', alt: 'Photo 12' },
    { src: 'media_converted/IMG_6659.jpg', alt: 'Photo 13' },
    { src: 'media_converted/IMG_6123.jpg', alt: 'Photo 14' },
    { src: 'media_converted/IMG_6086.jpg', alt: 'Photo 15' },
    { src: 'media_converted/IMG_5952.jpg', alt: 'Photo 16' },
    { src: 'media_converted/IMG_5921.jpg', alt: 'Photo 17' },
    { src: 'media_converted/IMG_5765.jpg', alt: 'Photo 19' },
    { src: 'media_converted/IMG_5751.jpg', alt: 'Photo 21' },
    { src: 'media_converted/IMG_5712.jpg', alt: 'Photo 23' },
    { src: 'media_converted/IMG_5463.jpg', alt: 'Photo 25' },
    { src: 'media_converted/IMG_4355.jpg', alt: 'Photo 27' },
    { src: 'media_converted/IMG_4014.jpg', alt: 'Photo 29' },
    { src: 'media_converted/IMG_3774.jpg', alt: 'Photo 31' },
    { src: 'media_converted/IMG_3017.jpg', alt: 'Photo 33' },
    { src: 'media_converted/IMG_2211.jpg', alt: 'Photo 35' },
    { src: 'media_converted/IMG_0621.jpg', alt: 'Photo 37' },
    { src: 'media_converted/IMG_0232.jpg', alt: 'Photo 38' },
    // { src: 'media_converted/B9556B60-DC38-4820-A4B5-72EC4936D702.jpg', alt: 'Photo 40' }
];

// Shuffle carousel images on each page load
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Create a shuffled copy for each page load
let shuffledCarouselImages = shuffleArray([...carouselImages]);

let currentProject = null;
let currentPage = 'home';
let filteredProjects = [...projects];

// Theme management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    console.log('Initializing theme:', savedTheme); // Debug log
    document.body.className = `${savedTheme}-theme`;
    console.log('Body classes set to:', document.body.className); // Debug log
}

function toggleTheme() {
    console.log('Theme toggle clicked'); // Debug log
    const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    console.log('Switching from', currentTheme, 'to', newTheme); // Debug log
    document.body.className = `${newTheme}-theme`;
    localStorage.setItem('theme', newTheme);
    console.log('Theme saved to localStorage:', newTheme); // Debug log
}

// Navigation management
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // If it's a hash link on the same page, handle smooth scrolling
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = href.substring(1);
                const section = document.getElementById(target);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
            // For other links (different pages), let default behavior handle navigation
        });
    });
}


// Check if we should show split-pane view
function shouldShowSplitPane() {
    return window.innerWidth >= 1200 && currentPage === 'home';
}

// Create project card for home page
function createProjectCard(item) {
    const card = document.createElement('div');
    card.className = 'project-card';

    // Use unified detail.html system for all content
    const isExp = experiences.some(e => e.id === item.id);
    const linkUrl = `detail.html?type=${isExp ? 'experience' : 'project'}&id=${item.id}`;
    card.onclick = () => window.location.href = linkUrl;

    card.innerHTML = `
        <div class="project-image">
            ${item.card_image ?
            `<img src="${item.card_image}" alt="${item.title}" style="width: 100%; height: 100%; object-fit: cover;">` :
            `<span class="project-image-text">${item.category}</span>`
        }
        </div>
        <div class="project-content">
            <div class="project-header">
                <h3 class="project-title">${item.title}</h3>
                <span class="project-year">${item.year}</span>
            </div>
            <p class="project-description">${item.description}</p>
            <div class="project-tech">
                ${item.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;

    return card;
}

// Create project list item for projects page
function createProjectListItem(project) {
    const item = document.createElement('div');
    item.className = 'project-list-item';
    item.onclick = () => openProject(project);

    item.innerHTML = `
        <div class="project-logo">${project.logo}</div>
        <div class="project-info">
            <h3 class="project-list-title">${project.title}</h3>
            <p class="project-list-description">${project.description}</p>
            <div class="project-badges">
                <span class="project-badge">${project.category}</span>
                <span class="project-badge">${project.status}</span>
                <span class="project-badge">${project.year}</span>
                <span class="project-badge">${project.location}</span>
            </div>
        </div>
    `;

    return item;
}

// Handle project/experience click - either show in panel or open full page
function handleProjectClick(item) {
    if (shouldShowSplitPane()) {
        showProjectInPanel(item);
    } else {
        openProject(item);
    }
}

// Show project in right panel (desktop home page)
function showProjectInPanel(item) {
    currentProject = item;
    const panel = document.getElementById('articlePanel');
    const content = document.getElementById('articleContent');
    const mainContent = document.querySelector('.main-content');

    // Build sections HTML - use unified format detection like detail.html
    const sections = item.details?.sections || [];
    const isNewFormat = sections.length > 0 && sections[0] && sections[0].hasOwnProperty('heading');

    const sectionsHTML = sections
        .filter(section => section && (section.heading || section.title)) // Filter out invalid sections
        .map(section => {
            if (isNewFormat && section.heading) {
                // New simplified format
                return `
                    <div class="article-section">
                        <h3 class="article-section-title">${section.heading}</h3>
                        <div class="article-section-content">${section.text || ''}</div>
                        ${section.images && section.images.length > 0 ?
                        section.images.map(img => `<img src="${img}" class="inline-image" alt="" style="max-width: 100%; margin: 1rem 0; border-radius: 8px;">`).join('')
                        : ''}
                    </div>
                `;
            } else if (!isNewFormat && section.id && section.title) {
                // Old complex format
                return `
                    <div class="article-section">
                        <h3 class="article-section-title">${section.title}</h3>
                        <div class="article-section-content">${section.content || ''}</div>
                    </div>
                `;
            }
            return '';
        })
        .filter(s => s) // Remove empty strings
        .join('');

    // Determine type for detail page link
    const isExp = experiences.some(e => e.id === item.id);
    const detailUrl = `detail.html?type=${isExp ? 'experience' : 'project'}&id=${item.id}`;

    content.innerHTML = `
        <div class="article-header">
            <div class="article-actions">
                <button class="action-button" onclick="window.location.href='${detailUrl}'" title="Open full page">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17l9.2-9.2M17 17V7H7" stroke="currentColor" stroke-width="1.5"/>
                    </svg>
                </button>
                <button class="action-button" onclick="closePanel()" title="Close">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="1.5"/>
                    </svg>
                </button>
            </div>
            <h1 class="article-title">${item.title}</h1>
            <p class="article-subtitle">${item.details?.subtitle || ''}</p>
            <div class="article-meta">
                <div class="meta-item">
                    <span class="meta-label">Date</span>
                    <span class="meta-value">${item.date || item.year}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Category</span>
                    <span class="meta-value">${item.category}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">Tools</span>
                    <span class="meta-value">${item.tools}</span>
                </div>
            </div>
        </div>
        <div class="article-hero-image">
            ${item.details?.cover_image ?
            `<img src="${item.details.cover_image}" alt="${item.title} cover" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;">` :
            item.logo
        }
        </div>
        ${sectionsHTML}
    `;

    panel.classList.add('active');
    if (mainContent) mainContent.classList.add('split-pane-active');
    panel.scrollTop = 0;
    content.scrollTop = 0;
}

// Create project page (mobile and full-page view)
function createProjectPage(project) {
    const page = document.createElement('div');
    page.className = 'project-page';
    page.id = `project-${project.id}`;

    // Use unified format detection like detail.html and showProjectInPanel
    const sections = project.details?.sections || [];
    const isNewFormat = sections.length > 0 && sections[0] && sections[0].hasOwnProperty('heading');

    const contentsList = sections
        .filter(section => section && (section.heading || section.title))
        .map(section => {
            if (isNewFormat && section.heading) {
                const id = section.heading.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                return `<li><a href="#${id}" onclick="scrollToSection('${id}')">${section.heading}</a></li>`;
            } else if (!isNewFormat && section.id && section.title) {
                return `<li><a href="#${section.id}" onclick="scrollToSection('${section.id}')">${section.title}</a></li>`;
            }
            return '';
        })
        .filter(s => s)
        .join('');

    const sectionsHTML = sections
        .filter(section => section && (section.heading || section.title))
        .map(section => {
            if (isNewFormat && section.heading) {
                const id = section.heading.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                return `
                    <section class="section" id="${id}">
                        <h2 class="section-title">${section.heading}</h2>
                        <div class="section-content">${section.text || ''}</div>
                        ${section.images && section.images.length > 0 ?
                        section.images.map(img => `<img src="${img}" class="inline-image" alt="" style="max-width: 100%; margin: 1rem 0; border-radius: 8px;">`).join('')
                        : ''}
                    </section>
                `;
            } else if (!isNewFormat && section.id && section.title) {
                return `
                    <section class="section" id="${section.id}">
                        <h2 class="section-title">${section.title}</h2>
                        <div class="section-content">${section.content || ''}</div>
                    </section>
                `;
            }
            return '';
        })
        .filter(s => s)
        .join('');

    page.innerHTML = `
        <nav class="project-nav">
            <a href="#" class="back-link" onclick="closeProject()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                Back to ${currentPage === 'projects' ? 'Projects' : 'Work'}
            </a>
            <a href="#" class="external-link">
                Live Demo
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17l9.2-9.2M17 17V7H7" stroke="currentColor" stroke-width="1.5"/>
                </svg>
            </a>
        </nav>
        
        <div class="project-detail">
            <aside class="project-sidebar">
                <h1 class="project-detail-title">${project.title}</h1>
                <p class="project-detail-subtitle">${project.details.subtitle}</p>
                
                <div class="project-info">
                    <div class="info-item">
                        <span class="info-label">Date</span>
                        <span class="info-value">${project.date}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Category</span>
                        <span class="info-value">${project.category}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Tools</span>
                        <span class="info-value">${project.tools}</span>
                    </div>
                </div>
                
                <div class="contents">
                    <h3>Contents</h3>
                    <ul class="contents-list">
                        ${contentsList}
                    </ul>
                </div>
            </aside>
            
            <main class="project-main">
                <div class="hero-image">
                    ${project.title.toUpperCase()} PROJECT PREVIEW
                </div>
                
                ${sectionsHTML}
            </main>
        </div>
    `;

    return page;
}

// Open project (full page)
function openProject(project) {
    currentProject = project;

    // Hide current content
    if (currentPage === 'home') {
        document.querySelector('.main-layout').style.display = 'none';
    } else if (currentPage === 'projects') {
        document.getElementById('projectsPage').style.display = 'none';
    }

    // Show or create project page
    let projectPage = document.getElementById(`project-${project.id}`);
    if (!projectPage) {
        projectPage = createProjectPage(project);
        document.body.appendChild(projectPage);
    }

    projectPage.classList.add('active');
    window.scrollTo(0, 0);
}

// Close project
function closeProject() {
    if (currentProject) {
        const projectPage = document.getElementById(`project-${currentProject.id}`);

        if (projectPage) {
            projectPage.classList.remove('active');
        }

        // Show appropriate content
        if (currentPage === 'home') {
            document.querySelector('.main-layout').style.display = 'flex';
        } else if (currentPage === 'projects') {
            document.getElementById('projectsPage').style.display = 'block';
        }

        currentProject = null;
        window.scrollTo(0, 0);
    }
}

// Close panel (desktop split-pane)
function closePanel() {
    const panel = document.getElementById('articlePanel');
    const mainContent = document.querySelector('.main-content');
    panel.classList.remove('active');
    if (mainContent) mainContent.classList.remove('split-pane-active');
    currentProject = null;
}

// Filter and search functionality
function filterProjects() {
    const searchTerm = document.getElementById('projectSearch')?.value.toLowerCase() || '';
    const checkedCategories = Array.from(document.querySelectorAll('input[value*="Research"], input[value*="Vision"], input[value*="Infrastructure"]'))
        .filter(input => input.checked)
        .map(input => input.value);
    const checkedYears = Array.from(document.querySelectorAll('input[value="2024"], input[value="2023"]'))
        .filter(input => input.checked)
        .map(input => input.value);
    const checkedStatuses = Array.from(document.querySelectorAll('input[value*="Completed"], input[value*="Progress"]'))
        .filter(input => input.checked)
        .map(input => input.value);

    filteredProjects = projects.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm) ||
            project.description.toLowerCase().includes(searchTerm) ||
            project.tech.some(tech => tech.toLowerCase().includes(searchTerm));

        const matchesCategory = checkedCategories.length === 0 || checkedCategories.includes(project.category);
        const matchesYear = checkedYears.length === 0 || checkedYears.includes(project.year);
        const matchesStatus = checkedStatuses.length === 0 || checkedStatuses.includes(project.status);

        return matchesSearch && matchesCategory && matchesYear && matchesStatus;
    });

    loadProjectsList();
}

const everything = [...projects, ...experiences];

// Load projects for home page
function loadProjects() {
    const container = document.getElementById('projectsContainer');
    if (!container) return;

    container.innerHTML = '';
    projects.forEach(project => {
        const card = createProjectCard(project);
        card.onclick = () => handleProjectClick(project); // Use handleProjectClick
        container.appendChild(card);
    });
}

// Load work experiences for home page
function loadExperiences() {
    const container = document.getElementById('experienceContainer');
    if (!container) return;

    container.innerHTML = '';

    experiences.forEach(experience => {
        const card = createProjectCard(experience); // Reuse the same card template
        card.onclick = () => handleProjectClick(experience); // Use handleProjectClick
        container.appendChild(card);
    });
}

// Initialize image carousel
let currentImageIndex = 0;
let carouselInterval;

function initCarousel() {
    const imageWrapper = document.getElementById('carouselImageWrapper');
    const overlay = document.getElementById('imageOverlay');
    const overlayImage = document.getElementById('overlayImage');
    const overlayClose = document.getElementById('overlayClose');

    if (!imageWrapper) return;

    // Clear wrapper
    imageWrapper.innerHTML = '';

    // Create image elements
    shuffledCarouselImages.forEach((image, index) => {
        const imageElement = document.createElement('div');
        imageElement.className = 'carousel-image';
        if (index === 0) imageElement.classList.add('active');

        imageElement.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" loading="lazy">
        `;

        // Add click to expand - show the current active image, not this specific one
        imageElement.addEventListener('click', () => {
            const currentActiveImage = document.querySelector('.carousel-image.active img');
            if (currentActiveImage) {
                overlayImage.src = currentActiveImage.src;
                overlayImage.alt = currentActiveImage.alt;
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });

        imageWrapper.appendChild(imageElement);
    });

    // Set up overlay close
    overlayClose.addEventListener('click', closeOverlay);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeOverlay();
    });

    // ESC key to close overlay
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeOverlay();
        }
    });

    // Initialize nav carousel
    initNavCarousel();

    // Start auto-play
    startAutoPlay();

    // Pause on hover
    const carousel = document.getElementById('imageCarousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => {
            clearInterval(carouselInterval);
        });

        carousel.addEventListener('mouseleave', () => {
            startAutoPlay();
        });
    }

    // Set up scroll detection for nav carousel
    initScrollDetection();
}

function closeOverlay() {
    const overlay = document.getElementById('imageOverlay');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

function nextImage() {
    const images = document.querySelectorAll('.carousel-image');
    const navItems = document.querySelectorAll('.nav-carousel-item');

    // If we have main carousel images, use those (home page)
    if (images.length > 0) {
        // Remove active class from current image
        images[currentImageIndex].classList.remove('active');

        // Move to next image
        currentImageIndex = (currentImageIndex + 1) % images.length;

        // Add active class to new image
        images[currentImageIndex].classList.add('active');

        // Update nav carousel
        updateNavCarousel();
    }
    // If we only have nav carousel items (other pages), cycle those
    else if (navItems.length > 0) {
        // Remove active class from current nav item
        navItems[currentImageIndex].classList.remove('active');

        // Move to next image
        currentImageIndex = (currentImageIndex + 1) % navItems.length;

        // Add active class to new nav item
        navItems[currentImageIndex].classList.add('active');
    }

    // Update search highlight with new image colors
    setTimeout(updateSearchHighlight, 100);
}

// ----- Nav‑bar micro carousel -----
function initNavCarousel() {
    const navCarousel = document.getElementById('navCarousel');
    const navCarouselImage = document.getElementById('navCarouselImage');
    if (!navCarousel || !navCarouselImage) return;

    // Create fade transition elements for nav carousel
    navCarouselImage.innerHTML = '';
    shuffledCarouselImages.forEach((img, idx) => {
        const el = document.createElement('div');
        el.className = 'nav-carousel-item' + (idx === 0 ? ' active' : '');
        el.innerHTML = `<img src="${img.src}" alt="${img.alt}" loading="lazy">`;
        navCarouselImage.appendChild(el);
    });

    // Initialize currentImageIndex if not set
    if (typeof currentImageIndex === 'undefined') {
        currentImageIndex = 0;
    }

    navCarousel.addEventListener('click', () => {
        const mainCarousel = document.getElementById('imageCarousel');
        if (mainCarousel) {
            mainCarousel.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

function updateNavCarousel() {
    const navItems = document.querySelectorAll('.nav-carousel-item');
    if (!navItems.length) return;

    // Update nav carousel with fade transition
    navItems.forEach((item, idx) => {
        item.classList.toggle('active', idx === currentImageIndex);
    });

    // Update search highlight when nav carousel changes
    setTimeout(updateSearchHighlight, 100);
}

function initScrollDetection() {
    const navCarousel = document.getElementById('navCarousel');
    const navLinks = document.querySelector('.nav-links');
    const navCenter = document.querySelector('.nav-center');
    const mainCar = document.getElementById('imageCarousel');

    // If there's no main carousel (other pages), show nav carousel always and start auto-play
    if (!mainCar) {
        if (navCarousel && navLinks && navCenter) {
            navCarousel.classList.add('active');
            navLinks.classList.add('carousel-active');
            navCenter.classList.add('has-carousel');

            // Start auto-play for nav carousel on pages without main carousel
            startAutoPlay();
        }
        return;
    }

    if (!(navCarousel && navLinks && navCenter && mainCar)) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // main carousel ON‑screen → hide nav thumbnail
                navCarousel.classList.remove('active');
                navLinks.classList.remove('carousel-active');
                navCenter.classList.remove('has-carousel');
            } else {
                // main carousel OFF‑screen → show thumbnail in nav
                navCarousel.classList.add('active');
                navLinks.classList.add('carousel-active');
                navCenter.classList.add('has-carousel');
            }
        });
    }, { threshold: 0.15, rootMargin: '-50px 0px 0px 0px' });

    observer.observe(mainCar);
}

function startAutoPlay() {
    carouselInterval = setInterval(nextImage, 4000);
}

function resetAutoPlay() {
    clearInterval(carouselInterval);
    startAutoPlay();
}

// Load projects for projects page
function loadProjectsList() {
    const container = document.getElementById('projectsList');
    if (!container) return;

    container.innerHTML = '';

    if (filteredProjects.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: var(--spacing-2xl); color: var(--text-muted);">
                No projects found matching your criteria.
            </div>
        `;
        return;
    }

    filteredProjects.forEach(project => {
        const item = createProjectListItem(project);
        container.appendChild(item);
    });
}

// Initialize filters
function initFilters() {
    const filterInputs = document.querySelectorAll('.filter-option input[type="checkbox"]');
    const searchInput = document.getElementById('projectSearch');

    filterInputs.forEach(input => {
        input.addEventListener('change', filterProjects);
    });

    if (searchInput) {
        searchInput.addEventListener('input', filterProjects);
    }
}

// Smooth scrolling
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offset = 80;
        const elementPosition = section.offsetTop;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Update navigation active states for home page
function updateNavigation() {
    if (currentPage !== 'home') return;

    const sections = ['about', 'work', 'contact'];
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    if (link.getAttribute('href') === `#${id}`) {
                        // Don't override main navigation active states
                        if (!['#home', '#projects'].includes(link.getAttribute('href'))) {
                            link.classList.add('active');
                        }
                    } else if (!['#home', '#projects'].includes(link.getAttribute('href'))) {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-100px 0px'
    });

    sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) observer.observe(element);
    });
}

// Mobile menu toggle
function initMobileMenu() {
    const toggle = document.getElementById('mobileMenuToggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            // TODO: Implement mobile menu
            console.log('Mobile menu toggle clicked');
        });
    }
}

// Handle resize events
function handleResize() {
    const panel = document.getElementById('articlePanel');
    if (!panel) return; // Exit if panel doesn't exist (e.g., on projects page)

    // If we're on mobile and panel is open, close it and open full page instead
    if (!shouldShowSplitPane() && panel.classList.contains('active') && currentProject) {
        panel.classList.remove('active');
        openProject(currentProject);
    }

    // If we're on desktop and full page is open, close it and show in panel instead
    if (shouldShowSplitPane() && currentProject && currentPage === 'home') {
        const projectPage = document.getElementById(`project-${currentProject.id}`);
        if (projectPage && projectPage.classList.contains('active')) {
            closeProject();
            showProjectInPanel(currentProject);
        }
    }
}

// Custom cursor functionality
function initCustomCursor() {
    // Create cursor elements
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);

    // Mouse movement tracking - immediate response
    document.addEventListener('mousemove', (e) => {
        // Update both cursor and glow position immediately
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';

        // Sample colors and update glow
        updateGlowColor(e.target);
    });

    // Hover effects
    document.addEventListener('mouseover', (e) => {
        if (e.target.matches('a, button, .project-card, .carousel-image, .nav-link, .contact-link, .theme-toggle, .action-button')) {
            cursor.classList.add('hover');
        }
    });

    document.addEventListener('mouseout', (e) => {
        if (e.target.matches('a, button, .project-card, .carousel-image, .nav-link, .contact-link, .theme-toggle, .action-button')) {
            cursor.classList.remove('hover');
        }
    });

    // Click effects
    document.addEventListener('mousedown', () => {
        cursor.classList.add('click');
    });

    document.addEventListener('mouseup', () => {
        cursor.classList.remove('click');
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
        glow.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
        cursor.style.opacity = '1';
        glow.style.opacity = '1';
    });
}

// Color sampling and adaptive glow
function updateGlowColor(element) {
    const glow = document.querySelector('.cursor-glow');
    if (!glow) return;

    // Reset classes
    glow.classList.remove('warm', 'cool', 'vibrant', 'nature');

    // Different color themes based on element and position
    if (element.closest('.carousel-image, .profile-image')) {
        // Image areas - sample warm tones
        glow.classList.add('warm');
    } else if (element.closest('.project-card, .project-list-item')) {
        // Project areas - cool professional tones
        glow.classList.add('cool');
    } else if (element.closest('.nav-link, .contact-link')) {
        // Navigation - vibrant accent
        glow.classList.add('vibrant');
    } else if (element.closest('.about-section, .work-section')) {
        // Content areas - nature-inspired
        glow.classList.add('nature');
    }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    initNavigation();
    initMobileMenu();
    initCustomCursor();
    initNavCarousel();
    initScrollDetection();

    // Initialize enhanced personal features
    initEnhancedFeatures();

    // Check for admin mode
    checkAdminMode();

    // Determine page type and run appropriate functions
    const isHomePage = document.getElementById('projectsContainer') !== null;
    const isProjectsPage = document.getElementById('projectsByYear') !== null;

    if (isHomePage) {
        initFilters();
        loadProjects();
        loadExperiences();
        initCarousel();
        updateNavigation();

        // Add admin overlays if in admin mode (delay to ensure content is loaded)
        if (isAdminMode) {
            setTimeout(addAdminOverlays, 500);
        }
    } else if (isProjectsPage) {
        initProjectsPageFilters();
        loadProjectsByYear();

        // Initialize nav carousel for non-home pages
        initNavCarousel();

        // Add admin overlays if in admin mode (delay to ensure content is loaded)
        if (isAdminMode) {
            setTimeout(addAdminOverlays, 500);
        }
    } else {
        // For other pages (like detail.html), also initialize nav carousel
        initNavCarousel();
    }

    // Set initial active nav state  
    const homeLink = document.querySelector('.nav-link[href="index.html"]') || document.querySelector('.nav-link[href="#home"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }

    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
        console.log('Theme toggle event listener added'); // Debug log
    } else {
        console.log('Theme toggle button not found'); // Debug log
    }

    // Handle browser back button
    window.addEventListener('popstate', function (e) {
        if (currentProject) {
            closeProject();
        }
    });

    // Handle resize events
    window.addEventListener('resize', handleResize);

    // ESC key to close project/panel
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            if (currentProject) {
                closeProject();
            } else if (document.getElementById('articlePanel').classList.contains('active')) {
                closePanel();
            }
        }
    });
});

// ===== ENHANCED PERSONAL TOUCHES =====

// Personal philosophy quotes
const philosophyQuotes = [
    "Building tomorrow's solutions, one algorithm at a time",
    "Where curiosity meets code, innovation follows",
    "Transforming complex problems into elegant solutions",
    "At the intersection of AI and human potential",
    "Crafting technology that serves humanity",
    "From data to wisdom, through purposeful engineering",
    "Bridging the gap between what is and what could be",
    "Innovation through iteration, progress through persistence",
    "Code with conscience, build with purpose",
    "Turning computational power into positive impact"
];

let gradientColors = ['#4facfe', '#00f2fe'];

// Initialize enhanced features (search highlight animation)
function initEnhancedFeatures() {
    createSearchHighlight();
    initColorExtraction();
}

// ===== SEARCH HIGHLIGHT ANIMATION WITH COLOR EXTRACTION =====

function createSearchHighlight() {
    // Find the search message element
    const searchMessage = document.querySelector('.contact-search-message');
    if (!searchMessage) return;

    // Create the highlight element
    const highlight = document.createElement('div');
    highlight.className = 'search-highlight';
    highlight.id = 'searchHighlight';

    // Move the search message content into the highlight
    highlight.innerHTML = searchMessage.innerHTML;
    searchMessage.innerHTML = '';
    searchMessage.appendChild(highlight);

    // Add click handler to open Google search
    highlight.addEventListener('click', () => {
        window.open('https://www.google.com/search?q="devpatelio"', '_blank');
    });

    // Start color transitions
    updateSearchHighlight();
    setInterval(updateSearchHighlight, 2000); // Check more frequently
}

function updateSearchHighlight() {
    const highlight = document.getElementById('searchHighlight');
    const navHighlight = document.querySelector('.nav-highlight');
    if (!highlight && !navHighlight) return;

    // find the current visible image in either main or nav carousel
    const visible = document.querySelector('.carousel-image.active img') ||
        document.querySelector('.nav-carousel-item.active img') ||
        document.querySelector('.carousel-image img');

    // fallback subtle grey
    let bg = 'rgba(128,128,128,0.08)';
    let brd = 'rgba(128,128,128,0.20)';
    let gradA = '#4facfe';
    let gradB = '#00f2fe';

    if (visible && visible.complete && visible.naturalWidth > 0) {
        const cols = extractColorsFromImage(visible);          // returns up‑to‑two colours
        if (cols.length) {
            gradA = cols[0];
            gradB = cols[1] || cols[0];

            /* make an ultra‑light fill version of gradA */
            const rgb = gradA.match(/\d+/g).map(Number);      // "rgb(r,g,b)" → [r,g,b]
            const hsl = rgbToHsl(rgb[0], rgb[1], rgb[2]);     // existing helper
            const lite = hslToRgb(hsl[0], hsl[1] * 0.3, Math.max(hsl[2] * 0.85, 85));
            bg = `rgba(${lite.join(',')},0.08)`;
            brd = `rgba(${lite.join(',')},0.30)`;
        }
    }

    /* apply subtle background + border for default state */
    if (highlight) {
        highlight.style.backgroundColor = bg;
        highlight.style.borderColor = brd;
    }

    /* expose gradient colours for the hover rule */
    document.documentElement.style.setProperty('--search-grad-start', gradA);
    document.documentElement.style.setProperty('--search-grad-end', gradB);
}


// Helper functions for color conversion
function rgbToHsl(r, g, b) {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0;
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h * 360, s * 100, l * 100];
}

function hslToRgb(h, s, l) {
    h /= 360;
    s /= 100;
    l /= 100;

    const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    };

    let r, g, b;

    if (s === 0) {
        r = g = b = l;
    } else {
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [
        Math.round(r * 255),
        Math.round(g * 255),
        Math.round(b * 255)
    ];
}

function extractColorsFromImage(img) {
    // Try to extract actual colors from the image
    try {
        // Create a canvas and try to get image data
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Set canvas size
        canvas.width = 100;
        canvas.height = 100;

        // Try to draw the image
        ctx.drawImage(img, 0, 0, 100, 100);

        // Try to get image data
        const imageData = ctx.getImageData(0, 0, 100, 100);
        const data = imageData.data;

        // Sample colors from the image
        const colors = [];
        const step = 10; // Sample every 10th pixel

        for (let i = 0; i < data.length; i += step * 4) {
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            const a = data[i + 3];

            // Skip transparent pixels
            if (a < 128) continue;

            // Skip very dark or very light colors
            const brightness = (r + g + b) / 3;
            if (brightness < 30 || brightness > 220) continue;

            colors.push([r, g, b]);
        }

        if (colors.length > 0) {
            // Find the most common color
            const colorCounts = {};
            colors.forEach(color => {
                const key = `${Math.floor(color[0] / 20) * 20},${Math.floor(color[1] / 20) * 20},${Math.floor(color[2] / 20) * 20}`;
                colorCounts[key] = (colorCounts[key] || 0) + 1;
            });

            const sortedColors = Object.entries(colorCounts)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 2)
                .map(([color]) => {
                    const [r, g, b] = color.split(',').map(Number);
                    return `rgb(${r}, ${g}, ${b})`;
                });

            if (sortedColors.length >= 2) {
                return sortedColors;
            } else if (sortedColors.length === 1) {
                // Create a complementary color
                const [r, g, b] = sortedColors[0].match(/\d+/g).map(Number);
                const complementary = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
                return [sortedColors[0], complementary];
            }
        }

    } catch (error) {
        console.log('Canvas access failed, using fallback colors');
    }

    // Fallback: use filename-based colors that are more image-like
    const filename = img.src.split('/').pop().toLowerCase();

    // Create a more sophisticated color mapping based on image content hints
    let hash = 0;
    for (let i = 0; i < filename.length; i++) {
        const char = filename.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }

    // Use the hash to select from predefined natural color palettes
    const palettes = [
        // Warm sunset colors
        ['rgb(255, 140, 100)', 'rgb(255, 200, 150)'],
        // Cool blue tones
        ['rgb(100, 150, 255)', 'rgb(150, 200, 255)'],
        // Green nature tones
        ['rgb(100, 200, 100)', 'rgb(150, 255, 150)'],
        // Purple/blue tones
        ['rgb(150, 100, 255)', 'rgb(200, 150, 255)'],
        // Orange/red tones
        ['rgb(255, 100, 100)', 'rgb(255, 150, 100)'],
        // Teal/cyan tones
        ['rgb(100, 200, 200)', 'rgb(150, 255, 255)'],
        // Pink/rose tones
        ['rgb(255, 100, 200)', 'rgb(255, 150, 220)'],
        // Gold/yellow tones
        ['rgb(255, 200, 100)', 'rgb(255, 220, 150)']
    ];

    const paletteIndex = Math.abs(hash) % palettes.length;
    return palettes[paletteIndex];
}

function initColorExtraction() {
    // Monitor carousel image changes more effectively
    const observer = new MutationObserver(() => {
        setTimeout(updateSearchHighlight, 200); // Small delay to ensure image is loaded
    });

    const carouselWrapper = document.getElementById('carouselImageWrapper');
    if (carouselWrapper) {
        observer.observe(carouselWrapper, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['style', 'class']
        });
    }

    // Also listen for image load events
    document.addEventListener('load', (e) => {
        if (e.target.tagName === 'IMG' && e.target.closest('.carousel-image-wrapper')) {
            setTimeout(updateSearchHighlight, 100);
        }
    }, true);

    // Listen for carousel image class changes
    const carouselImages = document.querySelectorAll('.carousel-image');
    carouselImages.forEach(img => {
        observer.observe(img, {
            attributes: true,
            attributeFilter: ['class']
        });
    });
}


// ===== SIMPLE ADMIN FUNCTIONALITY =====

let isAdminMode = false;
const ADMIN_PASSWORD = '1104AInnov8!';

// Check for admin mode on page load
function checkAdminMode() {
    const urlParams = new URLSearchParams(window.location.search);
    const password = urlParams.get('admin');

    if (password === ADMIN_PASSWORD) {
        isAdminMode = true;
        showAdminControls();
    }
}

function showAdminControls() {
    // Add admin CSS if not already added
    if (!document.getElementById('admin-styles')) {
        const adminStyles = `
            <style id="admin-styles">
                .admin-controls {
                    position: fixed;
                    top: 80px;
                    right: 20px;
                    background: var(--card-bg);
                    border: 2px solid #ff6b6b;
                    border-radius: 8px;
                    padding: 10px;
                    font-size: 0.8rem;
                    color: #ff6b6b;
                    z-index: 1000;
                }
                
                .admin-btn {
                    background: #ff6b6b;
                    color: white;
                    border: none;
                    padding: 4px 8px;
                    border-radius: 4px;
                    font-size: 0.7rem;
                    cursor: pointer;
                    margin: 2px;
                    transition: all 0.2s;
                }
                
                .admin-btn:hover {
                    background: #ff5252;
                    transform: scale(1.05);
                }
                
                .admin-btn.delete {
                    background: #d32f2f;
                }
                
                .project-card.admin-mode,
                .project-list-item.admin-mode {
                    position: relative;
                    border: 1px dashed #ff6b6b;
                }
                
                .admin-overlay {
                    position: absolute;
                    top: 5px;
                    right: 5px;
                    display: flex;
                    gap: 4px;
                }
                
                .json-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 10000;
                }
                
                .json-editor {
                    background: var(--card-bg);
                    border-radius: 8px;
                    width: 90%;
                    max-width: 800px;
                    height: 80%;
                    display: flex;
                    flex-direction: column;
                    overflow: hidden;
                }
                
                .json-header {
                    padding: 20px;
                    border-bottom: 1px solid var(--border);
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .json-content {
                    flex: 1;
                    padding: 20px;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }
                
                .json-textarea {
                    flex: 1;
                    width: 100%;
                    padding: 15px;
                    border: 1px solid var(--border);
                    border-radius: 6px;
                    background: var(--bg-primary);
                    color: var(--text-primary);
                    font-family: 'Courier New', monospace;
                    font-size: 0.9rem;
                    resize: none;
                    white-space: pre;
                    overflow: auto;
                }
                
                .json-actions {
                    padding: 20px;
                    border-top: 1px solid var(--border);
                    display: flex;
                    gap: 10px;
                    justify-content: flex-end;
                }
                
                .json-btn {
                    padding: 10px 20px;
                    border: none;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 0.9rem;
                    transition: all 0.2s;
                }
                
                .json-btn.primary {
                    background: #4caf50;
                    color: white;
                }
                
                .json-btn.secondary {
                    background: var(--border);
                    color: var(--text-primary);
                }
                
                .json-btn:hover {
                    transform: translateY(-1px);
                }
            </style>
        `;
        document.head.insertAdjacentHTML('beforeend', adminStyles);
    }

    // Add admin indicator
    if (!document.getElementById('admin-indicator')) {
        const indicator = document.createElement('div');
        indicator.id = 'admin-indicator';
        indicator.className = 'admin-controls';
        indicator.innerHTML = '🔧 ADMIN MODE<br><small>Edit mode active</small>';
        document.body.appendChild(indicator);
    }

    // Add admin overlays to existing content
    addAdminOverlays();
}

function addAdminOverlays() {
    // Add overlays to project cards on home page
    document.querySelectorAll('.project-card').forEach((card, index) => {
        if (!card.querySelector('.admin-overlay')) {
            card.classList.add('admin-mode');
            const overlay = document.createElement('div');
            overlay.className = 'admin-overlay';
            overlay.innerHTML = `
                <button class="admin-btn" onclick="editItem('project', ${index})">Edit</button>
                <button class="admin-btn delete" onclick="deleteItem('project', ${index})">Del</button>
            `;
            card.appendChild(overlay);
        }
    });

    // Add overlays to experience cards on home page
    document.querySelectorAll('#experienceContainer .project-card').forEach((card, index) => {
        if (!card.querySelector('.admin-overlay')) {
            card.classList.add('admin-mode');
            const overlay = document.createElement('div');
            overlay.className = 'admin-overlay';
            overlay.innerHTML = `
                <button class="admin-btn" onclick="editItem('experience', ${index})">Edit</button>
                <button class="admin-btn delete" onclick="deleteItem('experience', ${index})">Del</button>
            `;
            card.appendChild(overlay);
        }
    });

    // Add overlays to project cards on projects page
    document.querySelectorAll('#projectsByYear .project-card').forEach((card, index) => {
        if (!card.querySelector('.admin-overlay')) {
            card.classList.add('admin-mode');
            const overlay = document.createElement('div');
            overlay.className = 'admin-overlay';
            overlay.innerHTML = `
                <button class="admin-btn" onclick="editProjectPageItem(${index})">Edit</button>
                <button class="admin-btn delete" onclick="deleteProjectPageItem(${index})">Del</button>
            `;
            card.appendChild(overlay);
        }
    });

    // Add create buttons
    addCreateButtons();
}

function addCreateButtons() {
    // Add create button to projects section on home page - positioned below section heading
    const projectsContainer = document.getElementById('projectsContainer');
    if (projectsContainer && !document.getElementById('create-project-btn')) {
        const createBtn = document.createElement('button');
        createBtn.id = 'create-project-btn';
        createBtn.className = 'admin-btn';
        createBtn.innerHTML = '+ New Project';
        createBtn.style.cssText = 'position: fixed; top: 300px; right: 20px; z-index: 100; background: #ff6b6b; padding: 8px 12px;';
        createBtn.onclick = () => createNewItem('project');
        document.body.appendChild(createBtn);
    }

    // Add create button to experiences section on home page - positioned lower
    const experienceContainer = document.getElementById('experienceContainer');
    if (experienceContainer && !document.getElementById('create-experience-btn')) {
        const createBtn = document.createElement('button');
        createBtn.id = 'create-experience-btn';
        createBtn.className = 'admin-btn';
        createBtn.innerHTML = '+ New Experience';
        createBtn.style.cssText = 'position: fixed; top: 340px; right: 20px; z-index: 100; background: #ff6b6b; padding: 8px 12px;';
        createBtn.onclick = () => createNewItem('experience');
        document.body.appendChild(createBtn);
    }

    // Add create button to projects page
    const projectsByYear = document.getElementById('projectsByYear');
    if (projectsByYear && !document.getElementById('create-project-page-btn')) {
        const createBtn = document.createElement('button');
        createBtn.id = 'create-project-page-btn';
        createBtn.className = 'admin-btn';
        createBtn.innerHTML = '+ New Project';
        createBtn.style.cssText = 'position: fixed; top: 120px; right: 20px; z-index: 100; background: #ff6b6b; padding: 8px 12px;';
        createBtn.onclick = () => createNewItem('project');
        document.body.appendChild(createBtn);
    }
}

function editItem(type, index) {
    const data = type === 'project' ? projects[index] : experiences[index];
    if (!data) return;

    showJSONEditor(type, data, index);
}

function editProjectPageItem(index) {
    // Find the actual project in the projects array by matching with displayed projects
    const displayedProjects = getFilteredProjectsForPage();
    const project = displayedProjects[index];
    const actualIndex = projects.findIndex(p => p.id === project.id);

    showJSONEditor('project', project, actualIndex);
}

function deleteItem(type, index) {
    const data = type === 'project' ? projects : experiences;
    const item = data[index];

    if (confirm(`Delete "${item.title}"? This cannot be undone.`)) {
        data.splice(index, 1);
        downloadUpdatedScript();
        location.reload(); // Refresh to show changes
    }
}

function deleteProjectPageItem(index) {
    const displayedProjects = getFilteredProjectsForPage();
    const project = displayedProjects[index];
    const actualIndex = projects.findIndex(p => p.id === project.id);

    deleteItem('project', actualIndex);
}

function createNewItem(type) {
    const template = type === 'project' ? {
        id: 'new-project-' + Date.now(),
        title: 'New Project',
        year: new Date().getFullYear().toString(),
        date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        category: 'AI Research',
        status: 'In Progress',
        location: 'Remote',
        description: 'Description of the new project',
        tech: ['Technology1', 'Technology2'],
        tools: 'Technology1, Technology2',
        logo: 'NP',
        details: {
            subtitle: 'Project subtitle',
            type: 'Project',
            year: new Date().getFullYear().toString(),
            sections: [
                {
                    id: 'overview',
                    title: 'Overview',
                    content: 'Project overview content here.'
                }
            ]
        }
    } : {
        id: 'new-experience-' + Date.now(),
        title: 'New Experience',
        year: new Date().getFullYear().toString(),
        date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
        category: 'Software Engineering',
        status: 'Current',
        location: 'Remote',
        description: 'Description of the new experience',
        tech: ['Technology1', 'Technology2'],
        tools: 'Technology1, Technology2',
        logo: 'NE',
        details: {
            subtitle: 'Role subtitle',
            type: 'Experience',
            year: new Date().getFullYear().toString(),
            sections: [
                {
                    id: 'overview',
                    title: 'Overview',
                    content: 'Experience overview content here.'
                }
            ]
        }
    };

    showJSONEditor(type, template, -1); // -1 indicates new item
}

function showJSONEditor(type, data, index) {
    const modal = document.createElement('div');
    modal.className = 'json-modal';
    modal.innerHTML = `
        <div class="json-editor">
            <div class="json-header">
                <h2>Edit ${type === 'project' ? 'Project' : 'Experience'}: ${data.title}</h2>
                <button class="admin-btn" onclick="closeJSONEditor()">×</button>
            </div>
            <div class="json-content">
                <p style="margin-bottom: 10px; color: var(--text-secondary);">
                    Edit the JSON below. Make sure to keep the structure valid.
                </p>
                <textarea id="json-textarea" class="json-textarea">${JSON.stringify(data, null, 4)}</textarea>
            </div>
            <div class="json-actions">
                <button class="json-btn secondary" onclick="closeJSONEditor()">Cancel</button>
                <button class="json-btn primary" onclick="saveJSONChanges('${type}', ${index})">Save Changes</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Focus the textarea
    setTimeout(() => {
        document.getElementById('json-textarea').focus();
    }, 100);
}

function closeJSONEditor() {
    const modal = document.querySelector('.json-modal');
    if (modal) {
        modal.remove();
    }
}

function saveJSONChanges(type, index) {
    const textarea = document.getElementById('json-textarea');

    try {
        const updatedData = JSON.parse(textarea.value);

        if (index === -1) {
            // New item
            if (type === 'project') {
                projects.push(updatedData);
            } else {
                experiences.push(updatedData);
            }
        } else {
            // Update existing item
            if (type === 'project') {
                projects[index] = updatedData;
            } else {
                experiences[index] = updatedData;
            }
        }

        // Download updated script.js
        downloadUpdatedScript();

        closeJSONEditor();

        // Show success message
        alert('Changes saved! The updated script.js file has been downloaded. Replace your current script.js file with the downloaded version and refresh the page.');

    } catch (error) {
        alert('Invalid JSON! Please check your syntax and try again.\n\nError: ' + error.message);
    }
}

function downloadUpdatedScript() {
    // Read current script.js and update the data arrays
    fetch('script.js')
        .then(response => response.text())
        .then(scriptContent => {
            // Replace projects array
            const projectsRegex = /const projects = \[[\s\S]*?\];/;
            const newProjectsString = `const projects = ${JSON.stringify(projects, null, 4)};`;
            scriptContent = scriptContent.replace(projectsRegex, newProjectsString);

            // Replace experiences array
            const experiencesRegex = /const experiences = \[[\s\S]*?\];/;
            const newExperiencesString = `const experiences = ${JSON.stringify(experiences, null, 4)};`;
            scriptContent = scriptContent.replace(experiencesRegex, newExperiencesString);

            // Download the updated file
            const blob = new Blob([scriptContent], { type: 'text/javascript' });
            const url = URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = url;
            a.download = 'script.js';
            a.style.display = 'none';

            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);

            URL.revokeObjectURL(url);
        })
        .catch(error => {
            console.error('Error updating script:', error);
            alert('Error downloading updated script. Check console for details.');
        });
}

function getFilteredProjectsForPage() {
    // This should match the filtering logic used on the projects page
    const categoryFilter = document.getElementById('categoryFilter')?.value || 'all';
    const yearFilter = document.getElementById('yearFilter')?.value || 'all';

    return projects.filter(project => {
        const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter;
        const matchesYear = yearFilter === 'all' || project.year === yearFilter;
        return matchesCategory && matchesYear;
    });
}

// ===== PROJECTS PAGE FUNCTIONALITY =====

// Truncate text to specified character limit
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

// Create project card for projects page (using unified data structure)
function createProjectCardForProjectsPage(project) {
    const card = document.createElement('div');
    card.className = 'project-card';

    // Use the unified detail.html system
    const linkUrl = `detail.html?type=project&id=${project.id}`;
    card.onclick = () => window.location.href = linkUrl;

    const truncatedTitle = truncateText(project.title, 60);
    const truncatedDescription = truncateText(project.description, 120);

    card.innerHTML = `
        <div class="project-image">
            ${project.card_image ?
            `<img src="${project.card_image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">` :
            `<span class="project-image-text">${project.category}</span>`
        }
        </div>
        <div class="project-content">
            <div class="project-header">
                <h3 class="project-title">${truncatedTitle}</h3>
                <span class="project-year">${project.year}</span>
            </div>
            <p class="project-description">${truncatedDescription}</p>
            <div class="project-tech">
                ${project.tech.slice(0, 3).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
    `;

    return card;
}

// Filter functionality for projects page
function filterProjectsPage() {
    const categoryFilter = document.getElementById('categoryFilter')?.value || 'all';
    const yearFilter = document.getElementById('yearFilter')?.value || 'all';

    const filteredProjects = projects.filter(project => {
        const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter;
        const matchesYear = yearFilter === 'all' || project.year === yearFilter;

        return matchesCategory && matchesYear;
    });

    loadProjectsByYear(filteredProjects);
}

// Load projects grouped by year for projects page
function loadProjectsByYear(filteredProjects = projects) {
    const container = document.getElementById('projectsByYear');
    if (!container) return;

    container.innerHTML = '';

    if (filteredProjects.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: var(--spacing-2xl); color: var(--text-muted);">
                No projects found matching your criteria.
            </div>
        `;
        return;
    }

    // Group projects by year
    const projectsByYear = {};
    filteredProjects.forEach(project => {
        if (!projectsByYear[project.year]) {
            projectsByYear[project.year] = [];
        }
        projectsByYear[project.year].push(project);
    });

    // Sort years in descending order
    const sortedYears = Object.keys(projectsByYear).sort((a, b) => b - a);

    // Create sections for each year
    sortedYears.forEach(year => {
        const yearSection = document.createElement('div');
        yearSection.className = 'year-section';

        const yearHeader = document.createElement('h2');
        yearHeader.className = 'year-header';
        yearHeader.textContent = year;
        yearSection.appendChild(yearHeader);

        const projectsGrid = document.createElement('div');
        projectsGrid.className = 'projects-grid';

        projectsByYear[year].forEach(project => {
            const card = createProjectCardForProjectsPage(project);
            projectsGrid.appendChild(card);
        });

        yearSection.appendChild(projectsGrid);
        container.appendChild(yearSection);
    });
}

// Initialize filters for projects page
function initProjectsPageFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const yearFilter = document.getElementById('yearFilter');

    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProjectsPage);
    }

    if (yearFilter) {
        yearFilter.addEventListener('change', filterProjectsPage);
    }
}

// Code block copy functionality
function copyCode(button) {
    const codeBlock = button.closest('.code-block');
    const codeContent = codeBlock.querySelector('code').textContent;

    navigator.clipboard.writeText(codeContent).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.color = 'var(--accent-green)';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.color = '';
        }, 2000);
    }).catch(() => {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = codeContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    });
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        projects,
        openProject,
        closeProject,
        showProjectInPanel,
        showHomePage,
        showProjectsPage
    };
}