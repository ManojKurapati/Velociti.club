"use client";
import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, FileText, Settings, HeartPulse, ShoppingBag, TrendingUp, Shield, BookOpen, Truck, Briefcase, Users, Zap } from "lucide-react";

const BubbleCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
    return (
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay
            }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
};

interface UseCaseProps {
    title: string;
    description: string;
    icon?: React.ElementType;
}

const CapabilitySection = ({
    title,
    description,
    icon: Icon,
    useCases,
    delay = 0,
    gradientFrom,
    gradientTo,
    iconBg,
    iconColor
}: {
    title: string;
    description: string;
    icon: React.ElementType;
    useCases: UseCaseProps[];
    delay?: number;
    gradientFrom: string;
    gradientTo: string;
    iconBg: string;
    iconColor: string;
}) => {
    return (
        <BubbleCard delay={delay}>
            <div className={`p-8 md:p-12 rounded-[2rem] bg-white dark:bg-[#0B0F19] border border-gray-100 dark:border-white/10 shadow-lg relative overflow-hidden group`}>

                {/* Subtle Background Gradient Glow */}
                <div className={`absolute -inset-10 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-700 blur-2xl pointer-events-none`} />

                <div className="flex flex-col md:flex-row gap-8 relative z-10">
                    {/* Header Area */}
                    <div className="md:w-1/3 flex flex-col items-start gap-4 border-b md:border-b-0 md:border-r border-gray-100 dark:border-white/10 pb-6 md:pb-0 md:pr-8">
                        <div className={`p-4 rounded-full ${iconBg} ${iconColor} shadow-inner`}>
                            <Icon className="w-10 h-10" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">{title}</h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                                {description}
                            </p>
                        </div>
                    </div>

                    {/* Use Cases Area */}
                    <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
                        {useCases.map((useCase, index) => (
                            <div key={index} className="p-5 rounded-xl bg-gray-50/50 dark:bg-white/5 border border-gray-100 dark:border-transparent hover:border-gray-200 dark:hover:border-white/10 transition-colors">
                                <div className={`flex items-center gap-3 mb-3 ${iconColor}`}>
                                    {useCase.icon && <useCase.icon className="w-5 h-5 flex-shrink-0" />}
                                    <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{useCase.title}</h3>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                    {useCase.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </BubbleCard>
    );
};

export default function AIfyPage() {
    return (
        <main className="min-h-screen pt-24 pb-20 px-4 md:px-8 bg-gray-50 dark:bg-midnight overflow-x-hidden">
            <div className="max-w-6xl mx-auto space-y-16">

                {/* Hero Section */}
                <section className="text-center space-y-6 pt-12 pb-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full border border-neon-blue/30 bg-neon-blue/5 backdrop-blur-sm"
                    >
                        <Zap className="w-4 h-4 text-neon-blue" />
                        <span className="text-neon-blue text-sm uppercase tracking-widest font-medium">Enterprise Solutions</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-gray-400 leading-[1.1]"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple text-glow-blue dark:text-glow-none">AI-fy</span> Your Enterprise
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
                    >
                        Seamlessly integrate state-of-the-art Voice Agents, secure RAG systems, and intelligent Workflow Automation to transform your operations.
                    </motion.p>
                </section>

                <div className="space-y-12">
                    {/* Voice Agents */}
                    <CapabilitySection
                        title="Voice Agents"
                        description="Deploy 24/7 autonomous voice assistants capable of natural, context-aware conversations over phone lines or web interfaces."
                        icon={PhoneCall}
                        gradientFrom="from-blue-400"
                        gradientTo="to-cyan-400"
                        iconBg="bg-blue-50 dark:bg-blue-900/20"
                        iconColor="text-blue-600 dark:text-neon-blue"
                        delay={0.1}
                        useCases={[
                            {
                                title: "Healthcare",
                                description: "Automated patient triage, managing inbound appointment scheduling, and providing post-discharge follow-up calls.",
                                icon: HeartPulse
                            },
                            {
                                title: "Retail & Support",
                                description: "Handling tier-1 customer support, order status lookups, and processing returns without human intervention.",
                                icon: ShoppingBag
                            },
                            {
                                title: "Finance & Banking",
                                description: "Securely guiding new clients through onboarding workflows and answering account FAQs.",
                                icon: Shield
                            },
                            {
                                title: "Real Estate",
                                description: "Qualifying leads, scheduling property viewings, and answering initial property inquiries dynamically.",
                                icon: Briefcase
                            }
                        ]}
                    />

                    {/* RAG Systems */}
                    <CapabilitySection
                        title="RAG Systems"
                        description="Retrieval-Augmented Generation allows your team to securely chat with and extract insights from isolated proprietary enterprise data."
                        icon={FileText}
                        gradientFrom="from-purple-400"
                        gradientTo="to-pink-400"
                        iconBg="bg-purple-50 dark:bg-purple-900/20"
                        iconColor="text-purple-600 dark:text-neon-purple"
                        delay={0.2}
                        useCases={[
                            {
                                title: "Legal & Compliance",
                                description: "Instantly search and analyze thousands of contracts to find specific clauses, terms, and compliance risks.",
                                icon: Shield
                            },
                            {
                                title: "Healthcare & Pharma",
                                description: "Assisting doctors by synthesizing complex medical histories or querying vast clinical trial databases.",
                                icon: HeartPulse
                            },
                            {
                                title: "Engineering",
                                description: "Conversational interfaces for field technicians to query dense technical manuals and schematics on the go.",
                                icon: Briefcase
                            },
                            {
                                title: "Academia & Research",
                                description: "Synthesizing research papers and literature reviews across massive institutional repositories.",
                                icon: BookOpen
                            }
                        ]}
                    />

                    {/* Workflow Automation */}
                    <CapabilitySection
                        title="Workflow Automation"
                        description="Intelligent AI agents that orchestrate complex, multi-step processes across your existing software ecosystem."
                        icon={Settings}
                        gradientFrom="from-emerald-400"
                        gradientTo="to-teal-400"
                        iconBg="bg-emerald-50 dark:bg-emerald-900/20"
                        iconColor="text-emerald-600 dark:text-emerald-400"
                        delay={0.3}
                        useCases={[
                            {
                                title: "Logistics & Supply Chain",
                                description: "Automating inventory reordering, dynamic route optimization, and supplier communication based on predictive models.",
                                icon: Truck
                            },
                            {
                                title: "Finance & Operations",
                                description: "End-to-end automation of invoice processing, expense approvals, and financial report generation.",
                                icon: TrendingUp
                            },
                            {
                                title: "Human Resources",
                                description: "Automated resume parsing, initial candidate screening via chat, and streamlined employee onboarding flows.",
                                icon: Users
                            },
                            {
                                title: "Marketing & Sales",
                                description: "Triggering personalized email campaigns based on AI-scored lead behavior and CRM data updates.",
                                icon: Zap
                            }
                        ]}
                    />
                </div>
            </div>
        </main>
    );
}
