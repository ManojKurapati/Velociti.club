"use client";
import React from "react";
import { motion } from "framer-motion";
import { HeartPulse, TrendingUp, ShoppingBag, Zap, Brain, Shield, Users, LineChart, Truck, Leaf } from "lucide-react";

interface UseCaseProps {
    title: string;
    description: string;
    icon?: React.ElementType;
}

const IndustrySection = ({ title, icon: Icon, useCases, delay = 0 }: { title: string; icon: React.ElementType; useCases: UseCaseProps[]; delay?: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay }}
            className="w-full bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-100">
                <div className="p-3 bg-gray-50 rounded-2xl text-gray-900">
                    <Icon className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {useCases.map((useCase, index) => (
                    <div key={index} className="space-y-3">
                        <div className="flex items-center gap-2 text-blue-600">
                            {useCase.icon && <useCase.icon className="w-5 h-5" />}
                            <h3 className="font-semibold text-lg">{useCase.title}</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                            {useCase.description}
                        </p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default function KnowledgePage() {
    return (
        <main className="min-h-screen pt-24 pb-20 px-4 md:px-8 bg-gray-50 text-gray-900 overflow-x-hidden">
            <div className="max-w-6xl mx-auto space-y-16">

                {/* Hero */}
                <section className="text-center space-y-6 pt-12 pb-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900"
                    >
                        Knowledge is Power
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    >
                        Unlocking the potential of Artificial Intelligence across industries.
                        Real-world applications driving efficiency, innovation, and growth.
                    </motion.p>
                </section>

                <div className="space-y-8">
                    {/* Healthcare */}
                    <IndustrySection
                        title="Healthcare"
                        icon={HeartPulse}
                        useCases={[
                            {
                                title: "Predictive Diagnostics",
                                description: "AI algorithms analyze medical imaging and patient history to detect anomalies earlier and more accurately than traditional methods.",
                                icon: Brain
                            },
                            {
                                title: "Personalized Medicine",
                                description: "Tailoring treatment plans and drug dosages to individual genetic profiles for maximum efficacy and minimal side effects.",
                                icon: Users
                            },
                            {
                                title: "Drug Discovery",
                                description: "Accelerating the identification of potential drug candidates by simulating molecular interactions, saving years of research time.",
                                icon: Zap
                            }
                        ]}
                    />

                    {/* Finance */}
                    <IndustrySection
                        title="Finance"
                        icon={TrendingUp}
                        delay={0.1}
                        useCases={[
                            {
                                title: "Fraud Detection",
                                description: "Real-time analysis of transaction patterns to identify and block suspicious activities instantly, protecting assets.",
                                icon: Shield
                            },
                            {
                                title: "Algorithmic Trading",
                                description: "High-frequency trading systems that execute orders at optimal prices based on nanosecond market data analysis.",
                                icon: LineChart
                            },
                            {
                                title: "Financial Assistants",
                                description: "Hyper-personalized banking assistants that analyze spending habits to provide tailored saving and investment advice.",
                                icon: Users
                            }
                        ]}
                    />

                    {/* Retail */}
                    <IndustrySection
                        title="Retail & E-commerce"
                        icon={ShoppingBag}
                        delay={0.2}
                        useCases={[
                            {
                                title: "Recommendation Engines",
                                description: "Deep learning models that predict user references to suggest products, significantly increasing conversion rates.",
                                icon: Brain
                            },
                            {
                                title: "Supply Chain",
                                description: "Optimizing inventory levels and logistics routes using predictive demand modeling to reduce waste and costs.",
                                icon: Truck
                            },
                            {
                                title: "Virtual Assistants",
                                description: "Always-on shopping assistants that guide customers through product selection and answer queries in natural language.",
                                icon: Users
                            }
                        ]}
                    />

                    {/* Energy */}
                    <IndustrySection
                        title="Energy & Sustainability"
                        icon={Zap}
                        delay={0.3}
                        useCases={[
                            {
                                title: "Smart Grid Optimization",
                                description: "Balancing energy supply and demand in real-time to prevent outages and integrate renewable sources efficiently.",
                                icon: LineChart
                            },
                            {
                                title: "Predictive Maintenance",
                                description: "Monitoring infrastructure health to predict failures before they happen, ensuring uninterrupted power generation.",
                                icon: Shield
                            },
                            {
                                title: "Renewable Forecasting",
                                description: "Accurately predicting solar and wind output based on weather patterns to optimize energy storage and distribution.",
                                icon: Leaf
                            }
                        ]}
                    />
                </div>
            </div>
        </main>
    );
}
