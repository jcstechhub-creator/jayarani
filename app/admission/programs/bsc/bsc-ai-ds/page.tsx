import CoursePage from '@/app/components/CoursePage'
import React from 'react'
import { pageImages } from '@/data/image'
function page() {
    return (
        <>
            <CoursePage
                title="B.Sc. Computer Science (AI & DS)"
                code="Bachelor of Science in Artificial Intelligence & Data Science"
                duration="3 Years"
                seats="50"
                eligibility="10+2 Pass (Mathematics / Computer Science / Statistics Stream)"
                
                                        image={pageImages.adminSecretary}
                content={{
                    objectives: [
                        "Designing intelligent systems using Deep Learning and Neural Network architectures.",
                        "Analyzing massive datasets to extract actionable business insights and trends.",
                        "Mastering predictive modeling and statistical analysis using Python and R.",
                        "Developing autonomous solutions and NLP (Natural Language Processing) applications."
                    ],
                    vision: "To create data-driven innovators who solve complex global challenges through ethical AI and transformative data insights.",
                    mission: [
                        "Providing a rigorous mathematical and computational foundation for AI.",
                        "Fostering industry-ready skills through real-world data science projects.",
                        "Encouraging ethical practices in data privacy and algorithmic fairness."
                    ],
                    features: [
                        "AI Innovation Lab: High-compute GPU clusters (NVIDIA) for training complex ML models.",
                        "Big Data Sandbox: Environments for hands-on experience with Hadoop, Spark, and NoSQL databases.",
                        "Data Visualization Studio: Mastering tools like Tableau, PowerBI, and D3.js for storytelling with data.",
                        "Robotics & Automation Zone: Integration of AI algorithms with hardware for autonomous systems.",
                        "Kaggle Community: A dedicated wing for participating in global data science competitions."
                    ],
                    blendedLearning: "Our 'Insight-First' pedagogy combines theory with intense practicals. Students engage in 'Data-thons', use Jupyter Notebooks for collaborative research, and work on live datasets sourced from healthcare, finance, and e-commerce sectors.",
                    activities: [
                        "Data-Nexus: Annual symposium focused on Emerging Trends in AI & Machine Learning.",
                        "Algo-Trade Challenge: Building AI bots for stock market prediction and financial analysis.",
                        "AI for Social Good: Developing solutions for environmental and social issues using Data Science.",
                        "Workshops on Generative AI (LLMs), Computer Vision, and Reinforcement Learning."
                    ],
                    addOnCourses: [
                        "Deep Learning Specialization (TensorFlow/PyTorch)",
                        "Data Engineering with SQL & Apache Spark",
                        "Natural Language Processing (NLP) & GenAI",
                        "Business Analytics & Predictive Modeling"
                    ],
                    benefits: [
                        "High Demand Expertise: Enter the most sought-after job role of the 21st century.",
                        "Data-Driven Leadership: Ability to lead corporate strategy using predictive analytics.",
                        "Global Opportunities: High demand for Data Scientists in the US, Europe, and Asia-Pacific.",
                        "Innovation Edge: Build next-gen AI like chatbots, recommendation engines, and self-driving logic."
                    ],
                    empowerment: [
                        "Career Roles: Machine Learning Engineer, Data Scientist, AI Consultant, or Business Intelligence Developer.",
                        "Academic Path: Direct eligibility for M.Sc. Data Science, MCA, or MS in Artificial Intelligence.",
                        "Research Ready: Foundation to pursue Ph.D. in specialized fields like Robotics or Quantum AI.",
                        "Placement Focus: Targeted training for analytics firms and tech giants like Fractal, Mu Sigma, Meta, and Adobe."
                    ]
                }}
            />
        </>
    )
}

export default page